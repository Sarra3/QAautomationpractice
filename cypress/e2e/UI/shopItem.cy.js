import homePage from '../../pages/homepage'
import booksPage from '../../pages/booksCategoryNav'
import checkout from '../../pages/checkout'


describe('select Books category ',() =>{
    beforeEach(() =>{
        homePage.navigateTo()
    })


describe('select Books category ',() =>{
    it('select Books category',  () => {
            booksPage.booksCategory()
    });
})

describe('select book',() =>{
    it('select book',  () => {
        booksPage.selectBook()
    });
})


describe('add to card',() =>{
    it('add to card',  () => {
        checkout.addToCard()
    });
})

d
escribe('go to shopping cart', () =>{
    it('go to shopping cart ',  () => {
        cy.wait(3000)
        checkout.goToShoppingCart()
    });
})
