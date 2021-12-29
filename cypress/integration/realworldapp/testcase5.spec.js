/// <reference types="cypress" />
describe('user setting error when let missing input field', () => {
    it('user setting error when let missing input field', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        const userInfo = {
            username: 'Katharina_Bernier',
            password: 's3cret',
            fName: 'duy',           
        }
        //login
        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        
        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        cy.get('[data-test="sidenav-user-settings"]').should('contain.text', 'My Account')
        .click()
        
        cy.get('[data-test="user-settings-firstName-input"]').click().clear()

        cy.get('[data-test="user-settings-lastName-input"]').click().clear()

        cy.get('[data-test="user-settings-email-input"]').click().clear()

        cy.get('[data-test="user-settings-phoneNumber-input"]').click().clear()

        cy.get('#user-settings-firstName-input-helper-text').should('have.text', 'Enter a first name')
        cy.get('#user-settings-lastName-input-helper-text').should('have.text', 'Enter a last name')
        cy.get('#user-settings-email-input-helper-text').should('have.text', 'Enter an email address')
        cy.get('#user-settings-phoneNumber-input-helper-text').should('have.text', 'Enter a phone number')
        cy.get('[data-test="user-settings-submit"]').should('contain.text', 'Save')
        .should("be.disabled")
 
    }) 
})