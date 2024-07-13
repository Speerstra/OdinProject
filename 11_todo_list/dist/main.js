/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/BalooBhaijaan2-Regular.ttf */ "./src/assets/fonts/BalooBhaijaan2-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* Colors */
  --color-purple: #241282;
  --color-turquoise: #7fbaba;
  --color-turquoise-darker: #659b9b;
  --color-lavender: #c1b2d9;
  --color-white-light: #f0f5f9;
  --color-white-darker: #edf2f7;
  --color-grey: rgb(209, 205, 219);
  --color-dark-blue: #05212c;

  /* Padding, misc formatting */
  --padding-body: 2rem;
  --padding-button: 0.5rem 1.5rem;
  --border-radius: 8px;
}

/* Text */
@font-face {
  font-family: "BalooBhaijaan2";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("ttf");
  font-weight: 400;
  font-style: normal;
}

body {
  margin: 0;
  font-family: "BalooBhaijaan2", sans-serif;
}

h1 {
  font-weight: 600;
  color: var(--color-purple);
}

h3 {
  font-weight: 600;
  color: var(--color-purple);
  margin: 0;
}

/* -------------------------------------------- */
/* ------------------ LAYOUT ------------------ */
/* -------------------------------------------- */

#layout {
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
}

#layout,
.header {
  background-color: var(--color-cool-white-light);
  padding: var(--padding-body);
  padding-bottom: 0;
}

/* ---------------------------------------------- */
/* ------------------ PROJECTS ------------------ */
/* ---------------------------------------------- */

/* Project card */
.project {
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px var(--color-grey);
  background-color: var(--color-white-darker);
}

/* Header */
.project-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* Add project form */
#add-project-input {
  background-color: transparent;
  border: none;
  color: var(--color-dark-blue);
}

#add-project-input::placeholder {
  color: var(--color-dark-blue);
}

/* #add-project-input:focus {
        outline-color: var(--color-purple);
} */

/* Delete project button */
.delete-project-button {
  background-color: transparent;
  color: var(--color-purple);
  border: none;
  cursor: pointer;
}

.delete-project-button:hover {
  color: var(--color-lavender);
}

/* ------------------------------------------- */
/* ------------------ TASKS ------------------ */
/* ------------------------------------------- */

/* Task List */
.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

/* Task checkbox */
.task-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--color-turquoise);
  margin: 0;
  padding: 0;
}

.task-checkbox:checked {
  background-color: var(--color-turquoise);
}

/* Task name */
.task-name {
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.2 2rem;
  width: auto;
  font-size: 1.1rem;
  color: var(--color-dark-blue);
}

.task-name:hover {
  background-color: var(--color-turquoise);
}

.task-name:focus {
  outline-color: #58888f;
}

.task-is-complete {
  text-decoration: line-through;
  color: var(--color-turquoise-darker);
  text-decoration-color: var(--color-turquoise-darker);
}

/* Due date form */
.due-date-input {
  margin-right: 10px;
}

/* Delete task button */
.delete-task-button {
  background-color: transparent;
  border: none;
  align-self: flex-end;
}

/* Add task form */
.add-task-container {
  display: flex;
  flex-direction: row;
}

.task-form {
  background-color: transparent;
  border: none;
  color: black;
}

