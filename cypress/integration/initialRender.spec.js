describe('User can see initial render', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows page header', () => {
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=header-text]').should('contain', 'Hi there')
      cy.get('[data-cy=color_1]').should('contain', 'red').within(() => {
        cy.get('[data-cy=first_btn]').click()
      })
      cy.get('[data-cy=color_2]').should('contain', 'green').within(() => {
        cy.get('[data-cy=second_btn]').click()
      })

    })
  })
})