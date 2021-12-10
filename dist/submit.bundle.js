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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n//factory function to create to do contents\nfunction factory(due, desc, priority){\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id += 1;\n    return {\n        id: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id,\n        due: due,\n        desc: desc,\n        priority: priority,\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factory);\n\n//# sourceURL=webpack://to-do-list/./src/factory.js?");

/***/ }),

/***/ "./src/form/submit.js":
/*!****************************!*\
  !*** ./src/form/submit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory.js */ \"./src/factory.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.js */ \"./src/storage.js\");\n/* harmony import */ var _push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../push.js */ \"./src/push.js\");\n\n\n\nlet submit = {\n    submit: () => {\n        let submit = document.createElement(`button`);\n            submit.className = `submit`;\n            submit.textContent = `Submit`;\n            submit.formTarget = `_parent`;\n            submit.onsubmit = `return false`;\n            submit.onclick = (e) => {\n                e.preventDefault();\n                let due = document.getElementById(`end`).value;\n                let desc = document.getElementById(`text`).value;\n                let priority = ``; \n                    if(document.querySelector(`input[name=\"radio\"]:checked`) == null){\n                        priority = ` `;\n                    }\n                    else{\n                        priority = document.querySelector(`input[name=\"radio\"]:checked`).id;\n                    }\n                if(due && desc){\n                    let submit = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(due, desc, priority);\n                    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.push(submit);\n                    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sort();\n                    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save();\n                    (0,_push_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                }\n                else{console.log(`error`)};\n            }\n        return submit;\n    }  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);\n\n//# sourceURL=webpack://to-do-list/./src/form/submit.js?");

/***/ }),

/***/ "./src/push.js":
/*!*********************!*\
  !*** ./src/push.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ push)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _rowOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rowOptions.js */ \"./src/rowOptions.js\");\n\n\n\n\n//push populates table\nfunction push(){\n    //remove all list items\n    while(document.querySelector(`.list`)){\n        document.querySelector(`.table`).removeChild(document.querySelector(`.list`));\n    }\n    //read array, draw new list, add id to highlight last added item\n    console.log(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage);\n    for(let i = 0; i < _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage.length; i++){\n        let row = document.createElement(`tr`);\n        row.classList.add(`list`);;\n        let due = document.createElement(`td`);\n        let desc = document.createElement(`td`);\n        let priority = document.createElement(`td`);\n        let options = document.createElement(`td`);\n            due.className = `due-${_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} due`;\n            desc.className = `desc-${_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} desc`;\n            priority.className = `priority-${_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} priority`;\n            options.className = `options-${_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} options`;\n            due.textContent = dateSplitter();\n            \n            function dateSplitter(){\n                //slice out date from time\n                let date = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n                date = date.slice(0, 10);\n                //flip yyyy-dd-mm to mm-dd-yyyy lol\n                let dd = date.slice(8);\n                let mm = date.slice(5, 7);\n                let yy = date.slice(0, 4);\n                date = `${mm}-${dd}-${yy}`;\n                //slice out time from date\n                let time = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n                time = time.slice(11);\n                return `${date}\\n${time}`;\n            }\n\n            desc.textContent = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].desc;\n            priority.textContent = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].priority;\n\n        row.append(due, desc, priority, options);\n        row.id = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id;\n\n        let table = document.querySelector(`.table`);\n            table.appendChild(row);\n        }\n    let lastAdded = document.getElementById(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id);\n    lastAdded.classList.add(`last-added`);\n    _rowOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n}\n\n//# sourceURL=webpack://to-do-list/./src/push.js?");

/***/ }),

/***/ "./src/rowOptions.js":
/*!***************************!*\
  !*** ./src/rowOptions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet options = {\n    init: () => {\n        let listLength = document.getElementsByClassName(`list`).length;\n        for(let i = 0; i < listLength; i++){\n            let optionsDiv = document.querySelector(`.options-${i+1}`);\n\n            let completeButton = document.createElement(`button`);\n            let editButton = document.createElement(`button`);\n            let deleteButton = document.createElement(`button`);\n\n            completeButton.className = `complete`;\n            editButton.className = `edit`;\n            deleteButton.className = `delete`;\n\n            completeButton.textContent = `Complete`;\n            editButton.textContent = `Edit`;\n            deleteButton.textContent = `Delete`;\n\n\n            optionsDiv.append(completeButton, editButton, deleteButton);\n        }\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options);\n\n//# sourceURL=webpack://to-do-list/./src/rowOptions.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n\nlet storage = {\n    id: 0,\n    storage: [],\n    getset: () => {\n        if(localStorage.getItem(`todo-TYLPHE`) == null){\n            //set a file for to do items\n            localStorage.setItem(`todo-TYLPHE`, []);\n\n            //prepopulate some items and push it to table\n            let schedule1 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`2021-11-01T03:15`, `Pay bills`, `Medium`);\n            let schedule2 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`2021-10-01T14:15`,`Laundry`, ``);\n            let schedule3 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`2021-12-01T23:15`, `Codin Project`, `High`);\n            storage.storage.push(schedule1);\n            storage.storage.push(schedule2);\n            storage.storage.push(schedule3);\n\n            //create another file to remember ID number for generation\n            localStorage.setItem(`todo-id-TYLPHE`, 0);\n    \n            console.log(storage.id);\n            storage.save();\n        }\n        else{\n            let save = localStorage.getItem(`todo-TYLPHE`);\n            storage.storage = JSON.parse(save);\n\n            let id = localStorage.getItem(`todo-id-TYLPHE`);\n            storage.id = JSON.parse(id);\n        }\n    },\n    save: () => {\n        let save = JSON.stringify(storage.storage);\n        let id = JSON.stringify(storage.id);\n        localStorage.setItem(`todo-TYLPHE`, save);\n        localStorage.setItem(`todo-id-TYLPHE`, id);\n        console.log(`saved`);\n    },\n    sort: () => {\n        storage.storage.sort(\n            (a, b) => {\n                if(a.due < b.due){\n                    return -1;\n                }\n                if (a.due > b.due){\n                    return 1;\n                }\n                return 0;\n            }\n        );\n        console.log(storage.storage);\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form/submit.js");
/******/ 	
/******/ })()
;