// {"framework" : "Rax"}
define("com.muxistudio.ele.resule", function(require) {/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = exports.Children = exports.version = exports.setNativeProps = exports.findComponentInstance = exports.unmountComponentAtNode = exports.findDOMNode = exports.createPortal = exports.hydrate = exports.render = exports.PropTypes = exports.PureComponent = exports.Component = exports.createFactory = exports.isValidElement = exports.cloneElement = exports.createElement = undefined;

__webpack_require__(57);

var _element = __webpack_require__(14);

var _component = __webpack_require__(8);

var _component2 = _interopRequireDefault(_component);

var _purecomponent = __webpack_require__(61);

var _purecomponent2 = _interopRequireDefault(_purecomponent);

var _proptypes = __webpack_require__(28);

var _proptypes2 = _interopRequireDefault(_proptypes);

var _render2 = __webpack_require__(15);

var _render3 = _interopRequireDefault(_render2);

var _hydrate2 = __webpack_require__(59);

var _hydrate3 = _interopRequireDefault(_hydrate2);

var _createPortal2 = __webpack_require__(56);

var _createPortal3 = _interopRequireDefault(_createPortal2);

var _findDOMNode2 = __webpack_require__(26);

var _findDOMNode3 = _interopRequireDefault(_findDOMNode2);

var _unmountComponentAtNode2 = __webpack_require__(16);

var _unmountComponentAtNode3 = _interopRequireDefault(_unmountComponentAtNode2);

var _findComponentInstance2 = __webpack_require__(58);

var _findComponentInstance3 = _interopRequireDefault(_findComponentInstance2);

var _setNativeProps2 = __webpack_require__(62);

var _setNativeProps3 = _interopRequireDefault(_setNativeProps2);

var _version2 = __webpack_require__(71);

var _version3 = _interopRequireDefault(_version2);

var _children = __webpack_require__(54);

var _children2 = _interopRequireDefault(_children);

var _createContext2 = __webpack_require__(55);

var _createContext3 = _interopRequireDefault(_createContext2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createElement = _element.createElement;
exports.cloneElement = _element.cloneElement;
exports.isValidElement = _element.isValidElement;
exports.createFactory = _element.createFactory;
exports.Component = _component2.default;
exports.PureComponent = _purecomponent2.default;
exports.PropTypes = _proptypes2.default;
exports.render = _render3.default;
exports.hydrate = _hydrate3.default;
exports.createPortal = _createPortal3.default;
exports.findDOMNode = _findDOMNode3.default;
exports.unmountComponentAtNode = _unmountComponentAtNode3.default;
exports.findComponentInstance = _findComponentInstance3.default;
exports.setNativeProps = _setNativeProps3.default;
exports.version = _version3.default;
exports.Children = _children2.default;
exports.createContext = _createContext3.default;
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Stateful things in runtime
 */
exports.default = {
  component: null,
  mountID: 1,
  sandbox: true,
  // Roots
  rootComponents: {},
  rootInstances: {},
  // Inject
  hook: null,
  driver: null,
  monitor: null
};
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      if (_universalEnv.isWeex) {
        // TODO: do not pass object value in props
        return (0, _rax.createElement)('div', props);
      } else {
        var styleProps = _extends({}, styles.initial, props.style);
        return (0, _rax.createElement)('div', _extends({}, props, { style: styleProps }));
      }
    }
  }]);

  return View;
}(_rax.Component);

View.propTypes = {};


var styles = {
  initial: {
    border: '0 solid black',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0
  }
};

exports.default = View;
module.exports = exports['default'];

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _element = __webpack_require__(14);

var _unmountComponentAtNode = __webpack_require__(16);

var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

var _instantiateComponent = __webpack_require__(10);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(17);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _root = __webpack_require__(66);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Instance manager
 */
var KEY = '$$instance';

exports.default = {
  set: function set(node, instance) {
    if (!node[KEY]) {
      node[KEY] = instance;
      // Record root instance to roots map
      if (instance.rootID) {
        _host2.default.rootInstances[instance.rootID] = instance;
        _host2.default.rootComponents[instance.rootID] = instance._internal;
      }
    }
  },
  get: function get(node) {
    return node[KEY];
  },
  remove: function remove(node) {
    var instance = this.get(node);
    if (instance) {
      node[KEY] = null;
      if (instance.rootID) {
        delete _host2.default.rootComponents[instance.rootID];
        delete _host2.default.rootInstances[instance.rootID];
      }
    }
  },
  mount: function mount(element, container, parentInstance) {
    if (false) {
      _host2.default.measurer && _host2.default.measurer.beforeRender();
    }

    // Before render callback
    _host2.default.driver.beforeRender && _host2.default.driver.beforeRender();

    // Real native root node is body
    if (container == null) {
      container = _host2.default.driver.createBody();
    }

    // Get the context from the conceptual parent component.
    var parentContext = void 0;
    if (parentInstance) {
      var parentInternal = parentInstance._internal;
      parentContext = parentInternal._processChildContext(parentInternal._context);
    }

    var prevRootInstance = this.get(container);
    var hasPrevRootInstance = prevRootInstance && prevRootInstance.isRootComponent;

    if (hasPrevRootInstance) {
      var prevRenderedComponent = prevRootInstance.getRenderedComponent();
      var prevElement = prevRenderedComponent._currentElement;
      if ((0, _shouldUpdateComponent2.default)(prevElement, element)) {
        var prevUnmaskedContext = prevRenderedComponent._context;
        prevRenderedComponent.updateComponent(prevElement, element, prevUnmaskedContext, parentContext || prevUnmaskedContext);

        return prevRootInstance;
      } else {
        _host2.default.hook.Reconciler.unmountComponent(prevRootInstance);
        (0, _unmountComponentAtNode2.default)(container);
      }
    }

    var wrappedElement = (0, _element.createElement)(_root2.default, null, element);
    var renderedComponent = (0, _instantiateComponent2.default)(wrappedElement);
    var defaultContext = parentContext || {};
    var rootInstance = renderedComponent.mountComponent(container, null, defaultContext);
    this.set(container, rootInstance);

    // After render callback
    _host2.default.driver.afterRender && _host2.default.driver.afterRender(rootInstance);

    // Devtool render new root hook
    _host2.default.hook.Mount._renderNewRootComponent(rootInstance._internal);

    if (false) {
      _host2.default.measurer && _host2.default.measurer.afterRender();
    }

    return rootInstance;
  }
};
module.exports = exports['default'];

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.renderText = function () {
      var props = _this.props;
      var nativeProps = _extends({}, props, {
        style: props.style || {}
      });

      var textString = '';
      if (props.children != null) {
        if (!Array.isArray(props.children)) {
          textString = props.children.toString();
        } else {
          textString = props.children.join('');
        }
      }

      if (_this.context.isInAParentText) {
        return (0, _rax.createElement)(
          'span',
          nativeProps,
          textString
        );
      }

      if (props.onPress) {
        nativeProps.onClick = props.onPress;
      }

      if (_universalEnv.isWeex) {
        if (props.numberOfLines) {
          nativeProps.style.lines = props.numberOfLines;
        }

        nativeProps.value = textString;

        return (0, _rax.createElement)('text', nativeProps);
      } else {
        var styleProps = _extends({}, styles.text, nativeProps.style);
        var numberOfLines = props.numberOfLines;
        if (numberOfLines) {
          if (parseInt(numberOfLines) === 1) {
            styleProps.whiteSpace = 'nowrap';
          } else {
            styleProps.display = '-webkit-box';
            styleProps.webkitBoxOrient = 'vertical';
            styleProps.webkitLineClamp = String(numberOfLines);
          }

          styleProps.overflow = 'hidden';
        }

        return (0, _rax.createElement)(
          'span',
          _extends({}, nativeProps, { style: styleProps }),
          textString
        );
      }
    }, _this.renderRichText = function () {
      var props = _this.props;
      var children = props.children;


      var nativeProps = _extends({}, props, {
        style: props.style || {}
      });
      var styleProps = _extends({}, styles.richtext, nativeProps.style);

      if (_universalEnv.isWeex) {
        children = transformChildren(children, _this);
      }

      return (0, _rax.createElement)(
        'p',
        _extends({}, nativeProps, { style: styleProps }),
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Text, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInAParentText: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var children = props.children;

      if (!Array.isArray(children)) {
        children = [children];
      }

      var nested = false;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child && (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
          nested = true;
          break;
        }
      }

      return nested ? this.renderRichText() : this.renderText();
    }
  }]);

  return Text;
}(_rax.Component);

Text.propTypes = {};
Text.contextTypes = {
  isInAParentText: _rax.PropTypes.bool
};
Text.childContextTypes = {
  isInAParentText: _rax.PropTypes.bool
};


function transformChild(child, instance) {
  var ChildComponent = child.type,
      props = child.props;
  var children = props.children;


  if (typeof ChildComponent === 'function') {
    var childInstance = new ChildComponent();
    childInstance.props = props;
    if (children) {
      childInstance.props.children = transformChildren(children, instance);
    }
    childInstance.context = instance.getChildContext();

    return childInstance.render();
  } else {
    return child;
  }
}

function transformChildren(children, instance) {
  var elements = [];
  if (!Array.isArray(children)) {
    children = [children];
  }

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (typeof child === 'string') {
      elements.push(child);
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      elements.push(transformChild(child, instance));
    }
  }

  return elements;
}

var styles = {
  text: {
    border: '0 solid black',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0,
    fontSize: 32
  },
  richtext: {
    marginTop: 0,
    marginBottom: 0
  }
};

exports.default = Text;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base component class.
 */
var Component = function () {
  function Component(props, context, updater) {
    _classCallCheck(this, Component);

    this.props = props;
    this.context = context;
    this.refs = {};
    this.updater = updater;
  }

  _createClass(Component, [{
    key: "isComponentClass",
    value: function isComponentClass() {}
  }, {
    key: "setState",
    value: function setState(partialState, callback) {
      this.updater.setState(this, partialState, callback);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      this.updater.forceUpdate(this, callback);
    }
  }]);

  return Component;
}();

exports.default = Component;
module.exports = exports["default"];

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function instantiateComponent(element) {
  var instance = void 0;

  if (element === undefined || element === null || element === false || element === true) {
    instance = new _host2.default.EmptyComponent();
  } else if (Array.isArray(element)) {
    instance = new _host2.default.FragmentComponent(element);
  } else if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.type) {
    // Special case string values
    if (typeof element.type === 'string') {
      instance = new _host2.default.NativeComponent(element);
    } else {
      instance = new _host2.default.CompositeComponent(element);
    }
  } else if (typeof element === 'string' || typeof element === 'number') {
    instance = new _host2.default.TextComponent(element);
  } else {
    throw new Error('Invalid element type: ' + element + '. (keys: ' + Object.keys(element) + ')');
  }

  instance._mountIndex = 0;

  return instance;
}

exports.default = instantiateComponent;
module.exports = exports['default'];

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createElement = createElement;
exports.createFactory = createFactory;
exports.cloneElement = cloneElement;
exports.isValidElement = isValidElement;

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _flattenChildren = __webpack_require__(27);

var _flattenChildren2 = _interopRequireDefault(_flattenChildren);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESERVED_PROPS = {
  key: true,
  ref: true
};

function getRenderErrorInfo() {
  if (_host2.default.component) {
    var name = _host2.default.component.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function Element(type, key, ref, props, owner) {
  if (_universalEnv.isWeex) {
    props = filterProps(type, props);
  }

  return {
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };
};

exports.default = Element;


function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  } else {
    var result = {};
    for (var i = 0; i < style.length; ++i) {
      var computedStyle = flattenStyle(style[i]);
      if (computedStyle) {
        for (var key in computedStyle) {
          result[key] = computedStyle[key];
        }
      }
    }
    return result;
  }
}

// TODO: move to weex-drvier
function filterProps(type, props) {
  // Only for weex text
  if (type === 'text') {
    var children = props.children;
    var value = props.value;

    // Value is first
    if (value == null && children != null) {
      if (Array.isArray(children)) {
        children = children.map(function (val) {
          if (typeof val === 'number' || typeof val === 'string') {
            return val;
          } else {
            return '';
          }
        }).join('');
      } else if (typeof children !== 'number' && typeof children !== 'string') {
        children = '';
      }

      props.value = String(children);
    }

    props.children = null;
  }

  return props;
}

function createElement(type, config, children) {
  if (type == null) {
    throw Error('createElement: type should not be null or undefined.' + getRenderErrorInfo());
  }
  // Reserved names are extracted
  var props = {};
  var propName = void 0;
  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : String(config.key);
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (!RESERVED_PROPS[propName]) {
        props[propName] = config[propName];
      }
    }
  }

  var childrenLength = arguments.length - 2;
  if (childrenLength > 0) {
    if (childrenLength === 1 && !Array.isArray(children)) {
      props.children = children;
    } else {
      var childArray = children;
      if (childrenLength > 1) {
        childArray = new Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
      }
      props.children = (0, _flattenChildren2.default)(childArray);
    }
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (props.style && (Array.isArray(props.style) || _typeof(props.style) === 'object')) {
    props.style = flattenStyle(props.style);
  }

  return new Element(type, key, ref, props, _host2.default.component);
}

function createFactory(type) {
  var factory = createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  factory.type = type;
  return factory;
}

function cloneElement(element, config) {
  if (!isValidElement(element)) {
    throw Error('cloneElement: not a valid element.' + getRenderErrorInfo());
  }

  // Original props are copied
  var props = Object.assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config) {
    // Should reset ref and owner if has a new ref
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = _host2.default.component;
    }

    if (config.key !== undefined) {
      key = String(config.key);
    }

    // Resolve default props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    // Remaining properties override existing props
    var propName = void 0;
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children.length) {
    props.children = (0, _flattenChildren2.default)(children);
  }

  return new Element(element.type, key, ref, props, owner);
};

function isValidElement(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.type && object.props;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inject = __webpack_require__(60);

var _inject2 = _interopRequireDefault(_inject);

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(element, container, options, callback) {
  // Compatible with `render(element, container, callback)`
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }

  options = options || {};
  // Init inject
  (0, _inject2.default)(options);

  var rootComponent = _instance2.default.mount(element, container, options.parent);
  var componentInstance = rootComponent.getPublicInstance();

  if (callback) {
    callback.call(componentInstance);
  }

  return componentInstance;
}

exports.default = render;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unmountComponentAtNode;

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unmountComponentAtNode(node) {
  var component = _instance2.default.get(node);

  if (!component) {
    return false;
  }

  _instance2.default.remove(node);
  component._internal.unmountComponent();

  return true;
};
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function shouldUpdateComponent(prevElement, nextElement) {
  // TODO: prevElement and nextElement could be array
  var prevEmpty = prevElement === null;
  var nextEmpty = nextElement === null;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
  var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';
  } else {
    return prevType === 'object' && nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

exports.default = shouldUpdateComponent;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Touchable = function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable() {
    _classCallCheck(this, Touchable);

    return _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
  }

  _createClass(Touchable, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var nativeProps = _extends({}, props, {
        style: _extends({}, styles.initial, props.style),
        onClick: props.onPress
      });

      delete nativeProps.onPress;

      return (0, _rax.createElement)(_raxView2.default, nativeProps);
    }
  }]);

  return Touchable;
}(_rax.Component);

Touchable.propTypes = {};


var styles = {
  initial: {
    cursor: 'pointer'
  }
};

exports.default = Touchable;
module.exports = exports['default'];

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var nativeProps = _extends({}, this.props);
      var source = nativeProps.source;

      // Source must a object
      if (source && source.uri) {
        var style = nativeProps.style;
        var width = source.width,
            height = source.height,
            uri = source.uri;

        // Default is 0

        if (width == null && height == null && style.height == null && style.width == null) {
          width = 0;
          height = 0;
        }

        nativeProps.style = _extends(_extends({}, !this.context.isInAParentText && { display: 'flex' }, {
          width: width,
          height: height
        }), style);
        nativeProps.src = uri;

        delete nativeProps.source;

        var NativeImage = void 0;
        if (_universalEnv.isWeex) {
          NativeImage = 'image';
        } else {
          NativeImage = 'img';
        }

        // for cover and contain
        var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;
        if (resizeMode) {
          if (_universalEnv.isWeex) {
            nativeProps.resize = resizeMode;
            nativeProps.style.resizeMode = resizeMode;
          } else {
            nativeProps.style.objectFit = resizeMode;
          }
        }

        if (this.props.children) {
          nativeProps.children = null;
          return (0, _rax.createElement)(
            _raxView2.default,
            { style: nativeProps.style },
            (0, _rax.createElement)(NativeImage, nativeProps),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: styles.absoluteImage },
              this.props.children
            )
          );
        } else {
          return (0, _rax.createElement)(NativeImage, nativeProps);
        }
      }
      return null;
    }
  }]);

  return Image;
}(_rax.Component);

Image.propTypes = {};
Image.resizeMode = {
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
  center: 'center',
  repeat: 'repeat'
};
Image.contextTypes = {
  isInAParentText: _rax.PropTypes.bool
};


var styles = {
  absoluteImage: {
    left: 0,
    top: 0,
    position: 'absolute'
  }
};

exports.default = Image;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isRem = isRem;
exports.calcRem = calcRem;
exports.getRem = getRem;
exports.setRem = setRem;
exports.isUnitNumber = isUnitNumber;
exports.convertUnit = convertUnit;
/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var UNITLESS_NUMBER_PROPS = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  // We make lineHeight default is px that is diff with w3c spec
  // lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // Weex only
  lines: true
};
var SUFFIX = 'rem';
var REM_REG = /[-+]?\d*\.?\d+rem/g;
var GLOBAL_REM_UNIT = '__global_rem_unit__';
var global = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : {};
// Default 1 rem to 1 px
if (global[GLOBAL_REM_UNIT] == null) {
  global[GLOBAL_REM_UNIT] = 1;
}

/**
 * Is string contains rem
 * @param {String} str
 * @returns {Boolean}
 */
function isRem(str) {
  return typeof str === 'string' && str.indexOf(SUFFIX) !== -1;
}

/**
 * Calculate rem to pixels: '1.2rem' => 1.2 * rem
 * @param {String} str
 * @param {Number} rem
 * @returns {number}
 */
function calcRem(str) {
  var remUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : global[GLOBAL_REM_UNIT];

  return str.replace(REM_REG, function (rem) {
    return parseFloat(rem) * remUnit + 'px';
  });
}

function getRem() {
  return global[GLOBAL_REM_UNIT];
}

