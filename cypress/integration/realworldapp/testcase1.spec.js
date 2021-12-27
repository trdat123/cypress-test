/// <reference types="cypress" />
describe('login with unregister account', () => {
    it('login with unregister account', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        //login
        const userInfo = {
            username: 'abc123',
            password: '123456'
        }
        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        //verfiy
        cy.get('.MuiAlert-message').should('contain.text', 'Username or password is invalid')
    })
})