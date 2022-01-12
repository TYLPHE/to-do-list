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

/***/ "./src/form/priority.js":
/*!******************************!*\
  !*** ./src/form/priority.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ priority)\n/* harmony export */ });\nfunction priority() {\n  const priorityDiv = document.createElement('div');\n  priorityDiv.className = 'form-priority';\n  const priorityLabel = document.createElement('label');\n  priorityLabel.for = 'priority';\n  priorityLabel.textContent = 'Priority: ';\n  const radioDiv = document.createElement('div');\n\n  const radioButtons = (label) => {\n    const pLabel = document.createElement('label');\n    pLabel.for = label;\n    pLabel.className = `radio ${label}`;\n    pLabel.textContent = label;\n    const radio = document.createElement('input');\n    radio.id = label;\n    radio.name = 'radio';\n    radio.type = 'radio';\n    radio.textContent = label;\n\n    // check 'Medium' by default to prevent blank priorities.\n    if (label === 'Medium') {\n      radio.defaultChecked = true;\n    }\n\n    pLabel.appendChild(radio);\n    radioDiv.append(pLabel);\n  };\n  priorityDiv.append(priorityLabel, radioDiv);\n  radioButtons('Low');\n  radioButtons('Medium');\n  radioButtons('High');\n  return priorityDiv;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/form/priority.js?");

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
/******/ 	__webpack_modules__["./src/form/priority.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;