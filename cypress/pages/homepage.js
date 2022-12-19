// const cypress = require("cypress");

class HomePage {

    navigateTo() {
        cy.visit(Cypress.config().baseUrl)
    }

    clickOnLogin() {
        this.elements.login().click()
    }

    validateLogoutIsVisible() {
        this.elements.logout().should('be.visible')
    }

    validationErrorMessageVisible() {
        this.elements.validationError().should('be.visible')
    }


    elements = {
        login: () => cy.get('.ico-login'),
        logout: () => cy.get('.ico-logout'),
        validationError: () => cy.get('.message-error'),

    }
}

module.exports = new HomePage();
