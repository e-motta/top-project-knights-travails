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
    if (
      originCoord.some((c) => c < 0 || c > 7)
      || targetCoord.some((c) => c < 0 || c > 7)
    ) {
      throw RangeError('Coordinates must be between 0 and 7');
    }

    if (JSON.stringify(originCoord) === JSON.stringify(targetCoord)) {
      return [originCoord];
    }

    createParentRelations(originCoord, targetCoord);

    const path = traverseParentRelations(originCoord, targetCoord);

    clearParentRelations();

    return [originCoord, ...path, targetCoord];
  };

  const knightMoves = (originCoord, targetCoord) => {
    const path = getShortestPath(originCoord, targetCoord);
    console.log(`=> You made it in ${path.length - 1} moves!  Here's your path:`);
    path.forEach((step) => console.log(step));
  };

  return { getShortestPath, knightMoves };
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

// Examples
knight.knightMoves([0, 0], [0, 0]);
knight.knightMoves([7, 7], [1, 2]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHNCQUFzQixPQUFPO0FBQzdCLHFCQUFxQixtREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUV0QjtBQUNBLHVCQUF1QixFQUFFLEVBQUUsRUFBRTs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDdkJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNFOztBQUU5QixjQUFjLGtEQUFLO0FBQ25CLGVBQWUsbURBQU07O0FBRXJCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy8uL3NyYy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Qta25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0LWtuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZSc7XG5cbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaiArPSAxKSB7XG4gICAgICAgIHNxdWFyZXMucHVzaChTcXVhcmUoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlcztcbiAgfTtcblxuICBjb25zdCBzcXVhcmVzID0gY3JlYXRlQm9hcmQoKTtcblxuICBjb25zdCBmaW5kU3F1YXJlQnlDb29yZCA9IChjb29yZCkgPT4gc3F1YXJlcy5maW5kKFxuICAgIChuKSA9PiBKU09OLnN0cmluZ2lmeShuLmNvb3JkKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmQpLFxuICApO1xuXG4gIHJldHVybiB7IHNxdWFyZXMsIGZpbmRTcXVhcmVCeUNvb3JkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCBLbmlnaHQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgaW5jbHVkZXNBcnIgPSAob3V0QXJyLCBpbkFycikgPT4ge1xuICAgIGNvbnN0IG91dEFyclN0ciA9IG91dEFyci5tYXAoKGVsKSA9PiBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgIHJldHVybiBvdXRBcnJTdHIuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoaW5BcnIpKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQYXJlbnRSZWxhdGlvbnMgPSAob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkLCBxdWV1ZSA9IFtdKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luU3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQob3JpZ2luQ29vcmQpO1xuXG4gICAgaWYgKGluY2x1ZGVzQXJyKG9yaWdpblNxdWFyZS5sZWF2ZXMsIHRhcmdldENvb3JkKSkge1xuICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQodGFyZ2V0Q29vcmQpO1xuICAgICAgdGFyZ2V0U3F1YXJlLnBhcmVudCA9IG9yaWdpblNxdWFyZTtcbiAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvcmlnaW5TcXVhcmUubGVhdmVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBib2FyZC5maW5kU3F1YXJlQnlDb29yZChjb29yZCk7XG4gICAgICBpZiAoc3F1YXJlLnBhcmVudCA9PT0gbnVsbCkgc3F1YXJlLnBhcmVudCA9IG9yaWdpblNxdWFyZTtcbiAgICAgIHF1ZXVlLnB1c2goY29vcmQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBjcmVhdGVQYXJlbnRSZWxhdGlvbnMocXVldWUuc2hpZnQoKSwgdGFyZ2V0Q29vcmQsIHF1ZXVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjbGVhclBhcmVudFJlbGF0aW9ucyA9ICgpID0+IHtcbiAgICBib2FyZC5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLnBhcmVudCA9IG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdHJhdmVyc2VQYXJlbnRSZWxhdGlvbnMgPSAob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkLCBwYXRoID0gW10pID0+IHtcbiAgICBjb25zdCBvcmlnaW5TcXVhcmUgPSBib2FyZC5maW5kU3F1YXJlQnlDb29yZChvcmlnaW5Db29yZCk7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gYm9hcmQuZmluZFNxdWFyZUJ5Q29vcmQodGFyZ2V0Q29vcmQpO1xuXG4gICAgaWYgKHRhcmdldFNxdWFyZS5wYXJlbnQgPT09IG9yaWdpblNxdWFyZSkgcmV0dXJuIHBhdGg7XG5cbiAgICBwYXRoLnVuc2hpZnQodGFyZ2V0U3F1YXJlLnBhcmVudC5jb29yZCk7XG5cbiAgICByZXR1cm4gdHJhdmVyc2VQYXJlbnRSZWxhdGlvbnMob3JpZ2luQ29vcmQsIHRhcmdldFNxdWFyZS5wYXJlbnQuY29vcmQsIHBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3J0ZXN0UGF0aCA9IChvcmlnaW5Db29yZCwgdGFyZ2V0Q29vcmQpID0+IHtcbiAgICBpZiAoXG4gICAgICBvcmlnaW5Db29yZC5zb21lKChjKSA9PiBjIDwgMCB8fCBjID4gNylcbiAgICAgIHx8IHRhcmdldENvb3JkLnNvbWUoKGMpID0+IGMgPCAwIHx8IGMgPiA3KVxuICAgICkge1xuICAgICAgdGhyb3cgUmFuZ2VFcnJvcignQ29vcmRpbmF0ZXMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDcnKTtcbiAgICB9XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkob3JpZ2luQ29vcmQpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRDb29yZCkpIHtcbiAgICAgIHJldHVybiBbb3JpZ2luQ29vcmRdO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhcmVudFJlbGF0aW9ucyhvcmlnaW5Db29yZCwgdGFyZ2V0Q29vcmQpO1xuXG4gICAgY29uc3QgcGF0aCA9IHRyYXZlcnNlUGFyZW50UmVsYXRpb25zKG9yaWdpbkNvb3JkLCB0YXJnZXRDb29yZCk7XG5cbiAgICBjbGVhclBhcmVudFJlbGF0aW9ucygpO1xuXG4gICAgcmV0dXJuIFtvcmlnaW5Db29yZCwgLi4ucGF0aCwgdGFyZ2V0Q29vcmRdO1xuICB9O1xuXG4gIGNvbnN0IGtuaWdodE1vdmVzID0gKG9yaWdpbkNvb3JkLCB0YXJnZXRDb29yZCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBnZXRTaG9ydGVzdFBhdGgob3JpZ2luQ29vcmQsIHRhcmdldENvb3JkKTtcbiAgICBjb25zb2xlLmxvZyhgPT4gWW91IG1hZGUgaXQgaW4gJHtwYXRoLmxlbmd0aCAtIDF9IG1vdmVzISAgSGVyZSdzIHlvdXIgcGF0aDpgKTtcbiAgICBwYXRoLmZvckVhY2goKHN0ZXApID0+IGNvbnNvbGUubG9nKHN0ZXApKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRTaG9ydGVzdFBhdGgsIGtuaWdodE1vdmVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLbmlnaHQ7XG4iLCJjb25zdCBTcXVhcmUgPSAoaSwgaikgPT4ge1xuICBjb25zdCBpZCA9IE51bWJlcihgJHtpfSR7an1gKTtcblxuICBjb25zdCBjb29yZCA9IFtpLCBqXTtcblxuICBjb25zdCBsZWF2ZXMgPSBbXG4gICAgaSAtIDEgPj0gMCAmJiBqIC0gMiA+PSAwID8gW2kgLSAxLCBqIC0gMl0gOiBudWxsLFxuICAgIGkgLSAyID49IDAgJiYgaiAtIDEgPj0gMCA/IFtpIC0gMiwgaiAtIDFdIDogbnVsbCxcbiAgICBpIC0gMSA+PSAwICYmIGogKyAyIDw9IDcgPyBbaSAtIDEsIGogKyAyXSA6IG51bGwsXG4gICAgaSArIDIgPD0gNyAmJiBqIC0gMSA+PSAwID8gW2kgKyAyLCBqIC0gMV0gOiBudWxsLFxuICAgIGkgLSAyID49IDAgJiYgaiArIDEgPD0gNyA/IFtpIC0gMiwgaiArIDFdIDogbnVsbCxcbiAgICBpICsgMSA8PSA3ICYmIGogLSAyID49IDAgPyBbaSArIDEsIGogLSAyXSA6IG51bGwsXG4gICAgaSArIDIgPD0gNyAmJiBqICsgMSA8PSA3ID8gW2kgKyAyLCBqICsgMV0gOiBudWxsLFxuICAgIGkgKyAxIDw9IDcgJiYgaiArIDIgPD0gNyA/IFtpICsgMSwgaiArIDJdIDogbnVsbCxcbiAgXS5maWx0ZXIoKG4pID0+IG4pO1xuXG4gIGNvbnN0IHBhcmVudCA9IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCwgY29vcmQsIGxlYXZlcywgcGFyZW50LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgS25pZ2h0IGZyb20gJy4va25pZ2h0JztcblxuY29uc3QgYm9hcmQgPSBCb2FyZCgpO1xuY29uc3Qga25pZ2h0ID0gS25pZ2h0KGJvYXJkKTtcblxuLy8gRXhhbXBsZXNcbmtuaWdodC5rbmlnaHRNb3ZlcyhbMCwgMF0sIFswLCAwXSk7XG5rbmlnaHQua25pZ2h0TW92ZXMoWzcsIDddLCBbMSwgMl0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9