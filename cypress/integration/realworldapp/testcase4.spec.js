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

        //verify checkbox is uncheck and check it
        cy.get('.PrivateSwitchBase-input-14').should('have.value', '')
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Remember me')
        cy.get('.PrivateSwitchBase-input-14').check().should('have.value', 'true')

        cy.get('[data-test="signin-submit"]').should('contain.text', 'Sign In')
        .click()

        //verfiy are at homepage and username
        cy.url().should('contain', '/')
        cy.get('[data-test="sidenav-username"]').should('contain.text', 'Katharina_Bernier')
    })

    it('go to another website', () => {
        cy.visit('https://google.com')
        cy.url().should('be.equal', 'https://www.google.com/')
    })

    it('go back to', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/')
        cy.get('[data-test="sidenav-username"]').should('contain.text', 'Katharina_Bernier')
    })
})