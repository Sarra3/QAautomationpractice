class checkout{
    addToCard(){
        this.elements.setQuantity().clear().type('2')
        this.elements.addToCard().click({multiple: true, force: true})
    }

    elements = {
        setQuantity: () => cy.get('#product_enteredQuantity_38'),
        addToCard: () => cy.get('#add-to-cart-button-38.button-1.add-to-cart-button')

    }
}

module.exports = new checkout();
