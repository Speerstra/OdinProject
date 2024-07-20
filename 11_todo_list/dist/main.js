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
  --color-purple-muted: #564e7c;
  --color-turquoise: #7fbaba;
  --color-turquoise-darker: #659b9b;
  --color-lavender: #c1b2d9;
  --color-white: #f6f6f6;
  --color-white-light: #f0f5f9;
  --color-white-dark: #edf2f7;
  --color-white-darker: #d0deed;
  --color-grey: rgb(209, 205, 219);
  --color-dark-blue: #05212c;
  --color-dark-blue-muted: #6c7a80;

  /* Padding, misc formatting */
  --padding-body: 2rem;
  --padding-button: 0.5rem 1.5rem;
  --border-radius: 8px;
  --padding-task: 0.2rem;
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
  color: var(--color-white);
}

h3,
#add-project-input,
#add-project-input::placeholder {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-purple);
  margin: 0;
}

#add-project-input::placeholder {
  color: var(--color-purple-muted);
}

/* -------------------------------------------- */
/* -------------- page layout ----------------- */
/* -------------------------------------------- */

#page-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}

.header {
  background-color: var(--color-purple-muted);
  padding: 0 var(--padding-body);
}

.footer {
  background-color: var(--color-purple-muted);
  color: var(--color-white-light);
  padding: 1rem;
  text-align: center;
}

.github-logo {
  height: 1rem;
  width: auto;
  margin: 0 0.5rem;
}

.footer > a {
  text-decoration: none;
  color: var(--color-white-light);
}
/* -------------------------------------------- */
/* ------------------ content ------------------ */
/* -------------------------------------------- */

#content {
  width: 100vw;
  box-sizing: border-box;
}

#content {
  background-color: var(--color-cool-white-light);
  padding: var(--padding-body);
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
  background-color: var(--color-white-dark);
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
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 3rem;
}

#add-project-input:focus {
  outline: none;
}

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
  border-radius: var(--border-radius);
  padding: 0.2rem;
}

.task:hover {
  background-color: var(--color-white-darker);
}

/* Task checkbox */
.task-checkbox {
  appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--color-turquoise);
  margin: 0 0.7rem 0 0;
  padding: 0;
  flex-shrink: 0;
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
  flex-grow: 1;
  width: auto;
  font-size: 1.1rem;
  color: var(--color-dark-blue);
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
  justify-self: flex-end;
  margin-left: auto;
  visibility: hidden; /* Hide the button by default */
}

.task:hover .delete-task-button {
  visibility: visible; /* Show the button when hovering over .task */
}

/* Add task form */
.add-task-container {
  display: flex;
  align-items: center;
  padding: var(--padding-task);
  width: 100%;
  border-radius: var(--border-radius);
}

.add-task-container:hover {
  background-color: var(--color-white-darker);
}

.add-task-plus-icon {
  appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0.7rem 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--color-turquoise);
}

.add-task-plus-icon svg {
  width: 100%;
  height: 100%;
}

.task-form {
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  flex-grow: 1;
  width: auto;
  font-size: 1rem;
  color: var(--color-dark-blue-muted);
}

.task-form:focus {
  outline: none;
}

