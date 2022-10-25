class LoginPage {
   loginTo(email, password){
        this.elements.email().type(email)
        this.elements.password().type(password)
        this.elements.buttons().find("[type = 'submit']").click()
   }

   elements = {
        email: () => cy.get("#Email"),
        password: () => cy.get("[type='password']"),
        buttons: () =>  cy.get(".buttons")
    }
}

module.exports = new LoginPage();