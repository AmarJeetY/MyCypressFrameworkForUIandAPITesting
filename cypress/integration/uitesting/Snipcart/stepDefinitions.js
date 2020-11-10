import {Given,And,Then } from "cypress-cucumber-preprocessor/steps";

const uiTestUrl ="https://snipcart-react-gatsby.netlify.app/";

Given(`I open snipcart home page`, () => {
    cy.reload(true);
    cy.visit(uiTestUrl);
});

And(`I select {string} product`, (product) => {    
    cy.xpath(`//a[@href='/${product}/']`).click();
    // Ensure that current url contains product name
    cy.url().should('include', `${product}`);
});

And(`I select colour {string}`, (colour) => {
    cy.xpath('//select[@id="Color"]').select(`${colour}`);
});

And(`I click buy button`, () => {
    cy.get('#buyButton').click();   
    
});