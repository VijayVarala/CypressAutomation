class InitiatorPage {
    constructor() {
        this.newRequest = "button:contains('NEW REQUEST')";
        this.dashboard = "span:contains('Dashboard')";
        this.projects = "span:contains('Projects')";
        this.notifications = "span:contains('Notifications')";
        this.logout = "span:contains('Logout')";
        this.myProjects = "h5:contains('My Projects')";
        this.inDraft = "h5:contains('In Draft')";
        this.projectsApproved = "h5:contains('Projects Approved')";
        this.projectsRejected = "h5:contains('Projects Rejected')";
        this.viewAll = "button:contains('View All')";
        this.viewAllComments = "button:contains('View all comments')";
        this.viewDocument = "img[alt='viewdoc']";
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
    
}

export default InitiatorPage;
