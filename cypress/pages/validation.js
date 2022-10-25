class Validation{
    positiveValidation(){
        this.elements.product().should('be.visible')
    }

    notFoundMessageValidation(){
        this.elements.message().should('be.visible')
    }

    elements = {
        product: () => cy.get('.product-item'),
        message: () => cy.get('.no-result')
    }
}

module.exports = new Validation()