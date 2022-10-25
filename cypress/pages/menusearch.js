class menuSearch{

    menuSearch(){
        this.elements.menu().click()
        this.elements.electronic().click()
        this.elements.camera().click()
        this.elements.itemGrid().children().should('have.length', 3)
    }

    elements = {
        menu: () => cy.get('.menu-toggle'),
        electronic: () => cy.get('.top-menu.mobile')
                             .contains('Electronics')
                             .siblings('div'),
        camera: () => cy.get('.top-menu.mobile')
                        .contains('Camera & photo'),
        itemGrid: () => cy.get('.item-grid')

    }

}

module.exports = new menuSearch()