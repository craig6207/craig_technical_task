describe('Hymans e2e test', () => {
  it('Visits the technical task welcome page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.get('.ng-test-link-0').contains('Visit app')
  })
})
