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

/***/ "./components/game/UIGame/PlayerInfo/PlayerInfo.jsx":
/*!**********************************************************!*\
  !*** ./components/game/UIGame/PlayerInfo/PlayerInfo.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerInfo.module.scss */ \"./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\");\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameSymbol */ \"./components/game/UIGame/GameSymbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Player */ \"./components/game/UIGame/Player/Player.jsx\");\n\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { profile, isRight, seconds, isTimerRunning = true } = param;\n    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsStr = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    const getTimerColor = ()=>{\n        if (!isTimerRunning) {\n            if (!seconds) return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().timeIsOver);\n            return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().stopped);\n        }\n        return isDanger ? (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().danger) : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gamerInfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().profileWithSymbol),\n                style: isRight ? {\n                    order: \"3\"\n                } : {},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Player_Player__WEBPACK_IMPORTED_MODULE_4__.Player, {\n                        login: profile.login,\n                        rating: profile.rating,\n                        avatar: profile.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().symbol),\n                        children: profile.symbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().separator),\n                style: isRight ? {\n                    order: \"2\"\n                } : {}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 24,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().timer), getTimerColor()),\n                style: isRight ? {\n                    order: \"1\"\n                } : {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        minutesStr,\n                        \":\",\n                        secondsStr\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0Q7QUFDYjtBQUNZO0FBQ2pDLFNBQVNLLFdBQVcsS0FBa0Q7UUFBbEQsRUFBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsaUJBQWlCLElBQUksRUFBQyxHQUFsRDtJQUN4QixNQUFNQyxhQUFhQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDaEUsTUFBTUMsYUFBYUosT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ2hFLE1BQU1FLFdBQVdSLFdBQVc7SUFFNUIsTUFBTVMsZ0JBQWdCO1FBQ25CLElBQUksQ0FBQ1IsZ0JBQWdCO1lBQ2xCLElBQUksQ0FBQ0QsU0FBUyxPQUFPUCwyRUFBYTtZQUNsQyxPQUFPQSx3RUFBVTtRQUNwQjtRQUNBLE9BQU9lLFdBQVdmLHVFQUFTLEdBQUc7SUFDakM7SUFDQSxxQkFDRyw4REFBQ29CO1FBQUlDLFdBQVdyQiwwRUFBWTs7MEJBQ3pCLDhEQUFDb0I7Z0JBQUlDLFdBQVdyQixrRkFBb0I7Z0JBQUV3QixPQUFPbEIsVUFBVTtvQkFBQ21CLE9BQU87Z0JBQUcsSUFBSSxDQUFDOztrQ0FDcEUsOERBQUN0QixrREFBTUE7d0JBQUN1QixPQUFPckIsUUFBUXFCLEtBQUs7d0JBQUVDLFFBQVF0QixRQUFRc0IsTUFBTTt3QkFBRUMsUUFBUXZCLFFBQVF1QixNQUFNOzs7Ozs7a0NBQzVFLDhEQUFDM0IsbURBQVVBO3dCQUFDb0IsV0FBV3JCLHVFQUFTO2tDQUFHSyxRQUFRd0IsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQ1Q7Z0JBQUlDLFdBQVdyQiwwRUFBWTtnQkFBRXdCLE9BQU9sQixVQUFVO29CQUFDbUIsT0FBTztnQkFBRyxJQUFJLENBQUM7Ozs7OzswQkFFL0QsOERBQUNMO2dCQUFJQyxXQUFXbkIsaURBQUVBLENBQUNGLHNFQUFRLEVBQUVnQjtnQkFBa0JRLE9BQU9sQixVQUFVO29CQUFDbUIsT0FBTztnQkFBRyxJQUFJLENBQUM7MEJBQzdFLDRFQUFDTzs7d0JBQ0d2Qjt3QkFBVzt3QkFBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtLQTNCZ0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9VSUdhbWUvUGxheWVySW5mby9QbGF5ZXJJbmZvLmpzeD8xZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsIGZyb20gXCIuL1BsYXllckluZm8ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtHYW1lU3ltYm9sfSBmcm9tIFwiLi4vR2FtZVN5bWJvbFwiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJJbmZvKHtwcm9maWxlLCBpc1JpZ2h0LCBzZWNvbmRzLCBpc1RpbWVyUnVubmluZyA9IHRydWV9KSB7XHJcbiAgIGNvbnN0IG1pbnV0ZXNTdHIgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgIGNvbnN0IHNlY29uZHNTdHIgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzICUgNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8PSAxMDtcclxuXHJcbiAgIGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNUaW1lclJ1bm5pbmcpIHtcclxuICAgICAgICAgaWYgKCFzZWNvbmRzKSByZXR1cm4gY2wudGltZUlzT3ZlcjtcclxuICAgICAgICAgcmV0dXJuIGNsLnN0b3BwZWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzRGFuZ2VyID8gY2wuZGFuZ2VyIDogXCJcIjtcclxuICAgfTtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmdhbWVySW5mb30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5wcm9maWxlV2l0aFN5bWJvbH0gc3R5bGU9e2lzUmlnaHQgPyB7b3JkZXI6IFwiM1wifSA6IHt9fT5cclxuICAgICAgICAgICAgPFBsYXllciBsb2dpbj17cHJvZmlsZS5sb2dpbn0gcmF0aW5nPXtwcm9maWxlLnJhdGluZ30gYXZhdGFyPXtwcm9maWxlLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgPEdhbWVTeW1ib2wgY2xhc3NOYW1lPXtjbC5zeW1ib2x9Pntwcm9maWxlLnN5bWJvbH08L0dhbWVTeW1ib2w+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuc2VwYXJhdG9yfSBzdHlsZT17aXNSaWdodCA/IHtvcmRlcjogXCIyXCJ9IDoge319PjwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsLnRpbWVyLCBnZXRUaW1lckNvbG9yKCkpfSBzdHlsZT17aXNSaWdodCA/IHtvcmRlcjogXCIxXCJ9IDoge319PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAge21pbnV0ZXNTdHJ9OntzZWNvbmRzU3RyfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbCIsIkdhbWVTeW1ib2wiLCJjbiIsIlBsYXllciIsIlBsYXllckluZm8iLCJwcm9maWxlIiwiaXNSaWdodCIsInNlY29uZHMiLCJpc1RpbWVyUnVubmluZyIsIm1pbnV0ZXNTdHIiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHIiLCJpc0RhbmdlciIsImdldFRpbWVyQ29sb3IiLCJ0aW1lSXNPdmVyIiwic3RvcHBlZCIsImRhbmdlciIsImRpdiIsImNsYXNzTmFtZSIsImdhbWVySW5mbyIsInByb2ZpbGVXaXRoU3ltYm9sIiwic3R5bGUiLCJvcmRlciIsImxvZ2luIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwic2VwYXJhdG9yIiwidGltZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/UIGame/PlayerInfo/PlayerInfo.jsx\n"));

/***/ })

});