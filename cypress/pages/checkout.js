class checkout{
    addToCard(){
        cy.reload()
        this.elements.addToCard().click({multiple: true})
    }

    goToShoppingCart(){
        this.elements.goToShoppingCart().click()
        this.elements.setQuantity().clear().type('2')
        this.elements.updateShoppingCart().click()
    }


    elements = {
        addToCard: () => cy.get('#add-to-cart-button-38.button-1.add-to-cart-button'),
        goToShoppingCart: () => cy.get('#topcartlink > a > span.cart-label'),
        setQuantity: () => cy.get('.qty-input'),
        updateShoppingCart: () => cy.get('#updatecart')
    }
}

module.exports = new checkout();

