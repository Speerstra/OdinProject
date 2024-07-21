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
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Colors */\n  --color-purple: #241282;\n  --color-purple-muted: #564e7c;\n  --color-turquoise: #7fbaba;\n  --color-turquoise-darker: #659b9b;\n  --color-lavender: #c1b2d9;\n  --color-white: #f6f6f6;\n  --color-white-light: #f0f5f9;\n  --color-white-dark: #edf2f7;\n  --color-white-darker: #d0deed;\n  --color-grey: rgb(209, 205, 219);\n  --color-dark-blue: #05212c;\n  --color-dark-blue-muted: #6c7a80;\n\n  /* Padding, misc formatting */\n  --padding-body: 2rem;\n  --padding-button: 0.5rem 1.5rem;\n  --border-radius: 8px;\n  --padding-task: 0.2rem;\n}\n\n/* Text */\n@font-face {\n  font-family: \"BalooBhaijaan2\";\n  src: url(\"../assets/fonts/BalooBhaijaan2-Regular.ttf\") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: \"BalooBhaijaan2\", sans-serif;\n}\n\nh1 {\n  font-weight: 600;\n  color: var(--color-white);\n}\n\nh3,\n.project-name,\n#add-project-input,\n#add-project-input::placeholder {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-purple);\n  margin: 0;\n}\n\n#add-project-input::placeholder {\n  color: var(--color-purple-muted);\n}\n\n/* -------------------------------------------- */\n/* -------------- page layout ----------------- */\n/* -------------------------------------------- */\n\n#page-layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100dvh;\n}\n\n.header {\n  background-color: var(--color-purple-muted);\n  padding: 0 var(--padding-body);\n}\n\n.footer {\n  background-color: var(--color-purple-muted);\n  color: var(--color-white-light);\n  padding: 1rem;\n  text-align: center;\n}\n\n.github-logo {\n  height: 1rem;\n  width: auto;\n  margin: 0 0.5rem;\n}\n\n.footer > a {\n  text-decoration: none;\n  color: var(--color-white-light);\n}\n/* -------------------------------------------- */\n/* ------------------ content ------------------ */\n/* -------------------------------------------- */\n\n#content {\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  background-color: var(--color-cool-white-light);\n  padding: var(--padding-body);\n}\n\n/* ---------------------------------------------- */\n/* ------------------ PROJECTS ------------------ */\n/* ---------------------------------------------- */\n\n/* Project card */\n.project {\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px var(--color-grey);\n  background-color: var(--color-white-dark);\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.project-name:hover {\n  background-color: var(--color-white-darker);\n}\n\n/* Add project form */\n#add-project-input,\n.project-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  height: auto;\n  min-height: 2rem;\n  padding-bottom: 0.5rem;\n}\n\n#add-project-input:focus,\n.project-name:focus {\n  outline: none;\n}\n\n/* Delete project button */\n.delete-project-button {\n  background-color: transparent;\n  color: var(--color-purple);\n  border: none;\n  cursor: pointer;\n  padding: 0 0.5rem;\n}\n\n.delete-project-button:hover {\n  color: var(--color-lavender);\n}\n\n/* ------------------------------------------- */\n/* ------------------ TASKS ------------------ */\n/* ------------------------------------------- */\n\n/* Task List */\n.task-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  border-radius: var(--border-radius);\n  padding: 0.2rem;\n}\n\n.task:hover {\n  background-color: var(--color-white-darker);\n}\n\n/* Task checkbox */\n.task-checkbox {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid var(--color-turquoise);\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  flex-shrink: 0;\n}\n\n.task-checkbox:checked {\n  background-color: var(--color-turquoise);\n}\n\n/* Task name */\n.task-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 0.2 2rem;\n  flex-grow: 1;\n  /* width: auto; */\n  font-size: 1.1rem;\n  color: var(--color-dark-blue);\n}\n\n.task-name:focus {\n  outline-color: #58888f;\n}\n\n.task-is-complete {\n  text-decoration: line-through;\n  color: var(--color-turquoise-darker);\n  text-decoration-color: var(--color-turquoise-darker);\n}\n\n/* Due date form */\n.due-date-input {\n  margin-right: 10px;\n}\n\n.add-date-button {\n  background-color: transparent;\n  border: none;\n  color: var(--color-dark-blue-muted);\n  font-size: 1rem;\n  text-align: right;\n  padding: 0;\n}\n\n/* Delete task button */\n.delete-task-button {\n  background-color: transparent;\n  border: none;\n  justify-self: flex-end;\n  margin-left: auto;\n  visibility: hidden; /* Hide the button by default */\n}\n\n.task:hover .delete-task-button {\n  visibility: visible; /* Show the button when hovering over .task */\n}\n\n/* Add task form */\n.add-task-container {\n  display: flex;\n  align-items: center;\n  padding: var(--padding-task);\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.add-task-container:hover {\n  background-color: var(--color-white-darker);\n}\n\n.add-task-plus-icon {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: var(--color-turquoise);\n}\n\n.add-task-plus-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  width: auto;\n  font-size: 1rem;\n  color: var(--color-dark-blue-muted);\n}\n\n.task-form:focus {\n  outline: none;\n}\n\n.task-form::placeholder {\n  color: var(--color-dark-blue-muted);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLHdCQUF3QixPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFB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O0FBQ3BCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHc0Q7O0FBRXZDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixtRUFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUEE7O0FBRTZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBSTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUM7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbURBQU87QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RtQztBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQU87QUFDakM7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBMkI7QUFDRzs7QUFFOUIsZ0JBQWdCLCtDQUFHO0FBQ25CLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9kYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQmFsb29CaGFpamFhbjItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogQ29sb3JzICovXG4gIC0tY29sb3ItcHVycGxlOiAjMjQxMjgyO1xuICAtLWNvbG9yLXB1cnBsZS1tdXRlZDogIzU2NGU3YztcbiAgLS1jb2xvci10dXJxdW9pc2U6ICM3ZmJhYmE7XG4gIC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcjogIzY1OWI5YjtcbiAgLS1jb2xvci1sYXZlbmRlcjogI2MxYjJkOTtcbiAgLS1jb2xvci13aGl0ZTogI2Y2ZjZmNjtcbiAgLS1jb2xvci13aGl0ZS1saWdodDogI2YwZjVmOTtcbiAgLS1jb2xvci13aGl0ZS1kYXJrOiAjZWRmMmY3O1xuICAtLWNvbG9yLXdoaXRlLWRhcmtlcjogI2QwZGVlZDtcbiAgLS1jb2xvci1ncmV5OiByZ2IoMjA5LCAyMDUsIDIxOSk7XG4gIC0tY29sb3ItZGFyay1ibHVlOiAjMDUyMTJjO1xuICAtLWNvbG9yLWRhcmstYmx1ZS1tdXRlZDogIzZjN2E4MDtcblxuICAvKiBQYWRkaW5nLCBtaXNjIGZvcm1hdHRpbmcgKi9cbiAgLS1wYWRkaW5nLWJvZHk6IDJyZW07XG4gIC0tcGFkZGluZy1idXR0b246IDAuNXJlbSAxLjVyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctdGFzazogMC4ycmVtO1xufVxuXG4vKiBUZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb29CaGFpamFhbjJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vQmhhaWphYW4yXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuaDMsXG4ucHJvamVjdC1uYW1lLFxuI2FkZC1wcm9qZWN0LWlucHV0LFxuI2FkZC1wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLSBwYWdlIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI3BhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctYm9keSk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5naXRodWItbG9nbyB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG5cbi5mb290ZXIgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBjb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29vbC13aGl0ZS1saWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYm9keSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBQUk9KRUNUUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogUHJvamVjdCBjYXJkICovXG4ucHJvamVjdCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmspO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xufVxuXG4vKiBBZGQgcHJvamVjdCBmb3JtICovXG4jYWRkLXByb2plY3QtaW5wdXQsXG4ucHJvamVjdC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6Zm9jdXMsXG4ucHJvamVjdC1uYW1lOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRGVsZXRlIHByb2plY3QgYnV0dG9uICovXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFRhc2sgTGlzdCAqL1xuLnRhc2stbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xufVxuXG4vKiBUYXNrIGNoZWNrYm94ICovXG4udGFzay1jaGVja2JveCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udGFzay1jaGVja2JveDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcbn1cblxuLyogVGFzayBuYW1lICovXG4udGFzay1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDAuMiAycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIC8qIHdpZHRoOiBhdXRvOyAqL1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XG59XG5cbi50YXNrLW5hbWU6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjNTg4ODhmO1xufVxuXG4udGFzay1pcy1jb21wbGV0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XG59XG5cbi8qIER1ZSBkYXRlIGZvcm0gKi9cbi5kdWUtZGF0ZS1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmFkZC1kYXRlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBEZWxldGUgdGFzayBidXR0b24gKi9cbi5kZWxldGUtdGFzay1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBIaWRlIHRoZSBidXR0b24gYnkgZGVmYXVsdCAqL1xufVxuXG4udGFzazpob3ZlciAuZGVsZXRlLXRhc2stYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgLyogU2hvdyB0aGUgYnV0dG9uIHdoZW4gaG92ZXJpbmcgb3ZlciAudGFzayAqL1xufVxuXG4vKiBBZGQgdGFzayBmb3JtICovXG4uYWRkLXRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uYWRkLXRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtZGFya2VyKTtcbn1cblxuLmFkZC10YXNrLXBsdXMtaWNvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XG59XG5cbi5hZGQtdGFzay1wbHVzLWljb24gc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2stZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xufVxuXG4udGFzay1mb3JtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2stZm9ybTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlLW11dGVkKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1h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RUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLG9EQUFvRDtBQUN0RDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUUsK0JBQStCO0FBQ3JEOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsNkNBQTZDO0FBQ3BFOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1jb2xvci1wdXJwbGU6ICMyNDEyODI7XFxuICAtLWNvbG9yLXB1cnBsZS1tdXRlZDogIzU2NGU3YztcXG4gIC0tY29sb3ItdHVycXVvaXNlOiAjN2ZiYWJhO1xcbiAgLS1jb2xvci10dXJxdW9pc2UtZGFya2VyOiAjNjU5YjliO1xcbiAgLS1jb2xvci1sYXZlbmRlcjogI2MxYjJkOTtcXG4gIC0tY29sb3Itd2hpdGU6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLXdoaXRlLWxpZ2h0OiAjZjBmNWY5O1xcbiAgLS1jb2xvci13aGl0ZS1kYXJrOiAjZWRmMmY3O1xcbiAgLS1jb2xvci13aGl0ZS1kYXJrZXI6ICNkMGRlZWQ7XFxuICAtLWNvbG9yLWdyZXk6IHJnYigyMDksIDIwNSwgMjE5KTtcXG4gIC0tY29sb3ItZGFyay1ibHVlOiAjMDUyMTJjO1xcbiAgLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQ6ICM2YzdhODA7XFxuXFxuICAvKiBQYWRkaW5nLCBtaXNjIGZvcm1hdHRpbmcgKi9cXG4gIC0tcGFkZGluZy1ib2R5OiAycmVtO1xcbiAgLS1wYWRkaW5nLWJ1dHRvbjogMC41cmVtIDEuNXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1wYWRkaW5nLXRhc2s6IDAuMnJlbTtcXG59XFxuXFxuLyogVGV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWxvb0JoYWlqYWFuMlxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0JhbG9vQmhhaWphYW4yLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWxvb0JoYWlqYWFuMlxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG5oMyxcXG4ucHJvamVjdC1uYW1lLFxcbiNhZGQtcHJvamVjdC1pbnB1dCxcXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tIHBhZ2UgbGF5b3V0IC0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jcGFnZS1sYXlvdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtbXV0ZWQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLWJvZHkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS1tdXRlZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtbGlnaHQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmZvb3RlciA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWxpZ2h0KTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvb2wtd2hpdGUtbGlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBQUk9KRUNUUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogUHJvamVjdCBjYXJkICovXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCB2YXIoLS1jb2xvci1ncmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWRhcmspO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtbmFtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBBZGQgcHJvamVjdCBmb3JtICovXFxuI2FkZC1wcm9qZWN0LWlucHV0LFxcbi5wcm9qZWN0LW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaW5wdXQ6Zm9jdXMsXFxuLnByb2plY3QtbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBEZWxldGUgcHJvamVjdCBidXR0b24gKi9cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBUYXNrIExpc3QgKi9cXG4udGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBUYXNrIGNoZWNrYm94ICovXFxuLnRhc2stY2hlY2tib3gge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10dXJxdW9pc2UpO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlKTtcXG59XFxuXFxuLyogVGFzayBuYW1lICovXFxuLnRhc2stbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC4yIDJyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICAvKiB3aWR0aDogYXV0bzsgKi9cXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxufVxcblxcbi50YXNrLW5hbWU6Zm9jdXMge1xcbiAgb3V0bGluZS1jb2xvcjogIzU4ODg4ZjtcXG59XFxuXFxuLnRhc2staXMtY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdHVycXVvaXNlLWRhcmtlcik7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZS1kYXJrZXIpO1xcbn1cXG5cXG4vKiBEdWUgZGF0ZSBmb3JtICovXFxuLmR1ZS1kYXRlLWlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmFkZC1kYXRlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBEZWxldGUgdGFzayBidXR0b24gKi9cXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBIaWRlIHRoZSBidXR0b24gYnkgZGVmYXVsdCAqL1xcbn1cXG5cXG4udGFzazpob3ZlciAuZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IC8qIFNob3cgdGhlIGJ1dHRvbiB3aGVuIGhvdmVyaW5nIG92ZXIgLnRhc2sgKi9cXG59XFxuXFxuLyogQWRkIHRhc2sgZm9ybSAqL1xcbi5hZGQtdGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1kYXJrZXIpO1xcbn1cXG5cXG4uYWRkLXRhc2stcGx1cy1pY29uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXR1cnF1b2lzZSk7XFxufVxcblxcbi5hZGQtdGFzay1wbHVzLWljb24gc3ZnIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xcbn1cXG5cXG4udGFzay1mb3JtOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWJsdWUtbXV0ZWQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdC5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnRzIGZyb20gXCIuL2RvbUVsZW1lbnRzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3QoKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzID0gbmV3IERPTUVsZW1lbnRzKFxuICAgICAgdGhpcy5hZGRQcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLmFkZFRhc2tUb1Byb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5kZWxldGVUYXNrRnJvbVByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMudG9nZ2xlVGFza0NvbXBsZXRlLmJpbmQodGhpcyksXG4gICAgICB0aGlzLnVwZGF0ZVByb2plY3ROYW1lLmJpbmQodGhpcyksXG4gICAgICB0aGlzLnVwZGF0ZVRhc2tOYW1lLmJpbmQodGhpcyksXG4gICAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlLmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XG4gIH1cblxuICBpbml0aWFsaXplQXBwKCkge1xuICAgIHRoaXMubG9hZFByb2plY3RzKCk7XG4gICAgdGhpcy5kb21FbGVtZW50cy5oYW5kbGVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIH1cblxuICBsb2FkUHJvamVjdHMoKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0TmFtZShwcm9qZWN0SWQsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC51cGRhdGVQcm9qZWN0TmFtZShwcm9qZWN0SWQsIG5ld1Byb2plY3ROYW1lKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0SWQsIHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVRhc2tDb21wbGV0ZShwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXNrTmFtZShwcm9qZWN0SWQsIHRhc2tJZCwgbmV3TmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay51cGRhdGVOYW1lKG5ld05hbWUpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXNrRHVlRGF0ZShwcm9qZWN0SWQsIHRhc2tJZCwgbmV3RHVlRGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHRhc2tJZCk7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucHJvamVjdExpc3QuZmluZFRhc2socHJvamVjdElkLCB0YXNrSWQpO1xuICAgIGlmICh0YXNrKSB7XG4gICAgICB0YXNrLnVwZGF0ZUR1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVQcm9qZWN0cygpIHtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxuXG4gIHNhdmVQcm9qZWN0c0FuZFJlbmRlcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LnNvcnRQcm9qZWN0c0FuZFRhc2tzKCk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJObyBkdWUgZGF0ZVwiO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7IG1vbnRoOiBcImxvbmdcIiwgZGF5OiBcIm51bWVyaWNcIiB9O1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdWVEYXRlRWxlbWVudChcbiAgcHJvamVjdElkLFxuICB0YXNrLFxuICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4pIHtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuXG4gIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICBjb25zdCB7IGRhdGVUZXh0LCBkYXRlSW5wdXQgfSA9IGNyZWF0ZURhdGVFbGVtZW50cyhcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2suaXNDb21wbGV0ZVxuICAgICk7XG5cbiAgICBkYXRlVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRvZ2dsZURhdGVJbnB1dChkYXRlVGV4dCwgZGF0ZUlucHV0KVxuICAgICk7XG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+XG4gICAgICBoYW5kbGVEYXRlQ2hhbmdlKFxuICAgICAgICBkYXRlVGV4dCxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgICAgIClcbiAgICApO1xuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgICBoYW5kbGVEYXRlQ2hhbmdlKFxuICAgICAgICBkYXRlVGV4dCxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgICAgIClcbiAgICApO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZURhdGVJbnB1dEVsZW1lbnQodGFzay5kdWVEYXRlLCB0YXNrLmlzQ29tcGxldGUpO1xuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCwgZGF0ZUlucHV0LnZhbHVlKVxuICAgICk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVFbGVtZW50cyhkdWVEYXRlLCBpc0NvbXBsZXRlKSB7XG4gIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGVUZXh0LmlubmVySFRNTCA9IGZvcm1hdERhdGUoZHVlRGF0ZSk7XG4gIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLXRleHRcIik7XG5cbiAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFzay1pcy1jb21wbGV0ZVwiKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZURhdGVJbnB1dEVsZW1lbnQoZHVlRGF0ZSwgaXNDb21wbGV0ZSk7XG4gIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgcmV0dXJuIHsgZGF0ZVRleHQsIGRhdGVJbnB1dCB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlXG4gICAgPyBuZXcgRGF0ZShkdWVEYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMClcbiAgICA6IFwiXCI7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5kaXNhYmxlZCA9IGlzQ29tcGxldGU7XG4gIHJldHVybiBkYXRlSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURhdGVJbnB1dChkYXRlVGV4dCwgZGF0ZUlucHV0KSB7XG4gIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBkYXRlSW5wdXQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGF0ZUNoYW5nZShcbiAgZGF0ZVRleHQsXG4gIGRhdGVJbnB1dCxcbiAgcHJvamVjdElkLFxuICB0YXNrLFxuICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4pIHtcbiAgaWYgKGRhdGVJbnB1dC52YWx1ZSAhPT0gdGFzay5kdWVEYXRlKSB7XG4gICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgZGF0ZVRleHQuaW5uZXJIVE1MID0gZm9ybWF0RGF0ZShkYXRlSW5wdXQudmFsdWUpO1xuICB9XG4gIGRhdGVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVlRGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kYXRlVXRpbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRWxlbWVudHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRQcm9qZWN0Q2FsbGJhY2ssXG4gICAgYWRkVGFza0NhbGxiYWNrLFxuICAgIGRlbGV0ZVByb2plY3RDYWxsYmFjayxcbiAgICBkZWxldGVUYXNrQ2FsbGJhY2ssXG4gICAgdG9nZ2xlVGFza0NhbGxiYWNrLFxuICAgIHVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2ssXG4gICAgdXBkYXRlVGFza05hbWVDYWxsYmFjayxcbiAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4gICkge1xuICAgIHRoaXMuYWRkUHJvamVjdENhbGxiYWNrID0gYWRkUHJvamVjdENhbGxiYWNrO1xuICAgIHRoaXMuYWRkVGFza0NhbGxiYWNrID0gYWRkVGFza0NhbGxiYWNrO1xuICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrID0gZGVsZXRlUHJvamVjdENhbGxiYWNrO1xuICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrID0gZGVsZXRlVGFza0NhbGxiYWNrO1xuICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrID0gdG9nZ2xlVGFza0NhbGxiYWNrO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdE5hbWVDYWxsYmFjayA9IHVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2s7XG4gICAgdGhpcy51cGRhdGVUYXNrTmFtZUNhbGxiYWNrID0gdXBkYXRlVGFza05hbWVDYWxsYmFjaztcbiAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2sgPSB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQsIGNhbGxiYWNrLCBjdXJyZW50VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUgIT09IG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgIGNhbGxiYWNrKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1pbnB1dFwiKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU3RhcnQgYSBuZXcgcHJvamVjdC4uLlwiO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihcbiAgICAgICAgZSxcbiAgICAgICAgKG5ld05hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZFByb2plY3RDYWxsYmFjayhuZXdOYW1lKTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZVByb2plY3ROYW1lKHByb2plY3QpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudCk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlckVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCk7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpc3RFbGVtZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gdGhpcy5jcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0KTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lRWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gICAgcHJvamVjdE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oXG4gICAgICAgIGUsXG4gICAgICAgIChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdE5hbWVDYWxsYmFjayhwcm9qZWN0LmlkLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC52YWx1ZSxcbiAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3ROYW1lRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrKHByb2plY3QuaWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbGV0ZVByb2plY3RCdXR0b247XG4gIH1cblxuICBjcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IHRoaXMuY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3QuaWQsIHRhc2spO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVsO1xuICB9XG5cbiAgY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gdGhpcy5jcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKTtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgbGkuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gdGhpcy5jcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzayk7XG4gICAgbGkuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGNyZWF0ZUR1ZURhdGVFbGVtZW50KFxuICAgICAgcHJvamVjdElkLFxuICAgICAgdGFzayxcbiAgICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuICAgICk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlVGFza0J1dHRvbihwcm9qZWN0SWQsIHRhc2suaWQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG5cbiAgY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG5cbiAgY3JlYXRlVGFza05hbWVJbnB1dChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gICAgbmFtZUlucHV0LmRpc2FibGVkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlzLWNvbXBsZXRlXCIpO1xuICAgIH1cblxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKFxuICAgICAgICBlLFxuICAgICAgICAobmV3TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVGFza05hbWVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIG5ld05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2submFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYW1lSW5wdXQ7XG4gIH1cblxuICBjcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgPC9zdmc+YDtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVUYXNrQnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCkge1xuICAgIGNvbnN0IGFkZFRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsdXNJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxyZWN0IHg9XCIxMFwiIHk9XCI0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjJcIiByeT1cIjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgPHJlY3QgeD1cIjRcIiB5PVwiMTBcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIHJ5PVwiMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wbHVzLWljb25cIik7XG4gICAgYWRkVGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh0YXNrTmFtZSkge1xuICAgICAgICB0aGlzLmFkZFRhc2tDYWxsYmFjayhwcm9qZWN0LmlkLCB0YXNrTmFtZSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaW5wdXQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFkZFRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBhZGRUYXNrRWxlbWVudDtcbiAgfVxufVxuIiwiLy8gcHJvamVjdC5qc1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld1Byb2plY3ROYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZmluZFByb2plY3QocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwYXJzZUludChwcm9qZWN0SWQpXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUHJvamVjdCB3aXRoIGlkICR7cHJvamVjdElkfSBub3QgZm91bmQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBmaW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXNrIHdpdGggaWQgJHt0YXNrSWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcHJvamVjdC51cGRhdGVQcm9qZWN0TmFtZShuZXdQcm9qZWN0TmFtZSk7XG4gIH1cblxuICBzb3J0UHJvamVjdHMoKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgfVxuXG4gIHNvcnRUYXNrcyhwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBkdWVEYXRlQSA9IGEuZHVlRGF0ZSA/IG5ldyBEYXRlKGEuZHVlRGF0ZSkgOiBJbmZpbml0eTtcbiAgICAgIGNvbnN0IGR1ZURhdGVCID0gYi5kdWVEYXRlID8gbmV3IERhdGUoYi5kdWVEYXRlKSA6IEluZmluaXR5O1xuICAgICAgcmV0dXJuIGR1ZURhdGVBIC0gZHVlRGF0ZUI7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0UHJvamVjdHNBbmRUYXNrcygpIHtcbiAgICB0aGlzLnNvcnRQcm9qZWN0cygpO1xuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gdGhpcy5zb3J0VGFza3MocHJvamVjdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xuICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICB0YXNrczogcHJvamVjdC50YXNrcy5tYXAoKHRhc2spID0+ICh7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICBuYW1lOiB0YXNrLm5hbWUsXG4gICAgICAgIGlzQ29tcGxldGU6IHRhc2suaXNDb21wbGV0ZSwgLy8gRW5zdXJlIHRoZSBrZXkgbmFtZSBtYXRjaGVzIFRhc2sgY2xhc3NcbiAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgfSkpLFxuICAgIH0pKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgICByZXR1cm4gcHJvamVjdHNEYXRhLm1hcCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcbiAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lKTtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tEYXRhLmlkO1xuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRGF0YS5kdWVEYXRlO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gXCJcIjtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZU5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICB1cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gIXRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5pbml0aWFsaXplQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9