.task-form:focus {
  background-color: #7fbaba;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,uBAAuB;EACvB,0BAA0B;EAC1B,iCAAiC;EACjC,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,gCAAgC;EAChC,0BAA0B;;EAE1B,6BAA6B;EAC7B,oBAAoB;EACpB,+BAA+B;EAC/B,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,6BAA6B;EAC7B,0DAAoE;EACpE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,SAAS;AACX;;AAEA,iDAAiD;AACjD,iDAAiD;AACjD,iDAAiD;;AAEjD;EACE,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;;EAEE,+CAA+C;EAC/C,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,mDAAmD;AACnD,mDAAmD;AACnD,mDAAmD;;AAEnD,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,uCAAuC;EACvC,2CAA2C;AAC7C;;AAEA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,qBAAqB;AACrB;EACE,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;GAEG;;AAEH,0BAA0B;AAC1B;EACE,6BAA6B;EAC7B,0BAA0B;EAC1B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,gDAAgD;AAChD,gDAAgD;AAChD,gDAAgD;;AAEhD,cAAc;AACd;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,wCAAwC;EACxC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,cAAc;AACd;EACE,6BAA6B;EAC7B,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,oDAAoD;AACtD;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA,uBAAuB;AACvB;EACE,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[":root {\n  /* Colors */\n  --color-purple: #241282;\n  --color-turquoise: #7fbaba;\n  --color-turquoise-darker: #659b9b;\n  --color-lavender: #c1b2d9;\n  --color-white-light: #f0f5f9;\n  --color-white-darker: #edf2f7;\n  --color-grey: rgb(209, 205, 219);\n  --color-dark-blue: #05212c;\n\n  /* Padding, misc formatting */\n  --padding-body: 2rem;\n  --padding-button: 0.5rem 1.5rem;\n  --border-radius: 8px;\n}\n\n/* Text */\n@font-face {\n  font-family: \"BalooBhaijaan2\";\n  src: url(\"../assets/fonts/BalooBhaijaan2-Regular.ttf\") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: \"BalooBhaijaan2\", sans-serif;\n}\n\nh1 {\n  font-weight: 600;\n  color: var(--color-purple);\n}\n\nh3 {\n  font-weight: 600;\n  color: var(--color-purple);\n  margin: 0;\n}\n\n/* -------------------------------------------- */\n/* ------------------ LAYOUT ------------------ */\n/* -------------------------------------------- */\n\n#layout {\n  width: 100vw;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n\n#layout,\n.header {\n  background-color: var(--color-cool-white-light);\n  padding: var(--padding-body);\n  padding-bottom: 0;\n}\n\n/* ---------------------------------------------- */\n/* ------------------ PROJECTS ------------------ */\n/* ---------------------------------------------- */\n\n/* Project card */\n.project {\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px var(--color-grey);\n  background-color: var(--color-white-darker);\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/* Add project form */\n#add-project-input {\n  background-color: transparent;\n  border: none;\n  color: var(--color-dark-blue);\n}\n\n#add-project-input::placeholder {\n  color: var(--color-dark-blue);\n}\n\n/* #add-project-input:focus {\n        outline-color: var(--color-purple);\n} */\n\n/* Delete project button */\n.delete-project-button {\n  background-color: transparent;\n  color: var(--color-purple);\n  border: none;\n  cursor: pointer;\n}\n\n.delete-project-button:hover {\n  color: var(--color-lavender);\n}\n\n/* ------------------------------------------- */\n/* ------------------ TASKS ------------------ */\n/* ------------------------------------------- */\n\n/* Task List */\n.task-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n}\n\n/* Task checkbox */\n.task-checkbox {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid var(--color-turquoise);\n  margin: 0;\n  padding: 0;\n}\n\n.task-checkbox:checked {\n  background-color: var(--color-turquoise);\n}\n\n/* Task name */\n.task-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 0.2 2rem;\n  width: auto;\n  font-size: 1.1rem;\n  color: var(--color-dark-blue);\n}\n\n.task-name:hover {\n  background-color: var(--color-turquoise);\n}\n\n.task-name:focus {\n  outline-color: #58888f;\n}\n\n.task-is-complete {\n  text-decoration: line-through;\n  color: var(--color-turquoise-darker);\n  text-decoration-color: var(--color-turquoise-darker);\n}\n\n/* Due date form */\n.due-date-input {\n  margin-right: 10px;\n}\n\n/* Delete task button */\n.delete-task-button {\n  background-color: transparent;\n  border: none;\n  align-self: flex-end;\n}\n\n/* Add task form */\n.add-task-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.task-form {\n  background-color: transparent;\n  border: none;\n  color: black;\n}\n\n.task-form:focus {\n  background-color: #7fbaba;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList.js */ "./src/scripts/projectList.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/scripts/storage.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements.js */ "./src/scripts/domElements.js");




class App {
  constructor() {
    this.projectList = new _projectList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.domElements = new _domElements_js__WEBPACK_IMPORTED_MODULE_2__["default"](
      this.addProject.bind(this),
      this.addTaskToProject.bind(this),
      this.deleteProject.bind(this),
      this.deleteTaskFromProject.bind(this),
      this.toggleTaskComplete.bind(this),
      this.updateTaskName.bind(this),
      this.updateTaskDueDate.bind(this)
    );

    this.initializeApp();
  }

  initializeApp() {
    this.loadProjects();
    this.domElements.handleAddProjectForm();
    this.domElements.renderProjects(this.projectList.projects);
  }

  loadProjects() {
    this.projectList.projects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
  }

  addProject(projectName) {
    this.projectList.addProject(projectName);
    this.saveProjectsAndRender();
  }

  deleteProject(projectId) {
    this.projectList.deleteProject(projectId);
    this.saveProjectsAndRender();
  }

  addTaskToProject(projectId, taskName) {
    const project = this.projectList.findProject(projectId);
    if (project) {
      project.addTask(taskName);
      this.saveProjectsAndRender();
    }
  }

  deleteTaskFromProject(projectId, taskId) {
    const project = this.projectList.findProject(projectId);
    if (project) {
      project.deleteTask(taskId);
      this.saveProjectsAndRender();
    }
  }

  toggleTaskComplete(projectId, taskId) {
    const task = this.projectList.findTask(projectId, taskId);
    if (task) {
      task.toggleComplete();
      this.saveProjectsAndRender();
    }
  }

  updateTaskName(projectId, taskId, newName) {
    const task = this.projectList.findTask(projectId, taskId);
    if (task) {
      task.updateName(newName);
      this.saveProjectsAndRender();
    }
  }

  updateTaskDueDate(projectId, taskId, newDueDate) {
    const task = this.projectList.findTask(projectId, taskId);
    if (task) {
      task.updateDueDate(newDueDate);
      this.saveProjectsAndRender();
    }
  }

  saveProjects() {
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(this.projectList.projects);
  }

  saveProjectsAndRender() {
    this.saveProjects();
    this.domElements.renderProjects(this.projectList.projects);
  }
}


/***/ }),

