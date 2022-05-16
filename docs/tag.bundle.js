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

/***/ "./src/form/tag.js":
/*!*************************!*\
  !*** ./src/form/tag.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tag = {\n  tagDiv: document.createElement('div'),\n  tag1Color: '#e63946',\n  tag1Text: 'All',\n  tag1Class: 'tab-1',\n  tag2Color: '#f1faee',\n  tag2Text: '',\n  tag2Class: 'tab-2',\n  tag3Color: '#a8dadc',\n  tag3Text: '',\n  tag3Class: 'tab-3',\n  tag4Color: '#457b9d',\n  tag4Text: '',\n  tag4Class: 'tab-4',\n  tag5Color: '#1d3557',\n  tag5Text: '',\n  tag5Class: 'tab-5',\n\n  init: () => {\n    const title = document.createElement('div');\n    title.textContent = 'Tag Color:';\n    tag.tagDiv.appendChild(title);\n    tag.tagDiv.className = 'tag';\n\n    // tag.addTag(tag.tag1Color, tag.tag1Color);\n    tag.addTag(tag.tag2Color, tag.tag2Class);\n    tag.addTag(tag.tag3Color, tag.tag3Class);\n    tag.addTag(tag.tag4Color, tag.tag4Class);\n    tag.addTag(tag.tag5Color, tag.tag5Class);\n    return tag.tagDiv;\n  },\n\n  addTag: (color, value) => {\n    const radioDiv = document.createElement('div');\n    radioDiv.className = 'tag-div';\n    const label = document.createElement('label');\n    label.className = 'tag-color';\n    label.for = value;\n    label.style.backgroundColor = color;\n    const radio = document.createElement('input');\n    radio.type = 'radio';\n    radio.name = 'tag';\n    radio.id = value;\n    radio.value = value;\n    if (value === tag.tag2Class) {\n      radio.defaultChecked = true;\n    }\n\n    label.appendChild(radio);\n    radioDiv.append(label);\n    tag.tagDiv.appendChild(radioDiv);\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);\n\n\n//# sourceURL=webpack://to-do-list/./src/form/tag.js?");

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
/******/ 	__webpack_modules__["./src/form/tag.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;