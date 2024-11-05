import { commandTimings } from "cypress-timings";
commandTimings()

describe("Visit GreenKart site",()=>{
it("Add Tomato to the cart ",()=>{
    cy.wait(2000)
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get("input[placeholder='Search for Vegetables and Fruits']").type("Tomato")
cy.get("div[class='product-action'] button[type='button']").click()



})


})