describe('User can see initial render', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows page header', () => {
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=header-text]').should('contain', 'Hi there');
      cy.get('[data-cy=color-1]')
        .should('contain', 'red')
        .within(() => {
          cy.get('[data-cy=first-btn]').should('contain', 'Click me').click();
        });
      cy.get('[data-cy=color-2]')
        .should('contain', 'green')
        .within(() => {
          cy.get('[data-cy=second-btn]').should('contain', 'Click me').click();
          cy.get('[data-cy=hemburgar]').should('contain', 'Hemburgar');
        });
    });
  });

  it('displays guest list', () => {
    cy.get('[data-cy=guest-list]').within(() => {
      cy.get('[data-cy=guest-list-header]').should('contain', 'Guest List');
      cy.get('[data-cy=list-of-guests]').should('be.empty')
      cy.get('[data-cy=guest-list-input]').type('Marcus');
      cy.get('[data-cy=guest-list-btn]').should('contain', 'Add Guest').click();
      cy.get('[data-cy=guest-list-input]').should('be.empty')
      cy.get('[data-cy=list-of-guests]').should('contain', 'Marcus')
    });
  });
});
