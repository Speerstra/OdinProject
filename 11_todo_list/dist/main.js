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
.project-name,
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
  width: 100%;
}

.project-name:hover {
  background-color: var(--color-white-darker);
}

/* Add project form */
#add-project-input,
.project-name {
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  flex-grow: 1;
  height: auto;
  min-height: 2rem;
  padding-bottom: 0.5rem;
}

#add-project-input:focus,
.project-name:focus {
  outline: none;
}

/* Delete project button */
.delete-project-button {
  background-color: transparent;
  color: var(--color-purple);
  border: none;
  cursor: pointer;
  padding: 0 0.5rem;
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
  /* width: auto; */
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

.add-date-button {
  background-color: transparent;
  border: none;
  color: var(--color-dark-blue-muted);
  font-size: 1rem;
  text-align: right;
  padding: 0;
}

.due-date-overdue {
  color: red;
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
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Colors */\n  --color-purple: #241282;\n  --color-purple-muted: #564e7c;\n  --color-turquoise: #7fbaba;\n  --color-turquoise-darker: #659b9b;\n  --color-lavender: #c1b2d9;\n  --color-white: #f6f6f6;\n  --color-white-light: #f0f5f9;\n  --color-white-dark: #edf2f7;\n  --color-white-darker: #d0deed;\n  --color-grey: rgb(209, 205, 219);\n  --color-dark-blue: #05212c;\n  --color-dark-blue-muted: #6c7a80;\n\n  /* Padding, misc formatting */\n  --padding-body: 2rem;\n  --padding-button: 0.5rem 1.5rem;\n  --border-radius: 8px;\n  --padding-task: 0.2rem;\n}\n\n/* Text */\n@font-face {\n  font-family: \"BalooBhaijaan2\";\n  src: url(\"../assets/fonts/BalooBhaijaan2-Regular.ttf\") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: \"BalooBhaijaan2\", sans-serif;\n}\n\nh1 {\n  font-weight: 600;\n  color: var(--color-white);\n}\n\nh3,\n.project-name,\n#add-project-input,\n#add-project-input::placeholder {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-purple);\n  margin: 0;\n}\n\n#add-project-input::placeholder {\n  color: var(--color-purple-muted);\n}\n\n/* -------------------------------------------- */\n/* -------------- page layout ----------------- */\n/* -------------------------------------------- */\n\n#page-layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100dvh;\n}\n\n.header {\n  background-color: var(--color-purple-muted);\n  padding: 0 var(--padding-body);\n}\n\n.footer {\n  background-color: var(--color-purple-muted);\n  color: var(--color-white-light);\n  padding: 1rem;\n  text-align: center;\n}\n\n.github-logo {\n  height: 1rem;\n  width: auto;\n  margin: 0 0.5rem;\n}\n\n.footer > a {\n  text-decoration: none;\n  color: var(--color-white-light);\n}\n/* -------------------------------------------- */\n/* ------------------ content ------------------ */\n/* -------------------------------------------- */\n\n#content {\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  background-color: var(--color-cool-white-light);\n  padding: var(--padding-body);\n}\n\n/* ---------------------------------------------- */\n/* ------------------ PROJECTS ------------------ */\n/* ---------------------------------------------- */\n\n/* Project card */\n.project {\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px var(--color-grey);\n  background-color: var(--color-white-dark);\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.project-name:hover {\n  background-color: var(--color-white-darker);\n}\n\n/* Add project form */\n#add-project-input,\n.project-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  height: auto;\n  min-height: 2rem;\n  padding-bottom: 0.5rem;\n}\n\n#add-project-input:focus,\n.project-name:focus {\n  outline: none;\n}\n\n/* Delete project button */\n.delete-project-button {\n  background-color: transparent;\n  color: var(--color-purple);\n  border: none;\n  cursor: pointer;\n  padding: 0 0.5rem;\n}\n\n.delete-project-button:hover {\n  color: var(--color-lavender);\n}\n\n/* ------------------------------------------- */\n/* ------------------ TASKS ------------------ */\n/* ------------------------------------------- */\n\n/* Task List */\n.task-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  border-radius: var(--border-radius);\n  padding: 0.2rem;\n}\n\n.task:hover {\n  background-color: var(--color-white-darker);\n}\n\n/* Task checkbox */\n.task-checkbox {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid var(--color-turquoise);\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  flex-shrink: 0;\n}\n\n.task-checkbox:checked {\n  background-color: var(--color-turquoise);\n}\n\n/* Task name */\n.task-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 0.2 2rem;\n  flex-grow: 1;\n  /* width: auto; */\n  font-size: 1.1rem;\n  color: var(--color-dark-blue);\n}\n\n.task-name:focus {\n  outline-color: #58888f;\n}\n\n.task-is-complete {\n  text-decoration: line-through;\n  color: var(--color-turquoise-darker);\n  text-decoration-color: var(--color-turquoise-darker);\n}\n\n/* Due date form */\n.due-date-input {\n  margin-right: 10px;\n}\n\n.add-date-button {\n  background-color: transparent;\n  border: none;\n  color: var(--color-dark-blue-muted);\n  font-size: 1rem;\n  text-align: right;\n  padding: 0;\n}\n\n.due-date-overdue {\n  color: red;\n}\n\n/* Delete task button */\n.delete-task-button {\n  background-color: transparent;\n  border: none;\n  justify-self: flex-end;\n  margin-left: auto;\n  visibility: hidden; /* Hide the button by default */\n}\n\n.task:hover .delete-task-button {\n  visibility: visible; /* Show the button when hovering over .task */\n}\n\n/* Add task form */\n.add-task-container {\n  display: flex;\n  align-items: center;\n  padding: var(--padding-task);\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.add-task-container:hover {\n  background-color: var(--color-white-darker);\n}\n\n.add-task-plus-icon {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: var(--color-turquoise);\n}\n\n.add-task-plus-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  width: auto;\n  font-size: 1rem;\n  color: var(--color-dark-blue-muted);\n}\n\n.task-form:focus {\n  outline: none;\n}\n\n.task-form::placeholder {\n  color: var(--color-dark-blue-muted);\n}\n"],"sourceRoot":""}]);
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
      this.updateProjectName.bind(this),
      this.updateTaskName.bind(this),
      this.updateTaskDueDate.bind(this)
    );

    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
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

  updateProjectName(projectId, newProjectName) {
    this.projectList.updateProjectName(projectId, newProjectName);
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
    this.projectList.sortProjectsAndTasks();
    this.saveProjects();
    this.domElements.renderProjects(this.projectList.projects);
  }
}


