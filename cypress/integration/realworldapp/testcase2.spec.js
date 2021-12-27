/// <reference types="cypress" />
describe('signup an account', () => {
    it('signup an account', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')
        cy.get('[data-test="signup"]').should('contain.text', 'Sign Up')
        .click()

        const userInfo = {
            firstName: 'duy',
            lastName: 'le',
            username: 'user1',
            password: '123456',
            cPassword: '123456'
        }
        //Sign up
        cy.url().should('contain', '/signup')
        cy.get('#firstName').click()
        .type(userInfo.firstName)
        .should('have.value', userInfo.firstName)

        cy.get('#lastName').click()
        .type(userInfo.lastName)
        .should('have.value', userInfo.lastName)

        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        cy.get('#confirmPassword').click()
        .type(userInfo.cPassword)
        .should('have.value', userInfo.cPassword)

        cy.get('[data-test="signup-submit"]').should('contain.text', 'Sign Up')
        .click()

        //Login
        cy.url().should('contain', '/signin')
        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        //verify
        cy.url().should('contain', '/')
        cy.get('[data-test="user-onboarding-dialog-title"]').should('contain.text', 'Get Started with Real World App')
    })
})