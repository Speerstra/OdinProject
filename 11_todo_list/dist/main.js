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
  --color-header-and-footer: #332a5f;
  --color-project-header: #241282;
  --color-new-project-header: #afacbf;
  --color-completed-text: #659b9b;
  --color-icons: #7fbaba;
  --color-project-card: #f0f5f9;
  --color-new-project-card: rgb(246, 248, 250);
  --color-hover-project-or-task: #d0deed;
  --color-white: #f6f6f6;
  --color-grey-box-shadow: #d1cddb;
  --color-placeholder-text: #6c7a80;
  --color-over-due: #e21474;

  /* Padding */
  --padding-body: 2rem;
  --padding-button: 0.5rem 1.5rem;
  --padding-task: 0.2rem;
  --padding-project: 2rem;

  /* Border radius */
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
  color: var(--color-white);
  letter-spacing: 0.2em;
}

h3,
.project-name,
#add-project-input,
#add-project-input::placeholder {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-project-header);
  margin: 0;
}

#add-project-input::placeholder {
  color: var(--color-new-project-header);
  font-style: italic;
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
  background-color: var(--color-header-and-footer);
  padding: 0 calc(var(--padding-body) + var(--padding-project));
  box-shadow: 0 2px 4px var(--color-grey-box-shadow);
}

.footer {
  background-color: var(--color-header-and-footer);
  color: var(--color-white);
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -2px 4px var(--color-grey-box-shadow);
}

.github-logo {
  height: 1rem;
  width: auto;
  margin: 0 0.5rem;
}

.footer > a {
  text-decoration: none;
  color: var(--color-white);
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
  padding: var(--padding-project);
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px var(--color-grey-box-shadow);
  background-color: var(--color-project-card);
  border-radius: var(--border-radius);
}

/* Header */
.project-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: var(--border-radius);
}

.project-header:hover {
  background-color: var(--color-hover-project-or-task);
}

/* Add project form */

.project:has(#add-project-input) {
  background-color: var(--color-new-project-card);
  padding: 0.5rem var(--padding-project);
  box-shadow: 0 1px 2px var(--color-grey-box-shadow);
}

#add-project-input,
.project-name {
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  flex-grow: 1;
  height: auto;
  min-height: 2rem;
}

#add-project-input:focus,
.project-name:focus {
  outline: none;
}

/* Delete project button */

.delete-project-button {
  background-color: transparent;
  color: var(--color-icons);
  border: none;
  cursor: pointer;
  padding: 0 0.5rem;
  visibility: hidden;
}

.project-header:hover .delete-project-button {
  visibility: visible;
}

.delete-project-button:hover {
  color: var(--color-project-header);
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
  align-items: top;
  justify-content: left;
  border-radius: var(--border-radius);
  padding: var(--padding-task);
}

.task:hover {
  background-color: var(--color-hover-project-or-task);
}

/* Task checkbox */
.task-checkbox {
  appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
  border: 2px solid var(--color-icons);
  margin: 0 0.7rem 0 0;
  padding: 0;
  flex-shrink: 0;
}

.task-checkbox:checked {
  background-color: var(--color-icons);
}

/* Task name */
.task-name {
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.2 2rem;
  flex-grow: 1;
  font-size: 1.1rem;
  color: var(--color-dark-blue);
}

.task-name:focus {
  outline-color: #58888f;
}

.due-date-overdue {
  color: var(--color-over-due);
}

.task-is-complete {
  text-decoration: line-through;
  color: var(--color-completed-text);
  text-decoration-color: var(--color-completed-text);
}

/* Due date form */
.due-date-input {
  margin-right: 10px;
}

.add-due-date-button {
  background-color: transparent;
  border: none;
  color: var(--color-placeholder-text);
  font-size: 1rem;
  font-style: italic;
  text-align: right;
  padding: 0;
}

/* Delete task button */
.delete-task-button {
  background-color: transparent;
  border: none;
  color: var(--color-icons);
  justify-self: flex-end;
  margin-left: auto;
  visibility: hidden; /* Hide the button by default */
}

.task:hover .delete-task-button {
  visibility: visible; /* Show the button when hovering over .task */
}

.delete-task-button:hover {
  color: var(--color-project-header);
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
  background-color: var(--color-hover-project-or-task);
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
  color: var(--color-icons);
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
  font-style: italic;
  color: var(--color-placeholder-text);
}

.task-form:focus {
  outline: none;
}

