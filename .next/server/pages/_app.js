"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return App;\n  }\n}));\n\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\n\nconst _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(/*! react */ \"react?1189\"));\n\nconst _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\n/**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */\n\n\nasync function appGetInitialProps(param) {\n  let {\n    Component,\n    ctx\n  } = param;\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, pageProps);\n  }\n\n}\n\n(() => {\n  App.origGetInitialProps = appGetInitialProps;\n})();\n\n(() => {\n  App.getInitialProps = appGetInitialProps;\n})();\n\nif ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {\n  Object.defineProperty(exports.default, '__esModule', {\n    value: true\n  });\n  Object.assign(exports.default, exports);\n  module.exports = exports.default;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLDhDQUE2QztFQUN6Q0csS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FILDJDQUEwQztFQUN0Q0ksVUFBVSxFQUFFLElBRDBCO0VBRXRDQyxHQUFHLEVBQUUsWUFBVztJQUNaLE9BQU9DLEdBQVA7RUFDSDtBQUpxQyxDQUExQzs7QUFNQSxNQUFNQyx3QkFBd0IsR0FBR0MsbUJBQU8sQ0FBQyw2R0FBRCxDQUF4Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsYUFBY0Ysd0JBQXdCLENBQUNHLENBQXpCLENBQTJCRixtQkFBTyxDQUFDLHlCQUFELENBQWxDLENBQTdCOztBQUNBLE1BQU1HLE1BQU0sR0FBR0gsbUJBQU8sQ0FBQyxnREFBRCxDQUF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBSSxlQUFlSSxrQkFBZixDQUFrQ0MsS0FBbEMsRUFBeUM7RUFDekMsSUFBSTtJQUFFQyxTQUFGO0lBQWNDO0VBQWQsSUFBdUJGLEtBQTNCO0VBQ0EsTUFBTUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHTCxNQUFNLENBQUNNLG1CQUFYLEVBQWdDSCxTQUFoQyxFQUEyQ0MsR0FBM0MsQ0FBeEI7RUFDQSxPQUFPO0lBQ0hDO0VBREcsQ0FBUDtBQUdIOztBQUNELE1BQU1WLEdBQU4sU0FBa0JHLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlSixTQUFqQyxDQUEyQztFQUN2Q0ssTUFBTSxHQUFHO0lBQ0wsTUFBTTtNQUFFTCxTQUFGO01BQWNFO0lBQWQsSUFBNkIsS0FBS0ksS0FBeEM7SUFDQSxPQUFPLGFBQWNYLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlRyxhQUFmLENBQTZCUCxTQUE3QixFQUF3Q0UsU0FBeEMsQ0FBckI7RUFDSDs7QUFKc0M7O0FBTTNDLENBQUMsTUFBSTtFQUNEVixHQUFHLENBQUNnQixtQkFBSixHQUEwQlYsa0JBQTFCO0FBQ0gsQ0FGRDs7QUFHQSxDQUFDLE1BQUk7RUFDRE4sR0FBRyxDQUFDaUIsZUFBSixHQUFzQlgsa0JBQXRCO0FBQ0gsQ0FGRDs7QUFJQSxJQUFJLENBQUMsT0FBT1YsT0FBTyxDQUFDZ0IsT0FBZixLQUEyQixVQUEzQixJQUEwQyxPQUFPaEIsT0FBTyxDQUFDZ0IsT0FBZixLQUEyQixRQUEzQixJQUF1Q2hCLE9BQU8sQ0FBQ2dCLE9BQVIsS0FBb0IsSUFBdEcsS0FBZ0gsT0FBT2hCLE9BQU8sQ0FBQ2dCLE9BQVIsQ0FBZ0JNLFVBQXZCLEtBQXNDLFdBQTFKLEVBQXVLO0VBQ3JLeEIsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUFPLENBQUNnQixPQUE5QixFQUF1QyxZQUF2QyxFQUFxRDtJQUFFZixLQUFLLEVBQUU7RUFBVCxDQUFyRDtFQUNBSCxNQUFNLENBQUN5QixNQUFQLENBQWN2QixPQUFPLENBQUNnQixPQUF0QixFQUErQmhCLE9BQS9CO0VBQ0F3QixNQUFNLENBQUN4QixPQUFQLEdBQWlCQSxPQUFPLENBQUNnQixPQUF6QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY25jLWNhbGMtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/OTYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFwcDtcbiAgICB9XG59KTtcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XG5jb25zdCBfcmVhY3QgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHBhcmFtKSB7XG4gICAgbGV0IHsgQ29tcG9uZW50ICwgY3R4ICB9ID0gcGFyYW07XG4gICAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgKDAsIF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsIGN0eCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzXG4gICAgfTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwYWdlUHJvcHMpO1xuICAgIH1cbn1cbigoKT0+e1xuICAgIEFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xufSkoKTtcbigoKT0+e1xuICAgIEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJBcHAiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiXyIsIl91dGlscyIsImFwcEdldEluaXRpYWxQcm9wcyIsInBhcmFtIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react?1189":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbmMtY2FsYy1yZWFjdC8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janM/MTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fID0gZXhwb3J0cy5faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();