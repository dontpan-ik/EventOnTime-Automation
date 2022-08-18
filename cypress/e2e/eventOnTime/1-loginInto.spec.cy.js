describe('Login into EventOntime',()=>{
    beforeEach(()=>{
        cy.visit('https://eventontime.netlify.app/hogar')
    })

    it('Iniciando Sesion', () => {
        cy.get('.collapse >ul > li').should("have.length",6);
        cy.get('.navbar-nav:last-of-type  >li:last-of-type').click();
        cy.get('.text-center > h1 ').should("contain","INICIO DE SESIÓN")
        const newEmail = "ontiveros@gmail.com";
        const newPass = "p123";  
        cy.get('#inputEmail3').type(`${newEmail}{enter}`)
        cy.get('#exampleFormControlInput1').type(`${newPass}{enter}`)
        cy.get('button[type="submit"]').click();
        cy.get('.title-surveys > h5').should('have.text','   Encuestas Pendientes ')
    })
})