import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json";
import { login } from "../support/utils";
describe('Viewing draft projects', () =>{
    const i=new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });

    it('Navigating to Indraft Page', () =>{
        i.clickInDraft();
        i.VerifyInDraftText();
    });

});