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

/***/ "./components/UI/UIModal/UIModal.jsx":
/*!*******************************************!*\
  !*** ./components/UI/UIModal/UIModal.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UIModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UIModal.module.scss */ \"./components/UI/UIModal/UIModal.module.scss\");\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ \"./components/icons/index.js\");\n/* harmony import */ var _game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../game/GameInfo/GameInfo */ \"./components/game/GameInfo/GameInfo.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/**\r\n *\r\n * @param {{\r\n * width: 'md' | 'full'\r\n * }} param0\r\n * @returns\r\n */ function UIModal(param) {\n    let { players, currentMove, winnerSymbol, handlePlayerTimeOver, width = \"md  \" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalContent), (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[width]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeButton),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.ICCross, {\n                        style: {\n                            color: \"white\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Игра завершена\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerInfo),\n                    children: [\n                        \"Победитель: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerName),\n                            children: \"Paromovevg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    players: players,\n                    currentMove: currentMove,\n                    style: {\n                        marginBottom: 24\n                    },\n                    winnerSymbol: !!winnerSymbol,\n                    handlePlayerTimeOver: handlePlayerTimeOver\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c = UIModal;\nfunction ICCloseModal() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n            fill: \"white\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 54,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, this);\n}\n_c1 = ICCloseModal;\nvar _c, _c1;\n$RefreshReg$(_c, \"UIModal\");\n$RefreshReg$(_c1, \"ICCloseModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQUNvQjtBQUM5QjtBQUMzQjs7Ozs7O0NBTUMsR0FDYyxTQUFTSyxRQUFRLEtBTS9CO1FBTitCLEVBQzdCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxvQkFBb0IsRUFDcEJDLFFBQVEsTUFBTSxFQUNoQixHQU4rQjtJQU83QixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBV1gscUVBQVU7a0JBQ3ZCLDRFQUFDVTtZQUFJQyxXQUFXUixpREFBRUEsQ0FBQ0gsMEVBQWUsRUFBRUEsNkRBQUUsQ0FBQ1MsTUFBTTs7OEJBQzFDLDhEQUFDQztvQkFBSUMsV0FBV1gseUVBQWM7OEJBQzNCLDRFQUFDQywyQ0FBT0E7d0JBQUNjLE9BQU87NEJBQUVDLE9BQU87d0JBQVE7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ0M7b0JBQUdOLFdBQVdYLG1FQUFROzhCQUFFOzs7Ozs7OEJBQ3pCLDhEQUFDVTtvQkFBSUMsV0FBV1gsd0VBQWE7O3dCQUFFO3NDQUNoQiw4REFBQ29COzRCQUFLVCxXQUFXWCx3RUFBYTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUUvQyw4REFBQ0UsNkRBQVFBO29CQUNORyxTQUFTQTtvQkFDVEMsYUFBYUE7b0JBQ2JTLE9BQU87d0JBQUVPLGNBQWM7b0JBQUc7b0JBQzFCZixjQUFjLENBQUMsQ0FBQ0E7b0JBQ2hCQyxzQkFBc0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztLQTNCd0JKO0FBNkJ4QixTQUFTbUI7SUFDTixxQkFDRyw4REFBQ0M7UUFDRWYsT0FBTTtRQUNOZ0IsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsT0FBTTtrQkFLTiw0RUFBQ0M7WUFDRUMsR0FBRTtZQUNGSCxNQUFLOzs7Ozs7Ozs7OztBQUlqQjtNQWxCU0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9VSU1vZGFsL1VJTW9kYWwuanN4PzA0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2wgZnJvbSAnLi9VSU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBJQ0Nyb3NzIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi8uLi8uLi9nYW1lL0dhbWVJbmZvL0dhbWVJbmZvJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7e1xyXG4gKiB3aWR0aDogJ21kJyB8ICdmdWxsJ1xyXG4gKiB9fSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVJTW9kYWwoe1xyXG4gICBwbGF5ZXJzLFxyXG4gICBjdXJyZW50TW92ZSxcclxuICAgd2lubmVyU3ltYm9sLFxyXG4gICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuICAgd2lkdGggPSAnbWQgICcsXHJcbn0pIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLndyYXBwZXJ9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2wubW9kYWxDb250ZW50LCBjbFt3aWR0aF0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmNsb3NlQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgPElDQ3Jvc3Mgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsLnRpdGxlfT7QmNCz0YDQsCDQt9Cw0LLQtdGA0YjQtdC90LA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud2lubmVySW5mb30+XHJcbiAgICAgICAgICAgICAgINCf0L7QsdC10LTQuNGC0LXQu9GMOiA8c3BhbiBjbGFzc05hbWU9e2NsLndpbm5lck5hbWV9PlBhcm9tb3Zldmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R2FtZUluZm9cclxuICAgICAgICAgICAgICAgcGxheWVycz17cGxheWVyc31cclxuICAgICAgICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG4gICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDI0IH19XHJcbiAgICAgICAgICAgICAgIHdpbm5lclN5bWJvbD17ISF3aW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIElDQ2xvc2VNb2RhbCgpIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgIHsvKiA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTAuNzgxMzk2IDE2LjAwMDFDMC42MjY4NTggMTYuMDAwMSAwLjQ3NTc4MyAxNS45NTQzIDAuMzQ3MjgxIDE1Ljg2ODVDMC4yMTg3NzggMTUuNzgyNiAwLjExODYyMSAxNS42NjA2IDAuMDU5NDc3NiAxNS41MTc4QzAuMDAwMzM0NjYgMTUuMzc1MSAtMC4wMTUxMzY5IDE1LjIxOCAwLjAxNTAxOTggMTUuMDY2NEMwLjA0NTE3NjYgMTQuOTE0OCAwLjExOTYwNyAxNC43NzU2IDAuMjI4ODk2IDE0LjY2NjRMMTQuNjY2NCAwLjIyODg1M0MxNC44MTI5IDAuMDgyMzIwOSAxNS4wMTE3IDAgMTUuMjE4OSAwQzE1LjQyNjEgMCAxNS42MjQ5IDAuMDgyMzIwOSAxNS43NzE0IDAuMjI4ODUzQzE1LjkxNzkgMC4zNzUzODUgMTYuMDAwMiAwLjU3NDEyNSAxNi4wMDAyIDAuNzgxMzUzQzE2LjAwMDIgMC45ODg1ODEgMTUuOTE3OSAxLjE4NzMyIDE1Ljc3MTQgMS4zMzM4NUwxLjMzMzkgMTUuNzcxNEMxLjI2MTQxIDE1Ljg0NCAxLjE3NTI4IDE1LjkwMTYgMS4wODA0NyAxNS45NDA4QzAuOTg1NjUzIDE1Ljk4MDEgMC44ODQwMTYgMTYuMDAwMiAwLjc4MTM5NiAxNi4wMDAxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE1LjIxODkgMTYuMDAwMUMxNS4xMTYzIDE2LjAwMDIgMTUuMDE0NiAxNS45ODAxIDE0LjkxOTggMTUuOTQwOEMxNC44MjUgMTUuOTAxNiAxNC43Mzg5IDE1Ljg0NCAxNC42NjY0IDE1Ljc3MTRMMC4yMjg4OTYgMS4zMzM4NUMwLjA4MjM2MzkgMS4xODczMiA0LjMwMzY0ZS0wNSAwLjk4ODU4MSA0LjMwMzY0ZS0wNSAwLjc4MTM1M0M0LjMwMzY0ZS0wNSAwLjU3NDEyNSAwLjA4MjM2MzkgMC4zNzUzODUgMC4yMjg4OTYgMC4yMjg4NTNDMC4zNzU0MjggMC4wODIzMjA5IDAuNTc0MTY4IDAgMC43ODEzOTYgMEMwLjk4ODYyNCAwIDEuMTg3MzYgMC4wODIzMjA5IDEuMzMzOSAwLjIyODg1M0wxNS43NzE0IDE0LjY2NjRDMTUuODgwNyAxNC43NzU2IDE1Ljk1NTEgMTQuOTE0OCAxNS45ODUzIDE1LjA2NjRDMTYuMDE1NCAxNS4yMTggMTYgMTUuMzc1MSAxNS45NDA4IDE1LjUxNzhDMTUuODgxNyAxNS42NjA2IDE1Ljc4MTUgMTUuNzgyNiAxNS42NTMgMTUuODY4NUMxNS41MjQ1IDE1Ljk1NDMgMTUuMzczNCAxNi4wMDAxIDE1LjIxODkgMTYuMDAwMVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsIiwiSUNDcm9zcyIsIkdhbWVJbmZvIiwiY24iLCJVSU1vZGFsIiwicGxheWVycyIsImN1cnJlbnRNb3ZlIiwid2lubmVyU3ltYm9sIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJ3aWR0aCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJtb2RhbENvbnRlbnQiLCJjbG9zZUJ1dHRvbiIsInN0eWxlIiwiY29sb3IiLCJoMiIsInRpdGxlIiwid2lubmVySW5mbyIsInNwYW4iLCJ3aW5uZXJOYW1lIiwibWFyZ2luQm90dG9tIiwiSUNDbG9zZU1vZGFsIiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UI/UIModal/UIModal.jsx\n"));

/***/ })

});