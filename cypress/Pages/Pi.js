class pi{
    constructor(){
        this.lodgeNewRequest="button:contains('New Lodge Request')";
        this.inDraft="h5:contains('In Draft')";
        this.projectsApproved="h5:contains('Projects Approved')";
        this.projectsRejected="h5:contains('Projects Rejected')";
        this.viewAll="button:contains('View All')";
        this.viewOtherComments=".other-comment";
        this.requestSubmission="button:contains('Request Submission')";
        this.updateStatus="button:contains('Update Status')";
        this.viewDocuments="//img[@alt='Document admin']";
        //withdraw
        this.withdraw="p:contains('Action : Withdraw')";
        this.reasonForWithdraw=".form-control";
        this.submitButton="button:contains('Submit')";
        this.cancelButton="button:contains('Cancel')";
        this.popUpYes="//button[text()='Yes']";
        this.closePopUp="//button[text()='Close']"
        
    }
}