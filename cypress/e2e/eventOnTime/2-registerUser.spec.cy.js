describe('Login into EventOntime',()=>{
    beforeEach(()=>{
        cy.visit('https://eventontime.netlify.app/hogar')
    })

    it('Registrar un Usuario ', () => {
        cy.get('.collapse >ul > li').should("have.length",6);
        cy.get('.navbar-nav:last-of-type  >li:last-of-type').click();
        cy.get('.text-center > h1 ').should("contain","INICIO DE SESIÓN");
        cy.get('.text-center > b > a').click();
        const name = "Juan Doe";
        const email = "test5@gmail.com";  
        const pass = "p123";
        cy.get('input[type="text"]').type(`${name}{enter}`)
        cy.get('input[type="email"]').type(`${email}{enter}`)
        cy.get('.col.mb-3:first-child').type(`${pass}{enter}`)
        cy.get('.mb-3:last-child').type(`${pass}{enter}`)
        cy.get('.btn-warning').click();
        cy.get('.texto > h1').should("contain","¿Qué tipo de usuario eres?");
        cy.get('.tipoPlani > img').click();
        cy.get('.title-surveys > h5').should('have.text','  No tienes encuestas pendientes :)  ')
    })
})