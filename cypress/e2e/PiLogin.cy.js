import LoginPage from "../Pages/Loginpage";
import testdata from "../fixtures/testdata.json"
describe('Principal Investigator Login', () =>{
    const loginPage=new LoginPage();

    beforeEach(() =>{
        cy.visit('login/false',{failOnStatusCode:false});

    });
   it('Pi login',() =>{
    loginPage.enterPiUsername(testdata.pi.username);
    loginPage.enterPassword(testdata.pi.password);
    loginPage.clickLoginButton();
   });
   
});