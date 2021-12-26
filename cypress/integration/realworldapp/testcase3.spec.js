/// <reference types="cypress" />
describe('signup an account with missing field', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('signup an account with missing field', () => {
        cy.url('https://www.phptravels.net').should('include', '/signin')
        cy.get('[data-test="signup"]').should('contain.text', 'Sign Up')
        .click()

        //Sign up
        cy.url('https://www.phptravels.net').should('include', '/signup')
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