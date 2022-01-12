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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage/storage.js\");\n\n\n// factory function to create to do contents\nfunction factory(due, desc, priority, tag) {\n  _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id += 1;\n  return {\n    id: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id,\n    due,\n    desc,\n    priority,\n    complete: false,\n    tag,\n    lastEdited: false,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factory);\n\n\n//# sourceURL=webpack://to-do-list/./src/storage/factory.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ \"./src/storage/factory.js\");\n\n\nconst storage = {\n  // id assigns each list a unique id#... not really using it but just in case.\n  id: 0,\n\n  // all lists are stored in storage[]\n  storage: [],\n\n  // active tab remembers which tab is active to filter out the correct list\n  // available tab options: tab-1, tab-2, ...tab-5\n  activeTab: 'tab-1',\n\n  // create a localStorage file if none exists, otherwise load it.\n  getset: () => {\n    if (localStorage.getItem('todo-TYLPHE') == null) {\n      // set a file for to do items\n      localStorage.setItem('todo-TYLPHE', []);\n\n      // prepopulate some items and push it to table\n      const currentYear = new Date().getFullYear();\n      let currentMonth;\n      if (new Date().getMonth() + 1 < 10) {\n        currentMonth = `0${(new Date().getMonth() + 1)}`;\n      } else {\n        currentMonth = (new Date().getMonth() + 1);\n      }\n\n      let currentDate;\n      if (new Date().getDate() < 10) {\n        currentDate = `0${new Date().getDate()}`;\n      } else {\n        currentDate = new Date().getDate();\n      }\n\n      let currentHour;\n      if (new Date().getHours() === 0) {\n        currentHour = '12';\n      } else if (new Date().getHours() < 10) {\n        currentHour = `0${new Date().getHours()}`;\n      } else {\n        currentHour = new Date().getHours();\n      }\n\n      let currentMinute;\n      if (new Date().getMinutes() < 10) {\n        currentMinute = `0${new Date().getMinutes()}`;\n      } else {\n        currentMinute = new Date().getMinutes();\n      }\n\n      const soon = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:59`;\n      const soon1 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:51`;\n      const soon2 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:05`;\n      const tomorrow = `${currentYear}-${currentMonth}-28T12:00`;\n      const tomorrow1 = `${currentYear}-${currentMonth}-28T13:00`;\n      const overdue = `${currentYear}-01-01T${currentHour}:${currentMinute}`;\n      const overdue1 = `${currentYear}-12-24T${currentHour}:${currentMinute}`;\n      const schedule1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tomorrow, 'Car maintenance', 'High', 'tab-2');\n      const schedule2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon, 'Laundry', 'Low', 'tab-3');\n      const schedule3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overdue, 'Party', 'Medium', 'tab-4');\n      const schedule4 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon2, 'Drink water', 'Medium', 'tab-5');\n      const schedule5 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tomorrow1, 'Pay bills', 'High', 'tab-2');\n      const schedule6 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon1, 'Scrub bathroom', 'Low', 'tab-3');\n      const schedule7 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overdue1, 'Buy food', 'Medium', 'tab-4');\n      storage.storage.push(schedule1);\n      storage.storage.push(schedule2);\n      storage.storage.push(schedule3);\n      storage.storage.push(schedule4);\n      storage.storage.push(schedule5);\n      storage.storage.push(schedule6);\n      storage.storage.push(schedule7);\n\n      // create another file to remember ID number for generation\n      localStorage.setItem('todo-id-TYLPHE', 0);\n      storage.sort();\n      storage.save();\n    } else {\n      const save = localStorage.getItem('todo-TYLPHE');\n      storage.storage = JSON.parse(save);\n\n      const id = localStorage.getItem('todo-id-TYLPHE');\n      storage.id = JSON.parse(id);\n    }\n  },\n\n  save: () => {\n    const save = JSON.stringify(storage.storage);\n    const id = JSON.stringify(storage.id);\n    localStorage.setItem('todo-TYLPHE', save);\n    localStorage.setItem('todo-id-TYLPHE', id);\n  },\n\n  sort: () => {\n    storage.storage.sort(\n      (a, b) => {\n        if (a.due < b.due) {\n          return -1;\n        }\n        if (a.due > b.due) {\n          return 1;\n        }\n        return 0;\n      },\n    );\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://to-do-list/./src/storage/storage.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage/storage.js");
/******/ 	
/******/ })()
;