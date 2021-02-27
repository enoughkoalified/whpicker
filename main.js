(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/VD5":
/*!******************************************!*\
  !*** ./src/app/services/flow.service.ts ***!
  \******************************************/
/*! exports provided: FlowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowService", function() { return FlowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FlowService {
    constructor() {
        this.opponentPick = [];
        this.pick = [];
        this.opponentDefender = null;
        this.ourDefender = null;
    }
}
FlowService.ɵfac = function FlowService_Factory(t) { return new (t || FlowService)(); };
FlowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlowService, factory: FlowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\WarhammerPicker\client\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2wuE":
/*!*************************************************************!*\
  !*** ./src/app/components/team-pick/team-pick.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamPickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPickComponent", function() { return TeamPickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flow.service */ "/VD5");
/* harmony import */ var src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/score-data.service */ "O5sX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TeamPickComponent_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamPickComponent_div_2_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeDefender(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.defender.roasterName);
} }
function TeamPickComponent_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamPickComponent_div_2_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const roaster_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeRoaster(roaster_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roaster_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roaster_r7.roasterName);
} }
function TeamPickComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0438\u043A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamPickComponent_div_2_span_3_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamPickComponent_div_2_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.defender != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.flowService.pick);
} }
function TeamPickComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamPickComponent_div_3_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeDefender(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.defender.roasterName);
} }
function TeamPickComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamPickComponent_div_3_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const roaster_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.removeOpponentRoaster(roaster_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roaster_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roaster_r14.roasterName);
} }
function TeamPickComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0438\u043A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamPickComponent_div_3_span_3_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamPickComponent_div_3_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.defender != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.flowService.opponentPick);
} }
function TeamPickComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamPickComponent_div_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.select(item_r18.roaster); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-success", item_r18.isBestChance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.roaster.roasterName);
} }
function TeamPickComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u0441\u0442\u0435\u0440:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamPickComponent_div_4_button_4_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.roasters);
} }
class TeamPickComponent {
    constructor(flowService, scoreDataService) {
        this.flowService = flowService;
        this.scoreDataService = scoreDataService;
        this.pickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bestChanceRoasters = [];
        this.defender = null;
    }
    ngOnInit() {
        this.roasters = this.team.roasters.map((x) => {
            return { roaster: x, isBestChance: true };
        });
        if (this.team.name != this.flowService.opponent.name) {
            this.isOurs = true;
        }
    }
    selectDefender(roaster) {
        /* if (this.isOurs) {
          this.flowService.ourDefender = roaster;
        } else {
          this.flowService.opponentDefender = roaster;
        } */
        this.defender = roaster;
    }
    select(roaster) {
        if (this.isOurs) {
            if (this.defender == null) {
                this.selectDefender(roaster);
            }
            else {
                this.flowService.pick.push(roaster);
            }
        }
        else {
            if (this.defender == null) {
                this.selectDefender(roaster);
            }
            else {
                this.flowService.opponentPick.push(roaster);
            }
        }
        if (this.flowService.pick.length < 2) {
            this.pickEvent.emit(roaster);
        }
        this.roasters = this.roasters.filter((x) => x.roaster.roasterName != roaster.roasterName);
    }
    markBestChanceRoasters(maxScoreRoasters) {
        this.roasters.forEach((element) => {
            if (maxScoreRoasters.some((x) => x.ourRoasterName == element.roaster.roasterName)) {
                element.isBestChance = true;
            }
            else {
                element.isBestChance = false;
            }
        });
    }
    removeDefender() {
        this.roasters.push({ roaster: this.defender, isBestChance: false });
        this.markBestChanceRoasters([]);
        this.defender = null;
    }
    removeRoaster(roaster) {
        this.roasters.push({ roaster: roaster, isBestChance: false });
        this.flowService.pick = this.flowService.pick.filter(x => x.roasterName != roaster.roasterName);
        this.pickEvent.emit(roaster);
    }
    removeOpponentRoaster(roaster) {
        this.roasters.push({ roaster: roaster, isBestChance: false });
        this.flowService.opponentPick = this.flowService.opponentPick.filter(x => x.roasterName != roaster.roasterName);
        this.pickEvent.emit(roaster);
    }
}
TeamPickComponent.ɵfac = function TeamPickComponent_Factory(t) { return new (t || TeamPickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoreDataService"])); };
TeamPickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamPickComponent, selectors: [["team-pick"]], inputs: { team: "team" }, outputs: { pickEvent: "pickEvent" }, decls: 5, vars: 4, consts: [[4, "ngIf"], ["class", "badge badge-warning", 3, "click", 4, "ngIf"], ["class", "badge badge-info", 3, "click", 4, "ngFor", "ngForOf"], [1, "badge", "badge-warning", 3, "click"], [1, "badge", "badge-info", 3, "click"], [1, "defender-pick", "text-center"], ["type", "button", "class", "btn roaster-btn", 3, "btn-success", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "roaster-btn", 3, "click"]], template: function TeamPickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamPickComponent_div_2_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamPickComponent_div_3_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamPickComponent_div_4_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.team.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOurs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOurs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.defender == null || (ctx.flowService.opponentPick.length < 2 && !ctx.isOurs || ctx.flowService.pick.length < 2 && ctx.isOurs));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".roaster-btn[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtLXBpY2svdGVhbS1waWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW0tcGljay90ZWFtLXBpY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb2FzdGVyLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamPickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'team-pick',
                templateUrl: './team-pick.component.html',
                styleUrls: ['./team-pick.component.css'],
            }]
    }], function () { return [{ type: src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"] }, { type: src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoreDataService"] }]; }, { team: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FQPo":
/*!**************************************!*\
  !*** ./src/app/models/teamMember.ts ***!
  \**************************************/
/*! exports provided: TeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return TeamMember; });
class TeamMember {
    constructor(roasterName) {
        this.roasterName = roasterName;
    }
}


/***/ }),

