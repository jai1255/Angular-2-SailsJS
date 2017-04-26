"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by srina on 1/11/2017.
 */
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const contact_component_1 = require("./contact.component");
const test_component_1 = require("./test.component");
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'appli' },
    { path: 'appli', component: contact_component_1.ContactComponent },
    { path: 'test', component: test_component_1.TestComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [contact_component_1.ContactComponent, test_component_1.TestComponent];
//# sourceMappingURL=app.routing.js.map