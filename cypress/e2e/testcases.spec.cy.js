import homepageAZ from '../support/homepage';

beforeEach(() => {
    cy.visit('https://www.amazon.com/')
})

describe ('TestcasesAZ', () => {
    it ('Test1', () => {
        cy.visit('https://www.amazon.com/');
        homepageAZ.signIn().click();
        cy.pause();
    })
    


















    it ('asdad', () => {

    })
});