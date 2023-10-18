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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.module.css */ \"./components/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    _s();\n    let { currentStep, cells, winnerComb, HandleCellClick, handleClearClick, isDraw } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-80 mx-auto my-24 border border-black p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center content-center pt-10 pb-10 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    isDraw: isDraw,\n                    currentStep: currentStep,\n                    winnerComb: winnerComb\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-2 grid-rows-game-field grid-cols-game-field \",\n                    children: cells.map((symbol, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_cell__WEBPACK_IMPORTED_MODULE_1__.GameCell, {\n                            onClick: ()=>HandleCellClick(index),\n                            sm: symbol,\n                            isWinner: winnerComb === null || winnerComb === void 0 ? void 0 : winnerComb.includes(index)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().clear),\n                    onClick: handleClearClick,\n                    children: \"clear\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n}\n_s(Game, \"Ho5OfuBwe5qjhT/7XHDmsN5Kl7w=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFDQTtBQUNTO0FBR3pDLFNBQVNJOztJQUNaLElBQUksRUFDRkMsV0FBVyxFQUNYQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsZUFBZSxFQUNmQyxnQkFBZ0IsRUFDaEJDLE1BQU0sRUFDUCxHQUFHUCw2REFBWUE7SUFFaEIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDWCxnREFBUUE7b0JBQ1BTLFFBQVFBO29CQUNSTCxhQUFhQTtvQkFDYkUsWUFBWUE7Ozs7Ozs4QkFFZCw4REFBQ0k7b0JBQUlDLFdBQVU7OEJBQ1pOLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3QkFDbEIscUJBQ0UsOERBQUNmLGdEQUFRQTs0QkFDUGdCLFNBQVMsSUFBTVIsZ0JBQWdCTzs0QkFDL0JFLElBQUlIOzRCQUNKSSxRQUFRLEVBQUVYLHVCQUFBQSxpQ0FBQUEsV0FBWVksUUFBUSxDQUFDSjs7Ozs7O29CQUdyQzs7Ozs7OzhCQUdGLDhEQUFDSztvQkFBT1IsV0FBV1YsK0RBQWU7b0JBQUVjLFNBQVNQOzhCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkU7R0FwQ2NMOztRQVFSRCx5REFBWUE7OztLQVJKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcz83MDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSBcIi4vZ2FtZS1jZWxsXCI7XHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vZ2FtZS1pbmZvXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2FtZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuL3VzZS1nYW1lLXN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBjdXJyZW50U3RlcCxcclxuICAgICAgY2VsbHMsXHJcbiAgICAgIHdpbm5lckNvbWIsXHJcbiAgICAgIEhhbmRsZUNlbGxDbGljayxcclxuICAgICAgaGFuZGxlQ2xlYXJDbGljayxcclxuICAgICAgaXNEcmF3LFxyXG4gICAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTgwIG14LWF1dG8gbXktMjQgYm9yZGVyIGJvcmRlci1ibGFjayBwLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIHB0LTEwIHBiLTEwIFwiPlxyXG4gICAgICAgICAgPEdhbWVJbmZvXHJcbiAgICAgICAgICAgIGlzRHJhdz17aXNEcmF3fVxyXG4gICAgICAgICAgICBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9XHJcbiAgICAgICAgICAgIHdpbm5lckNvbWI9e3dpbm5lckNvbWJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIGdyaWQtcm93cy1nYW1lLWZpZWxkIGdyaWQtY29scy1nYW1lLWZpZWxkIFwiPlxyXG4gICAgICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHYW1lQ2VsbFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBIYW5kbGVDZWxsQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICBzbT17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyQ29tYj8uaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcImNsZWFyXCJdfSBvbkNsaWNrPXtoYW5kbGVDbGVhckNsaWNrfT5cclxuICAgICAgICAgICAgY2xlYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSJdLCJuYW1lcyI6WyJHYW1lQ2VsbCIsIkdhbWVJbmZvIiwic3R5bGVzIiwidXNlR2FtZVN0YXRlIiwiR2FtZSIsImN1cnJlbnRTdGVwIiwiY2VsbHMiLCJ3aW5uZXJDb21iIiwiSGFuZGxlQ2VsbENsaWNrIiwiaGFuZGxlQ2xlYXJDbGljayIsImlzRHJhdyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN5bWJvbCIsImluZGV4Iiwib25DbGljayIsInNtIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game.js\n"));

/***/ })

});