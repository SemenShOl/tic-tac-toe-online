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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".PlayerInfo_gamerInfo__yF4TF {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_profileWithSymbol__x_xgw {\\n  position: relative;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_profileWithSymbol__x_xgw .PlayerInfo_symbol__4kQxx {\\n  width: 17px;\\n  height: 17px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -2px;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_separator__UPOst {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_timer__vcx7R {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_stopped__cRXKK {\\n  color: #94A3B8;\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_danger__G5R1_ {\\n  color: rgb(171, 24, 24);\\n}\\n.PlayerInfo_gamerInfo__yF4TF .PlayerInfo_timeIsOver__CCt5Y {\\n  color: #94A3B8;\\n  text-decoration: line-through;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\",\"webpack://../../../JS%20Projects/react/tic-tac-toe-online/components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\",\"webpack://styles/colors.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;ACDJ;ADGI;EACI,kBAAA;ACDR;ADGQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;ACDZ;ADKI;EACI,YAAA;EACA,UAAA;EACA,mBErBG;ADkBX;ADMI;EACI,WAAA;EACA,cEzBG;EF0BH,eAAA;EACA,gBAAA;ACJR;ADOI;EACI,cEjCG;AD4BX;ADSI;EACI,uBAAA;ACPR;ADUI;EACI,cE1CG;EF2CH,6BAAA;ACRR\",\"sourcesContent\":[\"@import \\\"../../../../styles/colors.module.scss\\\";\\r\\n\\r\\n.gamerInfo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n\\r\\n    .profileWithSymbol {\\r\\n        position: relative;\\r\\n\\r\\n        .symbol {\\r\\n            width: 17px;\\r\\n            height: 17px;\\r\\n            position: absolute;\\r\\n            background-color: white;\\r\\n            display: flex;\\r\\n            align-items: center;\\r\\n            justify-content: center;\\r\\n            border-radius: 100%;\\r\\n            left: -4px;\\r\\n            top: -2px;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    .separator {\\r\\n        height: 24px;\\r\\n        width: 1px;\\r\\n        background: $slate200;\\r\\n    }\\r\\n\\r\\n    .timer {\\r\\n        width: 60px;\\r\\n        color: $slate900;\\r\\n        font-size: 18px;\\r\\n        font-weight: 600;\\r\\n    }\\r\\n\\r\\n    .stopped {\\r\\n        color: $slate400;\\r\\n\\r\\n    }\\r\\n\\r\\n    .danger {\\r\\n        color: rgb(171, 24, 24);\\r\\n    }\\r\\n\\r\\n    .timeIsOver {\\r\\n        color: $slate400;\\r\\n        text-decoration: line-through;\\r\\n\\r\\n    }\\r\\n}\",\".gamerInfo {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.gamerInfo .profileWithSymbol {\\n  position: relative;\\n}\\n.gamerInfo .profileWithSymbol .symbol {\\n  width: 17px;\\n  height: 17px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -2px;\\n}\\n.gamerInfo .separator {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.gamerInfo .timer {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.gamerInfo .stopped {\\n  color: #94A3B8;\\n}\\n.gamerInfo .danger {\\n  color: rgb(171, 24, 24);\\n}\\n.gamerInfo .timeIsOver {\\n  color: #94A3B8;\\n  text-decoration: line-through;\\n}\",\"$teal600: #0D9488;\\r\\n$teal500: #3abdb2;\\r\\n\\r\\n\\r\\n$slate50: #F8FAFC;\\r\\n$slate400: #94A3B8;\\r\\n$slate200: #E2E8F0;\\r\\n$slate900: #0F172A;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"gamerInfo\": \"PlayerInfo_gamerInfo__yF4TF\",\n\t\"profileWithSymbol\": \"PlayerInfo_profileWithSymbol__x_xgw\",\n\t\"symbol\": \"PlayerInfo_symbol__4kQxx\",\n\t\"separator\": \"PlayerInfo_separator__UPOst\",\n\t\"timer\": \"PlayerInfo_timer__vcx7R\",\n\t\"stopped\": \"PlayerInfo_stopped__cRXKK\",\n\t\"danger\": \"PlayerInfo_danger__G5R1_\",\n\t\"timeIsOver\": \"PlayerInfo_timeIsOver__CCt5Y\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvZ2FtZS9VSUdhbWUvUGxheWVySW5mby9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSx3RUFBd0Usa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcscUVBQXFFLHVCQUF1QixHQUFHLCtGQUErRixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGVBQWUsY0FBYyxHQUFHLDZEQUE2RCxpQkFBaUIsZUFBZSx3QkFBd0IsR0FBRyx5REFBeUQsZ0JBQWdCLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcsMkRBQTJELG1CQUFtQixHQUFHLDBEQUEwRCw0QkFBNEIsR0FBRyw4REFBOEQsbUJBQW1CLGtDQUFrQyxHQUFHLE9BQU8sb1JBQW9SLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLDJFQUEyRSxvQkFBb0Isc0JBQXNCLDRCQUE0QixrQkFBa0IsZ0NBQWdDLCtCQUErQix5QkFBeUIsNEJBQTRCLDZCQUE2QixtQ0FBbUMsd0NBQXdDLDhCQUE4QixvQ0FBb0Msd0NBQXdDLG9DQUFvQywyQkFBMkIsMEJBQTBCLGFBQWEsU0FBUyx3QkFBd0IseUJBQXlCLHVCQUF1QixrQ0FBa0MsU0FBUyxvQkFBb0Isd0JBQXdCLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLFNBQVMsc0JBQXNCLDZCQUE2QixhQUFhLHFCQUFxQixvQ0FBb0MsU0FBUyx5QkFBeUIsNkJBQTZCLDBDQUEwQyxhQUFhLEtBQUssZUFBZSxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxpQ0FBaUMsdUJBQXVCLEdBQUcseUNBQXlDLGdCQUFnQixpQkFBaUIsdUJBQXVCLDRCQUE0QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsZUFBZSxjQUFjLEdBQUcseUJBQXlCLGlCQUFpQixlQUFlLHdCQUF3QixHQUFHLHFCQUFxQixnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsc0JBQXNCLDRCQUE0QixHQUFHLDBCQUEwQixtQkFBbUIsa0NBQWtDLEdBQUcscUJBQXFCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsbUJBQW1CO0FBQ3huSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL1VJR2FtZS9QbGF5ZXJJbmZvL1BsYXllckluZm8ubW9kdWxlLnNjc3M/YzY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlBsYXllckluZm9fZ2FtZXJJbmZvX195RjRURiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLlBsYXllckluZm9fZ2FtZXJJbmZvX195RjRURiAuUGxheWVySW5mb19wcm9maWxlV2l0aFN5bWJvbF9feF94Z3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX3lGNFRGIC5QbGF5ZXJJbmZvX3Byb2ZpbGVXaXRoU3ltYm9sX194X3hndyAuUGxheWVySW5mb19zeW1ib2xfXzRrUXh4IHtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IC00cHg7XFxuICB0b3A6IC0ycHg7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fc2VwYXJhdG9yX19VUE9zdCB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0UyRThGMDtcXG59XFxuLlBsYXllckluZm9fZ2FtZXJJbmZvX195RjRURiAuUGxheWVySW5mb190aW1lcl9fdmN4N1Ige1xcbiAgd2lkdGg6IDYwcHg7XFxuICBjb2xvcjogIzBGMTcyQTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fc3RvcHBlZF9fY1JYS0sge1xcbiAgY29sb3I6ICM5NEEzQjg7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEYgLlBsYXllckluZm9fZGFuZ2VyX19HNVIxXyB7XFxuICBjb2xvcjogcmdiKDE3MSwgMjQsIDI0KTtcXG59XFxuLlBsYXllckluZm9fZ2FtZXJJbmZvX195RjRURiAuUGxheWVySW5mb190aW1lSXNPdmVyX19DQ3Q1WSB7XFxuICBjb2xvcjogIzk0QTNCODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9nYW1lL1VJR2FtZS9QbGF5ZXJJbmZvL1BsYXllckluZm8ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9KUyUyMFByb2plY3RzL3JlYWN0L3RpYy10YWMtdG9lLW9ubGluZS9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9jb2xvcnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDREo7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RaO0FES0k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRXJCRztBRGtCWDtBRE1JO0VBQ0ksV0FBQTtFQUNBLGNFekJHO0VGMEJILGVBQUE7RUFDQSxnQkFBQTtBQ0pSO0FET0k7RUFDSSxjRWpDRztBRDRCWDtBRFNJO0VBQ0ksdUJBQUE7QUNQUjtBRFVJO0VBQ0ksY0UxQ0c7RUYyQ0gsNkJBQUE7QUNSUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLm1vZHVsZS5zY3NzXFxcIjtcXHJcXG5cXHJcXG4uZ2FtZXJJbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgICAucHJvZmlsZVdpdGhTeW1ib2wge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgLnN5bWJvbCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDE3cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAtNHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogLTJweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VwYXJhdG9yIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkc2xhdGUyMDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpbWVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgY29sb3I6ICRzbGF0ZTkwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN0b3BwZWQge1xcclxcbiAgICAgICAgY29sb3I6ICRzbGF0ZTQwMDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGFuZ2VyIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTcxLCAyNCwgMjQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aW1lSXNPdmVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2xhdGU0MDA7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cIixcIi5nYW1lckluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5nYW1lckluZm8gLnByb2ZpbGVXaXRoU3ltYm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdhbWVySW5mbyAucHJvZmlsZVdpdGhTeW1ib2wgLnN5bWJvbCB7XFxuICB3aWR0aDogMTdweDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBsZWZ0OiAtNHB4O1xcbiAgdG9wOiAtMnB4O1xcbn1cXG4uZ2FtZXJJbmZvIC5zZXBhcmF0b3Ige1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFMkU4RjA7XFxufVxcbi5nYW1lckluZm8gLnRpbWVyIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgY29sb3I6ICMwRjE3MkE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZ2FtZXJJbmZvIC5zdG9wcGVkIHtcXG4gIGNvbG9yOiAjOTRBM0I4O1xcbn1cXG4uZ2FtZXJJbmZvIC5kYW5nZXIge1xcbiAgY29sb3I6IHJnYigxNzEsIDI0LCAyNCk7XFxufVxcbi5nYW1lckluZm8gLnRpbWVJc092ZXIge1xcbiAgY29sb3I6ICM5NEEzQjg7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsXCIkdGVhbDYwMDogIzBEOTQ4ODtcXHJcXG4kdGVhbDUwMDogIzNhYmRiMjtcXHJcXG5cXHJcXG5cXHJcXG4kc2xhdGU1MDogI0Y4RkFGQztcXHJcXG4kc2xhdGU0MDA6ICM5NEEzQjg7XFxyXFxuJHNsYXRlMjAwOiAjRTJFOEYwO1xcclxcbiRzbGF0ZTkwMDogIzBGMTcyQTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJnYW1lckluZm9cIjogXCJQbGF5ZXJJbmZvX2dhbWVySW5mb19feUY0VEZcIixcblx0XCJwcm9maWxlV2l0aFN5bWJvbFwiOiBcIlBsYXllckluZm9fcHJvZmlsZVdpdGhTeW1ib2xfX3hfeGd3XCIsXG5cdFwic3ltYm9sXCI6IFwiUGxheWVySW5mb19zeW1ib2xfXzRrUXh4XCIsXG5cdFwic2VwYXJhdG9yXCI6IFwiUGxheWVySW5mb19zZXBhcmF0b3JfX1VQT3N0XCIsXG5cdFwidGltZXJcIjogXCJQbGF5ZXJJbmZvX3RpbWVyX192Y3g3UlwiLFxuXHRcInN0b3BwZWRcIjogXCJQbGF5ZXJJbmZvX3N0b3BwZWRfX2NSWEtLXCIsXG5cdFwiZGFuZ2VyXCI6IFwiUGxheWVySW5mb19kYW5nZXJfX0c1UjFfXCIsXG5cdFwidGltZUlzT3ZlclwiOiBcIlBsYXllckluZm9fdGltZUlzT3Zlcl9fQ0N0NVlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\n"));

/***/ })

});