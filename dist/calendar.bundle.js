/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form/calendar.js":
/*!******************************!*\
  !*** ./src/form/calendar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet calendar = {\n    calendarDiv: document.createElement(`div`),\n    init: () => {\n        calendar.calendarDiv.className = `calendar`;\n        calendar.due();        \n    },\n    due: () => {\n        let label = document.createElement(`label`);\n            label.textContent = `Due: `;\n            label.for = `end`;\n        let input = document.createElement(`input`);\n            input.type = `datetime-local`;\n            input.autocomplete = 'on'\n            input.id = `end`;\n            //default value to current date and time\n            // also add a `0` if getMinutes() is < 10 for formatting purposes\n            input.value = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + (new Date().getHours()==0?`12`:(new Date().getHours()<10?`0`:``) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes());\n            input.required = true;\n        //shows check or x icon if all <input> required fields entered \n        let span = document.createElement(`span`);\n            span.class = `validity`;\n        calendar.calendarDiv.append(label, input, span);\n    }\n}\ncalendar.init();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar.calendarDiv);\n\n//# sourceURL=webpack://to-do-list/./src/form/calendar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/form/calendar.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;