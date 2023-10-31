"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/useGameState.js":
/*!*****************************************!*\
  !*** ./components/game/useGameState.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrder.indexOf(currentMove) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nfunction handlePlayerTimeOver(symbol) {\n    setGameState((lastGameState)=>({\n            ...lastGameState,\n            playerWhoCannotMove: [\n                ...lastGameState.playerWhoCannotMove,\n                symbol\n            ]\n        }));\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence }, setGameState1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder);\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState1((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence,\n        handlePlayerTimeOver\n    ];\n}\n_s(useGameState, \"Voqn8QOBrS1O4WRzcHA7aAzP4to=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxNQUFNQywwQkFBMEJGLFVBQVVHLE1BQU0sQ0FDN0NDLENBQUFBLFNBQVUsQ0FBQ0gsb0JBQW9CSSxRQUFRLENBQUNEO1FBR3hDRjtJQURILE9BQ0dBLENBQUFBLDRCQUFBQSx1QkFBdUIsQ0FBQ0YsVUFBVU0sT0FBTyxDQUFDUCxlQUFlLEVBQUUsY0FBM0RHLHVDQUFBQSw0QkFDQUEsdUJBQXVCLENBQUMsRUFBRTtBQUVoQztBQUVBLFNBQVNLLHFCQUFxQkgsTUFBTTtJQUNqQ0ksYUFBYUMsQ0FBQUEsZ0JBQWtCO1lBQzVCLEdBQUdBLGFBQWE7WUFDaEJSLHFCQUFxQjttQkFBSVEsY0FBY1IsbUJBQW1CO2dCQUFFRzthQUFPO1FBQ3RFO0FBQ0g7QUFFTyxTQUFTTSxhQUFhVixTQUFTOztJQUNuQyxNQUFNLENBQUMsRUFBRVcsS0FBSyxFQUFFWixXQUFXLEVBQUVhLGNBQWMsRUFBRSxFQUFFSixjQUFhLEdBQUdaLCtDQUFRQSxDQUFDLElBQU87WUFDNUVlLE9BQU9FLE1BQU0sSUFDVEMsSUFBSSxDQUFDLE1BQ0xDLEdBQUcsQ0FBQyxJQUFNRixNQUFNLElBQUlDLElBQUksQ0FBQztZQUM3QmYsYUFBYUMsU0FBUyxDQUFDLEVBQUU7WUFDekJZLGdCQUFnQjtZQUNoQlgscUJBQXFCLEVBQUU7UUFDMUI7SUFFQSxNQUFNZSxXQUFXbEIsWUFBWUMsYUFBYUM7SUFDMUMsTUFBTWlCLGtCQUFrQkMsQ0FBQUE7UUFDckIsTUFBTUMsV0FBV1IsTUFBTUksR0FBRyxDQUFDLENBQUNLLE1BQU1DLElBQU1ELEtBQUtMLEdBQUcsQ0FBQyxDQUFDTyxNQUFNQyxJQUFNWixLQUFLLENBQUNVLEVBQUUsQ0FBQ0UsRUFBRTtRQUN6RUosUUFBUSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBR25CO1FBQy9CUyxjQUFhQyxDQUFBQTtZQUNWLElBQUlBLGNBQWNFLEtBQUssQ0FBQ08sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBT1Q7WUFDcEQsT0FBTztnQkFDSixHQUFHQSxhQUFhO2dCQUNoQlYsYUFBYUQsWUFBWVcsY0FBY1YsV0FBVyxFQUFFQztnQkFDcERXLE9BQU9RO2dCQUNQUCxnQkFBZ0JmLHVEQUFlQSxDQUFDc0IsVUFBVUQsT0FBTztZQUNwRDtRQUNIO0lBQ0g7SUFDQSxPQUFPO1FBQ0pQO1FBQ0FaO1FBQ0FpQjtRQUNBQztRQUNBTDtRQUNBTDtLQUNGO0FBQ0o7R0FoQ2dCRztBQWtDaEIsU0FBU2MsY0FBY0MsVUFBVSxFQUFFQyxXQUFXO0lBQzNDLE9BQU9ELFdBQVdFLFFBQVEsT0FBT0QsWUFBWUMsUUFBUTtBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzPzc4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0aW5nV2lubmVyIH0gZnJvbSAnLi9tb2RlbCdcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIsIHBsYXllcldob0Nhbm5vdE1vdmUpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyTW92YWJsZVBsYXllcnMgPSBtb3ZlT3JkZXIuZmlsdGVyKFxyXG4gICAgICBzeW1ib2wgPT4gIXBsYXllcldob0Nhbm5vdE1vdmUuaW5jbHVkZXMoc3ltYm9sKSxcclxuICAgKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1ttb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXSA/P1xyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1swXVxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVBsYXllclRpbWVPdmVyKHN5bWJvbCkge1xyXG4gICBzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlLCBzeW1ib2xdLFxyXG4gICB9KSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShtb3ZlT3JkZXIpIHtcclxuICAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlLCB3aW5uZXJTZXF1ZW5jZSB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcclxuICAgICAgY2VsbHM6IEFycmF5KDE5KVxyXG4gICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAubWFwKCgpID0+IEFycmF5KDE5KS5maWxsKG51bGwpKSxcclxuICAgICAgY3VycmVudE1vdmU6IG1vdmVPcmRlclswXSxcclxuICAgICAgd2lubmVyU2VxdWVuY2U6IG51bGwsXHJcbiAgICAgIHBsYXllcldob0Nhbm5vdE1vdmU6IFtdLFxyXG4gICB9KSlcclxuXHJcbiAgIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlcilcclxuICAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG4gICAgICBjb25zdCBuZXdDZWxscyA9IGNlbGxzLm1hcCgobGluZSwgaSkgPT4gbGluZS5tYXAoKGNlbGwsIGopID0+IGNlbGxzW2ldW2pdKSlcclxuICAgICAgbmV3Q2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSA9IGN1cnJlbnRNb3ZlXHJcbiAgICAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+IHtcclxuICAgICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSkgcmV0dXJuIGxhc3RHYW1lU3RhdGVcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsIG1vdmVPcmRlciksXHJcbiAgICAgICAgICAgIGNlbGxzOiBuZXdDZWxscyxcclxuICAgICAgICAgICAgd2lubmVyU2VxdWVuY2U6IGNvbXB1dGluZ1dpbm5lcihuZXdDZWxscywgaW5kZXgsIDMpLFxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgIH1cclxuICAgcmV0dXJuIFtcclxuICAgICAgY2VsbHMsXHJcbiAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICBuZXh0TW92ZSxcclxuICAgICAgaGFuZGxlQ2VsbENsaWNrLFxyXG4gICAgICB3aW5uZXJTZXF1ZW5jZSxcclxuICAgICAgaGFuZGxlUGxheWVyVGltZU92ZXIsXHJcbiAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheXNFcXVhbChmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkge1xyXG4gICByZXR1cm4gZmlyc3RBcnJheS50b1N0cmluZygpID09PSBzZWNvbmRBcnJheS50b1N0cmluZygpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29tcHV0aW5nV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm1vdmVPcmRlciIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyIsImZpbHRlciIsInN5bWJvbCIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwic2V0R2FtZVN0YXRlIiwibGFzdEdhbWVTdGF0ZSIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwid2lubmVyU2VxdWVuY2UiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibmV3Q2VsbHMiLCJsaW5lIiwiaSIsImNlbGwiLCJqIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});