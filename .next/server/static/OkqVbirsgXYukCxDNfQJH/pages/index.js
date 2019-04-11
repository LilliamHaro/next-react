module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "5asN":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MbLX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);



var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/test-nextjs/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/test-nextjs/form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "FORMULARIO"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__("tXcZ");

// EXTERNAL MODULE: ./components/nav.js
var nav = __webpack_require__("MbLX");

// CONCATENATED MODULE: ./pages/index.js













var pages_Home =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Home, _Component);

  function Home(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Home);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Home).call(this, props));
    _this.state = {
      dummy: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Home, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head["a" /* default */], {
        title: "HOME",
        css: "static/css/style.css",
        description: "description 321 HOME",
        url: "string",
        ogImage: "https://circuit.com.pe/test-nextjs/static/test-seo.jpg"
      }), external_react_default.a.createElement(nav["a" /* default */], null), external_react_default.a.createElement("main", null, "home", external_react_default.a.createElement("figure", null, external_react_default.a.createElement("img", {
        src: __webpack_require__("5asN"),
        alt: ""
      })), external_react_default.a.createElement("ul", null, this.props.data.map(function (dat, i) {
        return external_react_default.a.createElement("li", {
          key: i
        }, dat.show.name);
      }))));
    }
  }]);

  return Home;
}(external_react_["Component"]);

pages_Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var res, data;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return external_axios_default.a.get("https://api.tvmaze.com/search/shows?q=batman");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tXcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var defaultDescription = 'default descriptioonnnnn';
var defaultOGURL = '';
var defaultOGImage = '';
var defaultCss = '../static/css/style.css';

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: __webpack_require__("yRmu")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: props.css || defaultCss
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yRmu":
/***/ (function(module, exports) {

module.exports = "data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIAAoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP//////////////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD/AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD//////////////////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA/wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA//////////////////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP//////////////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD///////////8AAAD/AAAA////////////AAAA/wAAAP///////////wAAAP8AAAD/"

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });