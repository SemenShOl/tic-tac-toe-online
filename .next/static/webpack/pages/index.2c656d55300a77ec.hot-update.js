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

/***/ "./components/game/model/useGameState.js":
/*!***********************************************!*\
  !*** ./components/game/model/useGameState.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _computingWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computingWinner */ \"./components/game/model/computingWinner.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell_click\"\n};\nfunction getNextMove(currentMove, moveOrder1, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder1.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const index = action.payload.index;\n                const newCells = state.cells.map((line, i)=>line.map((cell, j)=>state.cells[i][j]));\n                newCells[index[0]][index[1]] = state.currentMove;\n                if (state.first.cells[index[0]][index[1]]) return state;\n                return {\n                    ...state,\n                    currentMove: getNextMove(state.currentMove, moveOrder, state.playerWhoCannotMove),\n                    cells: newCells,\n                    winnerSequence: (0,_computingWinner__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nconst initGameState = (param)=>{\n    let { moveOrder: moveOrder1 } = param;\n    return {\n        cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n        currentMove: moveOrder1[0],\n        winnerSequence: null,\n        playerWhoCannotMove: []\n    };\n};\nfunction useGameState(moveOrder1) {\n    var _winnerSequence, _winnerSequence1;\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {\n        moveOrder: moveOrder1\n    }, initGameState);\n    // const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] =\n    //    useState(() => ({\n    //       cells: Array(19)\n    //          .fill(null)\n    //          .map(() => Array(19).fill(null)),\n    //       currentMove: moveOrder[0],\n    //       winnerSequence: null,\n    //       playerWhoCannotMove: [],\n    //    }))\n    const winnerSymbol = gameState.winnerSequence ? cells[(_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence[0][0]][(_winnerSequence1 = winnerSequence) === null || _winnerSequence1 === void 0 ? void 0 : _winnerSequence1[0][1]] : undefined;\n    const nextMove = getNextMove(gameState.currentMove, moveOrder1, gameState.playerWhoCannotMove);\n    // const handleCellClick = index => {\n    //    const newCells = cells.map((line, i) => line.map((cell, j) => cells[i][j]))\n    //    newCells[index[0]][index[1]] = currentMove\n    //    setGameState(lastGameState => {\n    //       if (lastGameState.cells[index[0]][index[1]]) return lastGameState\n    //       return {\n    //          ...lastGameState,\n    //          currentMove: getNextMove(\n    //             lastGameState.currentMove,\n    //             moveOrder,\n    //             playerWhoCannotMove,\n    //          ),\n    //          cells: newCells,\n    //          winnerSequence: computingWinner(newCells, index, 3),\n    //       }\n    //    })\n    // }\n    // const handlePlayerTimeOver = symbol => {\n    //    const newPlayersWhoCannotMove = [...playerWhoCannotMove, symbol]\n    //    if (newPlayersWhoCannotMove.length === 3) {\n    //       setGameState(lastGameState => ({\n    //          ...lastGameState,\n    //          winnerSymbol: moveOrder.find(\n    //             symbol => !newPlayersWhoCannotMove.includes(symbol),\n    //          ),\n    //       }))\n    //    }\n    //    setGameState(lastGameState => ({\n    //       ...lastGameState,\n    //       currentMove: getNextMove(\n    //          lastGameState.currentMove,\n    //          moveOrder,\n    //          lastGameState.playerWhoCannotMove,\n    //       ),\n    //       playerWhoCannotMove: [...lastGameState.playerWhoCannotMove, symbol],\n    //    }))\n    // }\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence: gameState.winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n}\n_s(useGameState, \"j+hnoi4PiTNI6Me8d/DNgt4wVKA=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvbW9kZWwvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDTztBQUNSO0FBRW5DLE1BQU1JLHFCQUFxQjtJQUMvQkMsWUFBWTtBQUNmLEVBQUU7QUFFRixTQUFTQyxZQUFZQyxXQUFXLEVBQUVDLFVBQVMsRUFBRUMsbUJBQW1CO0lBQzdELE1BQU1DLDBCQUEwQkYsV0FBVUcsTUFBTSxDQUM3QyxDQUFDQyxTQUFXLENBQUNILG9CQUFvQkksUUFBUSxDQUFDRDtRQUcxQ0Y7SUFESCxPQUNHQSxDQUFBQSw0QkFBQUEsdUJBQXVCLENBQUNBLHdCQUF3QkksT0FBTyxDQUFDUCxlQUFlLEVBQUUsY0FBekVHLHVDQUFBQSw0QkFDQUEsdUJBQXVCLENBQUMsRUFBRTtBQUVoQztBQUVBLE1BQU1LLG1CQUFtQixDQUFDQyxPQUFPQztJQUM5QixPQUFRQSxPQUFPQyxJQUFJO1FBQ2hCLEtBQUtkLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNqQyxNQUFNYyxRQUFRRixPQUFPRyxPQUFPLENBQUNELEtBQUs7Z0JBQ2xDLE1BQU1FLFdBQVdMLE1BQU1NLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU1ELEtBQUtELEdBQUcsQ0FBQyxDQUFDRyxNQUFNQyxJQUFNWCxNQUFNTSxLQUFLLENBQUNHLEVBQUUsQ0FBQ0UsRUFBRTtnQkFDckZOLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUdILE1BQU1ULFdBQVc7Z0JBQ2hELElBQUlTLE1BQU1ZLEtBQUssQ0FBQ04sS0FBSyxDQUFDSCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPSDtnQkFDbEQsT0FBTztvQkFDSixHQUFHQSxLQUFLO29CQUNSVCxhQUFhRCxZQUFZVSxNQUFNVCxXQUFXLEVBQUVDLFdBQVdRLE1BQU1QLG1CQUFtQjtvQkFDaEZhLE9BQU9EO29CQUNQUSxnQkFBZ0IzQixpRUFBZUEsQ0FBQ21CLFVBQVVGLE9BQU87Z0JBQ3BEO1lBQ0g7UUFDQTtZQUFTO2dCQUNOLE9BQU9IO1lBQ1Y7SUFDSDtBQUNIO0FBRUEsTUFBTWMsZ0JBQWdCO1FBQUMsRUFBQ3RCLFdBQUFBLFVBQVMsRUFBQztXQUFNO1FBQ3JDYyxPQUFPUyxNQUFNLElBQ1RDLElBQUksQ0FBQyxNQUNMVCxHQUFHLENBQUMsSUFBTVEsTUFBTSxJQUFJQyxJQUFJLENBQUM7UUFDN0J6QixhQUFhQyxVQUFTLENBQUMsRUFBRTtRQUN6QnFCLGdCQUFnQjtRQUNoQnBCLHFCQUFxQixFQUFFO0lBQzFCO0FBQUE7QUFDTyxTQUFTd0IsYUFBYXpCLFVBQVM7UUFZeEJxQixpQkFBd0JBOztJQVhuQyxNQUFNLENBQUNLLFdBQVdDLFNBQVMsR0FBR25DLGlEQUFVQSxDQUFDZSxrQkFBa0I7UUFBQ1AsV0FBQUE7SUFBUyxHQUFHc0I7SUFDeEUsc0ZBQXNGO0lBQ3RGLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsTUFBTU0sZUFBZUYsVUFBVUwsY0FBYyxHQUN4Q1AsS0FBSyxFQUFDTyxrQkFBQUEsNEJBQUFBLHNDQUFBQSxlQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQ0EsbUJBQUFBLDRCQUFBQSx1Q0FBQUEsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUNyRFE7SUFDTCxNQUFNQyxXQUFXaEMsWUFBWTRCLFVBQVUzQixXQUFXLEVBQUVDLFlBQVcwQixVQUFVekIsbUJBQW1CO0lBRTVGLHFDQUFxQztJQUNyQyxpRkFBaUY7SUFDakYsZ0RBQWdEO0lBQ2hELHFDQUFxQztJQUNyQywwRUFBMEU7SUFDMUUsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixnRUFBZ0U7SUFDaEUsVUFBVTtJQUNWLFFBQVE7SUFDUixJQUFJO0lBRUosMkNBQTJDO0lBQzNDLHNFQUFzRTtJQUN0RSxpREFBaUQ7SUFDakQseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsbUVBQW1FO0lBQ25FLGNBQWM7SUFDZCxZQUFZO0lBQ1osT0FBTztJQUNQLHNDQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLFdBQVc7SUFDWCw2RUFBNkU7SUFDN0UsU0FBUztJQUNULElBQUk7SUFFSixPQUFPO1FBQ0phLE9BQU9ZLFVBQVVaLEtBQUs7UUFDdEJmLGFBQWEyQixVQUFVM0IsV0FBVztRQUNsQytCO1FBQ0FULGdCQUFnQkssVUFBVUwsY0FBYztRQUN4Q087UUFDQUQ7SUFDSDtBQUNIO0dBL0RnQkY7QUFpRWhCLFNBQVNNLGNBQWNDLFVBQVUsRUFBRUMsV0FBVztJQUMzQyxPQUFPRCxXQUFXRSxRQUFRLE9BQU9ELFlBQVlDLFFBQVE7QUFDeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL21vZGVsL3VzZUdhbWVTdGF0ZS5qcz83YjkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVkdWNlciwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NvbXB1dGluZ1dpbm5lcn0gZnJvbSBcIi4vY29tcHV0aW5nV2lubmVyXCI7XHJcbmltcG9ydCB7R0FNRV9TWU1CT0xTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xyXG4gICBDRUxMX0NMSUNLOiBcImNlbGxfY2xpY2tcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIsIHBsYXllcldob0Nhbm5vdE1vdmUpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyTW92YWJsZVBsYXllcnMgPSBtb3ZlT3JkZXIuZmlsdGVyKFxyXG4gICAgICAoc3ltYm9sKSA9PiAhcGxheWVyV2hvQ2Fubm90TW92ZS5pbmNsdWRlcyhzeW1ib2wpLFxyXG4gICApO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1ttb3ZlT3JkZXJNb3ZhYmxlUGxheWVycy5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFdID8/XHJcbiAgICAgIG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzWzBdXHJcbiAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0s6IHtcclxuICAgICAgICAgY29uc3QgaW5kZXggPSBhY3Rpb24ucGF5bG9hZC5pbmRleDtcclxuICAgICAgICAgY29uc3QgbmV3Q2VsbHMgPSBzdGF0ZS5jZWxscy5tYXAoKGxpbmUsIGkpID0+IGxpbmUubWFwKChjZWxsLCBqKSA9PiBzdGF0ZS5jZWxsc1tpXVtqXSkpO1xyXG4gICAgICAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gc3RhdGUuY3VycmVudE1vdmU7XHJcbiAgICAgICAgIGlmIChzdGF0ZS5maXJzdC5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoc3RhdGUuY3VycmVudE1vdmUsIG1vdmVPcmRlciwgc3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSksXHJcbiAgICAgICAgICAgIGNlbGxzOiBuZXdDZWxscyxcclxuICAgICAgICAgICAgd2lubmVyU2VxdWVuY2U6IGNvbXB1dGluZ1dpbm5lcihuZXdDZWxscywgaW5kZXgsIDMpLFxyXG4gICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcbiAgIH1cclxufTtcclxuXHJcbmNvbnN0IGluaXRHYW1lU3RhdGUgPSAoe21vdmVPcmRlcn0pID0+ICh7XHJcbiAgIGNlbGxzOiBBcnJheSgxOSlcclxuICAgICAgLmZpbGwobnVsbClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSgxOSkuZmlsbChudWxsKSksXHJcbiAgIGN1cnJlbnRNb3ZlOiBtb3ZlT3JkZXJbMF0sXHJcbiAgIHdpbm5lclNlcXVlbmNlOiBudWxsLFxyXG4gICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbXSxcclxufSk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKSB7XHJcbiAgIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge21vdmVPcmRlcn0sIGluaXRHYW1lU3RhdGUpO1xyXG4gICAvLyBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHdpbm5lclNlcXVlbmNlLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPVxyXG4gICAvLyAgICB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAvLyAgICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgIC8vICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgIC8vICAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAvLyAgICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICAvLyAgICAgICB3aW5uZXJTZXF1ZW5jZTogbnVsbCxcclxuICAgLy8gICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogW10sXHJcbiAgIC8vICAgIH0pKVxyXG4gICBjb25zdCB3aW5uZXJTeW1ib2wgPSBnYW1lU3RhdGUud2lubmVyU2VxdWVuY2VcclxuICAgICAgPyBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdWzBdXVt3aW5uZXJTZXF1ZW5jZT8uWzBdWzFdXVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuICAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUuY3VycmVudE1vdmUsIG1vdmVPcmRlciwgZ2FtZVN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUpO1xyXG5cclxuICAgLy8gY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG4gICAvLyAgICBjb25zdCBuZXdDZWxscyA9IGNlbGxzLm1hcCgobGluZSwgaSkgPT4gbGluZS5tYXAoKGNlbGwsIGopID0+IGNlbGxzW2ldW2pdKSlcclxuICAgLy8gICAgbmV3Q2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSA9IGN1cnJlbnRNb3ZlXHJcbiAgIC8vICAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+IHtcclxuICAgLy8gICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSkgcmV0dXJuIGxhc3RHYW1lU3RhdGVcclxuICAgLy8gICAgICAgcmV0dXJuIHtcclxuICAgLy8gICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgLy8gICAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG4gICAvLyAgICAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG4gICAvLyAgICAgICAgICAgICBtb3ZlT3JkZXIsXHJcbiAgIC8vICAgICAgICAgICAgIHBsYXllcldob0Nhbm5vdE1vdmUsXHJcbiAgIC8vICAgICAgICAgICksXHJcbiAgIC8vICAgICAgICAgIGNlbGxzOiBuZXdDZWxscyxcclxuICAgLy8gICAgICAgICAgd2lubmVyU2VxdWVuY2U6IGNvbXB1dGluZ1dpbm5lcihuZXdDZWxscywgaW5kZXgsIDMpLFxyXG4gICAvLyAgICAgICB9XHJcbiAgIC8vICAgIH0pXHJcbiAgIC8vIH1cclxuXHJcbiAgIC8vIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gc3ltYm9sID0+IHtcclxuICAgLy8gICAgY29uc3QgbmV3UGxheWVyc1dob0Nhbm5vdE1vdmUgPSBbLi4ucGxheWVyV2hvQ2Fubm90TW92ZSwgc3ltYm9sXVxyXG4gICAvLyAgICBpZiAobmV3UGxheWVyc1dob0Nhbm5vdE1vdmUubGVuZ3RoID09PSAzKSB7XHJcbiAgIC8vICAgICAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcbiAgIC8vICAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgIC8vICAgICAgICAgIHdpbm5lclN5bWJvbDogbW92ZU9yZGVyLmZpbmQoXHJcbiAgIC8vICAgICAgICAgICAgIHN5bWJvbCA9PiAhbmV3UGxheWVyc1dob0Nhbm5vdE1vdmUuaW5jbHVkZXMoc3ltYm9sKSxcclxuICAgLy8gICAgICAgICAgKSxcclxuICAgLy8gICAgICAgfSkpXHJcbiAgIC8vICAgIH1cclxuICAgLy8gICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuICAgLy8gICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgLy8gICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG4gICAvLyAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG4gICAvLyAgICAgICAgICBtb3ZlT3JkZXIsXHJcbiAgIC8vICAgICAgICAgIGxhc3RHYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgLy8gICAgICAgKSxcclxuICAgLy8gICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSwgc3ltYm9sXSxcclxuICAgLy8gICAgfSkpXHJcbiAgIC8vIH1cclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGNlbGxzOiBnYW1lU3RhdGUuY2VsbHMsXHJcbiAgICAgIGN1cnJlbnRNb3ZlOiBnYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgICAgIG5leHRNb3ZlLFxyXG4gICAgICB3aW5uZXJTZXF1ZW5jZTogZ2FtZVN0YXRlLndpbm5lclNlcXVlbmNlLFxyXG4gICAgICB3aW5uZXJTeW1ib2wsXHJcbiAgICAgIGRpc3BhdGNoLFxyXG4gICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5c0VxdWFsKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSB7XHJcbiAgIHJldHVybiBmaXJzdEFycmF5LnRvU3RyaW5nKCkgPT09IHNlY29uZEFycmF5LnRvU3RyaW5nKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsImNvbXB1dGluZ1dpbm5lciIsIkdBTUVfU1lNQk9MUyIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibW92ZU9yZGVyIiwicGxheWVyV2hvQ2Fubm90TW92ZSIsIm1vdmVPcmRlck1vdmFibGVQbGF5ZXJzIiwiZmlsdGVyIiwic3ltYm9sIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluZGV4IiwicGF5bG9hZCIsIm5ld0NlbGxzIiwiY2VsbHMiLCJtYXAiLCJsaW5lIiwiaSIsImNlbGwiLCJqIiwiZmlyc3QiLCJ3aW5uZXJTZXF1ZW5jZSIsImluaXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VHYW1lU3RhdGUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsIndpbm5lclN5bWJvbCIsInVuZGVmaW5lZCIsIm5leHRNb3ZlIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/model/useGameState.js\n"));

/***/ })

});