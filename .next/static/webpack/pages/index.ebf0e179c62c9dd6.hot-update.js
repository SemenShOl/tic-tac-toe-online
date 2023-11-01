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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_useGameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/useGameState */ \"./components/game/model/useGameState.js\");\n/* harmony import */ var _UIGame_Cell_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UIGame/Cell/Cell */ \"./components/game/UIGame/Cell/Cell.jsx\");\n/* harmony import */ var _UIGame_GameModal_GameModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIGame/GameModal/GameModal */ \"./components/game/UIGame/GameModal/GameModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player)=>player.symbol);\n    const { cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol } = (0,_model_useGameState__WEBPACK_IMPORTED_MODULE_3__.useGameState)(moveOrder);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_GameModal_GameModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 14,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoveInfo, {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_Cell_Cell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_useGameState__WEBPACK_IMPORTED_MODULE_3__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: {\n                                        index: [\n                                            i,\n                                            j\n                                        ]\n                                    }\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"OccUckyNcifQcYyWi4AhC2jhdkA=\", false, function() {\n    return [\n        _model_useGameState__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNXO0FBRWtDO0FBQ2hDO0FBQ2U7QUFDL0MsU0FBU007UUFJT0w7O0lBSHBCLE1BQU1NLFlBQVlOLCtDQUFPQSxDQUFDTyxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsTUFBTTtJQUN2RCxNQUFNLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUMsR0FDekViLGlFQUFZQSxDQUFDSTtJQUNoQixNQUFNVSxlQUFjaEIsZ0JBQUFBLCtDQUFPQSxDQUFDaUIsSUFBSSxDQUFDLENBQUNULFNBQVdBLE9BQU9DLE1BQU0sS0FBS00sMkJBQTNDZixvQ0FBQUEsY0FBMERrQixLQUFLO0lBQ25GLHFCQUNHOzswQkFDRyw4REFBQ2QsbUVBQVNBO2dCQUNQWSxhQUFhQTtnQkFDYkcsYUFBYW5CLCtDQUFPQSxDQUFDTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUVksc0JBQy9CLDhEQUFDQzt3QkFBMkJDLFNBQVNkO3dCQUFRZSxTQUFTSCxRQUFRO3dCQUFHSSxTQUFTO3VCQUF6RGhCLE9BQU9pQixFQUFFOzs7Ozs7MEJBR2hDLDhEQUFDQztnQkFDRUMsd0JBQVUsOERBQUNDO2dCQUNYQyx5QkFBVyw4REFBQ0M7Z0JBQ1pDLHdCQUFVLDhEQUFDQztvQkFBU0MsY0FBYztvQkFBR0MsVUFBVTs7Z0JBQy9DZixhQUFhbkIsK0NBQU9BLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxRQUFRWSxzQkFDL0IsOERBQUNDO3dCQUEyQkMsU0FBU2Q7d0JBQVFlLFNBQVNILFFBQVE7d0JBQUdJLFNBQVM7dUJBQXpEaEIsT0FBT2lCLEVBQUU7Z0JBRTdCVSx3QkFBVSw4REFBQ0M7b0JBQVNDLGVBQWUxQjtvQkFBYTJCLFlBQVkxQjs7Z0JBQzVEMkIsV0FBVzdCLE1BQU1ILEdBQUcsQ0FBQyxDQUFDaUMsTUFBTUMsSUFDekJELEtBQUtqQyxHQUFHLENBQUMsQ0FBQ0UsUUFBUWlDLGtCQUNmLDhEQUFDdkMseURBQUlBOzRCQUNGaUIsT0FBTztnQ0FBQ3FCO2dDQUFHQzs2QkFBRTs0QkFDYjVCLGdCQUFnQkE7NEJBRWhCTCxRQUFRQTs0QkFDUmtDLFNBQVM7Z0NBQ045QixTQUFTO29DQUNOK0IsTUFBTTNDLG1FQUFrQkEsQ0FBQzRDLFVBQVU7b0NBQ25DQyxTQUFTO3dDQUFDMUIsT0FBTzs0Q0FBQ3FCOzRDQUFHQzt5Q0FBRTtvQ0FBQTtnQ0FDMUI7NEJBQ0g7MkJBUEtELElBQUlDOzs7Ozs7OztBQWM5QjtHQXhDZ0JyQzs7UUFHVkgsNkRBQVlBOzs7S0FIRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWUvR2FtZS5qc3g/YTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UExBWUVSU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHtHQU1FX1NUQVRFX0FDVElPTlMsIHVzZUdhbWVTdGF0ZX0gZnJvbSBcIi4uL21vZGVsL3VzZUdhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi4vVUlHYW1lL0NlbGwvQ2VsbFwiO1xyXG5pbXBvcnQgR2FtZU1vZGFsIGZyb20gXCIuLi9VSUdhbWUvR2FtZU1vZGFsL0dhbWVNb2RhbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyID0gUExBWUVSUy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCk7XHJcbiAgIGNvbnN0IHtjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBkaXNwYXRjaCwgd2lubmVyU2VxdWVuY2UsIHdpbm5lclN5bWJvbH0gPVxyXG4gICAgICB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKTtcclxuICAgY29uc3Qgd2lubmVyTG9naW4gPSBQTEFZRVJTLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKT8ubG9naW47XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxHYW1lTW9kYWxcclxuICAgICAgICAgICAgd2lubmVyTG9naW49e3dpbm5lckxvZ2lufVxyXG4gICAgICAgICAgICBwbGF5ZXJzTGlzdD17UExBWUVSUy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgPFBsYXllckluZm8ga2V5PXtwbGF5ZXIuaWR9IHByb2ZpbGU9e3BsYXllcn0gaXNSaWdodD17aW5kZXggJSAyfSBzZWNvbmRzPXs2MH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxHYW1lTGF5b3V0XHJcbiAgICAgICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59XHJcbiAgICAgICAgICAgIGdhbWVUaXRsZT17PEdhbWVUaXRsZSAvPn1cclxuICAgICAgICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9ezJ9IHRpbWVNb2RlPXsxfSAvPn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBtb3ZlSW5mbz17PE1vdmVJbmZvIGN1cnJlbnRTeW1ib2w9e2N1cnJlbnRNb3ZlfSBuZXh0U3ltYm9sPXtuZXh0TW92ZX0gLz59XHJcbiAgICAgICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICAgICBsaW5lLm1hcCgoc3ltYm9sLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtbaSwgal19XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpbm5lclNlcXVlbmNlPXt3aW5uZXJTZXF1ZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAga2V5PXtpICsgan1cclxuICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge2luZGV4OiBbaSwgal19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBMQVlFUlMiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJ1c2VHYW1lU3RhdGUiLCJDZWxsIiwiR2FtZU1vZGFsIiwiR2FtZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsInN5bWJvbCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImRpc3BhdGNoIiwid2lubmVyU2VxdWVuY2UiLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsInBsYXllcnNMaXN0IiwiaW5kZXgiLCJQbGF5ZXJJbmZvIiwicHJvZmlsZSIsImlzUmlnaHQiLCJzZWNvbmRzIiwiaWQiLCJHYW1lTGF5b3V0IiwiYmFja0xpbmsiLCJCYWNrTGluayIsImdhbWVUaXRsZSIsIkdhbWVUaXRsZSIsImdhbWVJbmZvIiwiR2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm1vdmVJbmZvIiwiTW92ZUluZm8iLCJjdXJyZW50U3ltYm9sIiwibmV4dFN5bWJvbCIsImdhbWVDZWxscyIsImxpbmUiLCJpIiwiaiIsIm9uQ2xpY2siLCJ0eXBlIiwiQ0VMTF9DTElDSyIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});