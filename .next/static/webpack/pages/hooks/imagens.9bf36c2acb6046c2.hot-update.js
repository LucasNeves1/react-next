"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/hooks/imagens",{

/***/ "./src/components/hooks/imagemAleatoria.tsx":
/*!**************************************************!*\
  !*** ./src/components/hooks/imagemAleatoria.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImagemAleatoria; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ImagemAleatoria() {\n    _s();\n    const [pesquisa, alterarPesquisa] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"abstract\");\n    const [tamanho, alterarTamanho] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(300);\n    const url = \"https://source.unsplash.com/featured/\";\n    function renderizarBotao(valor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"\\n                bg-blue-500 px-4 py-2 rounded-md\\n            \",\n            onClick: ()=>{\n                alterarPesquisa(valor);\n            },\n            children: valor\n        }, void 0, false, {\n            fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-3 border border-zinc-300 p-7 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"\".concat(url).concat(tamanho, \"x\").concat(tamanho, \"?\").concat(pesquisa),\n                height: 300,\n                width: 300,\n                alt: \"Imagem\"\n            }, void 0, false, {\n                fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between gap-5\",\n                children: [\n                    renderizarBotao(\"abstract\"),\n                    renderizarBotao(\"city\"),\n                    renderizarBotao(\"person\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    value: tamanho,\n                    className: \"bg-zinc-800 p-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macmini/Desktop/react-next/next-projeto/GitHub/react-next/src/components/hooks/imagemAleatoria.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(ImagemAleatoria, \"5ERIPiCB+m4K0jHdN6tvJStuJUw=\");\n_c = ImagemAleatoria;\nvar _c;\n$RefreshReg$(_c, \"ImagemAleatoria\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy9pbWFnZW1BbGVhdG9yaWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBRWxCLFNBQVNFOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNJLFNBQVNDLGVBQWUsR0FBR0wsK0NBQVFBLENBQVM7SUFDbkQsTUFBTU0sTUFBTTtJQUdaLFNBQVNDLGdCQUFnQkMsS0FBYTtRQUNsQyxxQkFDSSw4REFBQ0M7WUFBT0MsV0FBWTtZQUVqQkMsU0FBUztnQkFDUlIsZ0JBQWdCSztZQUNwQjtzQkFDS0E7Ozs7OztJQUdiO0lBRUEscUJBQ0ksOERBQUNJO1FBQUlGLFdBQVk7OzBCQUNiLDhEQUFDWCxtREFBS0E7Z0JBQUNjLEtBQUssR0FBU1QsT0FBTkUsS0FBaUJGLE9BQVhBLFNBQVEsS0FBY0YsT0FBWEUsU0FBUSxLQUFZLE9BQVRGO2dCQUFZWSxRQUFRO2dCQUFLQyxPQUFPO2dCQUFLQyxLQUFJOzs7Ozs7MEJBQ3BGLDhEQUFDSjtnQkFBSUYsV0FBWTs7b0JBQ1pILGdCQUFnQjtvQkFDaEJBLGdCQUFnQjtvQkFDaEJBLGdCQUFnQjs7Ozs7OzswQkFFckIsOERBQUNLOzBCQUNHLDRFQUFDSztvQkFBTUMsTUFBSztvQkFBU0MsT0FBT2Y7b0JBQVNNLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9EO0dBL0J3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9va3MvaW1hZ2VtQWxlYXRvcmlhLnRzeD8yOTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VtQWxlYXRvcmlhKCkge1xuICAgIGNvbnN0IFtwZXNxdWlzYSwgYWx0ZXJhclBlc3F1aXNhXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2Fic3RyYWN0Jyk7XG4gICAgY29uc3QgW3RhbWFuaG8sIGFsdGVyYXJUYW1hbmhvXSA9IHVzZVN0YXRlPG51bWJlcj4oMzAwKTtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9mZWF0dXJlZC9cIlxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJpemFyQm90YW8odmFsb3I6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICBiZy1ibHVlLTUwMCBweC00IHB5LTIgcm91bmRlZC1tZFxuICAgICAgICAgICAgYH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsdGVyYXJQZXNxdWlzYSh2YWxvcilcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHt2YWxvcn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGdhcC0zIGJvcmRlciBib3JkZXItemluYy0zMDAgcC03IHJvdW5kZWQtbWRgfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Ake3VybH0ke3RhbWFuaG99eCR7dGFtYW5ob30/JHtwZXNxdWlzYX1gfSBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0gYWx0PVwiSW1hZ2VtXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtNWB9PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJpemFyQm90YW8oJ2Fic3RyYWN0Jyl9XG4gICAgICAgICAgICAgICAge3JlbmRlcml6YXJCb3RhbygnY2l0eScpfVxuICAgICAgICAgICAgICAgIHtyZW5kZXJpemFyQm90YW8oJ3BlcnNvbicpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RhbWFuaG99IGNsYXNzTmFtZT0nYmctemluYy04MDAgcC0yJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiSW1hZ2VtQWxlYXRvcmlhIiwicGVzcXVpc2EiLCJhbHRlcmFyUGVzcXVpc2EiLCJ0YW1hbmhvIiwiYWx0ZXJhclRhbWFuaG8iLCJ1cmwiLCJyZW5kZXJpemFyQm90YW8iLCJ2YWxvciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hooks/imagemAleatoria.tsx\n"));

/***/ })

});