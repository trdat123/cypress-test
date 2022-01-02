/// <reference types="cypress" />

describe("filter should work correctly", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
    cy.url().should("contain", "/signin");

    const userInfo = {
      username: "Katharina_Bernier",
      password: "s3cret",
      ammount: "20",
      note: "For dinner",
    };

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

  it("using arrow keys", () => {
    cy.get('[data-test="app-name-logo"]').find("a").click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test="transaction-list-filter-amount-range-button"]').click({
      force: true,
    });

    const currentValue = 100;
    const targetValue = 30;
    const increment = 500;
    const steps = (currentValue - targetValue) / increment;
    const arrows = "{rightarrow}".repeat(30);

    cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
      .last()
      .should("have.attr", "aria-valuenow", 100)
      .type(arrows);

    cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
      .last()
      .should("have.attr", "aria-valuenow", 30);
  });
});
