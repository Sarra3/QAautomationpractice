class menuSearch{

    menuSearch(){
        this.elements.electronic().click()
        this.elements.camera().click()
        this.elements.itemGrid().children().should('have.length', 3)
    }

    elements = {
        electronic: () => cy.get('.top-menu.notmobile')
                             .contains('Electronics'),
        camera: () => cy.get('.active.last')
                        .contains('Camera & photo'),
        itemGrid: () => cy.get('.item-grid')

    }

}

module.exports = new menuSearch();