/***/ "./src/scripts/domElements.js":
/*!************************************!*\
  !*** ./src/scripts/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMElements)
/* harmony export */ });
class DOMElements {
  constructor(
    addProjectCallback,
    addTaskCallback,
    deleteProjectCallback,
    deleteTaskCallback,
    toggleTaskCallback,
    updateTaskNameCallback,
    updateTaskDueDateCallback
  ) {
    this.addProjectCallback = addProjectCallback;
    this.addTaskCallback = addTaskCallback;
    this.deleteProjectCallback = deleteProjectCallback;
    this.deleteTaskCallback = deleteTaskCallback;
    this.toggleTaskCallback = toggleTaskCallback;
    this.updateTaskNameCallback = updateTaskNameCallback;
    this.updateTaskDueDateCallback = updateTaskDueDateCallback;
  }

  renderProjects(projects) {
    const projectListElement = document.getElementById("project-list");
    this.clearElement(projectListElement);

    projects.forEach((project) => {
      const projectElement = this.createProjectElement(project);
      projectListElement.appendChild(projectElement);
    });
  }

  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  handleKeyDown(event, callback, currentValue, originalValue) {
    if (event.key !== "Enter") return;

    const newValue = currentValue.trim();
    if (newValue && newValue !== originalValue) {
      callback(newValue);
    }
    event.target.blur();
  }

