/// <reference types="cypress" />

describe("notification section", function () {
  const userInfo = {
    name: "Edgar Johns",
    username: "Katharina_Bernier",
    password: "s3cret",
    ammount: "20",
    note: "For dinner",
  };

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

  it("test like button and notification update correctly", () => {
    cy.get('[data-test="app-name-logo"]').find("a").click();
    cy.get('[data-test="nav-personal-tab"]').click();

    cy.get('[data-test^="transaction-item"]').first().click({ force: true });
    cy.get('[data-test^="transaction-comment-input"]').type("noice");
    cy.get('[data-test^="transaction-comment-input"]').type("{enter}");

    cy.get('[data-test="sidenav-notifications"]').click();
    cy.get('[data-test="notifications-list"]')
      .first()
      .should("contain", `${userInfo.name} commented on a transaction.`);
  });
});
