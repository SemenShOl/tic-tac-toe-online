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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;\n    const cells = Array(5).fill().map(()=>Array(5).fill(0));\n    debugger;\n    console.log(cells);\n    cells[0][2] = \"x\";\n    cells[1][2] = \"x\";\n    cells[2][2] = \"x\";\n    const rows = computeRows(cells, movedCellIndex, seqSize);\n    for(let i = 0; i < 4; i++){\n        if (areCellsInRowEqual(rows[i], cells, seqSize)) return rows[i];\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells, seqSize)=>{\n    for(let i = 0; i < row.length; i++){\n        let isLineBreak = false;\n        for(let j = 1; j < seqSize; j++){\n            console.log(row[i][j]);\n            console.log(cells[row[i][j]]);\n            debugger;\n            if (cells[row[i][j]] !== cells[row[i][j - 1]]) {\n                isLineBreak = true;\n                break;\n            }\n        }\n        if (!isLineBreak) return true;\n    }\n    return true;\n};\nfunction computeRows(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    console.log(cells[movedCellIndex.x]);\n    debugger;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(movedCellIndex, seqSize, line);\n    rows[1] = vertical(movedCellIndex, seqSize, line);\n    rows[2] = obliquelyLeftToRight(movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(movedCellIndex, seqSize, line);\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                elem,\n                movedCellIndex.y\n            ]));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                movedCellIndex.x,\n                elem\n            ]));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUNyQmdCLEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS3pCLENBQUMsS0FDcEJpQixLQUFLUyxRQUFRLENBQUNELEtBQUt4QixDQUFDLEdBRXBCWSxJQUFJYyxJQUFJLENBQ0xFLFNBQVN2QixHQUFHLENBQUN3QixDQUFBQSxZQUFhO2dCQUFDTixNQUFNeEIsQ0FBQyxHQUFHOEI7Z0JBQVdOLE1BQU12QixDQUFDLEdBQUc2QjthQUFVO0lBRTdFO0lBQ0EsT0FBT2pCO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2NvbXB1dGluZ1dpbm5lci5qcz8yYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wdXRpbmdXaW5uZXIobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMpIHtcclxuICAgY29uc3QgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSlcclxuICAgZGVidWdnZXJcclxuICAgY29uc29sZS5sb2coY2VsbHMpXHJcbiAgIGNlbGxzWzBdWzJdID0gJ3gnXHJcbiAgIGNlbGxzWzFdWzJdID0gJ3gnXHJcbiAgIGNlbGxzWzJdWzJdID0gJ3gnXHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cyhjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMsIHNlcVNpemUpKSByZXR1cm4gcm93c1tpXVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscywgc2VxU2l6ZSkgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgaXNMaW5lQnJlYWsgPSBmYWxzZVxyXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHNlcVNpemU7IGorKykge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyb3dbaV1bal0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGNlbGxzW3Jvd1tpXVtqXV0pXHJcbiAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgIGlmIChjZWxsc1tyb3dbaV1bal1dICE9PSBjZWxsc1tyb3dbaV1baiAtIDFdXSkge1xyXG4gICAgICAgICAgICBpc0xpbmVCcmVhayA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaXNMaW5lQnJlYWspIHJldHVybiB0cnVlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzKSB7XHJcbiAgIGNvbnNvbGUubG9nKGNlbGxzW21vdmVkQ2VsbEluZGV4LnhdKVxyXG4gICBkZWJ1Z2dlclxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbbW92ZWRDZWxsSW5kZXgueF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIHJvd3NbMF0gPSBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzFdID0gdmVydGljYWwobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbMl0gPSBvYmxpcXVlbHlMZWZ0VG9SaWdodChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgcm93c1szXSA9IG9ibGlxdWVseVJpZ2h0VG9MZWZ0KG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0LCBsaW5lKSB7XHJcbiAgIC8vIC1cclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKS5tYXAoZWxlbSA9PiBbZWxlbSwgbW92ZWRDZWxsSW5kZXgueV0pKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gdmVydGljYWwobW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gfFxyXG4gICBjb25zdCByb3cgPSBbXVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtb3ZlZENlbGxJbmRleC55ICsgaVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSlcclxuICAgICAgICAgcm93LnB1c2gobGluZS5zbGljZShmaXJzdCwgbGFzdCArIDEpLm1hcChlbGVtID0+IFttb3ZlZENlbGxJbmRleC54LCBlbGVtXSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlMZWZ0VG9SaWdodChtb3ZlZENlbGxJbmRleCA9IHsgeDogMSwgeTogMiB9LCBzZXFTaXplID0gMywgbGluZSkge1xyXG4gICAvLyAvXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54ICsgaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54ICsgaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseVJpZ2h0VG9MZWZ0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIFxcXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBzZXFTaXplIC0gaSAtIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCAtIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCAtIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJtb3ZlZENlbGxJbmRleCIsIngiLCJ5Iiwic2VxU2l6ZSIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJhcmVDZWxsc0luUm93RXF1YWwiLCJyb3ciLCJsZW5ndGgiLCJpc0xpbmVCcmVhayIsImoiLCJsaW5lIiwiZWxlbSIsImluZGV4IiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwib2JsaXF1ZWx5TGVmdFRvUmlnaHQiLCJvYmxpcXVlbHlSaWdodFRvTGVmdCIsImZpcnN0IiwibGFzdCIsImluY2x1ZGVzIiwicHVzaCIsInNsaWNlIiwic2VxQXJyYXkiLCJpbmNyZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});