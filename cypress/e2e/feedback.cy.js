
describe('Feedback Test', () => { 
    beforeEach(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()

    })
    it('should load, fill, submit and display feedback form' , () => {
        cy.get('form').should('be.visible')
        cy.get('#name').type('name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('just subject')
        cy.get('#comment').type('just my comment')
        cy.get('.btn-signin').click()
        cy.get('#feedback-title').contains('Feedback')



    })
 })