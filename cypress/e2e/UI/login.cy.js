import homePage from "../../pages/homepage"
import loginPage from "../../pages/loginpage"
import searchPage from "../../pages/search"
import advancedPage from "../../pages/advence"
import menuSearchPage from "../../pages/menusearch"
import registerForm from "../../pages/registerForm"


describe('Login tests', () => {
  beforeEach(() => {
    homePage.navigateTo()
  })

  it('register', () =>{
    registerForm.registerUser('s', 's', 'sa@gmail.com', '12341234', '12341234')
  })

  it('Validate login', () => {
    homePage.clickOnLogin()
    loginPage.loginTo('sa@gmail.com', '12341234')
    homePage.validateLogoutIsVisible()
  })
})

describe('search', () =>{
  beforeEach(() =>{
    searchPage.searchItem('Apple MacBook Pro 13-inch')
  })

  it('Search',  () =>{
    searchPage.selectItem()
  });

describe('Advanced search positive value', () =>{
  it('advance search positive value',  () => {
    advancedPage.advancedSearch('3')
    advancedPage.positiveValidation()
  });
})

describe('Advanced search negative value', () =>{
  it('advance search negative value ', ()  => {
    advancedPage.advancedSearch('5')
    advancedPage.notFoundMessageValidation()
  });
})
})

describe('dropdown menu search', () =>{
  it('dropdown menu search ', () => {
    menuSearchPage.menuSearch()
  });
})

describe('invalid login', () =>{
  it('Invalid login', () => {
    homePage.clickOnLogin()
    loginPage.loginTo('sarr@gmail.com', '123123')
    homePage.validationErrorMessageVisible()
  })
})
