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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    _s();\n    let { currentStep, cells, winnerComb, HandleCellClick, handleClearClick, isDraw } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-80 mx-auto my-24 border border-black p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center content-center pt-10 pb-10 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    isDraw: isDraw,\n                    currentStep: currentStep,\n                    winnerComb: winnerComb\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-2 gam grid-rows-game-field grid-cols-game-field \",\n                    children: cells.map((symbol, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_cell__WEBPACK_IMPORTED_MODULE_1__.GameCell, {\n                            onClick: ()=>HandleCellClick(index),\n                            sm: symbol,\n                            isWinner: winnerComb === null || winnerComb === void 0 ? void 0 : winnerComb.includes(index)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-gray-400 w-24 h-12 rounded-3xl mt-5 \",\n                    onClick: handleClearClick,\n                    children: \"clear\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n}\n_s(Game, \"Ho5OfuBwe5qjhT/7XHDmsN5Kl7w=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ0E7QUFDUztBQUd6QyxTQUFTSTs7SUFDWixJQUFJLEVBQ0ZDLFdBQVcsRUFDWEMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLGVBQWUsRUFDZkMsZ0JBQWdCLEVBQ2hCQyxNQUFNLEVBQ1AsR0FBR1AsNkRBQVlBO0lBRWhCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1gsZ0RBQVFBO29CQUNQUyxRQUFRQTtvQkFDUkwsYUFBYUE7b0JBQ2JFLFlBQVlBOzs7Ozs7OEJBRWQsOERBQUNJO29CQUFJQyxXQUFVOzhCQUNaTixNQUFNTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7d0JBQ2xCLHFCQUNFLDhEQUFDZixnREFBUUE7NEJBQ1BnQixTQUFTLElBQU1SLGdCQUFnQk87NEJBQy9CRSxJQUFJSDs0QkFDSkksUUFBUSxFQUFFWCx1QkFBQUEsaUNBQUFBLFdBQVlZLFFBQVEsQ0FBQ0o7Ozs7OztvQkFHckM7Ozs7Ozs4QkFHRiw4REFBQ0s7b0JBQU9SLFdBQVU7b0JBQTBDSSxTQUFTUDs4QkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9GO0dBcENjTDs7UUFRUkQseURBQVlBOzs7S0FSSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUuanM/NzA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gXCIuL2dhbWUtY2VsbFwiO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuL2dhbWUtaW5mb1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tIFwiLi91c2UtZ2FtZS1zdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgY3VycmVudFN0ZXAsXHJcbiAgICAgIGNlbGxzLFxyXG4gICAgICB3aW5uZXJDb21iLFxyXG4gICAgICBIYW5kbGVDZWxsQ2xpY2ssXHJcbiAgICAgIGhhbmRsZUNsZWFyQ2xpY2ssXHJcbiAgICAgIGlzRHJhdyxcclxuICAgIH0gPSB1c2VHYW1lU3RhdGUoKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy04MCBteC1hdXRvIG15LTI0IGJvcmRlciBib3JkZXItYmxhY2sgcC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBwdC0xMCBwYi0xMCBcIj5cclxuICAgICAgICAgIDxHYW1lSW5mb1xyXG4gICAgICAgICAgICBpc0RyYXc9e2lzRHJhd31cclxuICAgICAgICAgICAgY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfVxyXG4gICAgICAgICAgICB3aW5uZXJDb21iPXt3aW5uZXJDb21ifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBnYW0gZ3JpZC1yb3dzLWdhbWUtZmllbGQgZ3JpZC1jb2xzLWdhbWUtZmllbGQgXCI+XHJcbiAgICAgICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdhbWVDZWxsXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IEhhbmRsZUNlbGxDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIHNtPXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJDb21iPy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHctMjQgaC0xMiByb3VuZGVkLTN4bCBtdC01IFwiIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQ2xpY2t9PlxyXG4gICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbIkdhbWVDZWxsIiwiR2FtZUluZm8iLCJzdHlsZXMiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lIiwiY3VycmVudFN0ZXAiLCJjZWxscyIsIndpbm5lckNvbWIiLCJIYW5kbGVDZWxsQ2xpY2siLCJoYW5kbGVDbGVhckNsaWNrIiwiaXNEcmF3IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3ltYm9sIiwiaW5kZXgiLCJvbkNsaWNrIiwic20iLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game.js\n"));

/***/ })

});