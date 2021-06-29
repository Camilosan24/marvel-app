describe("home tests", ()=>{
   beforeEach(() => {
      cy.visit("/")
   })
   it('should visit my characters section when click button', () => {
      cy.contains("get started").click()
      cy.url().should('include', 'characters')
   });

   it('should contains title welcome!', () => {
      cy.contains('welcome!')
   });

   it('should go to comics section', () => {
      cy.contains('comics').click()
      cy.url().should('include', '/comics')
   });
   it('should go to series section', () => {
      cy.contains('series').click()
      cy.url().should('include', '/series')
   });
   it('should go to series section', () => {
      cy.contains('events').click()
      cy.url().should('include', '/events')
   });
})