import { login } from '../support/utils';
import testdata from '../fixtures/testdata.json';
import InitiatorPage from '../Pages/InitiatorPage';

describe('Initiator Login Test', () => {
    const i = new InitiatorPage();
  beforeEach(() => {
    login(testdata.initiator.username, testdata.initiator.password);
  });

  it('Add New Request',() =>{
    i.clickNewRequest();
    i.enterAllData(testdata['new request']);
    i.selectPrincipalInvestigator(1);
    i.selectCoPrincipalInvestigator(2);
    i.selectRole(1);
    i.clickSubmitButton();
  })
});
