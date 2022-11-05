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

  const findSquareByCoord = (coord) => squares.find(
    (n) => JSON.stringify(n.coord) === JSON.stringify(coord),
  );

  return { squares, findSquareByCoord };
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
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const Knight = (board) => {
  const includesArr = (outArr, inArr) => {
    const outArrStr = outArr.map((el) => JSON.stringify(el));
    return outArrStr.includes(JSON.stringify(inArr));
  };

  const createParentRelations = (originCoord, targetCoord, queue = []) => {
    const originSquare = board.findSquareByCoord(originCoord);

    if (includesArr(originSquare.leaves, targetCoord)) {
      const targetSquare = board.findSquareByCoord(targetCoord);
      targetSquare.parent = originSquare;
      queue.length = 0;
      return null;
    }

    originSquare.leaves.forEach((coord) => {
      const square = board.findSquareByCoord(coord);
      if (square.parent === null) square.parent = originSquare;
      queue.push(coord);
    });

    if (queue.length > 0) {
      return createParentRelations(queue.shift(), targetCoord, queue);
    }

    return null;
  };

  const clearParentRelations = () => {
    board.squares.forEach((square) => {
      square.parent = null;
    });
  };

  const traverseParentRelations = (originCoord, targetCoord, path = []) => {
    const originSquare = board.findSquareByCoord(originCoord);
    const targetSquare = board.findSquareByCoord(targetCoord);

    if (targetSquare.parent === originSquare) return path;

    path.unshift(targetSquare.parent.coord);

    return traverseParentRelations(originCoord, targetSquare.parent.coord, path);
  };

  const getShortestPath = (originCoord, targetCoord) => {
    createParentRelations(originCoord, targetCoord);

    const path = traverseParentRelations(originCoord, targetCoord);

    clearParentRelations();

    return [originCoord, ...path, targetCoord];
  };

  const knightMoves = (originCoord, targetCoord) => {
    const path = getShortestPath(originCoord, targetCoord);
    console.log(`=> You made it in ${path.length} moves!  Here's your path:`);
    path.forEach((step) => console.log(step));
  };

  return { knightMoves };
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
  const id = Number(`${i}${j}`);

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

  const parent = null;

  return {
    id, coord, leaves, parent,
  };
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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ "./src/knight.js");



const board = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
const knight = (0,_knight__WEBPACK_IMPORTED_MODULE_1__["default"])(board);

