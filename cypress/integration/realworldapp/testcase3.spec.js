/// <reference types="cypress" />
describe('signup an account with missing field', () => {
    it('signup an account with missing field', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')
        cy.get('[data-test="signup"]').should('contain.text', 'Sign Up')
        .click()

        const userInfo = {
            firstName: 'qwer',
            username: 'user2',
            password: '123456',
            cPassword: '123456'
        }
        //Sign up
        cy.url().should('contain', '/signup')
        cy.get('#firstName').click()
        .type(userInfo.firstName)
        .should('have.value', userInfo.firstName)

        cy.get('#lastName').click()

        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        cy.get('#confirmPassword').click()
        .type(userInfo.cPassword)
        .should('have.value', userInfo.cPassword)

        //verify
        cy.get('#lastName-helper-text').should('contain.text', "Last Name is required")
        cy.get('[data-test="signup-submit"]').should('be.disabled')
        
    })
})