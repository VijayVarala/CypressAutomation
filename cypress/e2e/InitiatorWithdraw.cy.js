import InitiatorPage from "../Pages/InitiatorPage";
import { login } from "../support/utils";
import testdata from "../fixtures/testdata.json";
describe('Withdraw', () =>{
    const i = new InitiatorPage();
    beforeEach(()=>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Initiator withdrawing the project', () =>{
        i.clickProjects();
        i.clickOnProjectRows();
        i.clickOnWithdraw();
        i.enterReasonForWithdraw("Withdrawing");
        i.clickOnWithdrawSubmit();
        i.clickOnYesInPopup();
        i.ClickOnClose();
    })
})