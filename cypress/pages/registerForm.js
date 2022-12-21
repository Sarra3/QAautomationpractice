class registerForm {
    registerUser(firstName, lastName, email, password, confirmationPassword,){
        this.elements.registerButton().click()
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.email().type(email)
        this.elements.password().type(password)
        this.elements.confirmationPassword().type(confirmationPassword)
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

module.exports = new registerForm();
