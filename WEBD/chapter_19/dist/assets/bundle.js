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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPremUsers\": () => (/* binding */ getPremUsers),\n/* harmony export */   \"default\": () => (/* binding */ users)\n/* harmony export */ });\nconst users = [\r\n    { name: 'mario', premium: true },\r\n    { name: 'luigi', premium: false },\r\n    { name: 'yoshi', premium: true },\r\n    { name: 'toadd', premium: true },\r\n    { name: 'peach', premium: false }\r\n];\r\n\r\n// export const getPremUsers = users => {\r\n//     return users.filter ( user => user.premium == true ) ; //Only retain the premium users\r\n// };\r\n\r\n// export default users;   // Now, users is the default export value //?(there can only be one)\r\n\r\n\r\n//TODO: Export these in an alternate way\r\n\r\nconst getPremUsers = users => {\r\n    return users.filter ( user => user.premium == true ) ; //Only retain the premium users\r\n};\r\n\r\n\n\n//# sourceURL=webpack://chapter_19/./src/data.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleBody\": () => (/* binding */ styleBody),\n/* harmony export */   \"addTitle\": () => (/* binding */ addTitle),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconsole.log('dom file');\r\n\r\nconst body = document.querySelector('body');\r\n\r\n// export const styleBody = () => {\r\nconst styleBody = () => {\r\n    body.style.background = 'peachpuff';\r\n};\r\n\r\n// export const addTitle = (text) => {\r\nconst addTitle = (text) => {\r\n    const title = document.createElement('h1');\r\n    title.textContent = text ;\r\n    body.appendChild(title);\r\n};\r\n\r\nconst contact = 'mario@netninja.com'\r\n\r\n// Instead of using 'export' for individual things, we can also do it at the bottom\r\n\r\n\n\n//# sourceURL=webpack://chapter_19/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\r\n\r\n    //? Since there's only 1 default value, we can name it anything, 'users' to 'anything_we_want'\r\n    //? And we don't need to put it in curly braces either: {users} ><-- , users <--\r\n\r\nconsole.log('index file');\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.styleBody)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTitle)('test');\r\nconsole.log(_dom__WEBPACK_IMPORTED_MODULE_0__.contact);\r\n\r\nconst premusers = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPremUsers)(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nconsole.log(premusers)\r\n\r\nconsole.log(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://chapter_19/./src/index.js?");

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