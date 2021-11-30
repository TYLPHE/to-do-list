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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet calendar = {\n    calendarDiv: document.createElement(`div`),\n    init: () => {\n        calendar.calendarDiv.className = `calendar`;\n        calendar.startDate();\n        calendar.endDate();        \n    },\n    startDate: () => {\n        let label = document.createElement(`label`);\n            label.textContent = `Start (date & time): `;\n            label.for = `start`;\n        let input = document.createElement(`input`);\n            input.type = `datetime-local`;\n            input.id = `start`;\n            input.required = true;\n        //default value to current date and time\n            //add a `0` if getMinutes() is < 10 for formatting purposes\n        input.value = new Date().toISOString().slice(0,-13) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();\n        //shows check or x icon if all <input> required fields entered \n        let span = document.createElement(`span`);\n            span.class = `validity`;\n        calendar.calendarDiv.append(label, input, span);\n    },\n    endDate: () => {\n        let label = document.createElement(`label`);\n            label.textContent = `End (date & time): `;\n            label.for = `end`;\n        let input = document.createElement(`input`);\n            input.type = `datetime-local`;\n            input.id = `end`;\n            input.required = true;\n        let span = document.createElement(`span`);\n            span.class = `validity`;\n        calendar.calendarDiv.append(label, input, span);\n    }\n}\ncalendar.init();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar.calendarDiv);\n\n//# sourceURL=webpack://to-do-list/./src/form/calendar.js?");

/***/ }),

/***/ "./src/form/form.js":
/*!**************************!*\
  !*** ./src/form/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.js */ \"./src/form/calendar.js\");\n\n\nlet form = {\n    formDiv: document.createElement(`form`),\n    init: () => {\n        //create form title\n        let title = document.createElement(`div`);\n        title.textContent = `Add To Do Item`;\n        title.classList.add(`form-title`);\n        //add calendar to form\n        form.formDiv.id = `form`;\n        form.formDiv.append(title, form.desc(), _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], form.priority(), form.submit());\n    },\n    desc: () => {\n        let desc = document.createElement(`div`);\n            desc.className = `desc`;\n        let textBox = document.createElement(`textarea`);\n            textBox.className = `text`;\n            textBox.required = true;\n            textBox.placeholder = `Enter description here.`;\n        let span = document.createElement(`span`);\n            span.class = `validity`;\n        desc.append(textBox, span);\n        return desc;\n    },\n    priority: () => {\n        let priority = document.createElement(`div`);\n            priority.className = `priority`;\n        let priorityLabel = document.createElement(`label`);\n            priorityLabel.for = `priority`;\n            priorityLabel.textContent = `Priority: `;\n        let radioDiv = document.createElement(`div`);\n        let radioButtons = (label) => {\n            let pLabel = document.createElement(`label`);\n                pLabel.for = label;\n                pLabel.className = `radio`;\n                pLabel.textContent = label;\n            let radio = document.createElement(`input`);\n                radio.id = label;\n                radio.name = `radio`;\n                radio.type = `radio`;\n                radio.textContent = label;\n            pLabel.appendChild(radio);\n            radioDiv.append(pLabel);\n        }\n        priority.append(priorityLabel, radioDiv);\n        radioButtons(`Low`);\n        radioButtons(`Medium`);\n        radioButtons(`High`);\n        return priority;\n    },\n    submit: () => {\n        let submit = document.createElement(`button`);\n            submit.className = `submit`;\n            submit.textContent = `Submit`;\n            submit.classList.add(`submit`);\n            submit.formTarget = `_parent`;\n        return submit;\n    }\n\n}\nform.init();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form.formDiv);\n\n//# sourceURL=webpack://to-do-list/./src/form/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form/form.js");
/******/ 	
/******/ })()
;