.task-form::placeholder {
  color: var(--color-placeholder-text);
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Colors */\n  --color-header-and-footer: #332a5f;\n  --color-project-header: #241282;\n  --color-new-project-header: #afacbf;\n  --color-completed-text: #659b9b;\n  --color-icons: #7fbaba;\n  --color-project-card: #f0f5f9;\n  --color-new-project-card: rgb(246, 248, 250);\n  --color-hover-project-or-task: #d0deed;\n  --color-white: #f6f6f6;\n  --color-grey-box-shadow: #d1cddb;\n  --color-placeholder-text: #6c7a80;\n  --color-over-due: #e21474;\n\n  /* Padding */\n  --padding-body: 2rem;\n  --padding-button: 0.5rem 1.5rem;\n  --padding-task: 0.2rem;\n  --padding-project: 2rem;\n\n  /* Border radius */\n  --border-radius: 8px;\n}\n\n/* Text */\n@font-face {\n  font-family: \"BalooBhaijaan2\";\n  src: url(\"../assets/fonts/BalooBhaijaan2-Regular.ttf\") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: \"BalooBhaijaan2\", sans-serif;\n}\n\nh1 {\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.2em;\n}\n\nh3,\n.project-name,\n#add-project-input,\n#add-project-input::placeholder {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-project-header);\n  margin: 0;\n}\n\n#add-project-input::placeholder {\n  color: var(--color-new-project-header);\n  font-style: italic;\n}\n\n/* -------------------------------------------- */\n/* -------------- page layout ----------------- */\n/* -------------------------------------------- */\n\n#page-layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100dvh;\n}\n\n.header {\n  background-color: var(--color-header-and-footer);\n  padding: 0 calc(var(--padding-body) + var(--padding-project));\n  box-shadow: 0 2px 4px var(--color-grey-box-shadow);\n}\n\n.footer {\n  background-color: var(--color-header-and-footer);\n  color: var(--color-white);\n  padding: 1rem;\n  text-align: center;\n  box-shadow: 0 -2px 4px var(--color-grey-box-shadow);\n}\n\n.github-logo {\n  height: 1rem;\n  width: auto;\n  margin: 0 0.5rem;\n}\n\n.footer > a {\n  text-decoration: none;\n  color: var(--color-white);\n}\n/* -------------------------------------------- */\n/* ------------------ content ------------------ */\n/* -------------------------------------------- */\n\n#content {\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  background-color: var(--color-cool-white-light);\n  padding: var(--padding-body);\n}\n\n/* ---------------------------------------------- */\n/* ------------------ PROJECTS ------------------ */\n/* ---------------------------------------------- */\n\n/* Project card */\n.project {\n  padding: var(--padding-project);\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 4px var(--color-grey-box-shadow);\n  background-color: var(--color-project-card);\n  border-radius: var(--border-radius);\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.project-header:hover {\n  background-color: var(--color-hover-project-or-task);\n}\n\n/* Add project form */\n\n.project:has(#add-project-input) {\n  background-color: var(--color-new-project-card);\n  padding: 0.5rem var(--padding-project);\n  box-shadow: 0 1px 2px var(--color-grey-box-shadow);\n}\n\n#add-project-input,\n.project-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  height: auto;\n  min-height: 2rem;\n}\n\n#add-project-input:focus,\n.project-name:focus {\n  outline: none;\n}\n\n/* Delete project button */\n\n.delete-project-button {\n  background-color: transparent;\n  color: var(--color-icons);\n  border: none;\n  cursor: pointer;\n  padding: 0 0.5rem;\n  visibility: hidden;\n}\n\n.project-header:hover .delete-project-button {\n  visibility: visible;\n}\n\n.delete-project-button:hover {\n  color: var(--color-project-header);\n}\n\n/* ------------------------------------------- */\n/* ------------------ TASKS ------------------ */\n/* ------------------------------------------- */\n\n/* Task List */\n.task-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  align-items: top;\n  justify-content: left;\n  border-radius: var(--border-radius);\n  padding: var(--padding-task);\n}\n\n.task:hover {\n  background-color: var(--color-hover-project-or-task);\n}\n\n/* Task checkbox */\n.task-checkbox {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  align-self: center;\n  border: 2px solid var(--color-icons);\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  flex-shrink: 0;\n}\n\n.task-checkbox:checked {\n  background-color: var(--color-icons);\n}\n\n/* Task name */\n.task-name {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 0.2 2rem;\n  flex-grow: 1;\n  font-size: 1.1rem;\n  color: var(--color-dark-blue);\n}\n\n.task-name:focus {\n  outline-color: #58888f;\n}\n\n.due-date-overdue {\n  color: var(--color-over-due);\n}\n\n.task-is-complete {\n  text-decoration: line-through;\n  color: var(--color-completed-text);\n  text-decoration-color: var(--color-completed-text);\n}\n\n/* Due date form */\n.due-date-input {\n  margin-right: 10px;\n}\n\n.add-due-date-button {\n  background-color: transparent;\n  border: none;\n  color: var(--color-placeholder-text);\n  font-size: 1rem;\n  font-style: italic;\n  text-align: right;\n  padding: 0;\n}\n\n/* Delete task button */\n.delete-task-button {\n  background-color: transparent;\n  border: none;\n  color: var(--color-icons);\n  justify-self: flex-end;\n  margin-left: auto;\n  visibility: hidden; /* Hide the button by default */\n}\n\n.task:hover .delete-task-button {\n  visibility: visible; /* Show the button when hovering over .task */\n}\n\n.delete-task-button:hover {\n  color: var(--color-project-header);\n}\n\n/* Add task form */\n.add-task-container {\n  display: flex;\n  align-items: center;\n  padding: var(--padding-task);\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.add-task-container:hover {\n  background-color: var(--color-hover-project-or-task);\n}\n\n.add-task-plus-icon {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0 0.7rem 0 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: var(--color-icons);\n}\n\n.add-task-plus-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  background-color: transparent;\n  border: none;\n  border-radius: var(--border-radius);\n  flex-grow: 1;\n  width: auto;\n  font-size: 1rem;\n  font-style: italic;\n  color: var(--color-placeholder-text);\n}\n\n.task-form:focus {\n  outline: none;\n}\n\n.task-form::placeholder {\n  color: var(--color-placeholder-text);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   createDueDateElement: () => (/* binding */ createDueDateElement),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   isOverdue: () => (/* binding */ isOverdue)
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
    const addDateButton = createAddDateButton();
    addDateButton.addEventListener("click", () =>
      handleAddDateButtonClick(
        dateContainer,
        projectId,
        task,
        updateTaskDueDateCallback
      )
    );
    dateContainer.appendChild(addDateButton);
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

function createAddDateButton() {
  const button = document.createElement("button");
  button.textContent = "Add a due date";
  button.classList.add("add-due-date-button");
  return button;
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

function handleAddDateButtonClick(
  dateContainer,
  projectId,
  task,
  updateTaskDueDateCallback
) {
  const dateInput = createDateInputElement(null, false);
  dateInput.style.display = "inline";
  dateInput.addEventListener("change", () => {
    updateTaskDueDateCallback(projectId, task.id, dateInput.value);
    dateContainer.removeChild(dateInput);
  });

  dateContainer.appendChild(dateInput);
  dateInput.focus();
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
const initialProjectList = JSON.stringify([
  {
    id: 1111,
    name: "1. Odin Javascript",
    tasks: [
      {
        id: 101,
        name: "Library",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 88)
        ).toISOString(),
      },
      {
        id: 102,
        name: "TicTacToe",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 56)
        ).toISOString(),
      },
      {
        id: 103,
        name: "Restaurant Page",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 33)
        ).toISOString(),
      },
      {
        id: 104,
        name: "To Do List",
        isComplete: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 7)
        ).toISOString(),
      },
      {
        id: 105,
        name: "Weather App",
        isComplete: false,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toISOString(),
      },
    ],
  },
  {
    id: 2222,
    name: "2. Garden",
    tasks: [
      { id: 201, name: "Plant tomatoes", isComplete: false, dueDate: null },
    ],
  },
]);

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
  static initialize() {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", _initialProjectList_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFB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QUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtREFBTztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR087QUFDUDs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9Jc0Q7O0FBRXZDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixtRUFBb0I7QUFDL0M7QUFDQTtBQUNBO0FB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V0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7OztBQ0EyQjtBQUNHOztBQUU5QixnQkFBZ0IsK0NBQUc7QUFDbkIsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGVVdGlscy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9pbml0aWFsUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQmFsb29CaGFpamFhbjItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogQ29sb3JzICovXG4gIC0tY29sb3ItaGVhZGVyLWFuZC1mb290ZXI6ICMzMzJhNWY7XG4gIC0tY29sb3ItcHJvamVjdC1oZWFkZXI6ICMyNDEyODI7XG4gIC0tY29sb3ItbmV3LXByb2plY3QtaGVhZGVyOiAjYWZhY2JmO1xuICAtLWNvbG9yLWNvbXBsZXRlZC10ZXh0OiAjNjU5YjliO1xuICAtLWNvbG9yLWljb25zOiAjN2ZiYWJhO1xuICAtLWNvbG9yLXByb2plY3QtY2FyZDogI2YwZjVmOTtcbiAgLS1jb2xvci1uZXctcHJvamVjdC1jYXJkOiByZ2IoMjQ2LCAyNDgsIDI1MCk7XG4gIC0tY29sb3ItaG92ZXItcHJvamVjdC1vci10YXNrOiAjZDBkZWVkO1xuICAtLWNvbG9yLXdoaXRlOiAjZjZmNmY2O1xuICAtLWNvbG9yLWdyZXktYm94LXNoYWRvdzogI2QxY2RkYjtcbiAgLS1jb2xvci1wbGFjZWhvbGRlci10ZXh0OiAjNmM3YTgwO1xuICAtLWNvbG9yLW92ZXItZHVlOiAjZTIxNDc0O1xuXG4gIC8qIFBhZGRpbmcgKi9cbiAgLS1wYWRkaW5nLWJvZHk6IDJyZW07XG4gIC0tcGFkZGluZy1idXR0b246IDAuNXJlbSAxLjVyZW07XG4gIC0tcGFkZGluZy10YXNrOiAwLjJyZW07XG4gIC0tcGFkZGluZy1wcm9qZWN0OiAycmVtO1xuXG4gIC8qIEJvcmRlciByYWRpdXMgKi9cbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi8qIFRleHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCYWxvb0JoYWlqYWFuMlwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb29CaGFpamFhbjJcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbmgzLFxuLnByb2plY3QtbmFtZSxcbiNhZGQtcHJvamVjdC1pbnB1dCxcbiNhZGQtcHJvamVjdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByb2plY3QtaGVhZGVyKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldy1wcm9qZWN0LWhlYWRlcik7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tIHBhZ2UgbGF5b3V0IC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1hbmQtZm9vdGVyKTtcbiAgcGFkZGluZzogMCBjYWxjKHZhcigtLXBhZGRpbmctYm9keSkgKyB2YXIoLS1wYWRkaW5nLXByb2plY3QpKTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHZhcigtLWNvbG9yLWdyZXktYm94LXNoYWRvdyk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItYW5kLWZvb3Rlcik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAtMnB4IDRweCB2YXIoLS1jb2xvci1ncmV5LWJveC1zaGFkb3cpO1xufVxuXG4uZ2l0aHViLWxvZ28ge1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4uZm9vdGVyID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvb2wtd2hpdGUtbGlnaHQpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJvZHkpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gUFJPSkVDVFMgLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFByb2plY3QgY2FyZCAqL1xuLnByb2plY3Qge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXByb2plY3QpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleS1ib3gtc2hhZG93KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJvamVjdC1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8qIEhlYWRlciAqL1xuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyLXByb2plY3Qtb3ItdGFzayk7XG59XG5cbi8qIEFkZCBwcm9qZWN0IGZvcm0gKi9cblxuLnByb2plY3Q6aGFzKCNhZGQtcHJvamVjdC1pbnB1dCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXctcHJvamVjdC1jYXJkKTtcbiAgcGFkZGluZzogMC41cmVtIHZhcigtLXBhZGRpbmctcHJvamVjdCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCB2YXIoLS1jb2xvci1ncmV5LWJveC1zaGFkb3cpO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQsXG4ucHJvamVjdC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAycmVtO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQ6Zm9jdXMsXG4ucHJvamVjdC1uYW1lOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRGVsZXRlIHByb2plY3QgYnV0dG9uICovXG5cbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9qZWN0LWhlYWRlcik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogVGFzayBMaXN0ICovXG4udGFzay1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHRvcDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlci1wcm9qZWN0LW9yLXRhc2spO1xufVxuXG4vKiBUYXNrIGNoZWNrYm94ICovXG4udGFzay1jaGVja2JveCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1pY29ucyk7XG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcbn1cblxuLyogVGFzayBuYW1lICovXG4udGFzay1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDAuMiAycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcbn1cblxuLnRhc2stbmFtZTpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICM1ODg4OGY7XG59XG5cbi5kdWUtZGF0ZS1vdmVyZHVlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW92ZXItZHVlKTtcbn1cblxuLnRhc2staXMtY29tcGxldGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWNvbXBsZXRlZC10ZXh0KTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jb2xvci1jb21wbGV0ZWQtdGV4dCk7XG59XG5cbi8qIER1ZSBkYXRlIGZvcm0gKi9cbi5kdWUtZGF0ZS1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmFkZC1kdWUtZGF0ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcGxhY2Vob2xkZXItdGV4dCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogRGVsZXRlIHRhc2sgYnV0dG9uICovXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgLyogSGlkZSB0aGUgYnV0dG9uIGJ5IGRlZmF1bHQgKi9cbn1cblxuLnRhc2s6aG92ZXIgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7IC8qIFNob3cgdGhlIGJ1dHRvbiB3aGVuIGhvdmVyaW5nIG92ZXIgLnRhc2sgKi9cbn1cblxuLmRlbGV0ZS10YXNrLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9qZWN0LWhlYWRlcik7XG59XG5cbi8qIEFkZCB0YXNrIGZvcm0gKi9cbi5hZGQtdGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2spO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlci1wcm9qZWN0LW9yLXRhc2spO1xufVxuXG4uYWRkLXRhc2stcGx1cy1pY29uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbnMpO1xufVxuXG4uYWRkLXRhc2stcGx1cy1pY29uIHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YXNrLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wbGFjZWhvbGRlci10ZXh0KTtcbn1cblxuLnRhc2stZm9ybTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrLWZvcm06OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXBsYWNlaG9sZGVyLXRleHQpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQzVDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyx5QkFBeUI7O0VBRXpCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsNkJBQTZCO0VBQzdCLDBEQUFvRTtFQUNwRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQSxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELGlEQUFpRDs7QUFFakQ7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCw2REFBNkQ7RUFDN0Qsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFlBQVk7RUFD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YUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tY29sb3ItaGVhZGVyLWFuZC1mb290ZXI6ICMzMzJhNWY7XFxuICAtLWNvbG9yLXByb2plY3QtaGVhZGVyOiAjMjQxMjgyO1xcbiAgLS1jb2xvci1uZXctcHJvamVjdC1oZWFkZXI6ICNhZmFjYmY7XFxuICAtLWNvbG9yLWNvbXBsZXRlZC10ZXh0OiAjNjU5YjliO1xcbiAgLS1jb2xvci1pY29uczogIzdmYmFiYTtcXG4gIC0tY29sb3ItcHJvamVjdC1jYXJkOiAjZjBmNWY5O1xcbiAgLS1jb2xvci1uZXctcHJvamVjdC1jYXJkOiByZ2IoMjQ2LCAyNDgsIDI1MCk7XFxuICAtLWNvbG9yLWhvdmVyLXByb2plY3Qtb3ItdGFzazogI2QwZGVlZDtcXG4gIC0tY29sb3Itd2hpdGU6ICNmNmY2ZjY7XFxuICAtLWNvbG9yLWdyZXktYm94LXNoYWRvdzogI2QxY2RkYjtcXG4gIC0tY29sb3ItcGxhY2Vob2xkZXItdGV4dDogIzZjN2E4MDtcXG4gIC0tY29sb3Itb3Zlci1kdWU6ICNlMjE0NzQ7XFxuXFxuICAvKiBQYWRkaW5nICovXFxuICAtLXBhZGRpbmctYm9keTogMnJlbTtcXG4gIC0tcGFkZGluZy1idXR0b246IDAuNXJlbSAxLjVyZW07XFxuICAtLXBhZGRpbmctdGFzazogMC4ycmVtO1xcbiAgLS1wYWRkaW5nLXByb2plY3Q6IDJyZW07XFxuXFxuICAvKiBCb3JkZXIgcmFkaXVzICovXFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLyogVGV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWxvb0JoYWlqYWFuMlxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0JhbG9vQmhhaWphYW4yLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWxvb0JoYWlqYWFuMlxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xcbn1cXG5cXG5oMyxcXG4ucHJvamVjdC1uYW1lLFxcbiNhZGQtcHJvamVjdC1pbnB1dCxcXG4jYWRkLXByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9qZWN0LWhlYWRlcik7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldy1wcm9qZWN0LWhlYWRlcik7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0gcGFnZSBsYXlvdXQgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNwYWdlLWxheW91dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1hbmQtZm9vdGVyKTtcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1wYWRkaW5nLWJvZHkpICsgdmFyKC0tcGFkZGluZy1wcm9qZWN0KSk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleS1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItYW5kLWZvb3Rlcik7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgLTJweCA0cHggdmFyKC0tY29sb3ItZ3JleS1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmZvb3RlciA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvb2wtd2hpdGUtbGlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBQUk9KRUNUUyAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogUHJvamVjdCBjYXJkICovXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1wcm9qZWN0KTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggdmFyKC0tY29sb3ItZ3JleS1ib3gtc2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByb2plY3QtY2FyZCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyLXByb2plY3Qtb3ItdGFzayk7XFxufVxcblxcbi8qIEFkZCBwcm9qZWN0IGZvcm0gKi9cXG5cXG4ucHJvamVjdDpoYXMoI2FkZC1wcm9qZWN0LWlucHV0KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXctcHJvamVjdC1jYXJkKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSB2YXIoLS1wYWRkaW5nLXByb2plY3QpO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHZhcigtLWNvbG9yLWdyZXktYm94LXNoYWRvdyk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dCxcXG4ucHJvamVjdC1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaW5wdXQ6Zm9jdXMsXFxuLnByb2plY3QtbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBEZWxldGUgcHJvamVjdCBidXR0b24gKi9cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9qZWN0LWhlYWRlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIFRhc2sgTGlzdCAqL1xcbi50YXNrLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2spO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlci1wcm9qZWN0LW9yLXRhc2spO1xcbn1cXG5cXG4vKiBUYXNrIGNoZWNrYm94ICovXFxuLnRhc2stY2hlY2tib3gge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1pY29ucyk7XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pY29ucyk7XFxufVxcblxcbi8qIFRhc2sgbmFtZSAqL1xcbi50YXNrLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDAuMiAycmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ibHVlKTtcXG59XFxuXFxuLnRhc2stbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lLWNvbG9yOiAjNTg4ODhmO1xcbn1cXG5cXG4uZHVlLWRhdGUtb3ZlcmR1ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb3Zlci1kdWUpO1xcbn1cXG5cXG4udGFzay1pcy1jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jb21wbGV0ZWQtdGV4dCk7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNvbG9yLWNvbXBsZXRlZC10ZXh0KTtcXG59XFxuXFxuLyogRHVlIGRhdGUgZm9ybSAqL1xcbi5kdWUtZGF0ZS1pbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtZHVlLWRhdGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXBsYWNlaG9sZGVyLXRleHQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBEZWxldGUgdGFzayBidXR0b24gKi9cXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgLyogSGlkZSB0aGUgYnV0dG9uIGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAvKiBTaG93IHRoZSBidXR0b24gd2hlbiBob3ZlcmluZyBvdmVyIC50YXNrICovXFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByb2plY3QtaGVhZGVyKTtcXG59XFxuXFxuLyogQWRkIHRhc2sgZm9ybSAqL1xcbi5hZGQtdGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlci1wcm9qZWN0LW9yLXRhc2spO1xcbn1cXG5cXG4uYWRkLXRhc2stcGx1cy1pY29uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcXG59XFxuXFxuLmFkZC10YXNrLXBsdXMtaWNvbiBzdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXBsYWNlaG9sZGVyLXRleHQpO1xcbn1cXG5cXG4udGFzay1mb3JtOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wbGFjZWhvbGRlci10ZXh0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBET01FbGVtZW50cyBmcm9tIFwiLi9kb21FbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG4gICAgdGhpcy5kb21FbGVtZW50cyA9IG5ldyBET01FbGVtZW50cyhcbiAgICAgIHRoaXMuYWRkUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLmRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuZGVsZXRlVGFza0Zyb21Qcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLnRvZ2dsZVRhc2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TmFtZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrTmFtZS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIFN0b3JhZ2UuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgIHRoaXMuZG9tRWxlbWVudHMuaGFuZGxlQWRkUHJvamVjdEZvcm0oKTtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QucHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdExpc3QudXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrTmFtZSk7XG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGUocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza05hbWUocHJvamVjdElkLCB0YXNrSWQsIG5ld05hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2sudXBkYXRlTmFtZShuZXdOYW1lKTtcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFza0R1ZURhdGUocHJvamVjdElkLCB0YXNrSWQsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgdGFzay51cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBzYXZlUHJvamVjdHMoKSB7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdHModGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIH1cblxuICBzYXZlUHJvamVjdHNBbmRSZW5kZXIoKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5zb3J0UHJvamVjdHNBbmRUYXNrcygpO1xuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgdGhpcy5kb21FbGVtZW50cy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBcIk5vIGR1ZSBkYXRlXCI7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3ZlcmR1ZShkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHJldHVybiBkdWVEYXRlIDwgdG9kYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdWVEYXRlRWxlbWVudChcbiAgcHJvamVjdElkLFxuICB0YXNrLFxuICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4pIHtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuXG4gIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICBjb25zdCB7IGRhdGVUZXh0LCBkYXRlSW5wdXQgfSA9IGNyZWF0ZURhdGVFbGVtZW50cyhcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2suaXNDb21wbGV0ZVxuICAgICk7XG5cbiAgICBkYXRlVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRvZ2dsZURhdGVJbnB1dChkYXRlVGV4dCwgZGF0ZUlucHV0KVxuICAgICk7XG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+XG4gICAgICBoYW5kbGVEYXRlQ2hhbmdlKFxuICAgICAgICBkYXRlVGV4dCxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgICAgIClcbiAgICApO1xuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgICBoYW5kbGVEYXRlQ2hhbmdlKFxuICAgICAgICBkYXRlVGV4dCxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbiAgICAgIClcbiAgICApO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFkZERhdGVCdXR0b24gPSBjcmVhdGVBZGREYXRlQnV0dG9uKCk7XG4gICAgYWRkRGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGhhbmRsZUFkZERhdGVCdXR0b25DbGljayhcbiAgICAgICAgZGF0ZUNvbnRhaW5lcixcbiAgICAgICAgcHJvamVjdElkLFxuICAgICAgICB0YXNrLFxuICAgICAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4gICAgICApXG4gICAgKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZERhdGVCdXR0b24pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVFbGVtZW50cyhkdWVEYXRlLCBpc0NvbXBsZXRlKSB7XG4gIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGVUZXh0LmlubmVySFRNTCA9IGZvcm1hdERhdGUoZHVlRGF0ZSk7XG4gIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLXRleHRcIik7XG5cbiAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFzay1pcy1jb21wbGV0ZVwiKTtcbiAgfVxuXG4gIGlmIChpc092ZXJkdWUoZHVlRGF0ZSkpIHtcbiAgICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtb3ZlcmR1ZVwiKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZURhdGVJbnB1dEVsZW1lbnQoZHVlRGF0ZSwgaXNDb21wbGV0ZSk7XG4gIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgcmV0dXJuIHsgZGF0ZVRleHQsIGRhdGVJbnB1dCB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlXG4gICAgPyBuZXcgRGF0ZShkdWVEYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMClcbiAgICA6IFwiXCI7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5kaXNhYmxlZCA9IGlzQ29tcGxldGU7XG4gIHJldHVybiBkYXRlSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZERhdGVCdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgZHVlIGRhdGVcIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtZHVlLWRhdGUtYnV0dG9uXCIpO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEYXRlSW5wdXQoZGF0ZVRleHQsIGRhdGVJbnB1dCkge1xuICBkYXRlVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgZGF0ZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURhdGVDaGFuZ2UoXG4gIGRhdGVUZXh0LFxuICBkYXRlSW5wdXQsXG4gIHByb2plY3RJZCxcbiAgdGFzayxcbiAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuKSB7XG4gIGlmIChkYXRlSW5wdXQudmFsdWUgIT09IHRhc2suZHVlRGF0ZSkge1xuICAgIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBkYXRlSW5wdXQudmFsdWUpO1xuICAgIGRhdGVUZXh0LmlubmVySFRNTCA9IGZvcm1hdERhdGUoZGF0ZUlucHV0LnZhbHVlKTtcbiAgfVxuICBkYXRlVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkRGF0ZUJ1dHRvbkNsaWNrKFxuICBkYXRlQ29udGFpbmVyLFxuICBwcm9qZWN0SWQsXG4gIHRhc2ssXG4gIHVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2tcbikge1xuICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVEYXRlSW5wdXRFbGVtZW50KG51bGwsIGZhbHNlKTtcbiAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgZGF0ZUNvbnRhaW5lci5yZW1vdmVDaGlsZChkYXRlSW5wdXQpO1xuICB9KTtcblxuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIGRhdGVJbnB1dC5mb2N1cygpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVlRGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kYXRlVXRpbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRWxlbWVudHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRQcm9qZWN0Q2FsbGJhY2ssXG4gICAgYWRkVGFza0NhbGxiYWNrLFxuICAgIGRlbGV0ZVByb2plY3RDYWxsYmFjayxcbiAgICBkZWxldGVUYXNrQ2FsbGJhY2ssXG4gICAgdG9nZ2xlVGFza0NhbGxiYWNrLFxuICAgIHVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2ssXG4gICAgdXBkYXRlVGFza05hbWVDYWxsYmFjayxcbiAgICB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrXG4gICkge1xuICAgIHRoaXMuYWRkUHJvamVjdENhbGxiYWNrID0gYWRkUHJvamVjdENhbGxiYWNrO1xuICAgIHRoaXMuYWRkVGFza0NhbGxiYWNrID0gYWRkVGFza0NhbGxiYWNrO1xuICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrID0gZGVsZXRlUHJvamVjdENhbGxiYWNrO1xuICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrID0gZGVsZXRlVGFza0NhbGxiYWNrO1xuICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrID0gdG9nZ2xlVGFza0NhbGxiYWNrO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdE5hbWVDYWxsYmFjayA9IHVwZGF0ZVByb2plY3ROYW1lQ2FsbGJhY2s7XG4gICAgdGhpcy51cGRhdGVUYXNrTmFtZUNhbGxiYWNrID0gdXBkYXRlVGFza05hbWVDYWxsYmFjaztcbiAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2sgPSB1cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQsIGNhbGxiYWNrLCBjdXJyZW50VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUgIT09IG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgIGNhbGxiYWNrKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1pbnB1dFwiKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU3RhcnQgYSBuZXcgcHJvamVjdC4uLlwiO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihcbiAgICAgICAgZSxcbiAgICAgICAgKG5ld05hbWUpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZFByb2plY3RDYWxsYmFjayhuZXdOYW1lKTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZVByb2plY3ROYW1lKHByb2plY3QpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudCk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xuICAgIHByb2plY3RIZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlckVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCk7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpc3RFbGVtZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gdGhpcy5jcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0KTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lRWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gICAgcHJvamVjdE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oXG4gICAgICAgIGUsXG4gICAgICAgIChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdE5hbWVDYWxsYmFjayhwcm9qZWN0LmlkLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC52YWx1ZSxcbiAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3ROYW1lRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrKHByb2plY3QuaWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbGV0ZVByb2plY3RCdXR0b247XG4gIH1cblxuICBjcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IHRoaXMuY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3QuaWQsIHRhc2spO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVsO1xuICB9XG5cbiAgY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gdGhpcy5jcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKTtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgbGkuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gdGhpcy5jcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzayk7XG4gICAgbGkuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGNyZWF0ZUR1ZURhdGVFbGVtZW50KFxuICAgICAgcHJvamVjdElkLFxuICAgICAgdGFzayxcbiAgICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGVDYWxsYmFja1xuICAgICk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlVGFza0J1dHRvbihwcm9qZWN0SWQsIHRhc2suaWQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG5cbiAgY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzaykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG5cbiAgY3JlYXRlVGFza05hbWVJbnB1dChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gICAgbmFtZUlucHV0LmRpc2FibGVkID0gdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlzLWNvbXBsZXRlXCIpO1xuICAgIH1cblxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKFxuICAgICAgICBlLFxuICAgICAgICAobmV3TmFtZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVGFza05hbWVDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2suaWQsIG5ld05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2submFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYW1lSW5wdXQ7XG4gIH1cblxuICBjcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXhcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgPC9zdmc+YDtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVUYXNrQnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCkge1xuICAgIGNvbnN0IGFkZFRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsdXNJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxyZWN0IHg9XCIxMFwiIHk9XCI0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjJcIiByeT1cIjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgPHJlY3QgeD1cIjRcIiB5PVwiMTBcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIHJ5PVwiMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wbHVzLWljb25cIik7XG4gICAgYWRkVGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh0YXNrTmFtZSkge1xuICAgICAgICB0aGlzLmFkZFRhc2tDYWxsYmFjayhwcm9qZWN0LmlkLCB0YXNrTmFtZSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaW5wdXQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFkZFRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBhZGRUYXNrRWxlbWVudDtcbiAgfVxufVxuIiwiY29uc3QgaW5pdGlhbFByb2plY3RMaXN0ID0gSlNPTi5zdHJpbmdpZnkoW1xuICB7XG4gICAgaWQ6IDExMTEsXG4gICAgbmFtZTogXCIxLiBPZGluIEphdmFzY3JpcHRcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogMTAxLFxuICAgICAgICBuYW1lOiBcIkxpYnJhcnlcIixcbiAgICAgICAgaXNDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gODgpXG4gICAgICAgICkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMDIsXG4gICAgICAgIG5hbWU6IFwiVGljVGFjVG9lXCIsXG4gICAgICAgIGlzQ29tcGxldGU6IHRydWUsXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKFxuICAgICAgICAgIG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDU2KVxuICAgICAgICApLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTAzLFxuICAgICAgICBuYW1lOiBcIlJlc3RhdXJhbnQgUGFnZVwiLFxuICAgICAgICBpc0NvbXBsZXRlOiB0cnVlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSAzMylcbiAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEwNCxcbiAgICAgICAgbmFtZTogXCJUbyBEbyBMaXN0XCIsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSA3KVxuICAgICAgICApLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTA1LFxuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLnNldE1vbnRoKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMjIyLFxuICAgIG5hbWU6IFwiMi4gR2FyZGVuXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHsgaWQ6IDIwMSwgbmFtZTogXCJQbGFudCB0b21hdG9lc1wiLCBpc0NvbXBsZXRlOiBmYWxzZSwgZHVlRGF0ZTogbnVsbCB9LFxuICAgIF0sXG4gIH0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFByb2plY3RMaXN0O1xuIiwiLy8gcHJvamVjdC5qc1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld1Byb2plY3ROYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZmluZFByb2plY3QocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwYXJzZUludChwcm9qZWN0SWQpXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUHJvamVjdCB3aXRoIGlkICR7cHJvamVjdElkfSBub3QgZm91bmQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBmaW5kVGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXNrIHdpdGggaWQgJHt0YXNrSWR9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcHJvamVjdC51cGRhdGVQcm9qZWN0TmFtZShuZXdQcm9qZWN0TmFtZSk7XG4gIH1cblxuICBzb3J0UHJvamVjdHMoKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgfVxuXG4gIHNvcnRUYXNrcyhwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBkdWVEYXRlQSA9IGEuZHVlRGF0ZSA/IG5ldyBEYXRlKGEuZHVlRGF0ZSkgOiBJbmZpbml0eTtcbiAgICAgIGNvbnN0IGR1ZURhdGVCID0gYi5kdWVEYXRlID8gbmV3IERhdGUoYi5kdWVEYXRlKSA6IEluZmluaXR5O1xuICAgICAgcmV0dXJuIGR1ZURhdGVBIC0gZHVlRGF0ZUI7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0UHJvamVjdHNBbmRUYXNrcygpIHtcbiAgICB0aGlzLnNvcnRQcm9qZWN0cygpO1xuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gdGhpcy5zb3J0VGFza3MocHJvamVjdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgaW5pdGlhbFByb2plY3RMaXN0IGZyb20gXCIuL2luaXRpYWxQcm9qZWN0TGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgc3RhdGljIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIGluaXRpYWxQcm9qZWN0TGlzdCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNhdmVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgIGlkOiBwcm9qZWN0LmlkLFxuICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgdGFza3M6IHByb2plY3QudGFza3MubWFwKCh0YXNrKSA9PiAoe1xuICAgICAgICBpZDogdGFzay5pZCxcbiAgICAgICAgbmFtZTogdGFzay5uYW1lLFxuICAgICAgICBpc0NvbXBsZXRlOiB0YXNrLmlzQ29tcGxldGUsXG4gICAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgIH0pKSxcbiAgICB9KSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzRGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbiAgICByZXR1cm4gcHJvamVjdHNEYXRhLm1hcCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcbiAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lKTtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tEYXRhLmlkO1xuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRGF0YS5kdWVEYXRlO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gXCJcIjtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZU5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICB1cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gIXRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5pbml0aWFsaXplQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9