knight.knightMoves([0, 0], [3, 7]);
knight.knightMoves([1, 3], [4, 5]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHNCQUFzQixPQUFPO0FBQzdCLHFCQUFxQixtREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRXRCO0FBQ0EsdUJBQXVCLEVBQUUsRUFBRSxFQUFFOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN2QnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ0U7O0FBRTlCLGNBQWMsa0RBQUs7QUFDbkIsZUFBZSxtREFBTTs7QUFFckI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZSc7XG5cbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaiArPSAxKSB7XG4gICAgICAgIHNxdWFyZXMucHVzaChTcXVhcmUoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlcztcbiAgfTtcblxuICBjb25zdCBzcXVhcmVzID0gY3JlYXRlQm9hcmQoKTtcblxuICBjb25zdCBmaW5kU3F1YXJlQnlDb29yZCA9IChjb29yZCkgPT4gc3F1YXJlcy5maW5kKFxuICAgIChuKSA9PiBKU09OLnN0cmluZ2lmeShuLmNvb3JkKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmQpLFxuICApO1xuXG4gIHJldHVybiB7IHNxdWFyZXMsIGZpbmRTcXVhcmVCeUNvb3JkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCBLbmlnaHQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgaW5jbHVkZXNBcnIgPSAob3V0QXJyLCBpbkFycikgPT4ge1xuICAgIGNvbnN0IG91dEFyclN0ciA9IG91dEFyci5tYXAoKGVsKSA9PiBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgIHJldHVybiBvdXRBcnJTdHIuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoaW5BcnIpKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQYXJlbnRSZWxhdGlvbnMgPSAob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkLCBxdWV1ZSA9IFtdKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luU3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQob3JpZ2luQ29vcmQpO1xuXG4gICAgaWYgKGluY2x1ZGVzQXJyKG9yaWdpblNxdWFyZS5sZWF2ZXMsIHRhcmdldENvb3JkKSkge1xuICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQodGFyZ2V0Q29vcmQpO1xuICAgICAgdGFyZ2V0U3F1YXJlLnBhcmVudCA9IG9yaWdpblNxdWFyZTtcbiAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvcmlnaW5TcXVhcmUubGVhdmVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBib2FyZC5maW5kU3F1YXJlQnlDb29yZChjb29yZCk7XG4gICAgICBpZiAoc3F1YXJlLnBhcmVudCA9PT0gbnVsbCkgc3F1YXJlLnBhcmVudCA9IG9yaWdpblNxdWFyZTtcbiAgICAgIHF1ZXVlLnB1c2goY29vcmQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBjcmVhdGVQYXJlbnRSZWxhdGlvbnMocXVldWUuc2hpZnQoKSwgdGFyZ2V0Q29vcmQsIHF1ZXVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjbGVhclBhcmVudFJlbGF0aW9ucyA9ICgpID0+IHtcbiAgICBib2FyZC5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLnBhcmVudCA9IG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdHJhdmVyc2VQYXJlbnRSZWxhdGlvbnMgPSAob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkLCBwYXRoID0gW10pID0+IHtcbiAgICBjb25zdCBvcmlnaW5TcXVhcmUgPSBib2FyZC5maW5kU3F1YXJlQnlDb29yZChvcmlnaW5Db29yZCk7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQodGFyZ2V0Q29vcmQpO1xuXG4gICAgaWYgKHRhcmdldFNxdWFyZS5wYXJlbnQgPT09IG9yaWdpblNxdWFyZSkgcmV0dXJuIHBhdGg7XG5cbiAgICBwYXRoLnVuc2hpZnQodGFyZ2V0U3F1YXJlLnBhcmVudC5jb29yZCk7XG5cbiAgICByZXR1cm4gdHJhdmVyc2VQYXJlbnRSZWxhdGlvbnMob3JpZ2luQ29vcmQsIHRhcmdldFNxdWFyZS5wYXJlbnQuY29vcmQsIHBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3J0ZXN0UGF0aCA9IChvcmlnaW5Db29yZCwgdGFyZ2V0Q29vcmQpID0+IHtcbiAgICBjcmVhdGVQYXJlbnRSZWxhdGlvbnMob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkKTtcblxuICAgIGNvbnN0IHBhdGggPSB0cmF2ZXJzZVBhcmVudFJlbGF0aW9ucyhvcmlnaW5Db29yZCwgdGFyZ2V0Q29vcmQpO1xuXG4gICAgY2xlYXJQYXJlbnRSZWxhdGlvbnMoKTtcblxuICAgIHJldHVybiBbb3JpZ2luQ29vcmQsIC4uLnBhdGgsIHRhcmdldENvb3JkXTtcbiAgfTtcblxuICBjb25zdCBrbmlnaHRNb3ZlcyA9IChvcmlnaW5Db29yZCwgdGFyZ2V0Q29vcmQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gZ2V0U2hvcnRlc3RQYXRoKG9yaWdpbkNvb3JkLCB0YXJnZXRDb29yZCk7XG4gICAgY29uc29sZS5sb2coYD0+IFlvdSBtYWRlIGl0IGluICR7cGF0aC5sZW5ndGh9IG1vdmVzISAgSGVyZSdzIHlvdXIgcGF0aDpgKTtcbiAgICBwYXRoLmZvckVhY2goKHN0ZXApID0+IGNvbnNvbGUubG9nKHN0ZXApKTtcbiAgfTtcblxuICByZXR1cm4geyBrbmlnaHRNb3ZlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0O1xuIiwiY29uc3QgU3F1YXJlID0gKGksIGopID0+IHtcbiAgY29uc3QgaWQgPSBOdW1iZXIoYCR7aX0ke2p9YCk7XG5cbiAgY29uc3QgY29vcmQgPSBbaSwgal07XG5cbiAgY29uc3QgbGVhdmVzID0gW1xuICAgIGkgLSAxID49IDAgJiYgaiAtIDIgPj0gMCA/IFtpIC0gMSwgaiAtIDJdIDogbnVsbCxcbiAgICBpIC0gMiA+PSAwICYmIGogLSAxID49IDAgPyBbaSAtIDIsIGogLSAxXSA6IG51bGwsXG4gICAgaSAtIDEgPj0gMCAmJiBqICsgMiA8PSA3ID8gW2kgLSAxLCBqICsgMl0gOiBudWxsLFxuICAgIGkgKyAyIDw9IDcgJiYgaiAtIDEgPj0gMCA/IFtpICsgMiwgaiAtIDFdIDogbnVsbCxcbiAgICBpIC0gMiA+PSAwICYmIGogKyAxIDw9IDcgPyBbaSAtIDIsIGogKyAxXSA6IG51bGwsXG4gICAgaSArIDEgPD0gNyAmJiBqIC0gMiA+PSAwID8gW2kgKyAxLCBqIC0gMl0gOiBudWxsLFxuICAgIGkgKyAyIDw9IDcgJiYgaiArIDEgPD0gNyA/IFtpICsgMiwgaiArIDFdIDogbnVsbCxcbiAgICBpICsgMSA8PSA3ICYmIGogKyAyIDw9IDcgPyBbaSArIDEsIGogKyAyXSA6IG51bGwsXG4gIF0uZmlsdGVyKChuKSA9PiBuKTtcblxuICBjb25zdCBwYXJlbnQgPSBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgaWQsIGNvb3JkLCBsZWF2ZXMsIHBhcmVudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IEtuaWdodCBmcm9tICcuL2tuaWdodCc7XG5cbmNvbnN0IGJvYXJkID0gQm9hcmQoKTtcbmNvbnN0IGtuaWdodCA9IEtuaWdodChib2FyZCk7XG5cbmtuaWdodC5rbmlnaHRNb3ZlcyhbMCwgMF0sIFszLCA3XSk7XG5rbmlnaHQua25pZ2h0TW92ZXMoWzEsIDNdLCBbNCwgNV0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9