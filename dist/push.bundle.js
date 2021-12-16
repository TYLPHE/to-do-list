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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage/storage.js\");\n\n\n//factory function to create to do contents\nfunction factory(due, desc, priority){\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id += 1;\n    return {\n        id: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id,\n        due: due,\n        desc: desc,\n        priority: priority,\n        complete: false,\n        tag: ``,\n        lastEdited: false,\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factory);\n\n//# sourceURL=webpack://to-do-list/./src/storage/factory.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/storage/factory.js\");\n\nlet storage = {\n    id: 0,\n    storage: [],\n    getset: () => {\n        if(localStorage.getItem(`todo-TYLPHE`) == null){\n            //set a file for to do items\n            localStorage.setItem(`todo-TYLPHE`, []);\n\n            //prepopulate some items and push it to table\n            let tomorrow = `${new Date().getFullYear()}-${new Date().getMonth()+1}-28T12:00`;\n            let soon = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + new Date().getHours() + `:59`;\n            let overdue = `${new Date().getFullYear()}-01-01T` + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();\n            let schedule1 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tomorrow, `Pay bills`, `High`);\n            let schedule2 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(soon,`Laundry`, `Low`);\n            let schedule3 = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overdue, `Party`, `Medium`);\n            storage.storage.push(schedule1);\n            storage.storage.push(schedule2);\n            storage.storage.push(schedule3);\n\n            //create another file to remember ID number for generation\n            localStorage.setItem(`todo-id-TYLPHE`, 0);\n    \n            storage.save();\n        }\n        else{\n            let save = localStorage.getItem(`todo-TYLPHE`);\n            storage.storage = JSON.parse(save);\n\n            let id = localStorage.getItem(`todo-id-TYLPHE`);\n            storage.id = JSON.parse(id);\n        }\n    },\n    save: () => {\n        let save = JSON.stringify(storage.storage);\n        let id = JSON.stringify(storage.id);\n        localStorage.setItem(`todo-TYLPHE`, save);\n        localStorage.setItem(`todo-id-TYLPHE`, id);\n    },\n    sort: () => {\n        storage.storage.sort(\n            (a, b) => {\n                if(a.due < b.due){\n                    return -1;\n                }\n                if (a.due > b.due){\n                    return 1;\n                }\n                return 0;\n            }\n        );\n        console.log(storage.storage);\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage/storage.js?");

/***/ }),

/***/ "./src/table/lastEdited.js":
/*!*********************************!*\
  !*** ./src/table/lastEdited.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.js */ \"./src/storage/storage.js\");\n\n\nlet edited = {\n    init: (obj) => {\n        edited.remove();\n        edited.add(obj);\n    },\n    //change all last edited values to false\n    remove: () => {\n        for(let i in _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage){\n            _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].lastEdited = false;\n        }\n    },\n    add:(obj) => {\n        obj.lastEdited = true;\n    },\n    //add a last edited to highlight last edited item\n    highlight: () => {\n        let targetObject = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage.find(x => x.lastEdited);\n        if(targetObject){\n            let edited = document.getElementById(`${targetObject.id}`);\n            edited.classList.add(`last-edited`);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edited);\n\n//# sourceURL=webpack://to-do-list/./src/table/lastEdited.js?");

/***/ }),

