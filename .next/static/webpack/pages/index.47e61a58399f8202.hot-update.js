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

/***/ "./components/game/UIGame/GameLayout/GameLayout.jsx":
/*!**********************************************************!*\
  !*** ./components/game/UIGame/GameLayout/GameLayout.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLayout: function() { return /* binding */ GameLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameLayout.module.scss */ \"./components/game/UIGame/GameLayout/GameLayout.module.scss\");\n/* harmony import */ var _GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../UI/UIButton/UIButton */ \"./components/UI/UIButton/UIButton.jsx\");\n\n\n\n\nfunction GameLayout(param) {\n    let { backLink, gameTitle, gameInfo, playersList, moveInfo, gameCells } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    backLink,\n                    gameTitle,\n                    gameInfo\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                lineNumber: 7,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().playerInfo),\n                children: playersList\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                lineNumber: 12,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().field),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().matchInfo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().moves),\n                                children: moveInfo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btns),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__.UIButton, {\n                                        children: \"Ничья\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__.UIButton, {\n                                        outlined: true,\n                                        children: \"Сдаться\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GameLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gridWrapper),\n                        children: gameCells\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n                lineNumber: 14,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameLayout\\\\GameLayout.jsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n}\n_c = GameLayout;\nvar _c;\n$RefreshReg$(_c, \"GameLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL0dhbWVMYXlvdXQvR2FtZUxheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2U7QUFDbEQsU0FBU0csV0FBVyxLQUFpRTtRQUFqRSxFQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFDLEdBQWpFO0lBQ3hCLHFCQUNHLDhEQUFDQzs7MEJBQ0UsOERBQUNBO2dCQUFJQyxXQUFXVix1RUFBUzs7b0JBQ3JCRztvQkFDQUM7b0JBQ0FDOzs7Ozs7OzBCQUVKLDhEQUFDSTtnQkFBSUMsV0FBV1YsMkVBQWE7MEJBQUdNOzs7Ozs7MEJBRWhDLDhEQUFDRztnQkFBSUMsV0FBV1Ysc0VBQVE7O2tDQUNyQiw4REFBQ1M7d0JBQUlDLFdBQVdWLDBFQUFZOzswQ0FDekIsOERBQUNTO2dDQUFJQyxXQUFXVixzRUFBUTswQ0FBR087Ozs7OzswQ0FDM0IsOERBQUNFO2dDQUFJQyxXQUFXVixxRUFBTzs7a0RBQ3BCLDhEQUFDQywyREFBUUE7a0RBQUM7Ozs7OztrREFDViw4REFBQ0EsMkRBQVFBO3dDQUFDZ0IsUUFBUTtrREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ1I7d0JBQUlDLFdBQVdWLDRFQUFjO2tDQUFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0tBdkJnQk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL1VJR2FtZS9HYW1lTGF5b3V0L0dhbWVMYXlvdXQuanN4PzYxMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vR2FtZUxheW91dC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge1VJQnV0dG9ufSBmcm9tIFwiLi8uLi8uLi8uLi9VSS9VSUJ1dHRvbi9VSUJ1dHRvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gR2FtZUxheW91dCh7YmFja0xpbmssIGdhbWVUaXRsZSwgZ2FtZUluZm8sIHBsYXllcnNMaXN0LCBtb3ZlSW5mbywgZ2FtZUNlbGxzfSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuaGVhZGVyfT5cclxuICAgICAgICAgICAge2JhY2tMaW5rfVxyXG4gICAgICAgICAgICB7Z2FtZVRpdGxlfVxyXG4gICAgICAgICAgICB7Z2FtZUluZm99XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wucGxheWVySW5mb30+e3BsYXllcnNMaXN0fTwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmZpZWxkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLm1hdGNoSW5mb30+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5tb3Zlc30+e21vdmVJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgIDxVSUJ1dHRvbj7QndC40YfRjNGPPC9VSUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFVJQnV0dG9uIG91dGxpbmVkPtCh0LTQsNGC0YzRgdGPPC9VSUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmdyaWRXcmFwcGVyfT57Z2FtZUNlbGxzfTwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2wiLCJVSUJ1dHRvbiIsIkdhbWVMYXlvdXQiLCJiYWNrTGluayIsImdhbWVUaXRsZSIsImdhbWVJbmZvIiwicGxheWVyc0xpc3QiLCJtb3ZlSW5mbyIsImdhbWVDZWxscyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInBsYXllckluZm8iLCJmaWVsZCIsIm1hdGNoSW5mbyIsIm1vdmVzIiwiYnRucyIsIm91dGxpbmVkIiwiZ3JpZFdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/UIGame/GameLayout/GameLayout.jsx\n"));

/***/ })

});