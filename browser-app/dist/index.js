/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/EventListener.ts":
/*!*****************************!*\
  !*** ./ts/EventListener.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListener: () => (/* binding */ EventListener)
/* harmony export */ });
class EventListener {
    constructor() {
        this.listeners = {};
    }
    add(listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event,
            element,
            handler,
        };
        element.addEventListener(event, handler);
    }
    remove(listenerId) {
        const listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    }
}


/***/ }),

/***/ "./ts/Task.ts":
/*!********************!*\
  !*** ./ts/Task.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(properties) {
        this.title = properties.title;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListener */ "./ts/EventListener.ts");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./ts/Task.ts");


class Application {
    constructor() {
        this.eventListener = new _EventListener__WEBPACK_IMPORTED_MODULE_0__.EventListener();
        this.handleSubmit = (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('title');
            if (!titleInput.value)
                return;
            const task = new _Task__WEBPACK_IMPORTED_MODULE_1__.Task({ title: titleInput.value });
            console.log(task);
        };
    }
    start() {
        const createForm = document.getElementById('createForm');
        this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit);
    }
}
window.addEventListener('load', () => {
    const app = new Application();
    app.start();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRTyxNQUFNLGFBQWE7SUFBMUI7UUFDcUIsY0FBUyxHQUFjLEVBQUU7SUFxQjlDLENBQUM7SUFuQkcsR0FBRyxDQUFDLFVBQWtCLEVBQUUsS0FBYSxFQUFFLE9BQW9CLEVBQUUsT0FBMkI7UUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUN6QixLQUFLO1lBQ0wsT0FBTztZQUNQLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBa0I7UUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFFM0MsSUFBRyxDQUFDLFFBQVE7WUFBRSxPQUFNO1FBRXBCLFFBQVEsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qk0sTUFBTSxJQUFJO0lBR2IsWUFBWSxVQUE2QjtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLO0lBQ2pDLENBQUM7Q0FDSjs7Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ2xCO0FBRTdCLE1BQU0sV0FBVztJQUFqQjtRQUNxQixrQkFBYSxHQUFHLElBQUkseURBQWEsRUFBRTtRQVE1QyxpQkFBWSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUVsQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUI7WUFFdkUsSUFBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2dCQUFFLE9BQU07WUFFNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQWhCRyxLQUFLO1FBQ0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQWdCO1FBRXZFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyRixDQUFDO0NBWUo7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsRUFBRTtJQUM3QixHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ2YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi90cy9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvVGFzay50cyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBMaXN0ZW5lcnMgPSB7XG4gICAgW2lkOiBzdHJpbmddOiB7XG4gICAgICAgIGV2ZW50OiBzdHJpbmdcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnRcbiAgICAgICAgaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHt9XG5cbiAgICBhZGQobGlzdGVuZXJJZDogc3RyaW5nLCBldmVudDogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2xpc3RlbmVySWRdID0ge1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcbiAgICB9XG5cbiAgICByZW1vdmUobGlzdGVuZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF1cblxuICAgICAgICBpZighbGlzdGVuZXIpIHJldHVyblxuXG4gICAgICAgIGxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci5ldmVudCwgbGlzdGVuZXIuaGFuZGxlcilcblxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIHRpdGxlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiB7IHRpdGxlOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gcHJvcGVydGllcy50aXRsZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9FdmVudExpc3RlbmVyXCJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrXCJcblxuY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyKClcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjcmVhdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZUZvcm0nKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5hZGQoJ3N1Ym1pdC1oYW5kbGVyJywgJ3N1Ym1pdCcsIGNyZWF0ZUZvcm0sIHRoaXMuaGFuZGxlU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU3VibWl0ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcblxuICAgICAgICBpZighdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHsgdGl0bGU6IHRpdGxlSW5wdXQudmFsdWUgfSlcbiAgICAgICAgY29uc29sZS5sb2codGFzaylcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbigpXG4gICAgYXBwLnN0YXJ0KClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9