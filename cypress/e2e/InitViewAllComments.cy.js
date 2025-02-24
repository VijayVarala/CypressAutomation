import InitiatorPage from "../Pages/InitiatorPage";
import { login } from "../support/utils";
import testdata from "../fixtures/testdata.json"
describe('Verify View All comments',() =>{
    const i= new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Navigating to view all comments',() =>{
        i.clickViewAllComments();
        cy.url().should('include','/view-all-comments');
    });
   
});