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

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//factory function to create to do contents\nfunction factory(due, desc, priority){\n    return {\n        due: due,\n        desc: desc,\n        priority: priority,\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factory);\n\n//# sourceURL=webpack://to-do-list/./src/factory.js?");

/***/ }),

/***/ "./src/push.js":
/*!*********************!*\
  !*** ./src/push.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ push)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n//push populates table\nfunction push(){\n    //remove all lists\n    while(document.querySelector(`.list`)){\n        document.querySelector(`.table`).removeChild(document.querySelector(`.list`));\n    }\n    //read array and draw new list\n    for(let i = 0; i < _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage.length; i++){\n        let row = document.createElement(`tr`);\n        row.className = `list`;\n        let due = document.createElement(`td`);\n        let desc = document.createElement(`td`);\n        let priority = document.createElement(`td`);\n            due.textContent = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n            desc.textContent = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].desc;\n            priority.textContent = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].priority;\n\n        row.append(due, desc, priority);\n\n        let table = document.querySelector(`.table`);\n            table.appendChild(row);\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/push.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n\nlet storage = {\n    storage: [],\n    getset: () => {\n        if(localStorage.getItem(`todo-TYLPHE`) == null){\n            localStorage.setItem(`todo-TYLPHE`, []);\n            let schedule1 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`hey`, `tyler`, `test`);\n            let schedule2 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`now`,`red`, ``);\n            let schedule3 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`blue`, `green`, `purple`);\n            storage.storage.push(schedule1);\n            storage.storage.push(schedule2);\n            storage.storage.push(schedule3);\n            storage.save();\n        }\n        else{\n            let save = localStorage.getItem(`todo-TYLPHE`);\n            storage.storage = JSON.parse(save);\n        }\n    },\n    save: () => {\n        let save = JSON.stringify(storage.storage);\n        localStorage.setItem(`todo-TYLPHE`, save);\n        console.log(`saved`);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/push.js");
/******/ 	
/******/ })()
;