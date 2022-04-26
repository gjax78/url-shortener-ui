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
})
