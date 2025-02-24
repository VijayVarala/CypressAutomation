import 'cypress-xpath';
class InitiatorPage {
    
    constructor() {
        this.newRequest = "button:contains('NEW REQUEST')";
        this.dashboard = "span:contains('Dashboard')";
        this.projects = "span:contains('Projects')";
        this.notifications = "span:contains('Notifications')";
        this.editrequest="img[alt='edit_icon']";
        this.logout = "span:contains('Logout')";
        this.myProjects = "h5:contains('My Projects')";
        this.myProjectsText=".project-header-title";
        this.inDraft = "h5:contains('In Draft')";
        this.inDraftText=".projectdraft-header-title";
        this.projectsApproved = "h5:contains('Projects Approved')";
        this.projectApprovedText=".projectapprove-table-responsive";
        this.projectsRejected = "h5:contains('Projects Rejected')";
        this.projectRejectedText=".cards-title-dashboard";
        this.viewAll = "button:contains('View All')";
        this.viewNotifications="h2.my-4";
        this.viewAllComments = "button:contains('View all comments')";
        this.profile = "button:contains('View all comments')";
        this.requestType = "#requestType";
        this.methodology = "#methodology";
        this.title = "#title";
        this.description = "#description";
        this.objective = "#objective";
        this.studyTeam = "#studyteam";
        this.principalInvestigator = "#principalinvestigatorname";
        this.coPrincipalInvestigator = "#coordinatingprincipalinvestigatorname";

        this.role = "#role";
        this.uploadBtn = "button:contains('Upload document')";
        this.cancelBtn = "button:contains('CANCEL')";
        this.saveDraft = "button:contains('SAVE DRAFT')";
        this.submit = "button:contains('SUBMIT')";

        //withdraw
        this.projectRow = "tbody tr.highlight-row td:nth-child(1) div:nth-child(1)";
        this.withdrawButton="(//p[text()='Withdraw'])[2]";
        this.reasonForWithdraw=".form-control";
        this.withdrawSubmit=".withdraw_Submit_btn";
        this.popUpYes="//button[text()='Yes']";
        this.closePopUp="//button[text()='Close']";

        //view Documents
        this.viewDocument = "//img[@alt='viewdoc']";
        this.projectName="(//div[contains(@class,'table-responsive')]//table//tr)[2]";

    }

    clickNewRequest() {
        cy.get(this.newRequest).click();
    }

    clickDashboard() {
        cy.get(this.dashboard).click();
    }

    clickProjects() {
        cy.get(this.projects).click();
    }

    clickNotifications() {
        cy.get(this.notifications).click();
    }

    clickLogout() {
        cy.get(this.logout).click();
    }

    clickMyProjects() {
        cy.get(this.myProjects).click();
    }

    clickInDraft() {
        cy.get(this.inDraft).click(); 
    }

    clickProjectsApproved() {
        cy.get(this.projectsApproved).click();
    }

    clickProjectsRejected() {
        cy.get(this.projectsRejected).click();
    }

    clickViewAll() {
        cy.get(this.viewAll).click();
    }

    clickViewAllComments() {
        cy.get(this.viewAllComments).click();
    }

    clickViewDocument() {
        cy.get(this.viewDocument).click();
    }

    clickProfile() {
        cy.get(this.profile).click();
    }

    selectPrincipalInvestigator(index) {
        cy.get(this.principalInvestigator).select(index);
    }

    selectCoPrincipalInvestigator(index) {
        cy.get(this.coPrincipalInvestigator).select(index);
    }

    selectRole(index) {
        cy.get(this.role).select(index);
    }

    clickUploadButton() {
        cy.get(this.uploadBtn).click();
    }

    clickCancelButton() {
        cy.get(this.cancelBtn).click();
    }

    clickSaveDraftButton() {
        cy.get(this.saveDraft).click();
    }

    clickSubmitButton() {
        cy.get(this.submit).click();
    }

    enterAllData({ requestType, methodology, title, description, objective, studyTeam }) {
        cy.get(this.requestType).type(requestType);
        cy.get(this.methodology).type(methodology);
        cy.get(this.title).type(title);
        cy.get(this.description).type(description);
        cy.get(this.objective).type(objective);
        cy.get(this.studyTeam).type(studyTeam);
    }
    clickOnEdit(){
        cy.get(this.editrequest).first().click();

    }
    editTitle(Title){
        cy.get(this.title).click().clear().type(Title);
    }
    verifyMyProjectsText(){
        cy.get(this.myProjectsText).should('be.visible');
    }
    VerifyInDraftText(){
        cy.get(this.inDraftText).should('be.visible');
    }
    verifyProjectApprovedText(){
        cy.get(this.projectApprovedText).should('be.visible');
    }
    verifyProjectRejectedText(){
        cy.get(this.projectRejectedText).should('be.visible');
    }
    verifyViewAllNotifications(){
        cy.get(this.viewNotifications).should('be.visible');
    }
    

    //Withdraw
    clickOnProjectRows(){
        cy.xpath("(//div[contains(@class,'project-request-container')]//table//tr)[2]").click();

    }
    clickOnWithdraw(){
        cy.xpath(this.withdrawButton).click();

    }
    enterReasonForWithdraw(text){
        cy.get(this.reasonForWithdraw).click().type(text);

    }
    clickOnWithdrawSubmit(){
        cy.get(this.withdrawSubmit).click();
    }
    clickOnYesInPopup(){
        cy.xpath(this.popUpYes).click();
    }
    ClickOnClose(){
        cy.xpath(this.closePopUp).click();
    }

    //View Documents
    clickOnProjectName(){
        cy.xpath(this.projectName).click();
    }
    clickOnDocument(){
        cy.xpath(this.viewDocument).click()
    }
}   

export default InitiatorPage;
