import booksPage from '../../pages/booksCategoryNav'
import checkout from '../../pages/checkout'
import homePage from '../../pages/homepage'
import registerForm from "../../pages/registerForm";
import loginPage from "../../pages/loginpage";

describe('create and login user', () =>{
            beforeEach(() => {
                    homePage.navigateTo()
                }
            )

            it('register', () => {
                 registerForm.registerUser('s', 's', 'sa@gmail.com', '12341234','12341234')
            })
    })

describe('Login', () =>{
    it('Validate login', () => {
        homePage.clickOnLogin()
        loginPage.loginTo('sa@gmail.com', '12341234')
        homePage.validateLogoutIsVisible()
    })
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

