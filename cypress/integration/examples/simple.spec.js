describe('Example TEST', () => {
    it('Should visit correct URL', () => {
        cy.visit('https://example.com', { timeout: 10000 });
    })

    it('Should check URL', () => {
        cy.url().should('include', 'example.com');
    })

    it('Should show header', () => {
        cy.get('h1').should('be.visible');
    })

    it('Should wait', () => {
        cy.wait(2000);
    })

    it('Should have example header', () => {
        cy.get('h1').should('contain', 'Example');
    })

    it('Should have more info', () => {
        cy.get('a').should('contain', 'More');
        cy.get('a').contains('More').invoke('attr', 'href')
            .should('contain', 'iana.org');
        cy.get('a').contains('More').click({ timeout: 10000 });
    })
})
