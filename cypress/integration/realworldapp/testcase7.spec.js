/// <reference types="cypress" />
describe('change user account infomation', () => {
    it('change user account infomation', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        const userInfo = {
            username: 'Katharina_Bernier',
            password: 's3cret',
            fName: 'duy',
            lName: 'quoc',
            email: 'new@mail.com',
            phone: '0123456789'
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
        
        cy.get('[data-test="user-settings-firstName-input"]')
        .click()
        .clear()
        .type(userInfo.fName)
        .should('have.value', userInfo.fName)

        cy.get('[data-test="user-settings-lastName-input"]')
        .click()
        .clear()
        .type(userInfo.lName)
        .should('have.value', userInfo.lName)

        cy.get('[data-test="user-settings-email-input"]')
        .click()
        .clear()
        .type(userInfo.email)
        .should('have.value', userInfo.email)

        cy.get('[data-test="user-settings-phoneNumber-input"]')
        .click()
        .clear()
        .type(userInfo.phone)
        .should('have.value', userInfo.phone)

        cy.get('[data-test="user-settings-submit"]').should('contain.text', 'Save')
        .should("not.be.disabled")
        .click()

        cy.reload()
        //cy.get('[data-test="sidenav-user-full-name"]').should('not.contain.text', 'Edgar')    
    }) 
})