function setRem(rem) {
  global[GLOBAL_REM_UNIT] = rem;
}

function isUnitNumber(val, prop) {
  return typeof val === 'number' && !UNITLESS_NUMBER_PROPS[prop];
}

function convertUnit(val, prop) {
  var remUnit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : global[GLOBAL_REM_UNIT];

  if (prop && isUnitNumber(val, prop)) {
    return val * remUnit + 'px';
  } else if (isRem(val)) {
    return calcRem(val, remUnit);
  }

  return val;
}
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformPropsAttrsToStyle = transformPropsAttrsToStyle;
exports.renamePropsAttr = renamePropsAttr;
/**
 * transformPropAttrsToStyle
 *
 * @param {Object} props
 * @param {Array} attrs
 */
function transformPropsAttrsToStyle(props, attrs) {
  props.style = props.style || {};

  attrs.forEach(function (attr) {
    if (props[attr] && !props.style[attr]) {
      props.style[attr] = props[attr];
      delete props[attr];
    }
  });

  return props;
};

/**
 * renamePropsAttr
 *
 * @param {Object} props
 * @param {String} originalAttrName
 * @param {String} newAttrName
 */
function renamePropsAttr(props, originalAttrName, newAttrName) {
  if (props[originalAttrName] && !props[newAttrName]) {
    props[newAttrName] = props[originalAttrName];
    delete props[originalAttrName];
  }

  return props;
}
exports["default"] = module.exports;
exports.default = module.exports;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ComponentTree: {
    getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
      return _instance2.default.get(node);
    },
    getNodeFromInstance: function getNodeFromInstance(inst) {
      // inst is an internal instance (but could be a composite)
      while (inst._renderedComponent) {
        inst = inst._renderedComponent;
      }

      if (inst) {
        return inst._nativeNode;
      } else {
        return null;
      }
    }
  },
  Mount: {
    _instancesByReactRootID: _host2.default.rootComponents,

    // Stub - React DevTools expects to find this method and replace it
    // with a wrapper in order to observe new root components being added
    _renderNewRootComponent: function _renderNewRootComponent() {}
  },
  Reconciler: {
    // Stubs - React DevTools expects to find these methods and replace them
    // with wrappers in order to observe components being mounted, updated and
    // unmounted
    mountComponent: function mountComponent() {},
    receiveComponent: function receiveComponent() {},
    unmountComponent: function unmountComponent() {}
  },
  // monitor the info of all components
  monitor: null
};
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findDOMNode(instance) {
  if (instance == null) {
    return null;
  }

  // If a native node, weex may not export ownerDocument property
  if (instance.ownerDocument || instance.nodeType) {
    return instance;
  }

  // Native component
  if (instance._nativeNode) {
    return instance._nativeNode;
  }

  if (typeof instance == 'string') {
    return _host2.default.driver.getElementById(instance);
  }

  if (typeof instance.render !== 'function') {
    throw new Error('findDOMNode: find by neither component nor DOM node.');
  }

  // Composite component
  var internal = instance._internal;

  if (internal) {
    while (!internal._nativeNode) {
      internal = internal._renderedComponent;
      // If not mounted
      if (internal == null) {
        return null;
      }
    }
    return internal._nativeNode;
  } else {
    throw new Error('findDOMNode: find on an unmounted component.');
  }
}

exports.default = findDOMNode;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenChildren;
function traverseChildren(children, result) {
  if (Array.isArray(children)) {
    for (var i = 0, l = children.length; i < l; i++) {
      traverseChildren(children[i], result);
    }
  } else {
    result.push(children);
  }
}

function flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = [];
  traverseChildren(children, result);

  if (result.length === 1) {
    result = result[0];
  }

  return result;
}
module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Current PropTypes only export some api with react, not validate in runtime.
 */

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    return typeChecker;
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName) {
    // Noop
  }
  return createChainableTypeChecker(validate);
}

var typeChecker = createTypeChecker();

exports.default = {
  array: typeChecker,
  bool: typeChecker,
  func: typeChecker,
  number: typeChecker,
  object: typeChecker,
  string: typeChecker,
  symbol: typeChecker,
  element: typeChecker,
  node: typeChecker,
  any: typeChecker,
  arrayOf: typeChecker,
  instanceOf: typeChecker,
  objectOf: typeChecker,
  oneOf: typeChecker,
  oneOfType: typeChecker,
  shape: typeChecker
};
module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (children, element, index) {
  var elementKey = element && element.key;
  var hasKey = typeof elementKey === 'string';
  var defaultName = '.' + index.toString(36);

  if (hasKey) {
    var keyName = '$' + elementKey;
    // Child keys must be unique.
    var keyUnique = children[keyName] === undefined;
    // Only the first child will be used when encountered two children with the same key
    if (!keyUnique) console.warn('Encountered two children with the same key "' + elementKey + '".');

    return keyUnique ? keyName : defaultName;
  } else {
    return defaultName;
  }
};

module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _ref = __webpack_require__(31);

var _ref2 = _interopRequireDefault(_ref);

var _instantiateComponent = __webpack_require__(10);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(17);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _getElementKeyName = __webpack_require__(29);

var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STYLE = 'style';
var CHILDREN = 'children';
var TREE = 'tree';
var EVENT_PREFIX_REGEXP = /on[A-Z]/;

/**
 * Native Component
 */

var NativeComponent = function () {
  function NativeComponent(element) {
    _classCallCheck(this, NativeComponent);

    this._currentElement = element;
  }

  _createClass(NativeComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      // Parent native element
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      var props = this._currentElement.props;
      var type = this._currentElement.type;
      var instance = {
        _internal: this,
        type: type,
        props: props
      };
      var appendType = props.append; // Default is node

      this._instance = instance;

      // Clone a copy for style diff
      this._prevStyleCopy = Object.assign({}, props.style);

      var nativeNode = this.getNativeNode();

      if (appendType !== TREE) {
        if (childMounter) {
          childMounter(nativeNode, parent);
        } else {
          _host2.default.driver.appendChild(nativeNode, parent);
        }
      }

      if (this._currentElement && this._currentElement.ref) {
        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
      }

      // Process children
      var children = props.children;
      if (children != null) {
        this.mountChildren(children, context);
      }

      if (appendType === TREE) {
        if (childMounter) {
          childMounter(nativeNode, parent);
        } else {
          _host2.default.driver.appendChild(nativeNode, parent);
        }
      }

      _host2.default.hook.Reconciler.mountComponent(this);

      return instance;
    }
  }, {
    key: 'mountChildren',
    value: function mountChildren(children, context) {
      var _this = this;

      if (!Array.isArray(children)) {
        children = [children];
      }

      var renderedChildren = this._renderedChildren = {};

      var renderedChildrenImage = children.map(function (element, index) {
        var renderedChild = (0, _instantiateComponent2.default)(element);
        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
        renderedChildren[name] = renderedChild;
        renderedChild._mountIndex = index;
        // Mount
        var mountImage = renderedChild.mountComponent(_this.getNativeNode(), _this._instance, context, null);
        return mountImage;
      });

      return renderedChildrenImage;
    }
  }, {
    key: 'unmountChildren',
    value: function unmountChildren(notRemoveChild) {
      var renderedChildren = this._renderedChildren;

      if (renderedChildren) {
        for (var name in renderedChildren) {
          var renderedChild = renderedChildren[name];
          renderedChild.unmountComponent(notRemoveChild);
        }
        this._renderedChildren = null;
      }
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode) {
        var ref = this._currentElement.ref;
        if (ref) {
          _ref2.default.detach(this._currentElement._owner, ref, this);
        }

        _instance2.default.remove(this._nativeNode);
        if (!notRemoveChild) {
          _host2.default.driver.removeChild(this._nativeNode, this._parent);
        }
        _host2.default.driver.removeAllEventListeners(this._nativeNode);
      }

      this.unmountChildren(notRemoveChild);

      _host2.default.hook.Reconciler.unmountComponent(this);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._instance = null;
      this._prevStyleCopy = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
      // Replace current element
      this._currentElement = nextElement;

      _ref2.default.update(prevElement, nextElement, this);

      var prevProps = prevElement.props;
      var nextProps = nextElement.props;

      this.updateProperties(prevProps, nextProps);
      this.updateChildren(nextProps.children, nextContext);

      _host2.default.hook.Reconciler.receiveComponent(this);
    }
  }, {
    key: 'updateProperties',
    value: function updateProperties(prevProps, nextProps) {
      var propKey = void 0;
      var styleName = void 0;
      var styleUpdates = void 0;
      for (propKey in prevProps) {
        if (propKey === CHILDREN || nextProps.hasOwnProperty(propKey) || !prevProps.hasOwnProperty(propKey) || prevProps[propKey] == null) {
          continue;
        }
        if (propKey === STYLE) {
          var lastStyle = this._prevStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          this._prevStyleCopy = null;
        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
          if (typeof prevProps[propKey] === 'function') {
            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProps[propKey]);
          }
        } else {
          _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
        }
      }

      for (propKey in nextProps) {
        var nextProp = nextProps[propKey];
        var prevProp = propKey === STYLE ? this._prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined;
        if (propKey === CHILDREN || !nextProps.hasOwnProperty(propKey) || nextProp === prevProp || nextProp == null && prevProp == null) {
          continue;
        }
        // Update style
        if (propKey === STYLE) {
          if (nextProp) {
            // Clone property
            nextProp = this._prevStyleCopy = Object.assign({}, nextProp);
          } else {
            this._prevStyleCopy = null;
          }

          if (prevProp != null) {
            // Unset styles on `prevProp` but not on `nextProp`.
            for (styleName in prevProp) {
              if (prevProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            // Update styles that changed since `prevProp`.
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && prevProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            // Assign next prop when prev style is null
            styleUpdates = nextProp;
          }

          // Update event binding
        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
          var eventName = propKey.slice(2).toLowerCase();

          if (typeof prevProp === 'function') {
            _host2.default.driver.removeEventListener(this.getNativeNode(), eventName, prevProp, nextProps);
          }

          if (typeof nextProp === 'function') {
            _host2.default.driver.addEventListener(this.getNativeNode(), eventName, nextProp, nextProps);
          }
          // Update other property
        } else {
          var payload = {};
          payload[propKey] = nextProp;
          if (nextProp != null) {
            _host2.default.driver.setAttribute(this.getNativeNode(), propKey, nextProp);
          } else {
            _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
          }
          if (false) {
            _host2.default.measurer && _host2.default.measurer.recordOperation({
              instanceID: this._mountID,
              type: 'update attribute',
              payload: payload
            });
          }
        }
      }

      if (styleUpdates) {
        if (false) {
          _host2.default.measurer && _host2.default.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update style',
            payload: styleUpdates
          });
        }
        _host2.default.driver.setStyles(this.getNativeNode(), styleUpdates);
      }
    }
  }, {
    key: 'updateChildren',
    value: function updateChildren(nextChildrenElements, context) {
      var _this2 = this;

      // prev rendered children
      var prevChildren = this._renderedChildren;

      if (nextChildrenElements == null && prevChildren == null) {
        return;
      }

      var nextChildren = {};
      var oldNodes = {};

      if (nextChildrenElements != null) {
        if (!Array.isArray(nextChildrenElements)) {
          nextChildrenElements = [nextChildrenElements];
        }

        // Update next children elements
        for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
          var nextElement = nextChildrenElements[index];
          var name = (0, _getElementKeyName2.default)(nextChildren, nextElement, index);
          var prevChild = prevChildren && prevChildren[name];
          var prevElement = prevChild && prevChild._currentElement;

          if (prevChild != null && (0, _shouldUpdateComponent2.default)(prevElement, nextElement)) {
            // Pass the same context when updating chidren
            prevChild.updateComponent(prevElement, nextElement, context, context);
            nextChildren[name] = prevChild;
          } else {
            // Unmount the prevChild when nextChild is different element type.
            if (prevChild) {
              var oldNativeNode = prevChild.getNativeNode();
              // Delay remove child
              prevChild.unmountComponent(true);
              oldNodes[name] = oldNativeNode;
            }
            // The child must be instantiated before it's mounted.
            nextChildren[name] = (0, _instantiateComponent2.default)(nextElement);
          }
        }
      }

      var firstPrevChild = void 0;
      var delayRemoveFirstPrevChild = void 0;
      // Unmount children that are no longer present.
      if (prevChildren != null) {
        for (var _name in prevChildren) {
          if (!prevChildren.hasOwnProperty(_name)) {
            continue;
          }

          var _prevChild = prevChildren[_name];
          var shouldRemove = !nextChildren[_name];

          // Store old first child ref for append node ahead and maybe delay remove it
          if (!firstPrevChild) {
            firstPrevChild = _prevChild;
            delayRemoveFirstPrevChild = shouldRemove;
          } else if (shouldRemove) {
            _prevChild.unmountComponent();
          }
        }
      }

      if (nextChildren != null) {
        (function () {
          // `nextIndex` will increment for each child in `nextChildren`, but
          // `lastIndex` will be the last index visited in `prevChildren`.
          var lastIndex = 0;
          var nextIndex = 0;
          var lastPlacedNode = null;
          var nextNativeNode = [];

          var _loop = function _loop(_name2) {
            if (!nextChildren.hasOwnProperty(_name2)) {
              return 'continue';
            }

            var nextChild = nextChildren[_name2];
            var prevChild = prevChildren && prevChildren[_name2];

            if (prevChild === nextChild) {
              var prevChildNativeNode = prevChild.getNativeNode();
              // Convert to array type
              if (!Array.isArray(prevChildNativeNode)) {
                prevChildNativeNode = [prevChildNativeNode];
              }

              // If the index of `child` is less than `lastIndex`, then it needs to
              // be moved. Otherwise, we do not need to move it because a child will be
              // inserted or moved before `child`.
              if (prevChild._mountIndex < lastIndex) {
                // Get the last child
                if (Array.isArray(lastPlacedNode)) {
                  lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
                }

                for (var _i = prevChildNativeNode.length - 1; _i >= 0; _i--) {
                  _host2.default.driver.insertAfter(prevChildNativeNode[_i], lastPlacedNode);
                }
              }

              nextNativeNode = nextNativeNode.concat(prevChildNativeNode);

              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild != null) {
                // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              }

              var parent = _this2.getNativeNode();
              // Fragment extended native component, so if parent is fragment should get this._parent
              if (Array.isArray(parent)) {
                parent = _this2._parent;
              }

              nextChild.mountComponent(parent, _this2._instance, context, function (newChild, parent) {
                // TODO: Rework the duplicate code
                var oldChild = oldNodes[_name2];
                if (!Array.isArray(newChild)) {
                  newChild = [newChild];
                }

                if (oldChild) {
                  // The oldChild or newChild all maybe fragment
                  if (!Array.isArray(oldChild)) {
                    oldChild = [oldChild];
                  }

                  // If newChild count large then oldChild
                  var lastNewChild = void 0;
                  for (var _i2 = 0; _i2 < newChild.length; _i2++) {
                    var child = newChild[_i2];
                    if (oldChild[_i2]) {
                      _host2.default.driver.replaceChild(child, oldChild[_i2]);
                    } else {
                      _host2.default.driver.insertAfter(child, lastNewChild);
                    }
                    lastNewChild = child;
                  }

                  // If newChild count less then oldChild
                  if (newChild.length < oldChild.length) {
                    for (var _i3 = newChild.length; _i3 < oldChild.length; _i3++) {
                      _host2.default.driver.removeChild(oldChild[_i3]);
                    }
                  }
                } else {
                  // Insert child at a specific index

                  // Get the last child
                  if (Array.isArray(lastPlacedNode)) {
                    lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
                  }

                  var prevFirstNativeNode = void 0;

                  if (firstPrevChild && !lastPlacedNode) {
                    prevFirstNativeNode = firstPrevChild.getNativeNode();
                    if (Array.isArray(prevFirstNativeNode)) {
                      prevFirstNativeNode = prevFirstNativeNode[0];
                    }
                  }

                  for (var _i4 = newChild.length - 1; _i4 >= 0; _i4--) {
                    var _child = newChild[_i4];
                    if (lastPlacedNode) {
                      _host2.default.driver.insertAfter(_child, lastPlacedNode);
                    } else if (prevFirstNativeNode) {
                      _host2.default.driver.insertBefore(_child, prevFirstNativeNode);
                    } else {
                      _host2.default.driver.appendChild(_child, parent);
                    }
                  }
                }

                nextNativeNode = nextNativeNode.concat(newChild);
              });
              nextChild._mountIndex = nextIndex;
            }

            nextIndex++;
            lastPlacedNode = nextChild.getNativeNode();
          };

          for (var _name2 in nextChildren) {
            var _ret2 = _loop(_name2);

            if (_ret2 === 'continue') continue;
          }

          // Sync update native refs
          if (Array.isArray(_this2._nativeNode)) {
            // Clear all and push the new array
            _this2._nativeNode.splice(0, _this2._nativeNode.length);
            for (var i = 0; i < nextNativeNode.length; i++) {
              _this2._nativeNode.push(nextNativeNode[i]);
            }
          }
        })();
      }

      if (delayRemoveFirstPrevChild) {
        firstPrevChild.unmountComponent();
      }

      this._renderedChildren = nextChildren;
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createElement(this._instance);
        _instance2.default.set(this._nativeNode, this._instance);
      }

      return this._nativeNode;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getNativeNode();
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this._currentElement.type;
    }
  }]);

  return NativeComponent;
}();

exports.default = NativeComponent;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Ref manager
 */

exports.default = {
  update: function update(prevElement, nextElement, component) {
    var prevRef = prevElement != null && prevElement.ref;
    var nextRef = nextElement != null && nextElement.ref;

    // Update refs in owner component
    if (prevRef !== nextRef) {
      // Detach prev RenderedElement's ref
      prevRef != null && this.detach(prevElement._owner, prevRef, component);
      // Attach next RenderedElement's ref
      nextRef != null && this.attach(nextElement._owner, nextRef, component);
    }
  },
  attach: function attach(ownerComponent, ref, component) {
    if (!ownerComponent) {
      throw new Error('You might be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of Rax loaded.');
    }

    var instance = component.getPublicInstance();
    if (typeof ref === 'function') {
      ref(instance);
    } else {
      ownerComponent._instance.refs[ref] = instance;
    }
  },
  detach: function detach(ownerComponent, ref, component) {
    if (typeof ref === 'function') {
      // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
      ref(null);
    } else {
      // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
      var instance = component.getPublicInstance();
      if (ownerComponent._instance.refs[ref] === instance) {
        delete ownerComponent._instance.refs[ref];
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RefreshControl = function (_Component) {
  _inherits(RefreshControl, _Component);

  function RefreshControl() {
    _classCallCheck(this, RefreshControl);

    return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
  }

  _createClass(RefreshControl, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex) {
        var displayRefresh = this.props.refreshing ? 'show' : 'hide';
        return (0, _rax.createElement)(
          'refresh',
          _extends({}, this.props, { display: displayRefresh }),
          this.props.children
        );
      } else {
        return null;
      }
    }
  }]);

  return RefreshControl;
}(_rax.Component);

