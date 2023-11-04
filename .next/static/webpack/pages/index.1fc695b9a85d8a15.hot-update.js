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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerInfo.module.scss */ \"./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\");\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameSymbol */ \"./components/game/UIGame/GameSymbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Player */ \"./components/game/UIGame/Player/Player.jsx\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { profile, isRight, timer, isActive, onChangeActive, onTimeChange } = param;\n    _s();\n    console.log(\"playeInfo renders\");\n    // const seconds = useTimerChange(\n    // \ttimer,\n    // \tisActive,\n    // \tonTimerChange,\n    // );\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(timer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isActive) return;\n        let currentSeconds = seconds;\n        const interID = setInterval(()=>{\n            currentSeconds = Math.max(currentSeconds - 1, 0);\n            setSeconds(currentSeconds);\n            if (!currentSeconds) onChangeActive();\n        }, 1000);\n        return ()=>{\n            // debugger;\n            onTimeChange(currentSeconds, profile.symbol);\n            clearInterval(interID);\n        };\n    }, [\n        isActive\n    ]);\n    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsStr = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    const getTimerColor = ()=>{\n        if (!isActive) {\n            if (!seconds) return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timeIsOver);\n            return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().stopped);\n        }\n        return isDanger ? (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().danger) : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gamerInfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().profileWithSymbol),\n                style: isRight ? {\n                    order: \"3\"\n                } : {},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Player_Player__WEBPACK_IMPORTED_MODULE_4__.Player, {\n                        login: profile.login,\n                        rating: profile.rating,\n                        avatar: profile.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().symbol),\n                        children: profile.symbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().separator),\n                style: isRight ? {\n                    order: \"2\"\n                } : {}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer), getTimerColor()),\n                style: isRight ? {\n                    order: \"1\"\n                } : {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        minutesStr,\n                        \":\",\n                        secondsStr\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 100,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, this);\n} // function useTimerChange(\n // \tinitialTimer,\n // \tisActive,\n // \tonTimerChange,\n // ) {\n // \tconst [seconds, setSeconds] =\n // \t\tuseState(initialTimer);\n // \tuseEffect(() => {\n // \t\tif (!isActive) return;\n // \t\tconst interID = setInterval(\n // \t\t\t() => {\n // \t\t\t\tsetSeconds(timer =>\n // \t\t\t\t\tMath.max(timer - 1, 0),\n // \t\t\t\t);\n // \t\t\t},\n // \t\t\t1000,\n // \t\t);\n // \t\tdebugger;\n // \t\tonTimerChange(seconds);\n // \t\tconsole.log(\n // \t\t\t\"active or seconds changes\",\n // \t\t);\n // \t\treturn () =>\n // \t\t\tclearInterval(interID);\n // \t}, [isActive, seconds]);\n // \treturn seconds;\n // }\n_s(PlayerInfo, \"2Zt0J4gpCkhKX89UUwefXstGqEc=\");\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZTtBQUMyQjtBQUNDO0FBQ2Y7QUFDYztBQUNLO0FBQ3hDLFNBQVNRLFdBQVcsS0FPMUI7UUFQMEIsRUFDMUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1osR0FQMEI7O0lBUTFCQyxRQUFRQyxHQUFHLENBQUM7SUFFWixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUMxQmhCLCtDQUFRQSxDQUFDUztJQUNWVixnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ1csVUFBVTtRQUNmLElBQUlPLGlCQUFpQkY7UUFDckIsTUFBTUcsVUFBVUMsWUFDZjtZQUNDRixpQkFBaUJHLEtBQUtDLEdBQUcsQ0FDeEJKLGlCQUFpQixHQUNqQjtZQUVERCxXQUFXQztZQUNYLElBQUksQ0FBQ0EsZ0JBQ0pOO1FBQ0YsR0FDQTtRQUdELE9BQU87WUFDTixZQUFZO1lBQ1pDLGFBQ0NLLGdCQUNBVixRQUFRZSxNQUFNO1lBRWZDLGNBQWNMO1FBQ2Y7SUFDRCxHQUFHO1FBQUNSO0tBQVM7SUFFYixNQUFNYyxhQUFhQyxPQUNsQkwsS0FBS00sS0FBSyxDQUFDWCxVQUFVLEtBQ3BCWSxRQUFRLENBQUMsR0FBRztJQUNkLE1BQU1DLGFBQWFILE9BQ2xCTCxLQUFLTSxLQUFLLENBQUNYLFVBQVUsS0FDcEJZLFFBQVEsQ0FBQyxHQUFHO0lBQ2QsTUFBTUUsV0FBV2QsV0FBVztJQUU1QixNQUFNZSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDcEIsVUFBVTtZQUNkLElBQUksQ0FBQ0ssU0FDSixPQUFPZCwyRUFBYTtZQUNyQixPQUFPQSx3RUFBVTtRQUNsQjtRQUNBLE9BQU80QixXQUNKNUIsdUVBQVMsR0FDVDtJQUNKO0lBRUEscUJBQ0MsOERBQUNpQztRQUFJQyxXQUFXbEMsMEVBQVk7OzBCQUMzQiw4REFBQ2lDO2dCQUNBQyxXQUNDbEMsa0ZBQW9CO2dCQUVyQnFDLE9BQ0M5QixVQUFVO29CQUFFK0IsT0FBTztnQkFBSSxJQUFJLENBQUM7O2tDQUc3Qiw4REFBQ25DLGtEQUFNQTt3QkFDTm9DLE9BQU9qQyxRQUFRaUMsS0FBSzt3QkFDcEJDLFFBQVFsQyxRQUFRa0MsTUFBTTt3QkFDdEJDLFFBQVFuQyxRQUFRbUMsTUFBTTs7Ozs7O2tDQUV2Qiw4REFBQ3hDLG1EQUFVQTt3QkFDVmlDLFdBQVdsQyx1RUFBUztrQ0FFbkJNLFFBQVFlLE1BQU07Ozs7Ozs7Ozs7OzswQkFHakIsOERBQUNZO2dCQUNBQyxXQUFXbEMsMEVBQVk7Z0JBQ3ZCcUMsT0FDQzlCLFVBQVU7b0JBQUUrQixPQUFPO2dCQUFJLElBQUksQ0FBQzs7Ozs7OzBCQUk5Qiw4REFBQ0w7Z0JBQ0FDLFdBQVdoQyxpREFBRUEsQ0FDWkYsc0VBQVEsRUFDUjZCO2dCQUVEUSxPQUNDOUIsVUFBVTtvQkFBRStCLE9BQU87Z0JBQUksSUFBSSxDQUFDOzBCQUc3Qiw0RUFBQ0s7O3dCQUNDcEI7d0JBQVc7d0JBQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkIsRUFFQSwyQkFBMkI7Q0FDM0IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IsU0FBUztDQUNULFFBQVE7Q0FDUixXQUFXO0NBQ1gsT0FBTztDQUNQLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxPQUFPO0NBQ1AsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLElBQUk7R0FySVl0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3g/MWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuXHR1c2VFZmZlY3QsXHJcblx0dXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi4vR2FtZVN5bWJvbFwiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgdXNlTm93IH0gZnJvbSBcIi4vLi4vLi4vLi4vbGliL3RpbWVyc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVySW5mbyh7XHJcblx0cHJvZmlsZSxcclxuXHRpc1JpZ2h0LFxyXG5cdHRpbWVyLFxyXG5cdGlzQWN0aXZlLFxyXG5cdG9uQ2hhbmdlQWN0aXZlLFxyXG5cdG9uVGltZUNoYW5nZSxcclxufSkge1xyXG5cdGNvbnNvbGUubG9nKFwicGxheWVJbmZvIHJlbmRlcnNcIik7XHJcblxyXG5cdC8vIGNvbnN0IHNlY29uZHMgPSB1c2VUaW1lckNoYW5nZShcclxuXHQvLyBcdHRpbWVyLFxyXG5cdC8vIFx0aXNBY3RpdmUsXHJcblx0Ly8gXHRvblRpbWVyQ2hhbmdlLFxyXG5cdC8vICk7XHJcblx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID1cclxuXHRcdHVzZVN0YXRlKHRpbWVyKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xyXG5cdFx0bGV0IGN1cnJlbnRTZWNvbmRzID0gc2Vjb25kcztcclxuXHRcdGNvbnN0IGludGVySUQgPSBzZXRJbnRlcnZhbChcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGN1cnJlbnRTZWNvbmRzID0gTWF0aC5tYXgoXHJcblx0XHRcdFx0XHRjdXJyZW50U2Vjb25kcyAtIDEsXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0c2V0U2Vjb25kcyhjdXJyZW50U2Vjb25kcyk7XHJcblx0XHRcdFx0aWYgKCFjdXJyZW50U2Vjb25kcylcclxuXHRcdFx0XHRcdG9uQ2hhbmdlQWN0aXZlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMDAsXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdC8vIGRlYnVnZ2VyO1xyXG5cdFx0XHRvblRpbWVDaGFuZ2UoXHJcblx0XHRcdFx0Y3VycmVudFNlY29uZHMsXHJcblx0XHRcdFx0cHJvZmlsZS5zeW1ib2wsXHJcblx0XHRcdCk7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJJRCk7XHJcblx0XHR9O1xyXG5cdH0sIFtpc0FjdGl2ZV0pO1xyXG5cclxuXHRjb25zdCBtaW51dGVzU3RyID0gU3RyaW5nKFxyXG5cdFx0TWF0aC5mbG9vcihzZWNvbmRzIC8gNjApLFxyXG5cdCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IHNlY29uZHNTdHIgPSBTdHJpbmcoXHJcblx0XHRNYXRoLmZsb29yKHNlY29uZHMgJSA2MCksXHJcblx0KS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Y29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDw9IDEwO1xyXG5cclxuXHRjb25zdCBnZXRUaW1lckNvbG9yID0gKCkgPT4ge1xyXG5cdFx0aWYgKCFpc0FjdGl2ZSkge1xyXG5cdFx0XHRpZiAoIXNlY29uZHMpXHJcblx0XHRcdFx0cmV0dXJuIGNsLnRpbWVJc092ZXI7XHJcblx0XHRcdHJldHVybiBjbC5zdG9wcGVkO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRGFuZ2VyXHJcblx0XHRcdD8gY2wuZGFuZ2VyXHJcblx0XHRcdDogXCJcIjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsLmdhbWVySW5mb30+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0Y2wucHJvZmlsZVdpdGhTeW1ib2xcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3R5bGU9e1xyXG5cdFx0XHRcdFx0aXNSaWdodCA/IHsgb3JkZXI6IFwiM1wiIH0gOiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxQbGF5ZXJcclxuXHRcdFx0XHRcdGxvZ2luPXtwcm9maWxlLmxvZ2lufVxyXG5cdFx0XHRcdFx0cmF0aW5nPXtwcm9maWxlLnJhdGluZ31cclxuXHRcdFx0XHRcdGF2YXRhcj17cHJvZmlsZS5hdmF0YXJ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8R2FtZVN5bWJvbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbC5zeW1ib2x9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e3Byb2ZpbGUuc3ltYm9sfVxyXG5cdFx0XHRcdDwvR2FtZVN5bWJvbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsLnNlcGFyYXRvcn1cclxuXHRcdFx0XHRzdHlsZT17XHJcblx0XHRcdFx0XHRpc1JpZ2h0ID8geyBvcmRlcjogXCIyXCIgfSA6IHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ+PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbihcclxuXHRcdFx0XHRcdGNsLnRpbWVyLFxyXG5cdFx0XHRcdFx0Z2V0VGltZXJDb2xvcigpLFxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0c3R5bGU9e1xyXG5cdFx0XHRcdFx0aXNSaWdodCA/IHsgb3JkZXI6IFwiMVwiIH0gOiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0e21pbnV0ZXNTdHJ9OntzZWNvbmRzU3RyfVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB1c2VUaW1lckNoYW5nZShcclxuLy8gXHRpbml0aWFsVGltZXIsXHJcbi8vIFx0aXNBY3RpdmUsXHJcbi8vIFx0b25UaW1lckNoYW5nZSxcclxuLy8gKSB7XHJcbi8vIFx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID1cclxuLy8gXHRcdHVzZVN0YXRlKGluaXRpYWxUaW1lcik7XHJcbi8vIFx0dXNlRWZmZWN0KCgpID0+IHtcclxuLy8gXHRcdGlmICghaXNBY3RpdmUpIHJldHVybjtcclxuLy8gXHRcdGNvbnN0IGludGVySUQgPSBzZXRJbnRlcnZhbChcclxuLy8gXHRcdFx0KCkgPT4ge1xyXG4vLyBcdFx0XHRcdHNldFNlY29uZHModGltZXIgPT5cclxuLy8gXHRcdFx0XHRcdE1hdGgubWF4KHRpbWVyIC0gMSwgMCksXHJcbi8vIFx0XHRcdFx0KTtcclxuLy8gXHRcdFx0fSxcclxuLy8gXHRcdFx0MTAwMCxcclxuLy8gXHRcdCk7XHJcbi8vIFx0XHRkZWJ1Z2dlcjtcclxuLy8gXHRcdG9uVGltZXJDaGFuZ2Uoc2Vjb25kcyk7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhcclxuLy8gXHRcdFx0XCJhY3RpdmUgb3Igc2Vjb25kcyBjaGFuZ2VzXCIsXHJcbi8vIFx0XHQpO1xyXG4vLyBcdFx0cmV0dXJuICgpID0+XHJcbi8vIFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJJRCk7XHJcbi8vIFx0fSwgW2lzQWN0aXZlLCBzZWNvbmRzXSk7XHJcbi8vIFx0cmV0dXJuIHNlY29uZHM7XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIkdhbWVTeW1ib2wiLCJjbiIsIlBsYXllciIsInVzZU5vdyIsIlBsYXllckluZm8iLCJwcm9maWxlIiwiaXNSaWdodCIsInRpbWVyIiwiaXNBY3RpdmUiLCJvbkNoYW5nZUFjdGl2ZSIsIm9uVGltZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImN1cnJlbnRTZWNvbmRzIiwiaW50ZXJJRCIsInNldEludGVydmFsIiwiTWF0aCIsIm1heCIsInN5bWJvbCIsImNsZWFySW50ZXJ2YWwiLCJtaW51dGVzU3RyIiwiU3RyaW5nIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHIiLCJpc0RhbmdlciIsImdldFRpbWVyQ29sb3IiLCJ0aW1lSXNPdmVyIiwic3RvcHBlZCIsImRhbmdlciIsImRpdiIsImNsYXNzTmFtZSIsImdhbWVySW5mbyIsInByb2ZpbGVXaXRoU3ltYm9sIiwic3R5bGUiLCJvcmRlciIsImxvZ2luIiwicmF0aW5nIiwiYXZhdGFyIiwic2VwYXJhdG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/UIGame/PlayerInfo/PlayerInfo.jsx\n"));

/***/ })

});