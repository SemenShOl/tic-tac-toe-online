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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame_GameLayout_GameLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame/GameLayout/GameLayout */ \"./components/game/UIGame/GameLayout/GameLayout.jsx\");\n/* harmony import */ var _UIGame_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../UIGame/GameInfo/GameInfo */ \"./components/game/UIGame/GameInfo/GameInfo.jsx\");\n/* harmony import */ var _UIGame_GameTitle_GameTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../UIGame/GameTitle/GameTitle */ \"./components/game/UIGame/GameTitle/GameTitle.jsx\");\n/* harmony import */ var _UIGame_BackLink_BackLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../UIGame/BackLink/BackLink */ \"./components/game/UIGame/BackLink/BackLink.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _UIGame_PlayerInfo_PlayerInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UIGame/PlayerInfo/PlayerInfo */ \"./components/game/UIGame/PlayerInfo/PlayerInfo.jsx\");\n/* harmony import */ var _UIGame_MoveInfo_MoveInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../UIGame/MoveInfo/MoveInfo */ \"./components/game/UIGame/MoveInfo/MoveInfo.jsx\");\n/* harmony import */ var _model_useGameState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/useGameState */ \"./components/game/model/useGameState.js\");\n/* harmony import */ var _UIGame_Cell_Cell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UIGame/Cell/Cell */ \"./components/game/UIGame/Cell/Cell.jsx\");\n/* harmony import */ var _UIGame_GameModal_GameModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UIGame/GameModal/GameModal */ \"./components/game/UIGame/GameModal/GameModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_6__.PLAYERS.map((player)=>player.symbol);\n    const { cells, currentMove, nextMove, dispatch, winnerSequence, winnerSymbol } = (0,_model_useGameState__WEBPACK_IMPORTED_MODULE_9__.useGameState)(moveOrder);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_6__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_GameModal_GameModal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_6__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_PlayerInfo_PlayerInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 19,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_GameLayout_GameLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_BackLink_BackLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_GameTitle_GameTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_6__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_PlayerInfo_PlayerInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        profile: player,\n                        isRight: index % 2,\n                        seconds: 60\n                    }, player.id, false, void 0, void 0)),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_MoveInfo_MoveInfo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    currentSymbol: currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame_Cell_Cell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            index: [\n                                i,\n                                j\n                            ],\n                            winnerSequence: winnerSequence,\n                            symbol: symbol,\n                            onClick: ()=>{\n                                dispatch({\n                                    type: _model_useGameState__WEBPACK_IMPORTED_MODULE_9__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                    payload: [\n                                        i,\n                                        j\n                                    ]\n                                });\n                            }\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"OccUckyNcifQcYyWi4AhC2jhdkA=\", false, function() {\n    return [\n        _model_useGameState__WEBPACK_IMPORTED_MODULE_9__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMrQjtBQUNKO0FBQ0c7QUFDSDtBQUNoQjtBQUNvQjtBQUNKO0FBQ2tCO0FBQ2hDO0FBQ2U7QUFDL0MsU0FBU1k7UUFJT1A7O0lBSHBCLE1BQU1RLFlBQVlSLCtDQUFPQSxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsTUFBTTtJQUN2RCxNQUFNLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUMsR0FDekViLGlFQUFZQSxDQUFDSTtJQUNoQixNQUFNVSxlQUFjbEIsZ0JBQUFBLCtDQUFPQSxDQUFDbUIsSUFBSSxDQUFDLENBQUNULFNBQVdBLE9BQU9DLE1BQU0sS0FBS00sMkJBQTNDakIsb0NBQUFBLGNBQTBEb0IsS0FBSztJQUNuRixxQkFDRzs7MEJBQ0csOERBQUNkLG9FQUFTQTtnQkFDUFksYUFBYUE7Z0JBQ2JHLGFBQWFyQiwrQ0FBT0EsQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLFFBQVFZLHNCQUMvQiw4REFBQ3JCLHFFQUFVQTt3QkFBaUJzQixTQUFTYjt3QkFBUWMsU0FBU0YsUUFBUTt3QkFBR0csU0FBUzt1QkFBekRmLE9BQU9nQixFQUFFOzs7Ozs7MEJBR2hDLDhEQUFDOUIscUVBQVVBO2dCQUNSK0Isd0JBQVUsOERBQUM1QixpRUFBUUE7Z0JBQ25CNkIseUJBQVcsOERBQUM5QixtRUFBU0E7Z0JBQ3JCK0Isd0JBQVUsOERBQUNoQyxpRUFBUUE7b0JBQUNpQyxjQUFjO29CQUFHQyxVQUFVOztnQkFDL0NWLGFBQWFyQiwrQ0FBT0EsQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLFFBQVFZLHNCQUMvQiw4REFBQ3JCLHFFQUFVQTt3QkFBaUJzQixTQUFTYjt3QkFBUWMsU0FBU0YsUUFBUTt3QkFBR0csU0FBUzt1QkFBekRmLE9BQU9nQixFQUFFO2dCQUU3Qk0sd0JBQVUsOERBQUM5QixpRUFBUUE7b0JBQUMrQixlQUFlcEI7b0JBQWFxQixZQUFZcEI7O2dCQUM1RHFCLFdBQVd2QixNQUFNSCxHQUFHLENBQUMsQ0FBQzJCLE1BQU1DLElBQ3pCRCxLQUFLM0IsR0FBRyxDQUFDLENBQUNFLFFBQVEyQixrQkFDZiw4REFBQ2pDLDBEQUFJQTs0QkFDRmlCLE9BQU87Z0NBQUNlO2dDQUFHQzs2QkFBRTs0QkFDYnRCLGdCQUFnQkE7NEJBRWhCTCxRQUFRQTs0QkFDUjRCLFNBQVM7Z0NBQ054QixTQUFTO29DQUFDeUIsTUFBTXJDLG1FQUFrQkEsQ0FBQ3NDLFVBQVU7b0NBQUVDLFNBQVM7d0NBQUNMO3dDQUFHQztxQ0FBRTtnQ0FBQTs0QkFDakU7MkJBSktELElBQUlDOzs7Ozs7OztBQVc5QjtHQXJDZ0IvQjs7UUFHVkgsNkRBQVlBOzs7S0FIRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWUvR2FtZS5qc3g/YTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lTGF5b3V0IGZyb20gXCIuLi9VSUdhbWUvR2FtZUxheW91dC9HYW1lTGF5b3V0XCI7XHJcbmltcG9ydCBHYW1lSW5mbyBmcm9tIFwiLi8uLi9VSUdhbWUvR2FtZUluZm8vR2FtZUluZm9cIjtcclxuaW1wb3J0IEdhbWVUaXRsZSBmcm9tIFwiLi8uLi9VSUdhbWUvR2FtZVRpdGxlL0dhbWVUaXRsZVwiO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSBcIi4vLi4vVUlHYW1lL0JhY2tMaW5rL0JhY2tMaW5rXCI7XHJcbmltcG9ydCB7UExBWUVSU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgTW92ZUluZm8gZnJvbSBcIi4vLi4vVUlHYW1lL01vdmVJbmZvL01vdmVJbmZvXCI7XHJcbmltcG9ydCB7R0FNRV9TVEFURV9BQ1RJT05TLCB1c2VHYW1lU3RhdGV9IGZyb20gXCIuLi9tb2RlbC91c2VHYW1lU3RhdGVcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4uL1VJR2FtZS9DZWxsL0NlbGxcIjtcclxuaW1wb3J0IEdhbWVNb2RhbCBmcm9tIFwiLi4vVUlHYW1lL0dhbWVNb2RhbC9HYW1lTW9kYWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgIGNvbnN0IG1vdmVPcmRlciA9IFBMQVlFUlMubWFwKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wpO1xyXG4gICBjb25zdCB7Y2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgZGlzcGF0Y2gsIHdpbm5lclNlcXVlbmNlLCB3aW5uZXJTeW1ib2x9ID1cclxuICAgICAgdXNlR2FtZVN0YXRlKG1vdmVPcmRlcik7XHJcbiAgIGNvbnN0IHdpbm5lckxvZ2luID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk/LmxvZ2luO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8R2FtZU1vZGFsXHJcbiAgICAgICAgICAgIHdpbm5lckxvZ2luPXt3aW5uZXJMb2dpbn1cclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwcm9maWxlPXtwbGF5ZXJ9IGlzUmlnaHQ9e2luZGV4ICUgMn0gc2Vjb25kcz17NjB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8R2FtZUxheW91dFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgICAgICBnYW1lVGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gcGxheWVyc0NvdW50PXsyfSB0aW1lTW9kZT17MX0gLz59XHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcHJvZmlsZT17cGxheWVyfSBpc1JpZ2h0PXtpbmRleCAlIDJ9IHNlY29uZHM9ezYwfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgbW92ZUluZm89ezxNb3ZlSW5mbyBjdXJyZW50U3ltYm9sPXtjdXJyZW50TW92ZX0gbmV4dFN5bWJvbD17bmV4dE1vdmV9IC8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgbGluZS5tYXAoKHN5bWJvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICBpbmRleD17W2ksIGpdfVxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSywgcGF5bG9hZDogW2ksIGpdfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJHYW1lTGF5b3V0IiwiR2FtZUluZm8iLCJHYW1lVGl0bGUiLCJCYWNrTGluayIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiTW92ZUluZm8iLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJ1c2VHYW1lU3RhdGUiLCJDZWxsIiwiR2FtZU1vZGFsIiwiR2FtZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsInN5bWJvbCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImRpc3BhdGNoIiwid2lubmVyU2VxdWVuY2UiLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsInBsYXllcnNMaXN0IiwiaW5kZXgiLCJwcm9maWxlIiwiaXNSaWdodCIsInNlY29uZHMiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm1vdmVJbmZvIiwiY3VycmVudFN5bWJvbCIsIm5leHRTeW1ib2wiLCJnYW1lQ2VsbHMiLCJsaW5lIiwiaSIsImoiLCJvbkNsaWNrIiwidHlwZSIsIkNFTExfQ0xJQ0siLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});