describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'fixture.json'
    })
    cy.visit('http://localhost:3000/');
  })

  it('should display a header called URL Shortener', () => {
    cy.get('h1')
      .should('have.text', 'URL Shortener')
  })

  it('should display the exisiting URLs', () => {
    cy.get('h3')
      .should('have.text', 'Awesome photo')
    cy.get('a')
      .should('have.text', 'http://localhost:3001/useshorturl/1')
    cy.get('p')
      .should('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})