/***/ }),

/***/ "./src/scripts/dateUtils.js":
/*!**********************************!*\
  !*** ./src/scripts/dateUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDueDateElement: () => (/* binding */ createDueDateElement)
/* harmony export */ });
function formatDate(date) {
  if (!date) return "No due date";

  const options = { month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

function isOverdue(date) {
  if (!date) return false;

  const dueDate = new Date(date);
  const today = new Date();

  return dueDate < today;
}

function createDueDateElement(
  projectId,
  task,
  updateTaskDueDateCallback
) {
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  if (task.dueDate) {
    const { dateText, dateInput } = createDateElements(
      task.dueDate,
      task.isComplete
    );

    dateText.addEventListener("click", () =>
      toggleDateInput(dateText, dateInput)
    );
    dateInput.addEventListener("blur", () =>
      handleDateChange(
        dateText,
        dateInput,
        projectId,
        task,
        updateTaskDueDateCallback
      )
    );
    dateInput.addEventListener("change", () =>
      handleDateChange(
        dateText,
        dateInput,
        projectId,
        task,
        updateTaskDueDateCallback
      )
    );

    dateContainer.appendChild(dateText);
    dateContainer.appendChild(dateInput);
  } else {
    const dateInput = createDateInputElement(task.dueDate, task.isComplete);
    dateInput.addEventListener("change", () =>
      updateTaskDueDateCallback(projectId, task.id, dateInput.value)
    );
    dateContainer.appendChild(dateInput);
  }

  return dateContainer;
}

function createDateElements(dueDate, isComplete) {
  const dateText = document.createElement("span");
  dateText.innerHTML = formatDate(dueDate);
  dateText.classList.add("date-text");

  if (isComplete) {
    dateText.classList.add("task-is-complete");
  }

  if (isOverdue(dueDate)) {
    dateText.classList.add("due-date-overdue");
  }

  const dateInput = createDateInputElement(dueDate, isComplete);
  dateInput.style.display = "none";

  return { dateText, dateInput };
}

function createDateInputElement(dueDate, isComplete) {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = dueDate
    ? new Date(dueDate).toISOString().substr(0, 10)
    : "";
  dateInput.classList.add("due-date-input");
  dateInput.disabled = isComplete;
  return dateInput;
}

function toggleDateInput(dateText, dateInput) {
  dateText.style.display = "none";
  dateInput.style.display = "inline";
  dateInput.focus();
}

function handleDateChange(
  dateText,
  dateInput,
  projectId,
  task,
  updateTaskDueDateCallback
) {
  if (dateInput.value !== task.dueDate) {
    updateTaskDueDateCallback(projectId, task.id, dateInput.value);
    dateText.innerHTML = formatDate(dateInput.value);
  }
  dateText.style.display = "inline";
  dateInput.style.display = "none";
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
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateUtils.js */ "./src/scripts/dateUtils.js");


class DOMElements {
  constructor(
    addProjectCallback,
    addTaskCallback,
    deleteProjectCallback,
    deleteTaskCallback,
    toggleTaskCallback,
    updateProjectNameCallback,
    updateTaskNameCallback,
    updateTaskDueDateCallback
  ) {
    this.addProjectCallback = addProjectCallback;
    this.addTaskCallback = addTaskCallback;
    this.deleteProjectCallback = deleteProjectCallback;
    this.deleteTaskCallback = deleteTaskCallback;
    this.toggleTaskCallback = toggleTaskCallback;
    this.updateProjectNameCallback = updateProjectNameCallback;
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

    const projectNameElement = this.createProjectName(project);
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

  createProjectName(project) {
    const projectNameElement = document.createElement("input");
    projectNameElement.type = "text";
    projectNameElement.value = project.name;
    projectNameElement.classList.add("project-name");

    projectNameElement.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newProjectName) => {
          this.updateProjectNameCallback(project.id, newProjectName);
        },
        projectNameElement.value,
        project.name
      );
    });

    return projectNameElement;
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

    const dueDateElement = (0,_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__.createDueDateElement)(
      projectId,
      task,
      this.updateTaskDueDateCallback
    );
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

/***/ "./src/scripts/initialProjectList.js":
/*!*******************************************!*\
  !*** ./src/scripts/initialProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialProjectList = [
  {
    id: "1",
    name: "Odin Javascript",
    tasks: [
      {
        id: "1",
        name: "Library",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 2)
        ).toISOString(),
      },
      {
        id: "2",
        name: "TicTacToe",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: "3",
        name: "Restaurant Page",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: "4",
        name: "To Do List",
        isComplete: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() + 7)
        ).toISOString(),
      },
      {
        id: "5",
        name: "Weather App",
        isComplete: false,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toISOString(),
      },
    ],
  },
  {
    id: "2",
    name: "Garden",
    tasks: [
      { id: "6", name: "Plant tomatoes", isComplete: false, dueDate: null },
    ],
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialProjectList);


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
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  updateProjectName(newProjectName) {
    this.name = newProjectName;
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

  updateProjectName(projectId, newProjectName) {
    const project = this.findProject(projectId);
    project.updateProjectName(newProjectName);
  }

  sortProjects() {
    this.projects.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortTasks(project) {
    project.tasks.sort((a, b) => {
      const dueDateA = a.dueDate ? new Date(a.dueDate) : Infinity;
      const dueDateB = b.dueDate ? new Date(b.dueDate) : Infinity;
      return dueDateA - dueDateB;
    });
  }

  sortProjectsAndTasks() {
    this.sortProjects();
    this.projects.forEach((project) => this.sortTasks(project));
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
/* harmony import */ var _initialProjectList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialProjectList.js */ "./src/scripts/initialProjectList.js");




