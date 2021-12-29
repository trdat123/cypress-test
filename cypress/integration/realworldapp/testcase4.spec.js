/// <reference types="cypress" />
describe('Create new bank account', () => {
    it('Create new bank account', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

        const userInfo = {
            username: 'Katharina_Bernier',
            password: 's3cret',
            bankName: 'abcde',
            rNumber: '123456789',
            accNumber: '987654321'
        }
        //login
        cy.reload()
        cy.get('#username').click()
        .type(userInfo.username)
        .should('have.value', userInfo.username)

        cy.get('#password').click()
        .type(userInfo.password)
        .should('have.value', userInfo.password)

        
        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        cy.get('[data-test="sidenav-bankaccounts"]').should('contain.text', 'Bank Accounts')
        .click()

        cy.get('[data-test="bankaccount-list"]').children()

        cy.get('[data-test="bankaccount-new"]').should('contain.text', "Create")
        .click({force: true} )

        cy.get('#bankaccount-bankName-input').click()
        .type(userInfo.bankName)
        .should('have.value', userInfo.bankName)

        cy.get('#bankaccount-routingNumber-input').click()
        .type(userInfo.rNumber)
        .should('have.value', userInfo.rNumber)

        cy.get('#bankaccount-accountNumber-input').click()
        .type(userInfo.accNumber)
        .should('have.value', userInfo.accNumber)

        cy.get('[data-test="bankaccount-submit"]').should('contain.text', 'Save')
        .click()

        cy.get('[data-test="sidenav-bankaccounts"]').should('contain.text', 'Bank Accounts')
        .click()
        cy.wait(3000)
        cy.get('[data-test="bankaccount-list"]').children().last().should('contain.text', userInfo.bankName)
    })

  
})
