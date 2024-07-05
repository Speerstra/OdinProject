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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Quicksand-Regular.ttf */ "./src/assets/fonts/Quicksand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Quicksand-Bold.ttf */ "./src/assets/fonts/Quicksand-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Quicksand-Light.ttf */ "./src/assets/fonts/Quicksand-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {
        font-family: Quicksand;
        src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
        font-family: Quicksand-Bold;
        src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
        font-family: Quicksand-Light;
        src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

* {
        /* border: red solid; */
        font-family: Quicksand, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
:root {
        --nav-background: rgb(12, 12, 92);
        --content-background: rgb(226, 232, 245);
}
body {
        margin: 0;
}

#main {
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-areas: 
                "header header"
                "nav  content";
        grid-template-rows: auto 1fr;
        grid-template-columns: 300px 1fr;
}

/* HEADER */

header {
        grid-area: header;
        background-color: var(--nav-background);
        box-shadow: 0 4px 2px -2px rgb(113, 85, 85);
}

header > h1 {
        color: var(--content-background);
        font-family: Quicksand-Bold;
        font-size: 3rem;
        margin: 1.5rem;
        padding: 0;
}

nav {
        grid-area: nav;
        background-color: rgb(181, 187, 230);
        padding: 2rem 0 0 1.5rem;
}


#add-task-btn {
        background-color: var(--nav-background); 
        color: rgb(181, 187, 230);
        padding: 0.5rem 2rem;
        font-size: 2rem;
        border: 0;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border-radius: 0.5rem;
}

nav > ul {
        padding: 0;
}

nav > ul > li {
        list-style-type: none;
        color: black;
        font-size: 2rem;
        margin: 0.5rem 0;
        padding: 0;
}