exports.default = RefreshControl;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxRefreshcontrol = __webpack_require__(33);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

var _timer = __webpack_require__(53);

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_END_REACHED_THRESHOLD = 500;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
var FULL_WIDTH = 750;
var STYLE_NODE_ID = 'rax-scrollview-style';

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

    _this.lastScrollDistance = 0;
    _this.lastScrollContentSize = 0;
    _this.loadmoreretry = 1;

    _this.handleScroll = function (e) {
      if (_universalEnv.isWeb) {
        if (_this.props.onScroll) {
          e.nativeEvent = {
            get contentOffset() {
              return {
                x: e.target.scrollLeft,
                y: e.target.scrollTop
              };
            }
          };
          _this.props.onScroll(e);
        }

        if (_this.props.onEndReached) {
          if (!_this.scrollerNode) {
            _this.scrollerNode = (0, _rax.findDOMNode)(_this.refs.scroller);
            _this.scrollerContentNode = (0, _rax.findDOMNode)(_this.refs.contentContainer);

            _this.scrollerNodeSize = _this.props.horizontal ? _this.scrollerNode.offsetWidth : _this.scrollerNode.offsetHeight;
          }

          // NOTE：in iOS7/8 offsetHeight/Width is is inaccurate （ use scrollHeight/Width ）
          var scrollContentSize = _this.props.horizontal ? _this.scrollerNode.scrollWidth : _this.scrollerNode.scrollHeight;
          var scrollDistance = _this.props.horizontal ? _this.scrollerNode.scrollLeft : _this.scrollerNode.scrollTop;
          var isEndReached = scrollContentSize - scrollDistance - _this.scrollerNodeSize < _this.props.onEndReachedThreshold;

          var isScrollToEnd = scrollDistance > _this.lastScrollDistance;
          var isLoadedMoreContent = scrollContentSize != _this.lastScrollContentSize;

          if (isEndReached && isScrollToEnd && isLoadedMoreContent) {
            _this.lastScrollContentSize = scrollContentSize;
            _this.props.onEndReached(e);
          }

          _this.lastScrollDistance = scrollDistance;
        }
      }
      if (_universalEnv.isWeex) {
        e.nativeEvent = {
          contentOffset: {
            // HACK: weex scroll event value is opposite of web
            x: -e.contentOffset.x,
            y: -e.contentOffset.y
          }
        };
        _this.props.onScroll(e);
      }
    };

    _this.resetScroll = function () {
      if (_universalEnv.isWeb) {
        _this.lastScrollContentSize = 0;
        _this.lastScrollDistance = 0;
      } else {
        _this.setState({
          loadmoreretry: _this.loadmoreretry++
        });
      }
    };

    _this.scrollTo = function (options) {
      var x = parseInt(options.x);
      var y = parseInt(options.y);
      var animated = options && typeof options.animated !== 'undefined' ? options.animated : true;

      if (_universalEnv.isWeex) {
        var dom = __weex_require__('@weex-module/dom');
        var contentContainer = (0, _rax.findDOMNode)(_this.refs.contentContainer);
        dom.scrollToElement(contentContainer.ref, {
          offset: x || y || 0,
          animated: animated
        });
      } else {
        var pixelRatio = document.documentElement.clientWidth / FULL_WIDTH;
        var scrollView = (0, _rax.findDOMNode)(_this.refs.scroller);
        var scrollLeft = scrollView.scrollLeft;
        var scrollTop = scrollView.scrollTop;

        if (animated) {
          var timer = new _timer2.default({
            duration: 400,
            easing: 'easeOutSine',
            onRun: function onRun(e) {
              if (x >= 0) {
                scrollView.scrollLeft = scrollLeft + e.percent * (x * pixelRatio - scrollLeft);
              }
              if (y >= 0) {
                scrollView.scrollTop = scrollTop + e.percent * (y * pixelRatio - scrollTop);
              }
            }
          });
          timer.run();
        } else {
          if (x >= 0) {
            (0, _rax.findDOMNode)(_this.refs.scroller).scrollLeft = pixelRatio * x;
          }

          if (y >= 0) {
            (0, _rax.findDOMNode)(_this.refs.scroller).scrollTop = pixelRatio * y;
          }
        }
      }
    };

    _this.state = {
      loadmoreretry: 0
    };
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          style = _props.style,
          scrollEventThrottle = _props.scrollEventThrottle,
          showsHorizontalScrollIndicator = _props.showsHorizontalScrollIndicator,
          showsVerticalScrollIndicator = _props.showsVerticalScrollIndicator,
          onEndReached = _props.onEndReached,
          onEndReachedThreshold = _props.onEndReachedThreshold,
          onScroll = _props.onScroll,
          children = _props.children;

      // In weex must be int value

      onEndReachedThreshold = parseInt(onEndReachedThreshold, 10);

      var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

      // bugfix: fix scrollview flex in ios 78
      if (!_universalEnv.isWeex && !this.props.horizontal) {
        contentContainerStyle.push(styles.containerWebStyle);
      }

      if (this.props.style) {
        var childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
          return _this2.props.style[prop] !== undefined;
        });

        if (childLayoutProps.length !== 0) {
          console.warn('ScrollView child layout (' + JSON.stringify(childLayoutProps) + ') must be applied through the contentContainerStyle prop.');
        }
      }

      var refreshContainer = (0, _rax.createElement)(_raxView2.default, null),
          contentChild = void 0;
      if (Array.isArray(children)) {
        contentChild = children.map(function (child, index) {
          if (child && child.type == _raxRefreshcontrol2.default) {
            refreshContainer = child;
          } else {
            return child;
          }
        });
      } else {
        contentChild = children;
      }

      var contentContainer = (0, _rax.createElement)(
        _raxView2.default,
        {
          ref: 'contentContainer',
          style: contentContainerStyle },
        contentChild
      );

      var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

      var scrollerStyle = _extends({}, baseStyle, this.props.style);

      var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'scroller',
          _extends({}, this.props, {
            style: scrollerStyle,
            showScrollbar: showsScrollIndicator,
            onLoadmore: onEndReached,
            onScroll: onScroll ? this.handleScroll : null,
            loadmoreoffset: onEndReachedThreshold,
            loadmoreretry: this.state.loadmoreretry,
            scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
          }),
          refreshContainer,
          contentContainer
        );
      } else {
        var handleScroll = this.handleScroll;
        if (scrollEventThrottle) {
          handleScroll = throttle(handleScroll, scrollEventThrottle);
        }
        if (!showsScrollIndicator && typeof document !== 'undefined' && !document.getElementById(STYLE_NODE_ID)) {
          var styleNode = document.createElement('style');
          styleNode.id = STYLE_NODE_ID;
          document.head.appendChild(styleNode);
          styleNode.innerHTML = '.' + this.props.className + '::-webkit-scrollbar{display: none;}';
        }

        scrollerStyle.webkitOverflowScrolling = 'touch';
        scrollerStyle.overflow = 'scroll';

        var webProps = _extends({}, this.props, {
          ref: 'scroller',
          style: scrollerStyle,
          onScroll: handleScroll
        });
        delete webProps.onEndReachedThreshold;

        return (0, _rax.createElement)(
          _raxView2.default,
          webProps,
          contentContainer
        );
      }
    }
  }]);

  return ScrollView;
}(_rax.Component);

ScrollView.propTypes = {};
ScrollView.defaultProps = {
  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  className: 'rax-scrollview'
};


function throttle(func, wait) {
  var ctx, args, rtn, timeoutID;
  var last = 0;

  function call() {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }

  return function throttled() {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID) if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };
}

var styles = {
  baseVertical: {
    flex: 1,
    flexDirection: 'column'
  },
  baseHorizontal: {
    flex: 1,
    flexDirection: 'row'
  },
  contentContainerHorizontal: {
    flexDirection: 'row'
  },
  containerWebStyle: {
    display: 'block'
  }
};

exports.default = ScrollView;
module.exports = exports['default'];

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BOX_ALIGN = {
  stretch: 'stretch',
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center'
};

var BOX_ORIENT = {
  row: 'horizontal',
  column: 'vertical'
};

var BOX_PACK = {
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center',
  'space-between': 'justify',
  'space-around': 'justify' // Just same as `space-between`
};

var FLEX_PROPS = {
  display: true,
  flex: true,
  alignItems: true,
  alignSelf: true,
  flexDirection: true,
  justifyContent: true,
  flexWrap: true
};

var Flexbox = {
  isFlexProp: function isFlexProp(prop) {
    return FLEX_PROPS[prop];
  },
  display: function display(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (value === 'flex') {
      style.display = ['-webkit-box', '-webkit-flex', 'flex'];
    } else {
      style.display = value;
    }

    return style;
  },
  flex: function flex(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxFlex = value;
    style.webkitFlex = value;
    style.flex = value;
    return style;
  },
  flexWrap: function flexWrap(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitFlexWrap = value;
    style.flexWrap = value;
    return style;
  },
  alignItems: function alignItems(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxAlign = BOX_ALIGN[value];
    style.webkitAlignItems = value;
    style.alignItems = value;
    return style;
  },
  alignSelf: function alignSelf(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitAlignSelf = value;
    style.alignSelf = value;
    return style;
  },
  flexDirection: function flexDirection(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxOrient = BOX_ORIENT[value];
    style.webkitFlexDirection = value;
    style.flexDirection = value;
    return style;
  },
  justifyContent: function justifyContent(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxPack = BOX_PACK[value];
    style.webkitJustifyContent = value;
    style.justifyContent = value;
    return style;
  }
};

exports.default = Flexbox;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleUnit = __webpack_require__(23);

var _flexbox = __webpack_require__(39);

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Web Browser driver
 **/

/* global DEVICE_WIDTH, VIEWPORT_WIDTH */

var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;

var ADD_EVENT = 'addEvent';
var REMOVE_EVENT = 'removeEvent';

var Driver = {

  deviceWidth: typeof DEVICE_WIDTH !== 'undefined' && DEVICE_WIDTH || null,
  viewportWidth: typeof VIEWPORT_WIDTH !== 'undefined' && VIEWPORT_WIDTH || 750,
  eventRegistry: {},

  getDeviceWidth: function getDeviceWidth() {
    return this.deviceWidth || document.documentElement.clientWidth;
  },
  setDeviceWidth: function setDeviceWidth(width) {
    this.deviceWidth = width;
  },
  getViewportWidth: function getViewportWidth() {
    return this.viewportWidth;
  },
  setViewportWidth: function setViewportWidth(width) {
    this.viewportWidth = width;
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  createBody: function createBody() {
    return document.body;
  },
  createComment: function createComment(content) {
    return document.createComment(content);
  },
  createEmpty: function createEmpty() {
    return this.createComment(' empty ');
  },
  createText: function createText(text) {
    return document.createTextNode(text);
  },
  updateText: function updateText(node, text) {
    var textContentAttr = 'textContent' in document ? 'textContent' : 'nodeValue';
    node[textContentAttr] = text;
  },
  createElement: function createElement(component) {
    var node = document.createElement(component.type);
    var props = component.props;

    this.setNativeProps(node, props);

    return node;
  },
  appendChild: function appendChild(node, parent) {
    return parent.appendChild(node);
  },
  removeChild: function removeChild(node, parent) {
    parent = parent || node.parentNode;
    // Maybe has been removed when remove child
    if (parent) {
      parent.removeChild(node);
    }
  },
  replaceChild: function replaceChild(newChild, oldChild, parent) {
    parent = parent || oldChild.parentNode;
    parent.replaceChild(newChild, oldChild);
  },
  insertAfter: function insertAfter(node, after, parent) {
    parent = parent || after.parentNode;
    var nextSibling = after.nextSibling;
    if (nextSibling) {
      parent.insertBefore(node, nextSibling);
    } else {
      parent.appendChild(node);
    }
  },
  insertBefore: function insertBefore(node, before, parent) {
    parent = parent || before.parentNode;
    parent.insertBefore(node, before);
  },
  addEventListener: function addEventListener(node, eventName, eventHandler, props) {
    if (this.eventRegistry[eventName]) {
      return this.eventRegistry[eventName](ADD_EVENT, node, eventName, eventHandler, props);
    } else {
      return node.addEventListener(eventName, eventHandler);
    }
  },
  removeEventListener: function removeEventListener(node, eventName, eventHandler, props) {
    if (this.eventRegistry[eventName]) {
      return this.eventRegistry[eventName](REMOVE_EVENT, node, eventName, eventHandler, props);
    } else {
      return node.removeEventListener(eventName, eventHandler);
    }
  },
  removeAllEventListeners: function removeAllEventListeners(node) {
    // noop
  },
  removeAttribute: function removeAttribute(node, propKey) {
    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      return node.innerHTML = null;
    }

    if (propKey === CLASS_NAME) {
      propKey = CLASS;
    }

    if (propKey in node) {
      try {
        // Some node property is readonly when in strict mode
        node[propKey] = null;
      } catch (e) {}
    }

    node.removeAttribute(propKey);
  },
  setAttribute: function setAttribute(node, propKey, propValue) {
    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      return node.innerHTML = propValue.__html;
    }

    if (propKey === CLASS_NAME) {
      propKey = CLASS;
    }

    if (propKey in node) {
      try {
        // Some node property is readonly when in strict mode
        node[propKey] = propValue;
      } catch (e) {
        node.setAttribute(propKey, propValue);
      }
    } else {
      node.setAttribute(propKey, propValue);
    }
  },
  setStyles: function setStyles(node, styles) {
    var tranformedStyles = {};

    for (var prop in styles) {
      var val = styles[prop];
      if (_flexbox2.default.isFlexProp(prop)) {
        _flexbox2.default[prop](val, tranformedStyles);
      } else {
        tranformedStyles[prop] = (0, _styleUnit.convertUnit)(val, prop);
      }
    }

    for (var _prop in tranformedStyles) {
      var transformValue = tranformedStyles[_prop];
      // hack handle compatibility issue
      if (Array.isArray(transformValue)) {
        for (var i = 0; i < transformValue.length; i++) {
          node.style[_prop] = transformValue[i];
        }
      } else {
        node.style[_prop] = transformValue;
      }
    }
  },
  beforeRender: function beforeRender() {
    // Init rem unit
    (0, _styleUnit.setRem)(this.getDeviceWidth() / this.getViewportWidth());
  },
  setNativeProps: function setNativeProps(node, props) {
    for (var prop in props) {
      var value = props[prop];
      if (prop === CHILDREN) {
        continue;
      }

      if (value != null) {
        if (prop === STYLE) {
          this.setStyles(node, value);
        } else if (EVENT_PREFIX_REGEXP.test(prop)) {
          var eventName = prop.slice(2).toLowerCase();
          this.addEventListener(node, eventName, value);
        } else {
          this.setAttribute(node, prop, value);
        }
      }
    }
  }
};

exports.default = Driver;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    component.type = 'div';
    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * weex button
 *
 * props: disabled, style
 */

