/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".PlayerInfo_gamerInfo__yF4TF {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_profileWithSymbol__x_xgw {\\n  position: relative;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_profileWithSymbol__x_xgw .PlayerInfo_symbol__4kQxx {\\n  z-index: 20;\\n  width: 17px;\\n  height: 17px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -2px;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_separator__UPOst {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_timer__vcx7R {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_stopped__cRXKK {\\n  color: #94A3B8;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_danger__G5R1_ {\\n  color: rgb(171, 24, 24);\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_timeIsOver__CCt5Y {\\n  color: #94A3B8;\\n  text-decoration: line-through;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\",\"webpack://../../../JS%20Projects/react/tic-tac-toe-online/components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\",\"webpack://styles/colors.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;ACDJ;ADGI;EACI,kBAAA;ACDR;ADGQ;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;ACDZ;ADKI;EACI,YAAA;EACA,UAAA;EACA,mBEtBG;ADmBX;ADMI;EACI,WAAA;EACA,cE1BG;EF2BH,eAAA;EACA,gBAAA;ACJR;ADOI;EACI,cElCG;AD6BX;ADSI;EACI,uBAAA;ACPR;ADUI;EACI,cE3CG;EF4CH,6BAAA;ACRR\",\"sourcesContent\":[\"@import \\\"../../../../styles/colors.module.scss\\\";\\r\\n\\r\\n.gamerInfo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n\\r\\n    .profileWithSymbol {\\r\\n        position: relative;\\r\\n\\r\\n        .symbol {\\r\\n            z-index: 20;\\r\\n            width: 17px;\\r\\n            height: 17px;\\r\\n            position: absolute;\\r\\n            background-color: white;\\r\\n            display: flex;\\r\\n            align-items: center;\\r\\n            justify-content: center;\\r\\n            border-radius: 100%;\\r\\n            left: -4px;\\r\\n            top: -2px;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    .separator {\\r\\n        height: 24px;\\r\\n        width: 1px;\\r\\n        background: $slate200;\\r\\n    }\\r\\n\\r\\n    .timer {\\r\\n        width: 60px;\\r\\n        color: $slate900;\\r\\n        font-size: 18px;\\r\\n        font-weight: 600;\\r\\n    }\\r\\n\\r\\n    .stopped {\\r\\n        color: $slate400;\\r\\n\\r\\n    }\\r\\n\\r\\n    .danger {\\r\\n        color: rgb(171, 24, 24);\\r\\n    }\\r\\n\\r\\n    .timeIsOver {\\r\\n        color: $slate400;\\r\\n        text-decoration: line-through;\\r\\n\\r\\n    }\\r\\n}\",\".gamerInfo {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.gamerInfo .profileWithSymbol {\\n  position: relative;\\n}\\n.gamerInfo .profileWithSymbol .symbol {\\n  z-index: 20;\\n  width: 17px;\\n  height: 17px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -2px;\\n}\\n.gamerInfo .separator {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.gamerInfo .timer {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.gamerInfo .stopped {\\n  color: #94A3B8;\\n}\\n.gamerInfo .danger {\\n  color: rgb(171, 24, 24);\\n}\\n.gamerInfo .timeIsOver {\\n  color: #94A3B8;\\n  text-decoration: line-through;\\n}\",\"$teal600: #0D9488;\\r\\n$teal500: #3abdb2;\\r\\n\\r\\n\\r\\n$slate50: #F8FAFC;\\r\\n$slate400: #94A3B8;\\r\\n$slate200: #E2E8F0;\\r\\n$slate900: #0F172A;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"gamerInfo\": \"PlayerInfo_gamerInfo__yF4TF\",\n\t\"profileWithSymbol\": \"PlayerInfo_profileWithSymbol__x_xgw\",\n\t\"symbol\": \"PlayerInfo_symbol__4kQxx\",\n\t\"separator\": \"PlayerInfo_separator__UPOst\",\n\t\"timer\": \"PlayerInfo_timer__vcx7R\",\n\t\"stopped\": \"PlayerInfo_stopped__cRXKK\",\n\t\"danger\": \"PlayerInfo_danger__G5R1_\",\n\t\"timeIsOver\": \"PlayerInfo_timeIsOver__CCt5Y\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvZ2FtZS9VSUdhbWUvUGxheWVySW5mby9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSx3RUFBd0Usa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcscUVBQXFFLHVCQUF1QixHQUFHLCtGQUErRixnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsNEJBQTRCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixlQUFlLGNBQWMsR0FBRyw2REFBNkQsaUJBQWlCLGVBQWUsd0JBQXdCLEdBQUcseURBQXlELGdCQUFnQixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLDJEQUEyRCxtQkFBbUIsR0FBRywwREFBMEQsNEJBQTRCLEdBQUcsOERBQThELG1CQUFtQixrQ0FBa0MsR0FBRyxPQUFPLG9SQUFvUixVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLDJFQUEyRSxvQkFBb0Isc0JBQXNCLDRCQUE0QixrQkFBa0IsZ0NBQWdDLCtCQUErQix5QkFBeUIsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLHdDQUF3Qyw4QkFBOEIsb0NBQW9DLHdDQUF3QyxvQ0FBb0MsMkJBQTJCLDBCQUEwQixhQUFhLFNBQVMsd0JBQXdCLHlCQUF5Qix1QkFBdUIsa0NBQWtDLFNBQVMsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsNEJBQTRCLDZCQUE2QixTQUFTLHNCQUFzQiw2QkFBNkIsYUFBYSxxQkFBcUIsb0NBQW9DLFNBQVMseUJBQXlCLDZCQUE2QiwwQ0FBMEMsYUFBYSxLQUFLLGVBQWUsa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLHlDQUF5QyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsNEJBQTRCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixlQUFlLGNBQWMsR0FBRyx5QkFBeUIsaUJBQWlCLGVBQWUsd0JBQXdCLEdBQUcscUJBQXFCLGdCQUFnQixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsMEJBQTBCLG1CQUFtQixrQ0FBa0MsR0FBRyxxQkFBcUIsc0JBQXNCLDhCQUE4Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixtQkFBbUI7QUFDOXJIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5tb2R1bGUuc2Nzcz9jNjU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIC5QbGF5ZXJJbmZvX3Byb2ZpbGVXaXRoU3ltYm9sX194X3hndyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fcHJvZmlsZVdpdGhTeW1ib2xfX3hfeGd3IC5QbGF5ZXJJbmZvX3N5bWJvbF9fNGtReHgge1xcbiAgei1pbmRleDogMjA7XFxuICB3aWR0aDogMTdweDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBsZWZ0OiAtNHB4O1xcbiAgdG9wOiAtMnB4O1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIC5QbGF5ZXJJbmZvX3NlcGFyYXRvcl9fVVBPc3Qge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFMkU4RjA7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fdGltZXJfX3ZjeDdSIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgY29sb3I6ICMwRjE3MkE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIC5QbGF5ZXJJbmZvX3N0b3BwZWRfX2NSWEtLIHtcXG4gIGNvbG9yOiAjOTRBM0I4O1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIC5QbGF5ZXJJbmZvX2Rhbmdlcl9fRzVSMV8ge1xcbiAgY29sb3I6IHJnYigxNzEsIDI0LCAyNCk7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fdGltZUlzT3Zlcl9fQ0N0NVkge1xcbiAgY29sb3I6ICM5NEEzQjg7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZ2FtZS9VSUdhbWUvUGxheWVySW5mby9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vSlMlMjBQcm9qZWN0cy9yZWFjdC90aWMtdGFjLXRvZS1vbmxpbmUvY29tcG9uZW50cy9nYW1lL1VJR2FtZS9QbGF5ZXJJbmZvL1BsYXllckluZm8ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29sb3JzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0RKO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJFdEJHO0FEbUJYO0FETUk7RUFDSSxXQUFBO0VBQ0EsY0UxQkc7RUYyQkgsZUFBQTtFQUNBLGdCQUFBO0FDSlI7QURPSTtFQUNJLGNFbENHO0FENkJYO0FEU0k7RUFDSSx1QkFBQTtBQ1BSO0FEVUk7RUFDSSxjRTNDRztFRjRDSCw2QkFBQTtBQ1JSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubW9kdWxlLnNjc3NcXFwiO1xcclxcblxcclxcbi5nYW1lckluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgIC5wcm9maWxlV2l0aFN5bWJvbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAuc3ltYm9sIHtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTdweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IC00cHg7XFxyXFxuICAgICAgICAgICAgdG9wOiAtMnB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZXBhcmF0b3Ige1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRzbGF0ZTIwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGltZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICBjb2xvcjogJHNsYXRlOTAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3RvcHBlZCB7XFxyXFxuICAgICAgICBjb2xvcjogJHNsYXRlNDAwO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kYW5nZXIge1xcclxcbiAgICAgICAgY29sb3I6IHJnYigxNzEsIDI0LCAyNCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpbWVJc092ZXIge1xcclxcbiAgICAgICAgY29sb3I6ICRzbGF0ZTQwMDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcblxcclxcbiAgICB9XFxyXFxufVwiLFwiLmdhbWVySW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmdhbWVySW5mbyAucHJvZmlsZVdpdGhTeW1ib2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ2FtZXJJbmZvIC5wcm9maWxlV2l0aFN5bWJvbCAuc3ltYm9sIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgd2lkdGg6IDE3cHg7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbGVmdDogLTRweDtcXG4gIHRvcDogLTJweDtcXG59XFxuLmdhbWVySW5mbyAuc2VwYXJhdG9yIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRTJFOEYwO1xcbn1cXG4uZ2FtZXJJbmZvIC50aW1lciB7XFxuICB3aWR0aDogNjBweDtcXG4gIGNvbG9yOiAjMEYxNzJBO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmdhbWVySW5mbyAuc3RvcHBlZCB7XFxuICBjb2xvcjogIzk0QTNCODtcXG59XFxuLmdhbWVySW5mbyAuZGFuZ2VyIHtcXG4gIGNvbG9yOiByZ2IoMTcxLCAyNCwgMjQpO1xcbn1cXG4uZ2FtZXJJbmZvIC50aW1lSXNPdmVyIHtcXG4gIGNvbG9yOiAjOTRBM0I4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVwiLFwiJHRlYWw2MDA6ICMwRDk0ODg7XFxyXFxuJHRlYWw1MDA6ICMzYWJkYjI7XFxyXFxuXFxyXFxuXFxyXFxuJHNsYXRlNTA6ICNGOEZBRkM7XFxyXFxuJHNsYXRlNDAwOiAjOTRBM0I4O1xcclxcbiRzbGF0ZTIwMDogI0UyRThGMDtcXHJcXG4kc2xhdGU5MDA6ICMwRjE3MkE7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZ2FtZXJJbmZvXCI6IFwiUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGXCIsXG5cdFwicHJvZmlsZVdpdGhTeW1ib2xcIjogXCJQbGF5ZXJJbmZvX3Byb2ZpbGVXaXRoU3ltYm9sX194X3hnd1wiLFxuXHRcInN5bWJvbFwiOiBcIlBsYXllckluZm9fc3ltYm9sX180a1F4eFwiLFxuXHRcInNlcGFyYXRvclwiOiBcIlBsYXllckluZm9fc2VwYXJhdG9yX19VUE9zdFwiLFxuXHRcInRpbWVyXCI6IFwiUGxheWVySW5mb190aW1lcl9fdmN4N1JcIixcblx0XCJzdG9wcGVkXCI6IFwiUGxheWVySW5mb19zdG9wcGVkX19jUlhLS1wiLFxuXHRcImRhbmdlclwiOiBcIlBsYXllckluZm9fZGFuZ2VyX19HNVIxX1wiLFxuXHRcInRpbWVJc092ZXJcIjogXCJQbGF5ZXJJbmZvX3RpbWVJc092ZXJfX0NDdDVZXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\n"));

/***/ })

});