.task-form::placeholder {
  color: var(--color-dark-blue-muted);
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Colors */\n  --color-purple: #241282;\n  --color-purple-muted: #564e7c;\n  --color-turquoise: #7fbaba;\n  --color-turquoise-darker: #659b9b;\n  --color-lavender: #c1b2d9;\n  --color-white: #f6f6f6;\n  --color-white-light: #f0f5f9;\n  --color-white-dark: #edf2f7;\n  --color-white-darker: #d0deed;\n  --color-grey: rgb(209, 205, 219);\n  --color-dark-blue: #05212c;\n  --color-dark-blue-muted: #6c7a80;\n\n  /* Padding, misc formatting */\n  --padding-body: 2rem;\n  --padding-button: 0.5rem 1.5rem;\n  --border-radius: 8px;\n  --padding-task: 0.2rem;\n}\n\n/* Text */\n@font-face {\n  font-family: \"BalooBhaijaan2\";\n  src: url(\"../assets/fonts/BalooBhaijaan2-Regular.ttf\") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: \"BalooBhaijaan2\", sans-serif;\n}\n\nh1 {\n  font-weight: 600;\n  color: var(--color-white);\n}\n\nh3,\n#add-project-input,\n#add-project-input::placeholder {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-purple);\n  margin: 0;\n}\n\n#add-project-input::placeholder {\n  color: var(--color-purple-muted);\n}\n\n/* -------------------------------------------- */\n/* -------------- page layout ----------------- */\n/* -------------------------------------------- */\n\n#page-layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100dvh;\n}\n\n.header {\n  background-color: var(--color-purple-muted);\n  padding: 0 var(--padding-body);\n}\n\n.footer {\n  background-color: var(--color-purple-muted);\n  color: var(--color-white-light);\n  padding: 1rem;\n  text-align: center;\n}\n\n.github-logo {\n  height: 1rem;\n  width: auto;\n  margin: 0 0.5rem;\n}\n\n.footer > a {\n  text-decoration: none;\n  color: var(--color-white-light);\n}\n/* -------------------------------------------- */\n/* ------------------ content ------------------ */\n/* -------------------------------------------- */\n\n#content {\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  background-color: var(--color-cool-white-light);\n  padding: var(--padding-body);\n}\n\n/* ---------------------------------------------- */\n/* ------------------ PROJECTS ------------------ */\n/* ---------------------------------------------- */\n\n/* Project card */\n.project {\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px var(--color-grey);\n  background-color: var(--color-white-dark);\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/* Add project form */\n#add-project-input {\n  background-color: transparent;\n  border: none;\n  width: auto;\n  height: auto;\n  min-width: 100%;\n  min-height: 3rem;\n}\n\n#add-project-input:focus {\n  outline: none;\n}\n\n/* Delete project button */\n.delete-project-button {\n  background-color: transparent;\n  color: var(--color-purple);\n  border: none;\n  cursor: pointer;\n}\n\n.delete-project-button:hover {\n  color: var(--color-lavender);\n}\n\n/* ------------------------------------------- */\n/* ------------------ TASKS ------------------ */\n/* ------------------------------------------- */\n\n/* Task List */\n.task-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  border-radius: var(--border-radius);\n  padding: 0.2rem;\n}\n\n.task:hover {\n  background-color: var(--color-white-darker);\n}\n\n/* Task checkbox */\n.task-checkbox {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid var(--color-turquoise);\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  flex-shrink: 0;\n}\n\n.task-checkbox:checked {\n  background-color: var(--color-turquoise);\n}\n\n/* Task name */\n.task-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 0.2 2rem;\n  flex-grow: 1;\n  width: auto;\n  font-size: 1.1rem;\n  color: var(--color-dark-blue);\n}\n\n.task-name:focus {\n  outline-color: #58888f;\n}\n\n.task-is-complete {\n  text-decoration: line-through;\n  color: var(--color-turquoise-darker);\n  text-decoration-color: var(--color-turquoise-darker);\n}\n\n/* Due date form */\n.due-date-input {\n  margin-right: 10px;\n}\n\n/* Delete task button */\n.delete-task-button {\n  background-color: transparent;\n  border: none;\n  justify-self: flex-end;\n  margin-left: auto;\n  visibility: hidden; /* Hide the button by default */\n}\n\n.task:hover .delete-task-button {\n  visibility: visible; /* Show the button when hovering over .task */\n}\n\n/* Add task form */\n.add-task-container {\n  display: flex;\n  align-items: center;\n  padding: var(--padding-task);\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.add-task-container:hover {\n  background-color: var(--color-white-darker);\n}\n\n.add-task-plus-icon {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: var(--color-turquoise);\n}\n\n.add-task-plus-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  width: auto;\n  font-size: 1rem;\n  color: var(--color-dark-blue-muted);\n}\n\n.task-form:focus {\n  outline: none;\n}\n\n.task-form::placeholder {\n  color: var(--color-dark-blue-muted);\n}\n"],"sourceRoot":""}]);
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
    console.log(taskId);
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
        this.updateTaskDueDateCallback(projectId, task.id, dateInput.value)
      );
      dateContainer.appendChild(dateInput);
    }

    return dateContainer;
  }

  createDateElements(dueDate, isComplete) {
    const dateText = document.createElement("span");
    dateText.innerHTML = new Date(dueDate).toLocaleDateString();
    dateText.classList.add("date-text");

    if (isComplete) {
      dateText.classList.add("task-is-complete");
    }

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
      this.updateTaskDueDateCallback(projectId, task.id, dateInput.value);
      dateText.innerHTML = new Date(dateInput.value).toLocaleDateString();
    }
    dateText.style.display = "inline";
    dateInput.style.display = "none";
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
    plusIcon.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="4" height="16" rx="2" ry="2" fill="currentColor"/>
    <rect x="4" y="10" width="16" height="4" rx="2" ry="2" fill="currentColor"/>