exports.default = {
  parse: function parse(component) {
    var props = component.props;

    component.type = 'text';

    var style = props.style,
        disabled = props.disabled,
        children = props.children;


    var textStyle = _extends({
      textAlign: 'center',
      fontSize: 22,
      paddingTop: 4,
      paddingRight: 12,
      paddingBottom: 6,
      paddingLeft: 12,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: '#000000',
      backgroudColor: '#c0c0c0'
    }, style);

    if (disabled) {
      props.onClick = null;
      textStyle = _extends({}, textStyle, {
        color: '#7f7f7f',
        borderColor: '#7f7f7f'
      });
    }

    if (typeof children === 'string') {
      props.value = children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BASE_FONT_SIZE = 28;

function generateHeadingStyle(baseFontSize, fontMultiplier, marginMultiplier) {
  return {
    fontSize: baseFontSize * fontMultiplier,
    marginTop: baseFontSize * fontMultiplier * marginMultiplier,
    marginBottom: baseFontSize * fontMultiplier * marginMultiplier,
    fontWeight: 'bold'
  };
}

var HeadingElements = {
  h1: generateHeadingStyle(BASE_FONT_SIZE, 2, 0.67),
  h2: generateHeadingStyle(BASE_FONT_SIZE, 1.5, 0.83),
  h3: generateHeadingStyle(BASE_FONT_SIZE, 1.17, 1),
  h4: generateHeadingStyle(BASE_FONT_SIZE, 1, 1.33),
  h5: generateHeadingStyle(BASE_FONT_SIZE, 0.83, 1.67),
  h6: generateHeadingStyle(BASE_FONT_SIZE, 0.67, 2.33)
};

exports.default = {
  parse: function parse(component) {
    var type = component.type,
        props = component.props;


    component.type = 'text';
    props.style = _extends({}, HeadingElements[type] || HeadingElements.h6, props.style);

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseProps = __webpack_require__(24);

exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;

    component.type = 'image';

    // modify props
    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _img = __webpack_require__(44);

var _img2 = _interopRequireDefault(_img);

var _video = __webpack_require__(49);

var _video2 = _interopRequireDefault(_video);

var _textarea = __webpack_require__(48);

var _textarea2 = _interopRequireDefault(_textarea);

var _span = __webpack_require__(47);

var _span2 = _interopRequireDefault(_span);

var _p = __webpack_require__(46);

var _p2 = _interopRequireDefault(_p);

var _button = __webpack_require__(42);

var _button2 = _interopRequireDefault(_button);

var _heading = __webpack_require__(43);

var _heading2 = _interopRequireDefault(_heading);

var _block = __webpack_require__(41);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  span: _span2.default,
  p: _p2.default,
  img: _img2.default,
  button: _button2.default,
  video: _video2.default,
  textarea: _textarea2.default,
  h1: _heading2.default,
  h2: _heading2.default,
  h3: _heading2.default,
  h4: _heading2.default,
  h5: _heading2.default,
  h6: _heading2.default,
  nav: _block2.default,
  article: _block2.default,
  section: _block2.default,
  // Conflict with weex header tag
  // header: block,
  footer: _block2.default,
  aside: _block2.default,
  main: _block2.default
};
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BASE_FONT_SIZE = 28;

var defaultParagraphStyle = {
  fontSize: BASE_FONT_SIZE,
  marginTop: BASE_FONT_SIZE,
  marginBottom: BASE_FONT_SIZE
};

var TypographyElements = {
  u: {
    textDecoration: 'underline'
  },
  s: {
    textDecoration: 'line-through'
  },
  i: {
    fontStyle: 'italic'
  },
  b: {
    fontWeight: 'bold'
  },
  del: {
    textDecoration: 'line-through'
  },
  em: {
    fontStyle: 'italic'
  },
  strong: {
    fontWeight: 'bold'
  },
  big: {
    fontSize: BASE_FONT_SIZE * 1.2
  },
  small: {
    fontSize: BASE_FONT_SIZE * 0.8
  }
};

function transformString(string) {
  return {
    type: 'span',
    attr: {
      value: string
    }
  };
}

function transformChild(child) {
  var type = child.type;
  var props = child.props;
  var style = props.style;
  var nestedChildren = props.children;
  // Alias img tag
  if (type === 'img') {
    type = 'image';
  }

  // Transfrom to span
  if (TypographyElements[type]) {
    style = _extends({}, TypographyElements[type], style);
    type = 'span';
  }

  props.style = null;
  props.children = null;

  var element = {
    type: type,
    style: style,
    attr: props || {}
  };

  if (nestedChildren) {
    if (type === 'span' && typeof nestedChildren === 'string') {
      element.attr.value = nestedChildren;
    } else {
      element.children = transformChildren(nestedChildren);
    }
  }

  return element;
}

function transformChildren(children) {
  var elements = [];
  if (!Array.isArray(children)) {
    children = [children];
  }

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (typeof child === 'string') {
      elements.push(transformString(child));
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      elements.push(transformChild(child));
    }
  }

  return elements;
}

exports.default = {
  parse: function parse(component) {
    var props = component.props;

    var children = props.children;

    component.type = 'richtext';

    props.style = _extends({}, defaultParagraphStyle, props.style);

    props.value = transformChildren(children);;
    props.children = null;

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  parse: function parse(component) {
    var props = component.props;

    component.type = 'text';

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;


    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseProps = __webpack_require__(24);

exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;

    // modify props

    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Weex driver
                                                                                                                                                                                                                                                                               */


var _styleUnit = __webpack_require__(23);

var _elements = __webpack_require__(45);

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = 'style';
var ID = 'id';
var TEXT = 'text';
var CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
var ARIA_PREFIX_REGEXP = /^aria-/;

var nodeMaps = {};
/* global __weex_document__ */
var document = (typeof __weex_document__ === 'undefined' ? 'undefined' : _typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document : null;

var Driver = {
  deviceWidth: 750,
  viewportWidth: 750,

  getDeviceWidth: function getDeviceWidth() {
    return this.deviceWidth;
  },
  setDeviceWidth: function setDeviceWidth(width) {
    this.deviceWidth = width;
  },
  getViewportWidth: function getViewportWidth() {
    return this.viewportWidth;
  },
  setViewportWidth: function setViewportWidth(width) {
    this.viewportWidth = width;
  },
  getElementById: function getElementById(id) {
    return nodeMaps[id];
  },
  createBody: function createBody() {
    if (document.body) {
      return document.body;
    }

    var documentElement = document.documentElement;
    var body = document.createBody(Driver.bodyType, Driver.bodyProps);
    documentElement.appendChild(body);

    return body;
  },
  createComment: function createComment(content) {
    return document.createComment(content);
  },
  createEmpty: function createEmpty() {
    return this.createComment(' empty ');
  },
  createText: function createText(text) {
    return Driver.createElement({
      type: TEXT,
      props: {
        value: text
      }
    });
  },
  updateText: function updateText(node, content) {
    this.setAttribute(node, 'value', content);
  },
  createElement: function createElement(component) {
    var htmlElement = _elements2.default[component.type];
    if (htmlElement) {
      component = htmlElement.parse(component);
    }

    var props = component.props;
    var events = [];
    var style = {};
    var originStyle = props[STYLE];
    for (var prop in originStyle) {
      style[prop] = (0, _styleUnit.convertUnit)(originStyle[prop], prop);
    }

    var node = document.createElement(component.type, {
      style: style
    });

    this.setNativeProps(node, props, true);

    return node;
  },
  appendChild: function appendChild(node, parent) {
    return parent.appendChild(node);
  },
  removeChild: function removeChild(node, parent) {
    parent = parent || node.parentNode;
    var id = node.attr && node.attr[ID];
    if (id != null) {
      nodeMaps[id] = null;
    }
    return parent.removeChild(node);
  },
  replaceChild: function replaceChild(newChild, oldChild, parent) {
    parent = parent || oldChild.parentNode;
    var previousSibling = oldChild.previousSibling;
    var nextSibling = oldChild.nextSibling;
    this.removeChild(oldChild, parent);

    if (previousSibling) {
      this.insertAfter(newChild, previousSibling, parent);
    } else if (nextSibling) {
      this.insertBefore(newChild, nextSibling, parent);
    } else {
      this.appendChild(newChild, parent);
    }
  },
  insertAfter: function insertAfter(node, after, parent) {
    parent = parent || after.parentNode;
    return parent.insertAfter(node, after);
  },
  insertBefore: function insertBefore(node, before, parent) {
    parent = parent || before.parentNode;
    return parent.insertBefore(node, before);
  },
  addEventListener: function addEventListener(node, eventName, eventHandler, props) {
    var params = props[eventName + 'EventParams'];
    return node.addEvent(eventName, eventHandler, params);
  },
  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
    return node.removeEvent(eventName, eventHandler);
  },
  removeAllEventListeners: function removeAllEventListeners(node) {
    // Noop
  },
  removeAttribute: function removeAttribute(node, propKey, propValue) {
    if (propKey == ID) {
      nodeMaps[propValue] = null;
    }
    // Weex native will crash when pass null value
    return node.setAttr(propKey, undefined, false);
  },
  setAttribute: function setAttribute(node, propKey, propValue) {
    if (propKey == ID) {
      nodeMaps[propValue] = node;
    }

    // Weex only support `ariaLabel` format, convert `aria-label` format to camelcase
    if (ARIA_PREFIX_REGEXP.test(propKey)) {
      propKey = propKey.replace(/\-(\w)/, function (m, p1) {
        return p1.toUpperCase();
      });
    }

    return node.setAttr(propKey, propValue, false);
  },
  setStyles: function setStyles(node, styles) {
    // TODO if more then one style update, call setStyles will be better performance
    for (var key in styles) {
      var val = styles[key];
      val = (0, _styleUnit.convertUnit)(val, key);
      node.setStyle(key, val);
    }
  },
  beforeRender: function beforeRender() {
    // Turn off batched updates
    document.open();

    // Init rem unit
    (0, _styleUnit.setRem)(this.getDeviceWidth() / this.getViewportWidth());
  },
  afterRender: function afterRender() {
    if (document.listener && document.listener.createFinish) {
      document.listener.createFinish();
    }

    // Turn on batched updates
    document.close();
  },
  setNativeProps: function setNativeProps(node, props, skipSetStyles) {
    for (var prop in props) {
      var value = props[prop];
      if (prop === CHILDREN) {
        continue;
      }

      if (value != null) {
        if (prop === STYLE) {
          if (skipSetStyles) {
            continue;
          }
          this.setStyles(node, value);
        } else if (EVENT_PREFIX_REGEXP.test(prop)) {
          var eventName = prop.slice(2).toLowerCase();
          this.addEventListener(node, eventName, value, props);
        } else {
          this.setAttribute(node, prop, value);
        }
      }
    }
  }
};

exports.default = Driver;
module.exports = exports['default'];

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrame = typeof requestAnimationFrame === 'undefined' ? typeof webkitRequestAnimationFrame === 'undefined' ? function (job) {
  return setTimeout(job, 16);
} : webkitRequestAnimationFrame : requestAnimationFrame;

var cancelAnimationFrame = typeof cancelAnimationFrame === 'undefined' ? typeof webkitCancelAnimationFrame === 'undefined' ? clearTimeout : webkitCancelAnimationFrame : cancelAnimationFrame;

var TYPES = {
  START: 'start',
  END: 'end',
  RUN: 'run',
  STOP: 'stop'
};

var easing = {
  easeOutSine: function easeOutSine(x) {
    return Math.sin(x * Math.PI / 2);
  }
};

var MIN_DURATION = 1;

var noop = function noop() {};

var Timer = function () {
  function Timer(config) {
    _classCallCheck(this, Timer);

    this.config = _extends({
      easing: 'linear',
      duration: Infinity,
      onStart: noop,
      onRun: noop,
      onStop: noop,
      onEnd: noop
    }, config);
  }

  _createClass(Timer, [{
    key: 'run',
    value: function run() {
      var _config = this.config,
          duration = _config.duration,
          onStart = _config.onStart,
          onRun = _config.onRun;

      if (duration <= MIN_DURATION) {
        this.isfinished = true;
        onRun({ percent: 1 });
        this.stop();
      }
      if (this.isfinished) return;
      this._hasFinishedPercent = this._stop && this._stop.percent || 0;
      this._stop = null;
      this.start = Date.now();
      this.percent = 0;
      onStart({ percent: 0, type: TYPES.START });
      // epsilon determines the precision of the solved values
      var epsilon = 1000 / 60 / duration / 4;
      this.easingFn = easing[this.config.easing];
      this._run();
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      var _config2 = this.config,
          onRun = _config2.onRun,
          onStop = _config2.onStop;

      this._raf && cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(function () {
        _this.now = Date.now();
        _this.t = _this.now - _this.start;
        _this.duration = _this.now - _this.start >= _this.config.duration ? _this.config.duration : _this.now - _this.start;
        _this.progress = _this.easingFn(_this.duration / _this.config.duration);
        _this.percent = _this.duration / _this.config.duration + _this._hasFinishedPercent;
        if (_this.percent >= 1 || _this._stop) {
          _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
          _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

          onRun({
            percent: _this.progress,
            originPercent: _this.percent,
            t: _this.t,
            type: TYPES.RUN
          });

          onStop({
            percent: _this.percent,
            t: _this.t,
            type: TYPES.STOP
          });

          if (_this.percent >= 1) {
            _this.isfinished = true;
            _this.stop();
          }
          return;
        }

        onRun({
          percent: _this.progress,
          originPercent: _this.percent,
          t: _this.t,
          type: TYPES.RUN
        });

        _this._run();
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var onEnd = this.config.onEnd;

      this._stop = {
        percent: this.percent,
        now: this.now
      };
      onEnd({
        percent: 1,
        t: this.t,
        type: TYPES.END
      });
      cancelAnimationFrame(this._raf);
    }
  }]);

  return Timer;
}();

exports.default = Timer;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenChildren = __webpack_require__(27);

var _flattenChildren2 = _interopRequireDefault(_flattenChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertChildrenToArray(children) {
  // flatten children
  children = (0, _flattenChildren2.default)(children, []);
  return Array.isArray(children) ? children : [].concat(children);
}

var Children = {
  map: function map(children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    return children.map(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  forEach: function forEach(children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    children.forEach(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  count: function count(children) {
    if (children == null) return 0;
    return convertChildrenToArray(children).length;
  },
  only: function only(children) {
    // `only` receive rax element child
    // null value is not acceptable
    children = Children.toArray(children);
    if (children.length !== 1) throw new Error('Children.only: expected to receive a single element child.');
    return children[0];
  },
  toArray: function toArray(children) {
    if (children == null) return [];
    // `toArray` filter null value
    return convertChildrenToArray(children).filter(function (child) {
      return child !== null;
    });
  }
};

exports.default = Children;
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createContext;

var _component = __webpack_require__(8);

var _component2 = _interopRequireDefault(_component);

var _proptypes = __webpack_require__(28);

var _proptypes2 = _interopRequireDefault(_proptypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValueEmitter = function () {
  function ValueEmitter(defaultValue) {
    _classCallCheck(this, ValueEmitter);

    this.handlers = [];
    this.value = defaultValue;
  }

  _createClass(ValueEmitter, [{
    key: 'on',
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: 'off',
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: 'emit',
    value: function emit(value) {
      this.value = value;
      this.handlers.forEach(function (handler) {
        return handler(value);
      });
    }
  }]);

  return ValueEmitter;
}();

var uniqueId = 0;

function createContext(defaultValue) {
  var contextProp = '__context_' + uniqueId++ + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(_ref, [this].concat(args))), _this), _this.emitter = new ValueEmitter(defaultValue), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return _defineProperty({}, contextProp, this.emitter);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.value !== undefined) {
          this.emitter.value = this.props.value;
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          this.emitter.emit(nextProps.value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return Provider;
  }(_component2.default);

  Provider.childContextTypes = _defineProperty({}, contextProp, _proptypes2.default.object);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _ref3;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = Consumer.__proto__ || Object.getPrototypeOf(Consumer)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
        value: _this2.context[contextProp] ? _this2.context[contextProp].value : defaultValue
      }, _this2.onUpdate = function (value) {
        return _this2.setState({ value: value });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(Consumer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var consumer = Array.isArray(children) ? children[0] : children;
        if (typeof consumer === 'function') {
          return consumer(this.state.value);
        }
      }
    }]);

    return Consumer;
  }(_component2.default);

  Consumer.contextTypes = _defineProperty({}, contextProp, _proptypes2.default.object);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPortal;

var _component = __webpack_require__(8);

var _component2 = _interopRequireDefault(_component);

var _render = __webpack_require__(15);

var _render2 = _interopRequireDefault(_render);

var _unmountComponentAtNode = __webpack_require__(16);

var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

var _element = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props, context) {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props, context));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container !== this.props.container) {
        (0, _unmountComponentAtNode2.default)(prevProps.container);
      }

      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _unmountComponentAtNode2.default)(this.props.container);
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      (0, _render2.default)(this.props.element, this.props.container, {
        parent: this
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_component2.default);

function createPortal(element, container) {
  return (0, _element.createElement)(Portal, {
    element: element,
    container: container
  });
}
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hook = __webpack_require__(25);

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(_hook2.default);
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findComponentInstance(node) {
  if (node == null) {
    return null;
  }
  return _instance2.default.get(node);
}

exports.default = findComponentInstance;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = __webpack_require__(15);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hydrate(element, container, options, callback) {
  // Handle server rendered element
  if (container.childNodes) {
    // Clone childNodes, Because removeChild will causing change in childNodes length
    var childNodes = [].concat(_toConsumableArray(container.childNodes));

    for (var i = 0; i < childNodes.length; i++) {
      var rootChildNode = childNodes[i];
      container.removeChild(rootChildNode);
    }
  }

  return (0, _render2.default)(element, container, options, callback);;
}

exports.default = hydrate;
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inject;

var _universalEnv = __webpack_require__(1);

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _empty = __webpack_require__(64);

var _empty2 = _interopRequireDefault(_empty);

var _native = __webpack_require__(30);

var _native2 = _interopRequireDefault(_native);

var _text = __webpack_require__(69);

var _text2 = _interopRequireDefault(_text);

var _composite = __webpack_require__(63);

var _composite2 = _interopRequireDefault(_composite);

var _fragment = __webpack_require__(65);

var _fragment2 = _interopRequireDefault(_fragment);

var _driverWeex = __webpack_require__(50);

var _driverWeex2 = _interopRequireDefault(_driverWeex);

var _driverBrowser = __webpack_require__(40);

var _driverBrowser2 = _interopRequireDefault(_driverBrowser);

var _hook = __webpack_require__(25);

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inject(_ref) {
  var driver = _ref.driver,
      hook = _ref.hook,
      measurer = _ref.measurer,
      deviceWidth = _ref.deviceWidth,
      viewportWidth = _ref.viewportWidth,
      eventRegistry = _ref.eventRegistry,
      bodyType = _ref.bodyType,
      bodyProps = _ref.bodyProps;

  // Inject component class
  _host2.default.EmptyComponent = _empty2.default;
  _host2.default.NativeComponent = _native2.default;
  _host2.default.TextComponent = _text2.default;
  _host2.default.FragmentComponent = _fragment2.default;
  _host2.default.CompositeComponent = _composite2.default;

  // Inject devtool hook
  _host2.default.hook = hook || _hook2.default;

  // Inject performance measurer
  _host2.default.measurer = measurer;

  // Inject render driver
  if (!_host2.default.driver) {
    if (!driver) {
      if (_universalEnv.isWeex) {
        driver = _driverWeex2.default;
      } else if (_universalEnv.isWeb) {
        driver = _driverBrowser2.default;
      } else {
        throw Error('No builtin driver matched');
      }
    }
    _host2.default.driver = driver;
  }

  if (deviceWidth && _host2.default.driver.setDeviceWidth) {
    _host2.default.driver.setDeviceWidth(deviceWidth);
  }

  if (viewportWidth && _host2.default.driver.setViewportWidth) {
    _host2.default.driver.setViewportWidth(viewportWidth);
  }

  if (eventRegistry) {
    _host2.default.driver.eventRegistry = eventRegistry;
  }

  // Body custom type only works in weex
  if (bodyType) {
    _host2.default.driver.bodyType = bodyType;
  }

  if (bodyProps) {
    _host2.default.driver.bodyProps = bodyProps;
  }
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(8);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pure component class.
 */
var PureComponent = function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent(props, context) {
    _classCallCheck(this, PureComponent);

    return _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props, context));
  }

  _createClass(PureComponent, [{
    key: 'isPureComponentClass',
    value: function isPureComponentClass() {}
  }]);

  return PureComponent;
}(_component2.default);

exports.default = PureComponent;
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setNativeProps;

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _findDOMNode = __webpack_require__(26);

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setNativeProps(node, props) {
  node = (0, _findDOMNode2.default)(node);
  _host2.default.driver.setNativeProps(node, props);
}
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateless = __webpack_require__(68);

var _stateless2 = _interopRequireDefault(_stateless);

var _updater = __webpack_require__(70);

var _updater2 = _interopRequireDefault(_updater);

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _ref = __webpack_require__(31);

var _ref2 = _interopRequireDefault(_ref);

var _instantiateComponent = __webpack_require__(10);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(17);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _shallowEqual = __webpack_require__(67);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function performInSandbox(fn, instance, callback) {
  try {
    return fn();
  } catch (e) {
    if (callback) {
      callback(e);
    } else {
      handleError(instance, e);
    }
  }
}

function handleError(instance, error) {
  var boundary = void 0;

  while (instance) {
    if (typeof instance.componentDidCatch === 'function') {
      boundary = instance;
      break;
    } else if (instance._internal && instance._internal._parentInstance) {
      instance = instance._internal._parentInstance;
    } else {
      break;
    }
  }

  if (boundary) {
    boundary.componentDidCatch(error);
  } else {
    if (_host2.default.sandbox) {
      setTimeout(function () {
        throw error;
      }, 0);
    } else {
      throw error;
    }
  }
}

var measureLifeCycle = void 0;
if (false) {
  measureLifeCycle = function measureLifeCycle(callback, instanceID, type) {
    _host2.default.measurer && _host2.default.measurer.beforeLifeCycle(instanceID, type);
    callback();
    _host2.default.measurer && _host2.default.measurer.afterLifeCycle(instanceID, type);
  };
}

/**
 * Composite Component
 */

var CompositeComponent = function () {
  function CompositeComponent(element) {
    _classCallCheck(this, CompositeComponent);

    this._currentElement = element;
  }

  _createClass(CompositeComponent, [{
    key: 'getName',
    value: function getName() {
      var type = this._currentElement.type;
      var constructor = this._instance && this._instance.constructor;
      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
    }
  }, {
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      var _this = this;

      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;
      this._updateCount = 0;

      if (false) {
        _host2.default.measurer && _host2.default.measurer.beforeMountComponent(this._mountID, this);
      }

      var Component = this._currentElement.type;
      var publicProps = this._currentElement.props;
      var isClass = Component.prototype;
      var isComponentClass = isClass && Component.prototype.isComponentClass;
      // Class stateless component without state but have lifecycles
      var isStatelessClass = isClass && Component.prototype.render;

      // Context process
      var publicContext = this._processContext(context);

      // Initialize the public class
      var instance = void 0;
      var renderedElement = void 0;

      if (isComponentClass || isStatelessClass) {
        // Component instance
        instance = new Component(publicProps, publicContext, _updater2.default);
      } else if (typeof Component === 'function') {
        // Functional stateless component without state and lifecycles
        instance = new _stateless2.default(Component);
      } else {
        throw new Error('Invalid component type: ' + Component + '. (keys: ' + Object.keys(Component) + ')');
      }

      // These should be set up in the constructor, but as a convenience for
      // simpler class abstractions, we set them up after the fact.
      instance.props = publicProps;
      instance.context = publicContext;
      instance.refs = {};

      // Inject the updater into instance
      instance.updater = _updater2.default;
      instance._internal = this;
      this._instance = instance;

      // Init state, must be set to an object or null
      var initialState = instance.state;
      if (initialState === undefined) {
        // TODO clone the state?
        instance.state = initialState = null;
      }

      var error = null;
      var errorCallback = function errorCallback(e) {
        error = e;
      };

      if (instance.componentWillMount) {
        performInSandbox(function () {
          if (false) {
            measureLifeCycle(function () {
              instance.componentWillMount();
            }, _this._mountID, 'componentWillMount');
          } else {
            instance.componentWillMount();
          }
        }, instance, errorCallback);
      }

      if (renderedElement == null) {
        _host2.default.component = this;
        // Process pending state when call setState in componentWillMount
        instance.state = this._processPendingState(publicProps, publicContext);

        performInSandbox(function () {
          if (false) {
            measureLifeCycle(function () {
              renderedElement = instance.render();
            }, _this._mountID, 'render');
          } else {
            renderedElement = instance.render();
          }
        }, instance, errorCallback);

        _host2.default.component = null;
      }

      this._renderedComponent = (0, _instantiateComponent2.default)(renderedElement);
      this._renderedComponent.mountComponent(this._parent, instance, this._processChildContext(context), childMounter);

      if (error) {
        handleError(instance, error);
      }

      if (this._currentElement && this._currentElement.ref) {
        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
      }

      if (instance.componentDidMount) {
        performInSandbox(function () {
          if (false) {
            measureLifeCycle(function () {
              instance.componentDidMount();
            }, _this._mountID, 'componentDidMount');
          } else {
            instance.componentDidMount();
          }
        }, instance);
      }

      _host2.default.hook.Reconciler.mountComponent(this);

      if (false) {
        _host2.default.measurer && _host2.default.measurer.afterMountComponent(this._mountID);
      }

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      var instance = this._instance;

      if (instance.componentWillUnmount) {
        performInSandbox(function () {
          instance.componentWillUnmount();
        }, instance);
      }

      _host2.default.hook.Reconciler.unmountComponent(this);

      instance._internal = null;

      if (this._renderedComponent != null) {
        var ref = this._currentElement.ref;
        if (ref) {
          _ref2.default.detach(this._currentElement._owner, ref, this);
        }

        this._renderedComponent.unmountComponent(notRemoveChild);
        this._renderedComponent = null;
        this._instance = null;
      }

      this._currentElement = null;
      this._parentInstance = null;

      // Reset pending fields
      // Even if this component is scheduled for another update in ReactUpdates,
      // it would still be ignored because these fields are reset.
      this._pendingStateQueue = null;
      this._pendingForceUpdate = false;

      // These fields do not really need to be reset since this object is no
      // longer accessible.
      this._context = null;
    }

    /**
     * Filters the context object to only contain keys specified in
     * `contextTypes`
     */

  }, {
    key: '_processContext',
    value: function _processContext(context) {
      var Component = this._currentElement.type;
      var contextTypes = Component.contextTypes;
      if (!contextTypes) {
        return {};
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    }
  }, {
    key: '_processChildContext',
    value: function _processChildContext(currentContext) {
      var instance = this._instance;
      var childContext = instance.getChildContext && instance.getChildContext();
      if (childContext) {
        return Object.assign({}, currentContext, childContext);
      }
      return currentContext;
    }
  }, {
    key: '_processPendingState',
    value: function _processPendingState(props, context) {
      var instance = this._instance;
      var queue = this._pendingStateQueue;
      if (!queue) {
        return instance.state;
      }
      // Reset pending queue
      this._pendingStateQueue = null;
      var nextState = Object.assign({}, instance.state);
      for (var i = 0; i < queue.length; i++) {
        var partial = queue[i];
        Object.assign(nextState, typeof partial === 'function' ? partial.call(instance, nextState, props, context) : partial);
      }

      return nextState;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
      var instance = this._instance;

      if (false) {
        _host2.default.measurer && _host2.default.measurer.beforeUpdateComponent(this._mountID, this);
      }

      if (!instance) {
        console.error('Update component \'' + this.getName() + '\' that has already been unmounted (or failed to mount).');
      }

      var willReceive = false;
      var nextContext = void 0;
      var nextProps = void 0;

      // Determine if the context has changed or not
      if (this._context === nextUnmaskedContext) {
        nextContext = instance.context;
      } else {
        nextContext = this._processContext(nextUnmaskedContext);
        willReceive = true;
      }

      // Distinguish between a props update versus a simple state update
      if (prevElement === nextElement) {
        // Skip checking prop types again -- we don't read component.props to avoid
        // warning for DOM component props in this upgrade
        nextProps = nextElement.props;
      } else {
        nextProps = nextElement.props;
        willReceive = true;
      }

      var hasReceived = willReceive && instance.componentWillReceiveProps;

      if (hasReceived) {
        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
        this._pendingState = true;
        performInSandbox(function () {
          instance.componentWillReceiveProps(nextProps, nextContext);
        }, instance);
        this._pendingState = false;
      }

      // Update refs
      _ref2.default.update(prevElement, nextElement, this);

      // Shoud update always default
      var shouldUpdate = true;
      var prevProps = instance.props;
      var prevState = instance.state;
      // TODO: could delay execution processPendingState
      var nextState = this._processPendingState(nextProps, nextContext);

      // ShouldComponentUpdate is not called when forceUpdate is used
      if (!this._pendingForceUpdate) {
        if (instance.shouldComponentUpdate) {
          shouldUpdate = performInSandbox(function () {
            return instance.shouldComponentUpdate(nextProps, nextState, nextContext);
          }, instance);
        } else if (instance.isPureComponentClass) {
          shouldUpdate = !(0, _shallowEqual2.default)(prevProps, nextProps) || !(0, _shallowEqual2.default)(prevState, nextState);
        }
      }

      if (shouldUpdate) {
        this._pendingForceUpdate = false;
        // Will set `this.props`, `this.state` and `this.context`.
        var prevContext = instance.context;

        // Cannot use this.setState() in componentWillUpdate.
        // If need to update state in response to a prop change, use componentWillReceiveProps instead.
        performInSandbox(function () {
          if (instance.componentWillUpdate) {
            instance.componentWillUpdate(nextProps, nextState, nextContext);
          }
        }, instance);

        // Replace with next
        this._currentElement = nextElement;
        this._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;

        this._updateRenderedComponent(nextUnmaskedContext);

        performInSandbox(function () {
          if (instance.componentDidUpdate) {
            instance.componentDidUpdate(prevProps, prevState, prevContext);
          }
        }, instance);

        this._updateCount++;
      } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        this._currentElement = nextElement;
        this._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;
      }

      // Flush setState callbacks set in componentWillReceiveProps
      if (hasReceived) {
        var callbacks = this._pendingCallbacks;
        this._pendingCallbacks = null;
        _updater2.default.runCallbacks(callbacks, instance);
      }

      if (false) {
        _host2.default.measurer && _host2.default.measurer.afterUpdateComponent(this._mountID);
      }

      _host2.default.hook.Reconciler.receiveComponent(this);
    }

    /**
     * Call the component's `render` method and update the DOM accordingly.
     */

  }, {
    key: '_updateRenderedComponent',
    value: function _updateRenderedComponent(context) {
      var _this2 = this;

      var prevRenderedComponent = this._renderedComponent;
      var prevRenderedElement = prevRenderedComponent._currentElement;

      var instance = this._instance;
      var nextRenderedElement = void 0;

      _host2.default.component = this;

      performInSandbox(function () {
        if (false) {
          measureLifeCycle(function () {
            nextRenderedElement = instance.render();
          }, _this2._mountID, 'render');
        } else {
          nextRenderedElement = instance.render();
        }
      }, instance);

      _host2.default.component = null;

      if ((0, _shouldUpdateComponent2.default)(prevRenderedElement, nextRenderedElement)) {
        prevRenderedComponent.updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedComponent._context, this._processChildContext(context));
        if (false) {
          _host2.default.measurer && _host2.default.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update component',
            payload: {}
          });
        }
      } else {
        var oldChild = prevRenderedComponent.getNativeNode();
        prevRenderedComponent.unmountComponent(true);

        this._renderedComponent = (0, _instantiateComponent2.default)(nextRenderedElement);
        this._renderedComponent.mountComponent(this._parent, instance, this._processChildContext(context), function (newChild, parent) {
          // TODO: Duplicate code in native component file
          if (!Array.isArray(newChild)) {
            newChild = [newChild];
          }

          // oldChild or newChild all maybe fragment
          if (!Array.isArray(oldChild)) {
            oldChild = [oldChild];
          }

          // If newChild count large then oldChild
          var lastNewChild = void 0;
          for (var i = 0; i < newChild.length; i++) {
            var child = newChild[i];
            if (oldChild[i]) {
              _host2.default.driver.replaceChild(child, oldChild[i]);
            } else {
              _host2.default.driver.insertAfter(child, lastNewChild);
            }
            lastNewChild = child;
          }

          // If newChild count less then oldChild
          if (newChild.length < oldChild.length) {
            for (var _i = newChild.length; _i < oldChild.length; _i++) {
              _host2.default.driver.removeChild(oldChild[_i]);
            }
          }
        });
      }
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      var renderedComponent = this._renderedComponent;
      if (renderedComponent) {
        return renderedComponent.getNativeNode();
      }
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      var instance = this._instance;
      // The Stateless components cannot be given refs
      if (instance instanceof _stateless2.default) {
        return null;
      }
      return instance;
    }
  }]);

  return CompositeComponent;
}();

