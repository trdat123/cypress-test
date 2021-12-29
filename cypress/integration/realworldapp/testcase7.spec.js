/// <reference types="cypress" />
describe('create a transaction payment', () => {
    it('create a transaction payment', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        const userInfo = {
            username: 'Katharina_Bernier',
            password: 's3cret',
            ammount: '20',
            note: 'For dinner'
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

        cy.get('[data-test="nav-top-new-transaction"]').should('contain.text', 'New')
        .click()

        cy.get('[data-test="users-list"]').children().last().click()
        cy.get('#amount').invoke('attr', 'placeholder').should('contain', 'Amount')
        cy.get('#amount').click().type(userInfo.ammount)

        cy.get('#transaction-create-description-input').invoke('attr', 'placeholder').should('contain', 'Add a note')
        cy.get('#transaction-create-description-input').click().type(userInfo.note)

        cy.get('[data-test="transaction-create-submit-payment"]').should('contain.text', 'Pay').click()

        cy.get('[data-test="alert-bar-success"] .MuiAlert-message').should('contain', 'Transaction Submitted!')

        cy.get('[data-test="new-transaction-return-to-transactions"]').should('contain.text', 'Return To Transactions')
    }) 
})