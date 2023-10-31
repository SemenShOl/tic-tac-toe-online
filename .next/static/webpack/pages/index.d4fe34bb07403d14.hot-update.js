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

/***/ "./components/game/computingWinner.js":
/*!********************************************!*\
  !*** ./components/game/computingWinner.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    сells[0][2] = \"x\";\n    cells[1][2] = \"x\";\n    cells[2][2] = \"x\";\n    const rows = computeRows(cells, movedCellIndex, seqSize);\n    for(let i = 0; i < 4; i++){\n        if (areCellsInRowEqual(rows[i], cells, seqSize)) return rows[i];\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells, seqSize)=>{\n    for(let i = 0; i < row.length; i++){\n        let isLineBreak = false;\n        for(let j = 1; j < seqSize; j++){\n            console.log(row[i][j]);\n            console.log(cells[row[i][j]]);\n            debugger;\n            if (cells[row[i][j]] !== cells[row[i][j - 1]]) {\n                isLineBreak = true;\n                break;\n            }\n        }\n        if (!isLineBreak) return true;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(movedCellIndex, seqSize, line);\n    rows[1] = vertical(movedCellIndex, seqSize, line);\n    rows[2] = obliquelyLeftToRight(movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(movedCellIndex, seqSize, line);\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                elem,\n                movedCellIndex.y\n            ]));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                movedCellIndex.x,\n                elem\n            ]));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDRCxLQUFLdEIsQ0FBQyxLQUNwQmMsS0FBS1MsUUFBUSxDQUFDRCxLQUFLckIsQ0FBQyxHQUVwQk8sSUFBSWdCLElBQUksQ0FDTEUsU0FBUzVCLEdBQUcsQ0FBQzZCLENBQUFBLFlBQWE7Z0JBQUNOLE1BQU1yQixDQUFDLEdBQUcyQjtnQkFBV04sTUFBTXBCLENBQUMsR0FBRzBCO2FBQVU7SUFFN0U7SUFDQSxPQUFPbkI7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihcclxuICAgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSksXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAg0YFlbGxzWzBdWzJdID0gJ3gnXHJcbiAgIGNlbGxzWzFdWzJdID0gJ3gnXHJcbiAgIGNlbGxzWzJdWzJdID0gJ3gnXHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cyhjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMsIHNlcVNpemUpKSByZXR1cm4gcm93c1tpXVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscywgc2VxU2l6ZSkgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgaXNMaW5lQnJlYWsgPSBmYWxzZVxyXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHNlcVNpemU7IGorKykge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyb3dbaV1bal0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGNlbGxzW3Jvd1tpXVtqXV0pXHJcbiAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgIGlmIChjZWxsc1tyb3dbaV1bal1dICE9PSBjZWxsc1tyb3dbaV1baiAtIDFdXSkge1xyXG4gICAgICAgICAgICBpc0xpbmVCcmVhayA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaXNMaW5lQnJlYWspIHJldHVybiB0cnVlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoXHJcbiAgIGNlbGxzID0gQXJyYXkoNSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KDUpLmZpbGwoMCkpLFxyXG4gICBtb3ZlZENlbGxJbmRleCA9IHsgeDogMSwgeTogMiB9LFxyXG4gICBzZXFTaXplID0gMyxcclxuKSB7XHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuICAgY29uc3Qgcm93cyA9IFtcclxuICAgICAgW10sIC8vIC1cclxuICAgICAgW10sIC8vIHxcclxuICAgICAgW10sIC8vIC9cclxuICAgICAgW10sIC8vIFxcXHJcbiAgIF1cclxuICAgcm93c1swXSA9IGhvcml6b250YWwobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbMV0gPSB2ZXJ0aWNhbChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgcm93c1syXSA9IG9ibGlxdWVseUxlZnRUb1JpZ2h0KG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzNdID0gb2JsaXF1ZWx5UmlnaHRUb0xlZnQobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJldHVybiByb3dzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvcml6b250YWwobW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDQsIGxpbmUpIHtcclxuICAgLy8gLVxyXG4gICBjb25zdCByb3cgPSBbXVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtb3ZlZENlbGxJbmRleC54ICsgaVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSlcclxuICAgICAgICAgcm93LnB1c2gobGluZS5zbGljZShmaXJzdCwgbGFzdCArIDEpLm1hcChlbGVtID0+IFtlbGVtLCBtb3ZlZENlbGxJbmRleC55XSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJ0aWNhbChtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gMywgbGluZSkge1xyXG4gICAvLyB8XHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnkgKyBpXHJcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKGZpcnN0KSAmJiBsaW5lLmluY2x1ZGVzKGxhc3QpKVxyXG4gICAgICAgICByb3cucHVzaChsaW5lLnNsaWNlKGZpcnN0LCBsYXN0ICsgMSkubWFwKGVsZW0gPT4gW21vdmVkQ2VsbEluZGV4LngsIGVsZW1dKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIC9cclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggKyBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gb2JsaXF1ZWx5UmlnaHRUb0xlZnQobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gXFxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIHNlcVNpemUgLSBpIC0gMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54IC0gaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGluZ1dpbm5lciIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwibW92ZWRDZWxsSW5kZXgiLCJ4IiwieSIsInNlcVNpemUiLCLRgWVsbHMiLCJyb3dzIiwiY29tcHV0ZVJvd3MiLCJpIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwibGVuZ3RoIiwiaXNMaW5lQnJlYWsiLCJqIiwiY29uc29sZSIsImxvZyIsImxpbmUiLCJlbGVtIiwiaW5kZXgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJvYmxpcXVlbHlMZWZ0VG9SaWdodCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJzZXFBcnJheSIsImluY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});