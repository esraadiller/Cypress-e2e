

describe('Navbar Test' , () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')

    })
    it('should display online banking content,display feedback content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include' , 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')


    })
})