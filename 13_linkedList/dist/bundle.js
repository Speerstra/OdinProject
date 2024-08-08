/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  updateValue(newValue) {
    this.value = newValue;
  }

  updateNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}


/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


class LinkedList {
  constructor() {
    this.head = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node();
  }

  head() {
    return this.head;
  }

  tail(node = this.head) {
    if (node.nextNode === null) {
      return node; //tail
    }
    return this.tail(node.nextNode);
  }

  append(value) {
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value, null);

    if (this.head === null) {
      this.headupdateNextNode(newNode);
    }
    this.tail().updateNextNode(newNode);
  }

  prepend(value) {
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value, this.head.nextNode);
    this.head.updateNextNode(newNode);
  }

  size() {
    let size = 0;
    let current = this.head.nextNode;

    while (current) {
      size++;
      current = current.nextNode;
    }

    return size;
  }

  at(index) {
    let i = 0;
    let current = this.head.nextNode;
    while (current !== null) {
      if (i === index) {
        return current;
      }
      current = current.nextNode;
      i++;
    }
  }

  pop() {
    const size = this.size();
    const tail = this.tail();
    const newTail = this.at(size - 2); //0 index - 1
    newTail.updateNextNode(null);
    return tail;
  }

  contains(value) {
    let current = this.head.nextNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head.nextNode;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    const nodeLeft = this.at(index - 1);
    const nodeRight = this.at(index);
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value, nodeRight);
    nodeLeft.updateNextNode(newNode);
  }

  removeAt(index) {
    const nodeLeft = this.at(index - 1);
    const nodeRight = this.at(index + 1);
    nodeLeft.updateNextNode(nodeRight);
  }

  toString() {
    let values = [];
    let current = this.head.nextNode;

    while (current) {
      values.push(current.value);
      current = current.nextNode;
    }

    const string =
      values.map((value) => `( ${value} )`).join(" -> ") + " -> null";

    console.log(string);
  }
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ "./src/linkedList.js");


const list = new _linkedList_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();

// Tests
console.log("\nAPPEND DOG; PREPEND CAT; APPEND PARROT:");
list.append("dog");
list.prepend("cat");
list.append("parrot");
list.toString();

console.log("\nNODE AT INDEX 1");
console.log(list.at(1));

console.log("\nTAIL NODE");
console.log(list.tail());

console.log("\nREMOVE NODE AT INDEX 1");
list.removeAt(1);
list.toString();

console.log("\nINSERT HAMSTER AT INDEX 2");
list.insertAt("hamster", 2);
list.toString();

console.log("\nPOP LAST NODE OFF THE LIST");
console.log(list.pop());
list.toString();

console.log("\nFIND SNAKE; FIND PARROT");
console.log(list.find("snake"));
console.log(list.find("parrot"));

/******/ })()
;
//# sourceMappingURL=bundle.js.map