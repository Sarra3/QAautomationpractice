import homePage from '../../pages/homepage'
import loginPage from '../../pages/loginpage'
import registerForm from '../../pages/registerForm'
import booksPage from '../../pages/booksCategoryNav'
import checkout from '../../pages/checkout'


describe('Login to page', () =>{

    it('register', () =>{
        registerForm.registerUser('s', 's', 'sa@gmail.com', '12341234', '12341234')
    })

    it('Validate login', () => {
        homePage.clickOnLogin()
        loginPage.loginTo('sa@gmail.com', '12341234')
        homePage.validateLogoutIsVisible()
    })

})

describe('select Books category ',() =>{
    beforeEach(() =>{
        homePage.navigateTo()
    })

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
