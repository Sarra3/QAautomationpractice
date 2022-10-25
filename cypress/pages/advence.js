class AdvancedSearch{
    advancedSearch(value){
        this.elements.advanced().click()
        this.elements.category().select(value)
        this.elements.search().click()

    }

    elements = {
        advanced: () => cy.get('#advs'),
        category: () => cy.get('#cid'),
        search: () => cy.get('.search-button'),

    }
}

module.exports = new AdvancedSearch()