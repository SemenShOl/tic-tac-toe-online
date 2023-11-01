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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/gameStateReducer */ \"./components/game/model/gameStateReducer.js\");\n/* harmony import */ var _model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../model/computeWinnerSymbol */ \"./components/game/model/computeWinnerSymbol.js\");\n/* harmony import */ var _model_getNextMove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/getNextMove */ \"./components/game/model/getNextMove.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player)=>player.symbol);\n    // const {cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol} =\n    //    useGameState(moveOrder);\n    const winnerSymbol = (0,_model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__.computeWinnerSymbol)(gameState);\n    const [gameState, dispatch] = useReducer(_model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.gameStateReducer, {\n        moveOrder\n    }, _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.initGameState);\n    const nextMove = (0,_model_getNextMove__WEBPACK_IMPORTED_MODULE_6__.getNextMove)(gameState.currentMove, moveOrder, gameState.playerWhoCannotMove);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameModal, {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.MoveInfo, {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: {\n                                        index: [\n                                            i,\n                                            j\n                                        ]\n                                    }\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 32,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"j+hnoi4PiTNI6Me8d/DNgt4wVKA=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFVUDtBQUNrQjtBQUN5RDtBQUMzQjtBQUNsQjtBQUMxQyxTQUFTZTtRQU9PTjs7SUFOcEIsTUFBTU8sWUFBWVAsK0NBQU9BLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxNQUFNO0lBQ3ZELGlGQUFpRjtJQUNqRiw4QkFBOEI7SUFDOUIsTUFBTUMsZUFBZVAsK0VBQW1CQSxDQUFDUTtJQUN6QyxNQUFNLENBQUNBLFdBQVdDLFNBQVMsR0FBR0MsV0FBV1gscUVBQWdCQSxFQUFFO1FBQUNJO0lBQVMsR0FBR0wsa0VBQWFBO0lBQ3JGLE1BQU1hLFdBQVdWLCtEQUFXQSxDQUFDTyxVQUFVSSxXQUFXLEVBQUVULFdBQVdLLFVBQVVLLG1CQUFtQjtJQUM1RixNQUFNQyxlQUFjbEIsZ0JBQUFBLCtDQUFPQSxDQUFDbUIsSUFBSSxDQUFDLENBQUNWLFNBQVdBLE9BQU9DLE1BQU0sS0FBS0MsMkJBQTNDWCxvQ0FBQUEsY0FBMERvQixLQUFLO0lBQ25GLHFCQUNHOzswQkFDRyw4REFBQ3JCLDhDQUFTQTtnQkFDUG1CLGFBQWFBO2dCQUNiRyxhQUFhckIsK0NBQU9BLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRYSxzQkFDL0IsOERBQUM5QiwrQ0FBVUE7d0JBQWlCK0IsU0FBU2Q7d0JBQVFlLFNBQVNGLFFBQVE7d0JBQUdHLFNBQVM7dUJBQXpEaEIsT0FBT2lCLEVBQUU7Ozs7OzswQkFHaEMsOERBQUNoQywrQ0FBVUE7Z0JBQ1JpQyx3QkFBVSw4REFBQ2xDLDZDQUFRQTtnQkFDbkJtQyx5QkFBVyw4REFBQ2hDLDhDQUFTQTtnQkFDckJpQyx3QkFBVSw4REFBQ2xDLDZDQUFRQTtvQkFBQ21DLGNBQWM7b0JBQUdDLFVBQVU7O2dCQUMvQ1YsYUFBYXJCLCtDQUFPQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsUUFBUWEsc0JBQy9CLDhEQUFDOUIsK0NBQVVBO3dCQUFpQitCLFNBQVNkO3dCQUFRZSxTQUFTRixRQUFRO3dCQUFHRyxTQUFTO3VCQUF6RGhCLE9BQU9pQixFQUFFO2dCQUU3Qk0sd0JBQVUsOERBQUNuQyw2Q0FBUUE7b0JBQUNvQyxlQUFlakI7b0JBQWFrQixZQUFZbkI7O2dCQUM1RG9CLFdBQVdDLE1BQU01QixHQUFHLENBQUMsQ0FBQzZCLE1BQU1DLElBQ3pCRCxLQUFLN0IsR0FBRyxDQUFDLENBQUNFLFFBQVE2QixrQkFDZiw4REFBQ3pDLHlDQUFJQTs0QkFDRndCLE9BQU87Z0NBQUNnQjtnQ0FBR0M7NkJBQUU7NEJBQ2JDLGdCQUFnQkE7NEJBRWhCOUIsUUFBUUE7NEJBQ1IrQixTQUFTO2dDQUNONUIsU0FBUztvQ0FDTjZCLE1BQU16Qyx1RUFBa0JBLENBQUMwQyxVQUFVO29DQUNuQ0MsU0FBUzt3Q0FBQ3RCLE9BQU87NENBQUNnQjs0Q0FBR0M7eUNBQUU7b0NBQUE7Z0NBQzFCOzRCQUNIOzJCQVBLRCxJQUFJQzs7Ozs7Ozs7QUFjOUI7R0EzQ2dCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWUvR2FtZS5qc3g/YTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgIFBsYXllckluZm8sXHJcbiAgIEJhY2tMaW5rLFxyXG4gICBHYW1lTGF5b3V0LFxyXG4gICBHYW1lSW5mbyxcclxuICAgR2FtZVRpdGxlLFxyXG4gICBNb3ZlSW5mbyxcclxuICAgQ2VsbCxcclxuICAgR2FtZU1vZGFsLFxyXG59IGZyb20gXCIuLi9VSUdhbWVcIjtcclxuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7R0FNRV9TVEFURV9BQ1RJT05TLCBpbml0R2FtZVN0YXRlLCBnYW1lU3RhdGVSZWR1Y2VyfSBmcm9tIFwiLi4vbW9kZWwvZ2FtZVN0YXRlUmVkdWNlclwiO1xyXG5pbXBvcnQge2NvbXB1dGVXaW5uZXJTeW1ib2x9IGZyb20gXCIuLy4uL21vZGVsL2NvbXB1dGVXaW5uZXJTeW1ib2xcIjtcclxuaW1wb3J0IHtnZXROZXh0TW92ZX0gZnJvbSBcIi4uL21vZGVsL2dldE5leHRNb3ZlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICBjb25zdCBtb3ZlT3JkZXIgPSBQTEFZRVJTLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuc3ltYm9sKTtcclxuICAgLy8gY29uc3Qge2NlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGRpc3BhdGNoLCB3aW5uZXJTZXF1ZW5jZSwgd2lubmVyU3ltYm9sfSA9XHJcbiAgIC8vICAgIHVzZUdhbWVTdGF0ZShtb3ZlT3JkZXIpO1xyXG4gICBjb25zdCB3aW5uZXJTeW1ib2wgPSBjb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSk7XHJcbiAgIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge21vdmVPcmRlcn0sIGluaXRHYW1lU3RhdGUpO1xyXG4gICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBnYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSk7XHJcbiAgIGNvbnN0IHdpbm5lckxvZ2luID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk/LmxvZ2luO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8R2FtZU1vZGFsXHJcbiAgICAgICAgICAgIHdpbm5lckxvZ2luPXt3aW5uZXJMb2dpbn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8R2FtZUxheW91dFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgICAgICBnYW1lVGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gcGxheWVyc0NvdW50PXsyfSB0aW1lTW9kZT17MX0gLz59XHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcHJvZmlsZT17cGxheWVyfSBpc1JpZ2h0PXtpbmRleCAlIDJ9IHNlY29uZHM9ezYwfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgbW92ZUluZm89ezxNb3ZlSW5mbyBjdXJyZW50U3ltYm9sPXtjdXJyZW50TW92ZX0gbmV4dFN5bWJvbD17bmV4dE1vdmV9IC8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgbGluZS5tYXAoKHN5bWJvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICBpbmRleD17W2ksIGpdfVxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtpbmRleDogW2ksIGpdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbGF5ZXJJbmZvIiwiQmFja0xpbmsiLCJHYW1lTGF5b3V0IiwiR2FtZUluZm8iLCJHYW1lVGl0bGUiLCJNb3ZlSW5mbyIsIkNlbGwiLCJHYW1lTW9kYWwiLCJQTEFZRVJTIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiaW5pdEdhbWVTdGF0ZSIsImdhbWVTdGF0ZVJlZHVjZXIiLCJjb21wdXRlV2lubmVyU3ltYm9sIiwiZ2V0TmV4dE1vdmUiLCJHYW1lIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwic3ltYm9sIiwid2lubmVyU3ltYm9sIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwibmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsInBsYXllcnNMaXN0IiwiaW5kZXgiLCJwcm9maWxlIiwiaXNSaWdodCIsInNlY29uZHMiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm1vdmVJbmZvIiwiY3VycmVudFN5bWJvbCIsIm5leHRTeW1ib2wiLCJnYW1lQ2VsbHMiLCJjZWxscyIsImxpbmUiLCJpIiwiaiIsIndpbm5lclNlcXVlbmNlIiwib25DbGljayIsInR5cGUiLCJDRUxMX0NMSUNLIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});