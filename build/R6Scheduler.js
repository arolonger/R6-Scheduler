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

/***/ "./node_modules/date-fns/addDays/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/addDays/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addDays;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addMonths/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/addMonths/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMonths;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../getDaysInMonth/index.js */ "./node_modules/date-fns/getDaysInMonth/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  var desiredMonth = date.getMonth() + amount;
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0, _index4.default)(dateWithDesiredMonth, dirtyOptions);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDaysInMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/getDaysInMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isFriday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isFriday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFriday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 5;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isMonday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isMonday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMonday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSaturday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isSaturday/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSaturday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 6;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSunday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isSunday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSunday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Sunday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isThursday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isThursday/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isThursday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 4;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isTuesday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/isTuesday/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTuesday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 2;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isWednesday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isWednesday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWednesday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 3;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/toDate/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/toDate/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument is null, it is treated as an invalid date.
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument !== 'string') {
    return new Date(argument);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
  } else {
    return new Date(argument);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }

  // Invalid ISO-formatted year
  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date;
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date;
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week);
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek);
  }

  // Invalid ISO-formatted date
  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  }

  // Invalid ISO-formatted time
  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOYear(isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/R6Scheduler.ts":
/*!****************************!*\
  !*** ./src/R6Scheduler.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns_isMonday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isMonday */ "./node_modules/date-fns/isMonday/index.js");
/* harmony import */ var date_fns_isMonday__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_isMonday__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_isTuesday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/isTuesday */ "./node_modules/date-fns/isTuesday/index.js");
/* harmony import */ var date_fns_isTuesday__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_isTuesday__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_isWednesday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isWednesday */ "./node_modules/date-fns/isWednesday/index.js");
/* harmony import */ var date_fns_isWednesday__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_isWednesday__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_isThursday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isThursday */ "./node_modules/date-fns/isThursday/index.js");
/* harmony import */ var date_fns_isThursday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_isThursday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_isFriday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isFriday */ "./node_modules/date-fns/isFriday/index.js");
/* harmony import */ var date_fns_isFriday__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_isFriday__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isSaturday */ "./node_modules/date-fns/isSaturday/index.js");
/* harmony import */ var date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_isSunday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isSunday */ "./node_modules/date-fns/isSunday/index.js");
/* harmony import */ var date_fns_isSunday__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSunday__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_getDaysInMonth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/getDaysInMonth */ "./node_modules/date-fns/getDaysInMonth/index.js");
/* harmony import */ var date_fns_getDaysInMonth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_getDaysInMonth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/addMonths/index.js");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/addDays/index.js");
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_addDays__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_lastDayOfMonth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/lastDayOfMonth */ "./node_modules/date-fns/lastDayOfMonth/index.js");
/* harmony import */ var date_fns_lastDayOfMonth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_lastDayOfMonth__WEBPACK_IMPORTED_MODULE_10__);
// import helpers from "../src/helpers/helpers";
// import {isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday, getDaysInMonth} from 'date-fns/esm';











