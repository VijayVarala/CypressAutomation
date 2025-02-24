import InitiatorPage from "../Pages/InitiatorPage";
import testdata from "../fixtures/testdata.json";
import { login } from "../support/utils";
describe('Verifying View All Notifications', () =>{
    const i= new InitiatorPage();
    beforeEach(() =>{
        login(testdata.initiator.username, testdata.initiator.password);
    });
    it('Navigating to view al notifications and verifying', () =>{
        i.clickViewAll();
        i.verifyViewAllNotifications();
    });
});