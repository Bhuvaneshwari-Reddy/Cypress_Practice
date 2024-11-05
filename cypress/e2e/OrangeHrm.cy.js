/// <reference types="Cypress" />

describe("Visit OrangeHrm Page and Login",()=>{

it("Login into the web Page and add Admin user",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.wait(2000);
cy.get("[name='username']").type("Admin")
cy.wait(2000);
cy.get("[name='password']").type("admin123")
cy.wait(2000);
cy.get("[type='submit']").click()
cy.wait(2000);
cy.xpath("//span[text()='Admin']").click()
cy.wait(2000);
cy.get("[class='oxd-button oxd-button--medium oxd-button--secondary']").click()      
cy.wait(2000);
cy.get(".oxd-select-text-input").eq(0).click().get("span").contains("ESS").click()
cy.wait(2000);
cy.get(".oxd-select-text-input").eq(1).click().get("span").contains("Enabled").click()
cy.wait(2000);
cy.get("input[placeholder='Type for hints...'").type("Lawrence Griffin Larry")
cy.wait(2000);
cy.get("[class='oxd-input oxd-input--active']").eq(1).click().type("Lawrence")
cy.wait(2000);
cy.get("[type='password']").eq(0).click().type("charlie@123")
cy.wait(2000);
cy.get("[type='password']").eq(1).click().type("charlie@123")
cy.wait(2000);
cy.get("[type='submit']").click()

})
it("Update My info page",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.wait(2000);
cy.get("[name='username']").type("Admin")
cy.wait(2000);
cy.get("[name='password']").type("admin123")
cy.wait(2000);
cy.get("[type='submit']").click()
cy.wait(2000);
cy.get("[class='oxd-text oxd-text--span oxd-main-menu-item--name']").eq(5).click()
cy.wait(2000);
cy.get("[name='firstName']").type("Bhuvana")
cy.wait(2000);
cy.get("[name='middleName']").type("Reddy")
cy.wait(2000);
cy.get("[name='lastName']").type("B")
cy.wait(2000);
cy.get("[class='oxd-input oxd-input--active']").eq(1).type("Bhuvi")
cy.wait(2000);
cy.get("[class='oxd-input oxd-input--active']").eq(2).type("3685")
cy.wait(2000);
cy.get(".oxd-select-text-input").eq(0).click().get("span").contains("Australian").click();

cy.get(".oxd-select-text-input").eq(1).click().get("span").contains("Single").click();
cy.get("[type='radio']").eq(1).check({force:true}).should("be.checked")


})

})