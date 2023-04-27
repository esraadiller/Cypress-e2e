
describe('login / logout test', () => { 
before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')

})
        
        
        it('should try to login with invalid data' , () =>{
            
            cy.url().should('include', 'index.html')
            cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong')
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
    
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
        cy.get('ul.nav-tabs').should('be.visible')
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include' , 'index.html')
    })

    // it('should display error message' , () =>{
    // })

    // it('should login to application' , () =>{
    // })

    // it('should logout from application' , () =>{
    // })
})