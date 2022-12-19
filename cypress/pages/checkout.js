class checkout{
    addToCard(){
        this.elements.addToCard().click({multiple: true})
    }

    elements = {
        addToCard: () => cy.get('#add-to-cart-button-38.button-1.add-to-cart-button')

    }
}

module.exports = new checkout();