/* CONTENT */
#content {
        grid-area: content;
        background-color: var( --content-background);
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":";AACA;QACQ,sBAAsB;QACtB,4CAAiD;AACzD;;AAEA;QACQ,2BAA2B;QAC3B,4CAA8C;AACtD;;AAEA;QACQ,4BAA4B;QAC5B,4CAA+C;AACvD;;AAEA;QACQ,uBAAuB;QACvB,iIAAiI;AACzI;AACA;QACQ,iCAAiC;QACjC,wCAAwC;AAChD;AACA;QACQ,SAAS;AACjB;;AAEA;QACQ,gBAAgB;QAChB,MAAM;QACN,OAAO;QACP,WAAW;QACX,aAAa;QACb,aAAa;QACb;;8BAEsB;QACtB,4BAA4B;QAC5B,gCAAgC;AACxC;;AAEA,WAAW;;AAEX;QACQ,iBAAiB;QACjB,uCAAuC;QACvC,2CAA2C;AACnD;;AAEA;QACQ,gCAAgC;QAChC,2BAA2B;QAC3B,eAAe;QACf,cAAc;QACd,UAAU;AAClB;;AAEA;QACQ,cAAc;QACd,oCAAoC;QACpC,wBAAwB;AAChC;;;AAGA;QACQ,uCAAuC;QACvC,yBAAyB;QACzB,oBAAoB;QACpB,eAAe;QACf,SAAS;QACT,uEAAuE;QACvE,qBAAqB;AAC7B;;AAEA;QACQ,UAAU;AAClB;;AAEA;QACQ,qBAAqB;QACrB,YAAY;QACZ,eAAe;QACf,gBAAgB;QAChB,UAAU;AAClB;;AAEA,YAAY;AACZ;QACQ,kBAAkB;QAClB,4CAA4C;AACpD","sourcesContent":["\n@font-face {\n        font-family: Quicksand;\n        src: url('../assets/fonts/Quicksand-Regular.ttf');\n}\n\n@font-face {\n        font-family: Quicksand-Bold;\n        src: url('../assets/fonts/Quicksand-Bold.ttf');\n}\n\n@font-face {\n        font-family: Quicksand-Light;\n        src: url('../assets/fonts/Quicksand-Light.ttf');\n}\n\n* {\n        /* border: red solid; */\n        font-family: Quicksand, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n:root {\n        --nav-background: rgb(12, 12, 92);\n        --content-background: rgb(226, 232, 245);\n}\nbody {\n        margin: 0;\n}\n\n#main {\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100vh;\n        display: grid;\n        grid-template-areas: \n                \"header header\"\n                \"nav  content\";\n        grid-template-rows: auto 1fr;\n        grid-template-columns: 300px 1fr;\n}\n\n/* HEADER */\n\nheader {\n        grid-area: header;\n        background-color: var(--nav-background);\n        box-shadow: 0 4px 2px -2px rgb(113, 85, 85);\n}\n\nheader > h1 {\n        color: var(--content-background);\n        font-family: Quicksand-Bold;\n        font-size: 3rem;\n        margin: 1.5rem;\n        padding: 0;\n}\n\nnav {\n        grid-area: nav;\n        background-color: rgb(181, 187, 230);\n        padding: 2rem 0 0 1.5rem;\n}\n\n\n#add-task-btn {\n        background-color: var(--nav-background); \n        color: rgb(181, 187, 230);\n        padding: 0.5rem 2rem;\n        font-size: 2rem;\n        border: 0;\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n        border-radius: 0.5rem;\n}\n\nnav > ul {\n        padding: 0;\n}\n\nnav > ul > li {\n        list-style-type: none;\n        color: black;\n        font-size: 2rem;\n        margin: 0.5rem 0;\n        padding: 0;\n}\n\n/* CONTENT */\n#content {\n        grid-area: content;\n        background-color: var( --content-background);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/scripts/controller/mainController.js":
/*!**************************************************!*\
  !*** ./src/scripts/controller/mainController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainController)
/* harmony export */ });
class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
    
            view.getById('add-task-dialog-btn').addEventListener('click', () => this.view.openDialog('add-task-dialog'));
            view.getById('add-task-submit-btn').addEventListener('click', this.addTaskFromInput);
            view.getById('add-project-dialog-btn').addEventListener('click', () => this.view.openDialog('add-project-dialog'));
            view.getById('add-project-submit-btn').addEventListener('click', this.addProjectFromInput);

    
            // Filter displays
            // toggle task as complete
            // window.addeventlistener('load', getdatafromstorage)

            document.addEventListener('click', (e) => {
                        if (e.target.classList.contains('complete-task-btn')) {
                        const taskId = e.target.dataset.taskId;
                        console.log(taskId)
                        const task = this.model.getTaskById(taskId);
                        console.log('task', task)
                        if (task) {
                                task.toggleComplete();
                                this.model.updateTask(taskId, task);
                                this.displayTasks();
                        }
                        }
                });
        }
    
        addTaskFromInput = (e) => {
                e.preventDefault();
                
                let { taskName, taskDueDate, taskIsImportant, taskIsComplete } = this.view.getTaskFormInput();
        
                let newTask = this.model.createTask(taskName, taskDueDate, taskIsImportant, taskIsComplete);
                console.log(newTask);
                
                this.model.addTaskToList(newTask);
        
                this.view.resetForm('add-task-form');
                this.view.closeDialog('add-task-dialog');
        
                this.displayTasks();
        }
    
        deleteTaskcontrol(id) {
                this.model.deleteTask(id);
                this.displayTasks();
        }
    
        displayTasks = () => {
                const taskListDiv = this.view.getById('task-list');
                this.view.clearDiv(taskListDiv);
        
                const taskList = this.model.getLocalStorage('taskList');
                console.log(taskList)
                Object.entries(taskList.taskList).forEach(([taskId, task]) => {

                        const taskDiv = document.createElement('div');
        
                        const taskName = document.createElement('div');
                        
                        taskName.textContent = task.name;

                        taskDiv.appendChild(taskName);
        
                        const taskDueDate = document.createElement('div');
                        taskDueDate.textContent = task.dueDate;
                        taskDiv.appendChild(taskDueDate);
        
                        taskDiv.classList.add(task.isImportant ? 'task-important' : null);
        
                        if (task.isImportant) {
                        const importantDiv = document.createElement('div');
                        importantDiv.textContent = '⭐';
                        importantDiv.classList.add('important-star');
                        taskDiv.appendChild(importantDiv);
                        }
        
                        const deleteTaskBtn = document.createElement('button');
                        deleteTaskBtn.classList.add('delete-task-btn');
                        deleteTaskBtn.innerText = 'delete';

                        deleteTaskBtn.addEventListener('click', () => {
                        this.deleteTaskcontrol(task.id);
                        taskDiv.remove();
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                        });
                        taskDiv.appendChild(deleteTaskBtn);


                        const completeTaskBtn = document.createElement('button');
                        completeTaskBtn.classList.add('complete-task-btn');
                        completeTaskBtn.innerText = 'mark as complete';
                        completeTaskBtn.dataset.taskId = task.id; 
                        completeTaskBtn.addEventListener('click', () => {
                                console.log(task)
                        });
                        taskDiv.appendChild(completeTaskBtn);

                        taskListDiv.appendChild(taskDiv);
                });
                
        }

        addProjectFromInput = (e) => {
                e.preventDefault();
                let formInputs = this.view.getProjectFormInput();
                let newProject = this.model.createProject(formInputs);
                let newProjectList = this.model.addProjectToList(newProject);
                this.model.setLocalStorage('projectList', newProjectList)
                this.view.resetForm('add-project-form');
                this.view.closeDialog('add-project-dialog');
        
                this.displayProjects();
        }

        displayProjects = () => {
                const projectListDiv = this.view.getById('project-list');
                this.view.clearDiv(projectListDiv);
        
                const projects = this.model.getLocalStorage('projectList');
        
                Object.values(projects.ProjectList).forEach(project => {

                        const projectDiv = this.view.generateProjectDiv(project);
                        projectListDiv.appendChild(projectDiv);
                });
        }
}
    

