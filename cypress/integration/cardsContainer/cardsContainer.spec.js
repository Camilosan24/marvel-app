describe('cards container tests', () => {
   beforeEach(() => {
      cy.visit('/characters')
   })
   it('should contain 20 elements inside', () => {
      cy.get('.cards-container-box').children().should('have.length', 20)
   });

   it('should change its display on click button', () => {
      cy.get("[aria-label='toggle input searcher']").click()
      cy.get('.characters-found').should('have.css', 'display', 'none')
      cy.get("[placeholder=\"Enter a charater's name\"]").type('iron man')
      cy.get('.characters-found').should('have.css', 'display', 'flex')
   });

   it('should turn button into red when isnt found', () => {
      cy.get("[aria-label='toggle input searcher']").click()
      cy.get("[placeholder=\"Enter a charater's name\"]").type('dasdasfasd')
      cy.get("[aria-label='toggle input searcher']").should('have.css', 'background-color', 'rgb(255, 0, 0)')
   });
   it('should find characters by namme', () => {
      cy.get("[aria-label='toggle input searcher']").click()
      cy.get("[placeholder=\"Enter a charater's name\"]").type('iron man')
      cy.get(".characters-found").children().first().click()
      cy.url().should('include', '/characters/1009368')
      cy.contains('Iron Man')
   });

   it('should have attribute href with /characters/1011334', () => {
      cy.get('.cards-container-box').children().first().should('have.attr', 'href', '/characters/1011334')
   });

   it('shouldnt go to the previous page, it doesnt exist', () => {
      cy.get("[name='prev-page']").click()
      cy.get("[aria-label='page number'] span").should('have.text', "1")
   });

   it('should go to the next page of characters', () => {
      cy.get("[name='next-page']").click()
      cy.get("[aria-label='page number'] span").should('have.text', "2")
   });

   it('should go to the next page and then to the previous page', () => {
      cy.get("[name='next-page']").click()
      cy.get("[name='prev-page']").click()
      cy.get("[aria-label='page number'] span").should('have.text', "1")
   });
})
