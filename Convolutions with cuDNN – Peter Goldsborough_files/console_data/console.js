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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 196);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(37);
} else {}


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKGROUND_OPERATION = 'background.operation';
exports.CONSOLE_UNFOCUS = 'console.unfocus';
exports.CONSOLE_ENTER_COMMAND = 'console.enter.command';
exports.CONSOLE_ENTER_FIND = 'console.enter.find';
exports.CONSOLE_QUERY_COMPLETIONS = 'console.query.completions';
exports.CONSOLE_SHOW_COMMAND = 'console.show.command';
exports.CONSOLE_SHOW_ERROR = 'console.show.error';
exports.CONSOLE_SHOW_INFO = 'console.show.info';
exports.CONSOLE_SHOW_FIND = 'console.show.find';
exports.CONSOLE_HIDE = 'console.hide';
exports.FOLLOW_START = 'follow.start';
exports.FOLLOW_REQUEST_COUNT_TARGETS = 'follow.request.count.targets';
exports.FOLLOW_RESPONSE_COUNT_TARGETS = 'follow.response.count.targets';
exports.FOLLOW_CREATE_HINTS = 'follow.create.hints';
exports.FOLLOW_SHOW_HINTS = 'follow.update.hints';
exports.FOLLOW_REMOVE_HINTS = 'follow.remove.hints';
exports.FOLLOW_ACTIVATE = 'follow.activate';
exports.FOLLOW_KEY_PRESS = 'follow.key.press';
exports.MARK_SET_GLOBAL = 'mark.set.global';
exports.MARK_JUMP_GLOBAL = 'mark.jump.global';
exports.TAB_SCROLL_TO = 'tab.scroll.to';
exports.FIND_NEXT = 'find.next';
exports.FIND_PREV = 'find.prev';
exports.FIND_GET_KEYWORD = 'find.get.keyword';
exports.FIND_SET_KEYWORD = 'find.set.keyword';
exports.ADDON_ENABLED_QUERY = 'addon.enabled.query';
exports.ADDON_ENABLED_RESPONSE = 'addon.enabled.response';
exports.ADDON_TOGGLE_ENABLED = 'addon.toggle.enabled';
exports.OPEN_URL = 'open.url';
exports.SETTINGS_CHANGED = 'settings.changed';
exports.SETTINGS_QUERY = 'settings.query';
exports.CONSOLE_FRAME_MESSAGE = 'console.frame.message';
exports.NAVIGATE_HISTORY_NEXT = 'navigate.history.next';
exports.NAVIGATE_HISTORY_PREV = 'navigate.history.prev';
exports.NAVIGATE_LINK_NEXT = 'navigate.link.next';
exports.NAVIGATE_LINK_PREV = 'navigate.link.prev';
exports.valueOf = (o) => {
    switch (o.type) {
        case exports.CONSOLE_UNFOCUS:
        case exports.CONSOLE_ENTER_COMMAND:
        case exports.CONSOLE_ENTER_FIND:
        case exports.CONSOLE_QUERY_COMPLETIONS:
        case exports.CONSOLE_SHOW_COMMAND:
        case exports.CONSOLE_SHOW_ERROR:
        case exports.CONSOLE_SHOW_INFO:
        case exports.CONSOLE_SHOW_FIND:
        case exports.CONSOLE_HIDE:
        case exports.FOLLOW_START:
        case exports.FOLLOW_REQUEST_COUNT_TARGETS:
        case exports.FOLLOW_RESPONSE_COUNT_TARGETS:
        case exports.FOLLOW_CREATE_HINTS:
        case exports.FOLLOW_SHOW_HINTS:
        case exports.FOLLOW_REMOVE_HINTS:
        case exports.FOLLOW_ACTIVATE:
        case exports.FOLLOW_KEY_PRESS:
        case exports.MARK_SET_GLOBAL:
        case exports.MARK_JUMP_GLOBAL:
        case exports.TAB_SCROLL_TO:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.FIND_GET_KEYWORD:
        case exports.FIND_SET_KEYWORD:
        case exports.ADDON_ENABLED_QUERY:
        case exports.ADDON_ENABLED_RESPONSE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.OPEN_URL:
        case exports.SETTINGS_CHANGED:
        case exports.SETTINGS_QUERY:
        case exports.CONSOLE_FRAME_MESSAGE:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_LINK_PREV:
            return o;
    }
    throw new Error('unknown operation type: ' + o.type);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(41)();
}


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(38);
} else {}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(43);
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(46)(module)))

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25),
    getRawTag = __webpack_require__(55),
    objectToString = __webpack_require__(56);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(53);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext = react_default.a.createContext(null);
/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return react_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

Provider.propTypes = {
  store: prop_types_default.a.shape({
    subscribe: prop_types_default.a.func.isRequired,
    dispatch: prop_types_default.a.func.isRequired,
    getState: prop_types_default.a.func.isRequired
  }),
  context: prop_types_default.a.object,
  children: prop_types_default.a.any
};
/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(20);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(4);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
}; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect because we want
// `connect` to perform sync updates to a ref to save the latest props after
// a render is actually committed to the DOM.


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  browser_default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
  browser_default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  browser_default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(react_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context

      var didStoreComeFromProps = Boolean(props.store);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      browser_default()(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      var store = props.store || contextValue.store;
      var childPropsSelector = Object(react["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react["useRef"])();
      var lastWrapperProps = Object(react["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react["useRef"])();
      var renderIsScheduled = Object(react["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffect(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffect(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function checkForUpdates() {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                latestStoreState: latestStoreState,
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function unsubscribeWrapper() {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react["useMemo"])(function () {
        return react_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react_default.a.createElement(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(react["useContext"])(ReactReduxContext);
  browser_default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore = createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js




 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useSelector_useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];

var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react["useRef"])();
  var latestSelector = Object(react["useRef"])();
  var latestSelectedState = Object(react["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occured while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  useSelector_useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useSelector_useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    browser_default()(selector, "You must pass a selector to useSelectors");

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector_useSelector = createSelectorHook();
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
/* concated harmony reexport Provider */__webpack_require__.d(__webpack_exports__, "Provider", function() { return components_Provider; });
/* concated harmony reexport connectAdvanced */__webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* concated harmony reexport ReactReduxContext */__webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect_connect; });
/* concated harmony reexport batch */__webpack_require__.d(__webpack_exports__, "batch", function() { return react_dom["unstable_batchedUpdates"]; });
/* concated harmony reexport useDispatch */__webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* concated harmony reexport createDispatchHook */__webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* concated harmony reexport useSelector */__webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector_useSelector; });
/* concated harmony reexport createSelectorHook */__webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* concated harmony reexport useStore */__webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore_useStore; });
/* concated harmony reexport createStoreHook */__webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* concated harmony reexport shallowEqual */__webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });










setBatch(react_dom["unstable_batchedUpdates"]);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(45);
} else {}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(23),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1),m=__webpack_require__(23),q=__webpack_require__(39);function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;if(fa.hasOwnProperty(g))throw t(Error(99),g);fa[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],h,g);e=!0}else f.registrationName?(ha(f.registrationName,h,g),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,h,g,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,h,g,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
return c}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Ma(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;m(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=m({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(y);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function kb(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function Ab(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Bb(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Cb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=qb?Ab(a,c):Bb(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=ta(a)){if("function"!==typeof Db)throw t(Error(280));var b=sa(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function Ob(){if(null!==Eb||null!==Fb)Lb(),Ib()}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function mc(a){if(null===a||"object"!==typeof a)return null;a=lc&&a[lc]||a["@@iterator"];return"function"===typeof a?a:null}
function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense";case ic:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jc:return oc(a.type);case kc:if(a=1===a._status?a._result:null)return oc(a)}return null}function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
function zc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=y.getPooled(Hc.change,a,b,c);a.type="change";Hb(c);Qa(a);return a}var Jc=null,Kc=null;function Lc(a){Ba(a)}
function Mc(a){var b=Ja(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}
function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,h=Rc):(g=e.nodeName)&&"input"===g.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var h=void 0,g=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)h=dd,g=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)h=ed,g=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var n=null==f?e:Ja(f);e=null==b?e:Ja(b);a=h.getPooled(g,f,c,d);a.type=l+"leave";a.target=n;a.relatedTarget=e;c=h.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=n;d=b;if(f&&d)a:{b=f;e=d;l=0;for(h=b;h;h=La(h))l++;h=0;for(k=e;k;k=La(k))h++;for(;0<l-h;)b=La(b),l--;for(;0<h-l;)e=La(e),h--;for(;l--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
function ld(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function od(a){if(2!==ld(a))throw t(Error(188));}
function pd(a){var b=a.alternate;if(!b){b=ld(a);if(3===b)throw t(Error(188));return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return od(e),a;if(f===d)return od(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var h=!1,g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===
c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}if(!h)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function qd(a){a=pd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function ud(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(a){if(a.key){var b=vd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ud(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?wd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
var Md={eventTypes:Dd,getEventPriority:function(a){a=Ed[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ed[a];if(!e)return null;switch(a){case "keypress":if(0===ud(c))return null;case "keydown":case "keyup":a=xd;break;case "blur":case "focus":a=td;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=zd;break;case Xa:case Ya:case Za:a=rd;break;case ab:a=Ad;break;case "scroll":a=Wc;break;case "wheel":a=Bd;break;case "copy":case "cut":case "paste":a=sd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},Nd=Md.getEventPriority,Od=[];
function Pd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,h=null,g=0;g<ea.length;g++){var k=ea[g];k&&(k=k.extractEvents(d,b,f,e))&&(h=xa(h,k))}Ba(h)}}var Qd=!0;function G(a,b){Rd(b,a,!1)}
function Rd(a,b,c){switch(Nd(b)){case 0:var d=Sd.bind(null,b,1);break;case 1:d=Td.bind(null,b,1);break;default:d=Ud.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Sd(a,b,c){Nb||Lb();var d=Ud,e=Nb;Nb=!0;try{Kb(d,a,b,c)}finally{(Nb=e)||Ob()}}function Td(a,b,c){Ud(a,b,c)}
function Ud(a,b,c){if(Qd){b=Rb(c);b=Ha(b);null===b||"number"!==typeof b.tag||2===ld(b)||(b=null);if(Od.length){var d=Od.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Nb)Pd(c,void 0);else{Nb=!0;try{Mb(Pd,c,void 0)}finally{Nb=!1,Ob()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Od.length&&Od.push(a)}}}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
function Wd(a){var b=Vd.get(a);void 0===b&&(b=new Set,Vd.set(a,b));return b}function Xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Zd(a,b){var c=Yd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Yd(c)}}function $d(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?$d(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function ae(){for(var a=window,b=Xd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xd(a.document)}return b}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
function ie(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(he||null==ee||ee!==Xd(c))return null;c=ee;"selectionStart"in c&&be(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ge&&jd(ge,c)?null:(ge=c,a=y.getPooled(de.select,fe,a,b),a.type="select",a.target=ee,Qa(a),a)}
var je={eventTypes:de,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Wd(e);f=ja.onSelect;for(var h=0;h<f.length;h++)if(!e.has(f[h])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)ee=e,fe=b,ge=null;break;case "blur":ge=fe=ee=null;break;case "mousedown":he=!0;break;case "contextmenu":case "mouseup":case "dragend":return he=!1,ie(c,d);case "selectionchange":if(ce)break;
case "keydown":case "keyup":return ie(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function ke(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function le(a,b){a=m({children:void 0},b);if(b=ke(b.children))a.children=b;return a}function me(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oe(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
function pe(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ue=void 0,ve=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==re.svg||"innerHTML"in a)a.innerHTML=b;else{ue=ue||document.createElement("div");ue.innerHTML="<svg>"+b+"</svg>";for(b=ue.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function we(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(a){ye.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);xe[b]=xe[a]})});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
function Ae(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ze(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function De(a,b){if(b){if(Ce[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function Fe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Wd(a);b=ja[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Rd(a,"scroll",!0);break;case "focus":case "blur":Rd(a,"focus",!0);Rd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Sb(e)&&Rd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c.add(e)}}}function Ge(){}var He=null,Ie=null;
function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function J(a,b){Pe++;Oe[Pe]=a.current;a.current=b}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
function Se(a,b){var c=a.type.contextTypes;if(!c)return Qe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Te(a){H(M,a);H(L,a)}function Ue(a){H(M,a);H(L,a)}
function Ve(a,b,c){if(L.current!==Qe)throw t(Error(168));J(L,b,a);J(M,c,a)}function We(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),oc(b)||"Unknown",e);return m({},c,d)}function Xe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Qe;Re=L.current;J(L,b,a);J(M,M.current,a);return!0}
function Ye(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=We(a,b,Re),d.__reactInternalMemoizedMergedChildContext=b,H(M,a),H(L,a),J(L,b,a)):H(M,a);J(M,c,a)}
var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function vf(a,b){a=uf(a);return Ze(a,b)}function wf(a,b,c){a=uf(a);return $e(a,b,c)}function xf(a){null===of?(of=[a],pf=$e(ff,yf)):of.push(a);return mf}function O(){null!==pf&&af(pf);yf()}
function yf(){if(!qf&&null!==of){qf=!0;var a=0;try{var b=of;vf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});of=null}catch(c){throw null!==of&&(of=of.slice(a+1)),$e(ff,O),c;}finally{qf=!1}}}function zf(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function Af(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function Bf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
function Hf(a,b){var c=a.type._context;J(Cf,c._currentValue,a);c._currentValue=b}function If(a){var b=Cf.current;H(Cf,a);a.type._context._currentValue=b}function Jf(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function Kf(a,b){Df=a;Ff=Ef=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Lf=!0),a.firstContext=null)}function Mf(a,b){if(Ff!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ff=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Ef){if(null===Df)throw t(Error(308));Ef=b;Df.dependencies={expirationTime:0,firstContext:b,responders:null}}else Ef=Ef.next=b}return a._currentValue}var Nf=!1;
function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Of(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Of(a.memoizedState),e=c.updateQueue=Of(c.memoizedState)):d=a.updateQueue=Pf(e):null===e&&(e=c.updateQueue=Pf(d));null===e||d===e?Rf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Rf(d,b),Rf(e,b)):(Rf(d,b),e.lastUpdate=b)}
function Tf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Of(a.memoizedState):Uf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Uf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Pf(b));return b}
function Vf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return m({},d,e);case 2:Nf=!0}return d}
function Wf(a,b,c,d,e){Nf=!1;b=Uf(a,b);for(var f=b.baseState,h=null,g=0,k=b.firstUpdate,l=f;null!==k;){var n=k.expirationTime;n<e?(null===h&&(h=k,f=l),g<n&&(g=n)):(Xf(n,k.suspenseConfig),l=Vf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}n=null;for(k=b.firstCapturedUpdate;null!==k;){var z=k.expirationTime;z<e?(null===n&&(n=k,null===h&&(f=l)),g<z&&(g=z)):(l=Vf(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===h&&(b.lastUpdate=null);null===n?b.lastCapturedUpdate=null:a.effectTag|=32;null===h&&null===n&&(f=l);b.baseState=f;b.firstUpdate=h;b.firstCapturedUpdate=n;a.expirationTime=g;a.memoizedState=l}
function Yf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Zf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Zf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Zf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function bg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var fg={isMounted:function(a){return(a=a._reactInternalFiber)?2===ld(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=cg(),d=$f.suspense;
c=dg(c,a,d);d=Qf(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Sf(a,d);eg(a,c)}};function gg(a,b,c,d,e,f,h){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,h):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function hg(a,b,c){var d=!1,e=Qe;var f=b.contextType;"object"===typeof f&&null!==f?f=Mf(f):(e=N(b)?Re:L.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Se(a,e):Qe);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=fg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&fg.enqueueReplaceState(b,b.state,null)}
function jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=ag;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Mf(f):(f=N(b)?Re:L.current,e.context=Se(a,f));f=a.updateQueue;null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(bg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&fg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var kg=Array.isArray;
function lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw t(Error(309));d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===ag&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
function mg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function ng(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=og(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=pg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=lg(a,b,c),d.return=a,d;d=qg(c.type,c.key,c.props,null,a.mode,d);d.ref=lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=rg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=sg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=pg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=qg(b.type,b.key,b.props,null,a.mode,c),c.ref=lg(a,null,b),c.return=a,c;case $b:return b=rg(b,a.mode,c),b.return=a,b}if(kg(b)||
mc(b))return b=sg(b,a.mode,c,null),b.return=a,b;mg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(kg(c)||mc(c))return null!==e?null:n(a,b,c,d,null);mg(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(kg(d)||mc(d))return a=a.get(c)||null,n(b,a,d,e,null);mg(b,d)}return null}function rb(e,h,g,k){for(var l=null,u=null,n=h,w=h=0,C=null;null!==n&&w<g.length;w++){n.index>w?(C=n,n=null):C=n.sibling;var p=x(e,n,g[w],k);if(null===p){null===n&&(n=C);break}a&&
n&&null===p.alternate&&b(e,n);h=f(p,h,w);null===u?l=p:u.sibling=p;u=p;n=C}if(w===g.length)return c(e,n),l;if(null===n){for(;w<g.length;w++)n=z(e,g[w],k),null!==n&&(h=f(n,h,w),null===u?l=n:u.sibling=n,u=n);return l}for(n=d(e,n);w<g.length;w++)C=v(n,e,w,g[w],k),null!==C&&(a&&null!==C.alternate&&n.delete(null===C.key?w:C.key),h=f(C,h,w),null===u?l=C:u.sibling=C,u=C);a&&n.forEach(function(a){return b(e,a)});return l}function Be(e,h,g,k){var l=mc(g);if("function"!==typeof l)throw t(Error(150));g=l.call(g);
if(null==g)throw t(Error(151));for(var n=l=null,u=h,w=h=0,C=null,p=g.next();null!==u&&!p.done;w++,p=g.next()){u.index>w?(C=u,u=null):C=u.sibling;var r=x(e,u,p.value,k);if(null===r){null===u&&(u=C);break}a&&u&&null===r.alternate&&b(e,u);h=f(r,h,w);null===n?l=r:n.sibling=r;n=r;u=C}if(p.done)return c(e,u),l;if(null===u){for(;!p.done;w++,p=g.next())p=z(e,p.value,k),null!==p&&(h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);return l}for(u=d(e,u);!p.done;w++,p=g.next())p=v(u,e,w,p.value,k),null!==p&&(a&&null!==
p.alternate&&u.delete(null===p.key?w:p.key),h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,g){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,g);d.ref=lg(a,k,f);d.return=a;a=d;break a}c(a,
k);break}else b(a,k);k=k.sibling}f.type===ac?(d=sg(f.props.children,a.mode,g,f.key),d.return=a,a=d):(g=qg(f.type,f.key,f.props,null,a.mode,g),g.ref=lg(a,d,f),g.return=a,a=g)}return h(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=rg(f,a.mode,g);d.return=a;a=d}return h(a)}if("string"===typeof f||
"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,g),d.return=a,a=d):(c(a,d),d=pg(f,a.mode,g),d.return=a,a=d),h(a);if(kg(f))return rb(a,d,f,g);if(mc(f))return Be(a,d,f,g);l&&mg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
function Ag(a,b){J(yg,b,a);J(xg,a,a);J(wg,vg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:te(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=te(b,c)}H(wg,a);J(wg,b,a)}function Bg(a){H(wg,a);H(xg,a);H(yg,a)}function Cg(a){zg(yg.current);var b=zg(wg.current);var c=te(b,a.type);b!==c&&(J(xg,a,a),J(wg,c,a))}function Dg(a){xg.current===a&&(H(wg,a),H(xg,a))}var Eg=1,Fg=1,Gg=2,P={current:0};
function Hg(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
function dh(a,b,c,d,e,f){Rg=f;Sg=b;Tg=null!==a?a.memoizedState:null;Qg.current=null===Tg?eh:fh;b=c(d,e);if(Zg){do Zg=!1,ah+=1,Tg=null!==a?a.memoizedState:null,Vg=Ug,Xg=R=Q=null,Qg.current=fh,b=c(d,e);while(Zg);$g=null;ah=0}Qg.current=hh;a=Sg;a.memoizedState=Ug;a.expirationTime=Wg;a.updateQueue=Xg;a.effectTag|=Yg;a=null!==Q&&null!==Q.next;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;if(a)throw t(Error(300));return b}
function ih(){Qg.current=hh;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;Zg=!1;$g=null;ah=0}function jh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?Ug=R=a:R=R.next=a;return R}function kh(){if(null!==Vg)R=Vg,Vg=R.next,Q=Tg,Tg=null!==Q?Q.next:null;else{if(null===Tg)throw t(Error(310));Q=Tg;var a={memoizedState:Q.memoizedState,baseState:Q.baseState,queue:Q.queue,baseUpdate:Q.baseUpdate,next:null};R=null===R?Ug=a:R.next=a;Tg=Q.next}return R}
function lh(a,b){return"function"===typeof b?b(a):b}
function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function nh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Xg?(Xg={lastEffect:null},Xg.lastEffect=a.next=a):(b=Xg.lastEffect,null===b?Xg.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Xg.lastEffect=a));return a}function oh(a,b,c,d){var e=jh();Yg|=a;e.memoizedState=nh(b,c,void 0,void 0===d?null:d)}
function ph(a,b,c,d){var e=kh();d=void 0===d?null:d;var f=void 0;if(null!==Q){var h=Q.memoizedState;f=h.destroy;if(null!==d&&ch(d,h.deps)){nh(Ig,c,f,d);return}}Yg|=a;e.memoizedState=nh(b,c,f,d)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function rh(){}
function sh(a,b,c){if(!(25>ah))throw t(Error(301));var d=a.alternate;if(a===Sg||null!==d&&d===Sg)if(Zg=!0,a={expirationTime:Rg,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===$g&&($g=new Map),c=$g.get(b),void 0===c)$g.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=cg(),f=$f.suspense;e=dg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var h=b.last;if(null===h)f.next=f;else{var g=h.next;null!==g&&
(f.next=g);h.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(hd(l,k))return}catch(n){}finally{}eg(a,e)}}
var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(a,b){jh().memoizedState=[a,void 0===b?null:b];return a},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
Kg|Ng,a,b)},useMemo:function(a,b){var c=jh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=jh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=sh.bind(null,Sg,a);return[d.memoizedState,a]},useRef:function(a){var b=jh();a={current:a};return b.memoizedState=a},useState:function(a){var b=jh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue=
{last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=sh.bind(null,Sg,a);return[b.memoizedState,a]},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:Mf,useEffect:function(a,b){return ph(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ph(4,Kg|Ng,qh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(){return kh().memoizedState},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
function wh(a,b){var c=xh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function yh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function zh(a){if(vh){var b=uh;if(b){var c=b;if(!yh(a,b)){b=Ne(c.nextSibling);if(!b||!yh(a,b)){a.effectTag|=2;vh=!1;th=a;return}wh(th,c)}th=a;uh=Ne(b.firstChild)}else a.effectTag|=2,vh=!1,th=a}}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
function Bh(a){if(a!==th)return!1;if(!vh)return Ah(a),vh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ke(b,a.memoizedProps))for(b=uh;b;)wh(a,b),b=Ne(b.nextSibling);Ah(a);uh=th?Ne(a.stateNode.nextSibling):null;return!0}function Ch(){uh=th=null;vh=!1}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Kf(b,e);d=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Gh(a,b,c,d,e,f){if(null===a){var h=c.type;if("function"===typeof h&&!Hh(h)&&void 0===h.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=h,Ih(a,b,h,d,e,f);a=qg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}h=a.child;if(e<f&&(e=h.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Fh(a,b,f);b.effectTag|=1;a=og(h,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function Kh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Jh(a,b,c,d,e){var f=N(c)?Re:L.current;f=Se(b,f);Kf(b,e);c=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Lh(a,b,c,d,e){if(N(c)){var f=!0;Xe(b)}else f=!1;Kf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),hg(b,c,d,e),jg(b,c,d,e),d=!0;else if(null===a){var h=b.stateNode,g=b.memoizedProps;h.props=g;var k=h.context,l=c.contextType;"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l));var n=c.getDerivedStateFromProps,z="function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate;z||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&
"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l);Nf=!1;var x=b.memoizedState;k=h.state=x;var v=b.updateQueue;null!==v&&(Wf(b,v,d,h,e),k=b.memoizedState);g!==d||x!==k||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),k=b.memoizedState),(g=Nf||gg(b,c,g,d,x,k,l))?(z||"function"!==typeof h.UNSAFE_componentWillMount&&"function"!==typeof h.componentWillMount||("function"===typeof h.componentWillMount&&h.componentWillMount(),"function"===typeof h.UNSAFE_componentWillMount&&
h.UNSAFE_componentWillMount()),"function"===typeof h.componentDidMount&&(b.effectTag|=4)):("function"===typeof h.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),h.props=d,h.state=k,h.context=l,d=g):("function"===typeof h.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.stateNode,g=b.memoizedProps,h.props=b.type===b.elementType?g:Af(b.type,g),k=h.context,l=c.contextType,"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l)),n=c.getDerivedStateFromProps,(z=
"function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate)||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l),Nf=!1,k=b.memoizedState,x=h.state=k,v=b.updateQueue,null!==v&&(Wf(b,v,d,h,e),x=b.memoizedState),g!==d||k!==x||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),x=b.memoizedState),(n=Nf||gg(b,c,g,d,k,x,l))?(z||"function"!==typeof h.UNSAFE_componentWillUpdate&&"function"!==typeof h.componentWillUpdate||
("function"===typeof h.componentWillUpdate&&h.componentWillUpdate(d,x,l),"function"===typeof h.UNSAFE_componentWillUpdate&&h.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof h.componentDidUpdate&&(b.effectTag|=4),"function"===typeof h.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),h.props=d,h.state=x,h.context=l,d=n):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Mh(a,b,c,d,f,e)}
function Mh(a,b,c,d,e,f){Kh(a,b);var h=0!==(b.effectTag&64);if(!d&&!h)return e&&Ye(b,c,!1),Fh(a,b,f);d=b.stateNode;Dh.current=b;var g=h&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&h?(b.child=tg(b,a.child,null,f),b.child=tg(b,null,g,f)):S(a,b,g,f);b.memoizedState=d.state;e&&Ye(b,c,!0);return b.child}function Nh(a){var b=a.stateNode;b.pendingContext?Ve(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ve(a,b.context,!1);Ag(a,b.containerInfo)}
var Oh={};
function Ph(a,b,c){var d=b.mode,e=b.pendingProps,f=P.current,h=null,g=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Gg)&&(null===a||null!==a.memoizedState));k?(h=Oh,g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=Fg);f&=Eg;J(P,f,b);if(null===a)if(g){e=e.fallback;a=sg(null,d,0,null);a.return=b;if(0===(b.mode&2))for(g=null!==b.memoizedState?b.child.child:b.child,a.child=g;null!==g;)g.return=a,g=g.sibling;c=sg(e,d,c,null);c.return=b;a.sibling=
c;d=a}else d=c=ug(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,g){e=e.fallback;c=og(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==f.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;e=og(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=tg(b,f.child,e.children,c);else if(f=a.child,g){g=e.fallback;e=sg(null,d,0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&
2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=sg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=tg(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=h;b.child=d;return c}function Qh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
function Rh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=P.current;if(0!==(d&Gg))d=d&Eg|Gg,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var h=a.alternate;null!==h&&h.expirationTime<c&&(h.expirationTime=c);Jf(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===
b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Eg}J(P,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Hg(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Qh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Hg(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}Qh(b,!0,c,null,f);break;case "together":Qh(b,
!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fh(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=og(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=og(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Sh(a){a.effectTag|=4}
var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
Vh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var h=b.stateNode;zg(wg.current);a=null;switch(c){case "input":f=Bc(h,f);d=Bc(h,d);a=[];break;case "option":f=le(h,f);d=le(h,d);a=[];break;case "select":f=m({},f,{value:void 0});d=m({},d,{value:void 0});a=[];break;case "textarea":f=ne(h,f);d=ne(h,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(h.onclick=Ge)}De(c,d);h=c=void 0;var g=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(h in k)k.hasOwnProperty(h)&&(g||(g={}),g[h]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ia.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(h in k)!k.hasOwnProperty(h)||l&&l.hasOwnProperty(h)||(g||(g={}),g[h]="");for(h in l)l.hasOwnProperty(h)&&k[h]!==l[h]&&(g||
(g={}),g[h]=l[h])}else g||(a||(a=[]),a.push(c,g)),g=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ia.hasOwnProperty(c)?(null!=l&&Fe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}g&&(a=a||[]).push("style",g);e=a;(b.updateQueue=e)&&Sh(b)}};Wh=function(a,b,c,d){c!==d&&Sh(b)};
function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
var ci="function"===typeof WeakSet?WeakSet:Set;function di(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ei(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){fi(a,c)}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
function hi(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Ig){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Ig&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function ii(a,b){"function"===typeof ji&&ji(a);switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;vf(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var h=a;try{c()}catch(g){fi(h,g)}}b=b.next}while(b!==d)})}break;case 1:gi(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&ei(a,b);break;case 5:gi(a);break;case 4:ki(a,b)}}
function li(a,b){for(var c=a;;)if(ii(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
function ni(a){a:{for(var b=a.return;null!==b;){if(mi(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(we(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||mi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var h=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var g=h;h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(h,c);else d?(g=b,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Ge)):
b.appendChild(h)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ki(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw t(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(li(c,b),f){var h=e,g=c.stateNode;8===h.nodeType?h.parentNode.removeChild(g):h.removeChild(g)}else e.removeChild(c.stateNode);else if(20===c.tag)g=c.stateNode.instance,li(c,b),f?(h=e,8===h.nodeType?h.parentNode.removeChild(g):
h.removeChild(g)):e.removeChild(g);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(ii(c,b),null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function oi(a,b){switch(b.tag){case 0:case 11:case 14:case 15:hi(Kg,Lg,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ga]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);Ee(a,e);b=Ee(a,d);for(e=0;e<f.length;e+=2){var h=f[e],g=f[e+1];"style"===h?Ae(c,g):"dangerouslySetInnerHTML"===h?ve(c,g):"children"===h?we(c,g):zc(c,h,g,b)}switch(a){case "input":Ec(c,d);break;case "textarea":pe(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?me(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?me(c,!!d.multiple,d.defaultValue,!0):me(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,pi=sf());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=
f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ze("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===
a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}qi(b);break;case 19:qi(b);break;case 17:break;case 20:break;default:throw t(Error(163));}}function qi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ci);b.forEach(function(b){var d=ri.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var si="function"===typeof WeakMap?WeakMap:Map;
function ti(a,b,c){c=Qf(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){ui||(ui=!0,vi=d);di(a,b)};return c}
function wi(a,b,c){c=Qf(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){di(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===xi?xi=new Set([this]):xi.add(this),di(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
function dg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=tf();if(0===(b&4))return 99===d?1073741823:1073741822;if((U&Ci)!==T)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw t(Error(326));}null!==Ji&&a===W&&--a;return a}var Xi=0;
function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
function Yi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=
b);return e}function Zi(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==mf&&af(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=xf($i.bind(null,a,Z.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-sf()}),a.callbackNode=wf(b,$i.bind(null,a,Z.bind(null,a,c)),d))}}function $i(a,b,c){var d=a.callbackNode,e=null;try{return e=b(c),null!==e?$i.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}
function aj(){(U&(1|Ci|Di))===T&&(bj(),cj())}function dj(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(wf(97,function(){c._onComplete();return null}),!0):!1}function bj(){if(null!==Ti){var a=Ti;Ti=null;a.forEach(function(a,c){xf(Z.bind(null,c,a))});O()}}function ej(a,b){var c=U;U|=1;try{return a(b)}finally{U=c,U===T&&O()}}function fj(a,b,c,d){var e=U;U|=4;try{return vf(98,a.bind(null,b,c,d))}finally{U=e,U===T&&O()}}
function gj(a,b){var c=U;U&=-2;U|=Bi;try{return a(b)}finally{U=c,U===T&&O()}}
function hj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Me(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Te(d);break;case 3:Bg(d);Ue(d);break;case 5:Dg(d);break;case 4:Bg(d);break;case 13:H(P,d);break;case 19:H(P,d);break;case 10:If(d)}c=c.return}Ji=a;V=og(a.current,null,b);W=b;X=Ei;Li=Ki=1073741823;Mi=null;Ni=!1}
function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function Xf(a,b){a<Ki&&1<a&&(Ki=a);null!==b&&a<Li&&1<a&&(Li=a,Mi=b)}function jj(a){var b=mj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=lj(a));Ai.current=null;return b}
function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function ij(a){var b=tf();vf(99,nj.bind(null,a,b));null!==Qi&&wf(97,function(){cj();return null});return null}
function nj(a,b){cj();if((U&(Ci|Di))!==T)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ji&&(V=Ji=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;
if(null!==e){f=U;U|=Di;Ai.current=null;He=Qd;var h=ae();if(be(h)){if("selectionStart"in h)var g={start:h.selectionStart,end:h.selectionEnd};else a:{g=(g=h.ownerDocument)&&g.defaultView||window;var k=g.getSelection&&g.getSelection();if(k&&0!==k.rangeCount){g=k.anchorNode;var l=k.anchorOffset,n=k.focusNode;k=k.focusOffset;try{g.nodeType,n.nodeType}catch(zb){g=null;break a}var z=0,x=-1,v=-1,rb=0,Be=0,u=h,w=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(x=z+l);u!==n||0!==k&&3!==u.nodeType||
(v=z+k);3===u.nodeType&&(z+=u.nodeValue.length);if(null===(C=u.firstChild))break;w=u;u=C}for(;;){if(u===h)break b;w===g&&++rb===l&&(x=z);w===n&&++Be===k&&(v=z);if(null!==(C=u.nextSibling))break;u=w;w=u.parentNode}u=C}g=-1===x||-1===v?null:{start:x,end:v}}else g=null}g=g||{start:0,end:0}}else g=null;Ie={focusedElem:h,selectionRange:g};Qd=!1;Y=e;do try{for(;null!==Y;){if(0!==(Y.effectTag&256)){var I=Y.alternate;h=Y;switch(h.tag){case 0:case 11:case 15:hi(Jg,Ig,h);break;case 1:if(h.effectTag&256&&null!==
I){var E=I.memoizedProps,ua=I.memoizedState,gh=h.stateNode,oj=gh.getSnapshotBeforeUpdate(h.elementType===h.type?E:Af(h.type,E),ua);gh.__reactInternalSnapshotBeforeUpdate=oj}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(I=b;null!==Y;){var A=Y.effectTag;A&16&&we(Y.stateNode,"");if(A&128){var p=Y.alternate;if(null!==p){var r=p.ref;null!==r&&("function"===typeof r?
r(null):r.current=null)}}switch(A&14){case 2:ni(Y);Y.effectTag&=-3;break;case 6:ni(Y);Y.effectTag&=-3;oi(Y.alternate,Y);break;case 4:oi(Y.alternate,Y);break;case 8:E=Y;ki(E,I);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var K=E.alternate;null!==K&&(K.return=null,K.child=null,K.memoizedState=null,K.updateQueue=null,K.dependencies=null)}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);r=Ie;p=ae();A=r.focusedElem;
I=r.selectionRange;if(p!==A&&A&&A.ownerDocument&&$d(A.ownerDocument.documentElement,A)){null!==I&&be(A)&&(p=I.start,r=I.end,void 0===r&&(r=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(r,A.value.length)):(r=(p=A.ownerDocument||document)&&p.defaultView||window,r.getSelection&&(r=r.getSelection(),E=A.textContent.length,K=Math.min(I.start,E),I=void 0===I.end?K:Math.min(I.end,E),!r.extend&&K>I&&(E=I,I=K,K=E),E=Zd(A,K),ua=Zd(A,I),E&&ua&&(1!==r.rangeCount||r.anchorNode!==E.node||r.anchorOffset!==
E.offset||r.focusNode!==ua.node||r.focusOffset!==ua.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),r.removeAllRanges(),K>I?(r.addRange(p),r.extend(ua.node,ua.offset)):(p.setEnd(ua.node,ua.offset),r.addRange(p))))));p=[];for(r=A;r=r.parentNode;)1===r.nodeType&&p.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)r=p[A],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}Ie=null;Qd=!!He;He=null;a.current=c;Y=e;do try{for(A=d;null!==
Y;){var $a=Y.effectTag;if($a&36){var nc=Y.alternate;p=Y;r=A;switch(p.tag){case 0:case 11:case 15:hi(Mg,Ng,p);break;case 1:var md=p.stateNode;if(p.effectTag&4)if(null===nc)md.componentDidMount();else{var Fj=p.elementType===p.type?nc.memoizedProps:Af(p.type,nc.memoizedProps);md.componentDidUpdate(Fj,nc.memoizedState,md.__reactInternalSnapshotBeforeUpdate)}var Xh=p.updateQueue;null!==Xh&&Yf(p,Xh,md,r);break;case 3:var Yh=p.updateQueue;if(null!==Yh){K=null;if(null!==p.child)switch(p.child.tag){case 5:K=
p.child.stateNode;break;case 1:K=p.child.stateNode}Yf(p,Yh,K,r)}break;case 5:var Gj=p.stateNode;null===nc&&p.effectTag&4&&(r=Gj,Je(p.type,p.memoizedProps)&&r.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw t(Error(163));}}if($a&128){var nd=Y.ref;if(null!==nd){var Zh=Y.stateNode;switch(Y.tag){case 5:var gf=Zh;break;default:gf=Zh}"function"===typeof nd?nd(gf):nd.current=gf}}$a&512&&(Pi=!0);Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));
fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=null;nf();U=f}else a.current=c;if(Pi)Pi=!1,Qi=a,Si=d,Ri=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0!==b?($a=cg(),$a=zf($a,b),Zi(a,$a,b)):xi=null;"function"===typeof pj&&pj(c.stateNode,d);1073741823===b?a===Vi?Ui++:(Ui=0,Vi=a):Ui=0;if(ui)throw ui=!1,a=vi,vi=null,a;if((U&Bi)!==T)return null;O();return null}
function cj(){if(null===Qi)return!1;var a=Qi,b=Si,c=Ri;Qi=null;Si=0;Ri=90;return vf(97<c?97:c,qj.bind(null,a,b))}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
function rj(a,b,c){b=bi(c,b);b=ti(a,b,1073741823);Sf(a,b);a=Yi(a,1073741823);null!==a&&Zi(a,99,1073741823)}function fi(a,b){if(3===a.tag)rj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){rj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===xi||!xi.has(d))){a=bi(b,a);a=wi(c,a,1073741823);Sf(c,a);c=Yi(c,1073741823);null!==c&&Zi(c,99,1073741823);break}}c=c.return}}
function kj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ji===a&&W===c?X===Hi||X===Gi&&1073741823===Ki&&sf()-pi<Oi?hj(a,W):Ni=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=cg(),b=zf(b,c),Zi(a,b,c)))}function ri(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=cg();b=dg(c,a,null);c=zf(c,b);a=Yi(a,b);null!==a&&Zi(a,c,b)}var mj=void 0;
mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
function tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);pj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};ji=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function xh(a,b,c,d){return new uj(a,b,c,d)}
function Hh(a){a=a.prototype;return!(!a||!a.isReactComponent)}function sj(a){if("function"===typeof a)return Hh(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===jc)return 14}return 2}
function og(a,b){var c=a.alternate;null===c?(c=xh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function qg(a,b,c,d,e,f){var h=2;d=a;if("function"===typeof a)Hh(a)&&(h=1);else if("string"===typeof a)h=5;else a:switch(a){case ac:return sg(c.children,e,f,b);case fc:h=8;e|=7;break;case bc:h=8;e|=1;break;case cc:return a=xh(12,c,b,e|8),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=xh(13,c,b,e),a.type=hc,a.elementType=hc,a.expirationTime=f,a;case ic:return a=xh(19,c,b,e),a.elementType=ic,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:h=
10;break a;case ec:h=9;break a;case gc:h=11;break a;case jc:h=14;break a;case kc:h=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=xh(h,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function sg(a,b,c,d){a=xh(7,a,d,b);a.expirationTime=c;return a}function pg(a,b,c){a=xh(6,a,null,b);a.expirationTime=c;return a}
function rg(a,b,c){b=xh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function vj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=this.firstPendingTime=this.callbackExpirationTime=0}function wj(a,b,c){a=new vj(a,b,c);b=xh(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}
function xj(a,b,c,d,e,f){var h=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==ld(c)||1!==c.tag)throw t(Error(170));var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(N(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=We(c,k,g);break a}}c=g}else c=Qe;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Qf(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
(e.callback=b);Sf(h,e);eg(h,d);return d}function yj(a,b,c,d){var e=b.current,f=cg(),h=$f.suspense;e=dg(f,e,h);return xj(a,b,c,e,h,d)}function zj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);if(!e)throw t(Error(90));Wb(d);Ec(d,e)}}}break;case "textarea":pe(a,c);break;case "select":b=c.value,null!=b&&me(a,!!c.multiple,b,!1)}};
function Bj(a){var b=1073741821-25*(((1073741821-cg()+500)/25|0)+1);b<=Xi&&--b;this._expirationTime=Xi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bj.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Cj;xj(a,b,null,c,null,d._onCommit);return d};
Bj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((U&(Ci|Di))!==T)throw t(Error(253));xf(Z.bind(null,a,b));O();b=this._next;this._next=
null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Cj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Cj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function Dj(a,b,c){this._internalRoot=wj(a,b,c)}function Ej(a,b){this._internalRoot=wj(a,2,b)}Ej.prototype.render=Dj.prototype.render=function(a,b){var c=this._internalRoot,d=new Cj;b=void 0===b?null:b;null!==b&&d.then(b);yj(a,c,null,d._onCommit);return d};
Ej.prototype.unmount=Dj.prototype.unmount=function(a){var b=this._internalRoot,c=new Cj;a=void 0===a?null:a;null!==a&&c.then(a);yj(null,b,null,c._onCommit);return c};Ej.prototype.createBatch=function(){var a=new Bj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(a,b){var c=U;U|=2;try{return a(b)}finally{U=c,U===T&&O()}};function Ij(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dj(a,0,b)}
function Jj(a,b,c,d,e){var f=c._reactRootContainer,h=void 0;if(f){h=f._internalRoot;if("function"===typeof e){var g=e;e=function(){var a=zj(h);g.call(a)}}yj(b,h,a,e)}else{f=c._reactRootContainer=Ij(c,d);h=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=zj(h);k.call(a)}}gj(function(){yj(b,h,a,e)})}return zj(h)}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
var Nj={createPortal:Kj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=qd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Hj(a))throw t(Error(40));return a._reactRootContainer?(gj(function(){Jj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(a,b,c,d){aj();return fj(a,b,c,d)},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(a){var b=U;U|=1;try{vf(99,a)}finally{U=b,U===T&&O()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
function Lj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Ej(a,null!=b&&!0===b.hydrate)}function Mj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Dj(a,1,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return tj(m({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=qd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(40);
} else {}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(r,0),b;}};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(D=Math.floor(1E3/a),H=!0):(D=33.33,H=!1)};var J=function(){if(null!==A){var a=exports.unstable_now(),b=0<G-a;try{A(b,
a)||(A=null)}catch(c){throw I.postMessage(null),c;}}},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(a){A=a;z||(z=!0,x(function(a){L(a)}))};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a,b){var c=a.next;if(c===a)M=null;else{a===M&&(M=c);var f=a.previous;f.next=c;c.previous=f}a.next=a.previous=null;c=a.callback;f=P;var l=O;P=a.priorityLevel;O=a;try{var h=a.expirationTime<=b;switch(P){case 1:var k=c(h);break;case 2:k=c(h);break;case 3:k=c(h);break;case 4:k=c(h);break;case 5:k=c(h)}}catch(Z){throw Z;}finally{P=f,O=l}if("function"===typeof k)if(b=a.expirationTime,a.callback=k,null===M)M=a.next=a.previous=a;else{k=null;h=M;do{if(b<=h.expirationTime){k=h;break}h=h.next}while(h!==
M);null===k?k=M:k===M&&(M=a);b=k.previous;b.next=k.previous=a;a.next=k;a.previous=b}}function U(a){if(null!==N&&N.startTime<=a){do{var b=N,c=b.next;if(b===c)N=null;else{N=c;var f=b.previous;f.next=c;c.previous=f}b.next=b.previous=null;V(b,b.expirationTime)}while(null!==N&&N.startTime<=a)}}function W(a){S=!1;U(a);R||(null!==M?(R=!0,d(X)):null!==N&&e(W,N.startTime-a))}
function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
function V(a,b){if(null===M)M=a.next=a.previous=a;else{var c=null,f=M;do{if(b<f.expirationTime){c=f;break}f=f.next}while(f!==M);null===c?c=M:c===M&&(M=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(a===b)a===M?M=null:a===N&&(N=null);else{a===M?M=b:a===N&&(N=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(42);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(44);
} else {}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseMiddleware;

var _isPromise = _interopRequireDefault(__webpack_require__(50));

var _fluxStandardAction = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function promiseMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (!(0, _fluxStandardAction.isFSA)(action)) {
        return (0, _isPromise.default)(action) ? action.then(dispatch) : next(action);
      }

      return (0, _isPromise.default)(action.payload) ? action.payload.then(function (result) {
        return dispatch(_objectSpread({}, action, {
          payload: result
        }));
      }).catch(function (error) {
        dispatch(_objectSpread({}, action, {
          payload: error,
          error: true
        }));
        return Promise.reject(error);
      }) : next(action);
    };
  };
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString2 = __webpack_require__(52);

var _isString3 = _interopRequireDefault(_isString2);

var _isPlainObject2 = __webpack_require__(58);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

exports.isFSA = isFSA;
exports.isError = isError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFSA(action) {
  return (0, _isPlainObject3.default)(action) && (0, _isString3.default)(action.type) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return isFSA(action) && action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isArray = __webpack_require__(57),
    isObjectLike = __webpack_require__(26);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(54);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    getPrototype = __webpack_require__(59),
    isObjectLike = __webpack_require__(26);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(60);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSOLE_HIDE = 'console.hide';
exports.CONSOLE_SHOW_COMMAND = 'console.show.command';
exports.CONSOLE_SHOW_ERROR = 'console.show.error';
exports.CONSOLE_SHOW_INFO = 'console.show.info';
exports.CONSOLE_HIDE_COMMAND = 'console.hide.command';
exports.CONSOLE_SET_CONSOLE_TEXT = 'console.set.command';
exports.CONSOLE_SET_COMPLETIONS = 'console.set.completions';
exports.CONSOLE_COMPLETION_NEXT = 'console.completion.next';
exports.CONSOLE_COMPLETION_PREV = 'console.completion.prev';
exports.CONSOLE_SHOW_FIND = 'console.show.find';


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
const actions = tslib_1.__importStar(__webpack_require__(75));
const hide = () => {
    return {
        type: actions.CONSOLE_HIDE,
    };
};
exports.hide = hide;
const showCommand = (text) => {
    return {
        type: actions.CONSOLE_SHOW_COMMAND,
        text: text
    };
};
exports.showCommand = showCommand;
const showFind = () => {
    return {
        type: actions.CONSOLE_SHOW_FIND,
    };
};
exports.showFind = showFind;
const showError = (text) => {
    return {
        type: actions.CONSOLE_SHOW_ERROR,
        text: text
    };
};
exports.showError = showError;
const showInfo = (text) => {
    return {
        type: actions.CONSOLE_SHOW_INFO,
        text: text
    };
};
exports.showInfo = showInfo;
const hideCommand = () => {
    window.top.postMessage(JSON.stringify({
        type: messages.CONSOLE_UNFOCUS,
    }), '*');
    return {
        type: actions.CONSOLE_HIDE_COMMAND,
    };
};
exports.hideCommand = hideCommand;
const enterCommand = async (text) => {
    await browser.runtime.sendMessage({
        type: messages.CONSOLE_ENTER_COMMAND,
        text,
    });
    return hideCommand();
};
exports.enterCommand = enterCommand;
const enterFind = (text) => {
    window.top.postMessage(JSON.stringify({
        type: messages.CONSOLE_ENTER_FIND,
        text,
    }), '*');
    return hideCommand();
};
exports.enterFind = enterFind;
const setConsoleText = (consoleText) => {
    return {
        type: actions.CONSOLE_SET_CONSOLE_TEXT,
        consoleText,
    };
};
exports.setConsoleText = setConsoleText;
const getCompletions = async (text) => {
    let completions = await browser.runtime.sendMessage({
        type: messages.CONSOLE_QUERY_COMPLETIONS,
        text,
    });
    return {
        type: actions.CONSOLE_SET_COMPLETIONS,
        completions,
        completionSource: text,
    };
};
exports.getCompletions = getCompletions;
const completionNext = () => {
    return {
        type: actions.CONSOLE_COMPLETION_NEXT,
    };
};
exports.completionNext = completionNext;
const completionPrev = () => {
    return {
        type: actions.CONSOLE_COMPLETION_PREV,
    };
};
exports.completionPrev = completionPrev;


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
const reducers_1 = tslib_1.__importDefault(__webpack_require__(197));
const redux_1 = __webpack_require__(19);
const redux_promise_1 = tslib_1.__importDefault(__webpack_require__(49));
const consoleActions = tslib_1.__importStar(__webpack_require__(76));
const react_redux_1 = __webpack_require__(28);
const Console_1 = tslib_1.__importDefault(__webpack_require__(198));
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const react_dom_1 = tslib_1.__importDefault(__webpack_require__(18));
const store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_promise_1.default));
window.addEventListener('load', () => {
    let wrapper = document.getElementById('vimvixen-console');
    react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(Console_1.default, null)), wrapper);
});
const onMessage = (message) => {
    let msg = messages.valueOf(message);
    switch (msg.type) {
        case messages.CONSOLE_SHOW_COMMAND:
            return store.dispatch(consoleActions.showCommand(msg.command));
        case messages.CONSOLE_SHOW_FIND:
            return store.dispatch(consoleActions.showFind());
        case messages.CONSOLE_SHOW_ERROR:
            return store.dispatch(consoleActions.showError(msg.text));
        case messages.CONSOLE_SHOW_INFO:
            return store.dispatch(consoleActions.showInfo(msg.text));
        case messages.CONSOLE_HIDE:
            return store.dispatch(consoleActions.hide());
    }
};
browser.runtime.onMessage.addListener(onMessage);
let port = browser.runtime.connect(undefined, { name: 'vimvixen-console' });
port.onMessage.addListener(onMessage);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const actions = tslib_1.__importStar(__webpack_require__(75));
const defaultState = {
    mode: '',
    messageText: '',
    consoleText: '',
    completionSource: '',
    completions: [],
    select: -1,
    viewIndex: 0,
};
const nextSelection = (state) => {
    if (state.completions.length === 0) {
        return -1;
    }
    if (state.select < 0) {
        return 0;
    }
    let length = state.completions
        .map(g => g.items.length)
        .reduce((x, y) => x + y);
    if (state.select + 1 < length) {
        return state.select + 1;
    }
    return -1;
};
const prevSelection = (state) => {
    let length = state.completions
        .map(g => g.items.length)
        .reduce((x, y) => x + y);
    if (state.select < 0) {
        return length - 1;
    }
    return state.select - 1;
};
const nextConsoleText = (completions, select, defaults) => {
    if (select < 0) {
        return defaults;
    }
    let items = completions.map(g => g.items).reduce((g1, g2) => g1.concat(g2));
    return items[select].content;
};
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.CONSOLE_HIDE:
            return Object.assign(Object.assign({}, state), { mode: '' });
        case actions.CONSOLE_SHOW_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: 'command', consoleText: action.text, completions: [] });
        case actions.CONSOLE_SHOW_FIND:
            return Object.assign(Object.assign({}, state), { mode: 'find', consoleText: '', completions: [] });
        case actions.CONSOLE_SHOW_ERROR:
            return Object.assign(Object.assign({}, state), { mode: 'error', messageText: action.text });
        case actions.CONSOLE_SHOW_INFO:
            return Object.assign(Object.assign({}, state), { mode: 'info', messageText: action.text });
        case actions.CONSOLE_HIDE_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: state.mode === 'command' || state.mode === 'find' ? '' : state.mode });
        case actions.CONSOLE_SET_CONSOLE_TEXT:
            return Object.assign(Object.assign({}, state), { consoleText: action.consoleText });
        case actions.CONSOLE_SET_COMPLETIONS:
            return Object.assign(Object.assign({}, state), { completions: action.completions, completionSource: action.completionSource, select: -1 });
        case actions.CONSOLE_COMPLETION_NEXT: {
            let select = nextSelection(state);
            return Object.assign(Object.assign({}, state), { select: select, consoleText: nextConsoleText(state.completions, select, state.completionSource) });
        }
        case actions.CONSOLE_COMPLETION_PREV: {
            let select = prevSelection(state);
            return Object.assign(Object.assign({}, state), { select: select, consoleText: nextConsoleText(state.completions, select, state.completionSource) });
        }
        default:
            return state;
    }
}
exports.default = reducer;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(199);
const react_redux_1 = __webpack_require__(28);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Input_1 = tslib_1.__importDefault(__webpack_require__(201));
const Completion_1 = tslib_1.__importDefault(__webpack_require__(202));
const Message_1 = tslib_1.__importDefault(__webpack_require__(205));
const consoleActions = tslib_1.__importStar(__webpack_require__(76));
const COMPLETION_MAX_ITEMS = 33;
class Console extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = react_1.default.createRef();
    }
    onBlur() {
        if (this.props.mode === 'command' || this.props.mode === 'find') {
            return this.props.dispatch(consoleActions.hideCommand());
        }
    }
    doEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        let value = e.target.value;
        if (this.props.mode === 'command') {
            return this.props.dispatch(consoleActions.enterCommand(value));
        }
        else if (this.props.mode === 'find') {
            return this.props.dispatch(consoleActions.enterFind(value === '' ? undefined : value));
        }
    }
    selectNext(e) {
        this.props.dispatch(consoleActions.completionNext());
        e.stopPropagation();
        e.preventDefault();
    }
    selectPrev(e) {
        this.props.dispatch(consoleActions.completionPrev());
        e.stopPropagation();
        e.preventDefault();
    }
    onKeyDown(e) {
        switch (e.key) {
            case 'Escape':
                return this.props.dispatch(consoleActions.hideCommand());
            case 'Enter':
                return this.doEnter(e);
            case 'Tab':
                if (e.shiftKey) {
                    this.props.dispatch(consoleActions.completionPrev());
                }
                else {
                    this.props.dispatch(consoleActions.completionNext());
                }
                e.stopPropagation();
                e.preventDefault();
                break;
            case '[':
                if (e.ctrlKey) {
                    e.preventDefault();
                    return this.props.dispatch(consoleActions.hideCommand());
                }
                break;
            case 'c':
                if (e.ctrlKey) {
                    e.preventDefault();
                    return this.props.dispatch(consoleActions.hideCommand());
                }
                break;
            case 'm':
                if (e.ctrlKey) {
                    return this.doEnter(e);
                }
                break;
            case 'n':
                if (e.ctrlKey) {
                    this.selectNext(e);
                }
                break;
            case 'p':
                if (e.ctrlKey) {
                    this.selectPrev(e);
                }
                break;
        }
    }
    onChange(e) {
        let text = e.target.value;
        this.props.dispatch(consoleActions.setConsoleText(text));
        if (this.props.mode === 'command') {
            this.props.dispatch(consoleActions.getCompletions(text));
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.mode !== 'command' && this.props.mode === 'command') {
            this.props.dispatch(consoleActions.getCompletions(this.props.consoleText));
            this.focus();
        }
        else if (prevProps.mode !== 'find' && this.props.mode === 'find') {
            this.focus();
        }
    }
    render() {
        switch (this.props.mode) {
            case 'command':
            case 'find':
                return react_1.default.createElement("div", { className: 'vimvixen-console-command-wrapper' },
                    react_1.default.createElement(Completion_1.default, { size: COMPLETION_MAX_ITEMS, completions: this.props.completions, select: this.props.select }),
                    react_1.default.createElement(Input_1.default, { ref: this.input, mode: this.props.mode, onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this), onChange: this.onChange.bind(this), value: this.props.consoleText }));
            case 'info':
            case 'error':
                return react_1.default.createElement(Message_1.default, { mode: this.props.mode }, this.props.messageText);
            default:
                return null;
        }
    }
    focus() {
        window.focus();
        if (this.input.current) {
            this.input.current.focus();
        }
    }
}
const mapStateToProps = (state) => (Object.assign({}, state));
exports.default = react_redux_1.connect(mapStateToProps)(Console);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(200);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(10)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, "html,body,*{margin:0;padding:0}body{position:absolute;bottom:0;left:0;right:0;overflow:hidden}.vimvixen-console{bottom:0;margin:0;padding:0}.vimvixen-console-command-wrapper{border-top:1px solid gray}.vimvixen-console-completion{background-color:white;font-style:normal;font-family:monospace;font-size:12px;line-height:16px}.vimvixen-console-completion-title{background-color:lightgray;font-weight:bold;margin:0;padding:0}.vimvixen-console-completion-item{padding-left:1.5rem;background-position:0 center;background-size:contain;background-repeat:no-repeat;white-space:pre}.vimvixen-console-completion-item.vimvixen-completion-selected{background-color:yellow}.vimvixen-console-completion-item-caption{display:inline-block;width:40%;text-overflow:ellipsis;overflow:hidden}.vimvixen-console-completion-item-url{display:inline-block;color:green;width:60%;text-overflow:ellipsis;overflow:hidden}.vimvixen-console-message{font-style:normal;font-family:monospace;font-size:12px;line-height:16px;border-top:1px solid gray}.vimvixen-console-error{background-color:red;font-weight:bold;color:white}.vimvixen-console-info{background-color:white;font-weight:normal;color:green}.vimvixen-console-command{background-color:white;display:flex}.vimvixen-console-command-prompt{font-style:normal;font-family:monospace;font-size:12px;line-height:16px}.vimvixen-console-command-input{border:none;flex-grow:1;font-style:normal;font-family:monospace;font-size:12px;line-height:16px}\n", ""]);


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
class Input extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = react_1.default.createRef();
    }
    focus() {
        if (this.input.current) {
            this.input.current.focus();
        }
    }
    render() {
        let prompt = '';
        if (this.props.mode === 'command') {
            prompt = ':';
        }
        else if (this.props.mode === 'find') {
            prompt = '/';
        }
        return (react_1.default.createElement("div", { className: 'vimvixen-console-command' },
            react_1.default.createElement("i", { className: 'vimvixen-console-command-prompt' }, prompt),
            react_1.default.createElement("input", { className: 'vimvixen-console-command-input', ref: this.input, onBlur: this.props.onBlur, onKeyDown: this.props.onKeyDown, onChange: this.props.onChange, value: this.props.value })));
    }
}
exports.default = Input;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const CompletionItem_1 = tslib_1.__importDefault(__webpack_require__(203));
const CompletionTitle_1 = tslib_1.__importDefault(__webpack_require__(204));
class Completion extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { viewOffset: 0, select: -1 };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.select === nextProps.select) {
            return null;
        }
        let viewSelect = (() => {
            let index = 0;
            for (let i = 0; i < nextProps.completions.length; ++i) {
                ++index;
                let g = nextProps.completions[i];
                if (nextProps.select + i + 1 < index + g.items.length) {
                    return nextProps.select + i + 1;
                }
                index += g.items.length;
            }
            return -1;
        })();
        let viewOffset = 0;
        if (nextProps.select < 0) {
            viewOffset = 0;
        }
        else if (prevState.select < nextProps.select) {
            viewOffset = Math.max(prevState.viewOffset, viewSelect - nextProps.size + 1);
        }
        else if (prevState.select > nextProps.select) {
            viewOffset = Math.min(prevState.viewOffset, viewSelect);
        }
        return { viewOffset, select: nextProps.select };
    }
    render() {
        let eles = [];
        let index = 0;
        for (let group of this.props.completions) {
            eles.push(react_1.default.createElement(CompletionTitle_1.default, { key: `group-${index}`, title: group.name }));
            for (let item of group.items) {
                eles.push(react_1.default.createElement(CompletionItem_1.default, { key: `item-${index}`, icon: item.icon, caption: item.caption, url: item.url, highlight: index === this.props.select }));
                ++index;
            }
        }
        let viewOffset = this.state.viewOffset;
        eles = eles.slice(viewOffset, viewOffset + this.props.size);
        return (react_1.default.createElement("ul", { className: 'vimvixen-console-completion' }, eles));
    }
}
exports.default = Completion;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const prop_types_1 = tslib_1.__importDefault(__webpack_require__(5));
const CompletionItem = (props) => {
    let className = 'vimvixen-console-completion-item';
    if (props.highlight) {
        className += ' vimvixen-completion-selected';
    }
    return react_1.default.createElement("li", { className: className, style: { backgroundImage: 'url(' + props.icon + ')' } },
        react_1.default.createElement("span", { className: 'vimvixen-console-completion-item-caption' }, props.caption),
        react_1.default.createElement("span", { className: 'vimvixen-console-completion-item-url' }, props.url));
};
CompletionItem.propTypes = {
    highlight: prop_types_1.default.bool,
    caption: prop_types_1.default.string,
    url: prop_types_1.default.string,
};
exports.default = CompletionItem;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const CompletionTitle = (props) => {
    return react_1.default.createElement("li", { className: 'vimvixen-console-completion-title' }, props.title);
};
exports.default = CompletionTitle;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Message = (props) => {
    switch (props.mode) {
        case 'error':
            return (react_1.default.createElement("p", { className: 'vimvixen-console-message vimvixen-console-error' }, props.children));
        case 'info':
            return (react_1.default.createElement("p", { className: 'vimvixen-console-message vimvixen-console-info' }, props.children));
    }
    return null;
};
exports.default = Message;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2JhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbHV4LXN0YW5kYXJkLWFjdGlvbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9hY3Rpb25zL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvQ29uc29sZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9jb25zb2xlLnNjc3M/NGUxOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29sZS9Db21wbGV0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUvQ29tcGxldGlvbkl0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29sZS9Db21wbGV0aW9uVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29s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Q0g7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5Nik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuL29wZXJhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORF9PUEVSQVRJT04gPSAnYmFja2dyb3VuZC5vcGVyYXRpb24nO1xuXG5leHBvcnQgY29uc3QgQ09OU09MRV9VTkZPQ1VTID0gJ2NvbnNvbGUudW5mb2N1cyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9FTlRFUl9DT01NQU5EID0gJ2NvbnNvbGUuZW50ZXIuY29tbWFuZCc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9FTlRFUl9GSU5EID0gJ2NvbnNvbGUuZW50ZXIuZmluZCc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9RVUVSWV9DT01QTEVUSU9OUyA9ICdjb25zb2xlLnF1ZXJ5LmNvbXBsZXRpb25zJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfQ09NTUFORCA9ICdjb25zb2xlLnNob3cuY29tbWFuZCc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0VSUk9SID0gJ2NvbnNvbGUuc2hvdy5lcnJvcic7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0lORk8gPSAnY29uc29sZS5zaG93LmluZm8nO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19GSU5EID0gJ2NvbnNvbGUuc2hvdy5maW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0hJREUgPSAnY29uc29sZS5oaWRlJztcblxuZXhwb3J0IGNvbnN0IEZPTExPV19TVEFSVCA9ICdmb2xsb3cuc3RhcnQnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUX0NPVU5UX1RBUkdFVFMgPSAnZm9sbG93LnJlcXVlc3QuY291bnQudGFyZ2V0cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFMgPSAnZm9sbG93LnJlc3BvbnNlLmNvdW50LnRhcmdldHMnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19DUkVBVEVfSElOVFMgPSAnZm9sbG93LmNyZWF0ZS5oaW50cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NIT1dfSElOVFMgPSAnZm9sbG93LnVwZGF0ZS5oaW50cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFTU9WRV9ISU5UUyA9ICdmb2xsb3cucmVtb3ZlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfQUNUSVZBVEUgPSAnZm9sbG93LmFjdGl2YXRlJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfS0VZX1BSRVNTID0gJ2ZvbGxvdy5rZXkucHJlc3MnO1xuXG5leHBvcnQgY29uc3QgTUFSS19TRVRfR0xPQkFMID0gJ21hcmsuc2V0Lmdsb2JhbCc7XG5leHBvcnQgY29uc3QgTUFSS19KVU1QX0dMT0JBTCA9ICdtYXJrLmp1bXAuZ2xvYmFsJztcblxuZXhwb3J0IGNvbnN0IFRBQl9TQ1JPTExfVE8gPSAndGFiLnNjcm9sbC50byc7XG5cbmV4cG9ydCBjb25zdCBGSU5EX05FWFQgPSAnZmluZC5uZXh0JztcbmV4cG9ydCBjb25zdCBGSU5EX1BSRVYgPSAnZmluZC5wcmV2JztcbmV4cG9ydCBjb25zdCBGSU5EX0dFVF9LRVlXT1JEID0gJ2ZpbmQuZ2V0LmtleXdvcmQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU0VUX0tFWVdPUkQgPSAnZmluZC5zZXQua2V5d29yZCc7XG5cbmV4cG9ydCBjb25zdCBBRERPTl9FTkFCTEVEX1FVRVJZID0gJ2FkZG9uLmVuYWJsZWQucXVlcnknO1xuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRURfUkVTUE9OU0UgPSAnYWRkb24uZW5hYmxlZC5yZXNwb25zZSc7XG5leHBvcnQgY29uc3QgQURET05fVE9HR0xFX0VOQUJMRUQgPSAnYWRkb24udG9nZ2xlLmVuYWJsZWQnO1xuXG5leHBvcnQgY29uc3QgT1BFTl9VUkwgPSAnb3Blbi51cmwnO1xuXG5leHBvcnQgY29uc3QgU0VUVElOR1NfQ0hBTkdFRCA9ICdzZXR0aW5ncy5jaGFuZ2VkJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19RVUVSWSA9ICdzZXR0aW5ncy5xdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0ZSQU1FX01FU1NBR0UgPSAnY29uc29sZS5mcmFtZS5tZXNzYWdlJztcblxuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfTkVYVCA9ICduYXZpZ2F0ZS5oaXN0b3J5Lm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfUFJFViA9ICduYXZpZ2F0ZS5oaXN0b3J5LnByZXYnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfTkVYVCA9ICduYXZpZ2F0ZS5saW5rLm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfUFJFViA9ICduYXZpZ2F0ZS5saW5rLnByZXYnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRPcGVyYXRpb25NZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEJBQ0tHUk9VTkRfT1BFUkFUSU9OO1xuICBvcGVyYXRpb246IG9wZXJhdGlvbnMuT3BlcmF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVVbmZvY3VzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1VORk9DVVM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9DT01NQU5EO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyRmluZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9GSU5EO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfQ09NTUFORDtcbiAgY29tbWFuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93RXJyb3JNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93SW5mb01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0lORk87XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19GSU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVIaWRlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0hJREU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U3RhcnRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TVEFSVDtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1JlcXVlc3RDb3VudFRhcmdldHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRVFVRVNUX0NPVU5UX1RBUkdFVFM7XG4gIHZpZXdTaXplOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG4gIGZyYW1lUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFM7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93Q3JlYXRlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19DUkVBVEVfSElOVFM7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICB2aWV3U2l6ZTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuICBmcmFtZVBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U2hvd0hpbnRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfU0hPV19ISU5UUztcbiAgcHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRU1PVkVfSElOVFM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19BQ1RJVkFURTtcbiAgdGFnOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dLZXlQcmVzc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0tFWV9QUkVTUztcbiAga2V5OiBzdHJpbmc7XG4gIGN0cmxLZXk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya1NldEdsb2JhbE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfR0xPQkFMO1xuICBrZXk6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya0p1bXBHbG9iYWxNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9HTE9CQUw7XG4gIGtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlNjcm9sbFRvTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfU0NST0xMX1RPO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRQcmV2TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEdldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfR0VUX0tFWVdPUkQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFNldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfU0VUX0tFWVdPUkQ7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUkVTUE9OU0U7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25Ub2dnbGVFbmFibGVkTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9UT0dHTEVfRU5BQkxFRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuVXJsTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBPUEVOX1VSTDtcbiAgdXJsOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFNFVFRJTkdTX0NIQU5HRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NRdWVyeU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgU0VUVElOR1NfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUZyYW1lTWVzc2FnZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9GUkFNRV9NRVNTQUdFO1xuICBtZXNzYWdlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVIaXN0b3J5TmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeVByZXZNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtOZXh0IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtQcmV2IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfUFJFVjtcbn1cblxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9XG4gIEJhY2tncm91bmRPcGVyYXRpb25NZXNzYWdlIHxcbiAgQ29uc29sZVVuZm9jdXNNZXNzYWdlIHxcbiAgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZSB8XG4gIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93Q29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0Vycm9yTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93SW5mb01lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHxcbiAgQ29uc29sZUhpZGVNZXNzYWdlIHxcbiAgRm9sbG93U3RhcnRNZXNzYWdlIHxcbiAgRm9sbG93UmVxdWVzdENvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dDcmVhdGVIaW50c01lc3NhZ2UgfFxuICBGb2xsb3dTaG93SGludHNNZXNzYWdlIHxcbiAgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHxcbiAgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHxcbiAgRm9sbG93S2V5UHJlc3NNZXNzYWdlIHxcbiAgTWFya1NldEdsb2JhbE1lc3NhZ2UgfFxuICBNYXJrSnVtcEdsb2JhbE1lc3NhZ2UgfFxuICBUYWJTY3JvbGxUb01lc3NhZ2UgfFxuICBGaW5kTmV4dE1lc3NhZ2UgfFxuICBGaW5kUHJldk1lc3NhZ2UgfFxuICBGaW5kR2V0S2V5d29yZE1lc3NhZ2UgfFxuICBGaW5kU2V0S2V5d29yZE1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRRdWVyeU1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRSZXNwb25zZU1lc3NhZ2UgfFxuICBBZGRvblRvZ2dsZUVuYWJsZWRNZXNzYWdlIHxcbiAgT3BlblVybE1lc3NhZ2UgfFxuICBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHxcbiAgU2V0dGluZ3NRdWVyeU1lc3NhZ2UgfFxuICBDb25zb2xlRnJhbWVNZXNzYWdlTWVzc2FnZSB8XG4gIE5hdmlnYXRlSGlzdG9yeU5leHRNZXNzYWdlIHxcbiAgTmF2aWdhdGVIaXN0b3J5UHJldk1lc3NhZ2UgfFxuICBOYXZpZ2F0ZUxpbmtOZXh0IHxcbiAgTmF2aWdhdGVMaW5rUHJldjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCB2YWx1ZU9mID0gKG86IGFueSk6IE1lc3NhZ2UgPT4ge1xuICBzd2l0Y2ggKG8udHlwZSkge1xuICBjYXNlIENPTlNPTEVfVU5GT0NVUzpcbiAgY2FzZSBDT05TT0xFX0VOVEVSX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9FTlRFUl9GSU5EOlxuICBjYXNlIENPTlNPTEVfUVVFUllfQ09NUExFVElPTlM6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0VSUk9SOlxuICBjYXNlIENPTlNPTEVfU0hPV19JTkZPOlxuICBjYXNlIENPTlNPTEVfU0hPV19GSU5EOlxuICBjYXNlIENPTlNPTEVfSElERTpcbiAgY2FzZSBGT0xMT1dfU1RBUlQ6XG4gIGNhc2UgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfQ1JFQVRFX0hJTlRTOlxuICBjYXNlIEZPTExPV19TSE9XX0hJTlRTOlxuICBjYXNlIEZPTExPV19SRU1PVkVfSElOVFM6XG4gIGNhc2UgRk9MTE9XX0FDVElWQVRFOlxuICBjYXNlIEZPTExPV19LRVlfUFJFU1M6XG4gIGNhc2UgTUFSS19TRVRfR0xPQkFMOlxuICBjYXNlIE1BUktfSlVNUF9HTE9CQUw6XG4gIGNhc2UgVEFCX1NDUk9MTF9UTzpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIEZJTkRfR0VUX0tFWVdPUkQ6XG4gIGNhc2UgRklORF9TRVRfS0VZV09SRDpcbiAgY2FzZSBBRERPTl9FTkFCTEVEX1FVRVJZOlxuICBjYXNlIEFERE9OX0VOQUJMRURfUkVTUE9OU0U6XG4gIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gIGNhc2UgT1BFTl9VUkw6XG4gIGNhc2UgU0VUVElOR1NfQ0hBTkdFRDpcbiAgY2FzZSBTRVRUSU5HU19RVUVSWTpcbiAgY2FzZSBDT05TT0xFX0ZSQU1FX01FU1NBR0U6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfTElOS19QUkVWOlxuICAgIHJldHVybiBvO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBvcGVyYXRpb24gdHlwZTogJyArIG8udHlwZSk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAgICckJHR5cGVvZic6IHRydWUsXG4gICAgcmVuZGVyOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWVcbn07XG5cbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgICBjb21wYXJlOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW1JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAgIGlmIChSZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gICAgfVxuICAgIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgUmVhY3RSZWR1eENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZWR1eENvbnRleHQ7IiwiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IHZhciBzZXRCYXRjaCA9IGZ1bmN0aW9uIHNldEJhdGNoKG5ld0JhdGNoKSB7XG4gIHJldHVybiBiYXRjaCA9IG5ld0JhdGNoO1xufTsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCB2YXIgZ2V0QmF0Y2ggPSBmdW5jdGlvbiBnZXRCYXRjaCgpIHtcbiAgcmV0dXJuIGJhdGNoO1xufTsiLCJpbXBvcnQgeyBnZXRCYXRjaCB9IGZyb20gJy4vYmF0Y2gnOyAvLyBlbmNhcHN1bGF0ZXMgdGhlIHN1YnNjcmlwdGlvbiBsb2dpYyBmb3IgY29ubmVjdGluZyBhIGNvbXBvbmVudCB0byB0aGUgcmVkdXggc3RvcmUsIGFzXG4vLyB3ZWxsIGFzIG5lc3Rpbmcgc3Vic2NyaXB0aW9ucyBvZiBkZXNjZW5kYW50IGNvbXBvbmVudHMsIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGVcbi8vIGFuY2VzdG9yIGNvbXBvbmVudHMgcmUtcmVuZGVyIGJlZm9yZSBkZXNjZW5kYW50c1xuXG52YXIgQ0xFQVJFRCA9IG51bGw7XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICB2YXIgYmF0Y2ggPSBnZXRCYXRjaCgpOyAvLyB0aGUgY3VycmVudC9uZXh0IHBhdHRlcm4gaXMgY29waWVkIGZyb20gcmVkdXgncyBjcmVhdGVTdG9yZSBjb2RlLlxuICAvLyBUT0RPOiByZWZhY3RvcitleHBvc2UgdGhhdCBjb2RlIHRvIGJlIHJldXNhYmxlIGhlcmU/XG5cbiAgdmFyIGN1cnJlbnQgPSBbXTtcbiAgdmFyIG5leHQgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBuZXh0ID0gQ0xFQVJFRDtcbiAgICAgIGN1cnJlbnQgPSBDTEVBUkVEO1xuICAgIH0sXG4gICAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudCA9IG5leHQ7XG4gICAgICBiYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSBuZXh0ID0gY3VycmVudC5zbGljZSgpO1xuICAgICAgbmV4dC5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgY3VycmVudCA9PT0gQ0xFQVJFRCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICAgIG5leHQuc3BsaWNlKG5leHQuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBTdWJzY3JpcHRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnBhcmVudFN1YiA9IHBhcmVudFN1YjtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyID0gdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaXB0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkTmVzdGVkU3ViID0gZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5TmVzdGVkU3VicyA9IGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMubm90aWZ5KCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmICh0aGlzLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5zdWJzY3JpYmUpO1xuICB9O1xuXG4gIF9wcm90by50cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5wYXJlbnRTdWIgPyB0aGlzLnBhcmVudFN1Yi5hZGROZXN0ZWRTdWIodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHRoaXMuc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJ5VW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpO1xuXG5leHBvcnQgeyBTdWJzY3JpcHRpb24gYXMgZGVmYXVsdCB9OyIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgfTtcbiAgfSwgW3N0b3JlXSk7XG4gIHZhciBwcmV2aW91c1N0YXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XG4gIH0sIFtzdG9yZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5Qcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9KSxcbiAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbn07XG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlLCBpc0NvbnRleHRDb25zdW1lciB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JzsgLy8gRGVmaW5lIHNvbWUgY29uc3RhbnQgYXJyYXlzIGp1c3QgdG8gYXZvaWQgcmUtY3JlYXRpbmcgdGhlc2VcblxudmFyIEVNUFRZX0FSUkFZID0gW107XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xuXG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gZnVuY3Rpb24gc3RyaW5naWZ5Q29tcG9uZW50KENvbXApIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB1cGRhdGVDb3VudCA9IHN0YXRlWzFdO1xuICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLCB1cGRhdGVDb3VudCArIDFdO1xufVxuXG52YXIgaW5pdFN0YXRlVXBkYXRlcyA9IGZ1bmN0aW9uIGluaXRTdGF0ZVVwZGF0ZXMoKSB7XG4gIHJldHVybiBbbnVsbCwgMF07XG59OyAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2UgbmVlZCB1c2VMYXlvdXRFZmZlY3QgYmVjYXVzZSB3ZSB3YW50XG4vLyBgY29ubmVjdGAgdG8gcGVyZm9ybSBzeW5jIHVwZGF0ZXMgdG8gYSByZWYgdG8gc2F2ZSB0aGUgbGF0ZXN0IHByb3BzIGFmdGVyXG4vLyBhIHJlbmRlciBpcyBhY3R1YWxseSBjb21taXR0ZWQgdG8gdGhlIERPTS5cblxuXG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0QWR2YW5jZWQoXG4vKlxuICBzZWxlY3RvckZhY3RvcnkgaXMgYSBmdW5jIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdXNlZCB0b1xuICBjb21wdXRlIG5ldyBwcm9wcyBmcm9tIHN0YXRlLCBwcm9wcywgYW5kIGRpc3BhdGNoLiBGb3IgZXhhbXBsZTpcbiAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdEFkdmFuY2VkKChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgIHRoaW5nOiBzdGF0ZS50aGluZ3NbcHJvcHMudGhpbmdJZF0sXG4gICAgICBzYXZlVGhpbmc6IGZpZWxkcyA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zYXZlVGhpbmcocHJvcHMudGhpbmdJZCwgZmllbGRzKSksXG4gICAgfSkpKFlvdXJDb21wb25lbnQpXG4gICBBY2Nlc3MgdG8gZGlzcGF0Y2ggaXMgcHJvdmlkZWQgdG8gdGhlIGZhY3Rvcnkgc28gc2VsZWN0b3JGYWN0b3JpZXMgY2FuIGJpbmQgYWN0aW9uQ3JlYXRvcnNcbiAgb3V0c2lkZSBvZiB0aGVpciBzZWxlY3RvciBhcyBhbiBvcHRpbWl6YXRpb24uIE9wdGlvbnMgcGFzc2VkIHRvIGNvbm5lY3RBZHZhbmNlZCBhcmUgcGFzc2VkIHRvXG4gIHRoZSBzZWxlY3RvckZhY3RvcnksIGFsb25nIHdpdGggZGlzcGxheU5hbWUgYW5kIFdyYXBwZWRDb21wb25lbnQsIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICBOb3RlIHRoYXQgc2VsZWN0b3JGYWN0b3J5IGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgY2FjaGluZy9tZW1vaXphdGlvbiBvZiBpbmJvdW5kIGFuZCBvdXRib3VuZFxuICBwcm9wcy4gRG8gbm90IHVzZSBjb25uZWN0QWR2YW5jZWQgZGlyZWN0bHkgd2l0aG91dCBtZW1vaXppbmcgcmVzdWx0cyBiZXR3ZWVuIGNhbGxzIHRvIHlvdXJcbiAgc2VsZWN0b3IsIG90aGVyd2lzZSB0aGUgQ29ubmVjdCBjb21wb25lbnQgd2lsbCByZS1yZW5kZXIgb24gZXZlcnkgc3RhdGUgb3IgcHJvcHMgY2hhbmdlLlxuKi9cbnNlbGVjdG9yRmFjdG9yeSwgLy8gb3B0aW9ucyBvYmplY3Q6XG5fcmVmKSB7XG4gIGlmIChfcmVmID09PSB2b2lkIDApIHtcbiAgICBfcmVmID0ge307XG4gIH1cblxuICB2YXIgX3JlZjIgPSBfcmVmLFxuICAgICAgX3JlZjIkZ2V0RGlzcGxheU5hbWUgPSBfcmVmMi5nZXREaXNwbGF5TmFtZSxcbiAgICAgIGdldERpc3BsYXlOYW1lID0gX3JlZjIkZ2V0RGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFwiQ29ubmVjdEFkdmFuY2VkKFwiICsgbmFtZSArIFwiKVwiO1xuICB9IDogX3JlZjIkZ2V0RGlzcGxheU5hbWUsXG4gICAgICBfcmVmMiRtZXRob2ROYW1lID0gX3JlZjIubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmMiRtZXRob2ROYW1lID09PSB2b2lkIDAgPyAnY29ubmVjdEFkdmFuY2VkJyA6IF9yZWYyJG1ldGhvZE5hbWUsXG4gICAgICBfcmVmMiRyZW5kZXJDb3VudFByb3AgPSBfcmVmMi5yZW5kZXJDb3VudFByb3AsXG4gICAgICByZW5kZXJDb3VudFByb3AgPSBfcmVmMiRyZW5kZXJDb3VudFByb3AgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYyJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9IF9yZWYyLnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJHNob3VsZEhhbmRsZVN0YSxcbiAgICAgIF9yZWYyJHN0b3JlS2V5ID0gX3JlZjIuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYyJHN0b3JlS2V5ID09PSB2b2lkIDAgPyAnc3RvcmUnIDogX3JlZjIkc3RvcmVLZXksXG4gICAgICBfcmVmMiR3aXRoUmVmID0gX3JlZjIud2l0aFJlZixcbiAgICAgIHdpdGhSZWYgPSBfcmVmMiR3aXRoUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHdpdGhSZWYsXG4gICAgICBfcmVmMiRmb3J3YXJkUmVmID0gX3JlZjIuZm9yd2FyZFJlZixcbiAgICAgIGZvcndhcmRSZWYgPSBfcmVmMiRmb3J3YXJkUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGZvcndhcmRSZWYsXG4gICAgICBfcmVmMiRjb250ZXh0ID0gX3JlZjIuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmMiRjb250ZXh0ID09PSB2b2lkIDAgPyBSZWFjdFJlZHV4Q29udGV4dCA6IF9yZWYyJGNvbnRleHQsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJnZXREaXNwbGF5TmFtZVwiLCBcIm1ldGhvZE5hbWVcIiwgXCJyZW5kZXJDb3VudFByb3BcIiwgXCJzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXNcIiwgXCJzdG9yZUtleVwiLCBcIndpdGhSZWZcIiwgXCJmb3J3YXJkUmVmXCIsIFwiY29udGV4dFwiXSk7XG5cbiAgaW52YXJpYW50KHJlbmRlckNvdW50UHJvcCA9PT0gdW5kZWZpbmVkLCBcInJlbmRlckNvdW50UHJvcCBpcyByZW1vdmVkLiByZW5kZXIgY291bnRpbmcgaXMgYnVpbHQgaW50byB0aGUgbGF0ZXN0IFJlYWN0IERldiBUb29scyBwcm9maWxpbmcgZXh0ZW5zaW9uXCIpO1xuICBpbnZhcmlhbnQoIXdpdGhSZWYsICd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gIHZhciBjdXN0b21TdG9yZVdhcm5pbmdNZXNzYWdlID0gJ1RvIHVzZSBhIGN1c3RvbSBSZWR1eCBzdG9yZSBmb3Igc3BlY2lmaWMgY29tcG9uZW50cywgY3JlYXRlIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgd2l0aCAnICsgXCJSZWFjdC5jcmVhdGVDb250ZXh0KCksIGFuZCBwYXNzIHRoZSBjb250ZXh0IG9iamVjdCB0byBSZWFjdCBSZWR1eCdzIFByb3ZpZGVyIGFuZCBzcGVjaWZpYyBjb21wb25lbnRzXCIgKyAnIGxpa2U6IDxQcm92aWRlciBjb250ZXh0PXtNeUNvbnRleHR9PjxDb25uZWN0ZWRDb21wb25lbnQgY29udGV4dD17TXlDb250ZXh0fSAvPjwvUHJvdmlkZXI+LiAnICsgJ1lvdSBtYXkgYWxzbyBwYXNzIGEge2NvbnRleHQgOiBNeUNvbnRleHR9IG9wdGlvbiB0byBjb25uZWN0JztcbiAgaW52YXJpYW50KHN0b3JlS2V5ID09PSAnc3RvcmUnLCAnc3RvcmVLZXkgaGFzIGJlZW4gcmVtb3ZlZCBhbmQgZG9lcyBub3QgZG8gYW55dGhpbmcuICcgKyBjdXN0b21TdG9yZVdhcm5pbmdNZXNzYWdlKTtcbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW52YXJpYW50KGlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KSwgXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciBmb3J3YXJkZWRSZWYgPSBwcm9wcy5mb3J3YXJkZWRSZWYsXG4gICAgICAgICAgICB3cmFwcGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiZm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIGZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXTtcbiAgICAgIH0sIFtwcm9wc10pLFxuICAgICAgICAgIHByb3BzQ29udGV4dCA9IF91c2VNZW1vWzBdLFxuICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF91c2VNZW1vWzFdLFxuICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VNZW1vWzJdO1xuXG4gICAgICB2YXIgQ29udGV4dFRvVXNlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZXJzIG1heSBvcHRpb25hbGx5IHBhc3MgaW4gYSBjdXN0b20gY29udGV4dCBpbnN0YW5jZSB0byB1c2UgaW5zdGVhZCBvZiBvdXIgUmVhY3RSZWR1eENvbnRleHQuXG4gICAgICAgIC8vIE1lbW9pemUgdGhlIGNoZWNrIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBjb250ZXh0IGluc3RhbmNlIHdlIHNob3VsZCB1c2UuXG4gICAgICAgIHJldHVybiBwcm9wc0NvbnRleHQgJiYgcHJvcHNDb250ZXh0LkNvbnN1bWVyICYmIGlzQ29udGV4dENvbnN1bWVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKSkgPyBwcm9wc0NvbnRleHQgOiBDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pOyAvLyBSZXRyaWV2ZSB0aGUgc3RvcmUgYW5kIGFuY2VzdG9yIHN1YnNjcmlwdGlvbiB2aWEgY29udGV4dCwgaWYgYXZhaWxhYmxlXG5cbiAgICAgIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KENvbnRleHRUb1VzZSk7IC8vIFRoZSBzdG9yZSBfbXVzdF8gZXhpc3QgYXMgZWl0aGVyIGEgcHJvcCBvciBpbiBjb250ZXh0XG5cbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKTtcbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpbnZhcmlhbnQoZGlkU3RvcmVDb21lRnJvbVByb3BzIHx8IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0LCBcIkNvdWxkIG5vdCBmaW5kIFxcXCJzdG9yZVxcXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIgKyAoXCJcXFwiXCIgKyBkaXNwbGF5TmFtZSArIFwiXFxcIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgXCIpICsgXCJvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgXCIgKyAoXCJSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvIFwiICsgZGlzcGxheU5hbWUgKyBcIiBpbiBjb25uZWN0IG9wdGlvbnMuXCIpKTtcbiAgICAgIHZhciBzdG9yZSA9IHByb3BzLnN0b3JlIHx8IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIHZhciBjaGlsZFByb3BzU2VsZWN0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4gICAgICAgIC8vIFJlLWNyZWF0ZSB0aGlzIHNlbGVjdG9yIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLlxuICAgICAgICByZXR1cm4gY3JlYXRlQ2hpbGRTZWxlY3RvcihzdG9yZSk7XG4gICAgICB9LCBbc3RvcmVdKTtcblxuICAgICAgdmFyIF91c2VNZW1vMiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTsgLy8gVGhpcyBTdWJzY3JpcHRpb24ncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gbnVsbCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb24pOyAvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGBzdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBUaGlzIGNhblxuICAgICAgICAvLyBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVyc1xuICAgICAgICAvLyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlICBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLlxuXG4gICAgICAgIHZhciBub3RpZnlOZXN0ZWRTdWJzID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic107XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSksXG4gICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3VzZU1lbW8yWzBdLFxuICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMgPSBfdXNlTWVtbzJbMV07IC8vIERldGVybWluZSB3aGF0IHtzdG9yZSwgc3Vic2NyaXB0aW9ufSB2YWx1ZSBzaG91bGQgYmUgcHV0IGludG8gbmVzdGVkIGNvbnRleHQsIGlmIG5lY2Vzc2FyeSxcbiAgICAgIC8vIGFuZCBtZW1vaXplIHRoYXQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29udGV4dCB1cGRhdGVzLlxuXG5cbiAgICAgIHZhciBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCBpcyBkaXJlY3RseSBzdWJzY3JpYmVkIHRvIGEgc3RvcmUgZnJvbSBwcm9wcy5cbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IGRlc2NlbmRhbnRzIHJlYWRpbmcgZnJvbSB0aGlzIHN0b3JlIC0gcGFzcyBkb3duIHdoYXRldmVyXG4gICAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGNvbnRleHQgdmFsdWUgaXMgZnJvbSB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHB1dCB0aGlzIGNvbXBvbmVudCdzIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBpbnRvIGNvbnRleHQsIHNvIHRoYXRcbiAgICAgICAgLy8gY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdvbid0IHVwZGF0ZSB1bnRpbCBhZnRlciB0aGlzIGNvbXBvbmVudCBpcyBkb25lXG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHRWYWx1ZSwge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTsgLy8gV2UgbmVlZCB0byBmb3JjZSB0aGlzIHdyYXBwZXIgY29tcG9uZW50IHRvIHJlLXJlbmRlciB3aGVuZXZlciBhIFJlZHV4IHN0b3JlIHVwZGF0ZVxuICAgICAgLy8gY2F1c2VzIGEgY2hhbmdlIHRvIHRoZSBjYWxjdWxhdGVkIGNoaWxkIGNvbXBvbmVudCBwcm9wcyAob3Igd2UgY2F1Z2h0IGFuIGVycm9yIGluIG1hcFN0YXRlKVxuXG4gICAgICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlciwgRU1QVFlfQVJSQVksIGluaXRTdGF0ZVVwZGF0ZXMpLFxuICAgICAgICAgIF91c2VSZWR1Y2VyJCA9IF91c2VSZWR1Y2VyWzBdLFxuICAgICAgICAgIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgPSBfdXNlUmVkdWNlciRbMF0sXG4gICAgICAgICAgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdOyAvLyBQcm9wYWdhdGUgYW55IG1hcFN0YXRlL21hcERpc3BhdGNoIGVycm9ycyB1cHdhcmRzXG5cblxuICAgICAgaWYgKHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgJiYgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdC5lcnJvcikge1xuICAgICAgICB0aHJvdyBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yO1xuICAgICAgfSAvLyBTZXQgdXAgcmVmcyB0byBjb29yZGluYXRlIHZhbHVlcyBiZXR3ZWVuIHRoZSBzdWJzY3JpcHRpb24gZWZmZWN0IGFuZCB0aGUgcmVuZGVyIGxvZ2ljXG5cblxuICAgICAgdmFyIGxhc3RDaGlsZFByb3BzID0gdXNlUmVmKCk7XG4gICAgICB2YXIgbGFzdFdyYXBwZXJQcm9wcyA9IHVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgdmFyIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSB1c2VSZWYoKTtcbiAgICAgIHZhciByZW5kZXJJc1NjaGVkdWxlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgICB2YXIgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVB1cmVPbmx5TWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRyaWNreSBsb2dpYyBoZXJlOlxuICAgICAgICAvLyAtIFRoaXMgcmVuZGVyIG1heSBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJ5IGEgUmVkdXggc3RvcmUgdXBkYXRlIHRoYXQgcHJvZHVjZWQgbmV3IGNoaWxkIHByb3BzXG4gICAgICAgIC8vIC0gSG93ZXZlciwgd2UgbWF5IGhhdmUgZ290dGVuIG5ldyB3cmFwcGVyIHByb3BzIGFmdGVyIHRoYXRcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBuZXcgY2hpbGQgcHJvcHMsIGFuZCB0aGUgc2FtZSB3cmFwcGVyIHByb3BzLCB3ZSBrbm93IHdlIHNob3VsZCB1c2UgdGhlIG5ldyBjaGlsZCBwcm9wcyBhcy1pcy5cbiAgICAgICAgLy8gQnV0LCBpZiB3ZSBoYXZlIG5ldyB3cmFwcGVyIHByb3BzLCB0aG9zZSBtaWdodCBjaGFuZ2UgdGhlIGNoaWxkIHByb3BzLCBzbyB3ZSBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoaW5ncy5cbiAgICAgICAgLy8gU28sIHdlJ2xsIHVzZSB0aGUgY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGUgb25seSBpZiB0aGUgd3JhcHBlciBwcm9wcyBhcmUgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLlxuICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgfSAvLyBUT0RPIFdlJ3JlIHJlYWRpbmcgdGhlIHN0b3JlIGRpcmVjdGx5IGluIHJlbmRlcigpIGhlcmUuIEJhZCBpZGVhP1xuICAgICAgICAvLyBUaGlzIHdpbGwgbGlrZWx5IGNhdXNlIEJhZCBUaGluZ3MgKFRNKSB0byBoYXBwZW4gaW4gQ29uY3VycmVudCBNb2RlLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG8gdGhpcyBiZWNhdXNlIG9uIHJlbmRlcnMgX25vdF8gY2F1c2VkIGJ5IHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdGhlIGxhdGVzdCBzdG9yZSBzdGF0ZVxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlLlxuXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgfSwgW3N0b3JlLCBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LCB3cmFwcGVyUHJvcHNdKTsgLy8gV2UgbmVlZCB0aGlzIHRvIGV4ZWN1dGUgc3luY2hyb25vdXNseSBldmVyeSB0aW1lIHdlIHJlLXJlbmRlci4gSG93ZXZlciwgUmVhY3Qgd2FybnNcbiAgICAgIC8vIGFib3V0IHVzZUxheW91dEVmZmVjdCBpbiBTU1IsIHNvIHdlIHRyeSB0byBkZXRlY3QgZW52aXJvbm1lbnQgYW5kIGZhbGwgYmFjayB0b1xuICAgICAgLy8ganVzdCB1c2VFZmZlY3QgaW5zdGVhZCB0byBhdm9pZCB0aGUgd2FybmluZywgc2luY2UgbmVpdGhlciB3aWxsIHJ1biBhbnl3YXkuXG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBXZSB3YW50IHRvIGNhcHR1cmUgdGhlIHdyYXBwZXIgcHJvcHMgYW5kIGNoaWxkIHByb3BzIHdlIHVzZWQgZm9yIGxhdGVyIGNvbXBhcmlzb25zXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTsgLy8gSWYgdGhlIHJlbmRlciB3YXMgZnJvbSBhIHN0b3JlIHVwZGF0ZSwgY2xlYXIgb3V0IHRoYXQgcmVmZXJlbmNlIGFuZCBjYXNjYWRlIHRoZSBzdWJzY3JpYmVyIHVwZGF0ZVxuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIE91ciByZS1zdWJzY3JpYmUgbG9naWMgb25seSBydW5zIHdoZW4gdGhlIHN0b3JlL3N1YnNjcmlwdGlvbiBzZXR1cCBjaGFuZ2VzXG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuOyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICAgICAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICAgICAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgICAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgICAgICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgICAgICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAgICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAgICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgX2RpZF8gY2hhbmdlIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IpLCB0aGlzIHdyYXBwZXIgY29tcG9uZW50IG5lZWRzIHRvIHJlLXJlbmRlclxuXG4gICAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1NUT1JFX1VQREFURUQnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZTogbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9OyAvLyBBY3R1YWxseSBzdWJzY3JpYmUgdG8gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yIChvciBzdG9yZSlcblxuXG4gICAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgICAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7IC8vIFB1bGwgZGF0YSBmcm9tIHRoZSBzdG9yZSBhZnRlciBmaXJzdCByZW5kZXIgaW4gY2FzZSB0aGUgc3RvcmUgaGFzXG4gICAgICAgIC8vIGNoYW5nZWQgc2luY2Ugd2UgYmVnYW4uXG5cbiAgICAgICAgY2hlY2tGb3JVcGRhdGVzKCk7XG5cbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlV3JhcHBlciA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlV3JhcHBlcigpIHtcbiAgICAgICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuXG4gICAgICAgICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHdlIGNhdWdodCBhbiBlcnJvciBkdWUgdG8gYSBiYWQgbWFwU3RhdGUgZnVuY3Rpb24sIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIHBhcmVudCByZS1yZW5kZXJlZCB3aXRob3V0IHRoaXMgY29tcG9uZW50IGFuZCB3ZSdyZSBhYm91dCB0byB1bm1vdW50LlxuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIGFzIGxvbmcgYXMgd2UgZG8gdG9wLWRvd24gc3Vic2NyaXB0aW9ucyBjb3JyZWN0bHksIGJ1dFxuICAgICAgICAgICAgLy8gaWYgd2UgZXZlciBkbyB0aG9zZSB3cm9uZywgdGhpcyB0aHJvdyB3aWxsIHN1cmZhY2UgdGhlIGVycm9yIGluIG91ciB0ZXN0cy5cbiAgICAgICAgICAgIC8vIEluIHRoYXQgY2FzZSwgdGhyb3cgdGhlIGVycm9yIGZyb20gaGVyZSBzbyBpdCBkb2Vzbid0IGdldCBsb3N0LlxuICAgICAgICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xuICAgICAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3Rvcl0pOyAvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cblxuICAgICAgdmFyIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYWN0dWFsQ2hpbGRQcm9wcywge1xuICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIFtmb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfSAvLyBJZiB3ZSdyZSBpbiBcInB1cmVcIiBtb2RlLCBlbnN1cmUgb3VyIHdyYXBwZXIgY29tcG9uZW50IG9ubHkgcmUtcmVuZGVycyB3aGVuIGluY29taW5nIHByb3BzIGhhdmUgY2hhbmdlZC5cblxuXG4gICAgdmFyIENvbm5lY3QgPSBwdXJlID8gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pIDogQ29ubmVjdEZ1bmN0aW9uO1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufSIsInZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiLyoqXHJcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICB2YXIgYmFzZVByb3RvID0gcHJvdG87XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cblxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn0iLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cblxufSIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKG1ldGhvZE5hbWUgKyBcIigpIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIiBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHZhbHVlICsgXCIuXCIpO1xuICB9XG59IiwiaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHZhciBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuXG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufSAvLyBkZXBlbmRzT25Pd25Qcm9wcyBpcyB1c2VkIGJ5IGNyZWF0ZU1hcFRvUHJvcHNQcm94eSB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwYXNzIHByb3BzIGFzIGFyZ3Ncbi8vIHRvIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuIEl0IGlzIGFsc28gdXNlZCBieSBtYWtlUHVyZVByb3BzU2VsZWN0b3IgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIG1hcFRvUHJvcHMgbmVlZHMgdG8gYmUgaW52b2tlZCB3aGVuIHByb3BzIGhhdmUgY2hhbmdlZC5cbi8vXG4vLyBBIGxlbmd0aCBvZiBvbmUgc2lnbmFscyB0aGF0IG1hcFRvUHJvcHMgZG9lcyBub3QgZGVwZW5kIG9uIHByb3BzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXG4vLyBBIGxlbmd0aCBvZiB6ZXJvIGlzIGFzc3VtZWQgdG8gbWVhbiBtYXBUb1Byb3BzIGlzIGdldHRpbmcgYXJncyB2aWEgYXJndW1lbnRzIG9yIC4uLmFyZ3MgYW5kXG4vLyB0aGVyZWZvcmUgbm90IHJlcG9ydGluZyBpdHMgbGVuZ3RoIGFjY3VyYXRlbHkuLlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gbnVsbCAmJiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSB1bmRlZmluZWQgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59IC8vIFVzZWQgYnkgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24gYW5kIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLFxuLy8gdGhpcyBmdW5jdGlvbiB3cmFwcyBtYXBUb1Byb3BzIGluIGEgcHJveHkgZnVuY3Rpb24gd2hpY2ggZG9lcyBzZXZlcmFsIHRoaW5nczpcbi8vXG4vLyAgKiBEZXRlY3RzIHdoZXRoZXIgdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgY2FsbGVkIGRlcGVuZHMgb24gcHJvcHMsIHdoaWNoXG4vLyAgICBpcyB1c2VkIGJ5IHNlbGVjdG9yRmFjdG9yeSB0byBkZWNpZGUgaWYgaXQgc2hvdWxkIHJlaW52b2tlIG9uIHByb3BzIGNoYW5nZXMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgaGFuZGxlcyBtYXBUb1Byb3BzIGlmIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiwgYW5kIHRyZWF0cyB0aGF0XG4vLyAgICBuZXcgZnVuY3Rpb24gYXMgdGhlIHRydWUgbWFwVG9Qcm9wcyBmb3Igc3Vic2VxdWVudCBjYWxscy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCB2ZXJpZmllcyB0aGUgZmlyc3QgcmVzdWx0IGlzIGEgcGxhaW4gb2JqZWN0LCBpbiBvcmRlciB0byB3YXJuXG4vLyAgICB0aGUgZGV2ZWxvcGVyIHRoYXQgdGhlaXIgbWFwVG9Qcm9wcyBmdW5jdGlvbiBpcyBub3QgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0LlxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgX3JlZikge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWU7XG5cbiAgICB2YXIgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoKTtcbiAgICB9OyAvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xuXG5cbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG5cbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICB2YXIgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufSIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgIH07XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdChtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnb2JqZWN0JyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcsIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdF07IiwiaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24obWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmcobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZ107IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3duUHJvcHMsIHt9LCBzdGF0ZVByb3BzLCB7fSwgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiLlwiKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCAnZGVwZW5kc09uT3duUHJvcHMnKSkge1xuICAgICAgd2FybmluZyhcIlRoZSBzZWxlY3RvciBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgb2YgXCIgKyBkaXNwbGF5TmFtZSArIFwiIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5cIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJywgZGlzcGxheU5hbWUpO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IHZlcmlmeVN1YnNlbGVjdG9ycyBmcm9tICcuL3ZlcmlmeVN1YnNlbGVjdG9ycyc7XG5leHBvcnQgZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4gbWVyZ2VQcm9wcyhtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSwgbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyksIG93blByb3BzKTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIF9yZWYpIHtcbiAgdmFyIGFyZVN0YXRlc0VxdWFsID0gX3JlZi5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmLmFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmLmFyZVN0YXRlUHJvcHNFcXVhbDtcbiAgdmFyIGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgdmFyIG93blByb3BzO1xuICB2YXIgc3RhdGVQcm9wcztcbiAgdmFyIGRpc3BhdGNoUHJvcHM7XG4gIHZhciBtZXJnZWRQcm9wcztcblxuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgdmFyIG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgdmFyIHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZCkgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICB2YXIgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgdmFyIHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChuZXh0U3RhdGUsIHN0YXRlKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufSAvLyBUT0RPOiBBZGQgbW9yZSBjb21tZW50c1xuLy8gSWYgcHVyZSBpcyB0cnVlLCB0aGUgc2VsZWN0b3IgcmV0dXJuZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHdpbGwgbWVtb2l6ZSBpdHMgcmVzdWx0cyxcbi8vIGFsbG93aW5nIGNvbm5lY3RBZHZhbmNlZCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSB0byByZXR1cm4gZmFsc2UgaWYgZmluYWxcbi8vIHByb3BzIGhhdmUgbm90IGNoYW5nZWQuIElmIGZhbHNlLCB0aGUgc2VsZWN0b3Igd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3XG4vLyBvYmplY3QgYW5kIHNob3VsZENvbXBvbmVudFVwZGF0ZSB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwgX3JlZjIpIHtcbiAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBfcmVmMi5pbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyA9IF9yZWYyLmluaXRNZXJnZVByb3BzLFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJpbml0TWFwU3RhdGVUb1Byb3BzXCIsIFwiaW5pdE1hcERpc3BhdGNoVG9Qcm9wc1wiLCBcImluaXRNZXJnZVByb3BzXCJdKTtcblxuICB2YXIgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMuZGlzcGxheU5hbWUpO1xuICB9XG5cbiAgdmFyIHNlbGVjdG9yRmFjdG9yeSA9IG9wdGlvbnMucHVyZSA/IHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5IDogaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeTtcbiAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4uL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyBmcm9tICcuL21lcmdlUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9zZWxlY3RvckZhY3RvcnknO1xuLypcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcblxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xuICBcbiAgY29ubmVjdCBwYXNzZXMgaXRzIGFyZ3MgdG8gY29ubmVjdEFkdmFuY2VkIGFzIG9wdGlvbnMsIHdoaWNoIHdpbGwgaW4gdHVybiBwYXNzIHRoZW0gdG9cbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXG5cbiAgc2VsZWN0b3JGYWN0b3J5IHJldHVybnMgYSBmaW5hbCBwcm9wcyBzZWxlY3RvciBmcm9tIGl0cyBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXG5cbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cbiAqL1xuXG5mdW5jdGlvbiBtYXRjaChhcmcsIGZhY3RvcmllcywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gZmFjdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhY3Rvcmllc1tpXShhcmcpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiB0eXBlIFwiICsgdHlwZW9mIGFyZyArIFwiIGZvciBcIiArIG5hbWUgKyBcIiBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50IFwiICsgb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiLlwiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn0gLy8gY3JlYXRlQ29ubmVjdCB3aXRoIGRlZmF1bHQgYXJncyBidWlsZHMgdGhlICdvZmZpY2lhbCcgY29ubmVjdCBiZWhhdmlvci4gQ2FsbGluZyBpdCB3aXRoXG4vLyBkaWZmZXJlbnQgb3B0aW9ucyBvcGVucyB1cCBzb21lIHRlc3RpbmcgYW5kIGV4dGVuc2liaWxpdHkgc2NlbmFyaW9zXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3QoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkY29ubmVjdEhPQyA9IF9yZWYuY29ubmVjdEhPQyxcbiAgICAgIGNvbm5lY3RIT0MgPSBfcmVmJGNvbm5lY3RIT0MgPT09IHZvaWQgMCA/IGNvbm5lY3RBZHZhbmNlZCA6IF9yZWYkY29ubmVjdEhPQyxcbiAgICAgIF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9IF9yZWYubWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBTdGF0ZVRvUHJvcHNGLFxuICAgICAgX3JlZiRtYXBEaXNwYXRjaFRvUHJvID0gX3JlZi5tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcERpc3BhdGNoVG9Qcm8sXG4gICAgICBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPSBfcmVmLm1lcmdlUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtZXJnZVByb3BzRmFjdG9yaWVzID0gX3JlZiRtZXJnZVByb3BzRmFjdG9yID09PSB2b2lkIDAgPyBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvcixcbiAgICAgIF9yZWYkc2VsZWN0b3JGYWN0b3J5ID0gX3JlZi5zZWxlY3RvckZhY3RvcnksXG4gICAgICBzZWxlY3RvckZhY3RvcnkgPSBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9PT0gdm9pZCAwID8gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSA6IF9yZWYkc2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBfcmVmMikge1xuICAgIGlmIChfcmVmMiA9PT0gdm9pZCAwKSB7XG4gICAgICBfcmVmMiA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcmVmMyA9IF9yZWYyLFxuICAgICAgICBfcmVmMyRwdXJlID0gX3JlZjMucHVyZSxcbiAgICAgICAgcHVyZSA9IF9yZWYzJHB1cmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMyRwdXJlLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlc0VxdWFsID09PSB2b2lkIDAgPyBzdHJpY3RFcXVhbCA6IF9yZWYzJGFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPSBfcmVmMy5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZjMkYXJlT3duUHJvcHNFcXVhID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVPd25Qcm9wc0VxdWEsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9IF9yZWYzLmFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVQcm9wc0VxID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZVByb3BzRXEsXG4gICAgICAgIF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9IF9yZWYzLmFyZU1lcmdlZFByb3BzRXF1YWwsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU1lcmdlZFByb3BzRSxcbiAgICAgICAgZXh0cmFPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcInB1cmVcIiwgXCJhcmVTdGF0ZXNFcXVhbFwiLCBcImFyZU93blByb3BzRXF1YWxcIiwgXCJhcmVTdGF0ZVByb3BzRXF1YWxcIiwgXCJhcmVNZXJnZWRQcm9wc0VxdWFsXCJdKTtcblxuICAgIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWF0Y2gobWFwU3RhdGVUb1Byb3BzLCBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hdGNoKG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNZXJnZVByb3BzID0gbWF0Y2gobWVyZ2VQcm9wcywgbWVyZ2VQcm9wc0ZhY3RvcmllcywgJ21lcmdlUHJvcHMnKTtcbiAgICByZXR1cm4gY29ubmVjdEhPQyhzZWxlY3RvckZhY3RvcnksIF9leHRlbmRzKHtcbiAgICAgIC8vIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXNcbiAgICAgIG1ldGhvZE5hbWU6ICdjb25uZWN0JyxcbiAgICAgIC8vIHVzZWQgdG8gY29tcHV0ZSBDb25uZWN0J3MgZGlzcGxheU5hbWUgZnJvbSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBkaXNwbGF5TmFtZS5cbiAgICAgIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIkNvbm5lY3QoXCIgKyBuYW1lICsgXCIpXCI7XG4gICAgICB9LFxuICAgICAgLy8gaWYgbWFwU3RhdGVUb1Byb3BzIGlzIGZhbHN5LCB0aGUgQ29ubmVjdCBjb21wb25lbnQgZG9lc24ndCBzdWJzY3JpYmUgdG8gc3RvcmUgc3RhdGUgY2hhbmdlc1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyksXG4gICAgICAvLyBwYXNzZWQgdGhyb3VnaCB0byBzZWxlY3RvckZhY3RvcnlcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHM6IGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzOiBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHM6IGluaXRNZXJnZVByb3BzLFxuICAgICAgcHVyZTogcHVyZSxcbiAgICAgIGFyZVN0YXRlc0VxdWFsOiBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWw6IGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWw6IGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWw6IGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9LCBleHRyYU9wdGlvbnMpKTtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3QoKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxuICogaG9vayB0aGF0IHlvdSBzaG91bGQgdXN1YWxseSBub3QgbmVlZCB0byBjYWxsIGRpcmVjdGx5LlxuICpcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4gKlxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoeyB2YWx1ZSB9KSA9PiB7XG4gKiAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dCgpXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxuICogfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQoKSB7XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KFJlYWN0UmVkdXhDb250ZXh0KTtcbiAgaW52YXJpYW50KGNvbnRleHRWYWx1ZSwgJ2NvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPicpO1xuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0Jztcbi8qKlxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmU7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlU3RvcmUgPSBjcmVhdGVTdG9yZUhvb2soKTsiLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVN0b3JlID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0U3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VEaXNwYXRjaCgpIHtcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbn1cbi8qKlxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7YW55fGZ1bmN0aW9ufSByZWR1eCBzdG9yZSdzIGBkaXNwYXRjaGAgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcbiAqICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gKiAgIGNvbnN0IGluY3JlYXNlQ291bnRlciA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlYXNlLWNvdW50ZXInIH0pLCBbXSlcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgIClcbiAqIH1cbiAqL1xuXG5leHBvcnQgdmFyIHVzZURpc3BhdGNoID0gY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUxheW91dEVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnOyAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2UgbmVlZCB1c2VMYXlvdXRFZmZlY3QgdG8gZW5zdXJlIHRoZSBzdG9yZVxuLy8gc3Vic2NyaXB0aW9uIGNhbGxiYWNrIGFsd2F5cyBoYXMgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGxhdGVzdCByZW5kZXIgY29tbWl0XG4vLyBhdmFpbGFibGUsIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgaGFwcGVuIGJldHdlZW4gcmVuZGVyIGFuZCB0aGUgZWZmZWN0LFxuLy8gd2hpY2ggbWF5IGNhdXNlIG1pc3NlZCB1cGRhdGVzOyB3ZSBhbHNvIG11c3QgZW5zdXJlIHRoZSBzdG9yZSBzdWJzY3JpcHRpb25cbi8vIGlzIGNyZWF0ZWQgc3luY2hyb25vdXNseSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBvY2N1ciBiZWZvcmUgdGhlXG4vLyBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZCBhbmQgYW4gaW5jb25zaXN0ZW50IHN0YXRlIG1heSBiZSBvYnNlcnZlZFxuXG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGNvbnRleHRTdWIpO1xuICB9LCBbc3RvcmUsIGNvbnRleHRTdWJdKTtcbiAgdmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdG9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RlZFN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBzZWxlY3RlZFN0YXRlO1xuXG4gIHRyeSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50IHx8IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBzZWxlY3RpbmcgdGhlIHN0b3JlIHN0YXRlOiBcIiArIGVyci5tZXNzYWdlICsgXCIuXCI7XG5cbiAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICBlcnJvck1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5PcmlnaW5hbCBzdGFjayB0cmFjZTpcIjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBzZWxlY3RlZFN0YXRlO1xuICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihuZXdTZWxlY3RlZFN0YXRlLCBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID0gbmV3U2VsZWN0ZWRTdGF0ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB3ZSBpZ25vcmUgYWxsIGVycm9ycyBoZXJlLCBzaW5jZSB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gaXMgcmUtcmVuZGVyZWQsIHRoZSBzZWxlY3RvcnMgYXJlIGNhbGxlZCBhZ2FpbiwgYW5kXG4gICAgICAgIC8vIHdpbGwgdGhyb3cgYWdhaW4sIGlmIG5laXRoZXIgcHJvcHMgbm9yIHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZWRcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gZXJyO1xuICAgICAgfVxuXG4gICAgICBmb3JjZVJlbmRlcih7fSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb25dKTtcbiAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG59XG4vKipcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpbnZhcmlhbnQoc2VsZWN0b3IsIFwiWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yc1wiKTtcblxuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZSxcbiAgICAgICAgY29udGV4dFN1YiA9IF91c2VSZWR1eENvbnRleHQuc3Vic2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yik7XG4gIH07XG59XG4vKipcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlJ3Mgc3RhdGUuIFRoaXMgaG9vayB0YWtlcyBhIHNlbGVjdG9yIGZ1bmN0aW9uXG4gKiBhcyBhbiBhcmd1bWVudC4gVGhlIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBzdG9yZSBzdGF0ZS5cbiAqXG4gKiBUaGlzIGhvb2sgdGFrZXMgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyaXNvbiBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogdGhhdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHRoZSBzZWxlY3RlZCBzdGF0ZSBpcyBjb21wYXJlZCB0byBkZXRlcm1pbmVcbiAqIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBlcXVhbGl0eUZuIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHlcbiAqXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgc2VsZWN0ZWQgc3RhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAqIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG4gKlxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyKVxuICogICByZXR1cm4gPGRpdj57Y291bnRlcn08L2Rpdj5cbiAqIH1cbiAqL1xuXG5leHBvcnQgdmFyIHVzZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JIb29rKCk7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbmV4cG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJzsiLCJpbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4vY29ubmVjdC9jb25uZWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZURpc3BhdGNoJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdG9yJztcbmltcG9ydCB7IHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVN0b3JlJztcbmltcG9ydCB7IHNldEJhdGNoIH0gZnJvbSAnLi91dGlscy9iYXRjaCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyBhcyBiYXRjaCB9IGZyb20gJy4vdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbnNldEJhdGNoKGJhdGNoKTtcbmV4cG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0QWR2YW5jZWQsIFJlYWN0UmVkdXhDb250ZXh0LCBjb25uZWN0LCBiYXRjaCwgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vaywgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vaywgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vaywgc2hhbGxvd0VxdWFsIH07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBoPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixwPW4/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMscT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYscj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx0PW4/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHU9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsdj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSx3PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAseD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMix5PW4/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGFhPW4/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAsYmE9bj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LGNhPW4/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7biYmU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpO24mJlN5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik7dmFyIHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24gQShhKXtmb3IodmFyIGI9YS5tZXNzYWdlLGQ9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIitiLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWQrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTthLm1lc3NhZ2U9XCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYitcIjsgdmlzaXQgXCIrZCtcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiO3JldHVybiBhfXZhciBCPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxDPXt9O1xuZnVuY3Rpb24gRChhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1DO3RoaXMudXBkYXRlcj1kfHxCfUQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307RC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEEoRXJyb3IoODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0QucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEUoKXt9RS5wcm90b3R5cGU9RC5wcm90b3R5cGU7ZnVuY3Rpb24gRihhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1DO3RoaXMudXBkYXRlcj1kfHxCfXZhciBHPUYucHJvdG90eXBlPW5ldyBFO1xuRy5jb25zdHJ1Y3Rvcj1GO2goRyxELnByb3RvdHlwZSk7Ry5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgSD17Y3VycmVudDpudWxsfSxJPXtzdXNwZW5zZTpudWxsfSxKPXtjdXJyZW50Om51bGx9LEs9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixkKXt2YXIgYz12b2lkIDAsZT17fSxnPW51bGwsaz1udWxsO2lmKG51bGwhPWIpZm9yKGMgaW4gdm9pZCAwIT09Yi5yZWYmJihrPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksYilLLmNhbGwoYixjKSYmIUwuaGFzT3duUHJvcGVydHkoYykmJihlW2NdPWJbY10pO3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGYpe2Zvcih2YXIgbD1BcnJheShmKSxtPTA7bTxmO20rKylsW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49bH1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoYyBpbiBmPWEuZGVmYXVsdFByb3BzLGYpdm9pZCAwPT09ZVtjXSYmKGVbY109ZltjXSk7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLGtleTpnLHJlZjprLHByb3BzOmUsX293bmVyOkouY3VycmVudH19XG5mdW5jdGlvbiBkYShhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBPPS9cXC8rL2csUD1bXTtmdW5jdGlvbiBRKGEsYixkLGMpe2lmKFAubGVuZ3RoKXt2YXIgZT1QLnBvcCgpO2UucmVzdWx0PWE7ZS5rZXlQcmVmaXg9YjtlLmZ1bmM9ZDtlLmNvbnRleHQ9YztlLmNvdW50PTA7cmV0dXJuIGV9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6ZCxjb250ZXh0OmMsY291bnQ6MH19XG5mdW5jdGlvbiBSKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+UC5sZW5ndGgmJlAucHVzaChhKX1cbmZ1bmN0aW9uIFMoYSxiLGQsYyl7dmFyIGU9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWV8fFwiYm9vbGVhblwiPT09ZSlhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChlKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGQoYyxhLFwiXCI9PT1iP1wiLlwiK1QoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srKyl7ZT1hW2tdO3ZhciBmPWIrVChlLGspO2crPVMoZSxmLGQsYyl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj16JiZhW3pdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGs9XG4wOyEoZT1hLm5leHQoKSkuZG9uZTspZT1lLnZhbHVlLGY9YitUKGUsaysrKSxnKz1TKGUsZixkLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWUpdGhyb3cgZD1cIlwiK2EsQShFcnJvcigzMSksXCJbb2JqZWN0IE9iamVjdF1cIj09PWQ/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZCxcIlwiKTtyZXR1cm4gZ31mdW5jdGlvbiBVKGEsYixkKXtyZXR1cm4gbnVsbD09YT8wOlMoYSxcIlwiLGIsZCl9ZnVuY3Rpb24gVChhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gZWEoYSxiKXthLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspfVxuZnVuY3Rpb24gZmEoYSxiLGQpe3ZhciBjPWEucmVzdWx0LGU9YS5rZXlQcmVmaXg7YT1hLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspO0FycmF5LmlzQXJyYXkoYSk/VihhLGMsZCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pOm51bGwhPWEmJihOKGEpJiYoYT1kYShhLGUrKCFhLmtleXx8YiYmYi5rZXk9PT1hLmtleT9cIlwiOihcIlwiK2Eua2V5KS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpK2QpKSxjLnB1c2goYSkpfWZ1bmN0aW9uIFYoYSxiLGQsYyxlKXt2YXIgZz1cIlwiO251bGwhPWQmJihnPShcIlwiK2QpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIik7Yj1RKGIsZyxjLGUpO1UoYSxmYSxiKTtSKGIpfWZ1bmN0aW9uIFcoKXt2YXIgYT1ILmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgQShFcnJvcigzMjEpKTtyZXR1cm4gYX1cbnZhciBYPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBjPVtdO1YoYSxjLG51bGwsYixkKTtyZXR1cm4gY30sZm9yRWFjaDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTtiPVEobnVsbCxudWxsLGIsZCk7VShhLGVhLGIpO1IoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBVKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107VihhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFOKGEpKXRocm93IEEoRXJyb3IoMTQzKSk7cmV0dXJuIGF9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OkQsUHVyZUNvbXBvbmVudDpGLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLFxuX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp2LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOngscmVuZGVyOmF9fSxsYXp5OmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjpjYSxfY3RvcjphLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX0sbWVtbzpmdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjpiYSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19LHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDYWxsYmFjayhhLGIpfSx1c2VDb250ZXh0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDb250ZXh0KGEsYil9LHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlRWZmZWN0KGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxcbmIsZCl7cmV0dXJuIFcoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixkKX0sdXNlRGVidWdWYWx1ZTpmdW5jdGlvbigpe30sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTWVtbyhhLGIpfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixkKXtyZXR1cm4gVygpLnVzZVJlZHVjZXIoYSxiLGQpfSx1c2VSZWY6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VSZWYoYSl9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlU3RhdGUoYSl9LEZyYWdtZW50OnIsUHJvZmlsZXI6dSxTdHJpY3RNb2RlOnQsU3VzcGVuc2U6eSx1bnN0YWJsZV9TdXNwZW5zZUxpc3Q6YWEsY3JlYXRlRWxlbWVudDpNLGNsb25lRWxlbWVudDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgQShFcnJvcigyNjcpLGEpO3ZhciBjPXZvaWQgMCxlPVxuaCh7fSxhLnByb3BzKSxnPWEua2V5LGs9YS5yZWYsZj1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsZj1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KTt2YXIgbD12b2lkIDA7YS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzJiYobD1hLnR5cGUuZGVmYXVsdFByb3BzKTtmb3IoYyBpbiBiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109dm9pZCAwPT09YltjXSYmdm9pZCAwIT09bD9sW2NdOmJbY10pfWM9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1jKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Yyl7bD1BcnJheShjKTtmb3IodmFyIG09MDttPGM7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfXJldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpnLHJlZjprLHByb3BzOmUsX293bmVyOmZ9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO1xuYi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok4sdmVyc2lvbjpcIjE2LjkuMFwiLHVuc3RhYmxlX3dpdGhTdXNwZW5zZUNvbmZpZzpmdW5jdGlvbihhLGIpe3ZhciBkPUkuc3VzcGVuc2U7SS5zdXNwZW5zZT12b2lkIDA9PT1iP251bGw6Yjt0cnl7YSgpfWZpbmFsbHl7SS5zdXNwZW5zZT1kfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6SCxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzpJLFJlYWN0Q3VycmVudE93bmVyOkosSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpofX0sWT17ZGVmYXVsdDpYfSxaPVkmJlh8fFk7bW9kdWxlLmV4cG9ydHM9Wi5kZWZhdWx0fHxaO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbT1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxxPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gdChhKXtmb3IodmFyIGI9YS5tZXNzYWdlLGM9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIitiLGQ9MTtkPGFyZ3VtZW50cy5sZW5ndGg7ZCsrKWMrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2RdKTthLm1lc3NhZ2U9XCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYitcIjsgdmlzaXQgXCIrYytcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiO3JldHVybiBhfWlmKCFhYSl0aHJvdyB0KEVycm9yKDIyNykpO3ZhciBiYT1udWxsLGNhPXt9O1xuZnVuY3Rpb24gZGEoKXtpZihiYSlmb3IodmFyIGEgaW4gY2Epe3ZhciBiPWNhW2FdLGM9YmEuaW5kZXhPZihhKTtpZighKC0xPGMpKXRocm93IHQoRXJyb3IoOTYpLGEpO2lmKCFlYVtjXSl7aWYoIWIuZXh0cmFjdEV2ZW50cyl0aHJvdyB0KEVycm9yKDk3KSxhKTtlYVtjXT1iO2M9Yi5ldmVudFR5cGVzO2Zvcih2YXIgZCBpbiBjKXt2YXIgZT12b2lkIDA7dmFyIGY9Y1tkXSxoPWIsZz1kO2lmKGZhLmhhc093blByb3BlcnR5KGcpKXRocm93IHQoRXJyb3IoOTkpLGcpO2ZhW2ddPWY7dmFyIGs9Zi5waGFzZWRSZWdpc3RyYXRpb25OYW1lcztpZihrKXtmb3IoZSBpbiBrKWsuaGFzT3duUHJvcGVydHkoZSkmJmhhKGtbZV0saCxnKTtlPSEwfWVsc2UgZi5yZWdpc3RyYXRpb25OYW1lPyhoYShmLnJlZ2lzdHJhdGlvbk5hbWUsaCxnKSxlPSEwKTplPSExO2lmKCFlKXRocm93IHQoRXJyb3IoOTgpLGQsYSk7fX19fVxuZnVuY3Rpb24gaGEoYSxiLGMpe2lmKGlhW2FdKXRocm93IHQoRXJyb3IoMTAwKSxhKTtpYVthXT1iO2phW2FdPWIuZXZlbnRUeXBlc1tjXS5kZXBlbmRlbmNpZXN9dmFyIGVhPVtdLGZhPXt9LGlhPXt9LGphPXt9O2Z1bmN0aW9uIGthKGEsYixjLGQsZSxmLGgsZyxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBsYT0hMSxtYT1udWxsLG5hPSExLG9hPW51bGwscGE9e29uRXJyb3I6ZnVuY3Rpb24oYSl7bGE9ITA7bWE9YX19O2Z1bmN0aW9uIHFhKGEsYixjLGQsZSxmLGgsZyxrKXtsYT0hMTttYT1udWxsO2thLmFwcGx5KHBhLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiByYShhLGIsYyxkLGUsZixoLGcsayl7cWEuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGxhKXtpZihsYSl7dmFyIGw9bWE7bGE9ITE7bWE9bnVsbH1lbHNlIHRocm93IHQoRXJyb3IoMTk4KSk7bmF8fChuYT0hMCxvYT1sKX19dmFyIHNhPW51bGwsdGE9bnVsbCx2YT1udWxsO2Z1bmN0aW9uIHdhKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD12YShjKTtyYShkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfWZ1bmN0aW9uIHhhKGEsYil7aWYobnVsbD09Yil0aHJvdyB0KEVycm9yKDMwKSk7aWYobnVsbD09YSlyZXR1cm4gYjtpZihBcnJheS5pc0FycmF5KGEpKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLnB1c2guYXBwbHkoYSxiKSxhO2EucHVzaChiKTtyZXR1cm4gYX1yZXR1cm4gQXJyYXkuaXNBcnJheShiKT9bYV0uY29uY2F0KGIpOlthLGJdfVxuZnVuY3Rpb24geWEoYSxiLGMpe0FycmF5LmlzQXJyYXkoYSk/YS5mb3JFYWNoKGIsYyk6YSYmYi5jYWxsKGMsYSl9dmFyIHphPW51bGw7ZnVuY3Rpb24gQWEoYSl7aWYoYSl7dmFyIGI9YS5fZGlzcGF0Y2hMaXN0ZW5lcnMsYz1hLl9kaXNwYXRjaEluc3RhbmNlcztpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZD0wO2Q8Yi5sZW5ndGgmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7ZCsrKXdhKGEsYltkXSxjW2RdKTtlbHNlIGImJndhKGEsYixjKTthLl9kaXNwYXRjaExpc3RlbmVycz1udWxsO2EuX2Rpc3BhdGNoSW5zdGFuY2VzPW51bGw7YS5pc1BlcnNpc3RlbnQoKXx8YS5jb25zdHJ1Y3Rvci5yZWxlYXNlKGEpfX1mdW5jdGlvbiBCYShhKXtudWxsIT09YSYmKHphPXhhKHphLGEpKTthPXphO3phPW51bGw7aWYoYSl7eWEoYSxBYSk7aWYoemEpdGhyb3cgdChFcnJvcig5NSkpO2lmKG5hKXRocm93IGE9b2EsbmE9ITEsb2E9bnVsbCxhO319XG52YXIgQ2E9e2luamVjdEV2ZW50UGx1Z2luT3JkZXI6ZnVuY3Rpb24oYSl7aWYoYmEpdGhyb3cgdChFcnJvcigxMDEpKTtiYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKTtkYSgpfSxpbmplY3RFdmVudFBsdWdpbnNCeU5hbWU6ZnVuY3Rpb24oYSl7dmFyIGI9ITEsYztmb3IoYyBpbiBhKWlmKGEuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPWFbY107aWYoIWNhLmhhc093blByb3BlcnR5KGMpfHxjYVtjXSE9PWQpe2lmKGNhW2NdKXRocm93IHQoRXJyb3IoMTAyKSxjKTtjYVtjXT1kO2I9ITB9fWImJmRhKCl9fTtcbmZ1bmN0aW9uIERhKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYoIWMpcmV0dXJuIG51bGw7dmFyIGQ9c2EoYyk7aWYoIWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMpdGhyb3cgdChFcnJvcigyMzEpLGIsdHlwZW9mIGMpO1xucmV0dXJuIGN9dmFyIEVhPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLEZhPVwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIrRWEsR2E9XCJfX3JlYWN0RXZlbnRIYW5kbGVycyRcIitFYTtmdW5jdGlvbiBIYShhKXtpZihhW0ZhXSlyZXR1cm4gYVtGYV07Zm9yKDshYVtGYV07KWlmKGEucGFyZW50Tm9kZSlhPWEucGFyZW50Tm9kZTtlbHNlIHJldHVybiBudWxsO2E9YVtGYV07cmV0dXJuIDU9PT1hLnRhZ3x8Nj09PWEudGFnP2E6bnVsbH1mdW5jdGlvbiBJYShhKXthPWFbRmFdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gSmEoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IHQoRXJyb3IoMzMpKTt9ZnVuY3Rpb24gS2EoYSl7cmV0dXJuIGFbR2FdfHxudWxsfWZ1bmN0aW9uIExhKGEpe2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBNYShhLGIsYyl7aWYoYj1EYShhLGMuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXNbYl0pKWMuX2Rpc3BhdGNoTGlzdGVuZXJzPXhhKGMuX2Rpc3BhdGNoTGlzdGVuZXJzLGIpLGMuX2Rpc3BhdGNoSW5zdGFuY2VzPXhhKGMuX2Rpc3BhdGNoSW5zdGFuY2VzLGEpfWZ1bmN0aW9uIE5hKGEpe2lmKGEmJmEuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXMpe2Zvcih2YXIgYj1hLl90YXJnZXRJbnN0LGM9W107YjspYy5wdXNoKGIpLGI9TGEoYik7Zm9yKGI9Yy5sZW5ndGg7MDxiLS07KU1hKGNbYl0sXCJjYXB0dXJlZFwiLGEpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspTWEoY1tiXSxcImJ1YmJsZWRcIixhKX19XG5mdW5jdGlvbiBPYShhLGIsYyl7YSYmYyYmYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiYoYj1EYShhLGMuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSkpJiYoYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSkpfWZ1bmN0aW9uIFBhKGEpe2EmJmEuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSYmT2EoYS5fdGFyZ2V0SW5zdCxudWxsLGEpfWZ1bmN0aW9uIFFhKGEpe3lhKGEsTmEpfXZhciBSYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBTYShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBUYT17YW5pbWF0aW9uZW5kOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6U2EoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxVYT17fSxWYT17fTtcblJhJiYoVmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgVGEuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgVGEudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBXYShhKXtpZihVYVthXSlyZXR1cm4gVWFbYV07aWYoIVRhW2FdKXJldHVybiBhO3ZhciBiPVRhW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFZhKXJldHVybiBVYVthXT1iW2NdO3JldHVybiBhfVxudmFyIFhhPVdhKFwiYW5pbWF0aW9uZW5kXCIpLFlhPVdhKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLFphPVdhKFwiYW5pbWF0aW9uc3RhcnRcIiksYWI9V2EoXCJ0cmFuc2l0aW9uZW5kXCIpLGJiPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxjYj1udWxsLGRiPW51bGwsZWI9bnVsbDtcbmZ1bmN0aW9uIGZiKCl7aWYoZWIpcmV0dXJuIGViO3ZhciBhLGI9ZGIsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4gY2I/Y2IudmFsdWU6Y2IudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgaD1jLWE7Zm9yKGQ9MTtkPD1oJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gZWI9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBnYigpe3JldHVybiEwfWZ1bmN0aW9uIGhiKCl7cmV0dXJuITF9XG5mdW5jdGlvbiB5KGEsYixjLGQpe3RoaXMuZGlzcGF0Y2hDb25maWc9YTt0aGlzLl90YXJnZXRJbnN0PWI7dGhpcy5uYXRpdmVFdmVudD1jO2E9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2U7Zm9yKHZhciBlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmKChiPWFbZV0pP3RoaXNbZV09YihjKTpcInRhcmdldFwiPT09ZT90aGlzLnRhcmdldD1kOnRoaXNbZV09Y1tlXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWMuZGVmYXVsdFByZXZlbnRlZD9jLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1jLnJldHVyblZhbHVlKT9nYjpoYjt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWhiO3JldHVybiB0aGlzfVxubSh5LnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdiKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdiKX0scGVyc2lzdDpmdW5jdGlvbigpe3RoaXMuaXNQZXJzaXN0ZW50PWdifSxpc1BlcnNpc3RlbnQ6aGIsZGVzdHJ1Y3RvcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlLFxuYjtmb3IoYiBpbiBhKXRoaXNbYl09bnVsbDt0aGlzLm5hdGl2ZUV2ZW50PXRoaXMuX3RhcmdldEluc3Q9dGhpcy5kaXNwYXRjaENvbmZpZz1udWxsO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9aGI7dGhpcy5fZGlzcGF0Y2hJbnN0YW5jZXM9dGhpcy5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbH19KTt5LkludGVyZmFjZT17dHlwZTpudWxsLHRhcmdldDpudWxsLGN1cnJlbnRUYXJnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sZXZlbnRQaGFzZTpudWxsLGJ1YmJsZXM6bnVsbCxjYW5jZWxhYmxlOm51bGwsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDpudWxsLGlzVHJ1c3RlZDpudWxsfTtcbnkuZXh0ZW5kPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gYygpe3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZD10aGlzO2IucHJvdG90eXBlPWQucHJvdG90eXBlO3ZhciBlPW5ldyBiO20oZSxjLnByb3RvdHlwZSk7Yy5wcm90b3R5cGU9ZTtjLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1jO2MuSW50ZXJmYWNlPW0oe30sZC5JbnRlcmZhY2UsYSk7Yy5leHRlbmQ9ZC5leHRlbmQ7aWIoYyk7cmV0dXJuIGN9O2liKHkpO2Z1bmN0aW9uIGpiKGEsYixjLGQpe2lmKHRoaXMuZXZlbnRQb29sLmxlbmd0aCl7dmFyIGU9dGhpcy5ldmVudFBvb2wucG9wKCk7dGhpcy5jYWxsKGUsYSxiLGMsZCk7cmV0dXJuIGV9cmV0dXJuIG5ldyB0aGlzKGEsYixjLGQpfVxuZnVuY3Rpb24ga2IoYSl7aWYoIShhIGluc3RhbmNlb2YgdGhpcykpdGhyb3cgdChFcnJvcigyNzkpKTthLmRlc3RydWN0b3IoKTsxMD50aGlzLmV2ZW50UG9vbC5sZW5ndGgmJnRoaXMuZXZlbnRQb29sLnB1c2goYSl9ZnVuY3Rpb24gaWIoYSl7YS5ldmVudFBvb2w9W107YS5nZXRQb29sZWQ9amI7YS5yZWxlYXNlPWtifXZhciBsYj15LmV4dGVuZCh7ZGF0YTpudWxsfSksbWI9eS5leHRlbmQoe2RhdGE6bnVsbH0pLG5iPVs5LDEzLDI3LDMyXSxvYj1SYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3cscGI9bnVsbDtSYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYocGI9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBxYj1SYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIXBiLHNiPVJhJiYoIW9ifHxwYiYmODxwYiYmMTE+PXBiKSx0Yj1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSx1Yj17YmVmb3JlSW5wdXQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25CZWZvcmVJbnB1dFwiLGNhcHR1cmVkOlwib25CZWZvcmVJbnB1dENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXX0sY29tcG9zaXRpb25FbmQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvbkVuZFwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvbkVuZENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbmVuZCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25TdGFydDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcbmNhcHR1cmVkOlwib25Db21wb3NpdGlvblN0YXJ0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uVXBkYXRlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb251cGRhdGUga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9fSx2Yj0hMTtcbmZ1bmN0aW9uIHdiKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09bmIuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImJsdXJcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiB4YihhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciB5Yj0hMTtmdW5jdGlvbiBBYihhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4geGIoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO3ZiPSEwO3JldHVybiB0YjtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT10YiYmdmI/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gQmIoYSxiKXtpZih5YilyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhb2ImJndiKGEsYik/KGE9ZmIoKSxlYj1kYj1jYj1udWxsLHliPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBzYiYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgQ2I9e2V2ZW50VHlwZXM6dWIsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12b2lkIDA7dmFyIGY9dm9pZCAwO2lmKG9iKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOmU9dWIuY29tcG9zaXRpb25TdGFydDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmU9dWIuY29tcG9zaXRpb25FbmQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjplPXViLmNvbXBvc2l0aW9uVXBkYXRlO2JyZWFrIGJ9ZT12b2lkIDB9ZWxzZSB5Yj93YihhLGMpJiYoZT11Yi5jb21wb3NpdGlvbkVuZCk6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihlPXViLmNvbXBvc2l0aW9uU3RhcnQpO2U/KHNiJiZcImtvXCIhPT1jLmxvY2FsZSYmKHlifHxlIT09dWIuY29tcG9zaXRpb25TdGFydD9lPT09dWIuY29tcG9zaXRpb25FbmQmJnliJiYoZj1mYigpKTooY2I9ZCxkYj1cInZhbHVlXCJpbiBjYj9jYi52YWx1ZTpjYi50ZXh0Q29udGVudCx5Yj1cbiEwKSksZT1sYi5nZXRQb29sZWQoZSxiLGMsZCksZj9lLmRhdGE9ZjooZj14YihjKSxudWxsIT09ZiYmKGUuZGF0YT1mKSksUWEoZSksZj1lKTpmPW51bGw7KGE9cWI/QWIoYSxjKTpCYihhLGMpKT8oYj1tYi5nZXRQb29sZWQodWIuYmVmb3JlSW5wdXQsYixjLGQpLGIuZGF0YT1hLFFhKGIpKTpiPW51bGw7cmV0dXJuIG51bGw9PT1mP2I6bnVsbD09PWI/ZjpbZixiXX19LERiPW51bGwsRWI9bnVsbCxGYj1udWxsO2Z1bmN0aW9uIEdiKGEpe2lmKGE9dGEoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBEYil0aHJvdyB0KEVycm9yKDI4MCkpO3ZhciBiPXNhKGEuc3RhdGVOb2RlKTtEYihhLnN0YXRlTm9kZSxhLnR5cGUsYil9fWZ1bmN0aW9uIEhiKGEpe0ViP0ZiP0ZiLnB1c2goYSk6RmI9W2FdOkViPWF9ZnVuY3Rpb24gSWIoKXtpZihFYil7dmFyIGE9RWIsYj1GYjtGYj1FYj1udWxsO0diKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylHYihiW2FdKX19XG5mdW5jdGlvbiBKYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEtiKGEsYixjLGQpe3JldHVybiBhKGIsYyxkKX1mdW5jdGlvbiBMYigpe312YXIgTWI9SmIsTmI9ITE7ZnVuY3Rpb24gT2IoKXtpZihudWxsIT09RWJ8fG51bGwhPT1GYilMYigpLEliKCl9dmFyIFBiPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIFFiKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhUGJbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfVxuZnVuY3Rpb24gUmIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfWZ1bmN0aW9uIFNiKGEpe2lmKCFSYSlyZXR1cm4hMTthPVwib25cIithO3ZhciBiPWEgaW4gZG9jdW1lbnQ7Ynx8KGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiLnNldEF0dHJpYnV0ZShhLFwicmV0dXJuO1wiKSxiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2FdKTtyZXR1cm4gYn1mdW5jdGlvbiBUYihhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWIoYSl7dmFyIGI9VGIoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZiKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYihhKSl9ZnVuY3Rpb24gV2IoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRiKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9dmFyIFhiPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1hiLmhhc093blByb3BlcnR5KFwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlclwiKXx8KFhiLlJlYWN0Q3VycmVudERpc3BhdGNoZXI9e2N1cnJlbnQ6bnVsbH0pO1hiLmhhc093blByb3BlcnR5KFwiUmVhY3RDdXJyZW50QmF0Y2hDb25maWdcIil8fChYYi5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZz17c3VzcGVuc2U6bnVsbH0pO1xudmFyIFliPS9eKC4qKVtcXFxcXFwvXS8sQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLFpiPUI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsJGI9Qj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGFjPUI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGJjPUI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGNjPUI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGRjPUI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGVjPUI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsZmM9Qj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLGdjPUI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLGhjPUI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGljPUI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6XG42MDEyMCxqYz1CP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LGtjPUI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7QiYmU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpO0ImJlN5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik7dmFyIGxjPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBtYyhhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9bGMmJmFbbGNdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG5mdW5jdGlvbiBvYyhhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIGFjOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlICRiOnJldHVyblwiUG9ydGFsXCI7Y2FzZSBjYzpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSBiYzpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIGhjOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIGljOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGVjOnJldHVyblwiQ29udGV4dC5Db25zdW1lclwiO2Nhc2UgZGM6cmV0dXJuXCJDb250ZXh0LlByb3ZpZGVyXCI7Y2FzZSBnYzp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtyZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1wiKVwiOlxuXCJGb3J3YXJkUmVmXCIpO2Nhc2UgamM6cmV0dXJuIG9jKGEudHlwZSk7Y2FzZSBrYzppZihhPTE9PT1hLl9zdGF0dXM/YS5fcmVzdWx0Om51bGwpcmV0dXJuIG9jKGEpfXJldHVybiBudWxsfWZ1bmN0aW9uIHBjKGEpe3ZhciBiPVwiXCI7ZG97YTpzd2l0Y2goYS50YWcpe2Nhc2UgMzpjYXNlIDQ6Y2FzZSA2OmNhc2UgNzpjYXNlIDEwOmNhc2UgOTp2YXIgYz1cIlwiO2JyZWFrIGE7ZGVmYXVsdDp2YXIgZD1hLl9kZWJ1Z093bmVyLGU9YS5fZGVidWdTb3VyY2UsZj1vYyhhLnR5cGUpO2M9bnVsbDtkJiYoYz1vYyhkLnR5cGUpKTtkPWY7Zj1cIlwiO2U/Zj1cIiAoYXQgXCIrZS5maWxlTmFtZS5yZXBsYWNlKFliLFwiXCIpK1wiOlwiK2UubGluZU51bWJlcitcIilcIjpjJiYoZj1cIiAoY3JlYXRlZCBieSBcIitjK1wiKVwiKTtjPVwiXFxuICAgIGluIFwiKyhkfHxcIlVua25vd25cIikrZn1iKz1jO2E9YS5yZXR1cm59d2hpbGUoYSk7cmV0dXJuIGJ9XG52YXIgcWM9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLHJjPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksc2M9e30sdGM9e307XG5mdW5jdGlvbiB1YyhhKXtpZihyYy5jYWxsKHRjLGEpKXJldHVybiEwO2lmKHJjLmNhbGwoc2MsYSkpcmV0dXJuITE7aWYocWMudGVzdChhKSlyZXR1cm4gdGNbYV09ITA7c2NbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gdmMoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiB3YyhhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHx2YyhhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEQoYSxiLGMsZCxlLGYpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mfXZhciBGPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsMCwhMSxhLG51bGwsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0ZbYl09bmV3IEQoYiwxLCExLGFbMV0sbnVsbCwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsMiwhMSxhLG51bGwsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSl9KTtcbltcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsMywhMCxhLG51bGwsITEpfSk7W1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtGW2FdPW5ldyBEKGEsNCwhMSxhLG51bGwsITEpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSw2LCExLGEsbnVsbCwhMSl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExKX0pO3ZhciB4Yz0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHljKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHhjLFxueWMpO0ZbYl09bmV3IEQoYiwxLCExLGEsbnVsbCwhMSl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZSh4Yyx5Yyk7RltiXT1uZXcgRChiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMSl9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZSh4Yyx5Yyk7RltiXT1uZXcgRChiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCExKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExKX0pO1xuRi54bGlua0hyZWY9bmV3IEQoXCJ4bGlua0hyZWZcIiwxLCExLFwieGxpbms6aHJlZlwiLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCEwKTtbXCJzcmNcIixcImhyZWZcIixcImFjdGlvblwiLFwiZm9ybUFjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCEwKX0pO1xuZnVuY3Rpb24gemMoYSxiLGMsZCl7dmFyIGU9Ri5oYXNPd25Qcm9wZXJ0eShiKT9GW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwod2MoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP3VjKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG5mdW5jdGlvbiBBYyhhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gQmMoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfVxuZnVuY3Rpb24gQ2MoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9QWMobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiBEYyhhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnpjKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBFYyhhLGIpe0RjKGEsYik7dmFyIGM9QWMoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/RmMoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmRmMoYSxiLnR5cGUsQWMoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBHYyhhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSFhLmRlZmF1bHRDaGVja2VkO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBGYyhhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fGEub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9dmFyIEhjPXtjaGFuZ2U6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25DaGFuZ2VcIixjYXB0dXJlZDpcIm9uQ2hhbmdlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNoYW5nZSBjbGljayBmb2N1cyBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19O2Z1bmN0aW9uIEljKGEsYixjKXthPXkuZ2V0UG9vbGVkKEhjLmNoYW5nZSxhLGIsYyk7YS50eXBlPVwiY2hhbmdlXCI7SGIoYyk7UWEoYSk7cmV0dXJuIGF9dmFyIEpjPW51bGwsS2M9bnVsbDtmdW5jdGlvbiBMYyhhKXtCYShhKX1cbmZ1bmN0aW9uIE1jKGEpe3ZhciBiPUphKGEpO2lmKFdiKGIpKXJldHVybiBhfWZ1bmN0aW9uIE5jKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIE9jPSExO1JhJiYoT2M9U2IoXCJpbnB1dFwiKSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSk7ZnVuY3Rpb24gUGMoKXtKYyYmKEpjLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLFFjKSxLYz1KYz1udWxsKX1mdW5jdGlvbiBRYyhhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmTWMoS2MpKWlmKGE9SWMoS2MsYSxSYihhKSksTmIpQmEoYSk7ZWxzZXtOYj0hMDt0cnl7SmIoTGMsYSl9ZmluYWxseXtOYj0hMSxPYigpfX19ZnVuY3Rpb24gUmMoYSxiLGMpe1wiZm9jdXNcIj09PWE/KFBjKCksSmM9YixLYz1jLEpjLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLFFjKSk6XCJibHVyXCI9PT1hJiZQYygpfVxuZnVuY3Rpb24gU2MoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gTWMoS2MpfWZ1bmN0aW9uIFRjKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gTWMoYil9ZnVuY3Rpb24gVWMoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gTWMoYil9XG52YXIgVmM9e2V2ZW50VHlwZXM6SGMsX2lzSW5wdXRFdmVudFN1cHBvcnRlZDpPYyxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWI/SmEoYik6d2luZG93LGY9dm9pZCAwLGg9dm9pZCAwLGc9ZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wic2VsZWN0XCI9PT1nfHxcImlucHV0XCI9PT1nJiZcImZpbGVcIj09PWUudHlwZT9mPU5jOlFiKGUpP09jP2Y9VWM6KGY9U2MsaD1SYyk6KGc9ZS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWcudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWUudHlwZXx8XCJyYWRpb1wiPT09ZS50eXBlKSYmKGY9VGMpO2lmKGYmJihmPWYoYSxiKSkpcmV0dXJuIEljKGYsYyxkKTtoJiZoKGEsZSxiKTtcImJsdXJcIj09PWEmJihhPWUuX3dyYXBwZXJTdGF0ZSkmJmEuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWUudHlwZSYmRmMoZSxcIm51bWJlclwiLGUudmFsdWUpfX0sV2M9eS5leHRlbmQoe3ZpZXc6bnVsbCxkZXRhaWw6bnVsbH0pLFhjPXtBbHQ6XCJhbHRLZXlcIixcbkNvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFljKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9WGNbYV0pPyEhYlthXTohMX1mdW5jdGlvbiBaYygpe3JldHVybiBZY31cbnZhciAkYz0wLGFkPTAsYmQ9ITEsY2Q9ITEsZGQ9V2MuZXh0ZW5kKHtzY3JlZW5YOm51bGwsc2NyZWVuWTpudWxsLGNsaWVudFg6bnVsbCxjbGllbnRZOm51bGwscGFnZVg6bnVsbCxwYWdlWTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlpjLGJ1dHRvbjpudWxsLGJ1dHRvbnM6bnVsbCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlbGF0ZWRUYXJnZXR8fChhLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQpfSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluIGEpcmV0dXJuIGEubW92ZW1lbnRYO3ZhciBiPSRjOyRjPWEuc2NyZWVuWDtyZXR1cm4gYmQ/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblgtYjowOihiZD0hMCwwKX0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRZXCJpbiBhKXJldHVybiBhLm1vdmVtZW50WTtcbnZhciBiPWFkO2FkPWEuc2NyZWVuWTtyZXR1cm4gY2Q/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblktYjowOihjZD0hMCwwKX19KSxlZD1kZC5leHRlbmQoe3BvaW50ZXJJZDpudWxsLHdpZHRoOm51bGwsaGVpZ2h0Om51bGwscHJlc3N1cmU6bnVsbCx0YW5nZW50aWFsUHJlc3N1cmU6bnVsbCx0aWx0WDpudWxsLHRpbHRZOm51bGwsdHdpc3Q6bnVsbCxwb2ludGVyVHlwZTpudWxsLGlzUHJpbWFyeTpudWxsfSksZmQ9e21vdXNlRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvbk1vdXNlRW50ZXJcIixkZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0sbW91c2VMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VMZWF2ZVwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxwb2ludGVyRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJFbnRlclwiLGRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX0scG9pbnRlckxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyTGVhdmVcIixcbmRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX19LGdkPXtldmVudFR5cGVzOmZkLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEsZj1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoZSYmKGMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCl8fCFmJiYhZSlyZXR1cm4gbnVsbDtlPWQud2luZG93PT09ZD9kOihlPWQub3duZXJEb2N1bWVudCk/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6d2luZG93O2Y/KGY9YixiPShiPWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQpP0hhKGIpOm51bGwpOmY9bnVsbDtpZihmPT09YilyZXR1cm4gbnVsbDt2YXIgaD12b2lkIDAsZz12b2lkIDAsaz12b2lkIDAsbD12b2lkIDA7aWYoXCJtb3VzZW91dFwiPT09YXx8XCJtb3VzZW92ZXJcIj09PWEpaD1kZCxnPWZkLm1vdXNlTGVhdmUsaz1mZC5tb3VzZUVudGVyLGw9XCJtb3VzZVwiO1xuZWxzZSBpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpaD1lZCxnPWZkLnBvaW50ZXJMZWF2ZSxrPWZkLnBvaW50ZXJFbnRlcixsPVwicG9pbnRlclwiO3ZhciBuPW51bGw9PWY/ZTpKYShmKTtlPW51bGw9PWI/ZTpKYShiKTthPWguZ2V0UG9vbGVkKGcsZixjLGQpO2EudHlwZT1sK1wibGVhdmVcIjthLnRhcmdldD1uO2EucmVsYXRlZFRhcmdldD1lO2M9aC5nZXRQb29sZWQoayxiLGMsZCk7Yy50eXBlPWwrXCJlbnRlclwiO2MudGFyZ2V0PWU7Yy5yZWxhdGVkVGFyZ2V0PW47ZD1iO2lmKGYmJmQpYTp7Yj1mO2U9ZDtsPTA7Zm9yKGg9YjtoO2g9TGEoaCkpbCsrO2g9MDtmb3Ioaz1lO2s7az1MYShrKSloKys7Zm9yKDswPGwtaDspYj1MYShiKSxsLS07Zm9yKDswPGgtbDspZT1MYShlKSxoLS07Zm9yKDtsLS07KXtpZihiPT09ZXx8Yj09PWUuYWx0ZXJuYXRlKWJyZWFrIGE7Yj1MYShiKTtlPUxhKGUpfWI9bnVsbH1lbHNlIGI9bnVsbDtlPWI7Zm9yKGI9W107ZiYmZiE9PWU7KXtsPVxuZi5hbHRlcm5hdGU7aWYobnVsbCE9PWwmJmw9PT1lKWJyZWFrO2IucHVzaChmKTtmPUxhKGYpfWZvcihmPVtdO2QmJmQhPT1lOyl7bD1kLmFsdGVybmF0ZTtpZihudWxsIT09bCYmbD09PWUpYnJlYWs7Zi5wdXNoKGQpO2Q9TGEoZCl9Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylPYShiW2RdLFwiYnViYmxlZFwiLGEpO2ZvcihkPWYubGVuZ3RoOzA8ZC0tOylPYShmW2RdLFwiY2FwdHVyZWRcIixjKTtyZXR1cm5bYSxjXX19O2Z1bmN0aW9uIGhkKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgaWQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGpkKGEsYil7aWYoaGQoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFpZC5jYWxsKGIsY1tkXSl8fCFoZChhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGtkKGEsYil7cmV0dXJue3Jlc3BvbmRlcjphLHByb3BzOmJ9fW5ldyBNYXA7bmV3IE1hcDtuZXcgU2V0O25ldyBNYXA7XG5mdW5jdGlvbiBsZChhKXt2YXIgYj1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXtpZigwIT09KGIuZWZmZWN0VGFnJjIpKXJldHVybiAxO2Zvcig7Yi5yZXR1cm47KWlmKGI9Yi5yZXR1cm4sMCE9PShiLmVmZmVjdFRhZyYyKSlyZXR1cm4gMX1yZXR1cm4gMz09PWIudGFnPzI6M31mdW5jdGlvbiBvZChhKXtpZigyIT09bGQoYSkpdGhyb3cgdChFcnJvcigxODgpKTt9XG5mdW5jdGlvbiBwZChhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYil7Yj1sZChhKTtpZigzPT09Yil0aHJvdyB0KEVycm9yKDE4OCkpO3JldHVybiAxPT09Yj9udWxsOmF9Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuO2lmKG51bGw9PT1lKWJyZWFrO3ZhciBmPWUuYWx0ZXJuYXRlO2lmKG51bGw9PT1mKXtkPWUucmV0dXJuO2lmKG51bGwhPT1kKXtjPWQ7Y29udGludWV9YnJlYWt9aWYoZS5jaGlsZD09PWYuY2hpbGQpe2ZvcihmPWUuY2hpbGQ7Zjspe2lmKGY9PT1jKXJldHVybiBvZChlKSxhO2lmKGY9PT1kKXJldHVybiBvZChlKSxiO2Y9Zi5zaWJsaW5nfXRocm93IHQoRXJyb3IoMTg4KSk7fWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2Zvcih2YXIgaD0hMSxnPWUuY2hpbGQ7Zzspe2lmKGc9PT1jKXtoPSEwO2M9ZTtkPWY7YnJlYWt9aWYoZz09PWQpe2g9ITA7ZD1lO2M9ZjticmVha31nPWcuc2libGluZ31pZighaCl7Zm9yKGc9Zi5jaGlsZDtnOyl7aWYoZz09PVxuYyl7aD0hMDtjPWY7ZD1lO2JyZWFrfWlmKGc9PT1kKXtoPSEwO2Q9ZjtjPWU7YnJlYWt9Zz1nLnNpYmxpbmd9aWYoIWgpdGhyb3cgdChFcnJvcigxODkpKTt9fWlmKGMuYWx0ZXJuYXRlIT09ZCl0aHJvdyB0KEVycm9yKDE5MCkpO31pZigzIT09Yy50YWcpdGhyb3cgdChFcnJvcigxODgpKTtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIHFkKGEpe2E9cGQoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG52YXIgcmQ9eS5leHRlbmQoe2FuaW1hdGlvbk5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLHNkPXkuZXh0ZW5kKHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksdGQ9V2MuZXh0ZW5kKHtyZWxhdGVkVGFyZ2V0Om51bGx9KTtmdW5jdGlvbiB1ZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1cbnZhciB2ZD17RXNjOlwiRXNjYXBlXCIsU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sd2Q9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsXG4xMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIiwxMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LHhkPVdjLmV4dGVuZCh7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj12ZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT11ZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/d2RbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxsb2NhdGlvbjpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxyZXBlYXQ6bnVsbCxsb2NhbGU6bnVsbCxnZXRNb2RpZmllclN0YXRlOlpjLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP3VkKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP3VkKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSkseWQ9ZGQuZXh0ZW5kKHtkYXRhVHJhbnNmZXI6bnVsbH0pLHpkPVdjLmV4dGVuZCh7dG91Y2hlczpudWxsLHRhcmdldFRvdWNoZXM6bnVsbCxjaGFuZ2VkVG91Y2hlczpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlpjfSksQWQ9eS5leHRlbmQoe3Byb3BlcnR5TmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSksQmQ9ZGQuZXh0ZW5kKHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW5cbmE/LWEud2hlZWxEZWx0YVg6MH0sZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOm51bGwsZGVsdGFNb2RlOm51bGx9KSxDZD1bW1wiYmx1clwiLFwiYmx1clwiLDBdLFtcImNhbmNlbFwiLFwiY2FuY2VsXCIsMF0sW1wiY2xpY2tcIixcImNsaWNrXCIsMF0sW1wiY2xvc2VcIixcImNsb3NlXCIsMF0sW1wiY29udGV4dG1lbnVcIixcImNvbnRleHRNZW51XCIsMF0sW1wiY29weVwiLFwiY29weVwiLDBdLFtcImN1dFwiLFwiY3V0XCIsMF0sW1wiYXV4Y2xpY2tcIixcImF1eENsaWNrXCIsMF0sW1wiZGJsY2xpY2tcIixcImRvdWJsZUNsaWNrXCIsMF0sW1wiZHJhZ2VuZFwiLFwiZHJhZ0VuZFwiLDBdLFtcImRyYWdzdGFydFwiLFwiZHJhZ1N0YXJ0XCIsMF0sW1wiZHJvcFwiLFwiZHJvcFwiLDBdLFtcImZvY3VzXCIsXCJmb2N1c1wiLDBdLFtcImlucHV0XCIsXCJpbnB1dFwiLDBdLFtcImludmFsaWRcIixcImludmFsaWRcIiwwXSxcbltcImtleWRvd25cIixcImtleURvd25cIiwwXSxbXCJrZXlwcmVzc1wiLFwia2V5UHJlc3NcIiwwXSxbXCJrZXl1cFwiLFwia2V5VXBcIiwwXSxbXCJtb3VzZWRvd25cIixcIm1vdXNlRG93blwiLDBdLFtcIm1vdXNldXBcIixcIm1vdXNlVXBcIiwwXSxbXCJwYXN0ZVwiLFwicGFzdGVcIiwwXSxbXCJwYXVzZVwiLFwicGF1c2VcIiwwXSxbXCJwbGF5XCIsXCJwbGF5XCIsMF0sW1wicG9pbnRlcmNhbmNlbFwiLFwicG9pbnRlckNhbmNlbFwiLDBdLFtcInBvaW50ZXJkb3duXCIsXCJwb2ludGVyRG93blwiLDBdLFtcInBvaW50ZXJ1cFwiLFwicG9pbnRlclVwXCIsMF0sW1wicmF0ZWNoYW5nZVwiLFwicmF0ZUNoYW5nZVwiLDBdLFtcInJlc2V0XCIsXCJyZXNldFwiLDBdLFtcInNlZWtlZFwiLFwic2Vla2VkXCIsMF0sW1wic3VibWl0XCIsXCJzdWJtaXRcIiwwXSxbXCJ0b3VjaGNhbmNlbFwiLFwidG91Y2hDYW5jZWxcIiwwXSxbXCJ0b3VjaGVuZFwiLFwidG91Y2hFbmRcIiwwXSxbXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaFN0YXJ0XCIsMF0sW1widm9sdW1lY2hhbmdlXCIsXCJ2b2x1bWVDaGFuZ2VcIiwwXSxbXCJkcmFnXCIsXCJkcmFnXCIsXG4xXSxbXCJkcmFnZW50ZXJcIixcImRyYWdFbnRlclwiLDFdLFtcImRyYWdleGl0XCIsXCJkcmFnRXhpdFwiLDFdLFtcImRyYWdsZWF2ZVwiLFwiZHJhZ0xlYXZlXCIsMV0sW1wiZHJhZ292ZXJcIixcImRyYWdPdmVyXCIsMV0sW1wibW91c2Vtb3ZlXCIsXCJtb3VzZU1vdmVcIiwxXSxbXCJtb3VzZW91dFwiLFwibW91c2VPdXRcIiwxXSxbXCJtb3VzZW92ZXJcIixcIm1vdXNlT3ZlclwiLDFdLFtcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVyTW92ZVwiLDFdLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJPdXRcIiwxXSxbXCJwb2ludGVyb3ZlclwiLFwicG9pbnRlck92ZXJcIiwxXSxbXCJzY3JvbGxcIixcInNjcm9sbFwiLDFdLFtcInRvZ2dsZVwiLFwidG9nZ2xlXCIsMV0sW1widG91Y2htb3ZlXCIsXCJ0b3VjaE1vdmVcIiwxXSxbXCJ3aGVlbFwiLFwid2hlZWxcIiwxXSxbXCJhYm9ydFwiLFwiYWJvcnRcIiwyXSxbWGEsXCJhbmltYXRpb25FbmRcIiwyXSxbWWEsXCJhbmltYXRpb25JdGVyYXRpb25cIiwyXSxbWmEsXCJhbmltYXRpb25TdGFydFwiLDJdLFtcImNhbnBsYXlcIixcImNhblBsYXlcIiwyXSxbXCJjYW5wbGF5dGhyb3VnaFwiLFxuXCJjYW5QbGF5VGhyb3VnaFwiLDJdLFtcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiLDJdLFtcImVtcHRpZWRcIixcImVtcHRpZWRcIiwyXSxbXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiLDJdLFtcImVuZGVkXCIsXCJlbmRlZFwiLDJdLFtcImVycm9yXCIsXCJlcnJvclwiLDJdLFtcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJnb3RQb2ludGVyQ2FwdHVyZVwiLDJdLFtcImxvYWRcIixcImxvYWRcIiwyXSxbXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsMl0sW1wibG9hZGVkbWV0YWRhdGFcIixcImxvYWRlZE1ldGFkYXRhXCIsMl0sW1wibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIiwyXSxbXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiLDJdLFtcInBsYXlpbmdcIixcInBsYXlpbmdcIiwyXSxbXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIiwyXSxbXCJzZWVraW5nXCIsXCJzZWVraW5nXCIsMl0sW1wic3RhbGxlZFwiLFwic3RhbGxlZFwiLDJdLFtcInN1c3BlbmRcIixcInN1c3BlbmRcIiwyXSxbXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCIsXG4yXSxbYWIsXCJ0cmFuc2l0aW9uRW5kXCIsMl0sW1wid2FpdGluZ1wiLFwid2FpdGluZ1wiLDJdXSxEZD17fSxFZD17fSxGZD0wO2Zvcig7RmQ8Q2QubGVuZ3RoO0ZkKyspe3ZhciBHZD1DZFtGZF0sSGQ9R2RbMF0sSWQ9R2RbMV0sSmQ9R2RbMl0sS2Q9XCJvblwiKyhJZFswXS50b1VwcGVyQ2FzZSgpK0lkLnNsaWNlKDEpKSxMZD17cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6S2QsY2FwdHVyZWQ6S2QrXCJDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpbSGRdLGV2ZW50UHJpb3JpdHk6SmR9O0RkW0lkXT1MZDtFZFtIZF09TGR9XG52YXIgTWQ9e2V2ZW50VHlwZXM6RGQsZ2V0RXZlbnRQcmlvcml0eTpmdW5jdGlvbihhKXthPUVkW2FdO3JldHVybiB2b2lkIDAhPT1hP2EuZXZlbnRQcmlvcml0eToyfSxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPUVkW2FdO2lmKCFlKXJldHVybiBudWxsO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09dWQoYykpcmV0dXJuIG51bGw7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjphPXhkO2JyZWFrO2Nhc2UgXCJibHVyXCI6Y2FzZSBcImZvY3VzXCI6YT10ZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pcmV0dXJuIG51bGw7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjphPWRkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOmE9XG55ZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjphPXpkO2JyZWFrO2Nhc2UgWGE6Y2FzZSBZYTpjYXNlIFphOmE9cmQ7YnJlYWs7Y2FzZSBhYjphPUFkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjphPVdjO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOmE9QmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6YT1zZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjphPWVkO2JyZWFrO2RlZmF1bHQ6YT15fWI9YS5nZXRQb29sZWQoZSxiLGMsZCk7UWEoYik7cmV0dXJuIGJ9fSxOZD1NZC5nZXRFdmVudFByaW9yaXR5LE9kPVtdO1xuZnVuY3Rpb24gUGQoYSl7dmFyIGI9YS50YXJnZXRJbnN0LGM9Yjtkb3tpZighYyl7YS5hbmNlc3RvcnMucHVzaChjKTticmVha312YXIgZDtmb3IoZD1jO2QucmV0dXJuOylkPWQucmV0dXJuO2Q9MyE9PWQudGFnP251bGw6ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZighZClicmVhazthLmFuY2VzdG9ycy5wdXNoKGMpO2M9SGEoZCl9d2hpbGUoYyk7Zm9yKGM9MDtjPGEuYW5jZXN0b3JzLmxlbmd0aDtjKyspe2I9YS5hbmNlc3RvcnNbY107dmFyIGU9UmIoYS5uYXRpdmVFdmVudCk7ZD1hLnRvcExldmVsVHlwZTtmb3IodmFyIGY9YS5uYXRpdmVFdmVudCxoPW51bGwsZz0wO2c8ZWEubGVuZ3RoO2crKyl7dmFyIGs9ZWFbZ107ayYmKGs9ay5leHRyYWN0RXZlbnRzKGQsYixmLGUpKSYmKGg9eGEoaCxrKSl9QmEoaCl9fXZhciBRZD0hMDtmdW5jdGlvbiBHKGEsYil7UmQoYixhLCExKX1cbmZ1bmN0aW9uIFJkKGEsYixjKXtzd2l0Y2goTmQoYikpe2Nhc2UgMDp2YXIgZD1TZC5iaW5kKG51bGwsYiwxKTticmVhaztjYXNlIDE6ZD1UZC5iaW5kKG51bGwsYiwxKTticmVhaztkZWZhdWx0OmQ9VWQuYmluZChudWxsLGIsMSl9Yz9hLmFkZEV2ZW50TGlzdGVuZXIoYixkLCEwKTphLmFkZEV2ZW50TGlzdGVuZXIoYixkLCExKX1mdW5jdGlvbiBTZChhLGIsYyl7TmJ8fExiKCk7dmFyIGQ9VWQsZT1OYjtOYj0hMDt0cnl7S2IoZCxhLGIsYyl9ZmluYWxseXsoTmI9ZSl8fE9iKCl9fWZ1bmN0aW9uIFRkKGEsYixjKXtVZChhLGIsYyl9XG5mdW5jdGlvbiBVZChhLGIsYyl7aWYoUWQpe2I9UmIoYyk7Yj1IYShiKTtudWxsPT09Ynx8XCJudW1iZXJcIiE9PXR5cGVvZiBiLnRhZ3x8Mj09PWxkKGIpfHwoYj1udWxsKTtpZihPZC5sZW5ndGgpe3ZhciBkPU9kLnBvcCgpO2QudG9wTGV2ZWxUeXBlPWE7ZC5uYXRpdmVFdmVudD1jO2QudGFyZ2V0SW5zdD1iO2E9ZH1lbHNlIGE9e3RvcExldmVsVHlwZTphLG5hdGl2ZUV2ZW50OmMsdGFyZ2V0SW5zdDpiLGFuY2VzdG9yczpbXX07dHJ5e2lmKGM9YSxOYilQZChjLHZvaWQgMCk7ZWxzZXtOYj0hMDt0cnl7TWIoUGQsYyx2b2lkIDApfWZpbmFsbHl7TmI9ITEsT2IoKX19fWZpbmFsbHl7YS50b3BMZXZlbFR5cGU9bnVsbCxhLm5hdGl2ZUV2ZW50PW51bGwsYS50YXJnZXRJbnN0PW51bGwsYS5hbmNlc3RvcnMubGVuZ3RoPTAsMTA+T2QubGVuZ3RoJiZPZC5wdXNoKGEpfX19dmFyIFZkPW5ldyAoXCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXApO1xuZnVuY3Rpb24gV2QoYSl7dmFyIGI9VmQuZ2V0KGEpO3ZvaWQgMD09PWImJihiPW5ldyBTZXQsVmQuc2V0KGEsYikpO3JldHVybiBifWZ1bmN0aW9uIFhkKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1mdW5jdGlvbiBZZChhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBaZChhLGIpe3ZhciBjPVlkKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPVlkKGMpfX1mdW5jdGlvbiAkZChhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlPyRkKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIGFlKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhkKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhkKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIGJlKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgY2U9UmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxkZT17c2VsZWN0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uU2VsZWN0XCIsY2FwdHVyZWQ6XCJvblNlbGVjdENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX0sZWU9bnVsbCxmZT1udWxsLGdlPW51bGwsaGU9ITE7XG5mdW5jdGlvbiBpZShhLGIpe3ZhciBjPWIud2luZG93PT09Yj9iLmRvY3VtZW50Ojk9PT1iLm5vZGVUeXBlP2I6Yi5vd25lckRvY3VtZW50O2lmKGhlfHxudWxsPT1lZXx8ZWUhPT1YZChjKSlyZXR1cm4gbnVsbDtjPWVlO1wic2VsZWN0aW9uU3RhcnRcImluIGMmJmJlKGMpP2M9e3N0YXJ0OmMuc2VsZWN0aW9uU3RhcnQsZW5kOmMuc2VsZWN0aW9uRW5kfTooYz0oYy5vd25lckRvY3VtZW50JiZjLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksYz17YW5jaG9yTm9kZTpjLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmMuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpjLmZvY3VzTm9kZSxmb2N1c09mZnNldDpjLmZvY3VzT2Zmc2V0fSk7cmV0dXJuIGdlJiZqZChnZSxjKT9udWxsOihnZT1jLGE9eS5nZXRQb29sZWQoZGUuc2VsZWN0LGZlLGEsYiksYS50eXBlPVwic2VsZWN0XCIsYS50YXJnZXQ9ZWUsUWEoYSksYSl9XG52YXIgamU9e2V2ZW50VHlwZXM6ZGUsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kLndpbmRvdz09PWQ/ZC5kb2N1bWVudDo5PT09ZC5ub2RlVHlwZT9kOmQub3duZXJEb2N1bWVudCxmO2lmKCEoZj0hZSkpe2E6e2U9V2QoZSk7Zj1qYS5vblNlbGVjdDtmb3IodmFyIGg9MDtoPGYubGVuZ3RoO2grKylpZighZS5oYXMoZltoXSkpe2U9ITE7YnJlYWsgYX1lPSEwfWY9IWV9aWYoZilyZXR1cm4gbnVsbDtlPWI/SmEoYik6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNcIjppZihRYihlKXx8XCJ0cnVlXCI9PT1lLmNvbnRlbnRFZGl0YWJsZSllZT1lLGZlPWIsZ2U9bnVsbDticmVhaztjYXNlIFwiYmx1clwiOmdlPWZlPWVlPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOmhlPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpyZXR1cm4gaGU9ITEsaWUoYyxkKTtjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoY2UpYnJlYWs7XG5jYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOnJldHVybiBpZShjLGQpfXJldHVybiBudWxsfX07Q2EuaW5qZWN0RXZlbnRQbHVnaW5PcmRlcihcIlJlc3BvbmRlckV2ZW50UGx1Z2luIFNpbXBsZUV2ZW50UGx1Z2luIEVudGVyTGVhdmVFdmVudFBsdWdpbiBDaGFuZ2VFdmVudFBsdWdpbiBTZWxlY3RFdmVudFBsdWdpbiBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luXCIuc3BsaXQoXCIgXCIpKTtzYT1LYTt0YT1JYTt2YT1KYTtDYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUoe1NpbXBsZUV2ZW50UGx1Z2luOk1kLEVudGVyTGVhdmVFdmVudFBsdWdpbjpnZCxDaGFuZ2VFdmVudFBsdWdpbjpWYyxTZWxlY3RFdmVudFBsdWdpbjpqZSxCZWZvcmVJbnB1dEV2ZW50UGx1Z2luOkNifSk7ZnVuY3Rpb24ga2UoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBsZShhLGIpe2E9bSh7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPWtlKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1mdW5jdGlvbiBtZShhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrQWMoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIG5lKGEsYil7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl0aHJvdyB0KEVycm9yKDkxKSk7cmV0dXJuIG0oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gb2UoYSxiKXt2YXIgYz1iLnZhbHVlO2lmKG51bGw9PWMpe2M9Yi5kZWZhdWx0VmFsdWU7Yj1iLmNoaWxkcmVuO2lmKG51bGwhPWIpe2lmKG51bGwhPWMpdGhyb3cgdChFcnJvcig5MikpO2lmKEFycmF5LmlzQXJyYXkoYikpe2lmKCEoMT49Yi5sZW5ndGgpKXRocm93IHQoRXJyb3IoOTMpKTtiPWJbMF19Yz1ifW51bGw9PWMmJihjPVwiXCIpfWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOkFjKGMpfX1cbmZ1bmN0aW9uIHBlKGEsYil7dmFyIGM9QWMoYi52YWx1ZSksZD1BYyhiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIHFlKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJihhLnZhbHVlPWIpfXZhciByZT17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBzZShhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIHRlKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9zZShiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciB1ZT12b2lkIDAsdmU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09cmUuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7dWU9dWV8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dWUuaW5uZXJIVE1MPVwiPHN2Zz5cIitiK1wiPC9zdmc+XCI7Zm9yKGI9dWUuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gd2UoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciB4ZT17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSx5ZT1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMoeGUpLmZvckVhY2goZnVuY3Rpb24oYSl7eWUuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTt4ZVtiXT14ZVthXX0pfSk7ZnVuY3Rpb24gemUoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHhlLmhhc093blByb3BlcnR5KGEpJiZ4ZVthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiBBZShhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT16ZShjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciBDZT1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gRGUoYSxiKXtpZihiKXtpZihDZVthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IHQoRXJyb3IoMTM3KSxhLFwiXCIpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgdChFcnJvcig2MCkpO2lmKCEoXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgdChFcnJvcig2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgdChFcnJvcig2MiksXCJcIik7fX1cbmZ1bmN0aW9uIEVlKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1cbmZ1bmN0aW9uIEZlKGEsYil7YT05PT09YS5ub2RlVHlwZXx8MTE9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O3ZhciBjPVdkKGEpO2I9amFbYl07Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF07aWYoIWMuaGFzKGUpKXtzd2l0Y2goZSl7Y2FzZSBcInNjcm9sbFwiOlJkKGEsXCJzY3JvbGxcIiwhMCk7YnJlYWs7Y2FzZSBcImZvY3VzXCI6Y2FzZSBcImJsdXJcIjpSZChhLFwiZm9jdXNcIiwhMCk7UmQoYSxcImJsdXJcIiwhMCk7Yy5hZGQoXCJibHVyXCIpO2MuYWRkKFwiZm9jdXNcIik7YnJlYWs7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbG9zZVwiOlNiKGUpJiZSZChhLGUsITApO2JyZWFrO2Nhc2UgXCJpbnZhbGlkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJyZXNldFwiOmJyZWFrO2RlZmF1bHQ6LTE9PT1iYi5pbmRleE9mKGUpJiZHKGUsYSl9Yy5hZGQoZSl9fX1mdW5jdGlvbiBHZSgpe312YXIgSGU9bnVsbCxJZT1udWxsO1xuZnVuY3Rpb24gSmUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4hIWIuYXV0b0ZvY3VzfXJldHVybiExfWZ1bmN0aW9uIEtlKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH12YXIgTGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsTWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwO1xuZnVuY3Rpb24gTmUoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWt9cmV0dXJuIGF9bmV3IFNldDt2YXIgT2U9W10sUGU9LTE7ZnVuY3Rpb24gSChhKXswPlBlfHwoYS5jdXJyZW50PU9lW1BlXSxPZVtQZV09bnVsbCxQZS0tKX1mdW5jdGlvbiBKKGEsYil7UGUrKztPZVtQZV09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBRZT17fSxMPXtjdXJyZW50OlFlfSxNPXtjdXJyZW50OiExfSxSZT1RZTtcbmZ1bmN0aW9uIFNlKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gUWU7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gTihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIFRlKGEpe0goTSxhKTtIKEwsYSl9ZnVuY3Rpb24gVWUoYSl7SChNLGEpO0goTCxhKX1cbmZ1bmN0aW9uIFZlKGEsYixjKXtpZihMLmN1cnJlbnQhPT1RZSl0aHJvdyB0KEVycm9yKDE2OCkpO0ooTCxiLGEpO0ooTSxjLGEpfWZ1bmN0aW9uIFdlKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgdChFcnJvcigxMDgpLG9jKGIpfHxcIlVua25vd25cIixlKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIFhlKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2I9YiYmYi5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8UWU7UmU9TC5jdXJyZW50O0ooTCxiLGEpO0ooTSxNLmN1cnJlbnQsYSk7cmV0dXJuITB9XG5mdW5jdGlvbiBZZShhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgdChFcnJvcigxNjkpKTtjPyhiPVdlKGEsYixSZSksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1iLEgoTSxhKSxIKEwsYSksSihMLGIsYSkpOkgoTSxhKTtKKE0sYyxhKX1cbnZhciBaZT1xLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSwkZT1xLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssYWY9cS51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxiZj1xLnVuc3RhYmxlX3Nob3VsZFlpZWxkLGNmPXEudW5zdGFibGVfcmVxdWVzdFBhaW50LGRmPXEudW5zdGFibGVfbm93LGVmPXEudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsZmY9cS51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxoZj1xLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGpmPXEudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksa2Y9cS51bnN0YWJsZV9Mb3dQcmlvcml0eSxsZj1xLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxtZj17fSxuZj12b2lkIDAhPT1jZj9jZjpmdW5jdGlvbigpe30sb2Y9bnVsbCxwZj1udWxsLHFmPSExLHJmPWRmKCksc2Y9MUU0PnJmP2RmOmZ1bmN0aW9uKCl7cmV0dXJuIGRmKCktcmZ9O1xuZnVuY3Rpb24gdGYoKXtzd2l0Y2goZWYoKSl7Y2FzZSBmZjpyZXR1cm4gOTk7Y2FzZSBoZjpyZXR1cm4gOTg7Y2FzZSBqZjpyZXR1cm4gOTc7Y2FzZSBrZjpyZXR1cm4gOTY7Y2FzZSBsZjpyZXR1cm4gOTU7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDMzMikpO319ZnVuY3Rpb24gdWYoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIGZmO2Nhc2UgOTg6cmV0dXJuIGhmO2Nhc2UgOTc6cmV0dXJuIGpmO2Nhc2UgOTY6cmV0dXJuIGtmO2Nhc2UgOTU6cmV0dXJuIGxmO2RlZmF1bHQ6dGhyb3cgdChFcnJvcigzMzIpKTt9fWZ1bmN0aW9uIHZmKGEsYil7YT11ZihhKTtyZXR1cm4gWmUoYSxiKX1mdW5jdGlvbiB3ZihhLGIsYyl7YT11ZihhKTtyZXR1cm4gJGUoYSxiLGMpfWZ1bmN0aW9uIHhmKGEpe251bGw9PT1vZj8ob2Y9W2FdLHBmPSRlKGZmLHlmKSk6b2YucHVzaChhKTtyZXR1cm4gbWZ9ZnVuY3Rpb24gTygpe251bGwhPT1wZiYmYWYocGYpO3lmKCl9XG5mdW5jdGlvbiB5Zigpe2lmKCFxZiYmbnVsbCE9PW9mKXtxZj0hMDt2YXIgYT0wO3RyeXt2YXIgYj1vZjt2Zig5OSxmdW5jdGlvbigpe2Zvcig7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07ZG8gYz1jKCEwKTt3aGlsZShudWxsIT09Yyl9fSk7b2Y9bnVsbH1jYXRjaChjKXt0aHJvdyBudWxsIT09b2YmJihvZj1vZi5zbGljZShhKzEpKSwkZShmZixPKSxjO31maW5hbGx5e3FmPSExfX19ZnVuY3Rpb24gemYoYSxiKXtpZigxMDczNzQxODIzPT09YilyZXR1cm4gOTk7aWYoMT09PWIpcmV0dXJuIDk1O2E9MTAqKDEwNzM3NDE4MjEtYiktMTAqKDEwNzM3NDE4MjEtYSk7cmV0dXJuIDA+PWE/OTk6MjUwPj1hPzk4OjUyNTA+PWE/OTc6OTV9ZnVuY3Rpb24gQWYoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBCZihhKXt2YXIgYj1hLl9yZXN1bHQ7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBiO2Nhc2UgMjp0aHJvdyBiO2Nhc2UgMDp0aHJvdyBiO2RlZmF1bHQ6YS5fc3RhdHVzPTA7Yj1hLl9jdG9yO2I9YigpO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSk7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBhLl9yZXN1bHQ7Y2FzZSAyOnRocm93IGEuX3Jlc3VsdDt9YS5fcmVzdWx0PWI7dGhyb3cgYjt9fXZhciBDZj17Y3VycmVudDpudWxsfSxEZj1udWxsLEVmPW51bGwsRmY9bnVsbDtmdW5jdGlvbiBHZigpe0ZmPUVmPURmPW51bGx9XG5mdW5jdGlvbiBIZihhLGIpe3ZhciBjPWEudHlwZS5fY29udGV4dDtKKENmLGMuX2N1cnJlbnRWYWx1ZSxhKTtjLl9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBJZihhKXt2YXIgYj1DZi5jdXJyZW50O0goQ2YsYSk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBKZihhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZihhLmNoaWxkRXhwaXJhdGlvblRpbWU8YilhLmNoaWxkRXhwaXJhdGlvblRpbWU9YixudWxsIT09YyYmYy5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihjLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7ZWxzZSBpZihudWxsIT09YyYmYy5jaGlsZEV4cGlyYXRpb25UaW1lPGIpYy5jaGlsZEV4cGlyYXRpb25UaW1lPWI7ZWxzZSBicmVhazthPWEucmV0dXJufX1cbmZ1bmN0aW9uIEtmKGEsYil7RGY9YTtGZj1FZj1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKGEuZXhwaXJhdGlvblRpbWU+PWImJihMZj0hMCksYS5maXJzdENvbnRleHQ9bnVsbCl9ZnVuY3Rpb24gTWYoYSxiKXtpZihGZiE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpRmY9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07aWYobnVsbD09PUVmKXtpZihudWxsPT09RGYpdGhyb3cgdChFcnJvcigzMDgpKTtFZj1iO0RmLmRlcGVuZGVuY2llcz17ZXhwaXJhdGlvblRpbWU6MCxmaXJzdENvbnRleHQ6YixyZXNwb25kZXJzOm51bGx9fWVsc2UgRWY9RWYubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyIE5mPSExO1xuZnVuY3Rpb24gT2YoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLGZpcnN0VXBkYXRlOm51bGwsbGFzdFVwZGF0ZTpudWxsLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fWZ1bmN0aW9uIFBmKGEpe3JldHVybntiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RVcGRhdGU6YS5maXJzdFVwZGF0ZSxsYXN0VXBkYXRlOmEubGFzdFVwZGF0ZSxmaXJzdENhcHR1cmVkVXBkYXRlOm51bGwsbGFzdENhcHR1cmVkVXBkYXRlOm51bGwsZmlyc3RFZmZlY3Q6bnVsbCxsYXN0RWZmZWN0Om51bGwsZmlyc3RDYXB0dXJlZEVmZmVjdDpudWxsLGxhc3RDYXB0dXJlZEVmZmVjdDpudWxsfX1cbmZ1bmN0aW9uIFFmKGEsYil7cmV0dXJue2V4cGlyYXRpb25UaW1lOmEsc3VzcGVuc2VDb25maWc6Yix0YWc6MCxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGwsbmV4dEVmZmVjdDpudWxsfX1mdW5jdGlvbiBSZihhLGIpe251bGw9PT1hLmxhc3RVcGRhdGU/YS5maXJzdFVwZGF0ZT1hLmxhc3RVcGRhdGU9YjooYS5sYXN0VXBkYXRlLm5leHQ9YixhLmxhc3RVcGRhdGU9Yil9XG5mdW5jdGlvbiBTZihhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKG51bGw9PT1jKXt2YXIgZD1hLnVwZGF0ZVF1ZXVlO3ZhciBlPW51bGw7bnVsbD09PWQmJihkPWEudXBkYXRlUXVldWU9T2YoYS5tZW1vaXplZFN0YXRlKSl9ZWxzZSBkPWEudXBkYXRlUXVldWUsZT1jLnVwZGF0ZVF1ZXVlLG51bGw9PT1kP251bGw9PT1lPyhkPWEudXBkYXRlUXVldWU9T2YoYS5tZW1vaXplZFN0YXRlKSxlPWMudXBkYXRlUXVldWU9T2YoYy5tZW1vaXplZFN0YXRlKSk6ZD1hLnVwZGF0ZVF1ZXVlPVBmKGUpOm51bGw9PT1lJiYoZT1jLnVwZGF0ZVF1ZXVlPVBmKGQpKTtudWxsPT09ZXx8ZD09PWU/UmYoZCxiKTpudWxsPT09ZC5sYXN0VXBkYXRlfHxudWxsPT09ZS5sYXN0VXBkYXRlPyhSZihkLGIpLFJmKGUsYikpOihSZihkLGIpLGUubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIFRmKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZTtjPW51bGw9PT1jP2EudXBkYXRlUXVldWU9T2YoYS5tZW1vaXplZFN0YXRlKTpVZihhLGMpO251bGw9PT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT9jLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yy5sYXN0Q2FwdHVyZWRVcGRhdGU9YjooYy5sYXN0Q2FwdHVyZWRVcGRhdGUubmV4dD1iLGMubGFzdENhcHR1cmVkVXBkYXRlPWIpfWZ1bmN0aW9uIFVmKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmI9PT1jLnVwZGF0ZVF1ZXVlJiYoYj1hLnVwZGF0ZVF1ZXVlPVBmKGIpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFZmKGEsYixjLGQsZSxmKXtzd2l0Y2goYy50YWcpe2Nhc2UgMTpyZXR1cm4gYT1jLnBheWxvYWQsXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YS5jYWxsKGYsZCxlKTphO2Nhc2UgMzphLmVmZmVjdFRhZz1hLmVmZmVjdFRhZyYtMjA0OXw2NDtjYXNlIDA6YT1jLnBheWxvYWQ7ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7aWYobnVsbD09PWV8fHZvaWQgMD09PWUpYnJlYWs7cmV0dXJuIG0oe30sZCxlKTtjYXNlIDI6TmY9ITB9cmV0dXJuIGR9XG5mdW5jdGlvbiBXZihhLGIsYyxkLGUpe05mPSExO2I9VWYoYSxiKTtmb3IodmFyIGY9Yi5iYXNlU3RhdGUsaD1udWxsLGc9MCxrPWIuZmlyc3RVcGRhdGUsbD1mO251bGwhPT1rOyl7dmFyIG49ay5leHBpcmF0aW9uVGltZTtuPGU/KG51bGw9PT1oJiYoaD1rLGY9bCksZzxuJiYoZz1uKSk6KFhmKG4say5zdXNwZW5zZUNvbmZpZyksbD1WZihhLGIsayxsLGMsZCksbnVsbCE9PWsuY2FsbGJhY2smJihhLmVmZmVjdFRhZ3w9MzIsay5uZXh0RWZmZWN0PW51bGwsbnVsbD09PWIubGFzdEVmZmVjdD9iLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1rOihiLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1rLGIubGFzdEVmZmVjdD1rKSkpO2s9ay5uZXh0fW49bnVsbDtmb3Ioaz1iLmZpcnN0Q2FwdHVyZWRVcGRhdGU7bnVsbCE9PWs7KXt2YXIgej1rLmV4cGlyYXRpb25UaW1lO3o8ZT8obnVsbD09PW4mJihuPWssbnVsbD09PWgmJihmPWwpKSxnPHomJihnPXopKToobD1WZihhLGIsayxsLGMsZCksbnVsbCE9PVxuay5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD0zMixrLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q/Yi5maXJzdENhcHR1cmVkRWZmZWN0PWIubGFzdENhcHR1cmVkRWZmZWN0PWs6KGIubGFzdENhcHR1cmVkRWZmZWN0Lm5leHRFZmZlY3Q9ayxiLmxhc3RDYXB0dXJlZEVmZmVjdD1rKSkpO2s9ay5uZXh0fW51bGw9PT1oJiYoYi5sYXN0VXBkYXRlPW51bGwpO251bGw9PT1uP2IubGFzdENhcHR1cmVkVXBkYXRlPW51bGw6YS5lZmZlY3RUYWd8PTMyO251bGw9PT1oJiZudWxsPT09biYmKGY9bCk7Yi5iYXNlU3RhdGU9ZjtiLmZpcnN0VXBkYXRlPWg7Yi5maXJzdENhcHR1cmVkVXBkYXRlPW47YS5leHBpcmF0aW9uVGltZT1nO2EubWVtb2l6ZWRTdGF0ZT1sfVxuZnVuY3Rpb24gWWYoYSxiLGMpe251bGwhPT1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUmJihudWxsIT09Yi5sYXN0VXBkYXRlJiYoYi5sYXN0VXBkYXRlLm5leHQ9Yi5maXJzdENhcHR1cmVkVXBkYXRlLGIubGFzdFVwZGF0ZT1iLmxhc3RDYXB0dXJlZFVwZGF0ZSksYi5maXJzdENhcHR1cmVkVXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlPW51bGwpO1pmKGIuZmlyc3RFZmZlY3QsYyk7Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbDtaZihiLmZpcnN0Q2FwdHVyZWRFZmZlY3QsYyk7Yi5maXJzdENhcHR1cmVkRWZmZWN0PWIubGFzdENhcHR1cmVkRWZmZWN0PW51bGx9ZnVuY3Rpb24gWmYoYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5jYWxsYmFjaztpZihudWxsIT09Yyl7YS5jYWxsYmFjaz1udWxsO3ZhciBkPWI7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGMpdGhyb3cgdChFcnJvcigxOTEpLGMpO2MuY2FsbChkKX1hPWEubmV4dEVmZmVjdH19XG52YXIgJGY9WGIuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsYWc9KG5ldyBhYS5Db21wb25lbnQpLnJlZnM7ZnVuY3Rpb24gYmcoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YztkPWEudXBkYXRlUXVldWU7bnVsbCE9PWQmJjA9PT1hLmV4cGlyYXRpb25UaW1lJiYoZC5iYXNlU3RhdGU9Yyl9XG52YXIgZmc9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFsRmliZXIpPzI9PT1sZChhKTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1jZygpLGU9JGYuc3VzcGVuc2U7ZD1kZyhkLGEsZSk7ZT1RZihkLGUpO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtTZihhLGUpO2VnKGEsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPWNnKCksZT0kZi5zdXNwZW5zZTtkPWRnKGQsYSxlKTtlPVFmKGQsZSk7ZS50YWc9MTtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7U2YoYSxlKTtlZyhhLGQpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgYz1jZygpLGQ9JGYuc3VzcGVuc2U7XG5jPWRnKGMsYSxkKTtkPVFmKGMsZCk7ZC50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGQuY2FsbGJhY2s9Yik7U2YoYSxkKTtlZyhhLGMpfX07ZnVuY3Rpb24gZ2coYSxiLGMsZCxlLGYsaCl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGgpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hamQoYyxkKXx8IWpkKGUsZik6ITB9XG5mdW5jdGlvbiBoZyhhLGIsYyl7dmFyIGQ9ITEsZT1RZTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj1NZihmKTooZT1OKGIpP1JlOkwuY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP1NlKGEsZSk6UWUpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj1mZzthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxGaWJlcj1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBpZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmZmcuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBqZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPWFnO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9TWYoZik6KGY9TihiKT9SZTpMLmN1cnJlbnQsZS5jb250ZXh0PVNlKGEsZikpO2Y9YS51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKFdmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihiZyhhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fChiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZmZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxmPWEudXBkYXRlUXVldWUsbnVsbCE9PWYmJihXZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmVmZmVjdFRhZ3w9NCl9dmFyIGtnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBsZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7dmFyIGQ9dm9pZCAwO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyB0KEVycm9yKDMwOSkpO2Q9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgdChFcnJvcigxNDcpLGEpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09YWcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgdChFcnJvcigyODQpKTtpZighYy5fb3duZXIpdGhyb3cgdChFcnJvcigyOTApLGEpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIG1nKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IHQoRXJyb3IoMzEpLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YixcIlwiKTt9XG5mdW5jdGlvbiBuZyhhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmVmZmVjdFRhZz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYixjKXthPW9nKGEsYixjKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZWZmZWN0VGFnPVxuMixjKTpkO2IuZWZmZWN0VGFnPTI7cmV0dXJuIGN9ZnVuY3Rpb24gaChiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmVmZmVjdFRhZz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBnKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9cGcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzLGQpLGQucmVmPWxnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1xZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1sZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09XG5jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPXJnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG4oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPXNnKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiB6KGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1wZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBaYjpyZXR1cm4gYz1xZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1sZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgJGI6cmV0dXJuIGI9cmcoYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKGtnKGIpfHxcbm1jKGIpKXJldHVybiBiPXNnKGIsYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO21nKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmcoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBaYjpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PWFjP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSAkYjpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihrZyhjKXx8bWMoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO21nKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdihhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPVxuYS5nZXQoYyl8fG51bGwsZyhiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIFpiOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT1hYz9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSAkYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihrZyhkKXx8bWMoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO21nKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcmIoZSxoLGcsayl7Zm9yKHZhciBsPW51bGwsdT1udWxsLG49aCx3PWg9MCxDPW51bGw7bnVsbCE9PW4mJnc8Zy5sZW5ndGg7dysrKXtuLmluZGV4Pnc/KEM9bixuPW51bGwpOkM9bi5zaWJsaW5nO3ZhciBwPXgoZSxuLGdbd10sayk7aWYobnVsbD09PXApe251bGw9PT1uJiYobj1DKTticmVha31hJiZcbm4mJm51bGw9PT1wLmFsdGVybmF0ZSYmYihlLG4pO2g9ZihwLGgsdyk7bnVsbD09PXU/bD1wOnUuc2libGluZz1wO3U9cDtuPUN9aWYodz09PWcubGVuZ3RoKXJldHVybiBjKGUsbiksbDtpZihudWxsPT09bil7Zm9yKDt3PGcubGVuZ3RoO3crKyluPXooZSxnW3ddLGspLG51bGwhPT1uJiYoaD1mKG4saCx3KSxudWxsPT09dT9sPW46dS5zaWJsaW5nPW4sdT1uKTtyZXR1cm4gbH1mb3Iobj1kKGUsbik7dzxnLmxlbmd0aDt3KyspQz12KG4sZSx3LGdbd10sayksbnVsbCE9PUMmJihhJiZudWxsIT09Qy5hbHRlcm5hdGUmJm4uZGVsZXRlKG51bGw9PT1DLmtleT93OkMua2V5KSxoPWYoQyxoLHcpLG51bGw9PT11P2w9Qzp1LnNpYmxpbmc9Qyx1PUMpO2EmJm4uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gQmUoZSxoLGcsayl7dmFyIGw9bWMoZyk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGwpdGhyb3cgdChFcnJvcigxNTApKTtnPWwuY2FsbChnKTtcbmlmKG51bGw9PWcpdGhyb3cgdChFcnJvcigxNTEpKTtmb3IodmFyIG49bD1udWxsLHU9aCx3PWg9MCxDPW51bGwscD1nLm5leHQoKTtudWxsIT09dSYmIXAuZG9uZTt3KysscD1nLm5leHQoKSl7dS5pbmRleD53PyhDPXUsdT1udWxsKTpDPXUuc2libGluZzt2YXIgcj14KGUsdSxwLnZhbHVlLGspO2lmKG51bGw9PT1yKXtudWxsPT09dSYmKHU9Qyk7YnJlYWt9YSYmdSYmbnVsbD09PXIuYWx0ZXJuYXRlJiZiKGUsdSk7aD1mKHIsaCx3KTtudWxsPT09bj9sPXI6bi5zaWJsaW5nPXI7bj1yO3U9Q31pZihwLmRvbmUpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoOyFwLmRvbmU7dysrLHA9Zy5uZXh0KCkpcD16KGUscC52YWx1ZSxrKSxudWxsIT09cCYmKGg9ZihwLGgsdyksbnVsbD09PW4/bD1wOm4uc2libGluZz1wLG49cCk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpOyFwLmRvbmU7dysrLHA9Zy5uZXh0KCkpcD12KHUsZSx3LHAudmFsdWUsayksbnVsbCE9PXAmJihhJiZudWxsIT09XG5wLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXAua2V5P3c6cC5rZXkpLGg9ZihwLGgsdyksbnVsbD09PW4/bD1wOm4uc2libGluZz1wLG49cCk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsZyl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09YWMmJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgWmI6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKXtpZig3PT09ay50YWc/Zi50eXBlPT09YWM6ay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi50eXBlPT09YWM/Zi5wcm9wcy5jaGlsZHJlbjpmLnByb3BzLGcpO2QucmVmPWxnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWMoYSxcbmspO2JyZWFrfWVsc2UgYihhLGspO2s9ay5zaWJsaW5nfWYudHlwZT09PWFjPyhkPXNnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGcsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooZz1xZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxnKSxnLnJlZj1sZyhhLGQsZiksZy5yZXR1cm49YSxhPWcpfXJldHVybiBoKGEpO2Nhc2UgJGI6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspe2lmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSxnKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWMoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPXJnKGYsYS5tb2RlLGcpO2QucmV0dXJuPWE7YT1kfXJldHVybiBoKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XG5cIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYsZyksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1wZyhmLGEubW9kZSxnKSxkLnJldHVybj1hLGE9ZCksaChhKTtpZihrZyhmKSlyZXR1cm4gcmIoYSxkLGYsZyk7aWYobWMoZikpcmV0dXJuIEJlKGEsZCxmLGcpO2wmJm1nKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDA6dGhyb3cgYT1hLnR5cGUsdChFcnJvcigxNTIpLGEuZGlzcGxheU5hbWV8fGEubmFtZXx8XCJDb21wb25lbnRcIik7fXJldHVybiBjKGEsZCl9fXZhciB0Zz1uZyghMCksdWc9bmcoITEpLHZnPXt9LHdnPXtjdXJyZW50OnZnfSx4Zz17Y3VycmVudDp2Z30seWc9e2N1cnJlbnQ6dmd9O2Z1bmN0aW9uIHpnKGEpe2lmKGE9PT12Zyl0aHJvdyB0KEVycm9yKDE3NCkpO3JldHVybiBhfVxuZnVuY3Rpb24gQWcoYSxiKXtKKHlnLGIsYSk7Sih4ZyxhLGEpO0ood2csdmcsYSk7dmFyIGM9Yi5ub2RlVHlwZTtzd2l0Y2goYyl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6dGUobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmM9OD09PWM/Yi5wYXJlbnROb2RlOmIsYj1jLm5hbWVzcGFjZVVSSXx8bnVsbCxjPWMudGFnTmFtZSxiPXRlKGIsYyl9SCh3ZyxhKTtKKHdnLGIsYSl9ZnVuY3Rpb24gQmcoYSl7SCh3ZyxhKTtIKHhnLGEpO0goeWcsYSl9ZnVuY3Rpb24gQ2coYSl7emcoeWcuY3VycmVudCk7dmFyIGI9emcod2cuY3VycmVudCk7dmFyIGM9dGUoYixhLnR5cGUpO2IhPT1jJiYoSih4ZyxhLGEpLEood2csYyxhKSl9ZnVuY3Rpb24gRGcoYSl7eGcuY3VycmVudD09PWEmJihIKHdnLGEpLEgoeGcsYSkpfXZhciBFZz0xLEZnPTEsR2c9MixQPXtjdXJyZW50OjB9O1xuZnVuY3Rpb24gSGcoYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXtpZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZWZmZWN0VGFnJjY0KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9XG52YXIgSWc9MCxKZz0yLEtnPTQsTGc9OCxNZz0xNixOZz0zMixPZz02NCxQZz0xMjgsUWc9WGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixSZz0wLFNnPW51bGwsUT1udWxsLFRnPW51bGwsVWc9bnVsbCxSPW51bGwsVmc9bnVsbCxXZz0wLFhnPW51bGwsWWc9MCxaZz0hMSwkZz1udWxsLGFoPTA7ZnVuY3Rpb24gYmgoKXt0aHJvdyB0KEVycm9yKDMyMSkpO31mdW5jdGlvbiBjaChhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFoZChhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gZGgoYSxiLGMsZCxlLGYpe1JnPWY7U2c9YjtUZz1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtRZy5jdXJyZW50PW51bGw9PT1UZz9laDpmaDtiPWMoZCxlKTtpZihaZyl7ZG8gWmc9ITEsYWgrPTEsVGc9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGwsVmc9VWcsWGc9Uj1RPW51bGwsUWcuY3VycmVudD1maCxiPWMoZCxlKTt3aGlsZShaZyk7JGc9bnVsbDthaD0wfVFnLmN1cnJlbnQ9aGg7YT1TZzthLm1lbW9pemVkU3RhdGU9VWc7YS5leHBpcmF0aW9uVGltZT1XZzthLnVwZGF0ZVF1ZXVlPVhnO2EuZWZmZWN0VGFnfD1ZZzthPW51bGwhPT1RJiZudWxsIT09US5uZXh0O1JnPTA7Vmc9Uj1VZz1UZz1RPVNnPW51bGw7V2c9MDtYZz1udWxsO1lnPTA7aWYoYSl0aHJvdyB0KEVycm9yKDMwMCkpO3JldHVybiBifVxuZnVuY3Rpb24gaWgoKXtRZy5jdXJyZW50PWhoO1JnPTA7Vmc9Uj1VZz1UZz1RPVNnPW51bGw7V2c9MDtYZz1udWxsO1lnPTA7Wmc9ITE7JGc9bnVsbDthaD0wfWZ1bmN0aW9uIGpoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxxdWV1ZTpudWxsLGJhc2VVcGRhdGU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1SP1VnPVI9YTpSPVIubmV4dD1hO3JldHVybiBSfWZ1bmN0aW9uIGtoKCl7aWYobnVsbCE9PVZnKVI9VmcsVmc9Ui5uZXh0LFE9VGcsVGc9bnVsbCE9PVE/US5uZXh0Om51bGw7ZWxzZXtpZihudWxsPT09VGcpdGhyb3cgdChFcnJvcigzMTApKTtRPVRnO3ZhciBhPXttZW1vaXplZFN0YXRlOlEubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6US5iYXNlU3RhdGUscXVldWU6US5xdWV1ZSxiYXNlVXBkYXRlOlEuYmFzZVVwZGF0ZSxuZXh0Om51bGx9O1I9bnVsbD09PVI/VWc9YTpSLm5leHQ9YTtUZz1RLm5leHR9cmV0dXJuIFJ9XG5mdW5jdGlvbiBsaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIG1oKGEpe3ZhciBiPWtoKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IHQoRXJyb3IoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7aWYoMDxhaCl7dmFyIGQ9Yy5kaXNwYXRjaDtpZihudWxsIT09JGcpe3ZhciBlPSRnLmdldChjKTtpZih2b2lkIDAhPT1lKXskZy5kZWxldGUoYyk7dmFyIGY9Yi5tZW1vaXplZFN0YXRlO2RvIGY9YShmLGUuYWN0aW9uKSxlPWUubmV4dDt3aGlsZShudWxsIT09ZSk7aGQoZixiLm1lbW9pemVkU3RhdGUpfHwoTGY9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT09PWMubGFzdCYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9ZjtyZXR1cm5bZixkXX19cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxkXX1kPWMubGFzdDt2YXIgaD1iLmJhc2VVcGRhdGU7Zj1iLmJhc2VTdGF0ZTtudWxsIT09aD8obnVsbCE9PWQmJihkLm5leHQ9bnVsbCksZD1oLm5leHQpOmQ9bnVsbCE9PWQ/ZC5uZXh0Om51bGw7aWYobnVsbCE9PVxuZCl7dmFyIGc9ZT1udWxsLGs9ZCxsPSExO2Rve3ZhciBuPWsuZXhwaXJhdGlvblRpbWU7bjxSZz8obHx8KGw9ITAsZz1oLGU9Ziksbj5XZyYmKFdnPW4pKTooWGYobixrLnN1c3BlbnNlQ29uZmlnKSxmPWsuZWFnZXJSZWR1Y2VyPT09YT9rLmVhZ2VyU3RhdGU6YShmLGsuYWN0aW9uKSk7aD1rO2s9ay5uZXh0fXdoaWxlKG51bGwhPT1rJiZrIT09ZCk7bHx8KGc9aCxlPWYpO2hkKGYsYi5tZW1vaXplZFN0YXRlKXx8KExmPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtiLmJhc2VVcGRhdGU9ZztiLmJhc2VTdGF0ZT1lO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gbmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O251bGw9PT1YZz8oWGc9e2xhc3RFZmZlY3Q6bnVsbH0sWGcubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGI9WGcubGFzdEVmZmVjdCxudWxsPT09Yj9YZy5sYXN0RWZmZWN0PWEubmV4dD1hOihjPWIubmV4dCxiLm5leHQ9YSxhLm5leHQ9YyxYZy5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBvaChhLGIsYyxkKXt2YXIgZT1qaCgpO1lnfD1hO2UubWVtb2l6ZWRTdGF0ZT1uaChiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIHBoKGEsYixjLGQpe3ZhciBlPWtoKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVEpe3ZhciBoPVEubWVtb2l6ZWRTdGF0ZTtmPWguZGVzdHJveTtpZihudWxsIT09ZCYmY2goZCxoLmRlcHMpKXtuaChJZyxjLGYsZCk7cmV0dXJufX1ZZ3w9YTtlLm1lbW9pemVkU3RhdGU9bmgoYixjLGYsZCl9ZnVuY3Rpb24gcWgoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1mdW5jdGlvbiByaCgpe31cbmZ1bmN0aW9uIHNoKGEsYixjKXtpZighKDI1PmFoKSl0aHJvdyB0KEVycm9yKDMwMSkpO3ZhciBkPWEuYWx0ZXJuYXRlO2lmKGE9PT1TZ3x8bnVsbCE9PWQmJmQ9PT1TZylpZihaZz0hMCxhPXtleHBpcmF0aW9uVGltZTpSZyxzdXNwZW5zZUNvbmZpZzpudWxsLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LG51bGw9PT0kZyYmKCRnPW5ldyBNYXApLGM9JGcuZ2V0KGIpLHZvaWQgMD09PWMpJGcuc2V0KGIsYSk7ZWxzZXtmb3IoYj1jO251bGwhPT1iLm5leHQ7KWI9Yi5uZXh0O2IubmV4dD1hfWVsc2V7dmFyIGU9Y2coKSxmPSRmLnN1c3BlbnNlO2U9ZGcoZSxhLGYpO2Y9e2V4cGlyYXRpb25UaW1lOmUsc3VzcGVuc2VDb25maWc6ZixhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfTt2YXIgaD1iLmxhc3Q7aWYobnVsbD09PWgpZi5uZXh0PWY7ZWxzZXt2YXIgZz1oLm5leHQ7bnVsbCE9PWcmJlxuKGYubmV4dD1nKTtoLm5leHQ9Zn1iLmxhc3Q9ZjtpZigwPT09YS5leHBpcmF0aW9uVGltZSYmKG51bGw9PT1kfHwwPT09ZC5leHBpcmF0aW9uVGltZSkmJihkPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZCkpdHJ5e3ZhciBrPWIubGFzdFJlbmRlcmVkU3RhdGUsbD1kKGssYyk7Zi5lYWdlclJlZHVjZXI9ZDtmLmVhZ2VyU3RhdGU9bDtpZihoZChsLGspKXJldHVybn1jYXRjaChuKXt9ZmluYWxseXt9ZWcoYSxlKX19XG52YXIgaGg9e3JlYWRDb250ZXh0Ok1mLHVzZUNhbGxiYWNrOmJoLHVzZUNvbnRleHQ6YmgsdXNlRWZmZWN0OmJoLHVzZUltcGVyYXRpdmVIYW5kbGU6YmgsdXNlTGF5b3V0RWZmZWN0OmJoLHVzZU1lbW86YmgsdXNlUmVkdWNlcjpiaCx1c2VSZWY6YmgsdXNlU3RhdGU6YmgsdXNlRGVidWdWYWx1ZTpiaCx1c2VSZXNwb25kZXI6Ymh9LGVoPXtyZWFkQ29udGV4dDpNZix1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe2poKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TWYsdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG9oKDUxNixQZ3xPZyxhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gb2goNCxLZ3xOZyxxaC5iaW5kKG51bGwsYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG9oKDQsXG5LZ3xOZyxhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9amgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9amgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9ZC5xdWV1ZT17bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2E9YS5kaXNwYXRjaD1zaC5iaW5kKG51bGwsU2csYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3ZhciBiPWpoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3ZhciBiPWpoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPVxue2xhc3Q6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6bGgsbGFzdFJlbmRlcmVkU3RhdGU6YX07YT1hLmRpc3BhdGNoPXNoLmJpbmQobnVsbCxTZyxhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfSx1c2VEZWJ1Z1ZhbHVlOnJoLHVzZVJlc3BvbmRlcjprZH0sZmg9e3JlYWRDb250ZXh0Ok1mLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7dmFyIGM9a2goKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmNoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VDb250ZXh0Ok1mLHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBwaCg1MTYsUGd8T2csYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIHBoKDQsS2d8TmcscWguYmluZChudWxsLFxuYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHBoKDQsS2d8TmcsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPWtoKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZjaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjptaCx1c2VSZWY6ZnVuY3Rpb24oKXtyZXR1cm4ga2goKS5tZW1vaXplZFN0YXRlfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gbWgobGgsYSl9LHVzZURlYnVnVmFsdWU6cmgsdXNlUmVzcG9uZGVyOmtkfSx0aD1udWxsLHVoPW51bGwsdmg9ITE7XG5mdW5jdGlvbiB3aChhLGIpe3ZhciBjPXhoKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmVmZmVjdFRhZz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24geWgoYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHpoKGEpe2lmKHZoKXt2YXIgYj11aDtpZihiKXt2YXIgYz1iO2lmKCF5aChhLGIpKXtiPU5lKGMubmV4dFNpYmxpbmcpO2lmKCFifHwheWgoYSxiKSl7YS5lZmZlY3RUYWd8PTI7dmg9ITE7dGg9YTtyZXR1cm59d2godGgsYyl9dGg9YTt1aD1OZShiLmZpcnN0Q2hpbGQpfWVsc2UgYS5lZmZlY3RUYWd8PTIsdmg9ITEsdGg9YX19ZnVuY3Rpb24gQWgoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxOCE9PWEudGFnOylhPWEucmV0dXJuO3RoPWF9XG5mdW5jdGlvbiBCaChhKXtpZihhIT09dGgpcmV0dXJuITE7aWYoIXZoKXJldHVybiBBaChhKSx2aD0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNSE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIUtlKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj11aDtiOyl3aChhLGIpLGI9TmUoYi5uZXh0U2libGluZyk7QWgoYSk7dWg9dGg/TmUoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gQ2goKXt1aD10aD1udWxsO3ZoPSExfXZhciBEaD1YYi5SZWFjdEN1cnJlbnRPd25lcixMZj0hMTtmdW5jdGlvbiBTKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/dWcoYixudWxsLGMsZCk6dGcoYixhLmNoaWxkLGMsZCl9XG5mdW5jdGlvbiBFaChhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7S2YoYixlKTtkPWRoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIUxmKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5lZmZlY3RUYWcmPS01MTcsYS5leHBpcmF0aW9uVGltZTw9ZSYmKGEuZXhwaXJhdGlvblRpbWU9MCksRmgoYSxiLGUpO2IuZWZmZWN0VGFnfD0xO1MoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBHaChhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBoPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaCYmIUhoKGgpJiZ2b2lkIDA9PT1oLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1oLEloKGEsYixoLGQsZSxmKTthPXFnKGMudHlwZSxudWxsLGQsbnVsbCxiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWg9YS5jaGlsZDtpZihlPGYmJihlPWgubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6amQsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gRmgoYSxiLGYpO2IuZWZmZWN0VGFnfD0xO2E9b2coaCxkLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIEloKGEsYixjLGQsZSxmKXtyZXR1cm4gbnVsbCE9PWEmJmpkKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZiYmKExmPSExLGU8Zik/RmgoYSxiLGYpOkpoKGEsYixjLGQsZil9ZnVuY3Rpb24gS2goYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5lZmZlY3RUYWd8PTEyOH1mdW5jdGlvbiBKaChhLGIsYyxkLGUpe3ZhciBmPU4oYyk/UmU6TC5jdXJyZW50O2Y9U2UoYixmKTtLZihiLGUpO2M9ZGgoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhTGYpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxGaChhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UyhhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIExoKGEsYixjLGQsZSl7aWYoTihjKSl7dmFyIGY9ITA7WGUoYil9ZWxzZSBmPSExO0tmKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxoZyhiLGMsZCxlKSxqZyhiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBoPWIuc3RhdGVOb2RlLGc9Yi5tZW1vaXplZFByb3BzO2gucHJvcHM9Zzt2YXIgaz1oLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD1NZihsKToobD1OKGMpP1JlOkwuY3VycmVudCxsPVNlKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO3p8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChnIT09ZHx8ayE9PWwpJiZpZyhiLGgsZCxsKTtOZj0hMTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7az1oLnN0YXRlPXg7dmFyIHY9Yi51cGRhdGVRdWV1ZTtudWxsIT09diYmKFdmKGIsdixkLGgsZSksaz1iLm1lbW9pemVkU3RhdGUpO2chPT1kfHx4IT09a3x8TS5jdXJyZW50fHxOZj8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihiZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGc9TmZ8fGdnKGIsYyxnLGQseCxrLGwpKT8oenx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGguVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGguY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlxuaC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGgucHJvcHM9ZCxoLnN0YXRlPWssaC5jb250ZXh0PWwsZD1nKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksZD0hMSl9ZWxzZSBoPWIuc3RhdGVOb2RlLGc9Yi5tZW1vaXplZFByb3BzLGgucHJvcHM9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9nOkFmKGIudHlwZSxnKSxrPWguY29udGV4dCxsPWMuY29udGV4dFR5cGUsXCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPU1mKGwpOihsPU4oYyk/UmU6TC5jdXJyZW50LGw9U2UoYixsKSksbj1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcywoej1cblwiZnVuY3Rpb25cIj09PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoZyE9PWR8fGshPT1sKSYmaWcoYixoLGQsbCksTmY9ITEsaz1iLm1lbW9pemVkU3RhdGUseD1oLnN0YXRlPWssdj1iLnVwZGF0ZVF1ZXVlLG51bGwhPT12JiYoV2YoYix2LGQsaCxlKSx4PWIubWVtb2l6ZWRTdGF0ZSksZyE9PWR8fGshPT14fHxNLmN1cnJlbnR8fE5mPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbiYmKGJnKGIsYyxuLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobj1OZnx8Z2coYixjLGcsZCxrLHgsbCkpPyh6fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGguY29tcG9uZW50V2lsbFVwZGF0ZXx8XG4oXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKGQseCxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsbCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZWZmZWN0VGFnfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGguY29tcG9uZW50RGlkVXBkYXRlfHxnPT09YS5tZW1vaXplZFByb3BzJiZrPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxnPT09YS5tZW1vaXplZFByb3BzJiZrPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTI1NiksYi5tZW1vaXplZFByb3BzPVxuZCxiLm1lbW9pemVkU3RhdGU9eCksaC5wcm9wcz1kLGguc3RhdGU9eCxoLmNvbnRleHQ9bCxkPW4pOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5jb21wb25lbnREaWRVcGRhdGV8fGc9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGc9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxkPSExKTtyZXR1cm4gTWgoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gTWgoYSxiLGMsZCxlLGYpe0toKGEsYik7dmFyIGg9MCE9PShiLmVmZmVjdFRhZyY2NCk7aWYoIWQmJiFoKXJldHVybiBlJiZZZShiLGMsITEpLEZoKGEsYixmKTtkPWIuc3RhdGVOb2RlO0RoLmN1cnJlbnQ9Yjt2YXIgZz1oJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZWZmZWN0VGFnfD0xO251bGwhPT1hJiZoPyhiLmNoaWxkPXRnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9dGcoYixudWxsLGcsZikpOlMoYSxiLGcsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmWWUoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBOaChhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P1ZlKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJlZlKGEsYi5jb250ZXh0LCExKTtBZyhhLGIuY29udGFpbmVySW5mbyl9XG52YXIgT2g9e307XG5mdW5jdGlvbiBQaChhLGIsYyl7dmFyIGQ9Yi5tb2RlLGU9Yi5wZW5kaW5nUHJvcHMsZj1QLmN1cnJlbnQsaD1udWxsLGc9ITEsazsoaz0wIT09KGIuZWZmZWN0VGFnJjY0KSl8fChrPTAhPT0oZiZHZykmJihudWxsPT09YXx8bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSkpO2s/KGg9T2gsZz0hMCxiLmVmZmVjdFRhZyY9LTY1KTpudWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZXx8dm9pZCAwPT09ZS5mYWxsYmFja3x8ITA9PT1lLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwoZnw9RmcpO2YmPUVnO0ooUCxmLGIpO2lmKG51bGw9PT1hKWlmKGcpe2U9ZS5mYWxsYmFjazthPXNnKG51bGwsZCwwLG51bGwpO2EucmV0dXJuPWI7aWYoMD09PShiLm1vZGUmMikpZm9yKGc9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQsYS5jaGlsZD1nO251bGwhPT1nOylnLnJldHVybj1hLGc9Zy5zaWJsaW5nO2M9c2coZSxkLGMsbnVsbCk7Yy5yZXR1cm49YjthLnNpYmxpbmc9XG5jO2Q9YX1lbHNlIGQ9Yz11ZyhiLG51bGwsZS5jaGlsZHJlbixjKTtlbHNle2lmKG51bGwhPT1hLm1lbW9pemVkU3RhdGUpaWYoZj1hLmNoaWxkLGQ9Zi5zaWJsaW5nLGcpe2U9ZS5mYWxsYmFjaztjPW9nKGYsZi5wZW5kaW5nUHJvcHMsMCk7Yy5yZXR1cm49YjtpZigwPT09KGIubW9kZSYyKSYmKGc9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQsZyE9PWYuY2hpbGQpKWZvcihjLmNoaWxkPWc7bnVsbCE9PWc7KWcucmV0dXJuPWMsZz1nLnNpYmxpbmc7ZT1vZyhkLGUsZC5leHBpcmF0aW9uVGltZSk7ZS5yZXR1cm49YjtjLnNpYmxpbmc9ZTtkPWM7Yy5jaGlsZEV4cGlyYXRpb25UaW1lPTA7Yz1lfWVsc2UgZD1jPXRnKGIsZi5jaGlsZCxlLmNoaWxkcmVuLGMpO2Vsc2UgaWYoZj1hLmNoaWxkLGcpe2c9ZS5mYWxsYmFjaztlPXNnKG51bGwsZCwwLG51bGwpO2UucmV0dXJuPWI7ZS5jaGlsZD1mO251bGwhPT1mJiYoZi5yZXR1cm49ZSk7aWYoMD09PShiLm1vZGUmXG4yKSlmb3IoZj1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxlLmNoaWxkPWY7bnVsbCE9PWY7KWYucmV0dXJuPWUsZj1mLnNpYmxpbmc7Yz1zZyhnLGQsYyxudWxsKTtjLnJldHVybj1iO2Uuc2libGluZz1jO2MuZWZmZWN0VGFnfD0yO2Q9ZTtlLmNoaWxkRXhwaXJhdGlvblRpbWU9MH1lbHNlIGM9ZD10ZyhiLGYsZS5jaGlsZHJlbixjKTtiLnN0YXRlTm9kZT1hLnN0YXRlTm9kZX1iLm1lbW9pemVkU3RhdGU9aDtiLmNoaWxkPWQ7cmV0dXJuIGN9ZnVuY3Rpb24gUWgoYSxiLGMsZCxlKXt2YXIgZj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWY/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLGxhc3Q6ZCx0YWlsOmMsdGFpbEV4cGlyYXRpb246MCx0YWlsTW9kZTplfTooZi5pc0JhY2t3YXJkcz1iLGYucmVuZGVyaW5nPW51bGwsZi5sYXN0PWQsZi50YWlsPWMsZi50YWlsRXhwaXJhdGlvbj0wLGYudGFpbE1vZGU9ZSl9XG5mdW5jdGlvbiBSaChhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO1MoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJkdnKSlkPWQmRWd8R2csYi5lZmZlY3RUYWd8PTY0O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5lZmZlY3RUYWcmNjQpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpe2lmKG51bGwhPT1hLm1lbW9pemVkU3RhdGUpe2EuZXhwaXJhdGlvblRpbWU8YyYmKGEuZXhwaXJhdGlvblRpbWU9Yyk7dmFyIGg9YS5hbHRlcm5hdGU7bnVsbCE9PWgmJmguZXhwaXJhdGlvblRpbWU8YyYmKGguZXhwaXJhdGlvblRpbWU9Yyk7SmYoYS5yZXR1cm4sYyl9fWVsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PVxuYilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj1FZ31KKFAsZCxiKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9bnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspZD1jLmFsdGVybmF0ZSxudWxsIT09ZCYmbnVsbD09PUhnKGQpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7UWgoYiwhMSxlLGMsZik7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2Q9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWQmJm51bGw9PT1IZyhkKSl7Yi5jaGlsZD1lO2JyZWFrfWQ9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWR9UWgoYiwhMCxjLG51bGwsZik7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6UWgoYixcbiExLG51bGwsbnVsbCx2b2lkIDApO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gRmgoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO2lmKGIuY2hpbGRFeHBpcmF0aW9uVGltZTxjKXJldHVybiBudWxsO2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyB0KEVycm9yKDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1vZyhhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1vZyhhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gU2goYSl7YS5lZmZlY3RUYWd8PTR9XG52YXIgVGg9dm9pZCAwLFVoPXZvaWQgMCxWaD12b2lkIDAsV2g9dm9pZCAwO1RoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDIwPT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZS5pbnN0YW5jZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07VWg9ZnVuY3Rpb24oKXt9O1xuVmg9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLm1lbW9pemVkUHJvcHM7aWYoZiE9PWQpe3ZhciBoPWIuc3RhdGVOb2RlO3pnKHdnLmN1cnJlbnQpO2E9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6Zj1CYyhoLGYpO2Q9QmMoaCxkKTthPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpmPWxlKGgsZik7ZD1sZShoLGQpO2E9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmY9bSh7fSxmLHt2YWx1ZTp2b2lkIDB9KTtkPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7YT1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpmPW5lKGgsZik7ZD1uZShoLGQpO2E9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZi5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoaC5vbmNsaWNrPUdlKX1EZShjLGQpO2g9Yz12b2lkIDA7dmFyIGc9bnVsbDtmb3IoYyBpbiBmKWlmKCFkLmhhc093blByb3BlcnR5KGMpJiZmLmhhc093blByb3BlcnR5KGMpJiZudWxsIT1mW2NdKWlmKFwic3R5bGVcIj09PVxuYyl7dmFyIGs9ZltjXTtmb3IoaCBpbiBrKWsuaGFzT3duUHJvcGVydHkoaCkmJihnfHwoZz17fSksZ1toXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09YyYmXCJjaGlsZHJlblwiIT09YyYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiZcImF1dG9Gb2N1c1wiIT09YyYmKGlhLmhhc093blByb3BlcnR5KGMpP2F8fChhPVtdKTooYT1hfHxbXSkucHVzaChjLG51bGwpKTtmb3IoYyBpbiBkKXt2YXIgbD1kW2NdO2s9bnVsbCE9Zj9mW2NdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGMpJiZsIT09ayYmKG51bGwhPWx8fG51bGwhPWspKWlmKFwic3R5bGVcIj09PWMpaWYoayl7Zm9yKGggaW4gaykhay5oYXNPd25Qcm9wZXJ0eShoKXx8bCYmbC5oYXNPd25Qcm9wZXJ0eShoKXx8KGd8fChnPXt9KSxnW2hdPVwiXCIpO2ZvcihoIGluIGwpbC5oYXNPd25Qcm9wZXJ0eShoKSYma1toXSE9PWxbaF0mJihnfHxcbihnPXt9KSxnW2hdPWxbaF0pfWVsc2UgZ3x8KGF8fChhPVtdKSxhLnB1c2goYyxnKSksZz1sO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1jPyhsPWw/bC5fX2h0bWw6dm9pZCAwLGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9bCYmayE9PWwmJihhPWF8fFtdKS5wdXNoKGMsXCJcIitsKSk6XCJjaGlsZHJlblwiPT09Yz9rPT09bHx8XCJzdHJpbmdcIiE9PXR5cGVvZiBsJiZcIm51bWJlclwiIT09dHlwZW9mIGx8fChhPWF8fFtdKS5wdXNoKGMsXCJcIitsKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09YyYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWMmJihpYS5oYXNPd25Qcm9wZXJ0eShjKT8obnVsbCE9bCYmRmUoZSxjKSxhfHxrPT09bHx8KGE9W10pKTooYT1hfHxbXSkucHVzaChjLGwpKX1nJiYoYT1hfHxbXSkucHVzaChcInN0eWxlXCIsZyk7ZT1hOyhiLnVwZGF0ZVF1ZXVlPWUpJiZTaChiKX19O1doPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiZTaChiKX07XG5mdW5jdGlvbiAkaChhLGIpe3N3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBhaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpOKGEudHlwZSkmJlRlKGEpO3ZhciBiPWEuZWZmZWN0VGFnO3JldHVybiBiJjIwNDg/KGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYSk6bnVsbDtjYXNlIDM6QmcoYSk7VWUoYSk7Yj1hLmVmZmVjdFRhZztpZigwIT09KGImNjQpKXRocm93IHQoRXJyb3IoMjg1KSk7YS5lZmZlY3RUYWc9YiYtMjA0OXw2NDtyZXR1cm4gYTtjYXNlIDU6cmV0dXJuIERnKGEpLG51bGw7Y2FzZSAxMzpyZXR1cm4gSChQLGEpLGI9YS5lZmZlY3RUYWcsYiYyMDQ4PyhhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGEpOm51bGw7Y2FzZSAxODpyZXR1cm4gbnVsbDtjYXNlIDE5OnJldHVybiBIKFAsYSksbnVsbDtjYXNlIDQ6cmV0dXJuIEJnKGEpLG51bGw7Y2FzZSAxMDpyZXR1cm4gSWYoYSksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1mdW5jdGlvbiBiaShhLGIpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOnBjKGIpfX1cbnZhciBjaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtmdW5jdGlvbiBkaShhLGIpe3ZhciBjPWIuc291cmNlLGQ9Yi5zdGFjaztudWxsPT09ZCYmbnVsbCE9PWMmJihkPXBjKGMpKTtudWxsIT09YyYmb2MoYy50eXBlKTtiPWIudmFsdWU7bnVsbCE9PWEmJjE9PT1hLnRhZyYmb2MoYS50eXBlKTt0cnl7Y29uc29sZS5lcnJvcihiKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9KX19ZnVuY3Rpb24gZWkoYSxiKXt0cnl7Yi5wcm9wcz1hLm1lbW9pemVkUHJvcHMsYi5zdGF0ZT1hLm1lbW9pemVkU3RhdGUsYi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGMpe2ZpKGEsYyl9fWZ1bmN0aW9uIGdpKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe2ZpKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIGhpKGEsYixjKXtjPWMudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG97aWYoKGQudGFnJmEpIT09SWcpe3ZhciBlPWQuZGVzdHJveTtkLmRlc3Ryb3k9dm9pZCAwO3ZvaWQgMCE9PWUmJmUoKX0oZC50YWcmYikhPT1JZyYmKGU9ZC5jcmVhdGUsZC5kZXN0cm95PWUoKSk7ZD1kLm5leHR9d2hpbGUoZCE9PWMpfX1cbmZ1bmN0aW9uIGlpKGEsYil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGppJiZqaShhKTtzd2l0Y2goYS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTp2YXIgYz1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1jJiYoYz1jLmxhc3RFZmZlY3QsbnVsbCE9PWMpKXt2YXIgZD1jLm5leHQ7dmYoOTc8Yj85NzpiLGZ1bmN0aW9uKCl7dmFyIGI9ZDtkb3t2YXIgYz1iLmRlc3Ryb3k7aWYodm9pZCAwIT09Yyl7dmFyIGg9YTt0cnl7YygpfWNhdGNoKGcpe2ZpKGgsZyl9fWI9Yi5uZXh0fXdoaWxlKGIhPT1kKX0pfWJyZWFrO2Nhc2UgMTpnaShhKTtiPWEuc3RhdGVOb2RlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxVbm1vdW50JiZlaShhLGIpO2JyZWFrO2Nhc2UgNTpnaShhKTticmVhaztjYXNlIDQ6a2koYSxiKX19XG5mdW5jdGlvbiBsaShhLGIpe2Zvcih2YXIgYz1hOzspaWYoaWkoYyxiKSxudWxsIT09Yy5jaGlsZCYmNCE9PWMudGFnKWMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkO2Vsc2V7aWYoYz09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319ZnVuY3Rpb24gbWkoYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBuaShhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZihtaShiKSl7dmFyIGM9YjticmVhayBhfWI9Yi5yZXR1cm59dGhyb3cgdChFcnJvcigxNjApKTt9Yj1jLnN0YXRlTm9kZTtzd2l0Y2goYy50YWcpe2Nhc2UgNTp2YXIgZD0hMTticmVhaztjYXNlIDM6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztjYXNlIDQ6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMTYxKSk7fWMuZWZmZWN0VGFnJjE2JiYod2UoYixcIlwiKSxjLmVmZmVjdFRhZyY9LTE3KTthOmI6Zm9yKGM9YTs7KXtmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fG1pKGMucmV0dXJuKSl7Yz1udWxsO2JyZWFrIGF9Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2ZvcihjPWMuc2libGluZzs1IT09Yy50YWcmJjYhPT1jLnRhZyYmMTghPT1jLnRhZzspe2lmKGMuZWZmZWN0VGFnJjIpY29udGludWUgYjtcbmlmKG51bGw9PT1jLmNoaWxkfHw0PT09Yy50YWcpY29udGludWUgYjtlbHNlIGMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkfWlmKCEoYy5lZmZlY3RUYWcmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19Zm9yKHZhciBlPWE7Oyl7dmFyIGY9NT09PWUudGFnfHw2PT09ZS50YWc7aWYoZnx8MjA9PT1lLnRhZyl7dmFyIGg9Zj9lLnN0YXRlTm9kZTplLnN0YXRlTm9kZS5pbnN0YW5jZTtpZihjKWlmKGQpe2Y9Yjt2YXIgZz1oO2g9Yzs4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGcsaCk6Zi5pbnNlcnRCZWZvcmUoZyxoKX1lbHNlIGIuaW5zZXJ0QmVmb3JlKGgsYyk7ZWxzZSBkPyhnPWIsOD09PWcubm9kZVR5cGU/KGY9Zy5wYXJlbnROb2RlLGYuaW5zZXJ0QmVmb3JlKGgsZykpOihmPWcsZi5hcHBlbmRDaGlsZChoKSksZz1nLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWcmJnZvaWQgMCE9PWd8fG51bGwhPT1mLm9uY2xpY2t8fChmLm9uY2xpY2s9R2UpKTpcbmIuYXBwZW5kQ2hpbGQoaCl9ZWxzZSBpZig0IT09ZS50YWcmJm51bGwhPT1lLmNoaWxkKXtlLmNoaWxkLnJldHVybj1lO2U9ZS5jaGlsZDtjb250aW51ZX1pZihlPT09YSlicmVhaztmb3IoO251bGw9PT1lLnNpYmxpbmc7KXtpZihudWxsPT09ZS5yZXR1cm58fGUucmV0dXJuPT09YSlyZXR1cm47ZT1lLnJldHVybn1lLnNpYmxpbmcucmV0dXJuPWUucmV0dXJuO2U9ZS5zaWJsaW5nfX1cbmZ1bmN0aW9uIGtpKGEsYil7Zm9yKHZhciBjPWEsZD0hMSxlPXZvaWQgMCxmPXZvaWQgMDs7KXtpZighZCl7ZD1jLnJldHVybjthOmZvcig7Oyl7aWYobnVsbD09PWQpdGhyb3cgdChFcnJvcigxNjApKTtlPWQuc3RhdGVOb2RlO3N3aXRjaChkLnRhZyl7Y2FzZSA1OmY9ITE7YnJlYWsgYTtjYXNlIDM6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhO2Nhc2UgNDplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGF9ZD1kLnJldHVybn1kPSEwfWlmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWlmKGxpKGMsYiksZil7dmFyIGg9ZSxnPWMuc3RhdGVOb2RlOzg9PT1oLm5vZGVUeXBlP2gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKTpoLnJlbW92ZUNoaWxkKGcpfWVsc2UgZS5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZigyMD09PWMudGFnKWc9Yy5zdGF0ZU5vZGUuaW5zdGFuY2UsbGkoYyxiKSxmPyhoPWUsOD09PWgubm9kZVR5cGU/aC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpOlxuaC5yZW1vdmVDaGlsZChnKSk6ZS5yZW1vdmVDaGlsZChnKTtlbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGlpKGMsYiksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gb2koYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpoaShLZyxMZyxiKTticmVhaztjYXNlIDE6YnJlYWs7Y2FzZSA1OnZhciBjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe3ZhciBkPWIubWVtb2l6ZWRQcm9wcyxlPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO2E9Yi50eXBlO3ZhciBmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1mKXtjW0dhXT1kO1wiaW5wdXRcIj09PWEmJlwicmFkaW9cIj09PWQudHlwZSYmbnVsbCE9ZC5uYW1lJiZEYyhjLGQpO0VlKGEsZSk7Yj1FZShhLGQpO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKz0yKXt2YXIgaD1mW2VdLGc9ZltlKzFdO1wic3R5bGVcIj09PWg/QWUoYyxnKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1oP3ZlKGMsZyk6XCJjaGlsZHJlblwiPT09aD93ZShjLGcpOnpjKGMsaCxnLGIpfXN3aXRjaChhKXtjYXNlIFwiaW5wdXRcIjpFYyhjLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOnBlKGMsXG5kKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZC5tdWx0aXBsZSxhPWQudmFsdWUsbnVsbCE9YT9tZShjLCEhZC5tdWx0aXBsZSxhLCExKTpiIT09ISFkLm11bHRpcGxlJiYobnVsbCE9ZC5kZWZhdWx0VmFsdWU/bWUoYywhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApOm1lKGMsISFkLm11bHRpcGxlLGQubXVsdGlwbGU/W106XCJcIiwhMSkpfX19YnJlYWs7Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyB0KEVycm9yKDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iLm1lbW9pemVkUHJvcHM7YnJlYWs7Y2FzZSAzOmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzpjPWI7bnVsbD09PWIubWVtb2l6ZWRTdGF0ZT9kPSExOihkPSEwLGM9Yi5jaGlsZCxwaT1zZigpKTtpZihudWxsIT09YylhOmZvcihhPWM7Oyl7aWYoNT09PWEudGFnKWY9YS5zdGF0ZU5vZGUsZD8oZj1cbmYuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuc2V0UHJvcGVydHk/Zi5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpmLmRpc3BsYXk9XCJub25lXCIpOihmPWEuc3RhdGVOb2RlLGU9YS5tZW1vaXplZFByb3BzLnN0eWxlLGU9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsLGYuc3R5bGUuZGlzcGxheT16ZShcImRpc3BsYXlcIixlKSk7ZWxzZSBpZig2PT09YS50YWcpYS5zdGF0ZU5vZGUubm9kZVZhbHVlPWQ/XCJcIjphLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigxMz09PWEudGFnJiZudWxsIT09YS5tZW1vaXplZFN0YXRlKXtmPWEuY2hpbGQuc2libGluZztmLnJldHVybj1hO2E9Zjtjb250aW51ZX1lbHNlIGlmKG51bGwhPT1hLmNoaWxkKXthLmNoaWxkLnJldHVybj1hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YylicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1cbmEucmV0dXJufHxhLnJldHVybj09PWMpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9cWkoYik7YnJlYWs7Y2FzZSAxOTpxaShiKTticmVhaztjYXNlIDE3OmJyZWFrO2Nhc2UgMjA6YnJlYWs7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDE2MykpO319ZnVuY3Rpb24gcWkoYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgY2kpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1yaS5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX12YXIgc2k9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7XG5mdW5jdGlvbiB0aShhLGIsYyl7Yz1RZihjLG51bGwpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe3VpfHwodWk9ITAsdmk9ZCk7ZGkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiB3aShhLGIsYyl7Yz1RZihjLG51bGwpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtkaShhLGIpO3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09eGk/eGk9bmV3IFNldChbdGhpc10pOnhpLmFkZCh0aGlzKSxkaShhLGIpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY31cbnZhciB5aT1NYXRoLmNlaWwsemk9WGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixBaT1YYi5SZWFjdEN1cnJlbnRPd25lcixUPTAsQmk9OCxDaT0xNixEaT0zMixFaT0wLEZpPTEsR2k9MixIaT0zLElpPTQsVT1ULEppPW51bGwsVj1udWxsLFc9MCxYPUVpLEtpPTEwNzM3NDE4MjMsTGk9MTA3Mzc0MTgyMyxNaT1udWxsLE5pPSExLHBpPTAsT2k9NTAwLFk9bnVsbCx1aT0hMSx2aT1udWxsLHhpPW51bGwsUGk9ITEsUWk9bnVsbCxSaT05MCxTaT0wLFRpPW51bGwsVWk9MCxWaT1udWxsLFdpPTA7ZnVuY3Rpb24gY2coKXtyZXR1cm4oVSYoQ2l8RGkpKSE9PVQ/MTA3Mzc0MTgyMS0oc2YoKS8xMHwwKTowIT09V2k/V2k6V2k9MTA3Mzc0MTgyMS0oc2YoKS8xMHwwKX1cbmZ1bmN0aW9uIGRnKGEsYixjKXtiPWIubW9kZTtpZigwPT09KGImMikpcmV0dXJuIDEwNzM3NDE4MjM7dmFyIGQ9dGYoKTtpZigwPT09KGImNCkpcmV0dXJuIDk5PT09ZD8xMDczNzQxODIzOjEwNzM3NDE4MjI7aWYoKFUmQ2kpIT09VClyZXR1cm4gVztpZihudWxsIT09YylhPTEwNzM3NDE4MjEtMjUqKCgoMTA3Mzc0MTgyMS1hKyhjLnRpbWVvdXRNc3wwfHw1RTMpLzEwKS8yNXwwKSsxKTtlbHNlIHN3aXRjaChkKXtjYXNlIDk5OmE9MTA3Mzc0MTgyMzticmVhaztjYXNlIDk4OmE9MTA3Mzc0MTgyMS0xMCooKCgxMDczNzQxODIxLWErMTUpLzEwfDApKzEpO2JyZWFrO2Nhc2UgOTc6Y2FzZSA5NjphPTEwNzM3NDE4MjEtMjUqKCgoMTA3Mzc0MTgyMS1hKzUwMCkvMjV8MCkrMSk7YnJlYWs7Y2FzZSA5NTphPTE7YnJlYWs7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDMyNikpO31udWxsIT09SmkmJmE9PT1XJiYtLWE7cmV0dXJuIGF9dmFyIFhpPTA7XG5mdW5jdGlvbiBlZyhhLGIpe2lmKDUwPFVpKXRocm93IFVpPTAsVmk9bnVsbCx0KEVycm9yKDE4NSkpO2E9WWkoYSxiKTtpZihudWxsIT09YSl7YS5waW5nVGltZT0wO3ZhciBjPXRmKCk7aWYoMTA3Mzc0MTgyMz09PWIpaWYoKFUmQmkpIT09VCYmKFUmKENpfERpKSk9PT1UKWZvcih2YXIgZD1aKGEsMTA3Mzc0MTgyMywhMCk7bnVsbCE9PWQ7KWQ9ZCghMCk7ZWxzZSBaaShhLDk5LDEwNzM3NDE4MjMpLFU9PT1UJiZPKCk7ZWxzZSBaaShhLGMsYik7KFUmNCk9PT1UfHw5OCE9PWMmJjk5IT09Y3x8KG51bGw9PT1UaT9UaT1uZXcgTWFwKFtbYSxiXV0pOihjPVRpLmdldChhKSwodm9pZCAwPT09Y3x8Yz5iKSYmVGkuc2V0KGEsYikpKX19XG5mdW5jdGlvbiBZaShhLGIpe2EuZXhwaXJhdGlvblRpbWU8YiYmKGEuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmMuZXhwaXJhdGlvblRpbWU8YiYmKGMuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGQ9YS5yZXR1cm4sZT1udWxsO2lmKG51bGw9PT1kJiYzPT09YS50YWcpZT1hLnN0YXRlTm9kZTtlbHNlIGZvcig7bnVsbCE9PWQ7KXtjPWQuYWx0ZXJuYXRlO2QuY2hpbGRFeHBpcmF0aW9uVGltZTxiJiYoZC5jaGlsZEV4cGlyYXRpb25UaW1lPWIpO251bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtpZihudWxsPT09ZC5yZXR1cm4mJjM9PT1kLnRhZyl7ZT1kLnN0YXRlTm9kZTticmVha31kPWQucmV0dXJufW51bGwhPT1lJiYoYj5lLmZpcnN0UGVuZGluZ1RpbWUmJihlLmZpcnN0UGVuZGluZ1RpbWU9YiksYT1lLmxhc3RQZW5kaW5nVGltZSwwPT09YXx8YjxhKSYmKGUubGFzdFBlbmRpbmdUaW1lPVxuYik7cmV0dXJuIGV9ZnVuY3Rpb24gWmkoYSxiLGMpe2lmKGEuY2FsbGJhY2tFeHBpcmF0aW9uVGltZTxjKXt2YXIgZD1hLmNhbGxiYWNrTm9kZTtudWxsIT09ZCYmZCE9PW1mJiZhZihkKTthLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9YzsxMDczNzQxODIzPT09Yz9hLmNhbGxiYWNrTm9kZT14ZigkaS5iaW5kKG51bGwsYSxaLmJpbmQobnVsbCxhLGMpKSk6KGQ9bnVsbCwxIT09YyYmKGQ9e3RpbWVvdXQ6MTAqKDEwNzM3NDE4MjEtYyktc2YoKX0pLGEuY2FsbGJhY2tOb2RlPXdmKGIsJGkuYmluZChudWxsLGEsWi5iaW5kKG51bGwsYSxjKSksZCkpfX1mdW5jdGlvbiAkaShhLGIsYyl7dmFyIGQ9YS5jYWxsYmFja05vZGUsZT1udWxsO3RyeXtyZXR1cm4gZT1iKGMpLG51bGwhPT1lPyRpLmJpbmQobnVsbCxhLGUpOm51bGx9ZmluYWxseXtudWxsPT09ZSYmZD09PWEuY2FsbGJhY2tOb2RlJiYoYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9MCl9fVxuZnVuY3Rpb24gYWooKXsoVSYoMXxDaXxEaSkpPT09VCYmKGJqKCksY2ooKSl9ZnVuY3Rpb24gZGooYSxiKXt2YXIgYz1hLmZpcnN0QmF0Y2g7cmV0dXJuIG51bGwhPT1jJiZjLl9kZWZlciYmYy5fZXhwaXJhdGlvblRpbWU+PWI/KHdmKDk3LGZ1bmN0aW9uKCl7Yy5fb25Db21wbGV0ZSgpO3JldHVybiBudWxsfSksITApOiExfWZ1bmN0aW9uIGJqKCl7aWYobnVsbCE9PVRpKXt2YXIgYT1UaTtUaT1udWxsO2EuZm9yRWFjaChmdW5jdGlvbihhLGMpe3hmKFouYmluZChudWxsLGMsYSkpfSk7TygpfX1mdW5jdGlvbiBlaihhLGIpe3ZhciBjPVU7VXw9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtVPWMsVT09PVQmJk8oKX19ZnVuY3Rpb24gZmooYSxiLGMsZCl7dmFyIGU9VTtVfD00O3RyeXtyZXR1cm4gdmYoOTgsYS5iaW5kKG51bGwsYixjLGQpKX1maW5hbGx5e1U9ZSxVPT09VCYmTygpfX1cbmZ1bmN0aW9uIGdqKGEsYil7dmFyIGM9VTtVJj0tMjtVfD1CaTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtVPWMsVT09PVQmJk8oKX19XG5mdW5jdGlvbiBoaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxNZShjKSk7aWYobnVsbCE9PVYpZm9yKGM9Vi5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOnZhciBlPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZSYmdm9pZCAwIT09ZSYmVGUoZCk7YnJlYWs7Y2FzZSAzOkJnKGQpO1VlKGQpO2JyZWFrO2Nhc2UgNTpEZyhkKTticmVhaztjYXNlIDQ6QmcoZCk7YnJlYWs7Y2FzZSAxMzpIKFAsZCk7YnJlYWs7Y2FzZSAxOTpIKFAsZCk7YnJlYWs7Y2FzZSAxMDpJZihkKX1jPWMucmV0dXJufUppPWE7Vj1vZyhhLmN1cnJlbnQsbnVsbCxiKTtXPWI7WD1FaTtMaT1LaT0xMDczNzQxODIzO01pPW51bGw7Tmk9ITF9XG5mdW5jdGlvbiBaKGEsYixjKXtpZigoVSYoQ2l8RGkpKSE9PVQpdGhyb3cgdChFcnJvcigzMjcpKTtpZihhLmZpcnN0UGVuZGluZ1RpbWU8YilyZXR1cm4gbnVsbDtpZihjJiZhLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9PT1iKXJldHVybiBpai5iaW5kKG51bGwsYSk7Y2ooKTtpZihhIT09Sml8fGIhPT1XKWhqKGEsYik7ZWxzZSBpZihYPT09SGkpaWYoTmkpaGooYSxiKTtlbHNle3ZhciBkPWEubGFzdFBlbmRpbmdUaW1lO2lmKGQ8YilyZXR1cm4gWi5iaW5kKG51bGwsYSxkKX1pZihudWxsIT09Vil7ZD1VO1V8PUNpO3ZhciBlPXppLmN1cnJlbnQ7bnVsbD09PWUmJihlPWhoKTt6aS5jdXJyZW50PWhoO2lmKGMpe2lmKDEwNzM3NDE4MjMhPT1iKXt2YXIgZj1jZygpO2lmKGY8YilyZXR1cm4gVT1kLEdmKCksemkuY3VycmVudD1lLFouYmluZChudWxsLGEsZil9fWVsc2UgV2k9MDtkbyB0cnl7aWYoYylmb3IoO251bGwhPT1WOylWPWpqKFYpO2Vsc2UgZm9yKDtudWxsIT09ViYmIWJmKCk7KVY9XG5qaihWKTticmVha31jYXRjaChyYil7R2YoKTtpaCgpO2Y9VjtpZihudWxsPT09Znx8bnVsbD09PWYucmV0dXJuKXRocm93IGhqKGEsYiksVT1kLHJiO2E6e3ZhciBoPWEsZz1mLnJldHVybixrPWYsbD1yYixuPVc7ay5lZmZlY3RUYWd8PTEwMjQ7ay5maXJzdEVmZmVjdD1rLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09bCYmXCJvYmplY3RcIj09PXR5cGVvZiBsJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbC50aGVuKXt2YXIgej1sLHg9MCE9PShQLmN1cnJlbnQmRmcpO2w9Zztkb3t2YXIgdjtpZih2PTEzPT09bC50YWcpbnVsbCE9PWwubWVtb2l6ZWRTdGF0ZT92PSExOih2PWwubWVtb2l6ZWRQcm9wcyx2PXZvaWQgMD09PXYuZmFsbGJhY2s/ITE6ITAhPT12LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOng/ITE6ITApO2lmKHYpe2c9bC51cGRhdGVRdWV1ZTtudWxsPT09Zz8oZz1uZXcgU2V0LGcuYWRkKHopLGwudXBkYXRlUXVldWU9Zyk6Zy5hZGQoeik7aWYoMD09PShsLm1vZGUmXG4yKSl7bC5lZmZlY3RUYWd8PTY0O2suZWZmZWN0VGFnJj0tMTk1NzsxPT09ay50YWcmJihudWxsPT09ay5hbHRlcm5hdGU/ay50YWc9MTc6KG49UWYoMTA3Mzc0MTgyMyxudWxsKSxuLnRhZz0yLFNmKGssbikpKTtrLmV4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjM7YnJlYWsgYX1rPWg7aD1uO3g9ay5waW5nQ2FjaGU7bnVsbD09PXg/KHg9ay5waW5nQ2FjaGU9bmV3IHNpLGc9bmV3IFNldCx4LnNldCh6LGcpKTooZz14LmdldCh6KSx2b2lkIDA9PT1nJiYoZz1uZXcgU2V0LHguc2V0KHosZykpKTtnLmhhcyhoKXx8KGcuYWRkKGgpLGs9a2ouYmluZChudWxsLGsseixoKSx6LnRoZW4oayxrKSk7bC5lZmZlY3RUYWd8PTIwNDg7bC5leHBpcmF0aW9uVGltZT1uO2JyZWFrIGF9bD1sLnJldHVybn13aGlsZShudWxsIT09bCk7bD1FcnJvcigob2Moay50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiK1xucGMoaykpfVghPT1JaSYmKFg9RmkpO2w9YmkobCxrKTtrPWc7ZG97c3dpdGNoKGsudGFnKXtjYXNlIDM6ay5lZmZlY3RUYWd8PTIwNDg7ay5leHBpcmF0aW9uVGltZT1uO249dGkoayxsLG4pO1RmKGssbik7YnJlYWsgYTtjYXNlIDE6aWYoej1sLGg9ay50eXBlLGc9ay5zdGF0ZU5vZGUsMD09PShrLmVmZmVjdFRhZyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1nJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT14aXx8IXhpLmhhcyhnKSkpKXtrLmVmZmVjdFRhZ3w9MjA0ODtrLmV4cGlyYXRpb25UaW1lPW47bj13aShrLHosbik7VGYoayxuKTticmVhayBhfX1rPWsucmV0dXJufXdoaWxlKG51bGwhPT1rKX1WPWxqKGYpfXdoaWxlKDEpO1U9ZDtHZigpO3ppLmN1cnJlbnQ9ZTtpZihudWxsIT09VilyZXR1cm4gWi5iaW5kKG51bGwsYSxiKX1hLmZpbmlzaGVkV29yaz1hLmN1cnJlbnQuYWx0ZXJuYXRlO1xuYS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPWI7aWYoZGooYSxiKSlyZXR1cm4gbnVsbDtKaT1udWxsO3N3aXRjaChYKXtjYXNlIEVpOnRocm93IHQoRXJyb3IoMzI4KSk7Y2FzZSBGaTpyZXR1cm4gZD1hLmxhc3RQZW5kaW5nVGltZSxkPGI/Wi5iaW5kKG51bGwsYSxkKTpjP2lqLmJpbmQobnVsbCxhKTooaGooYSxiKSx4ZihaLmJpbmQobnVsbCxhLGIpKSxudWxsKTtjYXNlIEdpOmlmKDEwNzM3NDE4MjM9PT1LaSYmIWMmJihjPXBpK09pLXNmKCksMTA8Yykpe2lmKE5pKXJldHVybiBoaihhLGIpLFouYmluZChudWxsLGEsYik7ZD1hLmxhc3RQZW5kaW5nVGltZTtpZihkPGIpcmV0dXJuIFouYmluZChudWxsLGEsZCk7YS50aW1lb3V0SGFuZGxlPUxlKGlqLmJpbmQobnVsbCxhKSxjKTtyZXR1cm4gbnVsbH1yZXR1cm4gaWouYmluZChudWxsLGEpO2Nhc2UgSGk6aWYoIWMpe2lmKE5pKXJldHVybiBoaihhLGIpLFouYmluZChudWxsLGEsYik7Yz1hLmxhc3RQZW5kaW5nVGltZTtpZihjPGIpcmV0dXJuIFouYmluZChudWxsLFxuYSxjKTsxMDczNzQxODIzIT09TGk/Yz0xMCooMTA3Mzc0MTgyMS1MaSktc2YoKToxMDczNzQxODIzPT09S2k/Yz0wOihjPTEwKigxMDczNzQxODIxLUtpKS01RTMsZD1zZigpLGI9MTAqKDEwNzM3NDE4MjEtYiktZCxjPWQtYywwPmMmJihjPTApLGM9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+Yz80MzIwOjE5NjAqeWkoYy8xOTYwKSktYyxiPGMmJihjPWIpKTtpZigxMDxjKXJldHVybiBhLnRpbWVvdXRIYW5kbGU9TGUoaWouYmluZChudWxsLGEpLGMpLG51bGx9cmV0dXJuIGlqLmJpbmQobnVsbCxhKTtjYXNlIElpOnJldHVybiFjJiYxMDczNzQxODIzIT09S2kmJm51bGwhPT1NaSYmKGQ9S2ksZT1NaSxiPWUuYnVzeU1pbkR1cmF0aW9uTXN8MCwwPj1iP2I9MDooYz1lLmJ1c3lEZWxheU1zfDAsZD1zZigpLSgxMCooMTA3Mzc0MTgyMS1kKS0oZS50aW1lb3V0TXN8MHx8NUUzKSksYj1kPD1jPzA6YytiLWQpLDEwPGIpPyhhLnRpbWVvdXRIYW5kbGU9XG5MZShpai5iaW5kKG51bGwsYSksYiksbnVsbCk6aWouYmluZChudWxsLGEpO2RlZmF1bHQ6dGhyb3cgdChFcnJvcigzMjkpKTt9fWZ1bmN0aW9uIFhmKGEsYil7YTxLaSYmMTxhJiYoS2k9YSk7bnVsbCE9PWImJmE8TGkmJjE8YSYmKExpPWEsTWk9Yil9ZnVuY3Rpb24gamooYSl7dmFyIGI9bWooYS5hbHRlcm5hdGUsYSxXKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWImJihiPWxqKGEpKTtBaS5jdXJyZW50PW51bGw7cmV0dXJuIGJ9XG5mdW5jdGlvbiBsaihhKXtWPWE7ZG97dmFyIGI9Vi5hbHRlcm5hdGU7YT1WLnJldHVybjtpZigwPT09KFYuZWZmZWN0VGFnJjEwMjQpKXthOnt2YXIgYz1iO2I9Vjt2YXIgZD1XLGU9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6YnJlYWs7Y2FzZSAxNjpicmVhaztjYXNlIDE1OmNhc2UgMDpicmVhaztjYXNlIDE6TihiLnR5cGUpJiZUZShiKTticmVhaztjYXNlIDM6QmcoYik7VWUoYik7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09Y3x8bnVsbD09PWMuY2hpbGQpQmgoYiksYi5lZmZlY3RUYWcmPS0zO1VoKGIpO2JyZWFrO2Nhc2UgNTpEZyhiKTtkPXpnKHlnLmN1cnJlbnQpO3ZhciBmPWIudHlwZTtpZihudWxsIT09YyYmbnVsbCE9Yi5zdGF0ZU5vZGUpVmgoYyxiLGYsZSxkKSxjLnJlZiE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCk7ZWxzZSBpZihlKXt2YXIgaD1cbnpnKHdnLmN1cnJlbnQpO2lmKEJoKGIpKXtjPWI7ZT12b2lkIDA7Zj1jLnN0YXRlTm9kZTt2YXIgZz1jLnR5cGUsaz1jLm1lbW9pemVkUHJvcHM7ZltGYV09YztmW0dhXT1rO3N3aXRjaChnKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZik7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKHZhciBsPTA7bDxiYi5sZW5ndGg7bCsrKUcoYmJbbF0sZik7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGYpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGYpO0coXCJsb2FkXCIsZik7YnJlYWs7Y2FzZSBcImZvcm1cIjpHKFwicmVzZXRcIixmKTtHKFwic3VibWl0XCIsZik7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsZik7YnJlYWs7Y2FzZSBcImlucHV0XCI6Q2MoZixrKTtHKFwiaW52YWxpZFwiLGYpO0ZlKGQsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6Zi5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhay5tdWx0aXBsZX07RyhcImludmFsaWRcIixmKTtGZShkLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6b2UoZixrKSxHKFwiaW52YWxpZFwiLGYpLEZlKGQsXCJvbkNoYW5nZVwiKX1EZShnLGspO2w9bnVsbDtmb3IoZSBpbiBrKWsuaGFzT3duUHJvcGVydHkoZSkmJihoPWtbZV0sXCJjaGlsZHJlblwiPT09ZT9cInN0cmluZ1wiPT09dHlwZW9mIGg/Zi50ZXh0Q29udGVudCE9PWgmJihsPVtcImNoaWxkcmVuXCIsaF0pOlwibnVtYmVyXCI9PT10eXBlb2YgaCYmZi50ZXh0Q29udGVudCE9PVwiXCIraCYmKGw9W1wiY2hpbGRyZW5cIixcIlwiK2hdKTppYS5oYXNPd25Qcm9wZXJ0eShlKSYmbnVsbCE9aCYmRmUoZCxlKSk7c3dpdGNoKGcpe2Nhc2UgXCJpbnB1dFwiOlZiKGYpO0djKGYsaywhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmIoZik7cWUoZixrKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGsub25DbGljayYmXG4oZi5vbmNsaWNrPUdlKX1kPWw7Yy51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiZTaChiKX1lbHNle2s9ZjtjPWU7Zz1iO2w9OT09PWQubm9kZVR5cGU/ZDpkLm93bmVyRG9jdW1lbnQ7aD09PXJlLmh0bWwmJihoPXNlKGspKTtoPT09cmUuaHRtbD9cInNjcmlwdFwiPT09az8oaz1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksay5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixsPWsucmVtb3ZlQ2hpbGQoay5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBjLmlzP2w9bC5jcmVhdGVFbGVtZW50KGsse2lzOmMuaXN9KToobD1sLmNyZWF0ZUVsZW1lbnQoayksXCJzZWxlY3RcIj09PWsmJihrPWwsYy5tdWx0aXBsZT9rLm11bHRpcGxlPSEwOmMuc2l6ZSYmKGsuc2l6ZT1jLnNpemUpKSk6bD1sLmNyZWF0ZUVsZW1lbnROUyhoLGspO2s9bDtrW0ZhXT1nO2tbR2FdPWM7Yz1rO1RoKGMsYiwhMSwhMSk7Zz1jO3ZhciBuPWQsej1FZShmLGUpO3N3aXRjaChmKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsXG5nKTtkPWU7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGQ9MDtkPGJiLmxlbmd0aDtkKyspRyhiYltkXSxnKTtkPWU7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGcpO2Q9ZTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixnKTtHKFwibG9hZFwiLGcpO2Q9ZTticmVhaztjYXNlIFwiZm9ybVwiOkcoXCJyZXNldFwiLGcpO0coXCJzdWJtaXRcIixnKTtkPWU7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsZyk7ZD1lO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOkNjKGcsZSk7ZD1CYyhnLGUpO0coXCJpbnZhbGlkXCIsZyk7RmUobixcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpkPWxlKGcsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmcuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFlLm11bHRpcGxlfTtkPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7RyhcImludmFsaWRcIixnKTtGZShuLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6b2UoZyxcbmUpO2Q9bmUoZyxlKTtHKFwiaW52YWxpZFwiLGcpO0ZlKG4sXCJvbkNoYW5nZVwiKTticmVhaztkZWZhdWx0OmQ9ZX1EZShmLGQpO2s9dm9pZCAwO2w9ZjtoPWc7dmFyIHg9ZDtmb3IoayBpbiB4KWlmKHguaGFzT3duUHJvcGVydHkoaykpe3ZhciB2PXhba107XCJzdHlsZVwiPT09az9BZShoLHYpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWs/KHY9dj92Ll9faHRtbDp2b2lkIDAsbnVsbCE9diYmdmUoaCx2KSk6XCJjaGlsZHJlblwiPT09az9cInN0cmluZ1wiPT09dHlwZW9mIHY/KFwidGV4dGFyZWFcIiE9PWx8fFwiXCIhPT12KSYmd2UoaCx2KTpcIm51bWJlclwiPT09dHlwZW9mIHYmJndlKGgsXCJcIit2KTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ayYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWsmJlwiYXV0b0ZvY3VzXCIhPT1rJiYoaWEuaGFzT3duUHJvcGVydHkoayk/bnVsbCE9diYmRmUobixrKTpudWxsIT12JiZ6YyhoLGssdix6KSl9c3dpdGNoKGYpe2Nhc2UgXCJpbnB1dFwiOlZiKGcpO1xuR2MoZyxlLCExKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYihnKTtxZShnLGUpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1lLnZhbHVlJiZnLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitBYyhlLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQ9ZztnPWU7ZC5tdWx0aXBsZT0hIWcubXVsdGlwbGU7az1nLnZhbHVlO251bGwhPWs/bWUoZCwhIWcubXVsdGlwbGUsaywhMSk6bnVsbCE9Zy5kZWZhdWx0VmFsdWUmJm1lKGQsISFnLm11bHRpcGxlLGcuZGVmYXVsdFZhbHVlLCEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihnLm9uY2xpY2s9R2UpfUplKGYsZSkmJlNoKGIpO2Iuc3RhdGVOb2RlPWN9bnVsbCE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCl9ZWxzZSBpZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgdChFcnJvcigxNjYpKTticmVhaztjYXNlIDY6aWYoYyYmbnVsbCE9Yi5zdGF0ZU5vZGUpV2goYyxiLGMubWVtb2l6ZWRQcm9wcyxcbmUpO2Vsc2V7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBlJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgdChFcnJvcigxNjYpKTtjPXpnKHlnLmN1cnJlbnQpO3pnKHdnLmN1cnJlbnQpO0JoKGIpPyhkPWIuc3RhdGVOb2RlLGM9Yi5tZW1vaXplZFByb3BzLGRbRmFdPWIsZC5ub2RlVmFsdWUhPT1jJiZTaChiKSk6KGQ9YixjPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZSksY1tGYV09YixkLnN0YXRlTm9kZT1jKX1icmVhaztjYXNlIDExOmJyZWFrO2Nhc2UgMTM6SChQLGIpO2U9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5lZmZlY3RUYWcmNjQpKXtiLmV4cGlyYXRpb25UaW1lPWQ7YnJlYWsgYX1kPW51bGwhPT1lO2U9ITE7bnVsbD09PWM/QmgoYik6KGY9Yy5tZW1vaXplZFN0YXRlLGU9bnVsbCE9PWYsZHx8bnVsbD09PWZ8fChmPWMuY2hpbGQuc2libGluZyxudWxsIT09ZiYmKGc9Yi5maXJzdEVmZmVjdCxudWxsIT09Zz8oYi5maXJzdEVmZmVjdD1cbmYsZi5uZXh0RWZmZWN0PWcpOihiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1mLGYubmV4dEVmZmVjdD1udWxsKSxmLmVmZmVjdFRhZz04KSkpO2lmKGQmJiFlJiYwIT09KGIubW9kZSYyKSlpZihudWxsPT09YyYmITAhPT1iLm1lbW9pemVkUHJvcHMudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fDAhPT0oUC5jdXJyZW50JkZnKSlYPT09RWkmJihYPUdpKTtlbHNlIGlmKFg9PT1FaXx8WD09PUdpKVg9SGk7aWYoZHx8ZSliLmVmZmVjdFRhZ3w9NDticmVhaztjYXNlIDc6YnJlYWs7Y2FzZSA4OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSA0OkJnKGIpO1VoKGIpO2JyZWFrO2Nhc2UgMTA6SWYoYik7YnJlYWs7Y2FzZSA5OmJyZWFrO2Nhc2UgMTQ6YnJlYWs7Y2FzZSAxNzpOKGIudHlwZSkmJlRlKGIpO2JyZWFrO2Nhc2UgMTg6YnJlYWs7Y2FzZSAxOTpIKFAsYik7ZT1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWUpYnJlYWs7Zj0wIT09KGIuZWZmZWN0VGFnJjY0KTtnPWUucmVuZGVyaW5nO1xuaWYobnVsbD09PWcpaWYoZikkaChlLCExKTtlbHNle2lmKFghPT1FaXx8bnVsbCE9PWMmJjAhPT0oYy5lZmZlY3RUYWcmNjQpKWZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KXtnPUhnKGMpO2lmKG51bGwhPT1nKXtiLmVmZmVjdFRhZ3w9NjQ7JGgoZSwhMSk7Yz1nLnVwZGF0ZVF1ZXVlO251bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZWZmZWN0VGFnfD00KTtiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWU9YyxmPWQsZS5lZmZlY3RUYWcmPTIsZS5uZXh0RWZmZWN0PW51bGwsZS5maXJzdEVmZmVjdD1udWxsLGUubGFzdEVmZmVjdD1udWxsLGc9ZS5hbHRlcm5hdGUsbnVsbD09PWc/KGUuY2hpbGRFeHBpcmF0aW9uVGltZT0wLGUuZXhwaXJhdGlvblRpbWU9ZixlLmNoaWxkPW51bGwsZS5tZW1vaXplZFByb3BzPW51bGwsZS5tZW1vaXplZFN0YXRlPW51bGwsZS51cGRhdGVRdWV1ZT1udWxsLGUuZGVwZW5kZW5jaWVzPW51bGwpOihlLmNoaWxkRXhwaXJhdGlvblRpbWU9XG5nLmNoaWxkRXhwaXJhdGlvblRpbWUsZS5leHBpcmF0aW9uVGltZT1nLmV4cGlyYXRpb25UaW1lLGUuY2hpbGQ9Zy5jaGlsZCxlLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGUubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZS51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGY9Zy5kZXBlbmRlbmNpZXMsZS5kZXBlbmRlbmNpZXM9bnVsbD09PWY/bnVsbDp7ZXhwaXJhdGlvblRpbWU6Zi5leHBpcmF0aW9uVGltZSxmaXJzdENvbnRleHQ6Zi5maXJzdENvbnRleHQscmVzcG9uZGVyczpmLnJlc3BvbmRlcnN9KSxjPWMuc2libGluZztKKFAsUC5jdXJyZW50JkVnfEdnLGIpO2I9Yi5jaGlsZDticmVhayBhfWM9Yy5zaWJsaW5nfX1lbHNle2lmKCFmKWlmKGM9SGcoZyksbnVsbCE9PWMpe2lmKGIuZWZmZWN0VGFnfD02NCxmPSEwLCRoKGUsITApLG51bGw9PT1lLnRhaWwmJlwiaGlkZGVuXCI9PT1lLnRhaWxNb2RlKXtkPWMudXBkYXRlUXVldWU7bnVsbCE9PWQmJihiLnVwZGF0ZVF1ZXVlPVxuZCxiLmVmZmVjdFRhZ3w9NCk7Yj1iLmxhc3RFZmZlY3Q9ZS5sYXN0RWZmZWN0O251bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpO2JyZWFrfX1lbHNlIHNmKCk+ZS50YWlsRXhwaXJhdGlvbiYmMTxkJiYoYi5lZmZlY3RUYWd8PTY0LGY9ITAsJGgoZSwhMSksYi5leHBpcmF0aW9uVGltZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU9ZC0xKTtlLmlzQmFja3dhcmRzPyhnLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWcpOihkPWUubGFzdCxudWxsIT09ZD9kLnNpYmxpbmc9ZzpiLmNoaWxkPWcsZS5sYXN0PWcpfWlmKG51bGwhPT1lLnRhaWwpezA9PT1lLnRhaWxFeHBpcmF0aW9uJiYoZS50YWlsRXhwaXJhdGlvbj1zZigpKzUwMCk7ZD1lLnRhaWw7ZS5yZW5kZXJpbmc9ZDtlLnRhaWw9ZC5zaWJsaW5nO2UubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3Q7ZC5zaWJsaW5nPW51bGw7Yz1QLmN1cnJlbnQ7Yz1mP2MmRWd8R2c6YyZFZztKKFAsYyxiKTtiPWQ7YnJlYWsgYX1icmVhaztjYXNlIDIwOmJyZWFrO1xuZGVmYXVsdDp0aHJvdyB0KEVycm9yKDE1NikpO31iPW51bGx9ZD1WO2lmKDE9PT1XfHwxIT09ZC5jaGlsZEV4cGlyYXRpb25UaW1lKXtjPTA7Zm9yKGU9ZC5jaGlsZDtudWxsIT09ZTspZj1lLmV4cGlyYXRpb25UaW1lLGc9ZS5jaGlsZEV4cGlyYXRpb25UaW1lLGY+YyYmKGM9ZiksZz5jJiYoYz1nKSxlPWUuc2libGluZztkLmNoaWxkRXhwaXJhdGlvblRpbWU9Y31pZihudWxsIT09YilyZXR1cm4gYjtudWxsIT09YSYmMD09PShhLmVmZmVjdFRhZyYxMDI0KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1WLmZpcnN0RWZmZWN0KSxudWxsIT09Vi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PVYuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1WLmxhc3RFZmZlY3QpLDE8Vi5lZmZlY3RUYWcmJihudWxsIT09YS5sYXN0RWZmZWN0P2EubGFzdEVmZmVjdC5uZXh0RWZmZWN0PVY6YS5maXJzdEVmZmVjdD1WLFxuYS5sYXN0RWZmZWN0PVYpKX1lbHNle2I9YWkoVixXKTtpZihudWxsIT09YilyZXR1cm4gYi5lZmZlY3RUYWcmPTEwMjMsYjtudWxsIT09YSYmKGEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PW51bGwsYS5lZmZlY3RUYWd8PTEwMjQpfWI9Vi5zaWJsaW5nO2lmKG51bGwhPT1iKXJldHVybiBiO1Y9YX13aGlsZShudWxsIT09Vik7WD09PUVpJiYoWD1JaSk7cmV0dXJuIG51bGx9ZnVuY3Rpb24gaWooYSl7dmFyIGI9dGYoKTt2Zig5OSxuai5iaW5kKG51bGwsYSxiKSk7bnVsbCE9PVFpJiZ3Zig5NyxmdW5jdGlvbigpe2NqKCk7cmV0dXJuIG51bGx9KTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIG5qKGEsYil7Y2ooKTtpZigoVSYoQ2l8RGkpKSE9PVQpdGhyb3cgdChFcnJvcigzMjcpKTt2YXIgYz1hLmZpbmlzaGVkV29yayxkPWEuZmluaXNoZWRFeHBpcmF0aW9uVGltZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRFeHBpcmF0aW9uVGltZT0wO2lmKGM9PT1hLmN1cnJlbnQpdGhyb3cgdChFcnJvcigxNzcpKTthLmNhbGxiYWNrTm9kZT1udWxsO2EuY2FsbGJhY2tFeHBpcmF0aW9uVGltZT0wO3ZhciBlPWMuZXhwaXJhdGlvblRpbWUsZj1jLmNoaWxkRXhwaXJhdGlvblRpbWU7ZT1mPmU/ZjplO2EuZmlyc3RQZW5kaW5nVGltZT1lO2U8YS5sYXN0UGVuZGluZ1RpbWUmJihhLmxhc3RQZW5kaW5nVGltZT1lKTthPT09SmkmJihWPUppPW51bGwsVz0wKTsxPGMuZWZmZWN0VGFnP251bGwhPT1jLmxhc3RFZmZlY3Q/KGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsZT1jLmZpcnN0RWZmZWN0KTplPWM6ZT1jLmZpcnN0RWZmZWN0O1xuaWYobnVsbCE9PWUpe2Y9VTtVfD1EaTtBaS5jdXJyZW50PW51bGw7SGU9UWQ7dmFyIGg9YWUoKTtpZihiZShoKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gaCl2YXIgZz17c3RhcnQ6aC5zZWxlY3Rpb25TdGFydCxlbmQ6aC5zZWxlY3Rpb25FbmR9O2Vsc2UgYTp7Zz0oZz1oLm93bmVyRG9jdW1lbnQpJiZnLmRlZmF1bHRWaWV3fHx3aW5kb3c7dmFyIGs9Zy5nZXRTZWxlY3Rpb24mJmcuZ2V0U2VsZWN0aW9uKCk7aWYoayYmMCE9PWsucmFuZ2VDb3VudCl7Zz1rLmFuY2hvck5vZGU7dmFyIGw9ay5hbmNob3JPZmZzZXQsbj1rLmZvY3VzTm9kZTtrPWsuZm9jdXNPZmZzZXQ7dHJ5e2cubm9kZVR5cGUsbi5ub2RlVHlwZX1jYXRjaCh6Yil7Zz1udWxsO2JyZWFrIGF9dmFyIHo9MCx4PS0xLHY9LTEscmI9MCxCZT0wLHU9aCx3PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgQzs7KXt1IT09Z3x8MCE9PWwmJjMhPT11Lm5vZGVUeXBlfHwoeD16K2wpO3UhPT1ufHwwIT09ayYmMyE9PXUubm9kZVR5cGV8fFxuKHY9eitrKTszPT09dS5ub2RlVHlwZSYmKHorPXUubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PShDPXUuZmlyc3RDaGlsZCkpYnJlYWs7dz11O3U9Q31mb3IoOzspe2lmKHU9PT1oKWJyZWFrIGI7dz09PWcmJisrcmI9PT1sJiYoeD16KTt3PT09biYmKytCZT09PWsmJih2PXopO2lmKG51bGwhPT0oQz11Lm5leHRTaWJsaW5nKSlicmVhazt1PXc7dz11LnBhcmVudE5vZGV9dT1DfWc9LTE9PT14fHwtMT09PXY/bnVsbDp7c3RhcnQ6eCxlbmQ6dn19ZWxzZSBnPW51bGx9Zz1nfHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBnPW51bGw7SWU9e2ZvY3VzZWRFbGVtOmgsc2VsZWN0aW9uUmFuZ2U6Z307UWQ9ITE7WT1lO2RvIHRyeXtmb3IoO251bGwhPT1ZOyl7aWYoMCE9PShZLmVmZmVjdFRhZyYyNTYpKXt2YXIgST1ZLmFsdGVybmF0ZTtoPVk7c3dpdGNoKGgudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmhpKEpnLElnLGgpO2JyZWFrO2Nhc2UgMTppZihoLmVmZmVjdFRhZyYyNTYmJm51bGwhPT1cbkkpe3ZhciBFPUkubWVtb2l6ZWRQcm9wcyx1YT1JLm1lbW9pemVkU3RhdGUsZ2g9aC5zdGF0ZU5vZGUsb2o9Z2guZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoaC5lbGVtZW50VHlwZT09PWgudHlwZT9FOkFmKGgudHlwZSxFKSx1YSk7Z2guX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9b2p9YnJlYWs7Y2FzZSAzOmNhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6YnJlYWs7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDE2MykpO319WT1ZLm5leHRFZmZlY3R9fWNhdGNoKHpiKXtpZihudWxsPT09WSl0aHJvdyB0KEVycm9yKDMzMCkpO2ZpKFksemIpO1k9WS5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1ZKTtZPWU7ZG8gdHJ5e2ZvcihJPWI7bnVsbCE9PVk7KXt2YXIgQT1ZLmVmZmVjdFRhZztBJjE2JiZ3ZShZLnN0YXRlTm9kZSxcIlwiKTtpZihBJjEyOCl7dmFyIHA9WS5hbHRlcm5hdGU7aWYobnVsbCE9PXApe3ZhciByPXAucmVmO251bGwhPT1yJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHI/XG5yKG51bGwpOnIuY3VycmVudD1udWxsKX19c3dpdGNoKEEmMTQpe2Nhc2UgMjpuaShZKTtZLmVmZmVjdFRhZyY9LTM7YnJlYWs7Y2FzZSA2Om5pKFkpO1kuZWZmZWN0VGFnJj0tMztvaShZLmFsdGVybmF0ZSxZKTticmVhaztjYXNlIDQ6b2koWS5hbHRlcm5hdGUsWSk7YnJlYWs7Y2FzZSA4OkU9WTtraShFLEkpO0UucmV0dXJuPW51bGw7RS5jaGlsZD1udWxsO0UubWVtb2l6ZWRTdGF0ZT1udWxsO0UudXBkYXRlUXVldWU9bnVsbDtFLmRlcGVuZGVuY2llcz1udWxsO3ZhciBLPUUuYWx0ZXJuYXRlO251bGwhPT1LJiYoSy5yZXR1cm49bnVsbCxLLmNoaWxkPW51bGwsSy5tZW1vaXplZFN0YXRlPW51bGwsSy51cGRhdGVRdWV1ZT1udWxsLEsuZGVwZW5kZW5jaWVzPW51bGwpfVk9WS5uZXh0RWZmZWN0fX1jYXRjaCh6Yil7aWYobnVsbD09PVkpdGhyb3cgdChFcnJvcigzMzApKTtmaShZLHpiKTtZPVkubmV4dEVmZmVjdH13aGlsZShudWxsIT09WSk7cj1JZTtwPWFlKCk7QT1yLmZvY3VzZWRFbGVtO1xuST1yLnNlbGVjdGlvblJhbmdlO2lmKHAhPT1BJiZBJiZBLm93bmVyRG9jdW1lbnQmJiRkKEEub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsQSkpe251bGwhPT1JJiZiZShBKSYmKHA9SS5zdGFydCxyPUkuZW5kLHZvaWQgMD09PXImJihyPXApLFwic2VsZWN0aW9uU3RhcnRcImluIEE/KEEuc2VsZWN0aW9uU3RhcnQ9cCxBLnNlbGVjdGlvbkVuZD1NYXRoLm1pbihyLEEudmFsdWUubGVuZ3RoKSk6KHI9KHA9QS5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJnAuZGVmYXVsdFZpZXd8fHdpbmRvdyxyLmdldFNlbGVjdGlvbiYmKHI9ci5nZXRTZWxlY3Rpb24oKSxFPUEudGV4dENvbnRlbnQubGVuZ3RoLEs9TWF0aC5taW4oSS5zdGFydCxFKSxJPXZvaWQgMD09PUkuZW5kP0s6TWF0aC5taW4oSS5lbmQsRSksIXIuZXh0ZW5kJiZLPkkmJihFPUksST1LLEs9RSksRT1aZChBLEspLHVhPVpkKEEsSSksRSYmdWEmJigxIT09ci5yYW5nZUNvdW50fHxyLmFuY2hvck5vZGUhPT1FLm5vZGV8fHIuYW5jaG9yT2Zmc2V0IT09XG5FLm9mZnNldHx8ci5mb2N1c05vZGUhPT11YS5ub2RlfHxyLmZvY3VzT2Zmc2V0IT09dWEub2Zmc2V0KSYmKHA9cC5jcmVhdGVSYW5nZSgpLHAuc2V0U3RhcnQoRS5ub2RlLEUub2Zmc2V0KSxyLnJlbW92ZUFsbFJhbmdlcygpLEs+ST8oci5hZGRSYW5nZShwKSxyLmV4dGVuZCh1YS5ub2RlLHVhLm9mZnNldCkpOihwLnNldEVuZCh1YS5ub2RlLHVhLm9mZnNldCksci5hZGRSYW5nZShwKSkpKSkpO3A9W107Zm9yKHI9QTtyPXIucGFyZW50Tm9kZTspMT09PXIubm9kZVR5cGUmJnAucHVzaCh7ZWxlbWVudDpyLGxlZnQ6ci5zY3JvbGxMZWZ0LHRvcDpyLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBBLmZvY3VzJiZBLmZvY3VzKCk7Zm9yKEE9MDtBPHAubGVuZ3RoO0ErKylyPXBbQV0sci5lbGVtZW50LnNjcm9sbExlZnQ9ci5sZWZ0LHIuZWxlbWVudC5zY3JvbGxUb3A9ci50b3B9SWU9bnVsbDtRZD0hIUhlO0hlPW51bGw7YS5jdXJyZW50PWM7WT1lO2RvIHRyeXtmb3IoQT1kO251bGwhPT1cblk7KXt2YXIgJGE9WS5lZmZlY3RUYWc7aWYoJGEmMzYpe3ZhciBuYz1ZLmFsdGVybmF0ZTtwPVk7cj1BO3N3aXRjaChwLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpoaShNZyxOZyxwKTticmVhaztjYXNlIDE6dmFyIG1kPXAuc3RhdGVOb2RlO2lmKHAuZWZmZWN0VGFnJjQpaWYobnVsbD09PW5jKW1kLmNvbXBvbmVudERpZE1vdW50KCk7ZWxzZXt2YXIgRmo9cC5lbGVtZW50VHlwZT09PXAudHlwZT9uYy5tZW1vaXplZFByb3BzOkFmKHAudHlwZSxuYy5tZW1vaXplZFByb3BzKTttZC5jb21wb25lbnREaWRVcGRhdGUoRmosbmMubWVtb2l6ZWRTdGF0ZSxtZC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9dmFyIFhoPXAudXBkYXRlUXVldWU7bnVsbCE9PVhoJiZZZihwLFhoLG1kLHIpO2JyZWFrO2Nhc2UgMzp2YXIgWWg9cC51cGRhdGVRdWV1ZTtpZihudWxsIT09WWgpe0s9bnVsbDtpZihudWxsIT09cC5jaGlsZClzd2l0Y2gocC5jaGlsZC50YWcpe2Nhc2UgNTpLPVxucC5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOks9cC5jaGlsZC5zdGF0ZU5vZGV9WWYocCxZaCxLLHIpfWJyZWFrO2Nhc2UgNTp2YXIgR2o9cC5zdGF0ZU5vZGU7bnVsbD09PW5jJiZwLmVmZmVjdFRhZyY0JiYocj1HaixKZShwLnR5cGUscC5tZW1vaXplZFByb3BzKSYmci5mb2N1cygpKTticmVhaztjYXNlIDY6YnJlYWs7Y2FzZSA0OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzpjYXNlIDE5OmNhc2UgMTc6Y2FzZSAyMDpicmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMTYzKSk7fX1pZigkYSYxMjgpe3ZhciBuZD1ZLnJlZjtpZihudWxsIT09bmQpe3ZhciBaaD1ZLnN0YXRlTm9kZTtzd2l0Y2goWS50YWcpe2Nhc2UgNTp2YXIgZ2Y9Wmg7YnJlYWs7ZGVmYXVsdDpnZj1aaH1cImZ1bmN0aW9uXCI9PT10eXBlb2YgbmQ/bmQoZ2YpOm5kLmN1cnJlbnQ9Z2Z9fSRhJjUxMiYmKFBpPSEwKTtZPVkubmV4dEVmZmVjdH19Y2F0Y2goemIpe2lmKG51bGw9PT1ZKXRocm93IHQoRXJyb3IoMzMwKSk7XG5maShZLHpiKTtZPVkubmV4dEVmZmVjdH13aGlsZShudWxsIT09WSk7WT1udWxsO25mKCk7VT1mfWVsc2UgYS5jdXJyZW50PWM7aWYoUGkpUGk9ITEsUWk9YSxTaT1kLFJpPWI7ZWxzZSBmb3IoWT1lO251bGwhPT1ZOyliPVkubmV4dEVmZmVjdCxZLm5leHRFZmZlY3Q9bnVsbCxZPWI7Yj1hLmZpcnN0UGVuZGluZ1RpbWU7MCE9PWI/KCRhPWNnKCksJGE9emYoJGEsYiksWmkoYSwkYSxiKSk6eGk9bnVsbDtcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGomJnBqKGMuc3RhdGVOb2RlLGQpOzEwNzM3NDE4MjM9PT1iP2E9PT1WaT9VaSsrOihVaT0wLFZpPWEpOlVpPTA7aWYodWkpdGhyb3cgdWk9ITEsYT12aSx2aT1udWxsLGE7aWYoKFUmQmkpIT09VClyZXR1cm4gbnVsbDtPKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBjaigpe2lmKG51bGw9PT1RaSlyZXR1cm4hMTt2YXIgYT1RaSxiPVNpLGM9Umk7UWk9bnVsbDtTaT0wO1JpPTkwO3JldHVybiB2Zig5NzxjPzk3OmMscWouYmluZChudWxsLGEsYikpfWZ1bmN0aW9uIHFqKGEpe2lmKChVJihDaXxEaSkpIT09VCl0aHJvdyB0KEVycm9yKDMzMSkpO3ZhciBiPVU7VXw9RGk7Zm9yKGE9YS5jdXJyZW50LmZpcnN0RWZmZWN0O251bGwhPT1hOyl7dHJ5e3ZhciBjPWE7aWYoMCE9PShjLmVmZmVjdFRhZyY1MTIpKXN3aXRjaChjLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpoaShQZyxJZyxjKSxoaShJZyxPZyxjKX19Y2F0Y2goZCl7aWYobnVsbD09PWEpdGhyb3cgdChFcnJvcigzMzApKTtmaShhLGQpfWM9YS5uZXh0RWZmZWN0O2EubmV4dEVmZmVjdD1udWxsO2E9Y31VPWI7TygpO3JldHVybiEwfVxuZnVuY3Rpb24gcmooYSxiLGMpe2I9YmkoYyxiKTtiPXRpKGEsYiwxMDczNzQxODIzKTtTZihhLGIpO2E9WWkoYSwxMDczNzQxODIzKTtudWxsIT09YSYmWmkoYSw5OSwxMDczNzQxODIzKX1mdW5jdGlvbiBmaShhLGIpe2lmKDM9PT1hLnRhZylyaihhLGEsYik7ZWxzZSBmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtpZigzPT09Yy50YWcpe3JqKGMsYSxiKTticmVha31lbHNlIGlmKDE9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PXhpfHwheGkuaGFzKGQpKSl7YT1iaShiLGEpO2E9d2koYyxhLDEwNzM3NDE4MjMpO1NmKGMsYSk7Yz1ZaShjLDEwNzM3NDE4MjMpO251bGwhPT1jJiZaaShjLDk5LDEwNzM3NDE4MjMpO2JyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIGtqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Smk9PT1hJiZXPT09Yz9YPT09SGl8fFg9PT1HaSYmMTA3Mzc0MTgyMz09PUtpJiZzZigpLXBpPE9pP2hqKGEsVyk6Tmk9ITA6YS5sYXN0UGVuZGluZ1RpbWU8Y3x8KGI9YS5waW5nVGltZSwwIT09YiYmYjxjfHwoYS5waW5nVGltZT1jLGEuZmluaXNoZWRFeHBpcmF0aW9uVGltZT09PWMmJihhLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MCxhLmZpbmlzaGVkV29yaz1udWxsKSxiPWNnKCksYj16ZihiLGMpLFppKGEsYixjKSkpfWZ1bmN0aW9uIHJpKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2M9Y2coKTtiPWRnKGMsYSxudWxsKTtjPXpmKGMsYik7YT1ZaShhLGIpO251bGwhPT1hJiZaaShhLGMsYil9dmFyIG1qPXZvaWQgMDtcbm1qPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmV4cGlyYXRpb25UaW1lO2lmKG51bGwhPT1hKXt2YXIgZT1iLnBlbmRpbmdQcm9wcztpZihhLm1lbW9pemVkUHJvcHMhPT1lfHxNLmN1cnJlbnQpTGY9ITA7ZWxzZSBpZihkPGMpe0xmPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOk5oKGIpO0NoKCk7YnJlYWs7Y2FzZSA1OkNnKGIpO2lmKGIubW9kZSY0JiYxIT09YyYmZS5oaWRkZW4pcmV0dXJuIGIuZXhwaXJhdGlvblRpbWU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPTEsbnVsbDticmVhaztjYXNlIDE6TihiLnR5cGUpJiZYZShiKTticmVhaztjYXNlIDQ6QWcoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOkhmKGIsYi5tZW1vaXplZFByb3BzLnZhbHVlKTticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2Q9Yi5jaGlsZC5jaGlsZEV4cGlyYXRpb25UaW1lO2lmKDAhPT1kJiZkPj1jKXJldHVybiBQaChhLGIsYyk7SihQLFAuY3VycmVudCZcbkVnLGIpO2I9RmgoYSxiLGMpO3JldHVybiBudWxsIT09Yj9iLnNpYmxpbmc6bnVsbH1KKFAsUC5jdXJyZW50JkVnLGIpO2JyZWFrO2Nhc2UgMTk6ZD1iLmNoaWxkRXhwaXJhdGlvblRpbWU+PWM7aWYoMCE9PShhLmVmZmVjdFRhZyY2NCkpe2lmKGQpcmV0dXJuIFJoKGEsYixjKTtiLmVmZmVjdFRhZ3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsKTtKKFAsUC5jdXJyZW50LGIpO2lmKCFkKXJldHVybiBudWxsfXJldHVybiBGaChhLGIsYyl9fWVsc2UgTGY9ITE7Yi5leHBpcmF0aW9uVGltZT0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmQ9Yi50eXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKTthPWIucGVuZGluZ1Byb3BzO2U9U2UoYixMLmN1cnJlbnQpO0tmKGIsYyk7ZT1kaChudWxsLGIsZCxhLGUsYyk7Yi5lZmZlY3RUYWd8PTE7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBlJiZcbm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7aWgoKTtpZihOKGQpKXt2YXIgZj0hMDtYZShiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt2YXIgaD1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgaCYmYmcoYixkLGgsYSk7ZS51cGRhdGVyPWZnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbEZpYmVyPWI7amcoYixkLGEsYyk7Yj1NaChudWxsLGIsZCwhMCxmLGMpfWVsc2UgYi50YWc9MCxTKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUJmKGUpO2IudHlwZT1lO2Y9Yi50YWc9c2ooZSk7XG5hPUFmKGUsYSk7c3dpdGNoKGYpe2Nhc2UgMDpiPUpoKG51bGwsYixlLGEsYyk7YnJlYWs7Y2FzZSAxOmI9TGgobnVsbCxiLGUsYSxjKTticmVhaztjYXNlIDExOmI9RWgobnVsbCxiLGUsYSxjKTticmVhaztjYXNlIDE0OmI9R2gobnVsbCxiLGUsQWYoZS50eXBlLGEpLGQsYyk7YnJlYWs7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDMwNiksZSxcIlwiKTt9cmV0dXJuIGI7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpBZihkLGUpLEpoKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpBZihkLGUpLExoKGEsYixkLGUsYyk7Y2FzZSAzOk5oKGIpO2Q9Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09ZCl0aHJvdyB0KEVycm9yKDI4MikpO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7V2YoYixkLGIucGVuZGluZ1Byb3BzLFxubnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKUNoKCksYj1GaChhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGU9KG51bGw9PT1hfHxudWxsPT09YS5jaGlsZCkmJmUuaHlkcmF0ZSl1aD1OZShiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLHRoPWIsZT12aD0hMDtlPyhiLmVmZmVjdFRhZ3w9MixiLmNoaWxkPXVnKGIsbnVsbCxkLGMpKTooUyhhLGIsZCxjKSxDaCgpKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBDZyhiKSxudWxsPT09YSYmemgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGg9ZS5jaGlsZHJlbixLZShkLGUpP2g9bnVsbDpudWxsIT09ZiYmS2UoZCxmKSYmKGIuZWZmZWN0VGFnfD0xNiksS2goYSxiKSxiLm1vZGUmNCYmMSE9PWMmJmUuaGlkZGVuPyhiLmV4cGlyYXRpb25UaW1lPWIuY2hpbGRFeHBpcmF0aW9uVGltZT0xLGI9bnVsbCk6XG4oUyhhLGIsaCxjKSxiPWIuY2hpbGQpLGI7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmemgoYiksbnVsbDtjYXNlIDEzOnJldHVybiBQaChhLGIsYyk7Y2FzZSA0OnJldHVybiBBZyhiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD10ZyhiLG51bGwsZCxjKTpTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6QWYoZCxlKSxFaChhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7aD1iLm1lbW9pemVkUHJvcHM7XG5mPWUudmFsdWU7SGYoYixmKTtpZihudWxsIT09aCl7dmFyIGc9aC52YWx1ZTtmPWhkKGcsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGcsZik6MTA3Mzc0MTgyMyl8MDtpZigwPT09Zil7aWYoaC5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFNLmN1cnJlbnQpe2I9RmgoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGc9Yi5jaGlsZCxudWxsIT09ZyYmKGcucmV0dXJuPWIpO251bGwhPT1nOyl7dmFyIGs9Zy5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWspe2g9Zy5jaGlsZDtmb3IodmFyIGw9ay5maXJzdENvbnRleHQ7bnVsbCE9PWw7KXtpZihsLmNvbnRleHQ9PT1kJiYwIT09KGwub2JzZXJ2ZWRCaXRzJmYpKXsxPT09Zy50YWcmJihsPVFmKGMsbnVsbCksbC50YWc9MixTZihnLGwpKTtnLmV4cGlyYXRpb25UaW1lPGMmJihnLmV4cGlyYXRpb25UaW1lPWMpO2w9Zy5hbHRlcm5hdGU7bnVsbCE9PWwmJmwuZXhwaXJhdGlvblRpbWU8XG5jJiYobC5leHBpcmF0aW9uVGltZT1jKTtKZihnLnJldHVybixjKTtrLmV4cGlyYXRpb25UaW1lPGMmJihrLmV4cGlyYXRpb25UaW1lPWMpO2JyZWFrfWw9bC5uZXh0fX1lbHNlIGg9MTA9PT1nLnRhZz9nLnR5cGU9PT1iLnR5cGU/bnVsbDpnLmNoaWxkOmcuY2hpbGQ7aWYobnVsbCE9PWgpaC5yZXR1cm49ZztlbHNlIGZvcihoPWc7bnVsbCE9PWg7KXtpZihoPT09Yil7aD1udWxsO2JyZWFrfWc9aC5zaWJsaW5nO2lmKG51bGwhPT1nKXtnLnJldHVybj1oLnJldHVybjtoPWc7YnJlYWt9aD1oLnJldHVybn1nPWh9fVMoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sS2YoYixjKSxlPU1mKGUsZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmVmZmVjdFRhZ3w9MSxTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1BZihlLGIucGVuZGluZ1Byb3BzKSxcbmY9QWYoZS50eXBlLGYpLEdoKGEsYixlLGYsZCxjKTtjYXNlIDE1OnJldHVybiBJaChhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGQsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6QWYoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9MiksYi50YWc9MSxOKGQpPyhhPSEwLFhlKGIpKTphPSExLEtmKGIsYyksaGcoYixkLGUsYyksamcoYixkLGUsYyksTWgobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBSaChhLGIsYyl9dGhyb3cgdChFcnJvcigxNTYpKTt9O3ZhciBwaj1udWxsLGppPW51bGw7XG5mdW5jdGlvbiB0aihhKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXylyZXR1cm4hMTt2YXIgYj1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoYi5pc0Rpc2FibGVkfHwhYi5zdXBwb3J0c0ZpYmVyKXJldHVybiEwO3RyeXt2YXIgYz1iLmluamVjdChhKTtwaj1mdW5jdGlvbihhKXt0cnl7Yi5vbkNvbW1pdEZpYmVyUm9vdChjLGEsdm9pZCAwLDY0PT09KGEuY3VycmVudC5lZmZlY3RUYWcmNjQpKX1jYXRjaChlKXt9fTtqaT1mdW5jdGlvbihhKXt0cnl7Yi5vbkNvbW1pdEZpYmVyVW5tb3VudChjLGEpfWNhdGNoKGUpe319fWNhdGNoKGQpe31yZXR1cm4hMH1cbmZ1bmN0aW9uIHVqKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5kZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5lZmZlY3RUYWc9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkRXhwaXJhdGlvblRpbWU9dGhpcy5leHBpcmF0aW9uVGltZT0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24geGgoYSxiLGMsZCl7cmV0dXJuIG5ldyB1aihhLGIsYyxkKX1cbmZ1bmN0aW9uIEhoKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9ZnVuY3Rpb24gc2ooYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIEhoKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1nYylyZXR1cm4gMTE7aWYoYT09PWpjKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIG9nKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9eGgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy5lZmZlY3RUYWc9MCxjLm5leHRFZmZlY3Q9bnVsbCxjLmZpcnN0RWZmZWN0PW51bGwsYy5sYXN0RWZmZWN0PW51bGwpO2MuY2hpbGRFeHBpcmF0aW9uVGltZT1hLmNoaWxkRXhwaXJhdGlvblRpbWU7Yy5leHBpcmF0aW9uVGltZT1hLmV4cGlyYXRpb25UaW1lO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2I9YS5kZXBlbmRlbmNpZXM7Yy5kZXBlbmRlbmNpZXM9bnVsbD09PWI/bnVsbDp7ZXhwaXJhdGlvblRpbWU6Yi5leHBpcmF0aW9uVGltZSxcbmZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dCxyZXNwb25kZXJzOmIucmVzcG9uZGVyc307Yy5zaWJsaW5nPWEuc2libGluZztjLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBxZyhhLGIsYyxkLGUsZil7dmFyIGg9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpSGgoYSkmJihoPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWg9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgYWM6cmV0dXJuIHNnKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgZmM6aD04O2V8PTc7YnJlYWs7Y2FzZSBiYzpoPTg7ZXw9MTticmVhaztjYXNlIGNjOnJldHVybiBhPXhoKDEyLGMsYixlfDgpLGEuZWxlbWVudFR5cGU9Y2MsYS50eXBlPWNjLGEuZXhwaXJhdGlvblRpbWU9ZixhO2Nhc2UgaGM6cmV0dXJuIGE9eGgoMTMsYyxiLGUpLGEudHlwZT1oYyxhLmVsZW1lbnRUeXBlPWhjLGEuZXhwaXJhdGlvblRpbWU9ZixhO2Nhc2UgaWM6cmV0dXJuIGE9eGgoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9aWMsYS5leHBpcmF0aW9uVGltZT1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGRjOmg9XG4xMDticmVhayBhO2Nhc2UgZWM6aD05O2JyZWFrIGE7Y2FzZSBnYzpoPTExO2JyZWFrIGE7Y2FzZSBqYzpoPTE0O2JyZWFrIGE7Y2FzZSBrYzpoPTE2O2Q9bnVsbDticmVhayBhfXRocm93IHQoRXJyb3IoMTMwKSxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIik7fWI9eGgoaCxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IuZXhwaXJhdGlvblRpbWU9ZjtyZXR1cm4gYn1mdW5jdGlvbiBzZyhhLGIsYyxkKXthPXhoKDcsYSxkLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1mdW5jdGlvbiBwZyhhLGIsYyl7YT14aCg2LGEsbnVsbCxiKTthLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiByZyhhLGIsYyl7Yj14aCg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5leHBpcmF0aW9uVGltZT1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHZqKGEsYixjKXt0aGlzLnRhZz1iO3RoaXMuY3VycmVudD1udWxsO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMucGluZ0NhY2hlPXRoaXMucGVuZGluZ0NoaWxkcmVuPW51bGw7dGhpcy5maW5pc2hlZEV4cGlyYXRpb25UaW1lPTA7dGhpcy5maW5pc2hlZFdvcms9bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT10aGlzLmZpcnN0QmF0Y2g9bnVsbDt0aGlzLnBpbmdUaW1lPXRoaXMubGFzdFBlbmRpbmdUaW1lPXRoaXMuZmlyc3RQZW5kaW5nVGltZT10aGlzLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9MH1mdW5jdGlvbiB3aihhLGIsYyl7YT1uZXcgdmooYSxiLGMpO2I9eGgoMyxudWxsLG51bGwsMj09PWI/NzoxPT09Yj8zOjApO2EuY3VycmVudD1iO3JldHVybiBiLnN0YXRlTm9kZT1hfVxuZnVuY3Rpb24geGooYSxiLGMsZCxlLGYpe3ZhciBoPWIuY3VycmVudDthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbEZpYmVyO2I6e2lmKDIhPT1sZChjKXx8MSE9PWMudGFnKXRocm93IHQoRXJyb3IoMTcwKSk7dmFyIGc9Yztkb3tzd2l0Y2goZy50YWcpe2Nhc2UgMzpnPWcuc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoTihnLnR5cGUpKXtnPWcuc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWc9Zy5yZXR1cm59d2hpbGUobnVsbCE9PWcpO3Rocm93IHQoRXJyb3IoMTcxKSk7fWlmKDE9PT1jLnRhZyl7dmFyIGs9Yy50eXBlO2lmKE4oaykpe2M9V2UoYyxrLGcpO2JyZWFrIGF9fWM9Z31lbHNlIGM9UWU7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1mO2U9UWYoZCxlKTtlLnBheWxvYWQ9e2VsZW1lbnQ6YX07Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmXG4oZS5jYWxsYmFjaz1iKTtTZihoLGUpO2VnKGgsZCk7cmV0dXJuIGR9ZnVuY3Rpb24geWooYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9Y2coKSxoPSRmLnN1c3BlbnNlO2U9ZGcoZixlLGgpO3JldHVybiB4aihhLGIsYyxlLGgsZCl9ZnVuY3Rpb24gemooYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBBaihhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOiRiLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuRGI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjpFYyhhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9S2EoZCk7aWYoIWUpdGhyb3cgdChFcnJvcig5MCkpO1diKGQpO0VjKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjpwZShhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmbWUoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtcbmZ1bmN0aW9uIEJqKGEpe3ZhciBiPTEwNzM3NDE4MjEtMjUqKCgoMTA3Mzc0MTgyMS1jZygpKzUwMCkvMjV8MCkrMSk7Yjw9WGkmJi0tYjt0aGlzLl9leHBpcmF0aW9uVGltZT1YaT1iO3RoaXMuX3Jvb3Q9YTt0aGlzLl9jYWxsYmFja3M9dGhpcy5fbmV4dD1udWxsO3RoaXMuX2hhc0NoaWxkcmVuPXRoaXMuX2RpZENvbXBsZXRlPSExO3RoaXMuX2NoaWxkcmVuPW51bGw7dGhpcy5fZGVmZXI9ITB9QmoucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtpZighdGhpcy5fZGVmZXIpdGhyb3cgdChFcnJvcigyNTApKTt0aGlzLl9oYXNDaGlsZHJlbj0hMDt0aGlzLl9jaGlsZHJlbj1hO3ZhciBiPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxjPXRoaXMuX2V4cGlyYXRpb25UaW1lLGQ9bmV3IENqO3hqKGEsYixudWxsLGMsbnVsbCxkLl9vbkNvbW1pdCk7cmV0dXJuIGR9O1xuQmoucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tcGxldGUpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuQmoucHJvdG90eXBlLmNvbW1pdD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxiPWEuZmlyc3RCYXRjaDtpZighdGhpcy5fZGVmZXJ8fG51bGw9PT1iKXRocm93IHQoRXJyb3IoMjUxKSk7aWYodGhpcy5faGFzQ2hpbGRyZW4pe3ZhciBjPXRoaXMuX2V4cGlyYXRpb25UaW1lO2lmKGIhPT10aGlzKXt0aGlzLl9oYXNDaGlsZHJlbiYmKGM9dGhpcy5fZXhwaXJhdGlvblRpbWU9Yi5fZXhwaXJhdGlvblRpbWUsdGhpcy5yZW5kZXIodGhpcy5fY2hpbGRyZW4pKTtmb3IodmFyIGQ9bnVsbCxlPWI7ZSE9PXRoaXM7KWQ9ZSxlPWUuX25leHQ7aWYobnVsbD09PWQpdGhyb3cgdChFcnJvcigyNTEpKTtkLl9uZXh0PWUuX25leHQ7dGhpcy5fbmV4dD1iO2EuZmlyc3RCYXRjaD10aGlzfXRoaXMuX2RlZmVyPSExO2I9YztpZigoVSYoQ2l8RGkpKSE9PVQpdGhyb3cgdChFcnJvcigyNTMpKTt4ZihaLmJpbmQobnVsbCxhLGIpKTtPKCk7Yj10aGlzLl9uZXh0O3RoaXMuX25leHQ9XG5udWxsO2I9YS5maXJzdEJhdGNoPWI7bnVsbCE9PWImJmIuX2hhc0NoaWxkcmVuJiZiLnJlbmRlcihiLl9jaGlsZHJlbil9ZWxzZSB0aGlzLl9uZXh0PW51bGwsdGhpcy5fZGVmZXI9ITF9O0JqLnByb3RvdHlwZS5fb25Db21wbGV0ZT1mdW5jdGlvbigpe2lmKCF0aGlzLl9kaWRDb21wbGV0ZSl7dGhpcy5fZGlkQ29tcGxldGU9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKSgwLGFbYl0pKCl9fTtmdW5jdGlvbiBDaigpe3RoaXMuX2NhbGxiYWNrcz1udWxsO3RoaXMuX2RpZENvbW1pdD0hMTt0aGlzLl9vbkNvbW1pdD10aGlzLl9vbkNvbW1pdC5iaW5kKHRoaXMpfUNqLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEpe2lmKHRoaXMuX2RpZENvbW1pdClhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5Dai5wcm90b3R5cGUuX29uQ29tbWl0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbW1pdCl7dGhpcy5fZGlkQ29tbWl0PSEwO3ZhciBhPXRoaXMuX2NhbGxiYWNrcztpZihudWxsIT09YSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYyl0aHJvdyB0KEVycm9yKDE5MSksYyk7YygpfX19O2Z1bmN0aW9uIERqKGEsYixjKXt0aGlzLl9pbnRlcm5hbFJvb3Q9d2ooYSxiLGMpfWZ1bmN0aW9uIEVqKGEsYil7dGhpcy5faW50ZXJuYWxSb290PXdqKGEsMixiKX1Fai5wcm90b3R5cGUucmVuZGVyPURqLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1uZXcgQ2o7Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmZC50aGVuKGIpO3lqKGEsYyxudWxsLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07XG5Fai5wcm90b3R5cGUudW5tb3VudD1Eai5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pbnRlcm5hbFJvb3QsYz1uZXcgQ2o7YT12b2lkIDA9PT1hP251bGw6YTtudWxsIT09YSYmYy50aGVuKGEpO3lqKG51bGwsYixudWxsLGMuX29uQ29tbWl0KTtyZXR1cm4gY307RWoucHJvdG90eXBlLmNyZWF0ZUJhdGNoPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IEJqKHRoaXMpLGI9YS5fZXhwaXJhdGlvblRpbWUsYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1jLmZpcnN0QmF0Y2g7aWYobnVsbD09PWQpYy5maXJzdEJhdGNoPWEsYS5fbmV4dD1udWxsO2Vsc2V7Zm9yKGM9bnVsbDtudWxsIT09ZCYmZC5fZXhwaXJhdGlvblRpbWU+PWI7KWM9ZCxkPWQuX25leHQ7YS5fbmV4dD1kO251bGwhPT1jJiYoYy5fbmV4dD1hKX1yZXR1cm4gYX07XG5mdW5jdGlvbiBIaihhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9SmI9ZWo7S2I9Zmo7TGI9YWo7TWI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1VO1V8PTI7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7VT1jLFU9PT1UJiZPKCl9fTtmdW5jdGlvbiBJaihhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IERqKGEsMCxiKX1cbmZ1bmN0aW9uIEpqKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyLGg9dm9pZCAwO2lmKGYpe2g9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgZz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT16aihoKTtnLmNhbGwoYSl9fXlqKGIsaCxhLGUpfWVsc2V7Zj1jLl9yZWFjdFJvb3RDb250YWluZXI9SWooYyxkKTtoPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGs9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9emooaCk7ay5jYWxsKGEpfX1naihmdW5jdGlvbigpe3lqKGIsaCxhLGUpfSl9cmV0dXJuIHpqKGgpfWZ1bmN0aW9uIEtqKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIUhqKGIpKXRocm93IHQoRXJyb3IoMjAwKSk7cmV0dXJuIEFqKGEsYixudWxsLGMpfVxudmFyIE5qPXtjcmVhdGVQb3J0YWw6S2osZmluZERPTU5vZGU6ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlhPW51bGw7ZWxzZSBpZigxIT09YS5ub2RlVHlwZSl7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyB0KEVycm9yKDE4OCkpO3Rocm93IHQoRXJyb3IoMjY4KSxPYmplY3Qua2V5cyhhKSk7fWE9cWQoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfXJldHVybiBhfSxoeWRyYXRlOmZ1bmN0aW9uKGEsYixjKXtpZighSGooYikpdGhyb3cgdChFcnJvcigyMDApKTtyZXR1cm4gSmoobnVsbCxhLGIsITAsYyl9LHJlbmRlcjpmdW5jdGlvbihhLGIsYyl7aWYoIUhqKGIpKXRocm93IHQoRXJyb3IoMjAwKSk7cmV0dXJuIEpqKG51bGwsYSxiLCExLGMpfSx1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjpmdW5jdGlvbihhLGIsYyxkKXtpZighSGooYykpdGhyb3cgdChFcnJvcigyMDApKTtcbmlmKG51bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxGaWJlcil0aHJvdyB0KEVycm9yKDM4KSk7cmV0dXJuIEpqKGEsYixjLCExLGQpfSx1bm1vdW50Q29tcG9uZW50QXROb2RlOmZ1bmN0aW9uKGEpe2lmKCFIaihhKSl0aHJvdyB0KEVycm9yKDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oZ2ooZnVuY3Rpb24oKXtKaihudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsfSl9KSwhMCk6ITF9LHVuc3RhYmxlX2NyZWF0ZVBvcnRhbDpmdW5jdGlvbigpe3JldHVybiBLai5hcHBseSh2b2lkIDAsYXJndW1lbnRzKX0sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6ZWosdW5zdGFibGVfaW50ZXJhY3RpdmVVcGRhdGVzOmZ1bmN0aW9uKGEsYixjLGQpe2FqKCk7cmV0dXJuIGZqKGEsYixjLGQpfSx1bnN0YWJsZV9kaXNjcmV0ZVVwZGF0ZXM6ZmosdW5zdGFibGVfZmx1c2hEaXNjcmV0ZVVwZGF0ZXM6YWosZmx1c2hTeW5jOmZ1bmN0aW9uKGEsXG5iKXtpZigoVSYoQ2l8RGkpKSE9PVQpdGhyb3cgdChFcnJvcigxODcpKTt2YXIgYz1VO1V8PTE7dHJ5e3JldHVybiB2Zig5OSxhLmJpbmQobnVsbCxiKSl9ZmluYWxseXtVPWMsTygpfX0sdW5zdGFibGVfY3JlYXRlUm9vdDpMaix1bnN0YWJsZV9jcmVhdGVTeW5jUm9vdDpNaix1bnN0YWJsZV9mbHVzaENvbnRyb2xsZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9VTtVfD0xO3RyeXt2Zig5OSxhKX1maW5hbGx5e1U9YixVPT09VCYmTygpfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e0V2ZW50czpbSWEsSmEsS2EsQ2EuaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lLGZhLFFhLGZ1bmN0aW9uKGEpe3lhKGEsUGEpfSxIYixJYixVZCxCYSxjaix7Y3VycmVudDohMX1dfX07XG5mdW5jdGlvbiBMaihhLGIpe2lmKCFIaihhKSl0aHJvdyB0KEVycm9yKDI5OSksXCJ1bnN0YWJsZV9jcmVhdGVSb290XCIpO3JldHVybiBuZXcgRWooYSxudWxsIT1iJiYhMD09PWIuaHlkcmF0ZSl9ZnVuY3Rpb24gTWooYSxiKXtpZighSGooYSkpdGhyb3cgdChFcnJvcigyOTkpLFwidW5zdGFibGVfY3JlYXRlUm9vdFwiKTtyZXR1cm4gbmV3IERqKGEsMSxudWxsIT1iJiYhMD09PWIuaHlkcmF0ZSl9XG4oZnVuY3Rpb24oYSl7dmFyIGI9YS5maW5kRmliZXJCeUhvc3RJbnN0YW5jZTtyZXR1cm4gdGoobSh7fSxhLHtvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOlhiLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1xZChhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGI/YihhKTpudWxsfSxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfSkpfSkoe2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOkhhLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTYuOS4wXCIsXG5yZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9KTt2YXIgT2o9e2RlZmF1bHQ6Tmp9LFBqPU9qJiZOanx8T2o7bW9kdWxlLmV4cG9ydHM9UGouZGVmYXVsdHx8UGo7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjE1LjBcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZD12b2lkIDAsZT12b2lkIDAsZz12b2lkIDAsbT12b2lkIDAsbj12b2lkIDA7ZXhwb3J0cy51bnN0YWJsZV9ub3c9dm9pZCAwO2V4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9dm9pZCAwO1xuaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIHA9bnVsbCxxPW51bGwscj1mdW5jdGlvbigpe2lmKG51bGwhPT1wKXRyeXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO3AoITAsYSk7cD1udWxsfWNhdGNoKGIpe3Rocm93IHNldFRpbWVvdXQociwwKSxiO319O2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIERhdGUubm93KCl9O2Q9ZnVuY3Rpb24oYSl7bnVsbCE9PXA/c2V0VGltZW91dChkLDAsYSk6KHA9YSxzZXRUaW1lb3V0KHIsMCkpfTtlPWZ1bmN0aW9uKGEsYil7cT1zZXRUaW1lb3V0KGEsYil9O2c9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSl9O209ZnVuY3Rpb24oKXtyZXR1cm4hMX07bj1leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKCl7fX1lbHNle3ZhciB0PXdpbmRvdy5wZXJmb3JtYW5jZSx1PXdpbmRvdy5EYXRlLHY9d2luZG93LnNldFRpbWVvdXQsXG53PXdpbmRvdy5jbGVhclRpbWVvdXQseD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLHk9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB4JiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzXCIpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5JiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIikpO2V4cG9ydHMudW5zdGFibGVfbm93PVwib2JqZWN0XCI9PT10eXBlb2YgdCYmXG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgdC5ub3c/ZnVuY3Rpb24oKXtyZXR1cm4gdC5ub3coKX06ZnVuY3Rpb24oKXtyZXR1cm4gdS5ub3coKX07dmFyIHo9ITEsQT1udWxsLEI9LTEsQz0tMSxEPTMzLjMzLEU9LTEsRj0tMSxHPTAsSD0hMTttPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PUd9O249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oYSl7MD5hfHwxMjU8YT9jb25zb2xlLmVycm9yKFwiZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsIGZvcmNpbmcgZnJhbWVyYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCB1bnN1cHBvcnRlZFwiKTowPGE/KEQ9TWF0aC5mbG9vcigxRTMvYSksSD0hMCk6KEQ9MzMuMzMsSD0hMSl9O3ZhciBKPWZ1bmN0aW9uKCl7aWYobnVsbCE9PUEpe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCksYj0wPEctYTt0cnl7QShiLFxuYSl8fChBPW51bGwpfWNhdGNoKGMpe3Rocm93IEkucG9zdE1lc3NhZ2UobnVsbCksYzt9fX0sSz1uZXcgTWVzc2FnZUNoYW5uZWwsST1LLnBvcnQyO0sucG9ydDEub25tZXNzYWdlPUo7dmFyIEw9ZnVuY3Rpb24oYSl7aWYobnVsbD09PUEpRj1FPS0xLHo9ITE7ZWxzZXt6PSEwO3goZnVuY3Rpb24oYSl7dyhCKTtMKGEpfSk7dmFyIGI9ZnVuY3Rpb24oKXtHPWV4cG9ydHMudW5zdGFibGVfbm93KCkrRC8yO0ooKTtCPXYoYiwzKkQpfTtCPXYoYiwzKkQpO2lmKC0xIT09RSYmLjE8YS1FKXt2YXIgYz1hLUU7IUgmJi0xIT09RiYmYzxEJiZGPEQmJihEPWM8Rj9GOmMsOC4zMz5EJiYoRD04LjMzKSk7Rj1jfUU9YTtHPWErRDtJLnBvc3RNZXNzYWdlKG51bGwpfX07ZD1mdW5jdGlvbihhKXtBPWE7enx8KHo9ITAseChmdW5jdGlvbihhKXtMKGEpfSkpfTtlPWZ1bmN0aW9uKGEsYil7Qz12KGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9O2c9ZnVuY3Rpb24oKXt3KEMpO1xuQz0tMX19dmFyIE09bnVsbCxOPW51bGwsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSxiKXt2YXIgYz1hLm5leHQ7aWYoYz09PWEpTT1udWxsO2Vsc2V7YT09PU0mJihNPWMpO3ZhciBmPWEucHJldmlvdXM7Zi5uZXh0PWM7Yy5wcmV2aW91cz1mfWEubmV4dD1hLnByZXZpb3VzPW51bGw7Yz1hLmNhbGxiYWNrO2Y9UDt2YXIgbD1PO1A9YS5wcmlvcml0eUxldmVsO089YTt0cnl7dmFyIGg9YS5leHBpcmF0aW9uVGltZTw9Yjtzd2l0Y2goUCl7Y2FzZSAxOnZhciBrPWMoaCk7YnJlYWs7Y2FzZSAyOms9YyhoKTticmVhaztjYXNlIDM6az1jKGgpO2JyZWFrO2Nhc2UgNDprPWMoaCk7YnJlYWs7Y2FzZSA1Oms9YyhoKX19Y2F0Y2goWil7dGhyb3cgWjt9ZmluYWxseXtQPWYsTz1sfWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBrKWlmKGI9YS5leHBpcmF0aW9uVGltZSxhLmNhbGxiYWNrPWssbnVsbD09PU0pTT1hLm5leHQ9YS5wcmV2aW91cz1hO2Vsc2V7az1udWxsO2g9TTtkb3tpZihiPD1oLmV4cGlyYXRpb25UaW1lKXtrPWg7YnJlYWt9aD1oLm5leHR9d2hpbGUoaCE9PVxuTSk7bnVsbD09PWs/az1NOms9PT1NJiYoTT1hKTtiPWsucHJldmlvdXM7Yi5uZXh0PWsucHJldmlvdXM9YTthLm5leHQ9azthLnByZXZpb3VzPWJ9fWZ1bmN0aW9uIFUoYSl7aWYobnVsbCE9PU4mJk4uc3RhcnRUaW1lPD1hKXtkb3t2YXIgYj1OLGM9Yi5uZXh0O2lmKGI9PT1jKU49bnVsbDtlbHNle049Yzt2YXIgZj1iLnByZXZpb3VzO2YubmV4dD1jO2MucHJldmlvdXM9Zn1iLm5leHQ9Yi5wcmV2aW91cz1udWxsO1YoYixiLmV4cGlyYXRpb25UaW1lKX13aGlsZShudWxsIT09TiYmTi5zdGFydFRpbWU8PWEpfX1mdW5jdGlvbiBXKGEpe1M9ITE7VShhKTtSfHwobnVsbCE9PU0/KFI9ITAsZChYKSk6bnVsbCE9PU4mJmUoVyxOLnN0YXJ0VGltZS1hKSl9XG5mdW5jdGlvbiBYKGEsYil7Uj0hMTtTJiYoUz0hMSxnKCkpO1UoYik7UT0hMDt0cnl7aWYoIWEpZm9yKDtudWxsIT09TSYmTS5leHBpcmF0aW9uVGltZTw9YjspVChNLGIpLGI9ZXhwb3J0cy51bnN0YWJsZV9ub3coKSxVKGIpO2Vsc2UgaWYobnVsbCE9PU0pe2RvIFQoTSxiKSxiPWV4cG9ydHMudW5zdGFibGVfbm93KCksVShiKTt3aGlsZShudWxsIT09TSYmIW0oKSl9aWYobnVsbCE9PU0pcmV0dXJuITA7bnVsbCE9PU4mJmUoVyxOLnN0YXJ0VGltZS1iKTtyZXR1cm4hMX1maW5hbGx5e1E9ITF9fWZ1bmN0aW9uIFkoYSl7c3dpdGNoKGEpe2Nhc2UgMTpyZXR1cm4tMTtjYXNlIDI6cmV0dXJuIDI1MDtjYXNlIDU6cmV0dXJuIDEwNzM3NDE4MjM7Y2FzZSA0OnJldHVybiAxRTQ7ZGVmYXVsdDpyZXR1cm4gNUUzfX1cbmZ1bmN0aW9uIFYoYSxiKXtpZihudWxsPT09TSlNPWEubmV4dD1hLnByZXZpb3VzPWE7ZWxzZXt2YXIgYz1udWxsLGY9TTtkb3tpZihiPGYuZXhwaXJhdGlvblRpbWUpe2M9ZjticmVha31mPWYubmV4dH13aGlsZShmIT09TSk7bnVsbD09PWM/Yz1NOmM9PT1NJiYoTT1hKTtiPWMucHJldmlvdXM7Yi5uZXh0PWMucHJldmlvdXM9YTthLm5leHQ9YzthLnByZXZpb3VzPWJ9fXZhciBhYT1uO2V4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O1xuZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz1QO1A9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e1A9Y319O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goUCl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9UH12YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e1A9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZj1leHBvcnRzLnVuc3RhYmxlX25vdygpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3ZhciBsPWMuZGVsYXk7bD1cIm51bWJlclwiPT09dHlwZW9mIGwmJjA8bD9mK2w6ZjtjPVwibnVtYmVyXCI9PT10eXBlb2YgYy50aW1lb3V0P2MudGltZW91dDpZKGEpfWVsc2UgYz1ZKGEpLGw9ZjtjPWwrYzthPXtjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6bCxleHBpcmF0aW9uVGltZTpjLG5leHQ6bnVsbCxwcmV2aW91czpudWxsfTtpZihsPmYpe2M9bDtpZihudWxsPT09TilOPWEubmV4dD1hLnByZXZpb3VzPWE7ZWxzZXtiPW51bGw7dmFyIGg9Tjtkb3tpZihjPGguc3RhcnRUaW1lKXtiPWg7YnJlYWt9aD1oLm5leHR9d2hpbGUoaCE9PU4pO251bGw9PT1iP2I9TjpiPT09TiYmKE49YSk7Yz1iLnByZXZpb3VzO2MubmV4dD1iLnByZXZpb3VzPWE7YS5uZXh0PWI7YS5wcmV2aW91cz1cbmN9bnVsbD09PU0mJk49PT1hJiYoUz9nKCk6Uz0hMCxlKFcsbC1mKSl9ZWxzZSBWKGEsYyksUnx8UXx8KFI9ITAsZChYKSk7cmV0dXJuIGF9O2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5uZXh0O2lmKG51bGwhPT1iKXtpZihhPT09YilhPT09TT9NPW51bGw6YT09PU4mJihOPW51bGwpO2Vsc2V7YT09PU0/TT1iOmE9PT1OJiYoTj1iKTt2YXIgYz1hLnByZXZpb3VzO2MubmV4dD1iO2IucHJldmlvdXM9Y31hLm5leHQ9YS5wcmV2aW91cz1udWxsfX07ZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9UDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7UD1jfX19O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gUH07XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtVKGEpO3JldHVybiBudWxsIT09TyYmbnVsbCE9PU0mJk0uc3RhcnRUaW1lPD1hJiZNLmV4cGlyYXRpb25UaW1lPE8uZXhwaXJhdGlvblRpbWV8fG0oKX07ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9YWE7ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe1J8fFF8fChSPSEwLGQoWCkpfTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIE19O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxyPWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7ZnVuY3Rpb24gdChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHI6Y2FzZSBxOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHYoYSl7cmV0dXJuIHQoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXQ7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO1xuZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT1yO2V4cG9ydHMuTWVtbz1xO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW4pfTtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpfHx0KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPXY7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWt9O1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cn07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1xfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1mfTtcbmV4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6XG42MDEyMCxyPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsdD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LHY9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcsdz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTg7ZnVuY3Rpb24geChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHQ6Y2FzZSByOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHkoYSl7cmV0dXJuIHgoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXg7ZXhwb3J0cy5Bc3luY01vZGU9bDtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT12fHxhLiQkdHlwZW9mPT09dyl9O2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSl8fHgoYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9eTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PWh9O1xuZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT10fTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PXB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJvbWlzZU1pZGRsZXdhcmU7XG5cbnZhciBfaXNQcm9taXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiaXMtcHJvbWlzZVwiKSk7XG5cbnZhciBfZmx1eFN0YW5kYXJkQWN0aW9uID0gcmVxdWlyZShcImZsdXgtc3RhbmRhcmQtYWN0aW9uXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIHByb21pc2VNaWRkbGV3YXJlKF9yZWYpIHtcbiAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGlmICghKDAsIF9mbHV4U3RhbmRhcmRBY3Rpb24uaXNGU0EpKGFjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfaXNQcm9taXNlLmRlZmF1bHQpKGFjdGlvbikgPyBhY3Rpb24udGhlbihkaXNwYXRjaCkgOiBuZXh0KGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2lzUHJvbWlzZS5kZWZhdWx0KShhY3Rpb24ucGF5bG9hZCkgPyBhY3Rpb24ucGF5bG9hZC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKF9vYmplY3RTcHJlYWQoe30sIGFjdGlvbiwge1xuICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdFxuICAgICAgICB9KSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goX29iamVjdFNwcmVhZCh7fSwgYWN0aW9uLCB7XG4gICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfSkgOiBuZXh0KGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGlzUHJvbWlzZTtcblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1N0cmluZzIgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcblxudmFyIF9pc1N0cmluZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1N0cmluZzIpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QyKTtcblxuZXhwb3J0cy5pc0ZTQSA9IGlzRlNBO1xuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNGU0EoYWN0aW9uKSB7XG4gIHJldHVybiAoMCwgX2lzUGxhaW5PYmplY3QzLmRlZmF1bHQpKGFjdGlvbikgJiYgKDAsIF9pc1N0cmluZzMuZGVmYXVsdCkoYWN0aW9uLnR5cGUpICYmIE9iamVjdC5rZXlzKGFjdGlvbikuZXZlcnkoaXNWYWxpZEtleSk7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IoYWN0aW9uKSB7XG4gIHJldHVybiBpc0ZTQShhY3Rpb24pICYmIGFjdGlvbi5lcnJvciA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEtleShrZXkpIHtcbiAgcmV0dXJuIFsndHlwZScsICdwYXlsb2FkJywgJ2Vycm9yJywgJ21ldGEnXS5pbmRleE9mKGtleSkgPiAtMTtcbn0iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwiLy8gY29uc29sZSBjb21tYW5kc1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfSElERSA9ICdjb25zb2xlLmhpZGUnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19DT01NQU5EID0gJ2NvbnNvbGUuc2hvdy5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfRVJST1IgPSAnY29uc29sZS5zaG93LmVycm9yJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfSU5GTyA9ICdjb25zb2xlLnNob3cuaW5mbyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9ISURFX0NPTU1BTkQgPSAnY29uc29sZS5oaWRlLmNvbW1hbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0VUX0NPTlNPTEVfVEVYVCA9ICdjb25zb2xlLnNldC5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NFVF9DT01QTEVUSU9OUyA9ICdjb25zb2xlLnNldC5jb21wbGV0aW9ucyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9DT01QTEVUSU9OX05FWFQgPSAnY29uc29sZS5jb21wbGV0aW9uLm5leHQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfQ09NUExFVElPTl9QUkVWID0gJ2NvbnNvbGUuY29tcGxldGlvbi5wcmV2JztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfRklORCA9ICdjb25zb2xlLnNob3cuZmluZCc7XG5cbmludGVyZmFjZSBIaWRlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfSElERTtcbn1cblxuaW50ZXJmYWNlIFNob3dDb21tYW5kIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19DT01NQU5EO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTaG93RmluZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfRklORDtcbn1cblxuaW50ZXJmYWNlIFNob3dFcnJvckFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfRVJST1I7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNob3dJbmZvQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19JTkZPO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIaWRlQ29tbWFuZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0hJREVfQ09NTUFORDtcbn1cblxuaW50ZXJmYWNlIFNldENvbnNvbGVUZXh0QWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0VUX0NPTlNPTEVfVEVYVDtcbiAgY29uc29sZVRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNldENvbXBsZXRpb25zQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0VUX0NPTVBMRVRJT05TO1xuICBjb21wbGV0aW9uczogYW55W107XG4gIGNvbXBsZXRpb25Tb3VyY2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbXBsZXRpb25OZXh0QWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfQ09NUExFVElPTl9ORVhUO1xufVxuXG5pbnRlcmZhY2UgQ29tcGxldGlvblByZXZBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9DT01QTEVUSU9OX1BSRVY7XG59XG5cbmV4cG9ydCB0eXBlIENvbnNvbGVBY3Rpb24gPVxuICBIaWRlQWN0aW9uIHwgU2hvd0NvbW1hbmQgfCBTaG93RmluZEFjdGlvbiB8IFNob3dFcnJvckFjdGlvbiB8XG4gIFNob3dJbmZvQWN0aW9uIHwgSGlkZUNvbW1hbmRBY3Rpb24gfCBTZXRDb25zb2xlVGV4dEFjdGlvbiB8XG4gIFNldENvbXBsZXRpb25zQWN0aW9uIHwgQ29tcGxldGlvbk5leHRBY3Rpb24gfCBDb21wbGV0aW9uUHJldkFjdGlvbjtcblxuIiwiaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGhpZGUgPSAoKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfSElERSxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dDb21tYW5kID0gKHRleHQ6IHN0cmluZyk6IGFjdGlvbnMuQ29uc29sZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DT05TT0xFX1NIT1dfQ09NTUFORCxcbiAgICB0ZXh0OiB0ZXh0XG4gIH07XG59O1xuXG5jb25zdCBzaG93RmluZCA9ICgpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9TSE9XX0ZJTkQsXG4gIH07XG59O1xuXG5jb25zdCBzaG93RXJyb3IgPSAodGV4dDogc3RyaW5nKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfU0hPV19FUlJPUixcbiAgICB0ZXh0OiB0ZXh0XG4gIH07XG59O1xuXG5jb25zdCBzaG93SW5mbyA9ICh0ZXh0OiBzdHJpbmcpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9TSE9XX0lORk8sXG4gICAgdGV4dDogdGV4dFxuICB9O1xufTtcblxuY29uc3QgaGlkZUNvbW1hbmQgPSAoKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgd2luZG93LnRvcC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9VTkZPQ1VTLFxuICB9KSwgJyonKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfSElERV9DT01NQU5ELFxuICB9O1xufTtcblxuY29uc3QgZW50ZXJDb21tYW5kID0gYXN5bmMoXG4gIHRleHQ6IHN0cmluZyxcbik6IFByb21pc2U8YWN0aW9ucy5Db25zb2xlQWN0aW9uPiA9PiB7XG4gIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9FTlRFUl9DT01NQU5ELFxuICAgIHRleHQsXG4gIH0pO1xuICByZXR1cm4gaGlkZUNvbW1hbmQoKTtcbn07XG5cbmNvbnN0IGVudGVyRmluZCA9ICh0ZXh0Pzogc3RyaW5nKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgd2luZG93LnRvcC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9FTlRFUl9GSU5ELFxuICAgIHRleHQsXG4gIH0pLCAnKicpO1xuICByZXR1cm4gaGlkZUNvbW1hbmQoKTtcbn07XG5cbmNvbnN0IHNldENvbnNvbGVUZXh0ID0gKGNvbnNvbGVUZXh0OiBzdHJpbmcpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9TRVRfQ09OU09MRV9URVhULFxuICAgIGNvbnNvbGVUZXh0LFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q29tcGxldGlvbnMgPSBhc3luYyh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFjdGlvbnMuQ29uc29sZUFjdGlvbj4gPT4ge1xuICBsZXQgY29tcGxldGlvbnMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfUVVFUllfQ09NUExFVElPTlMsXG4gICAgdGV4dCxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DT05TT0xFX1NFVF9DT01QTEVUSU9OUyxcbiAgICBjb21wbGV0aW9ucyxcbiAgICBjb21wbGV0aW9uU291cmNlOiB0ZXh0LFxuICB9O1xufTtcblxuY29uc3QgY29tcGxldGlvbk5leHQgPSAoKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfQ09NUExFVElPTl9ORVhULFxuICB9O1xufTtcblxuY29uc3QgY29tcGxldGlvblByZXYgPSAoKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfQ09NUExFVElPTl9QUkVWLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgaGlkZSwgc2hvd0NvbW1hbmQsIHNob3dGaW5kLCBzaG93RXJyb3IsIHNob3dJbmZvLCBoaWRlQ29tbWFuZCwgc2V0Q29uc29sZVRleHQsXG4gIGVudGVyQ29tbWFuZCwgZW50ZXJGaW5kLCBnZXRDb21wbGV0aW9ucywgY29tcGxldGlvbk5leHQsIGNvbXBsZXRpb25QcmV2LFxufTtcbiIsImltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBjb25zb2xlQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvY29uc29sZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDb25zb2xlIGZyb20gJy4vY29tcG9uZW50cy9Db25zb2xlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcmVkdWNlcnMsXG4gIGFwcGx5TWlkZGxld2FyZShwcm9taXNlKSxcbik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aW12aXhlbi1jb25zb2xlJyk7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XG4gICAgICA8Q29uc29sZT48L0NvbnNvbGU+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgd3JhcHBlcik7XG59KTtcblxuY29uc3Qgb25NZXNzYWdlID0gKG1lc3NhZ2U6IGFueSk6IGFueSA9PiB7XG4gIGxldCBtc2cgPSBtZXNzYWdlcy52YWx1ZU9mKG1lc3NhZ2UpO1xuICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9TSE9XX0NPTU1BTkQ6XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLnNob3dDb21tYW5kKG1zZy5jb21tYW5kKSk7XG4gIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9TSE9XX0ZJTkQ6XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLnNob3dGaW5kKCkpO1xuICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19FUlJPUjpcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuc2hvd0Vycm9yKG1zZy50ZXh0KSk7XG4gIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9TSE9XX0lORk86XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLnNob3dJbmZvKG1zZy50ZXh0KSk7XG4gIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9ISURFOlxuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5oaWRlKCkpO1xuICB9XG59O1xuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZSk7XG5sZXQgcG9ydCA9IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHVuZGVmaW5lZCwgeyBuYW1lOiAndmltdml4ZW4tY29uc29sZScgfSk7XG5wb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbk1lc3NhZ2UpO1xuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIG1vZGU6IHN0cmluZztcbiAgbWVzc2FnZVRleHQ6IHN0cmluZztcbiAgY29uc29sZVRleHQ6IHN0cmluZztcbiAgY29tcGxldGlvblNvdXJjZTogc3RyaW5nO1xuICBjb21wbGV0aW9uczogYW55W10sXG4gIHNlbGVjdDogbnVtYmVyO1xuICB2aWV3SW5kZXg6IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiAnJyxcbiAgbWVzc2FnZVRleHQ6ICcnLFxuICBjb25zb2xlVGV4dDogJycsXG4gIGNvbXBsZXRpb25Tb3VyY2U6ICcnLFxuICBjb21wbGV0aW9uczogW10sXG4gIHNlbGVjdDogLTEsXG4gIHZpZXdJbmRleDogMCxcbn07XG5cbmNvbnN0IG5leHRTZWxlY3Rpb24gPSAoc3RhdGU6IFN0YXRlKTogbnVtYmVyID0+IHtcbiAgaWYgKHN0YXRlLmNvbXBsZXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoc3RhdGUuc2VsZWN0IDwgMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgbGV0IGxlbmd0aCA9IHN0YXRlLmNvbXBsZXRpb25zXG4gICAgLm1hcChnID0+IGcuaXRlbXMubGVuZ3RoKVxuICAgIC5yZWR1Y2UoKHgsIHkpID0+IHggKyB5KTtcbiAgaWYgKHN0YXRlLnNlbGVjdCArIDEgPCBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ICsgMTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBwcmV2U2VsZWN0aW9uID0gKHN0YXRlOiBTdGF0ZSk6IG51bWJlciA9PiB7XG4gIGxldCBsZW5ndGggPSBzdGF0ZS5jb21wbGV0aW9uc1xuICAgIC5tYXAoZyA9PiBnLml0ZW1zLmxlbmd0aClcbiAgICAucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSk7XG4gIGlmIChzdGF0ZS5zZWxlY3QgPCAwKSB7XG4gICAgcmV0dXJuIGxlbmd0aCAtIDE7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLnNlbGVjdCAtIDE7XG59O1xuXG5jb25zdCBuZXh0Q29uc29sZVRleHQgPSAoY29tcGxldGlvbnM6IGFueVtdLCBzZWxlY3Q6IG51bWJlciwgZGVmYXVsdHM6IGFueSkgPT4ge1xuICBpZiAoc2VsZWN0IDwgMCkge1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICBsZXQgaXRlbXMgPSBjb21wbGV0aW9ucy5tYXAoZyA9PiBnLml0ZW1zKS5yZWR1Y2UoKGcxLCBnMikgPT4gZzEuY29uY2F0KGcyKSk7XG4gIHJldHVybiBpdGVtc1tzZWxlY3RdLmNvbnRlbnQ7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFN0YXRlID0gZGVmYXVsdFN0YXRlLFxuICBhY3Rpb246IGFjdGlvbnMuQ29uc29sZUFjdGlvbixcbik6IFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIGFjdGlvbnMuQ09OU09MRV9ISURFOlxuICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgbW9kZTogJycsIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NIT1dfQ09NTUFORDpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIG1vZGU6ICdjb21tYW5kJyxcbiAgICAgIGNvbnNvbGVUZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgIGNvbXBsZXRpb25zOiBbXX07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NIT1dfRklORDpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIG1vZGU6ICdmaW5kJyxcbiAgICAgIGNvbnNvbGVUZXh0OiAnJyxcbiAgICAgIGNvbXBsZXRpb25zOiBbXX07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NIT1dfRVJST1I6XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBtb2RlOiAnZXJyb3InLFxuICAgICAgbWVzc2FnZVRleHQ6IGFjdGlvbi50ZXh0LCB9O1xuICBjYXNlIGFjdGlvbnMuQ09OU09MRV9TSE9XX0lORk86XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBtb2RlOiAnaW5mbycsXG4gICAgICBtZXNzYWdlVGV4dDogYWN0aW9uLnRleHQsIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX0hJREVfQ09NTUFORDpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBtb2RlOiBzdGF0ZS5tb2RlID09PSAnY29tbWFuZCcgfHwgc3RhdGUubW9kZSA9PT0gJ2ZpbmQnID8gJycgOiBzdGF0ZS5tb2RlLFxuICAgIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NFVF9DT05TT0xFX1RFWFQ6XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBjb25zb2xlVGV4dDogYWN0aW9uLmNvbnNvbGVUZXh0LCB9O1xuICBjYXNlIGFjdGlvbnMuQ09OU09MRV9TRVRfQ09NUExFVElPTlM6XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBjb21wbGV0aW9uczogYWN0aW9uLmNvbXBsZXRpb25zLFxuICAgICAgY29tcGxldGlvblNvdXJjZTogYWN0aW9uLmNvbXBsZXRpb25Tb3VyY2UsXG4gICAgICBzZWxlY3Q6IC0xIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX0NPTVBMRVRJT05fTkVYVDoge1xuICAgIGxldCBzZWxlY3QgPSBuZXh0U2VsZWN0aW9uKHN0YXRlKTtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdDogc2VsZWN0LFxuICAgICAgY29uc29sZVRleHQ6IG5leHRDb25zb2xlVGV4dChcbiAgICAgICAgc3RhdGUuY29tcGxldGlvbnMsIHNlbGVjdCwgc3RhdGUuY29tcGxldGlvblNvdXJjZSkgfTtcbiAgfVxuICBjYXNlIGFjdGlvbnMuQ09OU09MRV9DT01QTEVUSU9OX1BSRVY6IHtcbiAgICBsZXQgc2VsZWN0ID0gcHJldlNlbGVjdGlvbihzdGF0ZSk7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBzZWxlY3Q6IHNlbGVjdCxcbiAgICAgIGNvbnNvbGVUZXh0OiBuZXh0Q29uc29sZVRleHQoXG4gICAgICAgIHN0YXRlLmNvbXBsZXRpb25zLCBzZWxlY3QsIHN0YXRlLmNvbXBsZXRpb25Tb3VyY2UpIH07XG4gIH1cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9jb25zb2xlLnNjc3MnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb25zb2xlL0lucHV0JztcbmltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4vY29uc29sZS9Db21wbGV0aW9uJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vY29uc29sZS9NZXNzYWdlJztcbmltcG9ydCAqIGFzIGNvbnNvbGVBY3Rpb25zIGZyb20gJy4uLy4uL2NvbnNvbGUvYWN0aW9ucy9jb25zb2xlJztcbmltcG9ydCB7IFN0YXRlIGFzIEFwcFN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBDT01QTEVUSU9OX01BWF9JVEVNUyA9IDMzO1xuXG50eXBlIFN0YXRlUHJvcHMgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHM+O1xuaW50ZXJmYWNlIERpc3BhdGNoUHJvcHMge1xuICBkaXNwYXRjaDogKGFjdGlvbjogYW55KSA9PiB2b2lkLFxufVxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzO1xuXG5jbGFzcyBDb25zb2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHByaXZhdGUgaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxJbnB1dD47XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09ICdjb21tYW5kJyB8fCB0aGlzLnByb3BzLm1vZGUgPT09ICdmaW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuaGlkZUNvbW1hbmQoKSk7XG4gICAgfVxuICB9XG5cbiAgZG9FbnRlcihlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgdmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5lbnRlckNvbW1hbmQodmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ2ZpbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5lbnRlckZpbmQoXG4gICAgICAgIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TmV4dChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5jb21wbGV0aW9uTmV4dCgpKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHNlbGVjdFByZXYoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuY29tcGxldGlvblByZXYoKSk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbktleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuaGlkZUNvbW1hbmQoKSk7XG4gICAgY2FzZSAnRW50ZXInOlxuICAgICAgcmV0dXJuIHRoaXMuZG9FbnRlcihlKTtcbiAgICBjYXNlICdUYWInOlxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5jb21wbGV0aW9uUHJldigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuY29tcGxldGlvbk5leHQoKSk7XG4gICAgICB9XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnWyc6XG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuaGlkZUNvbW1hbmQoKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjJzpcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5oaWRlQ29tbWFuZCgpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb0VudGVyKGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dChlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3AnOlxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICB0aGlzLnNlbGVjdFByZXYoZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIGxldCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5zZXRDb25zb2xlVGV4dCh0ZXh0KSk7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmdldENvbXBsZXRpb25zKHRleHQpKTtcbiAgICB9XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tb2RlICE9PSAnY29tbWFuZCcgJiYgdGhpcy5wcm9wcy5tb2RlID09PSAnY29tbWFuZCcpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgIGNvbnNvbGVBY3Rpb25zLmdldENvbXBsZXRpb25zKHRoaXMucHJvcHMuY29uc29sZVRleHQpKTtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5tb2RlICE9PSAnZmluZCcgJiYgdGhpcy5wcm9wcy5tb2RlID09PSAnZmluZCcpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLm1vZGUpIHtcbiAgICBjYXNlICdjb21tYW5kJzpcbiAgICBjYXNlICdmaW5kJzpcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21tYW5kLXdyYXBwZXInPlxuICAgICAgICA8Q29tcGxldGlvblxuICAgICAgICAgIHNpemU9e0NPTVBMRVRJT05fTUFYX0lURU1TfVxuICAgICAgICAgIGNvbXBsZXRpb25zPXt0aGlzLnByb3BzLmNvbXBsZXRpb25zfVxuICAgICAgICAgIHNlbGVjdD17dGhpcy5wcm9wcy5zZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHJlZj17dGhpcy5pbnB1dH1cbiAgICAgICAgICBtb2RlPXt0aGlzLnByb3BzLm1vZGV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNvbnNvbGVUZXh0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+O1xuICAgIGNhc2UgJ2luZm8nOlxuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiA8TWVzc2FnZSBtb2RlPXsgdGhpcy5wcm9wcy5tb2RlIH0gPlxuICAgICAgICB7IHRoaXMucHJvcHMubWVzc2FnZVRleHQgfVxuICAgICAgPC9NZXNzYWdlPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgd2luZG93LmZvY3VzKCk7XG4gICAgaWYgKHRoaXMuaW5wdXQuY3VycmVudCkge1xuICAgICAgdGhpcy5pbnB1dC5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwU3RhdGUpID0+ICh7IC4uLnN0YXRlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4pKENvbnNvbGUpO1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwPXRydWUhLi9jb25zb2xlLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLGJvZHksKnttYXJnaW46MDtwYWRkaW5nOjB9Ym9keXtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtvdmVyZmxvdzpoaWRkZW59LnZpbXZpeGVuLWNvbnNvbGV7Ym90dG9tOjA7bWFyZ2luOjA7cGFkZGluZzowfS52aW12aXhlbi1jb25zb2xlLWNvbW1hbmQtd3JhcHBlcntib3JkZXItdG9wOjFweCBzb2xpZCBncmF5fS52aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb257YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtmb250LXN0eWxlOm5vcm1hbDtmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTZweH0udmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLXRpdGxle2JhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjA7cGFkZGluZzowfS52aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24taXRlbXtwYWRkaW5nLWxlZnQ6MS41cmVtO2JhY2tncm91bmQtcG9zaXRpb246MCBjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvbnRhaW47YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3doaXRlLXNwYWNlOnByZX0udmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLWl0ZW0udmltdml4ZW4tY29tcGxldGlvbi1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvd30udmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLWl0ZW0tY2FwdGlvbntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo0MCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW59LnZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi1pdGVtLXVybHtkaXNwbGF5OmlubGluZS1ibG9jaztjb2xvcjpncmVlbjt3aWR0aDo2MCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW59LnZpbXZpeGVuLWNvbnNvbGUtbWVzc2FnZXtmb250LXN0eWxlOm5vcm1hbDtmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTZweDtib3JkZXItdG9wOjFweCBzb2xpZCBncmF5fS52aW12aXhlbi1jb25zb2xlLWVycm9ye2JhY2tncm91bmQtY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6d2hpdGV9LnZpbXZpeGVuLWNvbnNvbGUtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2ZvbnQtd2VpZ2h0Om5vcm1hbDtjb2xvcjpncmVlbn0udmltdml4ZW4tY29uc29sZS1jb21tYW5ke2JhY2tncm91bmQtY29sb3I6d2hpdGU7ZGlzcGxheTpmbGV4fS52aW12aXhlbi1jb25zb2xlLWNvbW1hbmQtcHJvbXB0e2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4fS52aW12aXhlbi1jb25zb2xlLWNvbW1hbmQtaW5wdXR7Ym9yZGVyOm5vbmU7ZmxleC1ncm93OjE7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHh9XFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1vZGU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb25CbHVyOiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25LZXlEb3duOiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcHJpdmF0ZSBpbnB1dDogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLmlucHV0LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuaW5wdXQuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJvbXB0ID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgICBwcm9tcHQgPSAnOic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09ICdmaW5kJykge1xuICAgICAgcHJvbXB0ID0gJy8nO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21tYW5kJz5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbW1hbmQtcHJvbXB0Jz5cbiAgICAgICAgICB7IHByb21wdCB9XG4gICAgICAgIDwvaT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbW1hbmQtaW5wdXQnXG4gICAgICAgICAgcmVmPXt0aGlzLmlucHV0fVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLnByb3BzLm9uS2V5RG93bn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBsZXRpb25JdGVtIGZyb20gJy4vQ29tcGxldGlvbkl0ZW0nO1xuaW1wb3J0IENvbXBsZXRpb25UaXRsZSBmcm9tICcuL0NvbXBsZXRpb25UaXRsZSc7XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgaWNvbj86IHN0cmluZztcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgR3JvdXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGl0ZW1zOiBJdGVtW107XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbGVjdDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIGNvbXBsZXRpb25zOiBHcm91cFtdO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB2aWV3T2Zmc2V0OiBudW1iZXI7XG4gIHNlbGVjdDogbnVtYmVyO1xufVxuXG5jbGFzcyBDb21wbGV0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmlld09mZnNldDogMCwgc2VsZWN0OiAtMSB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHM6IFByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5zZWxlY3QgPT09IG5leHRQcm9wcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCB2aWV3U2VsZWN0ID0gKCgpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRQcm9wcy5jb21wbGV0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICArK2luZGV4O1xuICAgICAgICBsZXQgZyA9IG5leHRQcm9wcy5jb21wbGV0aW9uc1tpXTtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3QgKyBpICsgMSA8IGluZGV4ICsgZy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dFByb3BzLnNlbGVjdCArIGkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGluZGV4ICs9IGcuaXRlbXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0pKCk7XG5cbiAgICBsZXQgdmlld09mZnNldCA9IDA7XG4gICAgaWYgKG5leHRQcm9wcy5zZWxlY3QgPCAwKSB7XG4gICAgICB2aWV3T2Zmc2V0ID0gMDtcbiAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZS5zZWxlY3QgPCBuZXh0UHJvcHMuc2VsZWN0KSB7XG4gICAgICB2aWV3T2Zmc2V0ID0gTWF0aC5tYXgocHJldlN0YXRlLnZpZXdPZmZzZXQsXG4gICAgICAgIHZpZXdTZWxlY3QgLSBuZXh0UHJvcHMuc2l6ZSArIDEpO1xuICAgIH0gZWxzZSBpZiAocHJldlN0YXRlLnNlbGVjdCA+IG5leHRQcm9wcy5zZWxlY3QpIHtcbiAgICAgIHZpZXdPZmZzZXQgPSBNYXRoLm1pbihwcmV2U3RhdGUudmlld09mZnNldCwgdmlld1NlbGVjdCk7XG4gICAgfVxuICAgIHJldHVybiB7IHZpZXdPZmZzZXQsIHNlbGVjdDogbmV4dFByb3BzLnNlbGVjdCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBlbGVzID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAobGV0IGdyb3VwIG9mIHRoaXMucHJvcHMuY29tcGxldGlvbnMpIHtcbiAgICAgIGVsZXMucHVzaCg8Q29tcGxldGlvblRpdGxlXG4gICAgICAgIGtleT17YGdyb3VwLSR7aW5kZXh9YH1cbiAgICAgICAgdGl0bGU9eyBncm91cC5uYW1lIH1cbiAgICAgIC8+KTtcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgZ3JvdXAuaXRlbXMpIHtcbiAgICAgICAgZWxlcy5wdXNoKDxDb21wbGV0aW9uSXRlbVxuICAgICAgICAgIGtleT17YGl0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICBjYXB0aW9uPXtpdGVtLmNhcHRpb259XG4gICAgICAgICAgdXJsPXtpdGVtLnVybH1cbiAgICAgICAgICBoaWdobGlnaHQ9e2luZGV4ID09PSB0aGlzLnByb3BzLnNlbGVjdH1cbiAgICAgICAgLyA+KTtcbiAgICAgICAgKytpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdmlld09mZnNldCA9IHRoaXMuc3RhdGUudmlld09mZnNldDtcbiAgICBlbGVzID0gZWxlcy5zbGljZSh2aWV3T2Zmc2V0LCB2aWV3T2Zmc2V0ICsgdGhpcy5wcm9wcy5zaXplKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24nPlxuICAgICAgICB7IGVsZXMgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGlnaGxpZ2h0OiBib29sZWFuO1xuICBjYXB0aW9uPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbXBsZXRpb25JdGVtID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gJ3ZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi1pdGVtJztcbiAgaWYgKHByb3BzLmhpZ2hsaWdodCkge1xuICAgIGNsYXNzTmFtZSArPSAnIHZpbXZpeGVuLWNvbXBsZXRpb24tc2VsZWN0ZWQnO1xuICB9XG4gIHJldHVybiA8bGlcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmljb24gKyAnKScgfX1cbiAgPlxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9J3ZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi1pdGVtLWNhcHRpb24nXG4gICAgPntwcm9wcy5jYXB0aW9ufTwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24taXRlbS11cmwnXG4gICAgPntwcm9wcy51cmx9PC9zcGFuPlxuICA8L2xpPjtcbn07XG5cbkNvbXBsZXRpb25JdGVtLnByb3BUeXBlcyA9IHtcbiAgaGlnaGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGlvbkl0ZW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21wbGV0aW9uVGl0bGUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiA8bGkgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24tdGl0bGUnPlxuICAgIHtwcm9wcy50aXRsZX1cbiAgPC9saT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uVGl0bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RlOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lc3NhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHN3aXRjaCAocHJvcHMubW9kZSkge1xuICBjYXNlICdlcnJvcic6XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1tZXNzYWdlIHZpbXZpeGVuLWNvbnNvbGUtZXJyb3InPlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvcD5cbiAgICApO1xuICBjYXNlICdpbmZvJzpcbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLW1lc3NhZ2Ugdmltdml4ZW4tY29uc29sZS1pbmZvJz5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9