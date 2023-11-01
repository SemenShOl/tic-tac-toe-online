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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/useGameState */ \"./components/game/model/useGameState.js\");\n/* harmony import */ var _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/gameStateReducer */ \"./components/game/model/gameStateReducer.js\");\n/* harmony import */ var _model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../model/computeWinnerSymbol */ \"./components/game/model/computeWinnerSymbol.js\");\n/* harmony import */ var _model_getNextMove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/getNextMove */ \"./components/game/model/getNextMove.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player)=>player.symbol);\n    // const {cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol} =\n    //    useGameState(moveOrder);\n    const winnerSymbol = (0,_model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_6__.computeWinnerSymbol)(gameState);\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        moveOrder\n    }, initGameState);\n    const nextMove = (0,_model_getNextMove__WEBPACK_IMPORTED_MODULE_7__.getNextMove)(gameState.currentMove, moveOrder, gameState.playerWhoCannotMove);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameModal, {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.MoveInfo, {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_5__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: {\n                                        index: [\n                                            i,\n                                            j\n                                        ]\n                                    }\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"j+hnoi4PiTNI6Me8d/DNgt4wVKA=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBVVA7QUFDa0I7QUFDYztBQUNVO0FBQ29CO0FBQ2hDO0FBQzFDLFNBQVNlO1FBUU9OOztJQVBwQixNQUFNTyxZQUFZUCwrQ0FBT0EsQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLE1BQU07SUFDdkQsaUZBQWlGO0lBQ2pGLDhCQUE4QjtJQUM5QixNQUFNTixlQUFlRCwrRUFBbUJBLENBQUNRO0lBQ3pDLE1BQU0sQ0FBQ0EsV0FBV0MsU0FBUyxHQUFHQyxXQUFXQyxrQkFBa0I7UUFBQ1A7SUFBUyxHQUFHUTtJQUV4RSxNQUFNQyxXQUFXWCwrREFBV0EsQ0FBQ00sVUFBVU0sV0FBVyxFQUFFVixXQUFXSSxVQUFVTyxtQkFBbUI7SUFDNUYsTUFBTUMsZUFBY25CLGdCQUFBQSwrQ0FBT0EsQ0FBQ29CLElBQUksQ0FBQyxDQUFDWCxTQUFXQSxPQUFPQyxNQUFNLEtBQUtOLDJCQUEzQ0osb0NBQUFBLGNBQTBEcUIsS0FBSztJQUNuRixxQkFDRzs7MEJBQ0csOERBQUN0Qiw4Q0FBU0E7Z0JBQ1BvQixhQUFhQTtnQkFDYkcsYUFBYXRCLCtDQUFPQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsUUFBUWMsc0JBQy9CLDhEQUFDL0IsK0NBQVVBO3dCQUFpQmdDLFNBQVNmO3dCQUFRZ0IsU0FBU0YsUUFBUTt3QkFBR0csU0FBUzt1QkFBekRqQixPQUFPa0IsRUFBRTs7Ozs7OzBCQUdoQyw4REFBQ2pDLCtDQUFVQTtnQkFDUmtDLHdCQUFVLDhEQUFDbkMsNkNBQVFBO2dCQUNuQm9DLHlCQUFXLDhEQUFDakMsOENBQVNBO2dCQUNyQmtDLHdCQUFVLDhEQUFDbkMsNkNBQVFBO29CQUFDb0MsY0FBYztvQkFBR0MsVUFBVTs7Z0JBQy9DVixhQUFhdEIsK0NBQU9BLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRYyxzQkFDL0IsOERBQUMvQiwrQ0FBVUE7d0JBQWlCZ0MsU0FBU2Y7d0JBQVFnQixTQUFTRixRQUFRO3dCQUFHRyxTQUFTO3VCQUF6RGpCLE9BQU9rQixFQUFFO2dCQUU3Qk0sd0JBQVUsOERBQUNwQyw2Q0FBUUE7b0JBQUNxQyxlQUFlakI7b0JBQWFrQixZQUFZbkI7O2dCQUM1RG9CLFdBQVdDLE1BQU03QixHQUFHLENBQUMsQ0FBQzhCLE1BQU1DLElBQ3pCRCxLQUFLOUIsR0FBRyxDQUFDLENBQUNFLFFBQVE4QixrQkFDZiw4REFBQzFDLHlDQUFJQTs0QkFDRnlCLE9BQU87Z0NBQUNnQjtnQ0FBR0M7NkJBQUU7NEJBQ2JDLGdCQUFnQkE7NEJBRWhCL0IsUUFBUUE7NEJBQ1JnQyxTQUFTO2dDQUNOOUIsU0FBUztvQ0FDTitCLE1BQU16Qyx1RUFBa0JBLENBQUMwQyxVQUFVO29DQUNuQ0MsU0FBUzt3Q0FBQ3RCLE9BQU87NENBQUNnQjs0Q0FBR0M7eUNBQUU7b0NBQUE7Z0NBQzFCOzRCQUNIOzJCQVBLRCxJQUFJQzs7Ozs7Ozs7QUFjOUI7R0E1Q2dCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWUvR2FtZS5qc3g/YTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgIFBsYXllckluZm8sXHJcbiAgIEJhY2tMaW5rLFxyXG4gICBHYW1lTGF5b3V0LFxyXG4gICBHYW1lSW5mbyxcclxuICAgR2FtZVRpdGxlLFxyXG4gICBNb3ZlSW5mbyxcclxuICAgQ2VsbCxcclxuICAgR2FtZU1vZGFsLFxyXG59IGZyb20gXCIuLi9VSUdhbWVcIjtcclxuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7dXNlR2FtZVN0YXRlfSBmcm9tIFwiLi4vbW9kZWwvdXNlR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7R0FNRV9TVEFURV9BQ1RJT05TfSBmcm9tIFwiLi4vbW9kZWwvZ2FtZVN0YXRlUmVkdWNlclwiO1xyXG5pbXBvcnQge2NvbXB1dGVXaW5uZXJTeW1ib2wsIHdpbm5lclN5bWJvbH0gZnJvbSBcIi4vLi4vbW9kZWwvY29tcHV0ZVdpbm5lclN5bWJvbFwiO1xyXG5pbXBvcnQge2dldE5leHRNb3ZlfSBmcm9tIFwiLi4vbW9kZWwvZ2V0TmV4dE1vdmVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgIGNvbnN0IG1vdmVPcmRlciA9IFBMQVlFUlMubWFwKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wpO1xyXG4gICAvLyBjb25zdCB7Y2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgZGlzcGF0Y2gsIHdpbm5lclNlcXVlbmNlLCB3aW5uZXJTeW1ib2x9ID1cclxuICAgLy8gICAgdXNlR2FtZVN0YXRlKG1vdmVPcmRlcik7XHJcbiAgIGNvbnN0IHdpbm5lclN5bWJvbCA9IGNvbXB1dGVXaW5uZXJTeW1ib2woZ2FtZVN0YXRlKTtcclxuICAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihnYW1lU3RhdGVSZWR1Y2VyLCB7bW92ZU9yZGVyfSwgaW5pdEdhbWVTdGF0ZSk7XHJcblxyXG4gICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBnYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSk7XHJcbiAgIGNvbnN0IHdpbm5lckxvZ2luID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk/LmxvZ2luO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8R2FtZU1vZGFsXHJcbiAgICAgICAgICAgIHdpbm5lckxvZ2luPXt3aW5uZXJMb2dpbn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8R2FtZUxheW91dFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgICAgICBnYW1lVGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gcGxheWVyc0NvdW50PXsyfSB0aW1lTW9kZT17MX0gLz59XHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcHJvZmlsZT17cGxheWVyfSBpc1JpZ2h0PXtpbmRleCAlIDJ9IHNlY29uZHM9ezYwfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgbW92ZUluZm89ezxNb3ZlSW5mbyBjdXJyZW50U3ltYm9sPXtjdXJyZW50TW92ZX0gbmV4dFN5bWJvbD17bmV4dE1vdmV9IC8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgbGluZS5tYXAoKHN5bWJvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICBpbmRleD17W2ksIGpdfVxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtpbmRleDogW2ksIGpdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbGF5ZXJJbmZvIiwiQmFja0xpbmsiLCJHYW1lTGF5b3V0IiwiR2FtZUluZm8iLCJHYW1lVGl0bGUiLCJNb3ZlSW5mbyIsIkNlbGwiLCJHYW1lTW9kYWwiLCJQTEFZRVJTIiwidXNlR2FtZVN0YXRlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiY29tcHV0ZVdpbm5lclN5bWJvbCIsIndpbm5lclN5bWJvbCIsImdldE5leHRNb3ZlIiwiR2FtZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsInN5bWJvbCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwibmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsInBsYXllcnNMaXN0IiwiaW5kZXgiLCJwcm9maWxlIiwiaXNSaWdodCIsInNlY29uZHMiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm1vdmVJbmZvIiwiY3VycmVudFN5bWJvbCIsIm5leHRTeW1ib2wiLCJnYW1lQ2VsbHMiLCJjZWxscyIsImxpbmUiLCJpIiwiaiIsIndpbm5lclNlcXVlbmNlIiwib25DbGljayIsInR5cGUiLCJDRUxMX0NMSUNLIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});