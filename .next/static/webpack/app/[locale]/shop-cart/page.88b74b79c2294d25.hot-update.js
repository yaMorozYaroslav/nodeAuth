"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/shop-cart/page",{

/***/ "(app-pages-browser)/./comps/Cart/MailForm/requests.js":
/*!*****************************************!*\
  !*** ./comps/Cart/MailForm/requests.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCities: function() { return /* binding */ getCities; },\n/* harmony export */   testCall: function() { return /* binding */ testCall; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst getCities = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.novaposhta.ua/v2.0/json/\", {\n    \"apiKey\": \"eee3a5f0b4d1ba07016827f6dff25e86\",\n    \"modelName\": \"Address\",\n    \"calledMethod\": \"getSettlements\",\n    \"methodProperties\": {\n        \"Ref\": \"\"\n    }\n});\nconst testCall = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://seed-shop-back-78049b8c30bb.herokuapp.com/items\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBzL0NhcnQvTWFpbEZvcm0vcmVxdWVzdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRWxCLE1BQU1DLFlBQVlELDZDQUFLQSxDQUFDRSxJQUFJLENBQUMsd0NBQ0E7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7UUFBQyxPQUFRO0lBQUU7QUFBQyxHQUFFO0FBQ3ZELE1BQU1DLFdBQVdILDZDQUFLQSxDQUNuQkksR0FBRyxDQUFDLDJEQUEwRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9DYXJ0L01haWxGb3JtL3JlcXVlc3RzLmpzP2YxOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkubm92YXBvc2h0YS51YS92Mi4wL2pzb24vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwaUtleVwiOiBcImVlZTNhNWYwYjRkMWJhMDcwMTY4MjdmNmRmZjI1ZTg2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlbE5hbWVcIjogXCJBZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZWRNZXRob2RcIjogXCJnZXRTZXR0bGVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kUHJvcGVydGllc1wiOiB7XCJSZWZcIiA6IFwiXCJ9fSlcbmV4cG9ydCBjb25zdCB0ZXN0Q2FsbCA9IGF4aW9zXG4gICAgICAgICAuZ2V0KCdodHRwczovL3NlZWQtc2hvcC1iYWNrLTc4MDQ5YjhjMzBiYi5oZXJva3VhcHAuY29tL2l0ZW1zJylcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldENpdGllcyIsInBvc3QiLCJ0ZXN0Q2FsbCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./comps/Cart/MailForm/requests.js\n"));

/***/ })

});