/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should have a header with text', () => {
        cy.get('.header').contains('MoonStar Forum')
    });

    it('should have at least one post', () => {
        cy.get('.post').should('be.visible')
    });

    it('should have post comment inside a post', () => {
        cy.wait(1000);

        cy.get('.post__username').should('be.visible')
        cy.get('.post__title').should('be.visible')
        cy.get('.post__body').should('be.visible')
    });

    it('should have comments section', () => {
        cy.wait(1000);
        cy.get('.post__commentCount').should('be.visible')
    });

    it('should display comments when clicking on comments count', () => {
        cy.wait(2000);
        cy.get('.post__commentCount').first()
            .click();
        cy.wait(2000);
        cy.get('.post__commentsContainer').should('have.css', 'display', 'block')
    });

    it('should have proper comment structure', () => {
        cy.wait(2000);
        cy.get('.post__commentCount').first()
            .click();
        cy.wait(2000);

        cy.get('.post__comment .post__commenter').first().should('be.visible');
        cy.get('.post__comment .post__commentName').first().should('be.visible');
        cy.get('.post__comment .post__commentBody').first().should('be.visible');
    });

    it('should scroll back to top when button top is clicked', () => {
        cy.wait(2000);
        cy.get('#topButton').should('not.be.visible')
        cy.scrollTo(0, 500);
        cy.wait(2000);
        cy.get('#topButton').should('be.visible')
        cy.wait(2000);
        cy.get('#topButton').click()
        cy.get('#topButton').should('not.be.visible')
    });
});