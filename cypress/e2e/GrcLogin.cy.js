
import LoginPage from "../Pages/Loginpage";
import testdata from "../fixtures/testdata.json"

describe('Grc Login Test', () =>{
    const loginPage=new LoginPage();

    beforeEach(() =>{
        cy.visit('/login/false',{failOnStatusCode:false})
    });

    it('grc login',() =>{
        loginPage.enterGrcUsername(testdata.grc.username);
        loginPage.enterPassword(testdata.grc.password);
        loginPage.clickLoginButton();
    });

});