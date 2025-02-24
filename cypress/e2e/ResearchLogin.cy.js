import { describe } from "mocha";
import LoginPage from "../Pages/Loginpage";
import testdata from "../fixtures/testdata.json"

describe('Research Login Test', () =>{
   const loginPage= new LoginPage();

   beforeEach(() =>{
      cy.visit('/login/false',{failOnStatusCode:false});
   });

   it('research login', () =>{
      loginPage.enterResearchUsername(testdata.research.username);
      loginPage.enterPassword(testdata.research.password);
      loginPage.clickLoginButton();
   });
   });
