"use strict";
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  This file defines a Fabic-styled button.
*/
var core_1 = require("@angular/core");
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "buttonlabel", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'sc-button',
            templateUrl: 'app/shared/button/button.component.html',
            styleUrls: ['app/shared/button/button.component.css']
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map