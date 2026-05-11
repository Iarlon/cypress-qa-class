describe('nome do meu teste', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    
    it('teste para login normal', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.app_logo').should('be.visible')
    });
})