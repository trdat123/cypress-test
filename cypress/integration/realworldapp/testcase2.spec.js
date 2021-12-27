/// <reference types="cypress" />
describe('signup an account', () => {
    it('signup an account', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')
        cy.get('[data-test="signup"]').should('contain.text', 'Sign Up')
        .click()

        //Sign up
        cy.url().should('contain', '/signup')
        cy.get('#firstName').click()
        .type('duy')
        .should('have.value', 'duy')

        cy.get('#lastName').click()
        .type('le')
        .should('have.value', 'le')

        cy.get('#username').click()
        .type('user1')
        .should('have.value', 'user1')

        cy.get('#password').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('#confirmPassword').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('[data-test="signup-submit"]').should('contain.text', 'Sign Up')
        .click()

        //Login
        cy.url().should('contain', '/signin')
        cy.get('#username').click()
        .type('user1')
        .should('have.value', 'user1')

        cy.get('#password').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        //verify
        cy.url().should('contain', '/')
        cy.get('[data-test="user-onboarding-dialog-title"]').should('contain.text', 'Get Started with Real World App')
    })
})