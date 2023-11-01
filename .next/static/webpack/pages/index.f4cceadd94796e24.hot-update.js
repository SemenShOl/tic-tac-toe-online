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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _model_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/useGameState */ \"./components/game/model/useGameState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player)=>player.symbol);\n    const { cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol } = (0,_model_useGameState__WEBPACK_IMPORTED_MODULE_4__.useGameState)(moveOrder);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.GameModal, {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 21,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.MoveInfo, {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_3__.Cell, {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_useGameState__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: {\n                                        index: [\n                                            i,\n                                            j\n                                        ]\n                                    }\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 27,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"OccUckyNcifQcYyWi4AhC2jhdkA=\", false, function() {\n    return [\n        _model_useGameState__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1c7QUFVbEI7QUFDb0Q7QUFDaEUsU0FBU1k7UUFJT1g7O0lBSHBCLE1BQU1ZLFlBQVlaLCtDQUFPQSxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsTUFBTTtJQUN2RCxNQUFNLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUMsR0FDekVYLGlFQUFZQSxDQUFDRTtJQUNoQixNQUFNVSxlQUFjdEIsZ0JBQUFBLCtDQUFPQSxDQUFDdUIsSUFBSSxDQUFDLENBQUNULFNBQVdBLE9BQU9DLE1BQU0sS0FBS00sMkJBQTNDckIsb0NBQUFBLGNBQTBEd0IsS0FBSztJQUNuRixxQkFDRzs7MEJBQ0csOERBQUNoQiw4Q0FBU0E7Z0JBQ1BjLGFBQWFBO2dCQUNiRyxhQUFhekIsK0NBQU9BLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxRQUFRWSxzQkFDL0IsOERBQUN6QiwrQ0FBVUE7d0JBQWlCMEIsU0FBU2I7d0JBQVFjLFNBQVNGLFFBQVE7d0JBQUdHLFNBQVM7dUJBQXpEZixPQUFPZ0IsRUFBRTs7Ozs7OzBCQUdoQyw4REFBQzNCLCtDQUFVQTtnQkFDUjRCLHdCQUFVLDhEQUFDN0IsNkNBQVFBO2dCQUNuQjhCLHlCQUFXLDhEQUFDM0IsOENBQVNBO2dCQUNyQjRCLHdCQUFVLDhEQUFDN0IsNkNBQVFBO29CQUFDOEIsY0FBYztvQkFBR0MsVUFBVTs7Z0JBQy9DVixhQUFhekIsK0NBQU9BLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxRQUFRWSxzQkFDL0IsOERBQUN6QiwrQ0FBVUE7d0JBQWlCMEIsU0FBU2I7d0JBQVFjLFNBQVNGLFFBQVE7d0JBQUdHLFNBQVM7dUJBQXpEZixPQUFPZ0IsRUFBRTtnQkFFN0JNLHdCQUFVLDhEQUFDOUIsNkNBQVFBO29CQUFDK0IsZUFBZXBCO29CQUFhcUIsWUFBWXBCOztnQkFDNURxQixXQUFXdkIsTUFBTUgsR0FBRyxDQUFDLENBQUMyQixNQUFNQyxJQUN6QkQsS0FBSzNCLEdBQUcsQ0FBQyxDQUFDRSxRQUFRMkIsa0JBQ2YsOERBQUNuQyx5Q0FBSUE7NEJBQ0ZtQixPQUFPO2dDQUFDZTtnQ0FBR0M7NkJBQUU7NEJBQ2J0QixnQkFBZ0JBOzRCQUVoQkwsUUFBUUE7NEJBQ1I0QixTQUFTO2dDQUNOeEIsU0FBUztvQ0FDTnlCLE1BQU1uQyxtRUFBa0JBLENBQUNvQyxVQUFVO29DQUNuQ0MsU0FBUzt3Q0FBQ3BCLE9BQU87NENBQUNlOzRDQUFHQzt5Q0FBRTtvQ0FBQTtnQ0FDMUI7NEJBQ0g7MkJBUEtELElBQUlDOzs7Ozs7OztBQWM5QjtHQXhDZ0IvQjs7UUFHVkQsNkRBQVlBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWUvR2FtZS5qc3g/YTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UExBWUVSU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICBQbGF5ZXJJbmZvLFxyXG4gICBCYWNrTGluayxcclxuICAgR2FtZUxheW91dCxcclxuICAgR2FtZUluZm8sXHJcbiAgIEdhbWVUaXRsZSxcclxuICAgTW92ZUluZm8sXHJcbiAgIENlbGwsXHJcbiAgIEdhbWVNb2RhbCxcclxufSBmcm9tIFwiLi4vVUlHYW1lXCI7XHJcbmltcG9ydCB7R0FNRV9TVEFURV9BQ1RJT05TLCB1c2VHYW1lU3RhdGV9IGZyb20gXCIuLi9tb2RlbC91c2VHYW1lU3RhdGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgIGNvbnN0IG1vdmVPcmRlciA9IFBMQVlFUlMubWFwKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wpO1xyXG4gICBjb25zdCB7Y2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgZGlzcGF0Y2gsIHdpbm5lclNlcXVlbmNlLCB3aW5uZXJTeW1ib2x9ID1cclxuICAgICAgdXNlR2FtZVN0YXRlKG1vdmVPcmRlcik7XHJcbiAgIGNvbnN0IHdpbm5lckxvZ2luID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk/LmxvZ2luO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8R2FtZU1vZGFsXHJcbiAgICAgICAgICAgIHdpbm5lckxvZ2luPXt3aW5uZXJMb2dpbn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8R2FtZUxheW91dFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgICAgICBnYW1lVGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gcGxheWVyc0NvdW50PXsyfSB0aW1lTW9kZT17MX0gLz59XHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcHJvZmlsZT17cGxheWVyfSBpc1JpZ2h0PXtpbmRleCAlIDJ9IHNlY29uZHM9ezYwfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgbW92ZUluZm89ezxNb3ZlSW5mbyBjdXJyZW50U3ltYm9sPXtjdXJyZW50TW92ZX0gbmV4dFN5bWJvbD17bmV4dE1vdmV9IC8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgbGluZS5tYXAoKHN5bWJvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICBpbmRleD17W2ksIGpdfVxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtpbmRleDogW2ksIGpdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQTEFZRVJTIiwiUGxheWVySW5mbyIsIkJhY2tMaW5rIiwiR2FtZUxheW91dCIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwiTW92ZUluZm8iLCJDZWxsIiwiR2FtZU1vZGFsIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwidXNlR2FtZVN0YXRlIiwiR2FtZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsInN5bWJvbCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImRpc3BhdGNoIiwid2lubmVyU2VxdWVuY2UiLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsInBsYXllcnNMaXN0IiwiaW5kZXgiLCJwcm9maWxlIiwiaXNSaWdodCIsInNlY29uZHMiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm1vdmVJbmZvIiwiY3VycmVudFN5bWJvbCIsIm5leHRTeW1ib2wiLCJnYW1lQ2VsbHMiLCJsaW5lIiwiaSIsImoiLCJvbkNsaWNrIiwidHlwZSIsIkNFTExfQ0xJQ0siLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});