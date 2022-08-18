describe('Login into EventOntime',()=>{
    beforeEach(()=>{
        cy.visit('https://eventontime.netlify.app/hogar')
    })

    it('Registrar un Usuario ', () => {
        cy.get('.collapse >ul > li').should("have.length",6);
        cy.get('.navbar-nav:last-of-type  >li:last-of-type').click();
        cy.get('.text-center > h1 ').should("contain","INICIO DE SESIÓN")
        const newEmail = "dayo@gmail.com";
        const newPass = "p123";  
        cy.get('#inputEmail3').type(`${newEmail}{enter}`)
        cy.get('#exampleFormControlInput1').type(`${newPass}{enter}`)
        cy.get('button[type="submit"]').click();
        cy.get('.text-center').should("contain"," Tu servicio más popular ");
        cy.get('.sidenav-nav >li:nth-of-type(2)').click();
        cy.get('.card-title').should("contain","Mis servicios")
        cy.get('.flex-row-reverse > .flex-row-reverse').click();
        cy.get('.card-title').should("contain","Agregar Servicios ");
        const name = "Pizza Service";
        const type = "Comida";
        const price = 1200;  
        const phone = 3311990011;
        const desc = "Piiza Event for family and friends";
        cy.get('.container-md > div > div:first-child >input[type="text"]').type(`${name}{enter}`)
        cy.get('.container-md > div > div:last-child >select').select(type)
        cy.get('.container-md > div > div:first-child >input[type="number"]').type(`${price}{enter}`)
        cy.get('.container-md > div > div:last-child > input[type="number"]').type(`${phone}{enter}`)
        cy.get('.container-md > div > textarea').type(`${desc}{enter}`)
        cy.get('.container-md > div > button').click();
    })
})