/***/ "LZEh":
/*!***************************************************!*\
  !*** ./src/app/components/pick/pick.component.ts ***!
  \***************************************************/
/*! exports provided: PickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickComponent", function() { return PickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flow.service */ "/VD5");
/* harmony import */ var src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/score-data.service */ "O5sX");
/* harmony import */ var _team_pick_team_pick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team-pick/team-pick.component */ "2wuE");





const _c0 = ["ours"];
const _c1 = ["opponent"];
class PickComponent {
    constructor(flowService, scoreDataService) {
        this.flowService = flowService;
        this.scoreDataService = scoreDataService;
        this.ourTeam = this.scoreDataService.ourTeam;
        this.opponentTeam = this.flowService.opponent;
    }
    calculateBestChanceRoasters(roaster) {
        debugger;
        if (this.opponentPickComponent.defender == null)
            return;
        var opponentTeamScores = this.scoreDataService.scores.filter((x) => x.team == this.flowService.opponent.name)[0].scores;
        var opponentRoasterScores = opponentTeamScores.filter((x) => x.theirRoasterName == this.opponentPickComponent.defender.roasterName &&
            !this.flowService.pick.some((y) => y.roasterName == x.ourRoasterName) &&
            this.oursPickComponent.defender.roasterName != x.ourRoasterName);
        var maxScore = Math.max.apply(Math, opponentRoasterScores.map((x) => x.score));
        var maxScoreRoasters = opponentRoasterScores.filter((x) => x.score == maxScore);
        this.oursPickComponent.markBestChanceRoasters(maxScoreRoasters);
    }
}
PickComponent.ɵfac = function PickComponent_Factory(t) { return new (t || PickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoreDataService"])); };
PickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PickComponent, selectors: [["pick"]], viewQuery: function PickComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.oursPickComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.opponentPickComponent = _t.first);
    } }, decls: 6, vars: 2, consts: [[1, "ours"], [3, "team", "pickEvent"], ["ours", ""], [1, "theirs", "top-buffer"], ["opponent", ""]], template: function PickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "team-pick", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pickEvent", function PickComponent_Template_team_pick_pickEvent_1_listener($event) { return ctx.calculateBestChanceRoasters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "team-pick", 1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pickEvent", function PickComponent_Template_team_pick_pickEvent_4_listener($event) { return ctx.calculateBestChanceRoasters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", ctx.ourTeam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", ctx.opponentTeam);
    } }, directives: [_team_pick_team_pick_component__WEBPACK_IMPORTED_MODULE_3__["TeamPickComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljay9waWNrLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pick',
                templateUrl: './pick.component.html',
                styleUrls: ['./pick.component.css'],
            }]
    }], function () { return [{ type: src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"] }, { type: src_app_services_score_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoreDataService"] }]; }, { oursPickComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ours']
        }], opponentPickComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['opponent']
        }] }); })();


/***/ }),

/***/ "O5sX":
/*!************************************************!*\
  !*** ./src/app/services/score-data.service.ts ***!
  \************************************************/
