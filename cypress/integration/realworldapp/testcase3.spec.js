/// <reference types="cypress" />
describe('signup an account with missing field', () => {
    it('signup an account with missing field', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')
        cy.get('[data-test="signup"]').should('contain.text', 'Sign Up')
        .click()

        //Sign up
        cy.url().should('contain', '/signup')
        cy.get('#firstName').click()
        .type('qwer')
        .should('have.value', 'qwer')

        cy.get('#lastName').click()

        cy.get('#username').click()
        .type('user2')
        .should('have.value', 'user2')

        cy.get('#password').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('#confirmPassword').click()
        .type('123456')
        .should('have.value', '123456')

        //verify
        cy.get('#lastName-helper-text').should('contain.text', "Last Name is required")
        cy.get('[data-test="signup-submit"]').should('be.disabled')
        
    })
})