class Storage {
  static saveProjects(projects) {
    const projectsData = projects.map((project) => ({
      id: project.id,
      name: project.name,
      tasks: project.tasks.map((task) => ({
        id: task.id,
        name: task.name,
        isComplete: task.isComplete,
        dueDate: task.dueDate,
      })),
    }));

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  static getProjects() {
    const projectsData =
      JSON.parse(localStorage.getItem("projects")) || _initialProjectList_js__WEBPACK_IMPORTED_MODULE_2__["default"];
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

  static initialize() {
    if (!localStorage.getItem("projects")) {
      this.saveProjects(
        _initialProjectList_js__WEBPACK_IMPORTED_MODULE_2__["default"].map((projectData) => {
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
        })
      );
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdB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S0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLG1FQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0c7O0FBRTlCLGdCQUFnQiwrQ0FBRztBQUNuQixvQiIsInNvdXJjZXMiOlsid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvZGF0ZVV0aWxzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2luaXRpYWxQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvdGFzay5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9CYWxvb0JoYWlqYWFuMi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBDb2xvcnMgKi9cbiAgLS1jb2xvci1wdXJwbGU6ICMyNDEyODI7XG4gIC0tY29sb3ItcHVycGxlLW11dGVkOiAjNTY0ZTdjO1xuICAtLWNvbG9yLXR1cnF1b2lzZTogIzdmYmFiYTtcbiAgLS1jb2xvci10dXJxdW9pc2UtZGFya2VyOiAjNjU5YjliO1xuICAtLWNvbG9yLWxhdmVuZGVyOiAjYzFiMmQ5O1xuICAtLWNvbG9yLXdoaXRlOiAjZjZmNmY2O1xuICAtLWNvbG9yLXdoaXRlLWxpZ2h0OiAjZjBmNWY5O1xuICAtLWNvbG9yLXdoaXRlLWRhcms6ICNlZGYyZjc7XG4gIC0tY29sb3Itd2hpdGUtZGFya2VyOiAjZDBkZWVkO1xuICAtLWNvbG9yLWdyZXk6IHJnYigyMDksIDIwNSwgMjE5KTtcbiAgLS1jb2xvci1kYXJrLWJsdWU6ICMwNTIxMmM7XG4gIC0tY29sb3ItZGFyay1ibHVlLW11dGVkOiAjNmM3YTgwO1xuXG4gIC8qIFBhZGRpbmcsIG1pc2MgZm9ybWF0dGluZyAqL1xuICAtLXBhZGRpbmctYm9keTogMnJlbTtcbiAgLS1wYWRkaW5nLWJ1dHRvbjogMC41cmVtIDEuNXJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy10YXNrOiAwLjJyZW07XG59XG5cbi8qIFRleHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCYWxvb0JoYWlqYWFuMlwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb29CaGFpamFhbjJcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG5oMyxcbi5wcm9qZWN0LW5hbWUsXG4jYWRkLXByb2plY3QtaW5wdXQsXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xuICBtYXJnaW46IDA7XG59XG5cbiNhZGQtcHJvamVjdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW11dGVkKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tIHBhZ2UgbGF5b3V0IC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1ib2R5KTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1saWdodCk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1sb2dvIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cblxuLmZvb3RlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1saWdodCk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb29sLXdoaXRlLWxpZ2h0KTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBQcm9qZWN0IGNhcmQgKi9cbi5wcm9qZWN0IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCB2YXIoLS1jb2xvci1ncmV5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFyayk7XG59XG5cbi8qIEhlYWRlciAqL1xuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmtlcik7XG59XG5cbi8qIEFkZCBwcm9qZWN0IGZvcm0gKi9cbiNhZGQtcHJvamVjdC1pbnB1dCxcbi5wcm9qZWN0LW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbiNhZGQtcHJvamVjdC1pbnB1dDpmb2N1cyxcbi5wcm9qZWN0LW5hbWU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBEZWxldGUgcHJvamVjdCBidXR0b24gKi9cbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1sYXZlbmRlcik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogVGFzayBMaXN0ICovXG4udGFzay1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4udGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmtlcik7XG59XG5cbi8qIFRhc2sgY2hlY2tib3ggKi9cbi50YXNrLWNoZWNrYm94IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xuICBtYXJnaW46IDAgMC43cmVtIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi50YXNrLWNoZWNrYm94OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xufVxuXG4vKiBUYXNrIG5hbWUgKi9cbi50YXNrLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogMC4yIDJyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgLyogd2lkdGg6IGF1dG87ICovXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcbn1cblxuLnRhc2stbmFtZTpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICM1ODg4OGY7XG59XG5cbi50YXNrLWlzLWNvbXBsZXRlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UtZGFya2VyKTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UtZGFya2VyKTtcbn1cblxuLyogRHVlIGRhdGUgZm9ybSAqL1xuLmR1ZS1kYXRlLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWRkLWRhdGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZS1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kdWUtZGF0ZS1vdmVyZHVlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogRGVsZXRlIHRhc2sgYnV0dG9uICovXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgLyogSGlkZSB0aGUgYnV0dG9uIGJ5IGRlZmF1bHQgKi9cbn1cblxuLnRhc2s6aG92ZXIgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7IC8qIFNob3cgdGhlIGJ1dHRvbiB3aGVuIGhvdmVyaW5nIG92ZXIgLnRhc2sgKi9cbn1cblxuLyogQWRkIHRhc2sgZm9ybSAqL1xuLmFkZC10YXNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdGFzayk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmFkZC10YXNrLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmtlcik7XG59XG5cbi5hZGQtdGFzay1wbHVzLWljb24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMC43cmVtIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xufVxuXG4uYWRkLXRhc2stcGx1cy1pY29uIHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YXNrLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcbn1cblxuLnRhc2stZm9ybTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrLWZvcm06OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZS1tdXRlZCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixnQ0FB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bkMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFLCtCQUErQjtBQUNyRDs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLDZDQUE2QztBQUNwRTs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tY29sb3ItcHVycGxlOiAjMjQxMjgyO1xcbiAgLS1jb2xvci1wdXJwbGUtbXV0ZWQ6ICM1NjRlN2M7XFxuICAtLWNvbG9yLXR1cnF1b2lzZTogIzdmYmFiYTtcXG4gIC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcjogIzY1OWI5YjtcXG4gIC0tY29sb3ItbGF2ZW5kZXI6ICNjMWIyZDk7XFxuICAtLWNvbG9yLXdoaXRlOiAjZjZmNmY2O1xcbiAgLS1jb2xvci13aGl0ZS1saWdodDogI2YwZjVmOTtcXG4gIC0tY29sb3Itd2hpdGUtZGFyazogI2VkZjJmNztcXG4gIC0tY29sb3Itd2hpdGUtZGFya2VyOiAjZDBkZWVkO1xcbiAgLS1jb2xvci1ncmV5OiByZ2IoMjA5LCAyMDUsIDIxOSk7XFxuICAtLWNvbG9yLWRhcmstYmx1ZTogIzA1MjEyYztcXG4gIC0tY29sb3ItZGFyay1ibHVlLW11dGVkOiAjNmM3YTgwO1xcblxcbiAgLyogUGFkZGluZywgbWlzYyBmb3JtYXR0aW5nICovXFxuICAtLXBhZGRpbmctYm9keTogMnJlbTtcXG4gIC0tcGFkZGluZy1idXR0b246IDAuNXJlbSAxLjVyZW07XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tcGFkZGluZy10YXNrOiAwLjJyZW07XFxufVxcblxcbi8qIFRleHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFsb29CaGFpamFhbjJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9CYWxvb0JoYWlqYWFuMi1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFsb29CaGFpamFhbjJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuaDMsXFxuLnByb2plY3QtbmFtZSxcXG4jYWRkLXByb2plY3QtaW5wdXQsXFxuI2FkZC1wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW11dGVkKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLSBwYWdlIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI3BhZ2UtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW11dGVkKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1ib2R5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWxpZ2h0KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1saWdodCk7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb29sLXdoaXRlLWxpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYm9keSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gUFJPSkVDVFMgLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIFByb2plY3QgY2FyZCAqL1xcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcXG59XFxuXFxuLyogQWRkIHByb2plY3QgZm9ybSAqL1xcbiNhZGQtcHJvamVjdC1pbnB1dCxcXG4ucHJvamVjdC1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWlucHV0OmZvY3VzLFxcbi5wcm9qZWN0LW5hbWU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogRGVsZXRlIHByb2plY3QgYnV0dG9uICovXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxhdmVuZGVyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogVGFzayBMaXN0ICovXFxuLnRhc2stbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcXG59XFxuXFxuLyogVGFzayBjaGVja2JveCAqL1xcbi50YXNrLWNoZWNrYm94IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4udGFzay1jaGVja2JveDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XFxufVxcblxcbi8qIFRhc2sgbmFtZSAqL1xcbi50YXNrLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDAuMiAycmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgLyogd2lkdGg6IGF1dG87ICovXFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUpO1xcbn1cXG5cXG4udGFzay1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmUtY29sb3I6ICM1ODg4OGY7XFxufVxcblxcbi50YXNrLWlzLWNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UtZGFya2VyKTtcXG59XFxuXFxuLyogRHVlIGRhdGUgZm9ybSAqL1xcbi5kdWUtZGF0ZS1pbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtZGF0ZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmR1ZS1kYXRlLW92ZXJkdWUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogRGVsZXRlIHRhc2sgYnV0dG9uICovXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgLyogSGlkZSB0aGUgYnV0dG9uIGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAvKiBTaG93IHRoZSBidXR0b24gd2hlbiBob3ZlcmluZyBvdmVyIC50YXNrICovXFxufVxcblxcbi8qIEFkZCB0YXNrIGZvcm0gKi9cXG4uYWRkLXRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcXG59XFxuXFxuLmFkZC10YXNrLXBsdXMtaWNvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xcbn1cXG5cXG4uYWRkLXRhc2stcGx1cy1pY29uIHN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcXG59XFxuXFxuLnRhc2stZm9ybTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBET01FbGVtZW50cyBmcm9tIFwiLi9kb21FbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG4gICAgdGhpcy5kb21FbGVtZW50cyA9IG5ldyBET01FbGVtZW50cyhcbiAgICAgIHRoaXMuYWRkUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLmRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuZGVsZXRlVGFza0Zyb21Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLnRvZ2dsZVRhc2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TmFtZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrTmFtZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIFN0b3JhZ2UuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMuaGFuZGxlQWRkUHJvamVjdEZvcm0oKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QucHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdExpc3QudXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrTmFtZSk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGUocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza05hbWUocHJvamVjdElkLCB0YXNrSWQsIG5ld05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudXBkYXRlTmFtZShuZXdOYW1lKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza0R1ZURhdGUocHJvamVjdElkLCB0YXNrSWQsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay51cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBzYXZlUHJvamVjdHMoKSB7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdHModGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIH1cblxuICBzYXZlUHJvamVjdHNBbmRSZW5kZXIoKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5zb3J0UHJvamVjdHNBbmRUYXNrcygpO1xuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgdGhpcy5kb21FbGVtZW50cy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiTm8gZHVlIGRhdGVcIjtcblxuICBjb25zdCBvcHRpb25zID0geyBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfTtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpc092ZXJkdWUoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICByZXR1cm4gZHVlRGF0ZSA8IHRvZGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVlRGF0ZUVsZW1lbnQoXG4gIHByb2plY3RJZCxcbiAgdGFzayxcbiAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuKSB7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcblxuICBpZiAodGFzay5kdWVEYXRlKSB7XG4gICAgY29uc3QgeyBkYXRlVGV4dCwgZGF0ZUlucHV0IH0gPSBjcmVhdGVEYXRlRWxlbWVudHMoXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLmlzQ29tcGxldGVcbiAgICApO1xuXG4gICAgZGF0ZVRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dClcbiAgICApO1xuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PlxuICAgICAgaGFuZGxlRGF0ZUNoYW5nZShcbiAgICAgICAgZGF0ZVRleHQsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgcHJvamVjdElkLFxuICAgICAgICB0YXNrLFxuICAgICAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4gICAgICApXG4gICAgKTtcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxuICAgICAgaGFuZGxlRGF0ZUNoYW5nZShcbiAgICAgICAgZGF0ZVRleHQsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgcHJvamVjdElkLFxuICAgICAgICB0YXNrLFxuICAgICAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4gICAgICApXG4gICAgKTtcblxuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRleHQpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KHRhc2suZHVlRGF0ZSwgdGFzay5pc0NvbXBsZXRlKTtcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxuICAgICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIGRhdGVJbnB1dC52YWx1ZSlcbiAgICApO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgfVxuXG4gIHJldHVybiBkYXRlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlRWxlbWVudHMoZHVlRGF0ZSwgaXNDb21wbGV0ZSkge1xuICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlVGV4dC5pbm5lckhUTUwgPSBmb3JtYXREYXRlKGR1ZURhdGUpO1xuICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS10ZXh0XCIpO1xuXG4gIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcInRhc2staXMtY29tcGxldGVcIik7XG4gIH1cblxuICBpZiAoaXNPdmVyZHVlKGR1ZURhdGUpKSB7XG4gICAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLW92ZXJkdWVcIik7XG4gIH1cblxuICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpO1xuICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIHJldHVybiB7IGRhdGVUZXh0LCBkYXRlSW5wdXQgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZUlucHV0RWxlbWVudChkdWVEYXRlLCBpc0NvbXBsZXRlKSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZVxuICAgID8gbmV3IERhdGUoZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApXG4gICAgOiBcIlwiO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLWlucHV0XCIpO1xuICBkYXRlSW5wdXQuZGlzYWJsZWQgPSBpc0NvbXBsZXRlO1xuICByZXR1cm4gZGF0ZUlucHV0O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dCkge1xuICBkYXRlVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgZGF0ZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURhdGVDaGFuZ2UoXG4gIGRhdGVUZXh0LFxuICBkYXRlSW5wdXQsXG4gIHByb2plY3RJZCxcbiAgdGFzayxcbiAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuKSB7XG4gIGlmIChkYXRlSW5wdXQudmFsdWUgIT09IHRhc2suZHVlRGF0ZSkge1xuICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBkYXRlSW5wdXQudmFsdWUpO1xuICAgIGRhdGVUZXh0LmlubmVySFRNTCA9IGZvcm1hdERhdGUoZGF0ZUlucHV0LnZhbHVlKTtcbiAgfVxuICBkYXRlVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1ZURhdGVFbGVtZW50IH0gZnJvbSBcIi4vZGF0ZVV0aWxzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUVsZW1lbnRzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgYWRkUHJvamVjdENhbGxiYWNrLFxuICAgIGFkZFRhc2tDYWxsYmFjayxcbiAgICBkZWxldGVQcm9qZWN0Q2FsbGJhY2ssXG4gICAgZGVsZXRlVGFza0NhbGxiYWNrLFxuICAgIHRvZ2dsZVRhc2tDYWxsYmFjayxcbiAgICB1cGRhdGVQcm9qZWN0TmFtZUNhbGxiYWNrLFxuICAgIHVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2ssXG4gICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuICApIHtcbiAgICB0aGlzLmFkZFByb2plY3RDYWxsYmFjayA9IGFkZFByb2plY3RDYWxsYmFjaztcbiAgICB0aGlzLmFkZFRhc2tDYWxsYmFjayA9IGFkZFRhc2tDYWxsYmFjaztcbiAgICB0aGlzLmRlbGV0ZVByb2plY3RDYWxsYmFjayA9IGRlbGV0ZVByb2plY3RDYWxsYmFjaztcbiAgICB0aGlzLmRlbGV0ZVRhc2tDYWxsYmFjayA9IGRlbGV0ZVRhc2tDYWxsYmFjaztcbiAgICB0aGlzLnRvZ2dsZVRhc2tDYWxsYmFjayA9IHRvZ2dsZVRhc2tDYWxsYmFjaztcbiAgICB0aGlzLnVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2sgPSB1cGRhdGVQcm9qZWN0TmFtZUNhbGxiYWNrO1xuICAgIHRoaXMudXBkYXRlVGFza05hbWVDYWxsYmFjayA9IHVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2s7XG4gICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrID0gdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjaztcbiAgfVxuXG4gIHJlbmRlclByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgdGhpcy5jbGVhckVsZW1lbnQocHJvamVjdExpc3RFbGVtZW50KTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50LCBjYWxsYmFjaywgY3VycmVudFZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS50cmltKCk7XG4gICAgaWYgKG5ld1ZhbHVlICYmIG5ld1ZhbHVlICE9PSBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICBjYWxsYmFjayhuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG4gIH1cblxuICBoYW5kbGVBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtaW5wdXRcIik7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlN0YXJ0IGEgbmV3IHByb2plY3QuLi5cIjtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oXG4gICAgICAgIGUsXG4gICAgICAgIChuZXdOYW1lKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRQcm9qZWN0Q2FsbGJhY2sobmV3TmFtZSk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dC52YWx1ZSxcbiAgICAgICAgXCJcIlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuaWQpO1xuICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIsIHByb2plY3QubmFtZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gdGhpcy5jcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0KTtcbiAgICBwcm9qZWN0SGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcbiAgICBwcm9qZWN0SGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXJFbGVtZW50KTtcblxuICAgIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IHRoaXMuY3JlYXRlVGFza0xpc3RFbGVtZW50KHByb2plY3QpO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tMaXN0RWxlbWVudCk7XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IHRoaXMuY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCk7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0TmFtZUVsZW1lbnQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3ROYW1lRWxlbWVudC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcblxuICAgIHByb2plY3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKFxuICAgICAgICBlLFxuICAgICAgICAobmV3UHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2socHJvamVjdC5pZCwgbmV3UHJvamVjdE5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQudmFsdWUsXG4gICAgICAgIHByb2plY3QubmFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0TmFtZUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci14XCI+XG4gICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiPjwvbGluZT5cbiAgICAgIDxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPC9zdmc+XG4gICAgYDtcblxuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlbGV0ZVByb2plY3RDYWxsYmFjayhwcm9qZWN0LmlkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWxldGVQcm9qZWN0QnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlVGFza0xpc3RFbGVtZW50KHByb2plY3QpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgbGkgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0SXRlbShwcm9qZWN0LmlkLCB0YXNrKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbiAgfVxuXG4gIGNyZWF0ZVRhc2tMaXN0SXRlbShwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRoaXMuY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzayk7XG4gICAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuICAgIGxpLmFwcGVuZCh0YXNrQ2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IHRoaXMuY3JlYXRlVGFza05hbWVJbnB1dChwcm9qZWN0SWQsIHRhc2spO1xuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBjcmVhdGVEdWVEYXRlRWxlbWVudChcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHRhc2ssXG4gICAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgICApO1xuICAgIGxpLmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSB0aGlzLmNyZWF0ZURlbGV0ZVRhc2tCdXR0b24ocHJvamVjdElkLCB0YXNrLmlkKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcblxuICAgIHJldHVybiBsaTtcbiAgfVxuXG4gIGNyZWF0ZVRhc2tDaGVja2JveChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGU7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVRhc2tDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxuXG4gIGNyZWF0ZVRhc2tOYW1lSW5wdXQocHJvamVjdElkLCB0YXNrKSB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICAgIG5hbWVJbnB1dC5kaXNhYmxlZCA9IHRhc2suaXNDb21wbGV0ZTtcblxuICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1pcy1jb21wbGV0ZVwiKTtcbiAgICB9XG5cbiAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihcbiAgICAgICAgZSxcbiAgICAgICAgKG5ld05hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBuZXdOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlLFxuICAgICAgICB0YXNrLm5hbWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmFtZUlucHV0O1xuICB9XG5cbiAgY3JlYXRlRGVsZXRlVGFza0J1dHRvbihwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci14XCI+XG4gICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiPjwvbGluZT5cbiAgICAgIDxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgIDwvc3ZnPmA7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlVGFza0J1dHRvbjtcbiAgfVxuXG4gIGNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3QpIHtcbiAgICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbHVzSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8cmVjdCB4PVwiMTBcIiB5PVwiNFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjE2XCIgcng9XCIyXCIgcnk9XCIyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjEwXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiByeT1cIjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgPC9zdmc+XG4gICAgYDtcbiAgICBwbHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcGx1cy1pY29uXCIpO1xuICAgIGFkZFRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiQWRkIGEgdGFza1wiO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy5hZGRUYXNrQ2FsbGJhY2socHJvamVjdC5pZCwgdGFza05hbWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlucHV0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gYWRkVGFza0VsZW1lbnQ7XG4gIH1cbn1cbiIsImNvbnN0IGluaXRpYWxQcm9qZWN0TGlzdCA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICBuYW1lOiBcIk9kaW4gSmF2YXNjcmlwdFwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgbmFtZTogXCJMaWJyYXJ5XCIsXG4gICAgICAgIGlzQ29tcGxldGU6IHRydWUsXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKFxuICAgICAgICAgIG5ldyBEYXRlKCkuc2V0TW9udGgobmV3IERhdGUoKS5nZXRNb250aCgpIC0gMilcbiAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICBuYW1lOiBcIlRpY1RhY1RvZVwiLFxuICAgICAgICBpc0NvbXBsZXRlOiB0cnVlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLnNldE1vbnRoKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSAtIDEpXG4gICAgICAgICkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgbmFtZTogXCJSZXN0YXVyYW50IFBhZ2VcIixcbiAgICAgICAgaXNDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoKS5zZXRNb250aChuZXcgRGF0ZSgpLmdldE1vbnRoKCkgLSAxKVxuICAgICAgICApLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIG5hbWU6IFwiVG8gRG8gTGlzdFwiLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgNylcbiAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiNVwiLFxuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLnNldE1vbnRoKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICBuYW1lOiBcIkdhcmRlblwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7IGlkOiBcIjZcIiwgbmFtZTogXCJQbGFudCB0b21hdG9lc1wiLCBpc0NvbXBsZXRlOiBmYWxzZSwgZHVlRGF0ZTogbnVsbCB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUHJvamVjdExpc3Q7XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKTtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3ROYW1lKG5ld1Byb2plY3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3UHJvamVjdE5hbWU7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBmaW5kUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZClcbiAgICApO1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9qZWN0IHdpdGggaWQgJHtwcm9qZWN0SWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIGZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhc2sgd2l0aCBpZCAke3Rhc2tJZH0gbm90IGZvdW5kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gcGFyc2VJbnQocHJvamVjdElkKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0TmFtZShwcm9qZWN0SWQsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBwcm9qZWN0LnVwZGF0ZVByb2plY3ROYW1lKG5ld1Byb2plY3ROYW1lKTtcbiAgfVxuXG4gIHNvcnRQcm9qZWN0cygpIHtcbiAgICB0aGlzLnByb2plY3RzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuICB9XG5cbiAgc29ydFRhc2tzKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGR1ZURhdGVBID0gYS5kdWVEYXRlID8gbmV3IERhdGUoYS5kdWVEYXRlKSA6IEluZmluaXR5O1xuICAgICAgY29uc3QgZHVlRGF0ZUIgPSBiLmR1ZURhdGUgPyBuZXcgRGF0ZShiLmR1ZURhdGUpIDogSW5maW5pdHk7XG4gICAgICByZXR1cm4gZHVlRGF0ZUEgLSBkdWVEYXRlQjtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRQcm9qZWN0c0FuZFRhc2tzKCkge1xuICAgIHRoaXMuc29ydFByb2plY3RzKCk7XG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB0aGlzLnNvcnRUYXNrcyhwcm9qZWN0KSk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBpbml0aWFsUHJvamVjdExpc3QgZnJvbSBcIi4vaW5pdGlhbFByb2plY3RMaXN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xuICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICB0YXNrczogcHJvamVjdC50YXNrcy5tYXAoKHRhc2spID0+ICh7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICBuYW1lOiB0YXNrLm5hbWUsXG4gICAgICAgIGlzQ29tcGxldGU6IHRhc2suaXNDb21wbGV0ZSxcbiAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgfSkpLFxuICAgIH0pKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID1cbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgaW5pdGlhbFByb2plY3RMaXN0O1xuICAgIHJldHVybiBwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0RGF0YSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgcHJvamVjdC5pZCA9IHByb2plY3REYXRhLmlkO1xuICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCgodGFza0RhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICB0YXNrLmlkID0gdGFza0RhdGEuaWQ7XG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRhc2tEYXRhLmlzQ29tcGxldGU7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IHRhc2tEYXRhLmR1ZURhdGU7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoXG4gICAgICAgIGluaXRpYWxQcm9qZWN0TGlzdC5tYXAoKHByb2plY3REYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdERhdGEudGFza3MubWFwKCh0YXNrRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICAgICAgdGFzay5pZCA9IHRhc2tEYXRhLmlkO1xuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdGFza0RhdGEuaXNDb21wbGV0ZTtcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IHRhc2tEYXRhLmR1ZURhdGU7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgdXBkYXRlRHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9ICF0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuaW5pdGlhbGl6ZUFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==