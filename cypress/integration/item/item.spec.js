
describe('test for item', () => {
   beforeEach(() => {
      cy.visit('/characters/1011334')
   })
   it('should render a character by id', () => {
      cy.url()
      .should('include', '1011334')
      cy.contains('1011334')
   });
})
