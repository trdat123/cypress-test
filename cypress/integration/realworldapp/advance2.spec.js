/// <reference types="cypress" />

describe("New transaction payment, check for alert msg, account balance in left bar, and transaction history", function () {
  const userInfo = {
    name: "Edgar Johns",
    username: "Katharina_Bernier",
    password: "s3cret",
    ammount: "20",
    note: "For dinner",
  };

  const receiverName = "Arely Kertzmann";

  beforeEach(function () {
    cy.visit("http://localhost:3000");
    cy.url().should("contain", "/signin");

    //login
    cy.get("#username")
      .click()
      .type(userInfo.username)
      .should("have.value", userInfo.username);

    cy.get("#password")
      .click()
      .type(userInfo.password)
      .should("have.value", userInfo.password);

    cy.get('[data-test="signin-submit"]')
      .should("contain.text", "Sign In")
      .click();
  });

  it("navigates to the new transaction form, selects a user and submits a transaction payment", function () {
    const payment = {
      amount: "1",
      description: "Thanks for the night wtf lol xd",
    };

    cy.get('[data-test="nav-top-new-transaction"]').click();

    cy.get('[data-test="user-list-search-input"]').type(receiverName, {
      force: true,
    });

    cy.get("ul li:first")
      .should("contain", receiverName)
      .click({ force: true });

    cy.get("#amount").type(payment.amount);
    cy.get("#transaction-create-description-input").type(payment.description);
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-success"]')
      .should("be.visible")
      .and("have.text", "Transaction Submitted!");

    cy.get('[data-test="sidenav-user-balance"]')
      .invoke("text")
      .then((balance) => {
        let currentBalance = Number(balance.replace(/[^0-9.-]+/g, ""));
        let computedBalance = currentBalance - payment.amount;

        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        let formattedBalance = formatter.format(computedBalance);

        cy.get('[data-test="sidenav-user-balance"]').should(
          "contain",
          formattedBalance
        );
      });

    cy.get('[data-test="app-name-logo"]').find("a").click();
    cy.get('[data-test="nav-personal-tab"]')
      .click()
      .should("have.class", "Mui-selected");

    cy.get('[data-test="transaction-list"]')
      .find("p")
      .should("contain", `${userInfo.name} paid ${receiverName}`);

    cy.get('[data-test="alert-bar-success"]').should("not.exist");
  });
});
