/// <reference types="cypress" />

describe("redirect unauthenticated user", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should redirect unauthenticated user to signin page", function () {
    cy.visit("http://localhost:3000/personal");
    cy.location("pathname").should("equal", "/signin");
  });
});