/***/ }),

/***/ "./src/scripts/model/mainModel.js":
/*!****************************************!*\
  !*** ./src/scripts/model/mainModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainModel)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/scripts/model/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ "./src/scripts/model/projectList.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/scripts/model/task.js");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskList */ "./src/scripts/model/taskList.js");





class MainModel {
        constructor() {
                this.taskList = new _taskList__WEBPACK_IMPORTED_MODULE_3__["default"]();
                this.projectList = new _projectList__WEBPACK_IMPORTED_MODULE_1__["default"]();  
        }


        // LOCAL STORAGE ------
        setLocalStorage(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
        }

        getLocalStorage(key) {
                return JSON.parse(localStorage.getItem(key));    
        }

        // TASKS -----
        getTaskById(taskId) {
                return this.taskList[taskId];
        }

        createTask(name, project, dueDate, isImportant, isComplete = false) {
                return new _task__WEBPACK_IMPORTED_MODULE_2__["default"](name, project, dueDate, isImportant, isComplete);
        }

        editTask(taskId, name, project, dueDate, isImportant, isComplete) {
                getTaskById(taskId)
                // edit task
        }


        
        addTaskToList(task) {
                let taskList = JSON.parse(localStorage.getItem('taskList')) || {};
                this.taskList.add(task);
                this.setLocalStorage('taskList', this.taskList);
                return this.taskList;
        }

        deleteTask(taskId) {
                this.taskList.delete(taskId);
                this.setLocalStorage('taskList', this.taskList);
                return this.taskList;
        }

        updateTask(id, updatedTask) {
                this.taskList = this.taskList.map(task => task.id === id ? updatedTask : task);
                this.setLocalStorage('taskList', this.taskList);
        }


        // PROJECTS -----
        createProject(name) {
                const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
                this.projectList.add(newProject);
                
                return newProject;
        }

        addProjectToList(project) {
                this.projectList.add(project)
                return this.projectList;
        }

        deleteProject(id) {
                this.projectList.delete(id);
                this.setLocalStorage('projectList', this.projectList);
        }

        editProject(id, updatedProject) {
                this.projectList.edit(id, updatedProject);
                this.setLocalStorage('projectList', this.projectList);
        }
};

/***/ }),

/***/ "./src/scripts/model/project.js":
/*!**************************************!*\
  !*** ./src/scripts/model/project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project {
        constructor(name)
        {
                this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
                this.name = name;
                this.tasks = [];
        }
} 


/***/ }),

/***/ "./src/scripts/model/projectList.js":
/*!******************************************!*\
  !*** ./src/scripts/model/projectList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
class ProjectList {
        
        constructor()
        {
                this.ProjectList = {};
        }
    
        add(newProject)
        {
                this.ProjectList[newProject.id] = newProject;
        }

        // get ProjectList()
        // {
        //         return Object.values(this.ProjectList);
        // }

        get(id)
        {
                return this.ProjectList[id];
        }

        remove(id)
        {
                delete this.ProjectList[id];
        }

        // set current project

        // get current project
}

/***/ }),

