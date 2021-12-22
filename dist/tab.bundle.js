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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet tag = {\n    tagDiv: document.createElement(`div`),\n    tag1Color: `#e63946`,\n    tag1Text: `All`,\n    tag1Class: `tab-1`,\n\n    tag2Color: `#f1faee`,\n    tag2Text: ``,\n    tag2Class: `tab-2`,\n\n    tag3Color: `#a8dadc`,\n    tag3Text: ``,\n    tag3Class: `tab-3`,\n\n    tag4Color: `#457b9d`,\n    tag4Text: ``,\n    tag4Class: `tab-4`,\n\n    tag5Color: `#1d3557`,\n    tag5Text: ``,\n    tag5Class: `tab-5`,\n\n    init: () => {\n        let title = document.createElement(`div`);\n        title.textContent = `Tag Color:`\n        tag.tagDiv.appendChild(title);\n        tag.tagDiv.className = `tag`;\n        // tag.addTag(tag.tag1Color, tag.tag1Color);\n        tag.addTag(tag.tag2Color, tag.tag2Class);\n        tag.addTag(tag.tag3Color, tag.tag3Class);\n        tag.addTag(tag.tag4Color, tag.tag4Class);\n        tag.addTag(tag.tag5Color, tag.tag5Class);\n        return tag.tagDiv;\n    },\n    addTag: (color, value) => {\n        let radioDiv = document.createElement(`div`);\n        radioDiv.className = `tag-div`;\n        let label = document.createElement(`label`);\n        label.className = `tag-color`;\n        label.for = value;\n        label.style.backgroundColor = color;\n        let radio = document.createElement(`input`);\n        radio.type = `radio`;\n        radio.name = `tag`;\n        radio.id = value;\n        radio.value = value;\n        if(value == tag.tag2Class){\n            radio.defaultChecked = true;\n        }\n        label.appendChild(radio);\n        radioDiv.append(label);\n        tag.tagDiv.appendChild(radioDiv);\n    },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);\n\n//# sourceURL=webpack://to-do-list/./src/form/tag.js?");

/***/ }),

/***/ "./src/table/tabs.js":
/*!***************************!*\
  !*** ./src/table/tabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/tag.js */ \"./src/form/tag.js\");\n\n\nlet tabs = {\n    tabDiv: document.createElement(`div`),\n    init: () => {\n        tabs.tabDiv.className = `tab-div`;\n        tabs.addTab(_form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag1Color, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag1Text, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag1Class);\n        tabs.addTab(_form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag2Color, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag2Text, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag2Class);\n        tabs.addTab(_form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag3Color, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag3Text, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag3Class);\n        tabs.addTab(_form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag4Color, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag4Text, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag4Class);\n        tabs.addTab(_form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag5Color, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag5Text, _form_tag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag5Class);\n        return tabs.tabDiv;\n    },\n    addTab: (color, text, label) => {\n        let tab = document.createElement(`div`);\n        tab.className = label;\n        tab.textContent = text;\n        tab.style.backgroundColor = color;\n        tabs.tabDiv.appendChild(tab);\n        tab.addEventListener(`click`, (e) => tabs.tabSwap(e));\n    },\n    tabSwap: (e) => {\n        let bgColor = e.target.style.backgroundColor;\n        let table = document.querySelector(`.table`);\n        table.style.border = `10px solid ${bgColor}`;\n        //updating childNodes will update live. hide all and unhide what we need.\n        console.log(table.childNodes);\n        for(let i = 1; i < table.childNodes.length; i++){\n            table.childNodes[i].classList.add(`hidden`);\n        }\n        console.log(table.childNodes);\n        //search and unhide the tag clicked\n        let tagParent = document.querySelector(`#desc-${e.target.className}`).parentElement.parentElement\n        while(tagParent.classList.contains(`hidden`)){\n            tagParent.classList.remove(`hidden`);\n        }\n        console.log(document.querySelectorAll(`.hidden`));\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://to-do-list/./src/table/tabs.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/table/tabs.js");
/******/ 	
/******/ })()
;