/***/ "./src/table/push.js":
/*!***************************!*\
  !*** ./src/table/push.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.js */ \"./src/storage/storage.js\");\n/* harmony import */ var _rowOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rowOptions.js */ \"./src/table/rowOptions.js\");\n/* harmony import */ var _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lastEdited.js */ \"./src/table/lastEdited.js\");\n\n\n\n\n//push populates table\nlet push = {\n    init: () => {\n        push.removeRows();\n        push.addRows();\n        (0,_rowOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].highlight();\n    },\n    //remove all the rows in table\n    removeRows: () => {\n        while(document.querySelector(`.list`)){\n            document.querySelector(`.table`).removeChild(document.querySelector(`.list`));\n        }\n    },\n    //read storage array and append rows to page\n    addRows: () => {\n        for(let i = 0; i < _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage.length; i++){\n            let row = document.createElement(`tr`);\n            row.classList.add(`list`);;\n            let due = document.createElement(`td`);\n            let desc = document.createElement(`td`);\n            let priority = document.createElement(`td`);\n            let options = document.createElement(`td`);\n                due.className = `due-${_storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} due`;\n                desc.className = `desc-${_storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} desc`;\n                priority.className = `priority-${_storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} priority`;\n                options.className = `options-${_storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id} options`;\n                due.textContent = push.dateSplitter(i);\n                desc.textContent = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].desc;\n                priority.textContent = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].priority;\n            row.append(due, desc, priority, options);\n            row.id = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].id;\n\n            let table = document.querySelector(`.table`);\n                table.appendChild(row);\n            \n            //search array for overdue tasks and mark them red and overdue\n            push.overdue(row, due, i);\n\n            //search array for completed items and cross them out\n            push.markComplete(row, due, desc, i);\n        }\n    },\n    //convert the Date().toISOString() to a more friendly format\n    dateSplitter: (i) => {\n        let today = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;\n        //slice out date from time\n        let date = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n        date = date.slice(0, 10);\n\n        //flip yyyy-dd-mm to mm-dd-yyyy lol\n        let dd = date.slice(8);\n        let mm = date.slice(5, 7);\n        let yy = date.slice(0, 4);\n        let formatDate = `${mm}-${dd}-${yy}`;\n        //slice out time from date\n        let time = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n        time = time.slice(11);\n        let convertedTime = push.convert24to12(time);\n        //omit date if due today\n        if(today == date){\n            return convertedTime;\n        }\n        else{\n            return `${formatDate}\\n${convertedTime}`;\n        }\n    },\n    //add overdue div if time is over now\n    overdue: (row, due, i) => {\n        let now = push.currentTime();\n        let date = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].due;\n        let compare = push.compare(date, now);\n        if(compare <= 0){\n            row.classList.add(`overdue`);\n            let overdue = document.createElement(`div`);\n            overdue.textContent = `(Overdue)`;\n            due.appendChild(overdue);\n        }\n    },\n    //change time format to AM/PM\n    convert24to12: (time) => {\n        let hh = time.slice(0,2);\n        let mm = time.slice(3);\n        if(hh - 12 > 0){\n            hh = hh-12;\n            return `${hh}:${mm} PM`;\n        }\n        else if(hh - 12 == 0){\n            return `12:${mm} PM`;\n        }\n        else if(hh == 0){\n            return `12:${mm} AM`;\n        }\n        else{\n            return `${hh-0}:${mm} AM`;\n        }\n    },\n    //update current time to properly mark overdue lists.\n    currentTime: () => {\n        let now = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T`  + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();\n        return now;\n    },\n    //compare date values for overdue function\n    compare: (date, now) => {\n        let compare = date.localeCompare(now)\n        return compare;\n    },\n    //change complete button to green if completed\n    markComplete: (row, due, desc, i) => {\n        if(_storage_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage[i].complete){\n            //remove the overdue text\n            if(due.lastChild.textContent === `(Overdue)`){\n                due.removeChild(due.lastChild);\n            }\n            //remove the red overdue class\n            if(row.classList.contains(`overdue`)){\n                row.classList.remove(`overdue`);\n            }\n            desc.classList.add(`completed`);\n            let complete = document.createElement(`div`);\n            complete.textContent = `(Complete)`;\n            due.appendChild(complete);\n            row.classList.add(`completed`);\n        }\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (push.init);\n\n//# sourceURL=webpack://to-do-list/./src/table/push.js?");

/***/ }),

/***/ "./src/table/rowOptions.js":
/*!*********************************!*\
  !*** ./src/table/rowOptions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push.js */ \"./src/table/push.js\");\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.js */ \"./src/storage/storage.js\");\n/* harmony import */ var _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lastEdited.js */ \"./src/table/lastEdited.js\");\n\n\n\n\nlet options = {\n    init: () => {\n        options.addButtons();\n    },\n    addButtons: () => {\n        let listLength = document.getElementsByClassName(`list`).length;\n        for(let i = 0; i < listLength; i++){\n            let optionsDiv = document.querySelector(`.options-${_storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage[i].id}`);\n\n            let completeButton = document.createElement(`button`);\n            let editButton = document.createElement(`button`);\n            let deleteButton = document.createElement(`button`);\n\n            completeButton.className = `complete`;\n            editButton.className = `edit`;\n            deleteButton.className = `delete`;\n\n            completeButton.textContent = `Complete`;\n            editButton.textContent = `Edit`;\n            deleteButton.textContent = `Delete`;\n\n            completeButton.addEventListener(`click`, options.complete);\n            editButton.addEventListener(`click`, options.edit);\n            deleteButton.addEventListener(`click`, options.delete);\n\n            optionsDiv.append(completeButton, editButton, deleteButton);\n        }\n    },\n    complete: (e) => {\n        let targetObject = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.find(x => x.id === parseInt(e.target.parentNode.parentNode.id));\n        if(targetObject.complete){\n            targetObject.complete = false;\n            _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(targetObject);\n            _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save();\n            (0,_push_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        }\n        else{\n            targetObject.complete = true;\n            _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(targetObject);\n            _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save();\n            (0,_push_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        }\n    },\n    //copy contents of row to form and then delete row\n    edit: (e) => {\n        let targetObject = e.target.parentNode.parentNode.id;\n        let storageObject = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.find(x => x.id === parseInt(targetObject));\n\n        let due = storageObject.due;\n        let desc = storageObject.desc;\n        let priority = storageObject.priority;\n\n        let dueInput = document.getElementById(`end`);\n        dueInput.value = due;\n        let textArea = document.getElementById(`text`);\n        textArea.defaultValue = desc;\n        let priorityInput = document.getElementById(priority);\n        priorityInput.checked = true;\n\n        options.delete(e);\n\n        let form = document.getElementById(`form`);\n        form.classList.add(`last-edited`);\n    },\n    //delete object from storage and redraw table\n    delete: (e) => {\n        let targetObject = e.target.parentNode.parentNode.id;\n        let storageObject = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.find(x => x.id === parseInt(targetObject));\n        _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.splice(_storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storage.indexOf(storageObject), 1);\n        _lastEdited_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove();\n        _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save();\n        (0,_push_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options.init);\n\n//# sourceURL=webpack://to-do-list/./src/table/rowOptions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/table/push.js");
/******/ 	
/******/ })()
;