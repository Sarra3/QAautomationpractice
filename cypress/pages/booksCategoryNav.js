// const homePage = require("./homepage");

class booksCategoryNav{
    booksCategory(){
        this.elements.books().click()
    }

    selectBook(){
        this.elements.firstPrizePies().click()
    }

    elements = {
        books: () => cy.get('.top-menu.notmobile')
                       .contains('Books'),
        firstPrizePies: () => cy.get('.product-title')
                                .contains('First Prize Pies')
    }
}

module.exports = new booksCategoryNav();
