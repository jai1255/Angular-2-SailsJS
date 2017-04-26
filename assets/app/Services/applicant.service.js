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
 * Created by srina on 1/4/2017.
 */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let ApplicantDataCreateService = class ApplicantDataCreateService {
    constructor(http) {
        this.http = http;
    }
    createApplicantData(ApplicantData) {
        console.log("From Service" + JSON.stringify(ApplicantData));
        console.log(window.URL);
        const headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods:", " GET, POST, PUT, DELETE, OPTIONS");
        headers.append("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (window.location.href == "https://hyr-fusion-dev.herokuapp.com/appli") {
            this.http.post('https://hyr-fusion-dev.herokuapp.com/applicant/create', ApplicantData, headers)
                .subscribe(() => { }, err => console.error(err));
        }
        else if (window.location.href == "http://hyr-fusion-dev.herokuapp.com/appli") {
            this.http.post('http://hyr-fusion-dev.herokuapp.com/applicant/create', ApplicantData, headers)
                .subscribe(() => { }, err => console.error(err));
        }
        else {
            this.http.post('http://localhost:1337/applicant/create', ApplicantData, headers)
                .subscribe(() => { }, err => console.error(err));
        }
    }
};
ApplicantDataCreateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApplicantDataCreateService);
exports.ApplicantDataCreateService = ApplicantDataCreateService;
//# sourceMappingURL=applicant.service.js.map