exports.default = CompositeComponent;
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Empty Component
 */
var EmptyComponent = function () {
  function EmptyComponent() {
    _classCallCheck(this, EmptyComponent);

    this._currentElement = null;
  }

  _createClass(EmptyComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;

      var instance = {
        _internal: this
      };

      var nativeNode = this.getNativeNode();
      if (childMounter) {
        childMounter(nativeNode, parent);
      } else {
        _host2.default.driver.appendChild(nativeNode, parent);
      }

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode && !notRemoveChild) {
        _host2.default.driver.removeChild(this._nativeNode, this._parent);
      }

      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent() {
      // Noop
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      // Weex native node
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createEmpty();
      }

      return this._nativeNode;
    }
  }]);

  return EmptyComponent;
}();

exports.default = EmptyComponent;
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

var _native = __webpack_require__(30);

var _native2 = _interopRequireDefault(_native);

var _instance = __webpack_require__(5);

var _instance2 = _interopRequireDefault(_instance);

var _instantiateComponent = __webpack_require__(10);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _getElementKeyName = __webpack_require__(29);

var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Fragment Component
 */
var FragmentComponent = function (_NativeComponent) {
  _inherits(FragmentComponent, _NativeComponent);

  function FragmentComponent(element) {
    _classCallCheck(this, FragmentComponent);

    return _possibleConstructorReturn(this, (FragmentComponent.__proto__ || Object.getPrototypeOf(FragmentComponent)).call(this, element));
  }

  _createClass(FragmentComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      // Parent native element
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      var instance = {
        _internal: this
      };
      this._instance = instance;

      var fragment = this.getNativeNode();
      var children = this._currentElement;

      // Process children
      this.mountChildren(children, context);

      if (childMounter) {
        childMounter(fragment, parent);
      } else {
        var isFragmentParent = Array.isArray(parent);
        for (var i = 0; i < fragment.length; i++) {
          var child = fragment[i];
          // When the parent is also a fragment
          if (isFragmentParent) {
            parent.push(child);
          } else {
            _host2.default.driver.appendChild(child, parent);
          }
        }
      }

      return instance;
    }
  }, {
    key: 'mountChildren',
    value: function mountChildren(children, context) {
      var _this2 = this;

      var renderedChildren = this._renderedChildren = {};
      var fragment = this.getNativeNode();

      var renderedChildrenImage = children.map(function (element, index) {
        var renderedChild = (0, _instantiateComponent2.default)(element);
        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
        renderedChildren[name] = renderedChild;
        renderedChild._mountIndex = index;
        // Mount
        var mountImage = renderedChild.mountComponent(_this2._parent, _this2._instance, context, function (nativeNode) {
          if (Array.isArray(nativeNode)) {
            for (var i = 0; i < nativeNode.length; i++) {
              fragment.push(nativeNode[i]);
            }
          } else {
            fragment.push(nativeNode);
          }
        });
        return mountImage;
      });

      return renderedChildrenImage;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode) {
        _instance2.default.remove(this._nativeNode);
        if (!notRemoveChild) {
          for (var i = 0; i < this._nativeNode.length; i++) {
            _host2.default.driver.removeChild(this._nativeNode[i]);
          }
        }
      }

      // Do not need remove child when their parent is removed
      this.unmountChildren(true);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._instance = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
      // Replace current element
      this._currentElement = nextElement;
      this.updateChildren(this._currentElement, nextContext);
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = [];
      }

      return this._nativeNode;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getNativeNode();
    }
  }, {
    key: 'getName',
    value: function getName() {
      return 'fragment';
    }
  }]);

  return FragmentComponent;
}(_native2.default);

exports.default = FragmentComponent;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(8);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootCounter = 1;

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Root);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.rootID = rootCounter++, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Root, [{
    key: 'isRootComponent',
    value: function isRootComponent() {}
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getRenderedComponent().getPublicInstance();
    }
  }, {
    key: 'getRenderedComponent',
    value: function getRenderedComponent() {
      return this._internal._renderedComponent;
    }
  }]);

  return Root;
}(_component2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

exports.default = shallowEqual;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Stateless Component Class Wrapper
 */
var StatelessComponent = function () {
  function StatelessComponent(pureRender) {
    _classCallCheck(this, StatelessComponent);

    // A stateless function
    this.pureRender = pureRender;
  }

  _createClass(StatelessComponent, [{
    key: 'render',
    value: function render() {
      if (false) {
        _host2.default.measurer && _host2.default.measurer.beforeRender();
      }

      return this.pureRender(this.props, this.context);
    }
  }]);

  return StatelessComponent;
}();

exports.default = StatelessComponent;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _host = __webpack_require__(2);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Text Component
 */
var TextComponent = function () {
  function TextComponent(element) {
    _classCallCheck(this, TextComponent);

    this._currentElement = element;
    this._stringText = String(element);
  }

  _createClass(TextComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      // Weex dom operation
      var nativeNode = this.getNativeNode();

      if (childMounter) {
        childMounter(nativeNode, parent);
      } else {
        _host2.default.driver.appendChild(nativeNode, parent);
      }

      var instance = {
        _internal: this
      };

      _host2.default.hook.Reconciler.mountComponent(this);

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode && !notRemoveChild) {
        _host2.default.driver.removeChild(this._nativeNode, this._parent);
      }

      _host2.default.hook.Reconciler.unmountComponent(this);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._stringText = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, context) {
      // If some text do noting
      if (prevElement !== nextElement) {
        // Replace current element
        this._currentElement = nextElement;
        // Devtool read the latest stringText value
        this._stringText = String(nextElement);
        _host2.default.driver.updateText(this.getNativeNode(), this._stringText);
        _host2.default.hook.Reconciler.receiveComponent(this);
      }
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createText(this._stringText);
      }
      return this._nativeNode;
    }
  }]);

  return TextComponent;
}();

exports.default = TextComponent;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function enqueueCallback(internal, callback) {
  if (callback) {
    var callbackQueue = internal._pendingCallbacks || (internal._pendingCallbacks = []);
    callbackQueue.push(callback);
  }
}

function enqueueState(internal, partialState) {
  if (partialState) {
    var stateQueue = internal._pendingStateQueue || (internal._pendingStateQueue = []);
    stateQueue.push(partialState);
  }
}