/*! exports provided: ScoreDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreDataService", function() { return ScoreDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScoreDataService {
    constructor() {
        this.scores = [];
        this.roasters = [];
    }
    setScores(data) {
        this.scores = data;
    }
    setRoasters(data) {
        this.roasters = data;
    }
    setOurTeam(team) {
        this.ourTeam = team;
    }
}
ScoreDataService.ɵfac = function ScoreDataService_Factory(t) { return new (t || ScoreDataService)(); };
ScoreDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScoreDataService, factory: ScoreDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_load_scores_load_scores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/load-scores/load-scores.component */ "gLK9");
/* harmony import */ var _components_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/lineup/lineup.component */ "lDnU");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
/* harmony import */ var _components_pick_pick_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pick/pick.component */ "LZEh");
/* harmony import */ var _components_team_pick_team_pick_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/team-pick/team-pick.component */ "2wuE");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_load_scores_load_scores_component__WEBPACK_IMPORTED_MODULE_4__["LoadScoresComponent"],
        _components_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_5__["LineUpComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
        _components_pick_pick_component__WEBPACK_IMPORTED_MODULE_7__["PickComponent"],
        _components_team_pick_team_pick_component__WEBPACK_IMPORTED_MODULE_8__["TeamPickComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_load_scores_load_scores_component__WEBPACK_IMPORTED_MODULE_4__["LoadScoresComponent"],
                    _components_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_5__["LineUpComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
                    _components_pick_pick_component__WEBPACK_IMPORTED_MODULE_7__["PickComponent"],
                    _components_team_pick_team_pick_component__WEBPACK_IMPORTED_MODULE_8__["TeamPickComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gLK9":
/*!*****************************************************************!*\
  !*** ./src/app/components/load-scores/load-scores.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScoresComponent", function() { return LoadScoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/team */ "sTDC");
/* harmony import */ var src_app_models_teamMember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/teamMember */ "FQPo");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lineup_lineup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lineup/lineup.component */ "lDnU");
/* harmony import */ var _services_score_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/score-data.service */ "O5sX");








class LoadScoresComponent {
    constructor(scoreDataService) {
        this.scoreDataService = scoreDataService;
        this.playersPerTeam = 5;
        this.isFileLoaded = false;
    }
    openFile() {
        document.getElementById('customFile').click();
    }
    uploadData(event) {
        const target = event.target;
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e) => {
            /* create workbook */
            const binarystr = e.target.result;
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](binarystr, { type: 'binary' });
            /* selected the first sheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* save data */
            const data = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
            // console.log(data); // Data will be logged in array format containing objects
            var scoresData = [];
            var roastersData = [];
            var ourRoaster = [];
            for (var j = 0; j < this.playersPerTeam; j++) {
                ourRoaster.push(data[0]['Наш Ростер ' + (j + 1)]);
            }
            for (var i = 1; i < data.length;) {
                var item = {
                    team: data[i]['Название команды/ростера'],
                    scores: [],
                };
                var itemForRoaster = {
                    teamName: data[i]['Название команды/ростера'],
                    roasters: [],
                };
                for (var i = i + 1, k = 0; k < this.playersPerTeam; k++, i++) {
                    for (var j = 1; j <= this.playersPerTeam; j++) {
                        var score = {
                            theirRoasterName: data[i]['Название команды/ростера'],
                            ourRoasterName: data[0]['Наш Ростер ' + j],
                            score: data[i]['Наш Ростер ' + j],
                        };
                        item.scores.push(score);
                    }
                    itemForRoaster.roasters.push(data[i]['Название команды/ростера']);
                }
                scoresData.push(item);
                roastersData.push(itemForRoaster);
            }
            this.scoreDataService.setScores(scoresData);
            this.scoreDataService.setRoasters(roastersData.map((x) => new src_app_models_team__WEBPACK_IMPORTED_MODULE_1__["Team"](x.teamName, x.roasters.map((y) => new src_app_models_teamMember__WEBPACK_IMPORTED_MODULE_2__["TeamMember"](y)))));
            this.scoreDataService.setOurTeam(new src_app_models_team__WEBPACK_IMPORTED_MODULE_1__["Team"]('Наша команда', ourRoaster.map((x) => new src_app_models_teamMember__WEBPACK_IMPORTED_MODULE_2__["TeamMember"](x))));
            console.log(this.scoreDataService.scores);
            console.log(this.scoreDataService.roasters);
            console.log(this.scoreDataService.ourTeam);
            this.lineupComponent.updateTeams();
            this.isFileLoaded = true;
        };
    }
}
LoadScoresComponent.ɵfac = function LoadScoresComponent_Factory(t) { return new (t || LoadScoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_score_data_service__WEBPACK_IMPORTED_MODULE_5__["ScoreDataService"])); };
LoadScoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadScoresComponent, selectors: [["load-scores"]], viewQuery: function LoadScoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_4__["LineUpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineupComponent = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "container", "top-buffer", "h-100"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "my-auto", 3, "click"], [1, "col", "text-center", "d-none"], ["type", "file", "id", "customFile", "accept", ".xlsx", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], [1, "row", "top-buffer"], [2, "width", "100%"]], template: function LoadScoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadScoresComponent_Template_button_click_2_listener() { return ctx.openFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoadScoresComponent_Template_input_change_5_listener($event) { return ctx.uploadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line-up", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("h-100", !ctx.isFileLoaded);
    } }, directives: [_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_4__["LineUpComponent"]], styles: [".my-auto[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkLXNjb3Jlcy9sb2FkLXNjb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZC1zY29yZXMvbG9hZC1zY29yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1hdXRvIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadScoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'load-scores',
                templateUrl: './load-scores.component.html',
                styleUrls: ['./load-scores.component.css'],
            }]
    }], function () { return [{ type: _services_score_data_service__WEBPACK_IMPORTED_MODULE_5__["ScoreDataService"] }]; }, { lineupComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_lineup_lineup_component__WEBPACK_IMPORTED_MODULE_4__["LineUpComponent"]]
        }] }); })();


