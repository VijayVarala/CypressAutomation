import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json";
import { login } from "../support/utils";
describe('Initiator view documents', () =>{
    const i =new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('viewing the documents', () =>{
        i.clickOnProjectName();
        i.clickOnDocument();
        cy.url().should('include','documentsview');
    })
})