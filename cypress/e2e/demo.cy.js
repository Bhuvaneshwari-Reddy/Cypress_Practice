describe.skip("Css locators",()=>{
    it("visit myshop",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T- Shirts")
    })
})

describe.skip("Xpath locators",()=>{
    it("Find no of products",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
    cy.get("//ul[@class='block_content products-block']")
    })
    
})


describe.skip("Assertions",()=>{
  it("Implicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
        

        //above can be written as below also
       cy.url().should('include','orangehrmlive.com')
       .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .should('contain','orangehrm')
        //or it can be written like this
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
    })
 it("Explicit Assertions",()=>{
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.get("[name='username']").type("Admin")
     cy.get("[name='password']").type("admin123")
     cy.get("[type='submit']").click()


  let expname="! ewd";

cy.get(".oxd-userdropdown-name").then((x)=>{
  let actname=x.text()
  expect(actname).to.equal(expname)
})
 })
})



describe.skip("Radio buttons and checkboxes",()=>{
it("Checking radio buttons",()=>{
cy.visit("https://testautomationpractice.blogspot.com/")

//verifying the visibility of radio buttons
cy.get("#male").should('be.visible')
cy.get("#female").should('be.visible')

//selecting radio buttons

cy.get("#female").check().should('be.checked')
cy.get("#male").should('not.be.checked')

})

it("checking checkboxes",()=>{
cy.visit("https://testautomationpractice.blogspot.com/")

//verifying the visibility of radio buttons
cy.get("#sunday").should('be.visible')

//selecting single checkbox
cy.get("#sunday").check().should('be.checked')

//unselecting the checkbox
cy.get("#sunday").uncheck().should('not.be.checked')

//selecting all the checkboxes
cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

//to select the first  or last checkbox
cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
})
})


describe.skip("Dropdowns",()=>{
it("dropdown with select",()=>{
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("#country").select("Japan").should('have.value','japan')

})

it("Dropdown without select",()=>{
cy.visit("https://toponwardticket.com/")
cy.get(".select2-selection__arrow").eq(1).click()
cy.get(".select2-search__field").type("KTM").type("{enter}")
// cy.get(".select2-selection__arrow").should('have.text','Kathmandu-Nepal(KTM)')

})
it("Auto suggest dropdown",()=>{
  cy.visit("https://www.wikipedia.org/")
  cy.get("#searchInput").type("Delhi")
  cy.get(".suggestion-title").contains("Delhi University").click()
})

it("Dynamic dropdown",()=>{
cy.visit("https://www.google.com/")
cy.get(".gLFyf").type("cypress automation")
// cy.get("div.wM6W7d>span").should('have.length',13)
cy.get("div.wM6W7d>span").each(($el,index,$list)=>{

if($el.text()=="cypress automation tutorial")
    {
        cy.wrap($el).click(  )
    }
})
cy.get(".gLFyf").should('have.value','cypress automation tutorial')

})
})


describe("Alerts",()=>{

    it.skip("JS alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts") 
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
           expect(t).to.contains("I am a JS Alert")
           

        })
        //alert window automatically closed by cypress 

        cy.get("#result").should('have.text','You successfully clicked an alert')
    })


    it.only("JS confirm alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts") 
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
         })
         cy.on('window:confirm',()=>false)
         cy.get("#result").should('have.text','You clicked: Ok')
        }) 


        it("JS prompt alert",()=>{
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts") 
            cy.window().then((win)=>{

                cy.stub(win,'prompt').returns("Welcom")
            })
            cy.get("button[onclick='jsPrompt()']").click()
           // cy.get("#result").should('have.text','You entered: Welcome')
            cy.on('window:alert',(t)=>{
                 expect(t).to.contains("I am a JS prompt")
          })
        })
    })


 describe.skip("Handle tabs",()=>{
  it("Aproach 1",()=>{
  cy.visit("https://the-internet.herokuapp.com/windows")


  })



 })