var R6Scheduler = /** @class */ (function () {
    function R6Scheduler(params) {
        this.dom = params.container;
        this.currentDate = this._setDateWithFirstDay(params.initialDate);
        this.fillGaps = params.fillGaps;
        this.locale = "pl-PL";
        this._generate(this.currentDate);
    }
    R6Scheduler.prototype._setDateWithFirstDay = function (date) {
        this.dayNumber = 1;
        this.monthNumber = date.getMonth();
        this.yearNumber = date.getFullYear();
        return new Date(this.yearNumber, this.monthNumber, this.dayNumber);
    };
    R6Scheduler.prototype._generate = function (date) {
        var wholeHtmlContainer = document.createElement("div");
        this.numerOfDaysInCurrentMonth = date_fns_getDaysInMonth__WEBPACK_IMPORTED_MODULE_7__(date);
        this.monthName = this._getMonthName(date);
        this.currentDate = this._setDateWithFirstDay(date);
        wholeHtmlContainer.appendChild(this._drawTopHeader());
        wholeHtmlContainer.appendChild(this._drawHeader());
        wholeHtmlContainer.appendChild(this._drawDays());
        this._finalDraw(wholeHtmlContainer);
    };
    R6Scheduler.prototype._finalDraw = function (wholeHtmlToRender) {
        if (this.dom.firstChild) {
            this.dom.removeChild(this.dom.firstChild);
        }
        this.dom.appendChild(wholeHtmlToRender);
    };
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
    R6Scheduler.prototype._prevMonth = function () {
        this._generate(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, -1));
    };
    R6Scheduler.prototype._nextMonth = function () {
        this._generate(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, 1));
    };
    R6Scheduler.prototype._drawTopHeader = function () {
        var wrapper = document.createElement("div");
        var prev = document.createElement("span");
        var next = document.createElement("span");
        wrapper.classList.add("r6-month-name");
        prev.classList.add("r6-prev-month");
        next.classList.add("r6-next-month");
        wrapper.appendChild(prev);
        wrapper.appendChild(document.createTextNode(this.monthName));
        wrapper.appendChild(next);
        prev.addEventListener("click", this._prevMonth.bind(this));
        next.addEventListener("click", this._nextMonth.bind(this));
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
        var beginGap = this._findNumberOfDaysToFillUpGap(1);
        this._drawGap(beginGap, daysWrapper, "begin");
        for (var i = 1; i <= this.numerOfDaysInCurrentMonth; i++) {
            var day = document.createElement("div");
            day.classList.add("r6-day");
            day.appendChild(document.createTextNode(String(i)));
            daysWrapper.appendChild(day);
        }
        var endGap = this._findNumberOfDaysToFillUpGap(this.numerOfDaysInCurrentMonth);
        this._drawGap(endGap, daysWrapper, "end");
        return daysWrapper;
    };
    R6Scheduler.prototype._drawGap = function (gap, daysWrapper, direction) {
        if (gap !== 0) {
            for (var i = 1; i <= gap; i++) {
                var emptyDay = document.createElement("div");
                emptyDay.classList.add("r6-day");
                if (this.fillGaps) {
                    emptyDay.classList.add("r6-different-month-day");
                    var valueToInsert = this._setCorrectDayValue(gap, i, direction);
                    console.log(valueToInsert);
                    emptyDay.appendChild(document.createTextNode(String(valueToInsert)));
                }
                else {
                    emptyDay.classList.add("r6-empty-day");
                    emptyDay.appendChild(document.createTextNode("-"));
                }
                daysWrapper.appendChild(emptyDay);
            }
        }
    };
    R6Scheduler.prototype._setCorrectDayValue = function (numberOfElementsToGenerate, elementIndex, direction) {
        var newDateToShareDayNumber;
        if (direction === "begin") {
            newDateToShareDayNumber = date_fns_addDays__WEBPACK_IMPORTED_MODULE_9__(this.currentDate, -numberOfElementsToGenerate + elementIndex - 1);
        }
        else if (direction === "end") {
            newDateToShareDayNumber = date_fns_addDays__WEBPACK_IMPORTED_MODULE_9__(date_fns_lastDayOfMonth__WEBPACK_IMPORTED_MODULE_10__(this.currentDate), elementIndex);
        }
        return newDateToShareDayNumber.getDate();
    };
    R6Scheduler.prototype._findNumberOfDaysToFillUpGap = function (dayNumber) {
        var date = new Date(this.yearNumber, this.monthNumber, dayNumber);
        var gap = 0;
        if (dayNumber === 1) {
            if (date_fns_isMonday__WEBPACK_IMPORTED_MODULE_0__(date)) {
            }
            else if (date_fns_isTuesday__WEBPACK_IMPORTED_MODULE_1__(date)) {
                gap += 1;
            }
            else if (date_fns_isWednesday__WEBPACK_IMPORTED_MODULE_2__(date)) {
                gap += 2;
            }
            else if (date_fns_isThursday__WEBPACK_IMPORTED_MODULE_3__(date)) {
                gap += 3;
            }
            else if (date_fns_isFriday__WEBPACK_IMPORTED_MODULE_4__(date)) {
                gap += 4;
            }
            else if (date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_5__(date)) {
                gap += 5;
            }
            else if (date_fns_isSunday__WEBPACK_IMPORTED_MODULE_6__(date)) {
                gap += 6;
            }
        }
        else {
            //looking for last day
            if (date_fns_isSunday__WEBPACK_IMPORTED_MODULE_6__(date)) {
            }
            else if (date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_5__(date)) {
                gap += 1;
            }
            else if (date_fns_isFriday__WEBPACK_IMPORTED_MODULE_4__(date)) {
                gap += 2;
            }
            else if (date_fns_isThursday__WEBPACK_IMPORTED_MODULE_3__(date)) {
                gap += 3;
            }
            else if (date_fns_isWednesday__WEBPACK_IMPORTED_MODULE_2__(date)) {
                gap += 4;
            }
            else if (date_fns_isTuesday__WEBPACK_IMPORTED_MODULE_1__(date)) {
                gap += 5;
            }
            else if (date_fns_isMonday__WEBPACK_IMPORTED_MODULE_0__(date)) {
                gap += 6;
            }
        }
        return gap;
    };
    return R6Scheduler;
}());
/* harmony default export */ __webpack_exports__["default"] = (R6Scheduler);


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



//  if (module.hot) {
//    module.hot.accept('./src/R6Scheduler.ts', function() {
//      console.log('Accepting the updated printMe module!');
//      new init();
//    })
// }


/***/ })

/******/ });
//# sourceMappingURL=R6Scheduler.js.map