var Updater = {
  setState: function setState(component, partialState, callback) {
    var internal = component._internal;

    if (!internal) {
      return;
    }

    enqueueState(internal, partialState);
    enqueueCallback(internal, callback);

    // pending in componentWillReceiveProps and componentWillMount
    if (!internal._pendingState && internal._renderedComponent) {
      this.runUpdate(component);
    }
  },

  forceUpdate: function forceUpdate(component, callback) {
    var internal = component._internal;

    if (!internal) {
      return;
    }

    internal._pendingForceUpdate = true;

    enqueueCallback(internal, callback);
    // pending in componentWillMount
    if (internal._renderedComponent) {
      this.runUpdate(component);
    }
  },

  runUpdate: function runUpdate(component) {
    var internal = component._internal;

    // If updateComponent happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = internal._pendingCallbacks;
    internal._pendingCallbacks = null;

    var prevElement = internal._currentElement;
    var prevUnmaskedContext = internal._context;

    if (internal._pendingStateQueue || internal._pendingForceUpdate) {
      internal.updateComponent(prevElement, prevElement, prevUnmaskedContext, prevUnmaskedContext);
    }

    this.runCallbacks(callbacks, component);
  },

  runCallbacks: function runCallbacks(callbacks, context) {
    if (callbacks) {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(context);
      }
    }
  }
};

exports.default = Updater;
module.exports = exports["default"];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '0.5.4';
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@weex-module/stream");

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var itemWidth = 166;

// default style for tabheader
exports.default = {

  container: {
    height: 80,
    backgroundColor: '#ffffff',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#e7e7e7',
    position: 'relative'
  },
  item: {
    height: 80,
    width: itemWidth,
    textAlign: 'center',
    float: 'left',
    position: 'relative'
  },
  itemText: {
    color: '#000000',
    paddingTop: 24,
    textAlign: 'center'
  },
  selectItemText: {
    color: '#ff4200',
    paddingTop: 24,
    textAlign: 'center'
  },

  borderBottom: {
    left: 0,
    height: 0,
    width: 0,
    position: 'absolute'
  },
  borderRun: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 4,
    width: 166,
    backgroundColor: '#fc511f'
  },

  drop: {
    height: 81,
    marginBottom: '-81rem',
    position: 'relative'
  },
  dropBtn: {
    height: 80,
    width: 71,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#e7e7e7',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#e7e7e7'
  },
  dropBoxTtem: {
    height: 80,
    textAlign: 'center'
  },
  dropBoxText: {
    paddingTop: 27,
    textAlign: 'center',
    color: '#000000'
  },
  dropBoxSelectText: {
    paddingTop: 27,
    textAlign: 'center',
    color: '#ff4200'
  },

  iconContainer: {
    boxShadow: 'inset 0px -1px 0px 0px rgba(0,0,0,0.10)',
    height: 112,
    fontFamily: 'PingFangSC-Regular'
  },
  iconItem: {
    width: itemWidth,
    textAlign: 'center',
    float: 'left',
    position: 'relative',
    height: 112
  },
  iconText: {
    textAlign: 'center',
    fontSize: 28,
    height: 112,
    color: '#000000'
  },
  selectedIconText: {
    textAlign: 'center',
    fontSize: 28,
    height: 112,
    color: '#FFFFFF'
  },
  iconBox: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 63
  },
  icon: {
    width: 48,
    height: 48,
    marginTop: 12,
    display: 'inline-block',
    position: 'relative'
  },
  iconBackgroundRun: {
    left: 0,
    height: 0,
    width: 0,
    position: 'absolute'
  }

};
module.exports = exports['default'];

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _Row2 = __webpack_require__(116);

var _Row3 = _interopRequireDefault(_Row2);

var _Col2 = __webpack_require__(115);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _Row3.default;
exports.Col = _Col3.default;
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _universalTransition = __webpack_require__(128);

var _universalTransition2 = _interopRequireDefault(_universalTransition);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidthPx = 0;
if (_universalEnv.isWeex) {
  var weexEnv = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {};
  fullWidthPx = weexEnv.deviceWidth;
} else {
  fullWidthPx = document.body.clientWidth;
}

var Animated = {

  transition: function transition(Node, style, callback) {
    (0, _universalTransition2.default)(Node, style, {
      timingFunction: 'ease',
      delay: 0,
      duration: 300
    }, function () {
      callback && callback();
    });
  },

  height: function height(Node, _height, callback) {
    var heightStr = _height * fullWidthPx / 750 + 'px';
    if (_universalEnv.isWeex) {
      heightStr = _height;
    }
    Animated.transition(Node, {
      height: heightStr
    }, callback);
  },

  rotate: function rotate(Node, _rotate, callback) {
    Animated.transition(Node, {
      transform: 'rotate(' + _rotate + 'deg)'
    }, callback);
  },

  scrollTo: function scrollTo(Node, options, callback) {
    var width = parseInt(options.x);
    var translateStr = 'translate(' + width * fullWidthPx / 750 + 'px, 0)';
    if (_universalEnv.isWeex) {
      translateStr = 'translate(' + width + 'px, 0)';
    }
    setTimeout(function () {
      Animated.transition(Node, {
        transform: translateStr
      }, callback);
    }, 0);
  }

};

exports.default = Animated;
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _Container = __webpack_require__(120);

var _Container2 = _interopRequireDefault(_Container);

var _DropDown = __webpack_require__(121);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _ItemList = __webpack_require__(124);

var _ItemList2 = _interopRequireDefault(_ItemList);

var _tools = __webpack_require__(125);

var _tools2 = _interopRequireDefault(_tools);

var _Emitter = __webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THCONTAINER_REF = 'tabheaderContainer';

var TabHeader = function (_Component) {
  _inherits(TabHeader, _Component);

  function TabHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index) {
      _this.refs[THCONTAINER_REF].select(index);
    }, _this.selectInternal = function (index) {
      _this.refs[THCONTAINER_REF].selectInternal(index);
    }, _this.scrollTo = function (options) {
      _this.refs[THCONTAINER_REF].scrollTo(options);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabHeader, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        tabheader: this
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _tools2.default.initWebStyle();
    }
  }, {
    key: 'render',
    value: function render() {
      var typeArr = (this.props.type || 'default-noanim-scroll').toLowerCase().split('-');
      var styleType = typeArr[0];
      var animType = typeArr[1];
      var scrollType = typeArr[2];

      var dropDownCols = this.props.dropDownCols;


      return (0, _rax.createElement)(
        _Container2.default,
        {
          ref: THCONTAINER_REF,
          itemWidth: this.props.itemWidth,
          onSelect: this.props.onSelect
        },
        (0, _rax.createElement)(_DropDown2.default, _extends({}, this.props, {
          dropDownCols: dropDownCols,
          styleType: styleType })),
        (0, _rax.createElement)(_ItemList2.default, _extends({}, this.props, {
          styleType: styleType,
          scrollType: scrollType,
          animType: animType }))
      );
    }
  }]);

  return TabHeader;
}(_rax.Component);

TabHeader.childContextTypes = {
  tabheader: _rax.PropTypes.object
};


TabHeader.defaultProps = {};

(0, _Emitter.mixinEmitter)(TabHeader);

exports.default = TabHeader;
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rax = __webpack_require__(0);

var _result = __webpack_require__(113);

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _rax.render)((0, _rax.createElement)(_result2.default, null));

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stream = __webpack_require__(72);

function request(options) {
  var requestOptions = {
    method: options.method,
    url: options.url
  };

  if (options.method === "POST") {
    requestOptions.headers = {
      "Content-Type": "application/json"
    };
    requestOptions.body = options.body;
  }
  return new Promise(function (resolve, reject) {
    stream.fetch(requestOptions, function (ret) {
      if (ret.ok) {
        resolve(JSON.parse(ret.data));
      } else {
        reject(ret);
      }
    });
  });
}

exports.default = request;
module.exports = exports["default"];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTabheader = __webpack_require__(109);

var _raxTabheader2 = _interopRequireDefault(_raxTabheader);

var _index = __webpack_require__(127);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabContent = function (_Component) {
  _inherits(TabContent, _Component);

  function TabContent() {
    _classCallCheck(this, TabContent);

    return _possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  _createClass(TabContent, [{
    key: "render",

    //   state = {
    //     selectedTab: 0
    //   };

    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: _index2.default.container },
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_index2.default.row, _index2.default.block] },
          (0, _rax.createElement)(
            _raxView2.default,
            {
              style: [_index2.default.col, _index2.default.item, _index2.default.item_big, _index2.default.item_left]
            },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: [_index2.default.item_big_text, _index2.default.item_big_text_top] },
              "\u5269\u4F59\u7535\u91CF"
            ),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: [_index2.default.item_big_text, _index2.default.item_big_text_bottom] },
              this.props.degree.remain + '度'
            )
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            { style: [_index2.default.col, _index2.default.item] },
            (0, _rax.createElement)(
              _raxView2.default,
              { style: [_index2.default.row, _index2.default.item, _index2.default.item_small, _index2.default.item_small_top] },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_top] },
                "\u4E0A\u6708\u7528\u7535"
              ),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_bottom] },
                this.props.degree.before + '度'
              )
            ),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: [_index2.default.row, _index2.default.item, _index2.default.item_small, _index2.default.item_small_bottom] },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_top] },
                "\u5F53\u6708\u5DF2\u7528"
              ),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_bottom] },
                this.props.degree.current + '度'
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_index2.default.row, _index2.default.block] },
          (0, _rax.createElement)(
            _raxView2.default,
            {
              style: [_index2.default.col, _index2.default.item, _index2.default.item_big, _index2.default.item_left]
            },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: [_index2.default.item_big_text, _index2.default.item_big_text_top] },
              "\u5269\u4F59\u91D1\u989D"
            ),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: [_index2.default.item_big_text, _index2.default.item_big_text_bottom] },
              this.props.ele.remain + '度'
            )
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            { style: [_index2.default.col, _index2.default.item] },
            (0, _rax.createElement)(
              _raxView2.default,
              { style: [_index2.default.row, _index2.default.item, _index2.default.item_small, _index2.default.item_small_top] },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_top] },
                "\u4E0A\u6708\u91D1\u989D"
              ),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_bottom] },
                " ",
                this.props.ele.before + '度'
              )
            ),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: [_index2.default.row, _index2.default.item, _index2.default.item_small, _index2.default.item_small_bottom] },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_top] },
                "\u5F53\u6708\u91D1\u989D"
              ),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_index2.default.item_small_text, _index2.default.item_small_text_bottom] },
                " ",
                this.props.ele.current + '度'
              )
            )
          )
        )
      );
    }
  }]);

  return TabContent;
}(_rax.Component);

exports.default = TabContent;
module.exports = exports["default"];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTabheader = __webpack_require__(109);

var _raxTabheader2 = _interopRequireDefault(_raxTabheader);

var _Result = __webpack_require__(126);

var _Result2 = _interopRequireDefault(_Result);

var _raxImage = __webpack_require__(22);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _tabContent = __webpack_require__(112);

var _tabContent2 = _interopRequireDefault(_tabContent);

var _ele = __webpack_require__(114);

var _ele2 = _interopRequireDefault(_ele);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lightImage = {
  uri: "data:image/png;base64,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"
};

