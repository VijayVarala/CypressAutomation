import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json";
import { login } from "../support/utils";
describe('Verifying Approved Projects', () =>{
    const i=new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Navigating to Approved and Verify ', () =>{
        i.clickProjectsApproved();
        i.verifyProjectApprovedText();
    });
});