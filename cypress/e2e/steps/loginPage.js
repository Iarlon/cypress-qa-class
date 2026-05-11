/// < reference types="cypress" />
/// steps
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
describe('nome do meu teste', ()=> {
    Given('I navigate to the Website', () => {
        cy.log('Acessando a página de login do saucedemo')
        cy.visit('https://www.saucedemo.com/')
    })
    
    When('I entered valid credential email and validpassword', (dataTable) => {
    const data = dataTable.hashes()[0]
    const email = data.email
    const password = data.validpassword
    cy.log(`adding email: ${email} and password: ${password}`)
    cy.get('#user-name').type(email)
    cy.get('#password').type(password)
    })

    Then('User click on sign in button', () => {
        cy.log("clicking the button");
        
        cy.get('#login-button').click();
        cy.get('.app_logo').should('be.visible');
    })
})