</svg>
    `;
    plusIcon.classList.add("add-task-plus-icon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLGNB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDclNBOztBQUU2Qjs7QUFFZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJtQzs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixtREFBTztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q21DO0FBQ047O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBTztBQUNqQztBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7OztBQ0EyQjtBQUNHOztBQUU5QixnQkFBZ0IsK0NBQUc7QUFDbkIsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0JhbG9vQmhhaWphYW4yLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIENvbG9ycyAqL1xuICAtLWNvbG9yLXB1cnBsZTogIzI0MTI4MjtcbiAgLS1jb2xvci1wdXJwbGUtbXV0ZWQ6ICM1NjRlN2M7XG4gIC0tY29sb3ItdHVycXVvaXNlOiAjN2ZiYWJhO1xuICAtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXI6ICM2NTliOWI7XG4gIC0tY29sb3ItbGF2ZW5kZXI6ICNjMWIyZDk7XG4gIC0tY29sb3Itd2hpdGU6ICNmNmY2ZjY7XG4gIC0tY29sb3Itd2hpdGUtbGlnaHQ6ICNmMGY1Zjk7XG4gIC0tY29sb3Itd2hpdGUtZGFyazogI2VkZjJmNztcbiAgLS1jb2xvci13aGl0ZS1kYXJrZXI6ICNkMGRlZWQ7XG4gIC0tY29sb3ItZ3JleTogcmdiKDIwOSwgMjA1LCAyMTkpO1xuICAtLWNvbG9yLWRhcmstYmx1ZTogIzA1MjEyYztcbiAgLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQ6ICM2YzdhODA7XG5cbiAgLyogUGFkZGluZywgbWlzYyBmb3JtYXR0aW5nICovXG4gIC0tcGFkZGluZy1ib2R5OiAycmVtO1xuICAtLXBhZGRpbmctYnV0dG9uOiAwLjVyZW0gMS41cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1wYWRkaW5nLXRhc2s6IDAuMnJlbTtcbn1cblxuLyogVGV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vQmhhaWphYW4yXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJCYWxvb0JoYWlqYWFuMlwiLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbmgzLFxuI2FkZC1wcm9qZWN0LWlucHV0LFxuI2FkZC1wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLSBwYWdlIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI3BhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctYm9keSk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5naXRodWItbG9nbyB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG5cbi5mb290ZXIgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBjb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29vbC13aGl0ZS1saWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYm9keSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBQUk9KRUNUUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogUHJvamVjdCBjYXJkICovXG4ucHJvamVjdCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmspO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogQWRkIHByb2plY3QgZm9ybSAqL1xuI2FkZC1wcm9qZWN0LWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBEZWxldGUgcHJvamVjdCBidXR0b24gKi9cbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxhdmVuZGVyKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBUYXNrIExpc3QgKi9cbi50YXNrLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcbn1cblxuLyogVGFzayBjaGVja2JveCAqL1xuLnRhc2stY2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG59XG5cbi8qIFRhc2sgbmFtZSAqL1xuLnRhc2stbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAwLjIgMnJlbTtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUpO1xufVxuXG4udGFzay1uYW1lOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzU4ODg4Zjtcbn1cblxuLnRhc2staXMtY29tcGxldGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXIpO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXIpO1xufVxuXG4vKiBEdWUgZGF0ZSBmb3JtICovXG4uZHVlLWRhdGUtaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qIERlbGV0ZSB0YXNrIGJ1dHRvbiAqL1xuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IC8qIEhpZGUgdGhlIGJ1dHRvbiBieSBkZWZhdWx0ICovXG59XG5cbi50YXNrOmhvdmVyIC5kZWxldGUtdGFzay1idXR0b24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAvKiBTaG93IHRoZSBidXR0b24gd2hlbiBob3ZlcmluZyBvdmVyIC50YXNrICovXG59XG5cbi8qIEFkZCB0YXNrIGZvcm0gKi9cbi5hZGQtdGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2spO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xufVxuXG4uYWRkLXRhc2stcGx1cy1pY29uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcbn1cblxuLmFkZC10YXNrLXBsdXMtaWNvbiBzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFzay1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZS1tdXRlZCk7XG59XG5cbi50YXNrLWZvcm06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzay1mb3JtOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQixnQ0FBZ0M7O0VBRWhDLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixz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Q1gsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tY29sb3ItcHVycGxlOiAjMjQxMjgyO1xcbiAgLS1jb2xvci1wdXJwbGUtbXV0ZWQ6ICM1NjRlN2M7XFxuICAtLWNvbG9yLXR1cnF1b2lzZTogIzdmYmFiYTtcXG4gIC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcjogIzY1OWI5YjtcXG4gIC0tY29sb3ItbGF2ZW5kZXI6ICNjMWIyZDk7XFxuICAtLWNvbG9yLXdoaXRlOiAjZjZmNmY2O1xcbiAgLS1jb2xvci13aGl0ZS1saWdodDogI2YwZjVmOTtcXG4gIC0tY29sb3Itd2hpdGUtZGFyazogI2VkZjJmNztcXG4gIC0tY29sb3Itd2hpdGUtZGFya2VyOiAjZDBkZWVkO1xcbiAgLS1jb2xvci1ncmV5OiByZ2IoMjA5LCAyMDUsIDIxOSk7XFxuICAtLWNvbG9yLWRhcmstYmx1ZTogIzA1MjEyYztcXG4gIC0tY29sb3ItZGFyay1ibHVlLW11dGVkOiAjNmM3YTgwO1xcblxcbiAgLyogUGFkZGluZywgbWlzYyBmb3JtYXR0aW5nICovXFxuICAtLXBhZGRpbmctYm9keTogMnJlbTtcXG4gIC0tcGFkZGluZy1idXR0b246IDAuNXJlbSAxLjVyZW07XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tcGFkZGluZy10YXNrOiAwLjJyZW07XFxufVxcblxcbi8qIFRleHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFsb29CaGFpamFhbjJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9CYWxvb0JoYWlqYWFuMi1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFsb29CaGFpamFhbjJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuaDMsXFxuI2FkZC1wcm9qZWN0LWlucHV0LFxcbiNhZGQtcHJvamVjdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0gcGFnZSBsYXlvdXQgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNwYWdlLWxheW91dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctYm9keSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW11dGVkKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1saWdodCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBjb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29vbC13aGl0ZS1saWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJvZHkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBQcm9qZWN0IGNhcmQgKi9cXG4ucHJvamVjdCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFyayk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogQWRkIHByb2plY3QgZm9ybSAqL1xcbiNhZGQtcHJvamVjdC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIERlbGV0ZSBwcm9qZWN0IGJ1dHRvbiAqL1xcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBUYXNrIExpc3QgKi9cXG4udGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBUYXNrIGNoZWNrYm94ICovXFxuLnRhc2stY2hlY2tib3gge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG59XFxuXFxuLyogVGFzayBuYW1lICovXFxuLnRhc2stbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC4yIDJyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxufVxcblxcbi50YXNrLW5hbWU6Zm9jdXMge1xcbiAgb3V0bGluZS1jb2xvcjogIzU4ODg4ZjtcXG59XFxuXFxuLnRhc2staXMtY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBEdWUgZGF0ZSBmb3JtICovXFxuLmR1ZS1kYXRlLWlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogRGVsZXRlIHRhc2sgYnV0dG9uICovXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgLyogSGlkZSB0aGUgYnV0dG9uIGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAvKiBTaG93IHRoZSBidXR0b24gd2hlbiBob3ZlcmluZyBvdmVyIC50YXNrICovXFxufVxcblxcbi8qIEFkZCB0YXNrIGZvcm0gKi9cXG4uYWRkLXRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcXG59XFxuXFxuLmFkZC10YXNrLXBsdXMtaWNvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xcbn1cXG5cXG4uYWRkLXRhc2stcGx1cy1pY29uIHN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcXG59XFxuXFxuLnRhc2stZm9ybTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBET01FbGVtZW50cyBmcm9tIFwiLi9kb21FbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG4gICAgdGhpcy5kb21FbGVtZW50cyA9IG5ldyBET01FbGVtZW50cyhcbiAgICAgIHRoaXMuYWRkUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLmRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuZGVsZXRlVGFza0Zyb21Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLnRvZ2dsZVRhc2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrTmFtZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMuaGFuZGxlQWRkUHJvamVjdEZvcm0oKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QucHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0SWQsIHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVRhc2tDb21wbGV0ZShwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXNrTmFtZShwcm9qZWN0SWQsIHRhc2tJZCwgbmV3TmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay51cGRhdGVOYW1lKG5ld05hbWUpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXNrRHVlRGF0ZShwcm9qZWN0SWQsIHRhc2tJZCwgbmV3RHVlRGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHRhc2tJZCk7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucHJvamVjdExpc3QuZmluZFRhc2socHJvamVjdElkLCB0YXNrSWQpO1xuICAgIGlmICh0YXNrKSB7XG4gICAgICB0YXNrLnVwZGF0ZUR1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVQcm9qZWN0cygpIHtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxuXG4gIHNhdmVQcm9qZWN0c0FuZFJlbmRlcigpIHtcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUVsZW1lbnRzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgYWRkUHJvamVjdENhbGxiYWNrLFxuICAgIGFkZFRhc2tDYWxsYmFjayxcbiAgICBkZWxldGVQcm9qZWN0Q2FsbGJhY2ssXG4gICAgZGVsZXRlVGFza0NhbGxiYWNrLFxuICAgIHRvZ2dsZVRhc2tDYWxsYmFjayxcbiAgICB1cGRhdGVUYXNrTmFtZUNhbGxiYWNrLFxuICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgKSB7XG4gICAgdGhpcy5hZGRQcm9qZWN0Q2FsbGJhY2sgPSBhZGRQcm9qZWN0Q2FsbGJhY2s7XG4gICAgdGhpcy5hZGRUYXNrQ2FsbGJhY2sgPSBhZGRUYXNrQ2FsbGJhY2s7XG4gICAgdGhpcy5kZWxldGVQcm9qZWN0Q2FsbGJhY2sgPSBkZWxldGVQcm9qZWN0Q2FsbGJhY2s7XG4gICAgdGhpcy5kZWxldGVUYXNrQ2FsbGJhY2sgPSBkZWxldGVUYXNrQ2FsbGJhY2s7XG4gICAgdGhpcy50b2dnbGVUYXNrQ2FsbGJhY2sgPSB0b2dnbGVUYXNrQ2FsbGJhY2s7XG4gICAgdGhpcy51cGRhdGVUYXNrTmFtZUNhbGxiYWNrID0gdXBkYXRlVGFza05hbWVDYWxsYmFjaztcbiAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2sgPSB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQsIGNhbGxiYWNrLCBjdXJyZW50VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUgIT09IG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgIGNhbGxiYWNrKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1pbnB1dFwiKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU3RhcnQgYSBuZXcgcHJvamVjdC4uLlwiO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihcbiAgICAgICAgZSxcbiAgICAgICAgKG5ld05hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZFByb2plY3RDYWxsYmFjayhuZXdOYW1lKTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdE5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudCk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlckVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCk7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpc3RFbGVtZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gdGhpcy5jcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0KTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci14XCI+XG4gICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiPjwvbGluZT5cbiAgICAgIDxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPC9zdmc+XG4gICAgYDtcblxuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlbGV0ZVByb2plY3RDYWxsYmFjayhwcm9qZWN0LmlkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWxldGVQcm9qZWN0QnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlVGFza0xpc3RFbGVtZW50KHByb2plY3QpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgbGkgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0SXRlbShwcm9qZWN0LmlkLCB0YXNrKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbiAgfVxuXG4gIGNyZWF0ZVRhc2tMaXN0SXRlbShwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRoaXMuY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzayk7XG4gICAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuICAgIGxpLmFwcGVuZCh0YXNrQ2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IHRoaXMuY3JlYXRlVGFza05hbWVJbnB1dChwcm9qZWN0SWQsIHRhc2spO1xuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZUR1ZURhdGVFbGVtZW50KHByb2plY3RJZCwgdGFzayk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlVGFza0J1dHRvbihwcm9qZWN0SWQsIHRhc2suaWQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG5cbiAgY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG5cbiAgY3JlYXRlVGFza05hbWVJbnB1dChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gICAgbmFtZUlucHV0LmRpc2FibGVkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlzLWNvbXBsZXRlXCIpO1xuICAgIH1cblxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKFxuICAgICAgICBlLFxuICAgICAgICAobmV3TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVGFza05hbWVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIG5ld05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2submFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYW1lSW5wdXQ7XG4gIH1cblxuICBjcmVhdGVEdWVEYXRlRWxlbWVudChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcblxuICAgIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICAgIGNvbnN0IHsgZGF0ZVRleHQsIGRhdGVJbnB1dCB9ID0gdGhpcy5jcmVhdGVEYXRlRWxlbWVudHMoXG4gICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlXG4gICAgICApO1xuXG4gICAgICBkYXRlVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgdGhpcy50b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dClcbiAgICAgICk7XG4gICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5oYW5kbGVEYXRlQ2hhbmdlKGRhdGVUZXh0LCBkYXRlSW5wdXQsIHByb2plY3RJZCwgdGFzaylcbiAgICAgICk7XG4gICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxuICAgICAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UoZGF0ZVRleHQsIGRhdGVJbnB1dCwgcHJvamVjdElkLCB0YXNrKVxuICAgICAgKTtcblxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRGF0ZUlucHV0RWxlbWVudChcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLmlzQ29tcGxldGVcbiAgICAgICk7XG4gICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBkYXRlSW5wdXQudmFsdWUpXG4gICAgICApO1xuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlQ29udGFpbmVyO1xuICB9XG5cbiAgY3JlYXRlRGF0ZUVsZW1lbnRzKGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRhdGVUZXh0LmlubmVySFRNTCA9IG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLXRleHRcIik7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcInRhc2staXMtY29tcGxldGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gdGhpcy5jcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpO1xuICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICByZXR1cm4geyBkYXRlVGV4dCwgZGF0ZUlucHV0IH07XG4gIH1cblxuICBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlIHx8IFwiXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1pbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuZGlzYWJsZWQgPSBpc0NvbXBsZXRlO1xuICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gIH1cblxuICB0b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dCkge1xuICAgIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgZGF0ZUlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVEYXRlQ2hhbmdlKGRhdGVUZXh0LCBkYXRlSW5wdXQsIHByb2plY3RJZCwgdGFzaykge1xuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgIT09IHRhc2suZHVlRGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgIGRhdGVUZXh0LmlubmVySFRNTCA9IG5ldyBEYXRlKGRhdGVJbnB1dC52YWx1ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfVxuICAgIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgPC9zdmc+YDtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVUYXNrQnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCkge1xuICAgIGNvbnN0IGFkZFRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsdXNJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cmVjdCB4PVwiMTBcIiB5PVwiNFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjE2XCIgcng9XCIyXCIgcnk9XCIyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8cmVjdCB4PVwiNFwiIHk9XCIxMFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgcnk9XCIyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbjwvc3ZnPlxuICAgIGA7XG4gICAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBsdXMtaWNvblwiKTtcbiAgICBhZGRUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBhIHRhc2tcIjtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKHRhc2tOYW1lKSB7XG4gICAgICAgIHRoaXMuYWRkVGFza0NhbGxiYWNrKHByb2plY3QuaWQsIHRhc2tOYW1lKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpbnB1dC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkVGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIGFkZFRhc2tFbGVtZW50O1xuICB9XG59XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG4gICAgXG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZmluZFByb2plY3QocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwYXJzZUludChwcm9qZWN0SWQpXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUHJvamVjdCB3aXRoIGlkICR7cHJvamVjdElkfSBub3QgZm91bmQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBmaW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXNrIHdpdGggaWQgJHt0YXNrSWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xuICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICB0YXNrczogcHJvamVjdC50YXNrcy5tYXAoKHRhc2spID0+ICh7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICBuYW1lOiB0YXNrLm5hbWUsXG4gICAgICAgIGlzQ29tcGxldGU6IHRhc2suaXNDb21wbGV0ZSwgLy8gRW5zdXJlIHRoZSBrZXkgbmFtZSBtYXRjaGVzIFRhc2sgY2xhc3NcbiAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgfSkpLFxuICAgIH0pKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgICByZXR1cm4gcHJvamVjdHNEYXRhLm1hcCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcbiAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lKTtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tEYXRhLmlkO1xuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRGF0YS5kdWVEYXRlO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gXCJcIjtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZU5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICB1cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gIXRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5pbml0aWFsaXplQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9