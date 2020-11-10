import {Given,And,Then } from "cypress-cucumber-preprocessor/steps";

const apiUrl ="https://api.ratesapi.io/api/";

Given(`I have access to foreign exchange rate base API`, () => {
    cy.request(apiUrl + "latest").then((response) => {
    expect(response.status).equal(200);
    expect(response.body).to.have.property('base','EUR',"Base property does not contain expected value of EUR")
    expect(response.body).to.have.property('rates').and.not.be.empty;
    //expect(response.body.rates[0]).to.have.length(32,"Rates does not have expected number of currency values")
    expect(response.body).to.have.property('date').and.not.be.empty;
    
    })
});

Then(`I can access Latest Foreign Exchange Rates with Symbols`, () => {
    cy.request(apiUrl + "latest?symbols=USD,GBP").then((response) => {
    expect(response.status).equal(200);   
    })
});

Then(`I can access Latest Foreign Exchange Rates with Base`, () => {
    cy.request(apiUrl + "latest?base=USD").then((response) => {
    expect(response.status).equal(200);   
    })
});

Then(`I can access Latest Foreign Exchange Rates with Symbols and Base`, () => {
    cy.request(apiUrl + "latest?base=USD&symbols=GBP").then((response) => {
    expect(response.status).equal(200);   
    })
});


// Step definitions for Foreign Exchange rates for past dates

Then(`I can access Latest Foreign Exchange Rates with Symbols for {string}`, (pastDate) => {
    
    cy.request(apiUrl + pastDate + "?symbols=USD,GBP").then((response) => {
    expect(response.status).equal(200);

    })
});

Then(`I can access Latest Foreign Exchange Rates with Base for {string}`, (pastDate) => {
    cy.request(apiUrl + pastDate + "?base=USD").then((response) => {
    expect(response.status).equal(200);   
    })
});

Then(`I can access Latest Foreign Exchange Rates with Symbols and Base for {string}`, (pastDate) => {
    cy.request(apiUrl + pastDate + "?base=USD&symbols=GBP").then((response) => {
    expect(response.status).equal(200);   
    })
});