/***/ "./src/scripts/model/task.js":
/*!***********************************!*\
  !*** ./src/scripts/model/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Task 
{
        constructor(name, dueDate, isImportant, isComplete) {
                this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
                this.name = name;
                this.dueDate = dueDate;
                this.isImportant = isImportant;
                this.isComplete = isComplete;
        }

        isImportant () {
                return this.isImportant;
        }

        toggleImportant () {
                this.isImportant == false
                    ? this.isImportant = true
                    : this.isImportant = false
        }
        
        isComplete () {
                return this.isComplete;
        }

        toggleComplete () {
                this.isComplete == false
                    ? this.isComplete = true
                    : this.isComplete = false
        }
} 


/***/ }),

/***/ "./src/scripts/model/taskList.js":
/*!***************************************!*\
  !*** ./src/scripts/model/taskList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskList)
/* harmony export */ });

class TaskList {
        
        constructor()
        {
                let taskList = localStorage.getItem('taskList');
                taskList = taskList ? JSON.parse(taskList) : {};
        }

        add(task) {
                this.taskList = this.taskList || {};
                this.taskList[task.id] = task;
                this.save();
        }

        delete(taskId) {
                this.taskList = this.taskList || {};
                delete this.taskList[taskId];
                this.save();
        }

        get(taskId) {
                return this.tasks.find(task => task.id === id);
        }

        save() {
                localStorage.setItem('taskList', JSON.stringify(this.taskList));
        }

        
}

/***/ }),

/***/ "./src/scripts/view/mainView.js":
/*!**************************************!*\
  !*** ./src/scripts/view/mainView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView */ "./src/scripts/view/taskView.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/scripts/view/projectView.js");



class MainView {

        getById(id) {
                return document.getElementById(id);
        }
        
        clearDiv(div) {
                while (div.firstChild) {
                        div.removeChild(div.firstChild);
                }
        }

        openDialog = (dialogId) => {
                this.getById(dialogId).showModal();
        };   

        closeDialog = (dialogId) => {
                this.getById(dialogId).close();
        };  

        resetForm(formID) {
                let form = this.getById(formID);
                if (form) {
                        form.reset();
                    }
        }

        getFormField(formId, fieldName) {
                const form = this.getById(formId);
                return form.elements[fieldName].value;
        }

        getTaskFormInput() {
                const taskName = this.getFormField('add-task-form', 'task-name');
                const taskDueDate = this.getFormField('add-task-form', 'task-dueDate');
                const taskIsImportant = this.getById('add-task-form').elements['task-isImportant'].checked;
                
                return { taskName, taskDueDate, taskIsImportant };
        }

        generateTaskDiv = (task) => {
                const taskDiv = document.createElement('div');
                        
                const taskName = document.createElement('div');
                taskName.textContent = task.name;
                taskDiv.appendChild(taskName);

                const taskDueDate = document.createElement('div');
                taskDueDate.textContent = task.dueDate;
                taskDiv.appendChild(taskDueDate);
                
                taskDiv.classList.add(task.isImportant ? 'task-important' : null);

                if (task.isImportant) {
                        const importantDiv = document.createElement('div');
                        importantDiv.textContent = '⭐';
                        importantDiv.classList.add('important-star');
                        taskDiv.appendChild(importantDiv);
                }

                const deleteTaskBtn = document.createElement('button');
                deleteTaskBtn.classList.add('delete-task-btn');
                deleteTaskBtn.innerText = 'delete';
                deleteTaskBtn.addEventListener('click', function() {
                        console.log(task.id)
                        const taskList = this.controller.deleteTask(task.id);
                        taskDiv.remove();
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                });
                taskDiv.appendChild(deleteTaskBtn);

                return taskDiv;
        }

        toggleTaskComplete() {

        }

        getProjectFormInput() {
                return this.getFormField('add-project-form', 'project-name');
        }

        generateProjectDiv = (project) => {
                const projectDiv = document.createElement('div');
                projectDiv.textContent = project.name;
                return projectDiv;
        }
}

