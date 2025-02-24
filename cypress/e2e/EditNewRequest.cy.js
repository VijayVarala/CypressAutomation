import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json"
import { login } from "../support/utils";

describe('Edit New Request',() =>{
    const i =new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });

    it('editing the new request',() =>{
        i.clickOnEdit();
        i.editTitle("Abc");
        i.clickSubmitButton();

    });
});