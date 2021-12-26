/// <reference types="cypress" />
describe('login with unregister account', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('login with unregister account', () => {
        cy.url('https://www.phptravels.net').should('include', '/signin')

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