var R6Scheduler =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/R6Scheduler.ts":
/*!****************************!*\
  !*** ./src/R6Scheduler.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/helpers/helpers */ "./src/helpers/helpers.ts");

var R6Scheduler = /** @class */ (function () {
    function R6Scheduler(params) {
        this.dom = params.container;
        this.currentDate = params.currentDate;
        this.locale = "pl-PL";
        this.numerOfDaysInCurrentMonth = _src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getDaysInMonth(this.currentDate);
        this.monthName = this._getMonthName(this.currentDate);
        this.dayNumber = this.currentDate.getDate();
        this.monthNumber = this.currentDate.getMonth();
        this.yearNumber = this.currentDate.getFullYear();
        this.dom.appendChild(this._drawTopHeader());
        this.dom.appendChild(this._drawHeader());
        this.dom.appendChild(this._drawDays());
    }
    R6Scheduler.prototype._getWeekDays = function () {
        var baseDate = new Date(Date.UTC(2017, 0, 2)); // Monday
        var weekDays = [];
        for (var i = 0; i < 7; i++) {
            weekDays.push(baseDate.toLocaleDateString(this.locale, { weekday: 'narrow' }));
            baseDate.setDate(baseDate.getDate() + 1);
        }
        return weekDays;
    };
    R6Scheduler.prototype._getMonthName = function (date) {
        return date.toLocaleString(this.locale, { month: "long" }).toUpperCase();
    };
    R6Scheduler.prototype._drawTopHeader = function () {
        var wrapper = document.createElement("div");
        wrapper.classList.add("r6-month-name");
        wrapper.appendChild(document.createTextNode(this.monthName));
        return wrapper;
    };
    R6Scheduler.prototype._drawHeader = function () {
        var headerWrapper = document.createElement("div");
        headerWrapper.classList.add("r6-header");
        var elements = this._getWeekDays();
        elements.forEach(function (el) {
            var dayName = document.createElement("div");
            dayName.classList.add("r6-cell");
            dayName.appendChild(document.createTextNode(el));
            headerWrapper.appendChild(dayName);
        });
        return headerWrapper;
    };
    R6Scheduler.prototype._drawDays = function () {
        var daysWrapper = document.createElement("div");
        var beginGap = this._findGaps(1);
        this._drawGap(beginGap, daysWrapper);
        for (var i = 1; i <= this.numerOfDaysInCurrentMonth; i++) {
            var day = document.createElement("div");
            day.classList.add("r6-day");
            day.appendChild(document.createTextNode(String(i)));
            daysWrapper.appendChild(day);
        }
        var endGap = this._findGaps(this.numerOfDaysInCurrentMonth);
        this._drawGap(endGap, daysWrapper);
        return daysWrapper;
    };
    R6Scheduler.prototype._drawGap = function (gap, daysWrapper) {
        if (gap !== 0) {
            for (var i = 1; i <= gap; i++) {
                var emptyDay = document.createElement("div");
                emptyDay.classList.add("r6-day");
                emptyDay.classList.add("r6-empty-day");
                emptyDay.appendChild(document.createTextNode("-"));
                daysWrapper.appendChild(emptyDay);
            }
        }
    };
    R6Scheduler.prototype._findGaps = function (dayNumber) {
        var date = new Date(this.yearNumber, this.monthNumber, dayNumber);
        var gap = 0;
        if (dayNumber === 1) {
            if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isMonday(date)) {
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isTuesday(date)) {
                gap += 1;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isWednesday(date)) {
                gap += 2;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isThursday(date)) {
                gap += 3;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isFriday(date)) {
                gap += 4;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isSaturday(date)) {
                gap += 5;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isSunday(date)) {
                gap += 6;
                return gap;
            }
        }
        else {
            //looking for last day
            if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isSunday(date)) {
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isSaturday(date)) {
                gap += 1;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isFriday(date)) {
                gap += 2;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isThursday(date)) {
                gap += 3;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isWednesday(date)) {
                gap += 4;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isTuesday(date)) {
                gap += 5;
                return gap;
            }
            else if (_src_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isMonday(date)) {
                gap += 6;
                return gap;
            }
        }
    };
    return R6Scheduler;
}());
/* harmony default export */ __webpack_exports__["default"] = (R6Scheduler);


/***/ }),

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.getDaysInMonth = function (date) {
        var year = date.getFullYear();
        var monthIndex = date.getMonth();
        var lastDayOfMonth = new Date(0);
        lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
        lastDayOfMonth.setHours(0, 0, 0, 0);
        return lastDayOfMonth.getDate();
    };
    Helpers.isMonday = function (date) {
        return date.getDay() === 1;
    };
    Helpers.isTuesday = function (date) {
        return date.getDay() === 2;
    };
    Helpers.isWednesday = function (date) {
        return date.getDay() === 3;
    };
    Helpers.isThursday = function (date) {
        return date.getDay() === 4;
    };
    Helpers.isFriday = function (date) {
        return date.getDay() === 5;
    };
    Helpers.isSaturday = function (date) {
        return date.getDay() === 6;
    };
    Helpers.isSunday = function (date) {
        return date.getDay() === 0;
    };
    Helpers.isWeekend = function (date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };
    return Helpers;
}());
/* harmony default export */ __webpack_exports__["default"] = (Helpers);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _R6Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./R6Scheduler */ "./src/R6Scheduler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _R6Scheduler__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ })

/******/ });
//# sourceMappingURL=R6Scheduler.js.map