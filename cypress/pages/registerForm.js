class RegisterForm {
    registerUser(){
        this.elements.registerButton().click()
        this.elements.firstName().type('s')
        this.elements.lastName().type('a')
        this.elements.email().type('sa@gmail.com')
        this.elements.password().type('12341234')
        this.elements.confirmationPassword().type('12341234')
        this.elements.confirmationButton().click()
    }


  elements = {
      registerButton: () => cy.get('.ico-register'),
      firstName: () => cy.get('#FirstName'),
      lastName: () => cy.get('#LastName'),
      email: () => cy.get('#Email'),
      password: () => cy.get('#Password'),
      confirmationPassword: () => cy.get('#ConfirmPassword'),
      confirmationButton: () => cy.get('#register-button')
  }

}

module.exports = new RegisterForm()