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

/***/ "./components/game/Game/Game.jsx":
/*!***************************************!*\
  !*** ./components/game/Game/Game.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/useGameState */ \"./components/game/model/useGameState.js\");\n/* harmony import */ var _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/gameStateReducer */ \"./components/game/model/gameStateReducer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player)=>player.symbol);\n    const { cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol } = (0,_model_useGameState__WEBPACK_IMPORTED_MODULE_4__.useGameState)(moveOrder);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameModal, {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 23,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.MoveInfo, {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_5__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: {\n                                        index: [\n                                            i,\n                                            j\n                                        ]\n                                    }\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"OccUckyNcifQcYyWi4AhC2jhdkA=\", false, function() {\n    return [\n        _model_useGameState__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQVVQO0FBQ2tCO0FBQ2M7QUFDVTtBQUV0RCxTQUFTWTtRQUlPSDs7SUFIcEIsTUFBTUksWUFBWUosK0NBQU9BLENBQUNLLEdBQUcsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxNQUFNO0lBQ3ZELE1BQU0sRUFBQ0MsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUVDLFlBQVksRUFBQyxHQUN6RVosaUVBQVlBLENBQUNHO0lBQ2hCLE1BQU1VLGVBQWNkLGdCQUFBQSwrQ0FBT0EsQ0FBQ2UsSUFBSSxDQUFDLENBQUNULFNBQVdBLE9BQU9DLE1BQU0sS0FBS00sMkJBQTNDYixvQ0FBQUEsY0FBMERnQixLQUFLO0lBQ25GLHFCQUNHOzswQkFDRyw4REFBQ2pCLDhDQUFTQTtnQkFDUGUsYUFBYUE7Z0JBQ2JHLGFBQWFqQiwrQ0FBT0EsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLFFBQVFZLHNCQUMvQiw4REFBQzFCLCtDQUFVQTt3QkFBaUIyQixTQUFTYjt3QkFBUWMsU0FBU0YsUUFBUTt3QkFBR0csU0FBUzt1QkFBekRmLE9BQU9nQixFQUFFOzs7Ozs7MEJBR2hDLDhEQUFDNUIsK0NBQVVBO2dCQUNSNkIsd0JBQVUsOERBQUM5Qiw2Q0FBUUE7Z0JBQ25CK0IseUJBQVcsOERBQUM1Qiw4Q0FBU0E7Z0JBQ3JCNkIsd0JBQVUsOERBQUM5Qiw2Q0FBUUE7b0JBQUMrQixjQUFjO29CQUFHQyxVQUFVOztnQkFDL0NWLGFBQWFqQiwrQ0FBT0EsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLFFBQVFZLHNCQUMvQiw4REFBQzFCLCtDQUFVQTt3QkFBaUIyQixTQUFTYjt3QkFBUWMsU0FBU0YsUUFBUTt3QkFBR0csU0FBUzt1QkFBekRmLE9BQU9nQixFQUFFO2dCQUU3Qk0sd0JBQVUsOERBQUMvQiw2Q0FBUUE7b0JBQUNnQyxlQUFlcEI7b0JBQWFxQixZQUFZcEI7O2dCQUM1RHFCLFdBQVd2QixNQUFNSCxHQUFHLENBQUMsQ0FBQzJCLE1BQU1DLElBQ3pCRCxLQUFLM0IsR0FBRyxDQUFDLENBQUNFLFFBQVEyQixrQkFDZiw4REFBQ3BDLHlDQUFJQTs0QkFDRm9CLE9BQU87Z0NBQUNlO2dDQUFHQzs2QkFBRTs0QkFDYnRCLGdCQUFnQkE7NEJBRWhCTCxRQUFRQTs0QkFDUjRCLFNBQVM7Z0NBQ054QixTQUFTO29DQUNOeUIsTUFBTWxDLHVFQUFrQkEsQ0FBQ21DLFVBQVU7b0NBQ25DQyxTQUFTO3dDQUFDcEIsT0FBTzs0Q0FBQ2U7NENBQUdDO3lDQUFFO29DQUFBO2dDQUMxQjs0QkFDSDsyQkFQS0QsSUFBSUM7Ozs7Ozs7O0FBYzlCO0dBeENnQi9COztRQUdWRiw2REFBWUE7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeD9hNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgUGxheWVySW5mbyxcclxuICAgQmFja0xpbmssXHJcbiAgIEdhbWVMYXlvdXQsXHJcbiAgIEdhbWVJbmZvLFxyXG4gICBHYW1lVGl0bGUsXHJcbiAgIE1vdmVJbmZvLFxyXG4gICBDZWxsLFxyXG4gICBHYW1lTW9kYWwsXHJcbn0gZnJvbSBcIi4uL1VJR2FtZVwiO1xyXG5pbXBvcnQge1BMQVlFUlN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHt1c2VHYW1lU3RhdGV9IGZyb20gXCIuLi9tb2RlbC91c2VHYW1lU3RhdGVcIjtcclxuaW1wb3J0IHtHQU1FX1NUQVRFX0FDVElPTlN9IGZyb20gXCIuLi9tb2RlbC9nYW1lU3RhdGVSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyID0gUExBWUVSUy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCk7XHJcbiAgIGNvbnN0IHtjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBkaXNwYXRjaCwgd2lubmVyU2VxdWVuY2UsIHdpbm5lclN5bWJvbH0gPVxyXG4gICAgICB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKTtcclxuICAgY29uc3Qgd2lubmVyTG9naW4gPSBQTEFZRVJTLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKT8ubG9naW47XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxHYW1lTW9kYWxcclxuICAgICAgICAgICAgd2lubmVyTG9naW49e3dpbm5lckxvZ2lufVxyXG4gICAgICAgICAgICBwbGF5ZXJzTGlzdD17UExBWUVSUy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgPFBsYXllckluZm8ga2V5PXtwbGF5ZXIuaWR9IHByb2ZpbGU9e3BsYXllcn0gaXNSaWdodD17aW5kZXggJSAyfSBzZWNvbmRzPXs2MH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxHYW1lTGF5b3V0XHJcbiAgICAgICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59XHJcbiAgICAgICAgICAgIGdhbWVUaXRsZT17PEdhbWVUaXRsZSAvPn1cclxuICAgICAgICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9ezJ9IHRpbWVNb2RlPXsxfSAvPn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBtb3ZlSW5mbz17PE1vdmVJbmZvIGN1cnJlbnRTeW1ib2w9e2N1cnJlbnRNb3ZlfSBuZXh0U3ltYm9sPXtuZXh0TW92ZX0gLz59XHJcbiAgICAgICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICAgICBsaW5lLm1hcCgoc3ltYm9sLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtbaSwgal19XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpbm5lclNlcXVlbmNlPXt3aW5uZXJTZXF1ZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAga2V5PXtpICsgan1cclxuICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge2luZGV4OiBbaSwgal19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBsYXllckluZm8iLCJCYWNrTGluayIsIkdhbWVMYXlvdXQiLCJHYW1lSW5mbyIsIkdhbWVUaXRsZSIsIk1vdmVJbmZvIiwiQ2VsbCIsIkdhbWVNb2RhbCIsIlBMQVlFUlMiLCJ1c2VHYW1lU3RhdGUiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJHYW1lIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwic3ltYm9sIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiZGlzcGF0Y2giLCJ3aW5uZXJTZXF1ZW5jZSIsIndpbm5lclN5bWJvbCIsIndpbm5lckxvZ2luIiwiZmluZCIsImxvZ2luIiwicGxheWVyc0xpc3QiLCJpbmRleCIsInByb2ZpbGUiLCJpc1JpZ2h0Iiwic2Vjb25kcyIsImlkIiwiYmFja0xpbmsiLCJnYW1lVGl0bGUiLCJnYW1lSW5mbyIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwibW92ZUluZm8iLCJjdXJyZW50U3ltYm9sIiwibmV4dFN5bWJvbCIsImdhbWVDZWxscyIsImxpbmUiLCJpIiwiaiIsIm9uQ2xpY2siLCJ0eXBlIiwiQ0VMTF9DTElDSyIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});