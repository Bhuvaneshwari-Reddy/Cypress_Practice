//Amazon E2E

// describe("Visit Amazon page",()=>{
//     it("Add an item to cart",()=>{
//     cy.visit("https://www.amazon.in/")
//     cy.get("[name='field-keywords']").type("Bluetooth");
//     cy.get("#nav-search-submit-button").click();
//     cy.get("//span[class='a-size-medium a-color-base']").contains("Boult Audio");
//     cy.xpath("//span[text()='Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Mint Green)']").click();
//     cy.get("[class='a-size-medium a-color-base a-text-normal']").click()
//     // cy.get("[name='submit.add-to-cart']").click();
//     // cy.get("[class='a-alert-heading']").contains("Added to Cart")
    
//     }) 
//     })


describe("Amazon web page",()=>{
it("Search an item and add to the cart",()=>{
cy.visit("https://www.amazon.in/")
cy.get("#twotabsearchtextbox").type("samsung mobile phone")
cy.get("#nav-search-submit-button").click()
cy.get("[src='https://m.media-amazon.com/images/I/81ZSn2rk9WL._AC_UY218_.jpg'] >a").invoke('removeAttr','target').click()
//cy.get("#add-to-cart-button").click()
})
})
    