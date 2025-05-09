import homepageGM from '../support/gmail';

describe ('Sign in and check inbox',()  => {
    const userEmail = 'andrew.t.williams95@gmail.com'

    it ('Sign in', () => {
            cy.visit('https://workspace.google.com/intl/en-US/gmail/');
            homepageGM.signIn().click();
            homepageGM.email().click().type(userEmail);
    })
})