/***/ }),

/***/ "lDnU":
/*!*******************************************************!*\
  !*** ./src/app/components/lineup/lineup.component.ts ***!
  \*******************************************************/
/*! exports provided: LineUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineUpComponent", function() { return LineUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_score_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score-data.service */ "O5sX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team/team.component */ "yoyL");





function LineUpComponent_team_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "team", 1);
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", team_r1);
} }
class LineUpComponent {
    constructor(scoreDataService) {
        this.scoreDataService = scoreDataService;
        this.updateTeams();
    }
    updateTeams() {
        this.teams = this.scoreDataService.roasters;
        console.log(this.teams);
    }
}
LineUpComponent.ɵfac = function LineUpComponent_Factory(t) { return new (t || LineUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_score_data_service__WEBPACK_IMPORTED_MODULE_1__["ScoreDataService"])); };
LineUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineUpComponent, selectors: [["line-up"]], decls: 1, vars: 1, consts: [[3, "team", 4, "ngFor", "ngForOf"], [3, "team"]], template: function LineUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LineUpComponent_team_0_Template, 1, 1, "team", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"]], styles: [".card[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW5ldXAvbGluZXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpbmV1cC9saW5ldXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'line-up',
                templateUrl: './lineup.component.html',
                styleUrls: ['./lineup.component.css'],
            }]
    }], function () { return [{ type: _services_score_data_service__WEBPACK_IMPORTED_MODULE_1__["ScoreDataService"] }]; }, null); })();


/***/ }),

/***/ "sTDC":
/*!********************************!*\
  !*** ./src/app/models/team.ts ***!
  \********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
class Team {
    constructor(name, roasters) {
        this.name = name;
        this.roasters = roasters;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_load_scores_load_scores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/load-scores/load-scores.component */ "gLK9");
/* harmony import */ var _components_pick_pick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pick/pick.component */ "LZEh");






const routes = [
    { path: 'pick', component: _components_pick_pick_component__WEBPACK_IMPORTED_MODULE_3__["PickComponent"] },
    { path: '**', component: _components_load_scores_load_scores_component__WEBPACK_IMPORTED_MODULE_2__["LoadScoresComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yoyL":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flow.service */ "/VD5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TeamComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roaster_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", roaster_r1.roasterName, " ");
} }
class TeamComponent {
    constructor(flowService, router) {
        this.flowService = flowService;
        this.router = router;
    }
    select() {
        this.flowService.opponent = this.team;
        this.router.navigateByUrl('/pick');
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["team"]], inputs: { team: "team" }, decls: 5, vars: 2, consts: [[1, "card", 3, "click"], [1, "card-body"], [1, "card-title"], [4, "ngFor", "ngForOf"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_0_listener() { return ctx.select(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamComponent_li_4_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.team.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team.roasters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css'],
            }]
    }], function () { return [{ type: src_app_services_flow_service__WEBPACK_IMPORTED_MODULE_1__["FlowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { team: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map