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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\nconst UI = (() => {\r\n    const projectsList = document.getElementById('projects');\r\n    const createAddProjectButton = ()=>{\r\n      const text=\"Add project\"\r\n      const li = document.createElement('li');\r\n      li.id ='projectButton';\r\n      const img = document.createElement('img');\r\n      img.src=\"../dist/icons/plus.svg\";\r\n      img.classList.add('plus');\r\n      img.alt='';  \r\n      const button = document.createElement('button');\r\n      button.id = 'addProjectButton';\r\n      button.append(img,text);\r\n      li.append(button);\r\n      projectsList.append(li);\r\n      button.addEventListener('click',addProject);\r\n    }\r\n    const removeAddProjectButton = ()=>{\r\n      const button = document.getElementById('projectButton');\r\n      projectsList.removeChild(button);\r\n    }\r\n    const removeForm = (e)=>{\r\n        projectsList.removeChild(e);\r\n    }\r\n    const addProject =()=>{\r\n      removeAddProjectButton();\r\n      const li = document.createElement('li');\r\n      const form = document.createElement('form');\r\n      const input = document.createElement('input');\r\n      input.id='projectName';\r\n      input.type='text';\r\n      input.placeholder='Name';\r\n      input.required= true;\r\n      const confirmButton = document.createElement('button');\r\n      confirmButton.textContent=\"create\";\r\n      confirmButton.type='submit';\r\n      confirmButton.classList.add('confirm');\r\n      const cancelButton = document.createElement('button');\r\n      cancelButton.textContent=\"cancel\";\r\n      cancelButton.classList.add('cancel');\r\n      cancelButton.type=\"button\";\r\n      cancelButton.addEventListener(\"click\",(e)=>{\r\n        removeForm(e.target.parentNode.parentNode);\r\n        createAddProjectButton();\r\n      })\r\n      form.append(input, confirmButton, cancelButton);\r\n      form.addEventListener('submit',(e)=>{\r\n        e.preventDefault();\r\n        let name = document.getElementById('projectName').value;\r\n        if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(\"Projects\",name)){\r\n          console.log(\"found\");\r\n        }else{\r\n          console.log(\"not found\");\r\n        }\r\n        removeForm(e.target.parentNode);\r\n        createAddProjectButton();\r\n      })\r\n      li.append(form);\r\n      projectsList.append(li);\r\n    }\r\n    createAddProjectButton();\r\n    _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeLocalStorage();\r\n    return {\r\n\r\n      \r\n    };\r\n  })();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\nclass Project{\r\n    constructor(name){\r\n        this.name=name;\r\n        this.tasks = [];\r\n        \r\n        \r\n        \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Storage{\r\n    static find(key,name){\r\n        return localStorage.getItem(key);\r\n    }\r\n    static addItem(key,value){\r\n        localStorage.setItem(key,value);\r\n    }\r\n    static initializeLocalStorage(){\r\n        if (localStorage.getItem('Projects')){\r\n            return;\r\n        }\r\n        else{\r\n            localStorage.setItem(\"Projects\",JSON.stringify([]));\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;