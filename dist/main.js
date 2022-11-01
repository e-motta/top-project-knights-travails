/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "./src/square.js");


const Board = () => {
  const createBoard = () => {
    const squares = [];
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        squares.push((0,_square__WEBPACK_IMPORTED_MODULE_0__["default"])(i, j));
      }
    }
    return squares;
  };

  const squares = createBoard();

  const findSquare = (coord) => squares.filter(
    (n) => JSON.stringify(n.coord) === JSON.stringify(coord),
  )[0];

  return { squares, findSquare };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */
const Knight = (board) => {
  const getShortestPath = (coord, targetCoord, path = [], shortestPath = []) => {
    const isCoordInPath = path.some((c) => c === coord);
    if (!isCoordInPath) {
      const square = board.findSquare(coord);

      path.push(coord);

      const squareLeavesToTarget = square.leaves.some(
        (l) => JSON.stringify(l) === JSON.stringify(targetCoord),
      );
      if (squareLeavesToTarget) path.push(targetCoord);

      const isShortestPath = shortestPath.length === 0 || path.length < shortestPath.length;
      console.log(isShortestPath);
      if (isShortestPath) {
        shortestPath = path;
        path = [];
      }
      square.leaves.forEach((l) => getShortestPath(l, targetCoord, path, shortestPath));
    }

    return shortestPath;
  };

  return { getShortestPath };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);