  handleAddProjectForm() {
    const input = document.getElementById("add-project-input");
    input.placeholder = "Start a new project...";
    input.focus();
    input.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newName) => {
          this.addProjectCallback(newName);
          input.value = "";
        },
        input.value,
        ""
      );
    });
  }

  createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.setAttribute("data-project-id", project.id);
    projectElement.setAttribute("data-project-name", project.name);

    const projectHeaderElement = document.createElement("div");
    projectHeaderElement.classList.add("project-header");

    const projectNameElement = document.createElement("h3");
    projectNameElement.classList.add("project-name");
    projectNameElement.textContent = project.name;
    projectHeaderElement.appendChild(projectNameElement);

    const deleteProjectButton = this.createDeleteProjectButton(project);
    projectHeaderElement.appendChild(deleteProjectButton);

    projectElement.appendChild(projectHeaderElement);

    const taskListElement = this.createTaskListElement(project);
    projectElement.appendChild(taskListElement);

    const addTaskForm = this.createAddTaskForm(project);
    projectElement.appendChild(addTaskForm);

    return projectElement;
  }

  createDeleteProjectButton(project) {
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;

    deleteProjectButton.classList.add("delete-project-button");
    deleteProjectButton.addEventListener("click", () => {
      this.deleteProjectCallback(project.id);
    });

    return deleteProjectButton;
  }

  createTaskListElement(project) {
    const ul = document.createElement("ul");
    ul.classList.add("task-list");
    project.tasks.forEach((task) => {
      const li = this.createTaskListItem(project.id, task);
      li.classList.add("task");
      ul.appendChild(li);
    });
    return ul;
  }

  createTaskListItem(projectId, task) {
    const li = document.createElement("li");

    const taskCheckbox = this.createTaskCheckbox(projectId, task);
    taskCheckbox.classList.add("task-checkbox");
    li.append(taskCheckbox);

    const taskNameInput = this.createTaskNameInput(projectId, task);
    li.appendChild(taskNameInput);

    const dueDateElement = this.createDueDateElement(projectId, task);
    li.appendChild(dueDateElement);

    const deleteTaskButton = this.createDeleteTaskButton(projectId, task.id);
    li.appendChild(deleteTaskButton);

    return li;
  }

  createTaskCheckbox(projectId, task) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isComplete;
    checkbox.addEventListener("change", () => {
      this.toggleTaskCallback(projectId, task.id);
    });
    return checkbox;
  }

  createTaskNameInput(projectId, task) {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = task.name;
    nameInput.classList.add("task-name");
    nameInput.disabled = task.isComplete;

    if (task.isComplete) {
      nameInput.classList.add("task-is-complete");
    }

    nameInput.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newName) => {
          this.updateTaskNameCallback(projectId, task.id, newName);
        },
        nameInput.value,
        task.name
      );
    });

    return nameInput;
  }

  createDueDateElement(projectId, task) {
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");

    if (task.dueDate) {
      const { dateText, dateInput } = this.createDateElements(
        task.dueDate,
        task.isComplete
      );

      dateText.addEventListener("click", () =>
        this.toggleDateInput(dateText, dateInput)
      );
      dateInput.addEventListener("blur", () =>
        this.handleDateChange(dateText, dateInput, projectId, task)
      );
      dateInput.addEventListener("change", () =>
        this.handleDateChange(dateText, dateInput, projectId, task)
      );

      dateContainer.appendChild(dateText);
      dateContainer.appendChild(dateInput);
    } else {
      const dateInput = this.createDateInputElement(
        task.dueDate,
        task.isComplete
      );
      dateInput.addEventListener("change", () =>
        this.updateDueDate(projectId, task, dateInput.value)
      );
      dateContainer.appendChild(dateInput);
    }

    console.log(task.dueDate); // Check if dueDate is being logged correctly

    return dateContainer;
  }

  createDateElements(dueDate, isComplete) {
    const dateText = document.createElement("span");
    dateText.innerHTML = new Date(dueDate).toLocaleDateString();
    dateText.classList.add("date-text");

    const dateInput = this.createDateInputElement(dueDate, isComplete);
    dateInput.style.display = "none";

    return { dateText, dateInput };
  }

  createDateInputElement(dueDate, isComplete) {
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = dueDate || "";
    dateInput.classList.add("due-date-input");
    dateInput.disabled = isComplete;
    return dateInput;
  }

  toggleDateInput(dateText, dateInput) {
    dateText.style.display = "none";
    dateInput.style.display = "inline";
    dateInput.focus();
  }

  handleDateChange(dateText, dateInput, projectId, task) {
    if (dateInput.value !== task.dueDate) {
      this.updateDueDate(projectId, task, dateInput.value);
      dateText.innerHTML = new Date(dateInput.value).toLocaleDateString();
    }
    dateText.style.display = "inline";
    dateInput.style.display = "none";
  }

  updateDueDate(projectId, task, dueDate) {
    this.updateTaskDueDateCallback(projectId, task.id, dueDate);
    task.dueDate = dueDate;
    this.saveProjectsToLocalStorage();
  }

  createDeleteTaskButton(projectId, taskId) {
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
    deleteTaskButton.classList.add("delete-task-button");
    deleteTaskButton.addEventListener("click", () => {
      this.deleteTaskCallback(projectId, taskId);
    });
    return deleteTaskButton;
  }

  createAddTaskForm(project) {
    const addTaskElement = document.createElement("div");
    addTaskElement.classList.add("add-task-container");

    const plusIcon = document.createElement("div");
    plusIcon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="4" height="16" rx="2" ry="2" fill="currentColor"/>
    <rect x="4" y="10" width="16" height="4" rx="2" ry="2" fill="currentColor"/>
</svg>
    `;
    addTaskElement.appendChild(plusIcon);

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add a task";
    input.classList.add("task-form");
    form.appendChild(input);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskName = input.value.trim();
      if (taskName) {
        this.addTaskCallback(project.id, taskName);
        input.value = "";
        input.blur();
      }
    });
    addTaskElement.appendChild(form);
    return addTaskElement;
  }
}


/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");
// project.js



class Project {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.tasks = [];
    }

    addTask(taskName) {
        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName);
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
    
}


/***/ }),

/***/ "./src/scripts/projectList.js":
/*!************************************!*\
  !*** ./src/scripts/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");


class ProjectList {
  constructor() {
    this.projects = [];
  }

  findProject(projectId) {
    const project = this.projects.find(
      (project) => project.id === parseInt(projectId)
    );
    if (!project) {
      throw new Error(`Project with id ${projectId} not found.`);
    }

    return project;
  }

  findTask(projectId, taskId) {
    const project = this.findProject(projectId);
    const task = project.tasks.find((task) => task.id === taskId);

    if (!task) {
      throw new Error(`Task with id ${taskId} not found.`);
    }

    return task;
  }

  addProject(projectName) {
    const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
    this.projects.push(project);
  }

  deleteProject(projectId) {
    this.projects = this.projects.filter(
      (project) => project.id !== parseInt(projectId)
    );
  }
}


/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");



class Storage {
  static saveProjects(projects) {
    const projectsData = projects.map((project) => ({
      id: project.id,
      name: project.name,
      tasks: project.tasks.map((task) => ({
        id: task.id,
        name: task.name,
        isComplete: task.isComplete, // Ensure the key name matches Task class
        dueDate: task.dueDate,
      })),
    }));

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  static getProjects() {
    const projectsData = JSON.parse(localStorage.getItem("projects")) || [];
    return projectsData.map((projectData) => {
      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectData.name);
      project.id = projectData.id;
      project.tasks = projectData.tasks.map((taskData) => {
        const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskData.name);
        task.id = taskData.id;
        task.isComplete = taskData.isComplete;
        task.dueDate = taskData.dueDate;
        return task;
      });
      return project;
    });
  }
}


/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name) {
    this.id = new Date().getTime();
    this.name = name;
    this.dueDate = "";
    this.isComplete = false;
  }

  updateName(newName) {
    this.name = newName;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}


/***/ }),

/***/ "./src/assets/fonts/BalooBhaijaan2-Regular.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/BalooBhaijaan2-Regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46f380291a0a191dbe7e.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/scripts/app.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");



const app = new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.initializeApp();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0c7O0FBRTlCLGdCQUFnQiwrQ0FBRztBQUNuQixvQiIsInNvdXJjZXMiOlsid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQmFsb29CaGFpamFhbjItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogQ29sb3JzICovXG4gIC0tY29sb3ItcHVycGxlOiAjMjQxMjgyO1xuICAtLWNvbG9yLXR1cnF1b2lzZTogIzdmYmFiYTtcbiAgLS1jb2xvci10dXJxdW9pc2UtZGFya2VyOiAjNjU5YjliO1xuICAtLWNvbG9yLWxhdmVuZGVyOiAjYzFiMmQ5O1xuICAtLWNvbG9yLXdoaXRlLWxpZ2h0OiAjZjBmNWY5O1xuICAtLWNvbG9yLXdoaXRlLWRhcmtlcjogI2VkZjJmNztcbiAgLS1jb2xvci1ncmV5OiByZ2IoMjA5LCAyMDUsIDIxOSk7XG4gIC0tY29sb3ItZGFyay1ibHVlOiAjMDUyMTJjO1xuXG4gIC8qIFBhZGRpbmcsIG1pc2MgZm9ybWF0dGluZyAqL1xuICAtLXBhZGRpbmctYm9keTogMnJlbTtcbiAgLS1wYWRkaW5nLWJ1dHRvbjogMC41cmVtIDEuNXJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi8qIFRleHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCYWxvb0JoYWlqYWFuMlwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb29CaGFpamFhbjJcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tIExBWU9VVCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNsYXlvdXQge1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jbGF5b3V0LFxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvb2wtd2hpdGUtbGlnaHQpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJvZHkpO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBQcm9qZWN0IGNhcmQgKi9cbi5wcm9qZWN0IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCB2YXIoLS1jb2xvci1ncmV5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcbn1cblxuLyogSGVhZGVyICovXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIEFkZCBwcm9qZWN0IGZvcm0gKi9cbiNhZGQtcHJvamVjdC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUpO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XG59XG5cbi8qICNhZGQtcHJvamVjdC1pbnB1dDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XG59ICovXG5cbi8qIERlbGV0ZSBwcm9qZWN0IGJ1dHRvbiAqL1xuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFRhc2sgTGlzdCAqL1xuLnRhc2stbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuLyogVGFzayBjaGVja2JveCAqL1xuLnRhc2stY2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG59XG5cbi8qIFRhc2sgbmFtZSAqL1xuLnRhc2stbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAwLjIgMnJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcbn1cblxuLnRhc2stbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG59XG5cbi50YXNrLW5hbWU6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjNTg4ODhmO1xufVxuXG4udGFzay1pcy1jb21wbGV0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XG59XG5cbi8qIER1ZSBkYXRlIGZvcm0gKi9cbi5kdWUtZGF0ZS1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyogRGVsZXRlIHRhc2sgYnV0dG9uICovXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi8qIEFkZCB0YXNrIGZvcm0gKi9cbi5hZGQtdGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGFzay1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGFzay1mb3JtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmYmFiYTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQywwQkFBMEI7O0VBRTFCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLG9CQUFvQjtBQUN0Qjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSw2QkFBNkI7RUFDN0IsMERBQW9FO0VBQ3BFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsU0FBUztBQUNYOztBQUVBLGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsaURBQWlEOztBQUVqRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsbURBQW1EOztBQUVuRCxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMsMkNBQTJDO0FBQzdDOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztHQUVHOztBQUVILDBCQUEwQjtBQUMxQjtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7O0FBRWhELGNBQWM7QUFDZDtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBLGNBQWM7QUFDZDtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsb0RBQW9EO0FBQ3REOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogQ29sb3JzICovXFxuICAtLWNvbG9yLXB1cnBsZTogIzI0MTI4MjtcXG4gIC0tY29sb3ItdHVycXVvaXNlOiAjN2ZiYWJhO1xcbiAgLS1jb2xvci10dXJxdW9pc2UtZGFya2VyOiAjNjU5YjliO1xcbiAgLS1jb2xvci1sYXZlbmRlcjogI2MxYjJkOTtcXG4gIC0tY29sb3Itd2hpdGUtbGlnaHQ6ICNmMGY1Zjk7XFxuICAtLWNvbG9yLXdoaXRlLWRhcmtlcjogI2VkZjJmNztcXG4gIC0tY29sb3ItZ3JleTogcmdiKDIwOSwgMjA1LCAyMTkpO1xcbiAgLS1jb2xvci1kYXJrLWJsdWU6ICMwNTIxMmM7XFxuXFxuICAvKiBQYWRkaW5nLCBtaXNjIGZvcm1hdHRpbmcgKi9cXG4gIC0tcGFkZGluZy1ib2R5OiAycmVtO1xcbiAgLS1wYWRkaW5nLWJ1dHRvbjogMC41cmVtIDEuNXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4vKiBUZXh0ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJhbG9vQmhhaWphYW4yXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvQmFsb29CaGFpamFhbjItUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkJhbG9vQmhhaWphYW4yXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIExBWU9VVCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNsYXlvdXQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbGF5b3V0LFxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29vbC13aGl0ZS1saWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJvZHkpO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gUFJPSkVDVFMgLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIFByb2plY3QgY2FyZCAqL1xcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEFkZCBwcm9qZWN0IGZvcm0gKi9cXG4jYWRkLXByb2plY3QtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcXG59XFxuXFxuLyogI2FkZC1wcm9qZWN0LWlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxufSAqL1xcblxcbi8qIERlbGV0ZSBwcm9qZWN0IGJ1dHRvbiAqL1xcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBUYXNrIExpc3QgKi9cXG4udGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLyogVGFzayBjaGVja2JveCAqL1xcbi50YXNrLWNoZWNrYm94IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG59XFxuXFxuLyogVGFzayBuYW1lICovXFxuLnRhc2stbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC4yIDJyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxufVxcblxcbi50YXNrLW5hbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG59XFxuXFxuLnRhc2stbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lLWNvbG9yOiAjNTg4ODhmO1xcbn1cXG5cXG4udGFzay1pcy1jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UtZGFya2VyKTtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XFxufVxcblxcbi8qIER1ZSBkYXRlIGZvcm0gKi9cXG4uZHVlLWRhdGUtaW5wdXQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBEZWxldGUgdGFzayBidXR0b24gKi9cXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi8qIEFkZCB0YXNrIGZvcm0gKi9cXG4uYWRkLXRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFzay1mb3JtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmJhYmE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0LmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudHMgZnJvbSBcIi4vZG9tRWxlbWVudHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMgPSBuZXcgRE9NRWxlbWVudHMoXG4gICAgICB0aGlzLmFkZFByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuYWRkVGFza1RvUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5kZWxldGVQcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLmRlbGV0ZVRhc2tGcm9tUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy50b2dnbGVUYXNrQ29tcGxldGUuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMudXBkYXRlVGFza05hbWUuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGUuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLmhhbmRsZUFkZFByb2plY3RGb3JtKCk7XG4gICAgdGhpcy5kb21FbGVtZW50cy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxuXG4gIGxvYWRQcm9qZWN0cygpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LnByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrTmFtZSk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGUocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza05hbWUocHJvamVjdElkLCB0YXNrSWQsIG5ld05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudXBkYXRlTmFtZShuZXdOYW1lKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza0R1ZURhdGUocHJvamVjdElkLCB0YXNrSWQsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudXBkYXRlRHVlRGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVByb2plY3RzKCkge1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICB9XG5cbiAgc2F2ZVByb2plY3RzQW5kUmVuZGVyKCkge1xuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgdGhpcy5kb21FbGVtZW50cy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRWxlbWVudHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRQcm9qZWN0Q2FsbGJhY2ssXG4gICAgYWRkVGFza0NhbGxiYWNrLFxuICAgIGRlbGV0ZVByb2plY3RDYWxsYmFjayxcbiAgICBkZWxldGVUYXNrQ2FsbGJhY2ssXG4gICAgdG9nZ2xlVGFza0NhbGxiYWNrLFxuICAgIHVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2ssXG4gICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuICApIHtcbiAgICB0aGlzLmFkZFByb2plY3RDYWxsYmFjayA9IGFkZFByb2plY3RDYWxsYmFjaztcbiAgICB0aGlzLmFkZFRhc2tDYWxsYmFjayA9IGFkZFRhc2tDYWxsYmFjaztcbiAgICB0aGlzLmRlbGV0ZVByb2plY3RDYWxsYmFjayA9IGRlbGV0ZVByb2plY3RDYWxsYmFjaztcbiAgICB0aGlzLmRlbGV0ZVRhc2tDYWxsYmFjayA9IGRlbGV0ZVRhc2tDYWxsYmFjaztcbiAgICB0aGlzLnRvZ2dsZVRhc2tDYWxsYmFjayA9IHRvZ2dsZVRhc2tDYWxsYmFjaztcbiAgICB0aGlzLnVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2sgPSB1cGRhdGVUYXNrTmFtZUNhbGxiYWNrO1xuICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjayA9IHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2s7XG4gIH1cblxuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgIHRoaXMuY2xlYXJFbGVtZW50KHByb2plY3RMaXN0RWxlbWVudCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IHRoaXMuY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG4gICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCwgY2FsbGJhY2ssIGN1cnJlbnRWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUudHJpbSgpO1xuICAgIGlmIChuZXdWYWx1ZSAmJiBuZXdWYWx1ZSAhPT0gb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgY2FsbGJhY2sobmV3VmFsdWUpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQuYmx1cigpO1xuICB9XG5cbiAgaGFuZGxlQWRkUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWlucHV0XCIpO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJTdGFydCBhIG5ldyBwcm9qZWN0Li4uXCI7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKFxuICAgICAgICBlLFxuICAgICAgICAobmV3TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkUHJvamVjdENhbGxiYWNrKG5ld05hbWUpO1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQudmFsdWUsXG4gICAgICAgIFwiXCJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmlkKTtcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSB0aGlzLmNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCk7XG4gICAgcHJvamVjdEhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyRWxlbWVudCk7XG5cbiAgICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrTGlzdEVsZW1lbnQpO1xuXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSB0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3QpO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrKHByb2plY3QuaWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbGV0ZVByb2plY3RCdXR0b247XG4gIH1cblxuICBjcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IHRoaXMuY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3QuaWQsIHRhc2spO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVsO1xuICB9XG5cbiAgY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gdGhpcy5jcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKTtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgbGkuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gdGhpcy5jcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzayk7XG4gICAgbGkuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IHRoaXMuY3JlYXRlRHVlRGF0ZUVsZW1lbnQocHJvamVjdElkLCB0YXNrKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudCk7XG5cbiAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICByZXR1cm4gbGk7XG4gIH1cblxuICBjcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH1cblxuICBjcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IHRhc2submFtZTtcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuZGlzYWJsZWQgPSB0YXNrLmlzQ29tcGxldGU7XG5cbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staXMtY29tcGxldGVcIik7XG4gICAgfVxuXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oXG4gICAgICAgIGUsXG4gICAgICAgIChuZXdOYW1lKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVUYXNrTmFtZUNhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCwgbmV3TmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFzay5uYW1lXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5hbWVJbnB1dDtcbiAgfVxuXG4gIGNyZWF0ZUR1ZURhdGVFbGVtZW50KHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuXG4gICAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgICAgY29uc3QgeyBkYXRlVGV4dCwgZGF0ZUlucHV0IH0gPSB0aGlzLmNyZWF0ZURhdGVFbGVtZW50cyhcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLmlzQ29tcGxldGVcbiAgICAgICk7XG5cbiAgICAgIGRhdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgICB0aGlzLnRvZ2dsZURhdGVJbnB1dChkYXRlVGV4dCwgZGF0ZUlucHV0KVxuICAgICAgKTtcbiAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PlxuICAgICAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UoZGF0ZVRleHQsIGRhdGVJbnB1dCwgcHJvamVjdElkLCB0YXNrKVxuICAgICAgKTtcbiAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0ZUNoYW5nZShkYXRlVGV4dCwgZGF0ZUlucHV0LCBwcm9qZWN0SWQsIHRhc2spXG4gICAgICApO1xuXG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVUZXh0KTtcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0ZUlucHV0ID0gdGhpcy5jcmVhdGVEYXRlSW5wdXRFbGVtZW50KFxuICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZVxuICAgICAgKTtcbiAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgICAgIHRoaXMudXBkYXRlRHVlRGF0ZShwcm9qZWN0SWQsIHRhc2ssIGRhdGVJbnB1dC52YWx1ZSlcbiAgICAgICk7XG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGFzay5kdWVEYXRlKTsgLy8gQ2hlY2sgaWYgZHVlRGF0ZSBpcyBiZWluZyBsb2dnZWQgY29ycmVjdGx5XG5cbiAgICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGNyZWF0ZURhdGVFbGVtZW50cyhkdWVEYXRlLCBpc0NvbXBsZXRlKSB7XG4gICAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkYXRlVGV4dC5pbm5lckhUTUwgPSBuZXcgRGF0ZShkdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS10ZXh0XCIpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gdGhpcy5jcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpO1xuICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICByZXR1cm4geyBkYXRlVGV4dCwgZGF0ZUlucHV0IH07XG4gIH1cblxuICBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlIHx8IFwiXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1pbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuZGlzYWJsZWQgPSBpc0NvbXBsZXRlO1xuICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gIH1cblxuICB0b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dCkge1xuICAgIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgZGF0ZUlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVEYXRlQ2hhbmdlKGRhdGVUZXh0LCBkYXRlSW5wdXQsIHByb2plY3RJZCwgdGFzaykge1xuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgIT09IHRhc2suZHVlRGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVEdWVEYXRlKHByb2plY3RJZCwgdGFzaywgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgIGRhdGVUZXh0LmlubmVySFRNTCA9IG5ldyBEYXRlKGRhdGVJbnB1dC52YWx1ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfVxuICAgIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB1cGRhdGVEdWVEYXRlKHByb2plY3RJZCwgdGFzaywgZHVlRGF0ZSkge1xuICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIGR1ZURhdGUpO1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgY3JlYXRlRGVsZXRlVGFza0J1dHRvbihwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci14XCI+XG4gICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiPjwvbGluZT5cbiAgICAgIDxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgIDwvc3ZnPmA7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlVGFza0J1dHRvbjtcbiAgfVxuXG4gIGNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3QpIHtcbiAgICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbHVzSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHJlY3QgeD1cIjEwXCIgeT1cIjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMlwiIHJ5PVwiMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgPHJlY3QgeD1cIjRcIiB5PVwiMTBcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIHJ5PVwiMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG48L3N2Zz5cbiAgICBgO1xuICAgIGFkZFRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiQWRkIGEgdGFza1wiO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy5hZGRUYXNrQ2FsbGJhY2socHJvamVjdC5pZCwgdGFza05hbWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlucHV0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gYWRkVGFza0VsZW1lbnQ7XG4gIH1cbn1cbiIsIi8vIHByb2plY3QuanNcblxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIH1cbiAgICBcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBmaW5kUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZClcbiAgICApO1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9qZWN0IHdpdGggaWQgJHtwcm9qZWN0SWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIGZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhc2sgd2l0aCBpZCAke3Rhc2tJZH0gbm90IGZvdW5kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gcGFyc2VJbnQocHJvamVjdElkKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XG4gICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgIHRhc2tzOiBwcm9qZWN0LnRhc2tzLm1hcCgodGFzaykgPT4gKHtcbiAgICAgICAgaWQ6IHRhc2suaWQsXG4gICAgICAgIG5hbWU6IHRhc2submFtZSxcbiAgICAgICAgaXNDb21wbGV0ZTogdGFzay5pc0NvbXBsZXRlLCAvLyBFbnN1cmUgdGhlIGtleSBuYW1lIG1hdGNoZXMgVGFzayBjbGFzc1xuICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXG4gICAgICB9KSksXG4gICAgfSkpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICAgIHJldHVybiBwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0RGF0YSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgcHJvamVjdC5pZCA9IHByb2plY3REYXRhLmlkO1xuICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCgodGFza0RhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICB0YXNrLmlkID0gdGFza0RhdGEuaWQ7XG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRhc2tEYXRhLmlzQ29tcGxldGU7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IHRhc2tEYXRhLmR1ZURhdGU7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBcIlwiO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlTmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIHVwZGF0ZUR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXRpYWxpemVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=