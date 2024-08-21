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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/request */ \"./modules/request.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 august 2024')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcNumberInputs = document.querySelectorAll('.calc-block > input')\r\n\r\n    calcNumberInputs.forEach(elem => {\r\n        elem.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '')\r\n        })\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n\n    const handlerMenu = (e) => {\n        if (e.target.closest('.menu') || e.target.closest('.close-btn') || e.target.closest('ul>li>a')) {\n            menu.classList.toggle('active-menu')\n        }\n    }\n\n    document.addEventListener('click', handlerMenu)\n\n    // menuBtn.addEventListener('click', handlerMenu)\n    // closeBtn.addEventListener('click', handlerMenu)\n\n    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handlerMenu))\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const screenWidth = document.documentElement.offsetWidth\r\n\r\n    modal.style.opacity = 0\r\n    modal.style.visibility = 'hidden'\r\n\r\n    const animateOnModal = () => {\r\n        let opacity = 0\r\n        const animateOn = () => {\r\n            opacity += 0.04\r\n            modal.style.opacity = opacity;\r\n            if (opacity < 1) {\r\n                requestAnimationFrame(animateOn)\r\n            }\r\n        }\r\n        modal.style.display = 'block'\r\n        modal.style.visibility = 'visible'\r\n        animateOn()\r\n    }\r\n\r\n    const openModal = () => {\r\n        if (screenWidth < 768) {\r\n            modal.style.display = 'block'\r\n            modal.style.visibility = 'visible'\r\n            modal.style.opacity = 1\r\n        } else {\r\n            animateOnModal()\r\n        }\r\n    }\r\n\r\n    const animateOutModal = () => {\r\n        let opacity = 1\r\n        const animateOut = () => {\r\n            opacity -= 0.04\r\n            modal.style.opacity = opacity;\r\n            if (opacity > 0) {\r\n                requestAnimationFrame(animateOut)\r\n            } else {\r\n                modal.style.visibility = 'hidden'\r\n                modal.style.display = 'none'\r\n            }\r\n        }\r\n        animateOut()\r\n    }\r\n\r\n    const closeModal = () => {\r\n        if (screenWidth < 768) {\r\n            modal.style.display = 'none'\r\n        }\r\n        animateOutModal()\r\n    }\r\n\r\n    buttons.forEach(btn => btn.addEventListener('click', openModal))\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            closeModal()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/request.js":
/*!****************************!*\
  !*** ./modules/request.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst request = () => {\r\n    const userNameInputs = document.querySelectorAll('.form-name') // type=text\r\n    const userEmailInputs = document.querySelectorAll('.form-email') //type=email\r\n    const userPhoneInputs = document.querySelectorAll('.form-phone') //type=tel\r\n\r\n    const footerNameInput = document.getElementById('form2-name')\r\n    const footerMessageInput = document.getElementById('form2-message') //placeholder=\"Ваше сообщение\"\r\n\r\n    const nameHandler = e => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/, \"\");\r\n    };\r\n\r\n    userNameInputs.forEach(elem => {\r\n        elem.addEventListener('input', (e) => {\r\n            nameHandler(e)\r\n        })\r\n    })\r\n\r\n    userEmailInputs.forEach(elem => {\r\n        elem.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*']/g, '')\r\n        })\r\n    })\r\n\r\n    userPhoneInputs.forEach(elem => {\r\n        elem.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()\\-]/g, '')\r\n        })\r\n    })\r\n\r\n    footerNameInput.addEventListener('input', (e) => {\r\n        nameHandler(e)\r\n    })\r\n\r\n    footerMessageInput.addEventListener('input', (e) => {\r\n        nameHandler(e)\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\n\n//# sourceURL=webpack:///./modules/request.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content')\n    const slides = document.querySelectorAll('.portfolio-item')\n    const dots = document.querySelectorAll('.dot')\n    const timeInterval = 2000\n\n    let currentSlide = 0\n    let interval\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n       elems[index].classList.add(strClass)\n    }\n\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n        currentSlide++\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n    }\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer)\n    }\n\n    const stopSlide = () => {\n        clearInterval(interval)\n    }\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault()\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return\n        }\n\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index\n                }\n            })\n\n            if (currentSlide >= slides.length) {\n                currentSlide = 0\n            }\n\n            if (currentSlide < 0) {\n                currentSlide = slides.length - 1\n            }\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n    })\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide()\n        }\n    }, true)\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval)\n        }\n    }, true)\n\n    startSlide(timeInterval)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.service-header-tab')) {\r\n            tabs.forEach((tab, index) => {\r\n                const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timeHours = document.getElementById('timer-hours')\r\n    const timeMinutes = document.getElementById('timer-minutes')\r\n    const timeSeconds = document.getElementById('timer-seconds')\r\n\r\n    let idInterval\r\n\r\n    const addTimeZero = (time) => {\r\n        if(time < 10) {\r\n            return '0' + time\r\n        } else {\r\n            return time\r\n        }\r\n    }\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateStop = new Date(deadline).getTime()\r\n        const dateNow = new Date().getTime()\r\n        const timeRemaining = (dateStop - dateNow) / 1000\r\n        const hours = Math.floor(timeRemaining / 60 / 60)\r\n        const minutes = Math.floor((timeRemaining / 60) % 60)\r\n        const seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return {timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining()\r\n\r\n        timeHours.textContent = addTimeZero(getTime.hours)\r\n        timeMinutes.textContent = addTimeZero(getTime.minutes)\r\n        timeSeconds.textContent = addTimeZero(getTime.seconds)\r\n\r\n        if(getTime.timeRemaining < 0) {\r\n            timeHours.textContent = '00'\r\n            timeMinutes.textContent = '00'\r\n            timeSeconds.textContent = '00'\r\n            clearInterval(idInterval)\r\n        }\r\n        \r\n    }\r\n\r\n    updateClock()\r\n\r\n    idInterval = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;