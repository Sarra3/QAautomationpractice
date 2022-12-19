class Search{

    searchItem(text) {
        this.elements.searchItem().type(text)
        this.elements.searchButton().click()
    }

    selectItem(){
        this.elements.selectItem().click()
        this.elements.validationInfo().should('be.visible')
    }

    elements = {
        searchItem: () => cy.get('#small-searchterms'),
        searchButton: () => cy.get('.button-1.search-box-button'),
        selectItem: () => cy.get('.item-box'),
        validationInfo: () => cy.get('.product-essential')
    }
}

module.exports = new Search();
