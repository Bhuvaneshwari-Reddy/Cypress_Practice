//GreenKart 
// import { commandTimings } from 'cypress-timings'
// commandTimings()
import{commandTimings} from 'cypress-timings'
commandTimings()


describe("Test case for GreenKart",()=>{
       
   
    it("Visit the page and add the item to cart",()=>{
        cy.wait(2000);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.wait(2000)
    cy.get("[placeholder='Search for Vegetables and Fruits']").type("Banana");
    cy.wait(2000)
    cy.get("[class='search-button']").click();
    cy.wait(2000)
    cy.xpath("//button[@type='submit']").click();
    cy.wait(2000)
    cy.get("[alt='Cart']").click();
    cy.wait(2000)
    cy.get('button:contains("PROCEED TO CHECKOUT")').click();
    cy.wait(2000)
    cy.get('button:contains("Place Order")').click();
    cy.wait(2000)
    cy.get("[style='width: 200px;']").select("Australia");
    cy.wait(2000)
    cy.get(".chkAgree").click();
    cy.get('button:contains("Proceed")').click();  
    cy.wait(2000)
    })
    })