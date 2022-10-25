class HomePage {

    navigateTo() {
        cy.visit('https://demo.nopcommerce.com/')
    }

    clickOnLogin() {
        this.elements.login().click()
    }

    validateLogoutIsVisible() {
        this.elements.logout().should('be.visible')
    }

    searchItem(text) {
        this.elements.searchItem().type(text).submit()
        this.elements.searchButton().submit()
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