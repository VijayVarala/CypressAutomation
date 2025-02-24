import InitiatorPage from "../Pages/InitiatorPage";
import { login } from "../support/utils";
import testdata from "../fixtures/testdata.json"
describe('Initiator My Projects',() =>{
    const i= new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Navigating to My projects',() =>{
        i.clickMyProjects();
        i.verifyMyProjectsText();
    });
   
});