/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Square = (i, j) => {
  const coord = [i, j];
  const leaves = [
    i - 1 >= 0 && j - 2 >= 0 ? [i - 1, j - 2] : null,
    i - 2 >= 0 && j - 1 >= 0 ? [i - 2, j - 1] : null,
    i - 1 >= 0 && j + 2 <= 7 ? [i - 1, j + 2] : null,
    i + 2 <= 7 && j - 1 >= 0 ? [i + 2, j - 1] : null,
    i - 2 >= 0 && j + 1 <= 7 ? [i - 2, j + 1] : null,
    i + 1 <= 7 && j - 2 >= 0 ? [i + 1, j - 2] : null,
    i + 2 <= 7 && j + 1 <= 7 ? [i + 2, j + 1] : null,
    i + 1 <= 7 && j + 2 <= 7 ? [i + 1, j + 2] : null,
  ].filter((n) => n);

  return { coord, leaves };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "./src/square.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ "./src/knight.js");




const root = {
  value: [0, 0],
  link: [],
};
root.link = {
  value: [1, 2],
  link: [root],
};

const board = (0,_board__WEBPACK_IMPORTED_MODULE_1__["default"])();
const knight = (0,_knight__WEBPACK_IMPORTED_MODULE_2__["default"])(board);
console.log(knight.getShortestPath([0, 0], [5, 5]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHNCQUFzQixPQUFPO0FBQzdCLHFCQUFxQixtREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUNoQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNGO0FBQ0U7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxrREFBSztBQUNuQixlQUFlLG1EQUFNO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3F1YXJlIGZyb20gJy4vc3F1YXJlJztcblxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqICs9IDEpIHtcbiAgICAgICAgc3F1YXJlcy5wdXNoKFNxdWFyZShpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcXVhcmVzO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZXMgPSBjcmVhdGVCb2FyZCgpO1xuXG4gIGNvbnN0IGZpbmRTcXVhcmUgPSAoY29vcmQpID0+IHNxdWFyZXMuZmlsdGVyKFxuICAgIChuKSA9PiBKU09OLnN0cmluZ2lmeShuLmNvb3JkKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmQpLFxuICApWzBdO1xuXG4gIHJldHVybiB7IHNxdWFyZXMsIGZpbmRTcXVhcmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IEtuaWdodCA9IChib2FyZCkgPT4ge1xuICBjb25zdCBnZXRTaG9ydGVzdFBhdGggPSAoY29vcmQsIHRhcmdldENvb3JkLCBwYXRoID0gW10sIHNob3J0ZXN0UGF0aCA9IFtdKSA9PiB7XG4gICAgY29uc3QgaXNDb29yZEluUGF0aCA9IHBhdGguc29tZSgoYykgPT4gYyA9PT0gY29vcmQpO1xuICAgIGlmICghaXNDb29yZEluUGF0aCkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZShjb29yZCk7XG5cbiAgICAgIHBhdGgucHVzaChjb29yZCk7XG5cbiAgICAgIGNvbnN0IHNxdWFyZUxlYXZlc1RvVGFyZ2V0ID0gc3F1YXJlLmxlYXZlcy5zb21lKFxuICAgICAgICAobCkgPT4gSlNPTi5zdHJpbmdpZnkobCkgPT09IEpTT04uc3RyaW5naWZ5KHRhcmdldENvb3JkKSxcbiAgICAgICk7XG4gICAgICBpZiAoc3F1YXJlTGVhdmVzVG9UYXJnZXQpIHBhdGgucHVzaCh0YXJnZXRDb29yZCk7XG5cbiAgICAgIGNvbnN0IGlzU2hvcnRlc3RQYXRoID0gc2hvcnRlc3RQYXRoLmxlbmd0aCA9PT0gMCB8fCBwYXRoLmxlbmd0aCA8IHNob3J0ZXN0UGF0aC5sZW5ndGg7XG4gICAgICBjb25zb2xlLmxvZyhpc1Nob3J0ZXN0UGF0aCk7XG4gICAgICBpZiAoaXNTaG9ydGVzdFBhdGgpIHtcbiAgICAgICAgc2hvcnRlc3RQYXRoID0gcGF0aDtcbiAgICAgICAgcGF0aCA9IFtdO1xuICAgICAgfVxuICAgICAgc3F1YXJlLmxlYXZlcy5mb3JFYWNoKChsKSA9PiBnZXRTaG9ydGVzdFBhdGgobCwgdGFyZ2V0Q29vcmQsIHBhdGgsIHNob3J0ZXN0UGF0aCkpO1xuICAgIH1cblxuICAgIHJldHVybiBzaG9ydGVzdFBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0U2hvcnRlc3RQYXRoIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLbmlnaHQ7XG4iLCJjb25zdCBTcXVhcmUgPSAoaSwgaikgPT4ge1xuICBjb25zdCBjb29yZCA9IFtpLCBqXTtcbiAgY29uc3QgbGVhdmVzID0gW1xuICAgIGkgLSAxID49IDAgJiYgaiAtIDIgPj0gMCA/IFtpIC0gMSwgaiAtIDJdIDogbnVsbCxcbiAgICBpIC0gMiA+PSAwICYmIGogLSAxID49IDAgPyBbaSAtIDIsIGogLSAxXSA6IG51bGwsXG4gICAgaSAtIDEgPj0gMCAmJiBqICsgMiA8PSA3ID8gW2kgLSAxLCBqICsgMl0gOiBudWxsLFxuICAgIGkgKyAyIDw9IDcgJiYgaiAtIDEgPj0gMCA/IFtpICsgMiwgaiAtIDFdIDogbnVsbCxcbiAgICBpIC0gMiA+PSAwICYmIGogKyAxIDw9IDcgPyBbaSAtIDIsIGogKyAxXSA6IG51bGwsXG4gICAgaSArIDEgPD0gNyAmJiBqIC0gMiA+PSAwID8gW2kgKyAxLCBqIC0gMl0gOiBudWxsLFxuICAgIGkgKyAyIDw9IDcgJiYgaiArIDEgPD0gNyA/IFtpICsgMiwgaiArIDFdIDogbnVsbCxcbiAgICBpICsgMSA8PSA3ICYmIGogKyAyIDw9IDcgPyBbaSArIDEsIGogKyAyXSA6IG51bGwsXG4gIF0uZmlsdGVyKChuKSA9PiBuKTtcblxuICByZXR1cm4geyBjb29yZCwgbGVhdmVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTcXVhcmUgZnJvbSAnLi9zcXVhcmUnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IEtuaWdodCBmcm9tICcuL2tuaWdodCc7XG5cbmNvbnN0IHJvb3QgPSB7XG4gIHZhbHVlOiBbMCwgMF0sXG4gIGxpbms6IFtdLFxufTtcbnJvb3QubGluayA9IHtcbiAgdmFsdWU6IFsxLCAyXSxcbiAgbGluazogW3Jvb3RdLFxufTtcblxuY29uc3QgYm9hcmQgPSBCb2FyZCgpO1xuY29uc3Qga25pZ2h0ID0gS25pZ2h0KGJvYXJkKTtcbmNvbnNvbGUubG9nKGtuaWdodC5nZXRTaG9ydGVzdFBhdGgoWzAsIDBdLCBbNSwgNV0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==