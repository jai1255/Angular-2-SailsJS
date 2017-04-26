"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by srina on 1/5/2017.
 */
const core_1 = require("@angular/core");
const applicant_service_1 = require("./Services/applicant.service");
const applicant_mail_service_1 = require("./Services/applicant.mail.service");
const router_1 = require("@angular/router");
let ContactComponent = class ContactComponent {
    constructor(applicantDataService, router, applicantMailService) {
        this.applicantDataService = applicantDataService;
        this.router = router;
        this.applicantMailService = applicantMailService;
        this.Applicant = {
            firstName: "",
            lastName: "",
            email: "",
            mobile: 0,
            country: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            state: "",
            zipcode: 0,
            education: "",
            collegeName: "",
            status: "",
            courseName: "",
            employer: "NA",
            jobTitle: "NA",
            startDate: "01/01/0001",
            endDate: "01/01/0001",
            immigration: "",
            professor: "",
            profemail: "",
            imgstart: "01/01/0001",
            imgend: "01/01/0001",
            skill: "",
            referred: "",
        };
        this.ApplicantField = {
            firstNameField: ["black", " "],
            lastNameField: ["black", " "],
            emailField: ["black", " "],
            cityField: ["black", " "],
            stateField: ["black", " "],
            mobileField: ["black", " "],
            zipcodeField: ["black", " "],
            educationField: ["black", " "],
            collegeNameField: ["black", " "],
            courseNameField: ["black", " "],
            employerField: ["black", " "],
            jobTitleField: ["black", " "],
            ProfessorField: ["black", ""],
            ProfemailField: ["black", ""],
            referredField: ["black", ""],
            flag: true
        };
        this.workExpFieldYes = true;
        this.workExpFieldNo = true;
        this.currentEmployerFieldYes = true;
        this.currentEmployerFieldNo = true;
        this.stdate_op = false;
        this.enddate_op = false;
        this.validdatestarts = false;
        this.imgstartyear = "";
        this.imgstartmh = "";
        this.imgendyear = "";
        this.imgendmh = "";
        this.validdateends = false;
        this.prof_details = false;
    }
    applicant_condition(value) {
    }
    fieldValidatio() {
        var regex = /^[a-zA-Z ]+$/;
        // console.log(this.ApplicantEducation.collegeName);
        if (!(((this.Applicant.firstName).match(regex)) && (this.Applicant.firstName != " "))) {
            //alert("Alphabets only!");
            this.ApplicantField.firstNameField[0] = "red";
            //this.applicant_condition(0);
            this.ApplicantField.firstNameField[1] = "*Firstname is invalid.It should contain only alphabets";
            return true;
        }
        else {
            this.ApplicantField.firstNameField[0] = "black";
            this.ApplicantField.firstNameField[1] = "";
            return false;
        }
    }
    ;
    lastnameValidatio() {
        var regex = /^[a-zA-Z ]+$/;
        // console.log(this.ApplicantEducation.collegeName);  employer
        if (!((this.Applicant.lastName).match(regex))) {
            this.ApplicantField.lastNameField[0] = "red";
            //alert("Alphabets only!");
            this.ApplicantField.lastNameField[1] = "*LastName is invalid only aphabets are allowed";
            this.applicant_condition(0);
            return true;
        }
        else {
            this.ApplicantField.lastNameField[0] = "black";
            this.ApplicantField.lastNameField[1] = "";
            return false;
        }
    }
    ;
    fieldValidatio1() {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(this.Applicant.email).match(regex)) {
            this.ApplicantField.emailField[0] = "red";
            this.ApplicantField.emailField[1] = "*Email is invalid";
            return true;
        }
        else {
            this.ApplicantField.emailField[0] = "black";
            this.ApplicantField.emailField[1] = "";
            return false;
        }
    }
    ;
    cityValidation() {
        var regex = /^[a-zA-Z ]+$/;
        if (!((this.Applicant.city).match(regex))) {
            //alert("Alphabets only!");
            this.ApplicantField.cityField[0] = "red";
            this.ApplicantField.cityField[1] = "City Name is Invalid";
            return true;
        }
        else {
            this.ApplicantField.cityField[1] = "black";
            this.ApplicantField.cityField[1] = "";
            return false;
        }
    }
    stateValidation() {
        var regex = /^[a-zA-Z ]+$/;
        if (!((this.Applicant.state).match(regex))) {
            //alert("Alphabets only!");
            this.ApplicantField.stateField[0] = "red";
            this.ApplicantField.stateField[1] = "State Name is Invalid";
            return true;
        }
        else {
            this.ApplicantField.stateField[0] = "black";
            this.ApplicantField.stateField[1] = "";
            return false;
        }
    }
    fieldValidatio2() {
        var regex = /^[0-9]+$/;
        if ((!(this.Applicant.mobile).toString().match(regex)) || (((this.Applicant.mobile).toString().length) < 10)) {
            this.ApplicantField.mobileField[0] = "red";
            this.ApplicantField.mobileField[1] = "Mobile is Invalid";
            ////alert("Alphabets only!");
            return true;
        }
        else {
            this.ApplicantField.mobileField[0] = "black";
            this.ApplicantField.mobileField[1] = "";
            return false;
        }
    }
    ;
    fieldValidatio3() {
        var regex = /^[0-9]+$/;
        if ((!(this.Applicant.zipcode).toString().match(regex))) {
            this.ApplicantField.zipcodeField[0] = "red";
            this.ApplicantField.zipcodeField[1] = "Zip Code is Invalid";
            ////alert("Alphabets only!");
            return true;
        }
        else {
            this.ApplicantField.zipcodeField[0] = "black";
            this.ApplicantField.zipcodeField[1] = "";
            return false;
        }
    }
    continue() {
        let a = false;
        console.log(this.fieldValidatio() + " " + (this.fieldValidatio1()) + " " + (this.fieldValidatio2()) + " " + (this.fieldValidatio3()) + " " + (this.cityValidation()) + " " + (this.stateValidation()) + " " + (this.fieldValidation()) + " " + (this.majorValid()) + " " + (this.validateSkillField()) + " " + (this.validateEmployerField()) + " " + (this.validateJobTitleField()));
        if (((this.fieldValidatio()) || (this.lastnameValidatio()) || (this.fieldValidatio1()) || (this.fieldValidatio2()) || (this.fieldValidatio3()) || (this.cityValidation()) || (this.stateValidation()) || (this.fieldValidation()) || (this.majorValid()) || (this.validateSkillField()) || (this.validateEmployerField()) || (this.validateJobTitleField()))) {
            alert("Please verify the fields properly");
            return false;
        }
        else {
            if (this.Applicant.startDate == "") {
                this.Applicant.endDate = this.Applicant.endDate.month + "/" + this.Applicant.endDate.day + "/" + this.Applicant.endDate.year;
            }
            if (this.Applicant.endDate == "") {
                this.Applicant.startDate = this.Applicant.startDate.month + "/" + this.Applicant.startDate.day + "/" + this.Applicant.startDate.year;
            }
            this.Applicant.imgstart = this.Applicant.imgstart.month + "/" + this.Applicant.imgstart.day + "/" + this.Applicant.imgstart.year;
            this.Applicant.imgend = this.Applicant.imgend.month + "/" + this.Applicant.imgend.day + "/" + this.Applicant.imgend.year;
            console.log(this.Applicant.startDate);
            console.log(JSON.stringify(this.Applicant));
            this.applicantDataService.createApplicantData(this.Applicant);
            for (var i = 0; i < 1000; i++) {
                if (i == 1000)
                    a = true;
            }
            //this.applicantMailService.sendApplicantMail(this.Applicant);
            this.router.navigate(['/test']);
        }
        // if(a){this.router.navigate(['/test']);}
    }
    fieldValidation() {
        var regex = /^[a-zA-Z ]+$/;
        // console.log(this.ApplicantEducation.collegeName);  courseName
        if (!((this.Applicant.collegeName).match(regex))) {
            this.ApplicantField.collegeNameField[0] = "red";
            this.ApplicantField.collegeNameField[1] = "College Name is Invalid";
            //alert("Alphabets only!");
            return true;
        }
        else {
            this.ApplicantField.collegeNameField[0] = "black";
            this.ApplicantField.collegeNameField[1] = "";
            return false;
        }
    }
    ;
    majorValid() {
        var regex = /^[a-zA-Z ]+$/;
        // console.log(this.ApplicantEducation.collegeName);  skill
        if (!((this.Applicant.courseName).match(regex))) {
            this.ApplicantField.courseNameField[0] = "red";
            this.ApplicantField.courseNameField[1] = "Course Name is Invalid";
            //alert("Alphabets only!");
            return true;
        }
        else {
            this.ApplicantField.courseNameField[0] = "black";
            this.ApplicantField.courseNameField[1] = "";
            return false;
        }
    }
    ;
    validateSkillField() {
        var regex = /^[a-zA-Z0-9 ,-]+$/;
        // console.log(this.ApplicantEducation.collegeName);  employer
        if (!((this.Applicant.skill).match(regex))) {
            //alert("Alphabets only!");
            return true;
        }
        else {
            return false;
        }
        ;
    }
    ;
    validateWorkExpFieldYes() {
        this.workExpFieldYes = false;
        this.workExpFieldNo = true;
    }
    validateWorkExpFieldNo() {
        this.workExpFieldYes = true;
        this.workExpFieldNo = false;
    }
    validateCurrentEmployerFieldYes() {
        this.currentEmployerFieldYes = false;
        this.currentEmployerFieldNo = true;
    }
    coursenamechange(value) {
        this.Applicant.courseName = value;
    }
    validateCurrentEmployerFieldNo() {
        this.currentEmployerFieldYes = true;
        this.currentEmployerFieldNo = false;
        return false;
    }
    validateEmployerField() {
        var regex = /^[a-zA-Z . ]+$/;
        // console.log(this.ApplicantEducation.collegeName);  jobTitle
        if (!((this.Applicant.employer).match(regex))) {
            //alert("Alphabets only!");
            this.ApplicantField.employerField[0] = "red";
            this.ApplicantField.employerField[1] = "Employer Name is Invalid";
            return true;
        }
        else {
            this.ApplicantField.employerField[0] = "black";
            this.ApplicantField.employerField[1] = "";
            return false;
        }
    }
    validateJobTitleField() {
        var regex = /^[a-zA-Z/ ]+$/;
        // console.log(this.ApplicantEducation.collegeName);  jobTitle
        if (!((this.Applicant.jobTitle).match(regex))) {
            //alert("Alphabets only!");
            this.ApplicantField.jobTitleField[0] = "red";
            this.ApplicantField.jobTitleField[1] = "Job Title is Invalid";
            return true;
        }
        else {
            this.ApplicantField.jobTitleField[0] = "black";
            this.ApplicantField.jobTitleField[1] = "";
            return false;
        }
    }
    date_start(value) {
        this.Applicant.imgstart = value;
        var d = new Date();
        this.imgstartyear = value.year;
        this.imgstartmh = value.month;
        if ((((d.getFullYear() - 1) > value.year) || (d.getFullYear() + 1) < value.year)) {
            this.validdatestarts = true;
        }
        else
            this.validdatestarts = false;
    }
    date_end(value) {
        this.Applicant.imgend = value;
        this.imgendyear = value.year;
        this.imgendmh = value.month;
        var aa = ((this.imgendyear > this.imgstartyear) ? true : (this.imgendyear == this.imgstartyear) ? (this.imgendmh > this.imgstartmh) ? true : false : false);
        var d = new Date();
        if (((((d.getFullYear() - 1) > value.year) || (d.getFullYear() + 1) < value.year)) || !aa) {
            this.validdateends = true;
        }
        else
            this.validdateends = false;
    }
    immgdate_op() {
        if (this.Applicant.immigration != "GC" && this.Applicant.immigration != "US citizen") {
            this.stdate_op = true;
            this.enddate_op = true;
            this.Applicant.imgstart = "";
            this.Applicant.imgend = "";
        }
        else {
            this.stdate_op = false;
            this.enddate_op = false;
            this.Applicant.imgstart = "";
            this.Applicant.imgend = "";
        }
        this.prof_details = (this.Applicant.immigration == "F1-CPT") ? true : false; //updated
    }
    profvalidation() {
        var regex = /^[a-zA-Z ]+$/;
        // console.log(this.ApplicantEducation.collegeName);
        if (!(((this.Applicant.professor).match(regex)) && (this.Applicant.professor != " "))) {
            //alert("Alphabets only!");
            this.ApplicantField.ProfessorField[0] = "red";
            //this.applicant_condition(0);
            this.ApplicantField.ProfessorField[1] = "*professor name is invalid";
            return true;
        }
        else {
            this.ApplicantField.ProfessorField[0] = "black";
            this.ApplicantField.ProfessorField[1] = "";
            return false;
        }
    }
    profemailvalidation() {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(this.Applicant.profemail).match(regex)) {
            this.ApplicantField.ProfemailField[0] = "red";
            this.ApplicantField.ProfemailField[1] = "*Email is invalid";
            return true;
        }
        else {
            this.ApplicantField.ProfemailField[0] = "black";
            this.ApplicantField.ProfemailField[1] = "";
            return false;
        }
    }
    ;
    referenceValidation() {
        var regex = /^[a-zA-Z ]+$/;
        if (!(this.Applicant.referred.match(regex))) {
            this.ApplicantField.referredField[0] = "red";
            //this.applicant_condition(0);
            this.ApplicantField.referredField[1] = "*Reference name is invalid.It should contain only alphabets";
            return true;
        }
        else {
            this.ApplicantField.referredField[0] = "black";
            this.ApplicantField.referredField[1] = "";
            return false;
        }
    }
};
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact',
        templateUrl: 'contact.component.html',
        providers: [applicant_service_1.ApplicantDataCreateService, applicant_mail_service_1.ApplicantMailService]
    }),
    __metadata("design:paramtypes", [applicant_service_1.ApplicantDataCreateService, router_1.Router, applicant_mail_service_1.ApplicantMailService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map