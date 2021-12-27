/// <reference types="cypress" />
describe('remember me feature', () => {
    it('remember me feature', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        //login
        cy.get('#username').click()
        .type('Katharina_Bernier')
        .should('have.value', 'Katharina_Bernier')

        cy.get('#password').click()
        .type('s3cret')
        .should('have.value', 's3cret')

        
        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        cy.get('[data-test="sidenav-bankaccounts"]').should('contain.text', 'Bank Accounts')
        .click()

        //count 
        cy.get('[data-test="bankaccount-list"]').children().should('have.length',1)
        
        cy.get('[data-test="bankaccount-new"]').should('contain.text', "Create")
        .click()

        cy.get('#bankaccount-bankName-input').click()
        .type('abc123')
        .should('have.value', 'abc123')

        cy.get('#bankaccount-routingNumber-input').click()
        .type('123456789')
        .should('have.value', '123456789')

        cy.get('#bankaccount-accountNumber-input').click()
        .type('987654321')
        .should('have.value', '987654321')

        cy.get('[data-test="bankaccount-submit"]').should('contain.text', 'Save')
        .click()

        // cy.visit('http://localhost:3000')
        // cy.url().should('contain', '/bankaccounts')
        cy.get('[data-test="bankaccount-list"]').children().should('have.length',1)
    })

  
})