var airImage = {
  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAAD6CAYAAAD9Xg4DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE09JREFUeNrs3etRW0kaBuCDa/+vMlhNBMZV/LeIYCACSxEYIsBEAI5AcgTGESD/p2o0EawmAzYC72k4EgiDOKg/cVE/T5WKGQ8cez735e0+t6oCAAAAAADYWFv3/eLFxa9O/aVffz7Wn07zy9P683NnZ2ukbABQhjoTdG9lgplJ/flWZ4LJo8GiPsBB/eXoVqC4KwWMQX2wsXIDwMYGipQDTppQ8ZCUBfbrTHB5b7CoDzJ85AC3DexeAMDGhorz+rPd4tun9We3zgTpa/Xu1kH2nhAqkpNmewQA2CzDlqEiSVng++xf3t05yFPMtkgAgA1xcfGrV3/Ze+KPbdc/158Hi2a3orPC77/XbJcAAJvhU87PzXYstjP+ANv+DgBgY6w6r/duB4v36ggAVJkbBrNg4XQGAJDtnRIAAIIFACBYAACCBQCAYAEACBYAgGABAAgWAACCBQAgWAAAggUAwDL/UoLlLi5+davr99J7nwoAq7isP+Odna2JYCFQDKvmNbAAkDmvjOsvx3XAGG/y/6dTIff/5adXxv4lVAAQKM0p5/Uc0xcsygoV6ZTHeeXUBwDrMaznmo1duAoWvzsRKgBYd7gQLArQ7Fb0VQKANevWc86eYLH5tpUAAHOOYBGlpwQAPJP3ggUAgGDR2lgJAHgmfwsWm2+iBAA8kzPBYsPt7Gylx66OVAKAdS9kN/UR34LF7w7rz1QZAFijwab+jwkWdzS7FvvCBQBrkOaYwSa/kEywuD9cpL/wD5XTIgDEGae5pZ5jNnpu8XbTh8PFVaq8uPiVTo30Kg/PAmA1abGarqmYlvA/K1i0Cxhn1YZevQsAkZwKAQAECwBAsAAABAsAAMECABAsAADBAgAQLAAABAsAQLAAAAQLAADBAgAQLAAAwQIAECwAAAQLAECwAAAECwAAwQIAECwAAMECABAsAAAECwBAsAAABAsAAMECABAsAADBAgAQLAAABAsAQLAAAAQLAADBAgAQLAAAwQIAECwAAAQLAECwAAAECwAAwQIAECwAAMECABAsAAAECwBAsAAABAsAAMECABAsAADBAgAQLAAABAsAQLAAAAQLAECwUAIAQLAAAAQLAECwAAAQLAAAwQIAECwAAMECAECwAAAECwBAsAAAECwAAMECABAsAADBAgBAsAAABAsAQLAAABAsAADBAgB4c8HiMuMYXWUEAG4Hi78FCwAgKljkeK+MAPD2XVz86kUFi5xTIXv1H6TjrwMA3rxPGT87uR0sJpl/kAN/FwDwdl1c/OrWX/YyDnEZGSw+13+gbX8tAPBmndSfnDMQP+fBYmdn6zIzXKQ/yNApEQB4e+r5e1jl7VYk43mwuP0LGdKOxX8jLvwAAJ4lUHSaUNHPPNTlzs7Wb8HiW8CfMe1YnKc/pIABAK82UHTrz5e0IRAQKpKz2T9s3fmN/qqudx6i5J5iAQBidav4Z1DtznYs7gaLlFqGag4AtDSpQ8WH2b8sPCCr/g+j+stUjQCAlo5v/8t9T948VCMAoIXxzs7W2dJg0XzDmVoBAI8Y3P2Fd0u+8VK9AIAHHO7sbE1bBYvmgVn7agYA3GNUZ4XT+/7Dg283bW4bGagdAHBLeozEg9djbj32025BBQBuhYrd5szGvd49doTmFlTXXABA2c4eCxXJVtujNW8v/V7FP60LAHjdjutA8aXNN75re8T6gGn7Iz1Z61R9AaAIV3N/21CRbK3yuzS7F+m97T01B4CNM62udylGT/3BrZzftQkYn6vrd7h3/D0AwJuWdii+rhIoQoLFnZCRwsXH6noXY9vfDQC8etMmTPysP2f3PfDqxYLFPUGjW7nQEwBepdlrzgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADbVlhK8vIuLX536y179+bP+dG79px/1Z7Szs3WpSk+qZ/dWPWcum3qeqeeTatmvv3ysP91bv/yzaZdTFWpdx+36y6f6s33rl1P9vtV1HKvQk+s569+32+WkqedEhQQLHaSqhncCRXVnQjyuO8uparWq55f6y9GSb0n1HNT1PFOtpXXsNe2yu+TbUrv8olqPLhqGTdB9yLhpk4Jau4B2Un96S77trKmnBYRgUexqcNjy29MKcaBqS+uZatlv+e1p4Bmp2oNh97t2GRIqzu/sUiwLvLtW24+GivMli7Dqzu7FrnDxMt4pwYuvCNvqNxMn99fz4AmhIhk2wY7FOna1yzDfW4aKqpksh00Y4f6Q9r1lqKiaup+rp2BRmqMVfsYgHlvPYbMKYrGOnRXa5YnS/bZw6D3xx7afGOpKkhYBXfUULHh40NleYdARLh6u594Kk+HMebNK52YAX8WBHaAFn1b8uT0hTT0FC1aRu0oWLuLqOdtiFdCuV9k5TuwAzeXUUkiL7eMHzeIDwWKjRayQ+wafuEGruZuEPLM7IMjv40JaLNevCBYb7zKwsxh8YhyppZD2ivr41U6ayTA09NqZFCw2WuQtZQafwKCmXQppr6iWXW0ytI/3nBIRLDZW86S9qMkwDT5HhZc06mFX281tq6W2y9Qmx0GHK/2CuR9Bx9kruU2uoY+fWIgJFpvsa+CxDgIuvHvLE+K0/jIKXG2XPPAcBx2n9NXhKHDxcOTOpbB2meooqAkWGzsZfglcHSalb5keVjHbz52SB55mNy0qpJ0UXMcUKvaDDlf8RbHN4iHqCa+f7VoIFpssDTxRW3zdku8SaQby3er6xU4GnrxaDoLCReltchw4GfZKPyXSPIL/0OJBsOCRybD+7AeuEI9Kr2cT1iKuyC99EE8T4jgipJkMnaYLrOdpUD3tWggWVohWiK1rOQlaJX7SMkNC2nbJ1/8Eh7RO5ULtWT0nAbV0h4hgYfBpu6pRy6tXoue+Zr5b+q1pgdcJCGnXdZwGHOfAhZxhofezMgoWBp/2E2JPKa+uIs8deIqfEIMu5uzbwg+9mPOzdnl1MWfunXXbnrciWJQy+NjGj6tl7oVee87DXjkMCGl72uTVabqIiw/72uX8zrrchZjdNMGimBVi7ja+c4fV/MK5qVqGhLTc1eGfWuT84sNx5mFcH3DjWP8WLGjfWXJWiB1bfGEDjwnx2mlmmzSA3xhUrg94LYuHrrFSsLBCNJCvMvDkDOI9VZy3yaxnrnhPw7yW04DAu+10SNjiQR8XLKwQW/qohHOjjJ+1+3MjN+xqkzfh4rRymi7KmXYpWPA8K0ST4Y1vVjQhbXKSORlqk7ErbRPizVg50r8FC9rJeUNix1Zp2IT4XhVDVocG8MV2ORLUwvzMHCvVUrAoZuDJ3eLTWWImRHWMCbuVAfw3X7XLF+/fSVcJBYuSjJXgxVc0BvCbsJvbHu2iBU6InsI5b5fpdMhEHxcsaCfnAk6DTlBAM4CH1bKnfAsT4rTKvF1SFUPa5X+UT7Aoyd8GnbAVjZAWY6IEoaZKEOIf/VuwABPi2/Q/K0P0bwSLtyvnlrJL5eOVDeBWhiBY8MJyLnaT4FkHgTVWTwkQLHgWzXMoXK3Ma9NVgrA+nvv0TIsHBAuexKATy62OLx8spsq3IOsld81FyejfggWtfcr42UuDzsLK0O5PnJwnkf6jfPM2mQJaP+MQY1Vc4BHnggWPDDq9Ku/cq0Fnkd2fuMkwp5bC7o0TbfLV9HG1DPQvJdjYQeenEs4nw05mPe3+mAyj22Q/IOz+UMmF/t3NOIydNMFi4zvKsMrfth+r5HzQOa/cXRPVLu38xISKYeZhLgMer75J/XtbuxQsWD549zMPM23e6GnQiRl0fqhj9b3Kvy1yUvrOT13LL/WXo4BDnenfYf1bSBMshIoWvqnl1Vs002TYDTjcWB3VMWASjNjxmfmqf2uXggXPOeiMCq/nXlPPiNvPit39CVxdFz0ZNhdif6/iboccl7wj2YSK88B6ulZFsNjIUBGxnTcPFc0bE0utZ/RkeFxgDbtNMOsFHnZcYrusa5kuKjwIPuxxwf07OqSl0yBFL8QEC8nboLM8oEXu+lwNOlVh57LXMHAX2S7XsGC4HdDGhfbxfpV/0etdRZ9SWhfPsXjZATw6VIwKXRXOAtpe8KGPS7rYsBm4o9tkcZNh0x7/W63ngWwDoSJMGitPzUbx7FhsTidJE+BhwaEiejJMdzCcFlTHqAuH73OoPYYF3RIXDusYL6/apefTrIcdi83pJIPSOklzkeY6BvHLklaG6w4VpVxouOZQkYLuF+NlmLS7W/wtu+tix2Jzknep1wKYDPPqeLDGUDEqZddnzaFiWn92jZeh7bLIU0rPZUsJdBKD+IJBKVeJ37rOp9Ius+qY2uFf1XpeJ592z3ZLu7206eN/aZdvk1MhQsVbHMSFipg6rmvHp7R2ORQq1rJwiHYqVDwPp0Kep5MIFXHWcStkUaGicbKmOhbVLpvrfPbWcOhJEypKu25qdtt4R/9+u+xYrLeTdNeUvIsMFc3OT0+oyK5jqmF/TXUsrV2erOGYZyWGikbECxiFihdmx+Ltra5LDRW5rz6/T5FbzVXsk0mTaf3ZL3DLPoWzbvBhD0u6zflOPb9U8Q+4G7j74/nZsVhfJ9lbQ/Iu+RzhUXBIS5PgHwVOhmki7EUG3frzodB3V3wObo8fCg4VneB6zhYNQsULsGPxNgadqip4O6+ZDCPft1DyleFR7bLo1WBz7VTUwiGFiePCH9Z0ELhwKHUnUrCwKnxSJ9kv9f0Ajcit+9LPt/aDVteDwgfuz0F9+7D08//BuxVChWCxsaLOE06rAs9d3xPSIibD4gNac3oud1VY5N0Ka+jjJsDFsBuxW6FtChYb7U+d5FWtsA3i1z5qkyEBrRcwEWqPNz4F9fGB8fJ1cPHmevQM4K9m0BEq4lbZBu6Y/n2sPc5DWrfKv1ZFHxcsiljNCBVxtewaxENq2cms5Zk6zuXs/KR+7VXdcWG3EioEC6uZx+0LFXO5p5Qmpd6+d4/cVeE3JQzp42f6d2gfPxQqBIsS/CdzIpwqYVhIO1TCkFpeeh7AtWbrPscPVQxrl1MLB8GiFDkDj0EnbpU9LvwW3bv+nVNL5Qvp35WAthDScnfRjlVRsDDwGMCfMuj0Mg/xVRXDQtrfyjfX0b9fR0irrt+pgmChszxiqnwhbN3HMiHGBDTXVsTVcuJaFcGCFlxfsaCXM+goH6+QnR9hV7CAN+qnEsCrl3Oh+/+UT7AAgNu6GT9rV1KwoI3mIUaAFTrLub5CsNDgW9pWvhAflSCUdnlj+kIrdLVc1FM+waIkOVt0BvAbY3V8NYP4e+ULqaN2uegfJRAsaCdnx8JKO6aOneYV4cQM4ibEuHapljGMlYJFUXJuKesp37WA5///qYoLsnbSAh5lrV3q45FtUh0FC53FSvvZa9k3GYbV8qqeShhSy0/KN5d1AWbdv7VJwaIY48yf/6yEYbU8UcL5SnuaOZCbEGPa5XbA4+o3pU3m9m9tUrAoprOkwXuacYielfZc7oOu9gziYRNi1woxrF2aEGPaZE//FixKkvueiqESzt8EmXu/+tDzQeZy3557pITZk2HSNyGGhTRtUrAoxrfMn5fE40JaV1CLq2XdLg8E3qtdydxamhBj2mRPmxQsShl40sVdUyvtEMcBx9gz+MRNiE7VXcnd/TEhxo2VR27jFSxKkbtrkQbv4i8+bC46HAcc6sQuUMiEmMLud2WsIk7TmRBjxsrUJs/VUrAowSjgGH0XzF05DjrO99IHnzqojQImxHRnw7DwOkbs/qQJ0c5kzFgpXAgWxay0IzrMsPRnWzS3pY0NPmG+Cr2vJvCmtnhurAwNF54FJFgYeFqGi9Inw0HQcYSLqjqtYt4OOSw5XAROiMXvAAWOlVen6up6eoaNYGHgaTkZdguvZfTg0ym0lilUfA063LDwa1ei2mS/5MkwcKycOXBxrGBh4Gk3GZa+qkkr7WnQsVJIO1DLmHBhQgybDEsOaYdVzE7azJHrVwQLK+3H9QrftUiDzn7gIT8XXsvDqJBW+HntyAnxU+Ft8jjwkClU9M1CgoXV4eNKv5BzEjj4dEpeITZPNh0HHe5jwXWMnBBL799prDwLPKS3HAsWVtotU3jp9fwSOPh0Cy/nIGi1XfptvFEToq376zY51b8FC553pc314DNRhux2Oa3i7rjRJmOvESh9IaaWggUtV9rjzMPobLGDz1Qtr06JnGYeZqKOITuT+vfNQiwi8E5VU7AowX7mIHymhAur7d2MwfiyefiWWu5sHWaG3p+qOH+Y20D/Dgu8ueHih0oKFqWsalbdMh03kymLK5tVV4kjFQwJvdNmEqCaPzZ91bb1TQV/q+Wq42XEY9cRLN7UZPjUlXbk7YFWiddbpK55+T307q4QLrTL32s5WCFcjOygPRguVtmZPLYQEyyEi+WhYrf5GZavbNqGtP1mIiUvXAzsVoSEi1Hz/Tw8Xn54QrscNXfqIFgU21mWDT5joeJJ4eJDtfxagfQ9f6hnq3Bx2qJdjlTs0XCx7PbJy2ZlLVQ8Xst0yi317+MlC7Jps2hQzxe0pQSvQ/NEzV51c9916iCuqVi9nttNPTvqmVXHTlPH7VsT4VgwW6mWvaaW83Dm1EdWPfeqxeenqCcAwKb5vwADAGRWx9ic2HNBAAAAAElFTkSuQmCC"
};

var Result = function (_Component) {
  _inherits(Result, _Component);

  function Result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedTab: 0,
      air: {
        degree: {
          remain: 0,
          before: 0,
          current: 0
        },
        ele: {
          remain: 0,
          before: 0,
          current: 0
        }
      },
      light: {
        degree: {
          remain: 0,
          before: 0,
          current: 0
        },
        ele: {
          remain: 0,
          before: 0,
          current: 0
        }
      }
    }, _this.renderItem = function (item, index) {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: _Result2.default.select_item_view },
        (0, _rax.createElement)(
          _raxText2.default,
          {
            style: [_Result2.default.select_item_text, index === _this.state.selectedTab ? _Result2.default.select_item_selected_text : _Result2.default.select_item_normal_text]
          },
          item
        )
      );
    }, _this.onSelect = function (index) {
      // do something
      _this.setState({ selectedTab: index });
    }, _this.itemWidth = function (item, index) {
      return 650 / 2;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Result, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // alert(window.location.href)
      Promise.all([_ele2.default.getAir({
        dor: "东1-101"
      }), _ele2.default.getLight({
        dor: "东1-101"
      })]).then(function (resArr) {
        _this2.setState({
          light: {
            degree: resArr[1].degree,
            ele: resArr[1].ele
          },
          air: {
            degree: resArr[0].degree,
            ele: resArr[0].ele
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: _Result2.default.app },
        (0, _rax.createElement)(_raxTabheader2.default, {
          style: _Result2.default.container,
          containerStyle: _Result2.default.container,
          dataSource: ["照明", "空调"],
          renderItem: this.renderItem,
          onSelect: this.onSelect,
          selected: this.state.selectedTab,
          itemWidth: this.itemWidth,
          itemStyle: _Result2.default.select_item,
          itemSelectedStyle: _Result2.default.select_item_selected
        }),
        (0, _rax.createElement)(
          _raxView2.default,
          null,
          (0, _rax.createElement)(_raxImage2.default, {
            style: _Result2.default.image,
            source: this.state.selectedTab === 0 ? lightImage : airImage
          })
        ),
        (0, _rax.createElement)(_tabContent2.default, {
          degree: this.state.selectedTab === 0 ? this.state.light.degree : this.state.air.degree,
          ele: this.state.selectedTab === 0 ? this.state.light.ele : this.state.air.ele
        })
      );
    }
  }]);

  return Result;
}(_rax.Component);

exports.default = Result;
module.exports = exports["default"];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(111);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EleService = {
  getAir: function getAir(options) {
    return (0, _request2.default)({
      method: "POST",
      url: "https://ccnubox.muxixyz.com/api/ele/",
      body: {
        dor: options.dor,
        type: "air"
      }
    });
  },
  getLight: function getLight(options) {
    return (0, _request2.default)({
      method: "POST",
      url: "https://ccnubox.muxixyz.com/api/ele/",
      body: {
        dor: options.dor,
        type: "light"
      }
    });
  }
};

exports.default = EleService;
module.exports = exports["default"];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;


      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, {
        style: _extends({
          flex: 1
        }, style, {
          width: '1%'
        })
      }));
    }
  }]);

  return Col;
}(_rax.Component);

exports.default = Col;
module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var moreStyle = {};
      var gridType = this.props.gridType;

      if (gridType == 'flex-start') {
        styles.initial.display = 'block';
      } else {
        moreStyle.justifyContent = gridType;
      }

      var style = _extends({}, styles.initial, this.props.style, moreStyle);

      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, { style: style }));
    }
  }]);

  return Row;
}(_rax.Component);

var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = Row;
module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createIconSet = createIconSet;

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(22);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var style = this.props.style || {};

      // for images
      if (this.props.source.uri && !this.props.source.codePoint) {
        return (0, _rax.createElement)(_raxImage2.default, {
          source: { uri: this.props.source.uri },
          style: style
        });
      }

      // for iconfont
      var uri = this.props.source.uri;
      var fontFamily = this.props.fontFamily;
      var iconStyle = _extends({}, style, {
        fontFamily: fontFamily
      });

      if (_universalEnv.isWeb) {
        var FontFace = window.FontFace;
        var iconfont = new FontFace(fontFamily, 'url(' + uri + ')');
        document.fonts.add(iconfont);
      }

      if (_universalEnv.isWeex) {
        var domModule = __weex_require__('@weex-module/dom');
        domModule.addRule('fontFace', {
          'fontFamily': fontFamily,
          'src': "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
        });
      }
      return (0, _rax.createElement)(
        _raxText2.default,
        { style: iconStyle },
        this.props.source.codePoint
      );
    }
  }]);

  return Icon;
}(_rax.Component);

Icon.propTypes = {
  fontFamily: _rax.PropTypes.string,
  source: _rax.PropTypes.object
};
exports.default = Icon;
function createIconSet(glyphMap, fontFamily, uri) {
  var IconFont = function (_Component2) {
    _inherits(IconFont, _Component2);

    function IconFont() {
      _classCallCheck(this, IconFont);

      return _possibleConstructorReturn(this, (IconFont.__proto__ || Object.getPrototypeOf(IconFont)).apply(this, arguments));
    }

    _createClass(IconFont, [{
      key: 'render',
      value: function render() {
        var codePoint = '';
        if (this.props.codePoint) {
          codePoint = this.props.codePoint;
        } else if (this.props.name) {
          codePoint = glyphMap[this.props.name];
        }
        return (0, _rax.createElement)(Icon, {
          style: this.props.style,
          fontFamily: fontFamily,
          source: {
            uri: uri,
            codePoint: codePoint
          } });
      }
    }]);

    return IconFont;
  }(_rax.Component);

  return IconFont;
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxGrid = __webpack_require__(107);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        this.getContent()
      );
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var props = this.props,
          list = props.dataSource,
          count = props.cells,
          renderCell = props.renderCell;

      var grids = [];

      var gridDataArr = [];
      for (var i = 0; i < list.length; i++) {
        var index = Math.floor(i / count);
        if (i % count == 0) {
          gridDataArr[index] = [];
        }
        gridDataArr[index].push((0, _rax.createElement)(
          _raxGrid.Col,
          { style: props.colStyle },
          renderCell(list[i], i)
        ));
        if (i % count == 0 && i != 0) {
          grids.push((0, _rax.createElement)(
            _raxGrid.Row,
            { style: props.rowStyle },
            gridDataArr[index - 1]
          ));
        }
        if (i == list.length - 1) {
          grids.push((0, _rax.createElement)(
            _raxGrid.Row,
            { style: props.rowStyle },
            gridDataArr[index]
          ));
        }
      };

      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        grids
      );
    }
  }]);

  return List;
}(_rax.Component);

List.defaultProps = {
  colStyle: {},
  rowStyle: {},
  cells: 1,
  dataSource: [],
  renderCell: function renderCell() {}
};

exports.default = List;
module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _animation = __webpack_require__(108);

var _animation2 = _interopRequireDefault(_animation);

var _style = __webpack_require__(74);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';

var AnimBuoy = function (_Component) {
  _inherits(AnimBuoy, _Component);

  function AnimBuoy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnimBuoy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimBuoy.__proto__ || Object.getPrototypeOf(AnimBuoy)).call.apply(_ref, [this].concat(args))), _this), _this.scrollTo = function (options) {
      if (_this.props.animType != 'noanim') {
        var animbuoy = (0, _rax.findDOMNode)(_this.refs.animbuoy);
        _animation2.default.scrollTo(animbuoy, options);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnimBuoy, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SCTOLLTO, function (options) {
          _this2.scrollTo(options);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var left = this.props.itemWidth;
      if (typeof left == 'string') {
        left = parseInt(left.split('rem')[0]) * this.props.selected;
      } else {
        left = this.props.itemWidth * this.props.selected;
      }
      this.scrollTo({ x: left });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          itemWidth = _props.itemWidth,
          animType = _props.animType;


      var backgroundColor = '#fc511f';
      if (this.props.style) {
        backgroundColor = this.props.style.backgroundColor || this.props.style.borderColor || this.props.style.borderBottomColor || backgroundColor;
      }
      var top = 76;
      if (this.props.styleType == 'icon') {
        top = 107;
      }

      var thisStyle = _extends({}, this.props.style, {
        position: 'absolute',
        left: 0,
        top: top,
        height: 4,
        width: itemWidth,
        backgroundColor: backgroundColor
      });

      if (animType == 'bg') {
        thisStyle = _extends({}, thisStyle, {
          top: 0,
          height: 110
        });
      }

      if (animType == 'noanim') {
        return null;
      } else {
        return (0, _rax.createElement)(
          _raxView2.default,
          { style: _style2.default.borderBottom },
          (0, _rax.createElement)(_raxView2.default, { ref: 'animbuoy', style: thisStyle })
        );
      }
    }
  }]);

  return AnimBuoy;
}(_rax.Component);

AnimBuoy.contextTypes = {
  tabheader: _rax.PropTypes.object
};


AnimBuoy.defaultProps = {
  itemWidth: 166
};