/***/ }),

/***/ "./src/scripts/view/projectView.js":
/*!*****************************************!*\
  !*** ./src/scripts/view/projectView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectView)
/* harmony export */ });
class ProjectView {
        constructor(ProjectModel)
        {
                this.model = projectModel;
        }
};

/***/ }),

/***/ "./src/scripts/view/taskView.js":
/*!**************************************!*\
  !*** ./src/scripts/view/taskView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskView)
/* harmony export */ });
class TaskView {
        constructor(taskView)
        {
                this.model = taskView;
        }
};

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Bold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bac7ed87f9bcd95a6c55.ttf";

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Light.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Light.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20523381a742ca1d4a26.ttf";

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Quicksand-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67e7ce07307c681fb49d.ttf";

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _model_mainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/mainModel */ "./src/scripts/model/mainModel.js");
/* harmony import */ var _view_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/mainView */ "./src/scripts/view/mainView.js");
/* harmony import */ var _controller_mainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/mainController */ "./src/scripts/controller/mainController.js");






const model = new _model_mainModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
const view = new _view_mainView__WEBPACK_IMPORTED_MODULE_2__["default"]();
const controller = new _controller_mainController__WEBPACK_IMPORTED_MODULE_3__["default"](model, view); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4Qjs7QUFFWTtBQUNIO0FBQ2tCOztBQUV6RCxrQkFBa0Isd0RBQVM7QUFDM0IsaUJBQWlCLHNEQUFRO0FBQ3pCLHVCQUF1QixrRUFBYyxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbW9kZWwvbWFpbk1vZGVsLmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21vZGVsL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbW9kZWwvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbW9kZWwvdGFzay5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9tb2RlbC90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy92aWV3L21haW5WaWV3LmpzIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL3ZpZXcvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdmlldy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzlfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vOV9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzlfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly85X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLzlfcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUXVpY2tzYW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9RdWlja3NhbmQtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkO1xuICAgICAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4qIHtcbiAgICAgICAgLyogYm9yZGVyOiByZWQgc29saWQ7ICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbjpyb290IHtcbiAgICAgICAgLS1uYXYtYmFja2dyb3VuZDogcmdiKDEyLCAxMiwgOTIpO1xuICAgICAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogcmdiKDIyNiwgMjMyLCAyNDUpO1xufVxuYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbn1cblxuI21haW4ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICAgICAgICAgIFwibmF2ICBjb250ZW50XCI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xufVxuXG4vKiBIRUFERVIgKi9cblxuaGVhZGVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiKDExMywgODUsIDg1KTtcbn1cblxuaGVhZGVyID4gaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xufVxuXG5uYXYge1xuICAgICAgICBncmlkLWFyZWE6IG5hdjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMTg3LCAyMzApO1xuICAgICAgICBwYWRkaW5nOiAycmVtIDAgMCAxLjVyZW07XG59XG5cblxuI2FkZC10YXNrLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kKTsgXG4gICAgICAgIGNvbG9yOiByZ2IoMTgxLCAxODcsIDIzMCk7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxubmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xufVxuXG5uYXYgPiB1bCA+IGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgcGFkZGluZzogMDtcbn1cblxuLyogQ09OVEVOVCAqL1xuI2NvbnRlbnQge1xuICAgICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1jb250ZW50LWJhY2tncm91bmQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtRQUNRLHNCQUFzQjtRQUN0Qiw0Q0FBaUQ7QUFDekQ7O0FBRUE7UUFDUSwyQkFBMkI7UUFDM0IsNENBQThDO0FBQ3REOztBQUVBO1FBQ1EsNEJBQTRCO1FBQzVCLDRDQUErQztBQUN2RDs7QUFFQTtRQUNRLHVCQUF1QjtRQUN2QixpSUFBaUk7QUFDekk7QUFDQTtRQUNRLGlDQUFpQztRQUNqQyx3Q0FBd0M7QUFDaEQ7QUFDQTtRQUNRLFNBQVM7QUFDakI7O0FBRUE7UUFDUSxnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYjs7OEJBRXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7QUFDeEM7O0FBRUEsV0FBVzs7QUFFWDtRQUNRLGlCQUFpQjtRQUNqQix1Q0FBdUM7UUFDdkMsMkNBQTJDO0FBQ25EOztBQUVBO1FBQ1EsZ0NBQWdDO1FBQ2hDLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVU7QUFDbEI7O0FBRUE7UUFDUSxjQUFjO1FBQ2Qsb0NBQW9DO1FBQ3BDLHdCQUF3QjtBQUNoQzs7O0FBR0E7UUFDUSx1Q0FBdUM7UUFDdkMseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsU0FBUztRQUNULHVFQUF1RTtRQUN2RSxxQkFBcUI7QUFDN0I7O0FBRUE7UUFDUSxVQUFVO0FBQ2xCOztBQUVBO1FBQ1EscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFVBQVU7QUFDbEI7O0FBRUEsWUFBWTtBQUNaO1FBQ1Esa0JBQWtCO1FBQ2xCLDRDQUE0QztBQUNwRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtQm9sZDtcXG4gICAgICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUXVpY2tzYW5kLUJvbGQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1MaWdodDtcXG4gICAgICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUXVpY2tzYW5kLUxpZ2h0LnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgICAgIC8qIGJvcmRlcjogcmVkIHNvbGlkOyAqL1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG46cm9vdCB7XFxuICAgICAgICAtLW5hdi1iYWNrZ3JvdW5kOiByZ2IoMTIsIDEyLCA5Mik7XFxuICAgICAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogcmdiKDIyNiwgMjMyLCAyNDUpO1xcbn1cXG5ib2R5IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICBcXFwibmF2ICBjb250ZW50XFxcIjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiKDExMywgODUsIDg1KTtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLUJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW46IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbm5hdiB7XFxuICAgICAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODEsIDE4NywgMjMwKTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwIDEuNXJlbTtcXG59XFxuXFxuXFxuI2FkZC10YXNrLWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZCk7IFxcbiAgICAgICAgY29sb3I6IHJnYigxODEsIDE4NywgMjMwKTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4jY29udGVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgXG4gICAgICAgICAgICB2aWV3LmdldEJ5SWQoJ2FkZC10YXNrLWRpYWxvZy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudmlldy5vcGVuRGlhbG9nKCdhZGQtdGFzay1kaWFsb2cnKSk7XG4gICAgICAgICAgICB2aWV3LmdldEJ5SWQoJ2FkZC10YXNrLXN1Ym1pdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFza0Zyb21JbnB1dCk7XG4gICAgICAgICAgICB2aWV3LmdldEJ5SWQoJ2FkZC1wcm9qZWN0LWRpYWxvZy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudmlldy5vcGVuRGlhbG9nKCdhZGQtcHJvamVjdC1kaWFsb2cnKSk7XG4gICAgICAgICAgICB2aWV3LmdldEJ5SWQoJ2FkZC1wcm9qZWN0LXN1Ym1pdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkUHJvamVjdEZyb21JbnB1dCk7XG5cbiAgICBcbiAgICAgICAgICAgIC8vIEZpbHRlciBkaXNwbGF5c1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRhc2sgYXMgY29tcGxldGVcbiAgICAgICAgICAgIC8vIHdpbmRvdy5hZGRldmVudGxpc3RlbmVyKCdsb2FkJywgZ2V0ZGF0YWZyb21zdG9yYWdlKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZS10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLm1vZGVsLmdldFRhc2tCeUlkKHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFzaycsIHRhc2spXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwudXBkYXRlVGFzayh0YXNrSWQsIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGFkZFRhc2tGcm9tSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgeyB0YXNrTmFtZSwgdGFza0R1ZURhdGUsIHRhc2tJc0ltcG9ydGFudCwgdGFza0lzQ29tcGxldGUgfSA9IHRoaXMudmlldy5nZXRUYXNrRm9ybUlucHV0KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gdGhpcy5tb2RlbC5jcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSwgdGFza0lzSW1wb3J0YW50LCB0YXNrSXNDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5hZGRUYXNrVG9MaXN0KG5ld1Rhc2spO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVzZXRGb3JtKCdhZGQtdGFzay1mb3JtJyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmNsb3NlRGlhbG9nKCdhZGQtdGFzay1kaWFsb2cnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkZWxldGVUYXNrY29udHJvbChpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZGVsZXRlVGFzayhpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpc3REaXYgPSB0aGlzLnZpZXcuZ2V0QnlJZCgndGFzay1saXN0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmNsZWFyRGl2KHRhc2tMaXN0RGl2KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpc3QgPSB0aGlzLm1vZGVsLmdldExvY2FsU3RvcmFnZSgndGFza0xpc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdClcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0YXNrTGlzdC50YXNrTGlzdCkuZm9yRWFjaCgoW3Rhc2tJZCwgdGFza10pID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFzay5pc0ltcG9ydGFudCA/ICd0YXNrLWltcG9ydGFudCcgOiBudWxsKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnREaXYudGV4dENvbnRlbnQgPSAn4q2QJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtc3RhcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2stYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVUYXNrY29udHJvbCh0YXNrLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLXRhc2stYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gJ21hcmsgYXMgY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVUYXNrQnRuLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVUYXNrQnRuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBhZGRQcm9qZWN0RnJvbUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1JbnB1dHMgPSB0aGlzLnZpZXcuZ2V0UHJvamVjdEZvcm1JbnB1dCgpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gdGhpcy5tb2RlbC5jcmVhdGVQcm9qZWN0KGZvcm1JbnB1dHMpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0TGlzdCA9IHRoaXMubW9kZWwuYWRkUHJvamVjdFRvTGlzdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnNldExvY2FsU3RvcmFnZSgncHJvamVjdExpc3QnLCBuZXdQcm9qZWN0TGlzdClcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVzZXRGb3JtKCdhZGQtcHJvamVjdC1mb3JtJyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmNsb3NlRGlhbG9nKCdhZGQtcHJvamVjdC1kaWFsb2cnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IHRoaXMudmlldy5nZXRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2xlYXJEaXYocHJvamVjdExpc3REaXYpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMubW9kZWwuZ2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0TGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3RzLlByb2plY3RMaXN0KS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gdGhpcy52aWV3LmdlbmVyYXRlUHJvamVjdERpdihwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG59XG4gICAgIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL3Byb2plY3RMaXN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgVGFza0xpc3QgZnJvbSAnLi90YXNrTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Nb2RlbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QgPSBuZXcgVGFza0xpc3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7ICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gTE9DQUwgU1RPUkFHRSAtLS0tLS1cbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRMb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7ICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVEFTS1MgLS0tLS1cbiAgICAgICAgZ2V0VGFza0J5SWQodGFza0lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3RbdGFza0lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZVRhc2sobmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VGFzayh0YXNrSWQsIG5hbWUsIHByb2plY3QsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgZ2V0VGFza0J5SWQodGFza0lkKVxuICAgICAgICAgICAgICAgIC8vIGVkaXQgdGFza1xuICAgICAgICB9XG5cblxuICAgICAgICBcbiAgICAgICAgYWRkVGFza1RvTGlzdCh0YXNrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSkgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5hZGQodGFzayk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ3Rhc2tMaXN0JywgdGhpcy50YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QuZGVsZXRlKHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ3Rhc2tMaXN0JywgdGhpcy50YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUYXNrKGlkLCB1cGRhdGVkVGFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLnRhc2tMaXN0Lm1hcCh0YXNrID0+IHRhc2suaWQgPT09IGlkID8gdXBkYXRlZFRhc2sgOiB0YXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgndGFza0xpc3QnLCB0aGlzLnRhc2tMaXN0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gUFJPSkVDVFMgLS0tLS1cbiAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QuYWRkKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hZGQocHJvamVjdClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LmRlbGV0ZShpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ3Byb2plY3RMaXN0JywgdGhpcy5wcm9qZWN0TGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0UHJvamVjdChpZCwgdXBkYXRlZFByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LmVkaXQoaWQsIHVwZGF0ZWRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgncHJvamVjdExpc3QnLCB0aGlzLnByb2plY3RMaXN0KTtcbiAgICAgICAgfVxufTsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbn0gXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RMaXN0ID0ge307XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYWRkKG5ld1Byb2plY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RMaXN0W25ld1Byb2plY3QuaWRdID0gbmV3UHJvamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBQcm9qZWN0TGlzdCgpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLlByb2plY3RMaXN0KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGdldChpZClcbiAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3RMaXN0W2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZShpZClcbiAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLlByb2plY3RMaXN0W2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBjdXJyZW50IHByb2plY3RcblxuICAgICAgICAvLyBnZXQgY3VycmVudCBwcm9qZWN0XG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgXG57XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGlzSW1wb3J0YW50LCBpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW1wb3J0YW50ID0gaXNJbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzSW1wb3J0YW50ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUltcG9ydGFudCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ltcG9ydGFudCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaXNJbXBvcnRhbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5pc0ltcG9ydGFudCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlzQ29tcGxldGUgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVDb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlXG4gICAgICAgIH1cbn0gXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tMaXN0IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpO1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0ID0gdGFza0xpc3QgPyBKU09OLnBhcnNlKHRhc2tMaXN0KSA6IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkKHRhc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy50YXNrTGlzdCB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0W3Rhc2suaWRdID0gdGFzaztcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSh0YXNrSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy50YXNrTGlzdCB8fCB7fTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy50YXNrTGlzdFt0YXNrSWRdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KHRhc2tJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0xpc3QpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxufSIsImltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi90YXNrVmlld1wiO1xuaW1wb3J0IFByb2plY3RWaWV3IGZyb20gXCIuL3Byb2plY3RWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IHtcblxuICAgICAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY2xlYXJEaXYoZGl2KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5EaWFsb2cgPSAoZGlhbG9nSWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEJ5SWQoZGlhbG9nSWQpLnNob3dNb2RhbCgpO1xuICAgICAgICB9OyAgIFxuXG4gICAgICAgIGNsb3NlRGlhbG9nID0gKGRpYWxvZ0lkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCeUlkKGRpYWxvZ0lkKS5jbG9zZSgpO1xuICAgICAgICB9OyAgXG5cbiAgICAgICAgcmVzZXRGb3JtKGZvcm1JRCkge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gdGhpcy5nZXRCeUlkKGZvcm1JRCk7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0Rm9ybUZpZWxkKGZvcm1JZCwgZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0QnlJZChmb3JtSWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLmVsZW1lbnRzW2ZpZWxkTmFtZV0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRUYXNrRm9ybUlucHV0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGhpcy5nZXRGb3JtRmllbGQoJ2FkZC10YXNrLWZvcm0nLCAndGFzay1uYW1lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0aGlzLmdldEZvcm1GaWVsZCgnYWRkLXRhc2stZm9ybScsICd0YXNrLWR1ZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSXNJbXBvcnRhbnQgPSB0aGlzLmdldEJ5SWQoJ2FkZC10YXNrLWZvcm0nKS5lbGVtZW50c1sndGFzay1pc0ltcG9ydGFudCddLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFza05hbWUsIHRhc2tEdWVEYXRlLCB0YXNrSXNJbXBvcnRhbnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdlbmVyYXRlVGFza0RpdiA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2suaXNJbXBvcnRhbnQgPyAndGFzay1pbXBvcnRhbnQnIDogbnVsbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnREaXYudGV4dENvbnRlbnQgPSAn4q2QJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtc3RhcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gdGhpcy5jb250cm9sbGVyLmRlbGV0ZVRhc2sodGFzay5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tEaXY7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVUYXNrQ29tcGxldGUoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGdldFByb2plY3RGb3JtSW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybUZpZWxkKCdhZGQtcHJvamVjdC1mb3JtJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0RGl2ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdERpdjtcbiAgICAgICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RWaWV3IHtcbiAgICAgICAgY29uc3RydWN0b3IoUHJvamVjdE1vZGVsKVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHByb2plY3RNb2RlbDtcbiAgICAgICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRhc2tWaWV3KVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRhc2tWaWV3O1xuICAgICAgICB9XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBNYWluTW9kZWwgZnJvbSAnLi9tb2RlbC9tYWluTW9kZWwnO1xuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vdmlldy9tYWluVmlldyc7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyJztcblxuY29uc3QgbW9kZWwgPSBuZXcgTWFpbk1vZGVsKCk7XG5jb25zdCB2aWV3ID0gbmV3IE1haW5WaWV3KCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKG1vZGVsLCB2aWV3KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9