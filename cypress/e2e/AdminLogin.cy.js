import LoginPage from "../Pages/Loginpage";
import testdata from "../fixtures/testdata.json";

describe('Admin Login Test', () => {
    const loginPage= new LoginPage();
    beforeEach(()=>{
        cy.visit('/login/true',{failOnStatusCode:false});
    })

    it('admin login',() =>{
        loginPage.enterAdminUsername(testdata.admin.username);
        loginPage.enterPassword(testdata.admin.password);
        loginPage.clickLoginButton();

    })
  });


  