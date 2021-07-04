const { within } = require("@testing-library/react")

describe('User can see initial render', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows page header', () => {
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=header-text]').should('contain', 'Hi there')
      cy.get('[data-cy=color]').should('contain', 'red')
    })
  })
})