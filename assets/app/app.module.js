"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const app_routing_1 = require("./app.routing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const applicant_service_1 = require("./Services/applicant.service");
const applicant_mail_service_1 = require("./Services/applicant.mail.service");
const test_component_1 = require("./test.component");
const contact_component_1 = require("./contact.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, contact_component_1.ContactComponent, app_routing_1.routingComponents, test_component_1.TestComponent],
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ng_bootstrap_1.NgbModule.forRoot(), forms_1.FormsModule, router_1.RouterModule, app_routing_1.AppRoutingModule],
        bootstrap: [app_component_1.AppComponent],
        providers: [applicant_service_1.ApplicantDataCreateService, applicant_mail_service_1.ApplicantMailService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map