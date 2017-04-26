/**
 * Created by srina on 1/8/2017.
 */
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
const core_1 = require("@angular/core");
const applicanteducation_service_1 = require("../Services/applicanteducation.service");
let ReviewComponent = class ReviewComponent {
    constructor(applicantdata) {
        this.applicantdata = applicantdata;
        this.ApplicantDetails = {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            country: "",
            streetaAddress1: "",
            streetaAddress2: "",
            city: "",
            state: "",
            zipcode: "",
            education: "",
            collegeName: "",
            status: "",
            courseName: "",
            skill: ""
        };
        this.click = new core_1.EventEmitter();
        // this.applicantdata()
    }
    continueReview() {
        console.log(JSON.stringify(this.ApplicantDetails));
        this.applicantdata.createApplicantEducation(this.ApplicantDetails);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ReviewComponent.prototype, "applicant", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReviewComponent.prototype, "click", void 0);
ReviewComponent = __decorate([
    core_1.Component({
        selector: 'review',
        template: `
<div>         
               <h3>First Name : {{Applicant.firstName}}</h3> 
               <h3>Last Name : {{Applicant.lastName}}</h3>
               <h3>Email : {{Applicant.email}}</h3>
               <h3>Mobile No: {{Applicant.mobile}}</h3>
               <h3>Country : {{Applicant.country}}</h3>
               <h3>Address : {{Applicant.streetaAddress1}}</h3>
               <h3>Address : {{Applicant.streetaAddress2}}</h3>
               <h3>City : {{Applicant.city}}</h3>
               <h3>State : {{Applicant.state}}</h3>
               <h3>Zipcode : {{Applicant.zipcode}}</h3>
               <h3>Education : {{Applicant.education}}</h3>
               <h3>College Name : {{Applicant.collegeName}}</h3>
               <h3>Status : {{Applicant.status}}</h3>
               <h3>Course Name : {{Applicant.courseName}}</h3>
               <h3>Skills : {{Applicant.skill}}</h3>
               </div>`,
        providers: [applicanteducation_service_1.ApplicantEducationService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof applicanteducation_service_1.ApplicantEducationService !== "undefined" && applicanteducation_service_1.ApplicantEducationService) === "function" && _a || Object])
], ReviewComponent);
exports.ReviewComponent = ReviewComponent;
var _a;
//# sourceMappingURL=review.component.js.map