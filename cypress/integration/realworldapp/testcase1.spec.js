/// <reference types="cypress" />
describe('login with unregister account', () => {
    it('login with unregister account', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        //login
        cy.get('#username').click()
        .type('abc123')
        .should('have.value', 'abc123')

        cy.get('#password').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        //verfiy
        cy.get('.MuiAlert-message').should('contain.text', 'Username or password is invalid')
    })
})