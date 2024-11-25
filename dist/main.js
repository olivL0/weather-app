/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\r\n\r\n\r\nconst searchForm = document.getElementById(\"searchForm\");\r\nconst searchInput = document.getElementById(\"searchInput\");\r\nconst searchBtn = document.getElementById(\"searchBtn\");\r\n\r\nsearchForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n});\r\n\r\nsearchBtn.addEventListener(\"click\", async () => {\r\n    if (searchInput.value === \"\") return;\r\n    const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(searchInput.value);\r\n    _modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSearchResult(weatherData);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ047QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUFPO0FBQ3JDLElBQUkscURBQUk7QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJcIjtcclxuaW1wb3J0IHZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3XCI7XHJcblxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGb3JtXCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcclxuICAgIHZpZXcuc2V0U2VhcmNoUmVzdWx0KHdlYXRoZXJEYXRhKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst view = (() => {\r\n    function setSearchResult(weatherData) {\r\n        if (!weatherData) return;\r\n\r\n        const searchResult = document.getElementById(\"searchResult\");\r\n        searchResult.classList.add(\"active\");\r\n\r\n        const cityName = document.getElementById(\"cityName\");\r\n        const temperature = document.getElementById(\"temperature\");\r\n        const feelsLike = document.getElementById(\"feelsLike\");\r\n        const humidity = document.getElementById(\"humidity\");\r\n        const wind = document.getElementById(\"wind\");\r\n\r\n        cityName.textContent = `${weatherData.cityName}`;\r\n        temperature.textContent = `${weatherData.temperature}`;\r\n        feelsLike.textContent = `${weatherData.feelsLike}`;\r\n        humidity.textContent = `${weatherData.humidity}`;\r\n        wind.textContent = `${weatherData.wind}`;\r\n    }\r\n\r\n    return { setSearchResult };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQscUNBQXFDLHdCQUF3QjtBQUM3RCxtQ0FBbUMsc0JBQXNCO0FBQ3pELGtDQUFrQyxxQkFBcUI7QUFDdkQsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcuanM/YTI5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aWV3ID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hSZXN1bHRcIik7XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5TmFtZVwiKTtcclxuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XHJcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XHJcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xyXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XHJcblxyXG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY2l0eU5hbWV9YDtcclxuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLnRlbXBlcmF0dXJlfWA7XHJcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuZmVlbHNMaWtlfWA7XHJcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX1gO1xyXG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS53aW5kfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc2V0U2VhcmNoUmVzdWx0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/view.js\n");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() => {\r\n    function convertData(data) {\r\n        const {\r\n            name: cityName,\r\n            main: { temp: temperature, feels_like: feelsLike, humidity },\r\n            wind: { speed: windSpeed },\r\n        } = data;\r\n        return { cityName, temperature, feelsLike, humidity, windSpeed };\r\n    }\r\n\r\n    async function getData(city) {\r\n        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=965491d20393dd9397c201ec2d7638cd`;\r\n    try {\r\n        const response = await fetch(endpoint, { mode: \"cors\"});\r\n        if (!response.ok) throw new Error(`City ${city} not found`);\r\n        const data = convertData(await response.json());\r\n        return data;\r\n    } catch (error) {\r\n        alert(error);\r\n        return null;\r\n    }\r\n}\r\n    return { getData };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBb0Q7QUFDeEUsb0JBQW9CLGtCQUFrQjtBQUN0QyxVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxLQUFLO0FBQ25GO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQsa0RBQWtELE1BQU07QUFDeEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzP2NhMWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBuYW1lOiBjaXR5TmFtZSxcclxuICAgICAgICAgICAgbWFpbjogeyB0ZW1wOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eSB9LFxyXG4gICAgICAgICAgICB3aW5kOiB7IHNwZWVkOiB3aW5kU3BlZWQgfSxcclxuICAgICAgICB9ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4geyBjaXR5TmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9OTY1NDkxZDIwMzkzZGQ5Mzk3YzIwMWVjMmQ3NjM4Y2RgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7IG1vZGU6IFwiY29yc1wifSk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4gICAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/weather.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;