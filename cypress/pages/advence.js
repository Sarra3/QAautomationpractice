class AdvancedSearch {
    advancedSearch(value) {
        this.elements.advanced().click()
        this.elements.category().select(value)
        this.elements.search().click()

    }

    positiveValidation() {
        this.elements.product().should('be.visible')
    }

    notFoundMessageValidation() {
        this.elements.message().should('be.visible')
    }

    elements = {
        advanced: () => cy.get('#advs'),
        category: () => cy.get('#cid'),
        search: () => cy.get('.search-button'),
        product: () => cy.get('.product-item'),
        message: () => cy.get('.no-result')
    }

}


module.exports = new AdvancedSearch();

