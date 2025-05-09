const homepageGM = {
    signIn() {
        return cy.get('.header__aside > .button--medium > .button__label');
    },
    email() {
        return cy.get('aXBtI Wic03c').contains('Email or phone');
    },
};
export default homepageGM;