import homePage from "../pages/homepage"
import loginPage from "../pages/loginpage"
import searchPage from "../pages/search"
import advancedPage from "../pages/advence"
import validationPage from "../pages/validation"
import menusearchPage from "../pages/menusearch"

describe('Login tests', () => {
  beforeEach(() => {
    homePage.navigateTo()
    searchPage.searchItem('Apple MacBook Pro 13-inch')
  })

  it('Validate login', () => {
    homePage.clickOnLogin()
    loginPage.loginTo('sa@gmail.com', '12341234')
    homePage.validateLogoutIsVisible()
  })

  it('Search',  () =>{
    searchPage.selectItem()
  });

  it('advance search positive value',  () => {
    advancedPage.advancedSearch('3')
    validationPage.positiveValidation()
  });

  it('advance search negative value ', function () {
    advancedPage.advancedSearch('5')
    validationPage.notFoundMessageValidation()
  });

  it('dropdown menu search ', () => {
    menusearchPage.menuSearch()

  });

  // it('Invalid login', () => {
  //   homePage.clickOnLogin()
  //   loginPage.loginTo('sarr@gmail.com', '123123')
  //   homePage.validationErrorMessageVisible()
  // })
})
