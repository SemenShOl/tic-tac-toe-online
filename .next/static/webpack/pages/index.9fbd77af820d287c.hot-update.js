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

/***/ "./components/game/UIGame/GameModal/GameModal.jsx":
/*!********************************************************!*\
  !*** ./components/game/UIGame/GameModal/GameModal.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameModal: function() { return /* binding */ GameModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI */ \"./components/UI/index.js\");\n/* harmony import */ var _GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameModal.module.scss */ \"./components/game/UIGame/GameModal/GameModal.module.scss\");\n/* harmony import */ var _GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction GameModal(param) {\n    let { isOpen, onClose, winnerLogin, playersList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIModal, {\n        isOpen: isOpen,\n        onClose: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIModal.Header, {\n                children: \"Игра завершена\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIModal.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().winnerInfo),\n                        children: [\n                            \"Победитель:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().winnerName),\n                                children: winnerLogin\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GameModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().players),\n                        children: playersList\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIModal.Footer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIButton, {\n                        outlined: true,\n                        children: \"Вернуться\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI__WEBPACK_IMPORTED_MODULE_2__.UIButton, {\n                        children: \"Играть снова\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\GameModal\\\\GameModal.jsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, this);\n}\n_c = GameModal;\nvar _c;\n$RefreshReg$(_c, \"GameModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL0dhbWVNb2RhbC9HYW1lTW9kYWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUlMO0FBQ29CO0FBQ2xDLFNBQVNJLFVBQVUsS0FLekI7UUFMeUIsRUFDekJDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWCxHQUx5QjtJQU16QixxQkFDQyw4REFBQ04sd0NBQU9BO1FBQ1BHLFFBQVFBO1FBQ1JDLFNBQVNEOzswQkFFVCw4REFBQ0gsd0NBQU9BLENBQUNPLE1BQU07MEJBQUM7Ozs7OzswQkFHaEIsOERBQUNQLHdDQUFPQSxDQUFDUSxJQUFJOztrQ0FDWiw4REFBQ0M7d0JBQ0FDLFdBQVdULDBFQUFhOzs0QkFDeEI7NEJBQ1k7MENBQ1osOERBQUNXO2dDQUNBRixXQUFXVCwwRUFBYTswQ0FFdkJJOzs7Ozs7Ozs7Ozs7a0NBR0gsOERBQUNJO3dCQUFJQyxXQUFXVCx1RUFBVTtrQ0FDeEJLOzs7Ozs7Ozs7Ozs7MEJBR0gsOERBQUNOLHdDQUFPQSxDQUFDZSxNQUFNOztrQ0FDZCw4REFBQ2hCLHlDQUFRQTt3QkFBQ2lCLFFBQVE7a0NBQUM7Ozs7OztrQ0FHbkIsOERBQUNqQix5Q0FBUUE7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1kO0tBdkNnQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL1VJR2FtZS9HYW1lTW9kYWwvR2FtZU1vZGFsLmpzeD8wNjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHRVSUJ1dHRvbixcclxuXHRVSU1vZGFsLFxyXG59IGZyb20gXCIuLi8uLi8uLi9VSVwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vR2FtZU1vZGFsLm1vZHVsZS5zY3NzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lTW9kYWwoe1xyXG5cdGlzT3BlbixcclxuXHRvbkNsb3NlLFxyXG5cdHdpbm5lckxvZ2luLFxyXG5cdHBsYXllcnNMaXN0LFxyXG59KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxVSU1vZGFsXHJcblx0XHRcdGlzT3Blbj17aXNPcGVufVxyXG5cdFx0XHRvbkNsb3NlPXtpc09wZW59XHJcblx0XHQ+XHJcblx0XHRcdDxVSU1vZGFsLkhlYWRlcj5cclxuXHRcdFx0XHTQmNCz0YDQsCDQt9Cw0LLQtdGA0YjQtdC90LBcclxuXHRcdFx0PC9VSU1vZGFsLkhlYWRlcj5cclxuXHRcdFx0PFVJTW9kYWwuTWFpbj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsLndpbm5lckluZm99XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx00J/QvtCx0LXQtNC40YLQtdC70Yw6e1wiIFwifVxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbC53aW5uZXJOYW1lfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7d2lubmVyTG9naW59XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsLnBsYXllcnN9PlxyXG5cdFx0XHRcdFx0e3BsYXllcnNMaXN0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1VJTW9kYWwuTWFpbj5cclxuXHRcdFx0PFVJTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdDxVSUJ1dHRvbiBvdXRsaW5lZD5cclxuXHRcdFx0XHRcdNCS0LXRgNC90YPRgtGM0YHRj1xyXG5cdFx0XHRcdDwvVUlCdXR0b24+XHJcblx0XHRcdFx0PFVJQnV0dG9uPlxyXG5cdFx0XHRcdFx00JjQs9GA0LDRgtGMINGB0L3QvtCy0LBcclxuXHRcdFx0XHQ8L1VJQnV0dG9uPlxyXG5cdFx0XHQ8L1VJTW9kYWwuRm9vdGVyPlxyXG5cdFx0PC9VSU1vZGFsPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVUlCdXR0b24iLCJVSU1vZGFsIiwiY2wiLCJHYW1lTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwid2lubmVyTG9naW4iLCJwbGF5ZXJzTGlzdCIsIkhlYWRlciIsIk1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJ3aW5uZXJJbmZvIiwic3BhbiIsIndpbm5lck5hbWUiLCJwbGF5ZXJzIiwiRm9vdGVyIiwib3V0bGluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/UIGame/GameModal/GameModal.jsx\n"));

/***/ })

});