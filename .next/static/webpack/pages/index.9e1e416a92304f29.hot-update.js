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

/***/ "./components/game/game.js":
/*!*********************************!*\
  !*** ./components/game/game.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _reset_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-button */ \"./components/game/reset-button.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    _s();\n    let { currentStep, cells, winnerComb, HandleCellClick, handleClearClick, isDraw } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-80 mx-auto my-24 border border-black p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center content-center pt-10 pb-10 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    isDraw: isDraw,\n                    currentStep: currentStep,\n                    winnerComb: winnerComb,\n                    textStyle: \"mb-3 text-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-2 gam grid-rows-game-field grid-cols-[repeat(3,80px)] \",\n                    children: cells.map((symbol, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_cell__WEBPACK_IMPORTED_MODULE_1__.GameCell, {\n                            onClick: ()=>HandleCellClick(index),\n                            sm: symbol,\n                            isWinner: winnerComb === null || winnerComb === void 0 ? void 0 : winnerComb.includes(index)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reset_button__WEBPACK_IMPORTED_MODULE_3__.ResetButton, {\n                    handleClearClick: handleClearClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"+kmUhqFyD0EQ1/MsQor6xtQy5zg=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNNO0FBQ0c7QUFFekMsU0FBU0k7O0lBQ2QsSUFBSSxFQUNGQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsVUFBVSxFQUNWQyxlQUFlLEVBQ2ZDLGdCQUFnQixFQUNoQkMsTUFBTSxFQUNQLEdBQUdQLDZEQUFZQTtJQUVoQixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNYLGdEQUFRQTtvQkFDUFMsUUFBUUE7b0JBQ1JMLGFBQWFBO29CQUNiRSxZQUFZQTtvQkFDWk0sV0FBVTs7Ozs7OzhCQUVaLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDWk4sTUFBTVEsR0FBRyxDQUFDLENBQUNDLFFBQVFDO3dCQUNsQixxQkFDRSw4REFBQ2hCLGdEQUFRQTs0QkFDUGlCLFNBQVMsSUFBTVQsZ0JBQWdCUTs0QkFDL0JFLElBQUlIOzRCQUNKSSxRQUFRLEVBQUVaLHVCQUFBQSxpQ0FBQUEsV0FBWWEsUUFBUSxDQUFDSjs7Ozs7O29CQUdyQzs7Ozs7OzhCQUdGLDhEQUFDZCxzREFBV0E7b0JBQUNPLGtCQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBbkNnQkw7O1FBUVZELHlEQUFZQTs7O0tBUkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmpzPzcwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNlbGwgfSBmcm9tIFwiLi9nYW1lLWNlbGxcIjtcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi9nYW1lLWluZm9cIjtcclxuaW1wb3J0IHsgUmVzZXRCdXR0b24gfSBmcm9tIFwiLi9yZXNldC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSBcIi4vdXNlLWdhbWUtc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gIGxldCB7XHJcbiAgICBjdXJyZW50U3RlcCxcclxuICAgIGNlbGxzLFxyXG4gICAgd2lubmVyQ29tYixcclxuICAgIEhhbmRsZUNlbGxDbGljayxcclxuICAgIGhhbmRsZUNsZWFyQ2xpY2ssXHJcbiAgICBpc0RyYXcsXHJcbiAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTgwIG14LWF1dG8gbXktMjQgYm9yZGVyIGJvcmRlci1ibGFjayBwLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBwdC0xMCBwYi0xMCBcIj5cclxuICAgICAgICA8R2FtZUluZm9cclxuICAgICAgICAgIGlzRHJhdz17aXNEcmF3fVxyXG4gICAgICAgICAgY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfVxyXG4gICAgICAgICAgd2lubmVyQ29tYj17d2lubmVyQ29tYn1cclxuICAgICAgICAgIHRleHRTdHlsZT1cIm1iLTMgdGV4dC1sZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgZ2FtIGdyaWQtcm93cy1nYW1lLWZpZWxkIGdyaWQtY29scy1bcmVwZWF0KDMsODBweCldIFwiPlxyXG4gICAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxHYW1lQ2VsbFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gSGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIHNtPXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyQ29tYj8uaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFJlc2V0QnV0dG9uIGhhbmRsZUNsZWFyQ2xpY2s9e2hhbmRsZUNsZWFyQ2xpY2t9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJHYW1lQ2VsbCIsIkdhbWVJbmZvIiwiUmVzZXRCdXR0b24iLCJ1c2VHYW1lU3RhdGUiLCJHYW1lIiwiY3VycmVudFN0ZXAiLCJjZWxscyIsIndpbm5lckNvbWIiLCJIYW5kbGVDZWxsQ2xpY2siLCJoYW5kbGVDbGVhckNsaWNrIiwiaXNEcmF3IiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dFN0eWxlIiwibWFwIiwic3ltYm9sIiwiaW5kZXgiLCJvbkNsaWNrIiwic20iLCJpc1dpbm5lciIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game.js\n"));

/***/ }),

/***/ "./components/game/reset-button.jsx":
/*!******************************************!*\
  !*** ./components/game/reset-button.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ResetButton: function() { return /* binding */ ResetButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ResetButton(param) {\n    let { handleClearClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-gray-400 w-24 h-12 rounded-3xl mt-5 text-white\",\n        onClick: handleClearClick,\n        children: \"clear\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\reset-button.jsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n_c = ResetButton;\nvar _c;\n$RefreshReg$(_c, \"ResetButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvcmVzZXQtYnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsWUFBWSxLQUFrQjtRQUFsQixFQUFDQyxnQkFBZ0IsRUFBQyxHQUFsQjtJQUN4QixxQkFDSSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTSDtrQkFDVjs7Ozs7O0FBSVQ7S0FUZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9yZXNldC1idXR0b24uanN4PzI5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFJlc2V0QnV0dG9uKHtoYW5kbGVDbGVhckNsaWNrfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHctMjQgaC0xMiByb3VuZGVkLTN4bCBtdC01IHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBjbGVhclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlc2V0QnV0dG9uIiwiaGFuZGxlQ2xlYXJDbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/reset-button.jsx\n"));

/***/ })

});