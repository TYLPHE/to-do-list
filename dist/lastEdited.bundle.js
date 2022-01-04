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

/***/ "./src/storage/factory.js":
/*!********************************!*\
  !*** ./src/storage/factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage/storage.js\");\n\n\n//factory function to create to do contents\nfunction factory(due, desc, priority, tag){\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id += 1;\n    return {\n        id: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id,\n        due: due,\n        desc: desc,\n        priority: priority,\n        complete: false,\n        tag: tag,\n        lastEdited: false,\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factory);\n\n//# sourceURL=webpack://to-do-list/./src/storage/factory.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/storage/factory.js\");\n\nlet storage = {\n    //id assigns each list a unique id#... not really using it but just in case.\n    id: 0,\n\n    //all lists are stored in storage[]\n    storage: [],\n\n    //active tab remembers which tab is active to filter out the correct list\n    //available tab options: tab-1, tab-2, ...tab-5\n    activeTab: `tab-1`,\n    \n    //create a localStorage file if none exists, otherwise load it.\n    getset: () => {\n        if(localStorage.getItem(`todo-TYLPHE`) == null){\n            //set a file for to do items\n            localStorage.setItem(`todo-TYLPHE`, []);\n\n            //prepopulate some items and push it to table\n            let currentYear = new Date().getFullYear();\n            let currentMonth = (new Date().getMonth() + 1 < 10 ? `0` : ``) + (new Date().getMonth() + 1).toString();\n            let currentDate = (new Date().getDate() < 10 ? `0` : ``) + new Date().getDate().toString();\n            let currentHour = (new Date().getHours() == 0 ? `12`: (new Date().getHours() < 10 ? `0` : ``)) + new Date().getHours().toString();\n            let currentMinute = (new Date().getMinutes() < 10 ? `0` : ``) + new Date().getMinutes().toString();\n            \n            let soon = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:59`\n            let soon1 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:51`\n            let soon2 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:05`\n            let tomorrow = `${currentYear}-${currentMonth}-28T12:00`;\n            let tomorrow1 = `${currentYear}-${currentMonth}-28T13:00`;\n            let overdue = `${currentYear}-01-01T${currentHour}:${currentMinute}`;\n            let overdue1 = `${currentYear}-12-24T${currentHour}:${currentMinute}`;\n\n            let schedule1 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tomorrow, `Car maintenance`, `High`, `tab-2`);\n            let schedule2 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon,`Laundry`, `Low`, `tab-3`);\n            let schedule3 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overdue, `Party`, `Medium`, `tab-4`);\n            let schedule4 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon2, `Drink water`, `Medium`, `tab-5`);\n            let schedule5 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tomorrow1, `Pay bills`, `High`, `tab-2`);\n            let schedule6 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon1,`Scrub bathroom`, `Low`, `tab-3`);\n            let schedule7 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overdue1, `Buy food`, `Medium`, `tab-4`);\n            storage.storage.push(schedule1);\n            storage.storage.push(schedule2);\n            storage.storage.push(schedule3);\n            storage.storage.push(schedule4);\n            storage.storage.push(schedule5);\n            storage.storage.push(schedule6);\n            storage.storage.push(schedule7);\n\n            //create another file to remember ID number for generation\n            localStorage.setItem(`todo-id-TYLPHE`, 0);\n            storage.sort();\n            storage.save();\n        }\n        else{\n            let save = localStorage.getItem(`todo-TYLPHE`);\n            storage.storage = JSON.parse(save);\n\n            let id = localStorage.getItem(`todo-id-TYLPHE`);\n            storage.id = JSON.parse(id);\n        }\n    },\n    save: () => {\n        let save = JSON.stringify(storage.storage);\n        let id = JSON.stringify(storage.id);\n        localStorage.setItem(`todo-TYLPHE`, save);\n        localStorage.setItem(`todo-id-TYLPHE`, id);\n    },\n    sort: () => {\n        storage.storage.sort(\n            (a, b) => {\n                if(a.due < b.due){\n                    return -1;\n                }\n                if (a.due > b.due){\n                    return 1;\n                }\n                return 0;\n            }\n        );\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage/storage.js?");

/***/ }),

/***/ "./src/table/lastEdited.js":
/*!*********************************!*\
  !*** ./src/table/lastEdited.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.js */ \"./src/storage/storage.js\");\n\n//add a class to recently edited/added items to animate a blinking indicator\nlet edited = {\n    init: (obj) => {\n        edited.remove();\n        edited.add(obj);\n    },\n    //change all last edited values to false\n    remove: () => {\n        for(let i in _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage){\n            _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].lastEdited = false;\n        }\n    },\n    add:(obj) => {\n        obj.lastEdited = true;\n    },\n    //add a last edited to highlight last edited item\n    highlight: () => {\n        let targetObject = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage.find(x => x.lastEdited);\n        if(targetObject){\n            let edited = document.getElementById(`${targetObject.id}`);\n            edited.classList.add(`last-edited`);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edited);\n\n//# sourceURL=webpack://to-do-list/./src/table/lastEdited.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/table/lastEdited.js");
/******/ 	
/******/ })()
;