exports.default = AnimBuoy;
module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';
var TABEHEADER_GOTOP = 'tabheaderGoTop';
var CONTAINER_REF = 'container';

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index, isPress) {
      if (_this.selected != index) {
        _this.props.onSelect && _this.props.onSelect(index);
      }
      _this.selectInternal(index);
    }, _this.selectInternal = function (index) {
      var tabheader = _this.context.tabheader;
      if (_this.animType != 'noanim') {
        _this.scrollTo({
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    }, _this.scrollTo = function (options) {
      var tabheader = _this.context.tabheader;

      if (tabheader) {
        tabheader.emit(TABEHEADER_SCTOLLTO, options);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_GOTOP, function () {
          var dom = __weex_require__('@weex-module/dom');
          dom.scrollToElement((0, _rax.findDOMNode)(_this2.refs[CONTAINER_REF]), { offset: 0 });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(_raxView2.default, _extends({ ref: CONTAINER_REF }, this.props));
    }
  }]);

  return Container;
}(_rax.Component);

Container.contextTypes = {
  tabheader: _rax.PropTypes.object
};
exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(22);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxTouchable = __webpack_require__(18);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _universalEnv = __webpack_require__(1);

var _raxMultirow = __webpack_require__(118);

var _raxMultirow2 = _interopRequireDefault(_raxMultirow);

var _animation = __webpack_require__(108);

var _animation2 = _interopRequireDefault(_animation);

var _style = __webpack_require__(74);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';
var TABEHEADER_GOTOP = 'tabheaderGoTop';
var DROPDOWN_ROW_HEIGHT = 80;
var WINDOWWIDTH = 750;

var DropDown = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

    _this.changeGrid = function () {
      if (!_this.gridOpen) {
        if (_universalEnv.isWeex) {
          _this.openPop();
        } else {
          _this.openDrop();
        }
      } else {
        if (_universalEnv.isWeex) {
          _this.closePop();
        } else {
          _this.closeDrop();
        }
      }
      _this.gridOpen = !_this.gridOpen;
    };

    _this.openPop = function () {
      var tabheader = _this.context.tabheader;
      if (tabheader) {
        tabheader.emit(TABEHEADER_GOTOP);
      }

      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 180);
      var dropDownHeight = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, dropDownHeight);

      _this.state.weexGridTop = 0;
      _this.state.weexGridLeft = 0;
      _this.state.weexGridPosition = 'fixed';
      _this.state.weexGridHeight = 2000;
      _this.setState(_this.state);
    };

    _this.closePop = function () {
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 360);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, 0);

      if (!_this.closePopIndex) {
        _this.closePopIndex = 1;
      }
      _this.closePopIndex++;

      _this.state.weexGridTop = -1000 - _this.closePopIndex; // fix for android
      _this.state.weexGridLeft = -1000 - _this.closePopIndex;
      _this.state.weexGridPosition = 'relative';
      _this.state.weexGridHeight = 0;
      _this.setState(_this.state);
    };

    _this.openDrop = function () {
      var dropDownHeight = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 180);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, dropDownHeight);
    };

    _this.closeDrop = function () {
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 360);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, 0);
    };

    _this.gridItemSelect = function (index) {
      _this.changeGrid();

      var tabheader = _this.context.tabheader;

      if (_this.animType != 'noanim') {
        tabheader.emit(TABEHEADER_SCTOLLTO, {
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (_this.selected != index) {
        _this.props.onSelect && _this.props.onSelect(index);
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    };

    _this.renderGridItemFun = function (item, index) {
      if (item == '') {
        return (0, _rax.createElement)(_raxView2.default, { style: _style2.default.dropBoxTtem });
      } else if (_this.state.selected == index) {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            onPress: function onPress() {
              _this.gridItemSelect(index);
            },
            style: _style2.default.dropBoxTtem },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _style2.default.dropBoxSelectText },
            item
          )
        );
      } else {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            onPress: function onPress() {
              _this.gridItemSelect(index);
            },
            style: _style2.default.dropBoxTtem },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _style2.default.dropBoxText },
            item
          )
        );
      }
    };

    _this.renderGridFun = function (dropData) {
      var weexGridStyle = {};
      var weexGridMaskerStyle = {};

      if (_universalEnv.isWeex) {
        weexGridStyle.top = _this.state.weexGridTop + 80;
        weexGridStyle.left = _this.state.weexGridLeft;
        weexGridStyle.position = _this.state.weexGridPosition;
        weexGridStyle.height = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
        weexGridMaskerStyle.top = _this.state.weexGridTop;
        weexGridMaskerStyle.left = _this.state.weexGridLeft;
        weexGridMaskerStyle.position = _this.state.weexGridPosition;
        weexGridMaskerStyle.height = _this.state.weexGridHeight;
      }

      return (0, _rax.createElement)(
        _raxView2.default,
        { id: 'grid', ref: 'grid', style: _style2.default.drop },
        (0, _rax.createElement)(
          _raxTouchable2.default,
          { style: _style2.default.dropBtn, onPress: _this.changeGrid },
          (0, _rax.createElement)(_raxImage2.default, {
            ref: 'icon',
            source: { uri: '//gw.alicdn.com/tps/TB1H03wKVXXXXX_aXXXXXXXXXXX-40-40.png' },
            style: {
              width: '40rem',
              height: '40rem',
              position: 'absolute',
              top: '20rem',
              left: '15rem'
            }
          })
        ),
        (0, _rax.createElement)(_raxTouchable2.default, {
          style: _extends({
            backgroundColor: '#000000',
            opacity: 0.1,
            width: 750,
            zIndex: 100
          }, weexGridMaskerStyle),
          onPress: _this.changeGrid }),
        (0, _rax.createElement)(
          _raxView2.default,
          {
            ref: 'dropMultiRow',
            style: _extends({
              backgroundColor: '#ffffff',
              position: 'absolute',
              top: 81,
              right: 0,
              width: 750,
              height: 0,
              paddingRight: 100,
              overflow: 'hidden',
              zIndex: 100
            }, weexGridStyle) },
          (0, _rax.createElement)(_raxMultirow2.default, { dataSource: dropData, cells: _this.props.dropDownCols, renderCell: _this.renderGridItemFun })
        )
      );
    };

    var itemNum = _this.props.dataSource ? _this.props.dataSource.length : 0;
    var cols = _this.props.dropDownCols;
    _this.dropDownHeight = Math.ceil(itemNum / cols) * DROPDOWN_ROW_HEIGHT;
    _this.state = {
      weexGridTop: -1000,
      weexGridLeft: -1000,
      weexGridPosition: 'fixed',
      weexGridHeight: 0,
      selected: props.selected
    };
    return _this;
  }

  _createClass(DropDown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SELECT, function (index) {
          _this2.setState({
            selected: index
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          styleType = _props.styleType,
          dropDownCols = _props.dropDownCols,
          dataSource = _props.dataSource;


      var dropData = [];
      var placeholderNum = dataSource.length % dropDownCols;
      if (placeholderNum) {
        placeholderNum = dropDownCols - placeholderNum;
      }
      for (var i = 0; i < dataSource.length + placeholderNum; i++) {
        if (i < dataSource.length) {
          dropData.push(dataSource[i]);
        } else {
          dropData.push('');
        }
      }

      if (styleType == 'dropdown') {
        return this.renderGridFun(dropData);
      } else {
        return null;
      }
    }
  }]);

  return DropDown;
}(_rax.Component);

DropDown.contextTypes = {
  tabheader: _rax.PropTypes.object
};


DropDown.defaultProps = {};

exports.default = DropDown;
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixinEmitter = mixinEmitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter() {};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixinEmitter(clazz) {
  for (var key in Emitter.prototype) {
    clazz.prototype[key] = Emitter.prototype[key];
  }
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

exports.default = Emitter;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(18);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _style = __webpack_require__(74);

var _style2 = _interopRequireDefault(_style);

var _raxIcon = __webpack_require__(117);

var _raxIcon2 = _interopRequireDefault(_raxIcon);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index, useAnim) {
      var tabheader = _this.context.tabheader;

      if (_this.animType != 'noanim' && useAnim) {
        tabheader.emit(TABEHEADER_SCTOLLTO, {
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (_this.selected != index) {
        _this.props.onPress && _this.props.onPress(index);
        _this.props.onSelect && _this.props.onSelect(index);
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    }, _this.initStyle = function (styleType, itemStyle, itemSelectedStyle, itemWidth, selected) {
      var thisItemStyle = void 0,
          textStyle = void 0,
          iconStyle = void 0,
          iconTextStyle = void 0;

      thisItemStyle = _extends({}, _style2.default.item, { width: itemWidth });

      iconStyle = _style2.default.icon;
      iconTextStyle = _style2.default.iconText;

      if (selected) {
        thisItemStyle = _extends({}, thisItemStyle, itemStyle, itemSelectedStyle);
        textStyle = _style2.default.selectItemText;
        if (itemSelectedStyle) {
          textStyle = _extends({}, textStyle, itemSelectedStyle);
          iconTextStyle = _extends({}, iconTextStyle, itemSelectedStyle);
        }
      } else {
        thisItemStyle = _extends({}, thisItemStyle, itemStyle);
        textStyle = _extends({}, _style2.default.itemText, itemStyle);
      }

      if (styleType == 'icon') {
        thisItemStyle = _extends({}, _style2.default.iconItem, thisItemStyle);
        if (!_universalEnv.isWeex) {
          if (iconTextStyle.height) {
            iconTextStyle.height = 12;
          }
        }
      }

      return {
        container: thisItemStyle,
        text: textStyle,
        icon: iconStyle,
        iconText: iconTextStyle
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          index = _props.index,
          selected = _props.selected,
          data = _props.data,
          styleType = _props.styleType,
          itemWidth = _props.itemWidth,
          renderItem = _props.renderItem,
          renderSelect = _props.renderSelect,
          itemStyle = _props.itemStyle,
          itemSelectedStyle = _props.itemSelectedStyle;


      if (typeof this.props.itemWidth == 'function') {
        itemWidth = this.props.itemWidth(data, index);
      }

      renderSelect = renderSelect ? renderSelect : renderItem;
      var isSelected = index === selected;
      var thisStyles = this.initStyle(styleType, itemStyle, itemSelectedStyle, itemWidth, isSelected);

      if (styleType == 'icon') {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            onPress: function onPress() {
              _this2.select(index, true);
            },
            style: thisStyles.container },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: _style2.default.iconBox },
            (0, _rax.createElement)(_raxIcon2.default, { style: _style2.default.icon, source: { uri: data.icon } })
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            null,
            (0, _rax.createElement)(
              _raxText2.default,
              { style: thisStyles.iconText },
              data.text
            )
          )
        );
      } else if (styleType == 'normal' || styleType == 'dropdown') {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            onPress: function onPress() {
              _this2.select(index, true);
            },
            style: thisStyles.container },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: thisStyles.text },
            data
          )
        );
      } else {
        if (isSelected) {
          return (0, _rax.createElement)(
            _raxTouchable2.default,
            {
              onPress: function onPress() {
                _this2.select(index);
              },
              style: thisStyles.container },
            renderSelect(data, index)
          );
        } else {
          return (0, _rax.createElement)(
            _raxTouchable2.default,
            {
              onPress: function onPress() {
                _this2.select(index);
              }, style: thisStyles.container },
            renderItem(data, index)
          );
        }
      }
    }
  }]);

  return Item;
}(_rax.Component);

Item.contextTypes = {
  tabheader: _rax.PropTypes.object
};


Item.defaultProps = {
  selected: 0,
  itemWidth: 166
};

exports.default = Item;
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxScrollview = __webpack_require__(34);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _Item = __webpack_require__(123);

var _Item2 = _interopRequireDefault(_Item);

var _AnimBuoy = __webpack_require__(119);

var _AnimBuoy2 = _interopRequireDefault(_AnimBuoy);

var _raxGrid = __webpack_require__(107);

var _universalEnv = __webpack_require__(1);

var _style = __webpack_require__(74);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SCROLLVIEW_REF = 'scrollview';
var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';

var ItemList = function (_Component) {
  _inherits(ItemList, _Component);

  function ItemList(props) {
    _classCallCheck(this, ItemList);

    var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));

    _this.scrollTo = function (options) {
      var xNum = parseInt(options.x) - 300;
      if (_universalEnv.isWeex && xNum <= 0) {
        xNum = 0;
      }
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].scrollTo({ x: xNum });
      }
    };

    _this.state = {
      selected: props.selected
    };
    return _this;
  }

  _createClass(ItemList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SCTOLLTO, function (options) {
          _this2.scrollTo(options);
        });
        tabheader.on(TABEHEADER_SELECT, function (index) {
          _this2.setState({
            selected: index
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          style = _props.style,
          dataSource = _props.dataSource,
          onSelect = _props.onSelect,
          animType = _props.animType,
          scrollType = _props.scrollType,
          styleType = _props.styleType,
          itemWidth = _props.itemWidth,
          renderItem = _props.renderItem,
          renderSelect = _props.renderSelect,
          itemStyle = _props.itemStyle,
          itemSelectedStyle = _props.itemSelectedStyle,
          containerStyle = _props.containerStyle,
          animBuoyStyle = _props.animBuoyStyle;

      var contentContainerWidth = 0;

      var childrens = [];
      dataSource.map(function (item, index) {
        // fix with bug for ios 78
        if (typeof itemWidth == 'function') {
          contentContainerWidth += parseInt(itemWidth(item, index));
        } else {
          contentContainerWidth += parseInt(itemWidth);
        }
        if (scrollType == 'scroll') {
          childrens.push((0, _rax.createElement)(_Item2.default, {
            index: index,
            selected: _this3.state.selected,
            data: item,
            itemWidth: itemWidth,
            onSelect: onSelect,
            renderItem: renderItem,
            renderSelect: renderSelect,
            itemStyle: itemStyle,
            itemSelectedStyle: itemSelectedStyle,
            styleType: styleType }));
        } else {
          itemWidth = 750 / dataSource.length;
          childrens.push((0, _rax.createElement)(
            _raxGrid.Col,
            null,
            (0, _rax.createElement)(_Item2.default, {
              index: index,
              selected: _this3.state.selected,
              data: item,
              itemWidth: itemWidth,
              onSelect: onSelect,
              renderItem: renderItem,
              renderSelect: renderSelect,
              itemStyle: itemStyle,
              itemSelectedStyle: itemSelectedStyle,
              styleType: styleType })
          ));
        }
      });

      var thisContainerStyle = _extends({}, _style2.default.container, style, containerStyle);

      if (styleType == 'icon') {
        thisContainerStyle = _extends({}, thisContainerStyle, _style2.default.iconContainer);
      }

      if (styleType == 'dropdown') {
        thisContainerStyle.width = 750 - 71;
      }

      if (scrollType == 'scroll') {
        return (0, _rax.createElement)(
          _raxScrollview2.default,
          {
            ref: SCROLLVIEW_REF,
            style: _extends({}, thisContainerStyle, {
              display: 'block'
            }),
            contentContainerStyle: _extends({}, thisContainerStyle, {
              borderWidth: 0,
              margin: 0,
              padding: 0,
              justifyContent: 'center',
              flexDirection: 'row',
              width: contentContainerWidth
            }),
            showsHorizontalScrollIndicator: false,
            horizontal: true },
          (0, _rax.createElement)(_AnimBuoy2.default, _extends({}, this.props, {
            itemWidth: itemWidth,
            style: animBuoyStyle })),
          childrens
        );
      } else {
        return (0, _rax.createElement)(
          _raxGrid.Row,
          { style: thisContainerStyle },
          (0, _rax.createElement)(_AnimBuoy2.default, _extends({}, this.props, {
            itemWidth: itemWidth,
            style: animBuoyStyle })),
          childrens
        );
      }
    }
  }]);

  return ItemList;
}(_rax.Component);

ItemList.contextTypes = {
  tabheader: _rax.PropTypes.object
};


ItemList.defaultProps = {
  dataSource: []
};

exports.default = ItemList;
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

exports.default = {
  initWebStyle: function initWebStyle() {
    if (!_universalEnv.isWeex && typeof document !== 'undefined') {
      if (!document.getElementById('rxtabheaderstyle')) {
        var node = document.createElement('style'),
            str = 'html{-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}';
        node.innerHTML = str;
        node.id = 'rxtabheaderstyle';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports) {

var _styles = {
  "app": {
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgb(239,239,244)",
    "width": 750,
    "flex": 1
  },
  "container": {
    "width": 650,
    "height": 62,
    "borderWidth": "2px",
    "borderStyle": "solid",
    "borderColor": "rgb(103,103,250)",
    "borderRadius": 10
  },
  "select_item": {
    "flex": 1,
    "height": 62,
    "backgroundColor": "rgb(103,103,250)"
  },
  "select_item_selected": {
    "flex": 1,
    "height": 62,
    "backgroundColor": "rgb(247,247,245)"
  },
  "select_item_view": {
    "height": 62
  },
  "select_item_text": {
    "lineHeight": "62rem",
    "textAlign": "center",
    "fontWeight": "lighter",
    "fontSize": "26px"
  },
  "select_item_selected_text": {
    "color": "rgb(103,103,250)"
  },
  "select_item_normal_text": {
    "color": "white"
  },
  "image": {
    "marginTop": 37,
    "width": 316,
    "height": 175
  },
  "overlay": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": 750,
    "height": 3000,
    "backgroundColor": "rgb(103,103,250)"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 127 */
/***/ (function(module, exports) {

var _styles = {
  "container": {
    "width": 650,
    "height": 580
  },
  "block": {
    "width": 650,
    "height": 250,
    "borderRadius": 10,
    "marginBottom": 40,
    "marginTop": 30,
    "flexDirection": "row"
  },
  "item": {
    "flex": 1,
    "height": 250,
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "item_left": {
    "marginRight": 20
  },
  "item_big": {
    "backgroundColor": "white",
    "borderRadius": 10
  },
  "item_small": {
    "backgroundColor": "white",
    "borderRadius": 10
  },
  "item_big_text": {
    "textAlign": "center"
  },
  "item_big_text_top": {
    "fontSize": "30px"
  },
  "item_big_text_bottom": {
    "fontSize": "60px",
    "color": "rgb(254,183,90)",
    "fontWeight": "200"
  },
  "item_small_top": {
    "marginBottom": 10
  },
  "item_small_text": {
    "textAlign": "center"
  },
  "item_small_text_top": {
    "fontSize": "26px"
  },
  "item_small_text_bottom": {
    "fontSize": "40px",
    "color": "rgb(254,183,90)"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _universalEnv = __webpack_require__(1);

var _styleUnit = __webpack_require__(23);

function transition(node, styles, options, callback) {
  if (typeof options == 'function' || options == null) {
    callback = options;
    options = {
      timingFunction: 'ease',
      duration: 0,
      delay: 0
    };
  }

  for (var prop in styles) {
    styles[prop] = (0, _styleUnit.convertUnit)(styles[prop], prop);
  }

  if (_universalEnv.isWeex) {
    var animation = __weex_require__('@weex-module/animation');
    animation.transition(node.ref, {
      styles: styles,
      timingFunction: options.timingFunction || 'linear',
      delay: options.delay || 0,
      duration: options.duration || 0,
      needLayout: options.needLayout || false
    }, callback || function () {});
  } else if (_universalEnv.isWeb) {
    var duration = options.duration || 0; // ms
    var timingFunction = options.timingFunction || 'linear';
    var delay = options.delay || 0; // ms
    var transitionValue = 'all ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms';

    node.style.transition = transitionValue;
    node.style.webkitTransition = transitionValue;

    if (callback) {
      var transitionEndHandler = function transitionEndHandler(e) {
        e.stopPropagation();
        node.removeEventListener('webkitTransitionEnd', transitionEndHandler);
        node.removeEventListener('transitionend', transitionEndHandler);
        node.style.transition = '';
        node.style.webkitTransition = '';
        callback();
      };
      node.addEventListener('webkitTransitionEnd', transitionEndHandler);
      node.addEventListener('transitionend', transitionEndHandler);
    }

    for (var key in styles) {
      // TODO add vendor prefix
      var value = styles[key];
      node.style[key] = value;
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ })
/******/ ])}); require("com.muxistudio.ele.resule");;