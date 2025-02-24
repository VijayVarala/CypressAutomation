import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json";
import { login } from "../support/utils";
describe('Verifying Rejected Projects', () =>{
    const i=new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Navigating to rejected projects and Verifying', () =>{
        i.clickProjectsRejected();
        i.verifyProjectRejectedText();
    })
})