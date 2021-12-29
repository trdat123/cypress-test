/// <reference types="cypress" />
describe('change user account infomation', function () {
    const userInfo = {
        username: 'Katharina_Bernier',
        password: 's3cret',
        fName: 'duy2',
        email: 'newUser@mail.com',
        phone: '0123232324'
    }

    it('change user account infomation', function () {
        cy.visit('http://localhost:3000')
        cy.url().should('contain', '/signin')

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

        //store variable before changes
        cy.get('[data-test="user-settings-firstName-input"]').then($firstName => {
            const firstName = $firstName.val()
            cy.log("First name before change: " + firstName)
            cy.wrap(firstName).as('firstName')
        })

        cy.get('[data-test="user-settings-email-input"]').then($email => {
            const email = $email.val()
            cy.log("Email before change: " + email)
            cy.wrap(email).as('email')
        })

        cy.get('[data-test="user-settings-phoneNumber-input"]').then($phone => {
            const phone = $phone.val()
            cy.log("Phone number before change: " + phone)
            cy.wrap(phone).as('phone')
        })

        //input new info
        cy.get('[data-test="user-settings-firstName-input"]')
        .click()
        .clear()
        .type(userInfo.fName)
        .should('have.value', userInfo.fName)

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
    })

    it('verify', function () {
        cy.get('[data-test="user-settings-firstName-input"]')
            .should('not.have.value', this.firstName)

        cy.get('[data-test="user-settings-email-input"]')
            .should('not.have.value', this.email)

        cy.get('[data-test="user-settings-phoneNumber-input"]')
            .should('not.have.value', this.phone)
    })
})
