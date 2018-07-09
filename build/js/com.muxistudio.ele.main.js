// {"framework" : "Rax"}
define("com.muxistudio.ele.main", function(require) {/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Animated=function(){function Animated(){_classCallCheck(this,Animated);}_createClass(Animated,[{key:'__attach',value:function __attach()
{}},{key:'__detach',value:function __detach()
{}},{key:'__getValue',value:function __getValue()
{}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
{return this.__getValue();}},{key:'__addChild',value:function __addChild(
child){}},{key:'__removeChild',value:function __removeChild(
child){}},{key:'__getChildren',value:function __getChildren()
{return[];}}]);return Animated;}();


module.exports=Animated;

/***/ }),
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);var

AnimatedWithChildren=function(_Animated){_inherits(AnimatedWithChildren,_Animated);


function AnimatedWithChildren(){_classCallCheck(this,AnimatedWithChildren);var _this=_possibleConstructorReturn(this,(AnimatedWithChildren.__proto__||Object.getPrototypeOf(AnimatedWithChildren)).call(this));

_this._children=[];return _this;
}_createClass(AnimatedWithChildren,[{key:'__addChild',value:function __addChild(

child){
if(this._children.length===0){
this.__attach();
}
this._children.push(child);
}},{key:'__removeChild',value:function __removeChild(

child){
var index=this._children.indexOf(child);
if(index===-1){
console.warn('Trying to remove a child that doesn\'t exist');
return;
}
this._children.splice(index,1);
if(this._children.length===0){
this.__detach();
}
}},{key:'__getChildren',value:function __getChildren()

{
return this._children;
}}]);return AnimatedWithChildren;}(Animated);


module.exports=AnimatedWithChildren;

/***/ }),
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(6);
var InteractionManager=__webpack_require__(38);
var AnimatedInterpolation=__webpack_require__(19);
var Interpolation=__webpack_require__(12);
var Animation=__webpack_require__(11);
var guid=__webpack_require__(32);
var Set;
if(typeof global=='object'&&global.Set){
Set=global.Set;
}else if(typeof window=='object'&&window.Set){
Set=window.Set;
}else{
Set=__webpack_require__(85);
}




























function _flush(rootNode){
var animatedStyles=new Set();
function findAnimatedStyles(node){
if(typeof node.update==='function'){
animatedStyles.add(node);
}else{
node.__getChildren().forEach(findAnimatedStyles);
}
}
findAnimatedStyles(rootNode);
animatedStyles.forEach(function(animatedStyle){return animatedStyle.update();});
}var







AnimatedValue=function(_AnimatedWithChildren){_inherits(AnimatedValue,_AnimatedWithChildren);






function AnimatedValue(value){_classCallCheck(this,AnimatedValue);var _this=_possibleConstructorReturn(this,(AnimatedValue.__proto__||Object.getPrototypeOf(AnimatedValue)).call(this));

_this._value=value;
_this._offset=0;
_this._animation=null;
_this._listeners={};return _this;
}_createClass(AnimatedValue,[{key:'__detach',value:function __detach()

{
this.stopAnimation();
}},{key:'__getValue',value:function __getValue()

{
return this._value+this._offset;
}},{key:'setValue',value:function setValue(





value){
if(this._animation){
this._animation.stop();
this._animation=null;
}
this._updateValue(value);
}},{key:'setOffset',value:function setOffset(






offset){
this._offset=offset;
}},{key:'flattenOffset',value:function flattenOffset()





{
this._value+=this._offset;
this._offset=0;
}},{key:'addListener',value:function addListener(






callback){
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'removeAllListeners',value:function removeAllListeners()

{
this._listeners={};
}},{key:'stopAnimation',value:function stopAnimation(






callback){
this.stopTracking();
this._animation&&this._animation.stop();
this._animation=null;
callback&&callback(this.__getValue());
}},{key:'interpolate',value:function interpolate(





config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'animate',value:function animate(





animation,callback){var _this2=this;
var handle=null;
if(animation.__isInteraction){
handle=InteractionManager.current.createInteractionHandle();
}
var previousAnimation=this._animation;
this._animation&&this._animation.stop();
this._animation=animation;
animation.start(
this._value,
function(value){
_this2._updateValue(value);
},
function(result){
_this2._animation=null;
if(handle!==null){
InteractionManager.current.clearInteractionHandle(handle);
}
callback&&callback(result);
},
previousAnimation);

}},{key:'stopTracking',value:function stopTracking()




{
this._tracking&&this._tracking.__detach();
this._tracking=null;
}},{key:'track',value:function track(




tracking){
this.stopTracking();
this._tracking=tracking;
}},{key:'_updateValue',value:function _updateValue(

value){
this._value=value;
_flush(this);
for(var key in this._listeners){
this._listeners[key]({value:this.__getValue()});
}
}}]);return AnimatedValue;}(AnimatedWithChildren);


module.exports=AnimatedValue;

/***/ }),
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var










Animation=function(){function Animation(){_classCallCheck(this,Animation);}_createClass(Animation,[{key:'start',value:function start(




fromValue,
onUpdate,
onEnd,
previousAnimation)
{}},{key:'stop',value:function stop()
{}},{key:'__debouncedOnEnd',value:function __debouncedOnEnd(

result){
var onEnd=this.__onEnd;
this.__onEnd=null;
onEnd&&onEnd(result);
}}]);return Animation;}();


module.exports=Animation;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var normalizeColor=__webpack_require__(94);

var invariant=__webpack_require__(13);












var linear=function linear(t){return t;};var





Interpolation=function(){function Interpolation(){_classCallCheck(this,Interpolation);}_createClass(Interpolation,null,[{key:'create',value:function create(
config){

if(config.outputRange&&typeof config.outputRange[0]==='string'){
return createInterpolationFromStringOutputRange(config);
}

var outputRange=config.outputRange;
checkInfiniteRange('outputRange',outputRange);

var inputRange=config.inputRange;
checkInfiniteRange('inputRange',inputRange);
checkValidInputRange(inputRange);

invariant(
inputRange.length===outputRange.length,
'inputRange ('+inputRange.length+') and outputRange ('+
outputRange.length+') must have the same length');


var easing=config.easing||linear;

var extrapolateLeft='extend';
if(config.extrapolateLeft!==undefined){
extrapolateLeft=config.extrapolateLeft;
}else if(config.extrapolate!==undefined){
extrapolateLeft=config.extrapolate;
}

var extrapolateRight='extend';
if(config.extrapolateRight!==undefined){
extrapolateRight=config.extrapolateRight;
}else if(config.extrapolate!==undefined){
extrapolateRight=config.extrapolate;
}

return function(input){
invariant(
typeof input==='number',
'Cannot interpolation an input which is not a number');


var range=findRange(input,inputRange);
return interpolate(
input,
inputRange[range],
inputRange[range+1],
outputRange[range],
outputRange[range+1],
easing,
extrapolateLeft,
extrapolateRight);

};
}}]);return Interpolation;}();


function interpolate(
input,
inputMin,
inputMax,
outputMin,
outputMax,
easing,
extrapolateLeft,
extrapolateRight)
{
var result=input;


if(result<inputMin){
if(extrapolateLeft==='identity'){
return result;
}else if(extrapolateLeft==='clamp'){
result=inputMin;
}else if(extrapolateLeft==='extend'){

}
}

if(result>inputMax){
if(extrapolateRight==='identity'){
return result;
}else if(extrapolateRight==='clamp'){
result=inputMax;
}else if(extrapolateRight==='extend'){

}
}

if(outputMin===outputMax){
return outputMin;
}

if(inputMin===inputMax){
if(input<=inputMin){
return outputMin;
}
return outputMax;
}


if(inputMin===-Infinity){
result=-result;
}else if(inputMax===Infinity){
result=result-inputMin;
}else{
result=(result-inputMin)/(inputMax-inputMin);
}


result=easing(result);


if(outputMin===-Infinity){
result=-result;
}else if(outputMax===Infinity){
result=result+outputMin;
}else{
result=result*(outputMax-outputMin)+outputMin;
}

return result;
}

function colorToRgba(input){
var int32Color=normalizeColor(input);
if(int32Color===null){
return input;
}

int32Color=int32Color||0;

var r=(int32Color&0xff000000)>>>24;
var g=(int32Color&0x00ff0000)>>>16;
var b=(int32Color&0x0000ff00)>>>8;
var a=(int32Color&0x000000ff)/255;

return'rgba('+r+', '+g+', '+b+', '+a+')';
}

var stringShapeRegex=/[0-9\.-]+/g;









function createInterpolationFromStringOutputRange(
config)
{
var outputRange=config.outputRange;
invariant(outputRange.length>=2,'Bad output range');
outputRange=outputRange.map(colorToRgba);
checkPattern(outputRange);












var outputRanges=outputRange[0].match(stringShapeRegex).map(function(){return[];});
outputRange.forEach(function(value){



value.match(stringShapeRegex).forEach(function(number,i){
outputRanges[i].push(+number);
});
});




var interpolations=outputRange[0].match(stringShapeRegex).map(function(value,i){
return Interpolation.create(_extends({},
config,{
outputRange:outputRanges[i]}));

});



var shouldRound=/^rgb/.test(outputRange[0]);

return function(input){
var i=0;



return outputRange[0].replace(stringShapeRegex,function(){
var val=interpolations[i++](input);
return String(shouldRound&&i<4?Math.round(val):val);
});
};
}

function checkPattern(arr){
var pattern=arr[0].replace(stringShapeRegex,'');
for(var i=1;i<arr.length;++i){
invariant(
pattern===arr[i].replace(stringShapeRegex,''),
'invalid pattern '+arr[0]+' and '+arr[i]);

}
}

function findRange(input,inputRange){
for(var i=1;i<inputRange.length-1;++i){
if(inputRange[i]>=input){
break;
}
}
return i-1;
}

function checkValidInputRange(arr){
invariant(arr.length>=2,'inputRange must have at least 2 elements');
for(var i=1;i<arr.length;++i){
invariant(
arr[i]>=arr[i-1],






'inputRange must be monotonically increasing '+arr);

}
}

function checkInfiniteRange(name,arr){
invariant(arr.length>=2,name+' must have at least 2 elements');
invariant(
arr.length!==2||arr[0]!==-Infinity||arr[1]!==Infinity,






name+'cannot be ]-infinity;+infinity[ '+arr);

}

module.exports=Interpolation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedWithChildren=__webpack_require__(6);
var invariant=__webpack_require__(13);
var Interpolation=__webpack_require__(12);
var guid=__webpack_require__(32);var



AnimatedInterpolation=function(_AnimatedWithChildren){_inherits(AnimatedInterpolation,_AnimatedWithChildren);





function AnimatedInterpolation(parent,interpolation){_classCallCheck(this,AnimatedInterpolation);var _this=_possibleConstructorReturn(this,(AnimatedInterpolation.__proto__||Object.getPrototypeOf(AnimatedInterpolation)).call(this));

_this._parent=parent;
_this._interpolation=interpolation;
_this._listeners={};return _this;
}_createClass(AnimatedInterpolation,[{key:'__getValue',value:function __getValue()

{
var parentValue=this._parent.__getValue();
invariant(
typeof parentValue==='number',
'Cannot interpolate an input which is not a number.');

return this._interpolation(parentValue);
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._parentListener){
this._parentListener=this._parent.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
this._parentListener=this._parent.removeListener(this._parentListener);
}}]);return AnimatedInterpolation;}(AnimatedWithChildren);


module.exports=AnimatedInterpolation;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var thisCancelAnimationFrame;
if(typeof global=='object'){
thisCancelAnimationFrame=global.cancelAnimationFrame;
}else if(typeof window=='object'){
thisCancelAnimationFrame=window.cancelAnimationFrame;
}
var CancelAnimationFrame={
current:function current(id){return thisCancelAnimationFrame(id);},
inject:function inject(injected){
CancelAnimationFrame.current=injected;
}};


module.exports=CancelAnimationFrame;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var thisRequestAnimationFrame;
if(typeof global=='object'){
thisRequestAnimationFrame=global.requestAnimationFrame;
}else if(typeof window=='object'){
thisRequestAnimationFrame=window.requestAnimationFrame;
}
var RequestAnimationFrame={
current:function current(cb){return thisRequestAnimationFrame(cb);},
inject:function inject(injected){
RequestAnimationFrame.current=injected;
}};


module.exports=RequestAnimationFrame;

/***/ }),
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var _uniqueId=0;

module.exports=function uniqueId(){
return String(_uniqueId++);
};

/***/ }),
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedStyle=__webpack_require__(78);var

AnimatedProps=function(_Animated){_inherits(AnimatedProps,_Animated);



function AnimatedProps(
props,
callback)
{_classCallCheck(this,AnimatedProps);var _this=_possibleConstructorReturn(this,(AnimatedProps.__proto__||Object.getPrototypeOf(AnimatedProps)).call(this));

if(props.style){
props=_extends({},
props,{
style:new AnimatedStyle(props.style)});

}
_this._props=props;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedProps,[{key:'__getValue',value:function __getValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getValue();
}else{
props[key]=value;
}
}
return props;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getAnimatedValue();
}
}
return props;
}},{key:'__attach',value:function __attach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}},{key:'update',value:function update()

{
this._callback();
}}]);return AnimatedProps;}(Animated);


module.exports=AnimatedProps;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var ApplyAnimatedValues={
current:function ApplyAnimatedValues(instance,props){
if(instance.setNativeProps){
instance.setNativeProps(props);
}else{
return false;
}
},
inject:function inject(apply){
ApplyAnimatedValues.current=apply;
}};


module.exports=ApplyAnimatedValues;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var FlattenStyle={
current:function current(style){return style;},
inject:function inject(flatten){
FlattenStyle.current=flatten;
}};


module.exports=FlattenStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var InteractionManager={
current:{
createInteractionHandle:function createInteractionHandle(){},
clearInteractionHandle:function clearInteractionHandle(){}},

inject:function inject(manager){
InteractionManager.current=manager;
}};


module.exports=InteractionManager;

/***/ }),
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// { scale: 2 } => 'scale(2)'
function mapTransform(t) {
  var k = Object.keys(t)[0];
  var unit = '';
  // Only process translateX translateY translateZ
  if (k.indexOf('translate') === 0) {
    unit = 'rem';
  }
  return k + '(' + t[k] + unit + ')';
}

// NOTE(lmr):
// Since this is a hot code path, right now this is mutative...
// As far as I can tell, this shouldn't cause any unexpected behavior.
function mapStyle(style) {
  if (style && style.transform && typeof style.transform !== 'string') {
    // Use vendor prefixed styles
    var convertedValue = style.transform.map(mapTransform).join(' ');
    style.webkitTransform = convertedValue;
    style.transform = convertedValue;
  }

  return style;
}

exports.default = mapStyle;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(18);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var buttonStyles = [styles.button, props.style];
      var textStyles = [styles.text];

      if (props.color) {
        textStyles.push({ color: props.color });
      }

      if (props.disabled) {
        buttonStyles.push(styles.buttonDisabled);
        textStyles.push(styles.textDisabled);
      }

      var content = props.children || props.title;
      if (typeof content === 'string') {
        content = (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyles },
          content
        );
      }

      return (0, _rax.createElement)(
        _raxTouchable2.default,
        _extends({}, props, { style: buttonStyles }),
        content
      );
    }
  }]);

  return Button;
}(_rax.Component);

Button.propTypes = {};


var styles = {
  button: {},
  text: {
    color: '#0C42FD',
    textAlign: 'center',
    padding: 16,
    fontSize: 36
  },
  buttonDisabled: {},
  textDisabled: {
    color: '#cdcdcd'
  }
};

exports.default = Button;
module.exports = exports['default'];

/***/ }),
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rax = __webpack_require__(0);

var _App = __webpack_require__(91);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _rax.render)((0, _rax.createElement)(_App2.default, null));

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(6);
var Animated=__webpack_require__(4);
var AnimatedValue=__webpack_require__(9);
var Interpolation=__webpack_require__(12);
var AnimatedInterpolation=__webpack_require__(19);var



AnimatedAddition=function(_AnimatedWithChildren){_inherits(AnimatedAddition,_AnimatedWithChildren);






function AnimatedAddition(a,b){_classCallCheck(this,AnimatedAddition);var _this=_possibleConstructorReturn(this,(AnimatedAddition.__proto__||Object.getPrototypeOf(AnimatedAddition)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedAddition,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()+this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedAddition;}(AnimatedWithChildren);


module.exports=AnimatedAddition;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedWithChildren=__webpack_require__(6);
var AnimatedInterpolation=__webpack_require__(19);
var Interpolation=__webpack_require__(12);var



AnimatedModulo=function(_AnimatedWithChildren){_inherits(AnimatedModulo,_AnimatedWithChildren);





function AnimatedModulo(a,modulus){_classCallCheck(this,AnimatedModulo);var _this=_possibleConstructorReturn(this,(AnimatedModulo.__proto__||Object.getPrototypeOf(AnimatedModulo)).call(this));

_this._a=a;
_this._modulus=modulus;
_this._listeners={};return _this;
}_createClass(AnimatedModulo,[{key:'__getValue',value:function __getValue()

{
return(this._a.__getValue()%this._modulus+this._modulus)%this._modulus;
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
}}]);return AnimatedModulo;}(AnimatedWithChildren);


module.exports=AnimatedModulo;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(6);
var Animated=__webpack_require__(4);
var AnimatedValue=__webpack_require__(9);
var AnimatedInterpolation=__webpack_require__(19);
var Interpolation=__webpack_require__(12);var



AnimatedMultiplication=function(_AnimatedWithChildren){_inherits(AnimatedMultiplication,_AnimatedWithChildren);






function AnimatedMultiplication(a,b){_classCallCheck(this,AnimatedMultiplication);var _this=_possibleConstructorReturn(this,(AnimatedMultiplication.__proto__||Object.getPrototypeOf(AnimatedMultiplication)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedMultiplication,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()*this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedMultiplication;}(AnimatedWithChildren);


module.exports=AnimatedMultiplication;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedWithChildren=__webpack_require__(6);
var AnimatedTransform=__webpack_require__(81);
var FlattenStyle=__webpack_require__(37);var

AnimatedStyle=function(_AnimatedWithChildren){_inherits(AnimatedStyle,_AnimatedWithChildren);


function AnimatedStyle(style){_classCallCheck(this,AnimatedStyle);var _this=_possibleConstructorReturn(this,(AnimatedStyle.__proto__||Object.getPrototypeOf(AnimatedStyle)).call(this));

style=FlattenStyle.current(style)||{};
if(style.transform&&!(style.transform instanceof Animated)){
style=_extends({},
style,{
transform:new AnimatedTransform(style.transform)});

}
_this._style=style;return _this;
}_createClass(AnimatedStyle,[{key:'__getValue',value:function __getValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getValue();
}else{
style[key]=value;
}
}
return style;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getAnimatedValue();
}
}
return style;
}},{key:'__attach',value:function __attach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}}]);return AnimatedStyle;}(AnimatedWithChildren);


module.exports=AnimatedStyle;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedWithChildren=__webpack_require__(6);var

AnimatedTemplate=function(_AnimatedWithChildren){_inherits(AnimatedTemplate,_AnimatedWithChildren);



function AnimatedTemplate(strings,values){_classCallCheck(this,AnimatedTemplate);var _this=_possibleConstructorReturn(this,(AnimatedTemplate.__proto__||Object.getPrototypeOf(AnimatedTemplate)).call(this));

_this._strings=strings;
_this._values=values;return _this;
}_createClass(AnimatedTemplate,[{key:'__transformValue',value:function __transformValue(

value){
if(value instanceof Animated){
return value.__getValue();
}else{
return value;
}
}},{key:'__getValue',value:function __getValue()

{
var value=this._strings[0];
for(var i=0;i<this._values.length;++i){
value+=this.__transformValue(this._values[i])+this._strings[1+i];
}
return value;
}},{key:'__attach',value:function __attach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__removeChild(this);
}
}
}}]);return AnimatedTemplate;}(AnimatedWithChildren);


module.exports=AnimatedTemplate;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedValue=__webpack_require__(9);var



AnimatedTracking=function(_Animated){_inherits(AnimatedTracking,_Animated);






function AnimatedTracking(
value,
parent,
animationClass,
animationConfig,
callback)
{_classCallCheck(this,AnimatedTracking);var _this=_possibleConstructorReturn(this,(AnimatedTracking.__proto__||Object.getPrototypeOf(AnimatedTracking)).call(this));

_this._value=value;
_this._parent=parent;
_this._animationClass=animationClass;
_this._animationConfig=animationConfig;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedTracking,[{key:'__getValue',value:function __getValue()

{
return this._parent.__getValue();
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
}},{key:'update',value:function update()

{
this._value.animate(new this._animationClass(_extends({},
this._animationConfig,{
toValue:this._animationConfig.toValue.__getValue()})),
this._callback);
}}]);return AnimatedTracking;}(Animated);


module.exports=AnimatedTracking;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedWithChildren=__webpack_require__(6);var

AnimatedTransform=function(_AnimatedWithChildren){_inherits(AnimatedTransform,_AnimatedWithChildren);


function AnimatedTransform(transforms){_classCallCheck(this,AnimatedTransform);var _this=_possibleConstructorReturn(this,(AnimatedTransform.__proto__||Object.getPrototypeOf(AnimatedTransform)).call(this));

_this._transforms=transforms;return _this;
}_createClass(AnimatedTransform,[{key:'__getValue',value:function __getValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getValue();
}else{
result[key]=value;
}
}
return result;
});
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getAnimatedValue();
}else{

result[key]=value;
}
}
return result;
});
}},{key:'__attach',value:function __attach()

{var _this2=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__addChild(_this2);
}
}
});
}},{key:'__detach',value:function __detach()

{var _this3=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__removeChild(_this3);
}
}
});
}}]);return AnimatedTransform;}(AnimatedWithChildren);


module.exports=AnimatedTransform;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(4);
var AnimatedValue=__webpack_require__(9);
var AnimatedWithChildren=__webpack_require__(6);
var invariant=__webpack_require__(13);
var guid=__webpack_require__(32);var









































AnimatedValueXY=function(_AnimatedWithChildren){_inherits(AnimatedValueXY,_AnimatedWithChildren);




function AnimatedValueXY(valueIn){_classCallCheck(this,AnimatedValueXY);var _this=_possibleConstructorReturn(this,(AnimatedValueXY.__proto__||Object.getPrototypeOf(AnimatedValueXY)).call(this));

var value=valueIn||{x:0,y:0};
if(typeof value.x==='number'&&typeof value.y==='number'){
_this.x=new AnimatedValue(value.x);
_this.y=new AnimatedValue(value.y);
}else{
invariant(
value.x instanceof AnimatedValue&&
value.y instanceof AnimatedValue,
'AnimatedValueXY must be initalized with an object of numbers or '+
'AnimatedValues.');

_this.x=value.x;
_this.y=value.y;
}
_this._listeners={};return _this;
}_createClass(AnimatedValueXY,[{key:'setValue',value:function setValue(

value){
this.x.setValue(value.x);
this.y.setValue(value.y);
}},{key:'setOffset',value:function setOffset(

offset){
this.x.setOffset(offset.x);
this.y.setOffset(offset.y);
}},{key:'flattenOffset',value:function flattenOffset()

{
this.x.flattenOffset();
this.y.flattenOffset();
}},{key:'__getValue',value:function __getValue()

{
return{
x:this.x.__getValue(),
y:this.y.__getValue()};

}},{key:'stopAnimation',value:function stopAnimation(

callback){
this.x.stopAnimation();
this.y.stopAnimation();
callback&&callback(this.__getValue());
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
var id=guid();
var jointCallback=function jointCallback(_ref){var number=_ref.value;
callback(_this2.__getValue());
};
this._listeners[id]={
x:this.x.addListener(jointCallback),
y:this.y.addListener(jointCallback)};

return id;
}},{key:'removeListener',value:function removeListener(

id){
this.x.removeListener(this._listeners[id].x);
this.y.removeListener(this._listeners[id].y);
delete this._listeners[id];
}},{key:'getLayout',value:function getLayout()








{
return{
left:this.x,
top:this.y};

}},{key:'getTranslateTransform',value:function getTranslateTransform()










{
return[
{translateX:this.x},
{translateY:this.y}];

}}]);return AnimatedValueXY;}(AnimatedWithChildren);


module.exports=AnimatedValueXY;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(11);
var RequestAnimationFrame=__webpack_require__(21);
var CancelAnimationFrame=__webpack_require__(20);var








DecayAnimation=function(_Animation){_inherits(DecayAnimation,_Animation);








function DecayAnimation(
config)
{_classCallCheck(this,DecayAnimation);var _this=_possibleConstructorReturn(this,(DecayAnimation.__proto__||Object.getPrototypeOf(DecayAnimation)).call(this));

_this._deceleration=config.deceleration!==undefined?config.deceleration:0.998;
_this._velocity=config.velocity;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(DecayAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{
this.__active=true;
this._lastValue=fromValue;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._startTime=Date.now();
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();

var value=this._fromValue+
this._velocity/(1-this._deceleration)*(
1-Math.exp(-(1-this._deceleration)*(now-this._startTime)));

this._onUpdate(value);

if(Math.abs(this._lastValue-value)<0.1){
this.__debouncedOnEnd({finished:true});
return;
}

this._lastValue=value;
if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return DecayAnimation;}(Animation);


module.exports=DecayAnimation;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var _bezier=__webpack_require__(89);var






Easing=function(){function Easing(){_classCallCheck(this,Easing);}_createClass(Easing,null,[{key:'step0',value:function step0(
n){
return n>0?1:0;
}},{key:'step1',value:function step1(

n){
return n>=1?1:0;
}},{key:'linear',value:function linear(

t){
return t;
}},{key:'ease',value:function ease(

t){
return _ease(t);
}},{key:'quad',value:function quad(

t){
return t*t;
}},{key:'cubic',value:function cubic(

t){
return t*t*t;
}},{key:'poly',value:function poly(

n){
return function(t){return Math.pow(t,n);};
}},{key:'sin',value:function sin(

t){
return 1-Math.cos(t*Math.PI/2);
}},{key:'circle',value:function circle(

t){
return 1-Math.sqrt(1-t*t);
}},{key:'exp',value:function exp(

t){
return Math.pow(2,10*(t-1));
}},{key:'elastic',value:function elastic()











{var bounciness=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
var p=bounciness*Math.PI;
return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};
}},{key:'back',value:function back(

s){
if(s===undefined){
s=1.70158;
}
return function(t){return t*t*((s+1)*t-s);};
}},{key:'bounce',value:function bounce(

t){
if(t<1/2.75){
return 7.5625*t*t;
}

if(t<2/2.75){
t-=1.5/2.75;
return 7.5625*t*t+0.75;
}

if(t<2.5/2.75){
t-=2.25/2.75;
return 7.5625*t*t+0.9375;
}

t-=2.625/2.75;
return 7.5625*t*t+0.984375;
}},{key:'bezier',value:function bezier(


x1,
y1,
x2,
y2)
{
return _bezier(x1,y1,x2,y2);
}},{key:'in',value:function _in(


easing)
{
return easing;
}},{key:'out',value:function out(





easing)
{
return function(t){return 1-easing(1-t);};
}},{key:'inOut',value:function inOut(





easing)
{
return function(t){
if(t<0.5){
return easing(t*2)/2;
}
return 1-easing((1-t)*2)/2;
};
}}]);return Easing;}();


var _ease=Easing.bezier(0.42,0,1,1);



module.exports=Easing;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











function SetPolyfill(){
this._cache=[];
}

SetPolyfill.prototype.add=function(e){
if(this._cache.indexOf(e)===-1){
this._cache.push(e);
}
};

SetPolyfill.prototype.forEach=function(cb){
this._cache.forEach(cb);
};

module.exports=SetPolyfill;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(11);
var AnimatedValue=__webpack_require__(9);
var RequestAnimationFrame=__webpack_require__(21);
var CancelAnimationFrame=__webpack_require__(20);
var invariant=__webpack_require__(13);
var SpringConfig=__webpack_require__(87);















function withDefault(value,defaultValue){
if(value===undefined||value===null){
return defaultValue;
}
return value;
}var

SpringAnimation=function(_Animation){_inherits(SpringAnimation,_Animation);















function SpringAnimation(
config)
{_classCallCheck(this,SpringAnimation);var _this=_possibleConstructorReturn(this,(SpringAnimation.__proto__||Object.getPrototypeOf(SpringAnimation)).call(this));


_this._overshootClamping=withDefault(config.overshootClamping,false);
_this._restDisplacementThreshold=withDefault(config.restDisplacementThreshold,0.001);
_this._restSpeedThreshold=withDefault(config.restSpeedThreshold,0.001);
_this._initialVelocity=config.velocity;
_this._lastVelocity=withDefault(config.velocity,0);
_this._toValue=config.toValue;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;

var springConfig;
if(config.bounciness!==undefined||config.speed!==undefined){
invariant(
config.tension===undefined&&config.friction===undefined,
'You can only define bounciness/speed or tension/friction but not both');

springConfig=SpringConfig.fromBouncinessAndSpeed(
withDefault(config.bounciness,8),
withDefault(config.speed,12));

}else{
springConfig=SpringConfig.fromOrigamiTensionAndFriction(
withDefault(config.tension,40),
withDefault(config.friction,7));

}
_this._tension=springConfig.tension;
_this._friction=springConfig.friction;return _this;
}_createClass(SpringAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd,
previousAnimation)
{
this.__active=true;
this._startPosition=fromValue;
this._lastPosition=this._startPosition;

this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._lastTime=Date.now();

if(previousAnimation instanceof SpringAnimation){
var internalState=previousAnimation.getInternalState();
this._lastPosition=internalState.lastPosition;
this._lastVelocity=internalState.lastVelocity;
this._lastTime=internalState.lastTime;
}
if(this._initialVelocity!==undefined&&
this._initialVelocity!==null){
this._lastVelocity=this._initialVelocity;
}
this.onUpdate();
}},{key:'getInternalState',value:function getInternalState()

{
return{
lastPosition:this._lastPosition,
lastVelocity:this._lastVelocity,
lastTime:this._lastTime};

}},{key:'onUpdate',value:function onUpdate()

{
var position=this._lastPosition;
var velocity=this._lastVelocity;

var tempPosition=this._lastPosition;
var tempVelocity=this._lastVelocity;





var MAX_STEPS=64;
var now=Date.now();
if(now>this._lastTime+MAX_STEPS){
now=this._lastTime+MAX_STEPS;
}




var TIMESTEP_MSEC=1;
var numSteps=Math.floor((now-this._lastTime)/TIMESTEP_MSEC);

for(var i=0;i<numSteps;++i){

var step=TIMESTEP_MSEC/1000;



var aVelocity=velocity;
var aAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
var tempPosition=position+aVelocity*step/2;
var tempVelocity=velocity+aAcceleration*step/2;

var bVelocity=tempVelocity;
var bAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+bVelocity*step/2;
tempVelocity=velocity+bAcceleration*step/2;

var cVelocity=tempVelocity;
var cAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dVelocity=tempVelocity;
var dAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dxdt=(aVelocity+2*(bVelocity+cVelocity)+dVelocity)/6;
var dvdt=(aAcceleration+2*(bAcceleration+cAcceleration)+dAcceleration)/6;

position+=dxdt*step;
velocity+=dvdt*step;
}

this._lastTime=now;
this._lastPosition=position;
this._lastVelocity=velocity;

this._onUpdate(position);
if(!this.__active){
return;
}


var isOvershooting=false;
if(this._overshootClamping&&this._tension!==0){
if(this._startPosition<this._toValue){
isOvershooting=position>this._toValue;
}else{
isOvershooting=position<this._toValue;
}
}
var isVelocity=Math.abs(velocity)<=this._restSpeedThreshold;
var isDisplacement=true;
if(this._tension!==0){
isDisplacement=Math.abs(this._toValue-position)<=this._restDisplacementThreshold;
}

if(isOvershooting||isVelocity&&isDisplacement){
if(this._tension!==0){

this._onUpdate(this._toValue);
}

this.__debouncedOnEnd({finished:true});
return;
}
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return SpringAnimation;}(Animation);


module.exports=SpringAnimation;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


















function tensionFromOrigamiValue(oValue){
return(oValue-30)*3.62+194;
}

function frictionFromOrigamiValue(oValue){
return(oValue-8)*3+25;
}

function fromOrigamiTensionAndFriction(
tension,
friction)
{
return{
tension:tensionFromOrigamiValue(tension),
friction:frictionFromOrigamiValue(friction)};

}

function fromBouncinessAndSpeed(
bounciness,
speed)
{
function normalize(value,startValue,endValue){
return(value-startValue)/(endValue-startValue);
}

function projectNormal(n,start,end){
return start+n*(end-start);
}

function linearInterpolation(t,start,end){
return t*end+(1-t)*start;
}

function quadraticOutInterpolation(t,start,end){
return linearInterpolation(2*t-t*t,start,end);
}

function b3Friction1(x){
return 0.0007*Math.pow(x,3)-
0.031*Math.pow(x,2)+0.64*x+1.28;
}

function b3Friction2(x){
return 0.000044*Math.pow(x,3)-
0.006*Math.pow(x,2)+0.36*x+2;
}

function b3Friction3(x){
return 0.00000045*Math.pow(x,3)-
0.000332*Math.pow(x,2)+0.1078*x+5.84;
}

function b3Nobounce(tension){
if(tension<=18){
return b3Friction1(tension);
}else if(tension>18&&tension<=44){
return b3Friction2(tension);
}else{
return b3Friction3(tension);
}
}

var b=normalize(bounciness/1.7,0,20);
b=projectNormal(b,0,0.8);
var s=normalize(speed/1.7,0,20);
var bouncyTension=projectNormal(s,0.5,200);
var bouncyFriction=quadraticOutInterpolation(
b,
b3Nobounce(bouncyTension),
0.01);


return{
tension:tensionFromOrigamiValue(bouncyTension),
friction:frictionFromOrigamiValue(bouncyFriction)};

}

module.exports={
fromOrigamiTensionAndFriction:fromOrigamiTensionAndFriction,
fromBouncinessAndSpeed:fromBouncinessAndSpeed};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(11);
var AnimatedValue=__webpack_require__(9);
var Easing=__webpack_require__(84);
var RequestAnimationFrame=__webpack_require__(21);
var CancelAnimationFrame=__webpack_require__(20);



var easeInOut=Easing.inOut(Easing.ease);var








TimingAnimation=function(_Animation){_inherits(TimingAnimation,_Animation);










function TimingAnimation(
config)
{_classCallCheck(this,TimingAnimation);var _this=_possibleConstructorReturn(this,(TimingAnimation.__proto__||Object.getPrototypeOf(TimingAnimation)).call(this));

_this._toValue=config.toValue;
_this._easing=config.easing!==undefined?config.easing:easeInOut;
_this._duration=config.duration!==undefined?config.duration:500;
_this._delay=config.delay!==undefined?config.delay:0;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(TimingAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{var _this2=this;
this.__active=true;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;

var start=function start(){
if(_this2._duration===0){
_this2._onUpdate(_this2._toValue);
_this2.__debouncedOnEnd({finished:true});
}else{
_this2._startTime=Date.now();
_this2._animationFrame=RequestAnimationFrame.current(_this2.onUpdate.bind(_this2));
}
};
if(this._delay){
this._timeout=setTimeout(start,this._delay);
}else{
start();
}
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();
if(now>=this._startTime+this._duration){
if(this._duration===0){
this._onUpdate(this._toValue);
}else{
this._onUpdate(
this._fromValue+this._easing(1)*(this._toValue-this._fromValue));

}
this.__debouncedOnEnd({finished:true});
return;
}

this._onUpdate(
this._fromValue+
this._easing((now-this._startTime)/this._duration)*(
this._toValue-this._fromValue));

if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
clearTimeout(this._timeout);
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return TimingAnimation;}(Animation);


module.exports=TimingAnimation;

/***/ }),
/* 89 */
/***/ (function(module, exports) {









var NEWTON_ITERATIONS=4;
var NEWTON_MIN_SLOPE=0.001;
var SUBDIVISION_PRECISION=0.0000001;
var SUBDIVISION_MAX_ITERATIONS=10;

var kSplineTableSize=11;
var kSampleStepSize=1.0/(kSplineTableSize-1.0);

var float32ArraySupported=typeof Float32Array==='function';

function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}
function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}
function C(aA1){return 3.0*aA1;}


function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}


function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}

function binarySubdivide(aX,aA,aB,mX1,mX2){
var currentX,currentT,i=0;
do{
currentT=aA+(aB-aA)/2.0;
currentX=calcBezier(currentT,mX1,mX2)-aX;
if(currentX>0.0){
aB=currentT;
}else{
aA=currentT;
}
}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);
return currentT;
}

function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){
for(var i=0;i<NEWTON_ITERATIONS;++i){
var currentSlope=getSlope(aGuessT,mX1,mX2);
if(currentSlope===0.0){
return aGuessT;
}
var currentX=calcBezier(aGuessT,mX1,mX2)-aX;
aGuessT-=currentX/currentSlope;
}
return aGuessT;
}

module.exports=function bezier(mX1,mY1,mX2,mY2){
if(!(0<=mX1&&mX1<=1&&0<=mX2&&mX2<=1)){
throw new Error('bezier x values must be in [0, 1] range');
}


var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);
if(mX1!==mY1||mX2!==mY2){
for(var i=0;i<kSplineTableSize;++i){
sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);
}
}

function getTForX(aX){
var intervalStart=0.0;
var currentSample=1;
var lastSample=kSplineTableSize-1;

for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){
intervalStart+=kSampleStepSize;
}
--currentSample;


var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);
var guessForT=intervalStart+dist*kSampleStepSize;

var initialSlope=getSlope(guessForT,mX1,mX2);
if(initialSlope>=NEWTON_MIN_SLOPE){
return newtonRaphsonIterate(aX,guessForT,mX1,mX2);
}else if(initialSlope===0.0){
return guessForT;
}else{
return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);
}
}

return function BezierEasing(x){
if(mX1===mY1&&mX2===mY2){
return x;
}

if(x===0){
return 0;
}
if(x===1){
return 1;
}
return calcBezier(getTForX(x),mY1,mY2);
};
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var Animated=__webpack_require__(4);

function isAnimated(obj){
return obj instanceof Animated;
}

module.exports=isAnimated;

/***/ }),
/* 91 */
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

var _App = __webpack_require__(103);

var _App2 = _interopRequireDefault(_App);

var _raxTouchable = __webpack_require__(18);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _raxButton = __webpack_require__(52);

var _raxButton2 = _interopRequireDefault(_raxButton);

var _button = __webpack_require__(92);

var _button2 = _interopRequireDefault(_button);

var _textInput = __webpack_require__(93);

var _textInput2 = _interopRequireDefault(_textInput);

var _raxModal = __webpack_require__(100);

var _raxModal2 = _interopRequireDefault(_raxModal);

var _raxListview = __webpack_require__(99);

var _raxListview2 = _interopRequireDefault(_raxListview);

var _raxImage = __webpack_require__(22);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxLink = __webpack_require__(98);

var _raxLink2 = _interopRequireDefault(_raxLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// const test = require("@weex-module/test");


var stream = __webpack_require__(72);


var regionList = ["东区", "西区", "元宝山", "南湖", "国交", "产区"];
var buildingList = [["东01栋", "东02栋", "东03栋", "东04栋", "东05栋", "东06栋", "东07栋", "东08栋", "东09栋", "东10栋", "东11栋", "东12栋", "东13栋东", "东13栋西", "东14栋", "东15栋东", "东15栋西", "东16栋", "东附1栋"], ["西1栋", "西2栋", "西3栋", "西4栋", "西5栋", "西6栋", "西7栋", "西8栋"], ["元宝山1栋", "元宝山2栋", "元宝山3栋", "元宝山4栋", "元宝山5栋"], ["南湖01栋", "南湖02栋", "南湖03栋", "南湖04栋", "南湖05栋", "南湖06栋", "南湖07栋", "南湖08栋", "南湖09栋", "南湖10栋", "南湖11栋", "南湖12栋", "南湖13栋"], ["国3栋", "国4栋", "国5栋", "国6栋"], ["产8栋", "产9栋"]];
var gifImage = {
  uri: "http://storage.slide.news.sina.com.cn/slidenews/77_ori/2016_34/74766_703038_567223.gif"
};

var textInputStyle = {
  fontSize: 32,
  textAlign: "left",
  paddingLeft: 40,
  paddingRight: 40
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dorm: "",
      selectedBuilding: 0,
      selectedRegion: 0,
      currentDorm: null
    }, _this.showModal = function () {
      _this.refs.modal.show();
    }, _this.hideModal = function () {
      _this.refs.modal.hide();
    }, _this.selectDorm = function () {
      _this.hideModal();
      _this.setState({
        currentDorm: buildingList[_this.state.selectedRegion][_this.state.selectedBuilding]
      });
    }, _this.onDormChange = function (val) {
      _this.setState({
        dorm: val
      });
    }, _this.renderListItem = function (item, index) {
      return (0, _rax.createElement)(
        _raxTouchable2.default,
        {
          onPress: function onPress() {
            _this.changeRegion(index);
          }
        },
        (0, _rax.createElement)(
          _raxView2.default,
          {
            style: [_App2.default.list_item, index === _this.state.selectedRegion ? _App2.default.selected : {}]
          },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: _App2.default.list_item_container },
            (0, _rax.createElement)(
              _raxText2.default,
              {
                style: [_App2.default.text, index === _this.state.selectedRegion ? _App2.default.selected_text : {}]
              },
              item
            )
          )
        )
      );
    }, _this.renderBuildinglistItem = function (item, index) {
      return (0, _rax.createElement)(
        _raxTouchable2.default,
        {
          onPress: function onPress() {
            _this.changeBuilding(index);
          }
        },
        (0, _rax.createElement)(
          _raxView2.default,
          {
            style: [_App2.default.list_item, index === _this.state.selectedBuilding ? _App2.default.selected : {}]
          },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: _App2.default.list_item_container },
            (0, _rax.createElement)(
              _raxText2.default,
              {
                style: [_App2.default.text, index === _this.state.selectedBuilding ? _App2.default.selected_text : {}]
              },
              item
            )
          )
        )
      );
    }, _this.changeRegion = function (index) {
      _this.setState({
        selectedRegion: index,
        selectedBuilding: 0
      });
    }, _this.changeBuilding = function (index) {
      _this.setState({
        selectedBuilding: index
      });
    }, _this.handleLoadMore = function () {}, _this.submit = function () {
      alert(_this.state.dorm);
      // if (this.state.dorm === "") {
      //   
      //   return;
      // }
      // alert(
      //   `輸入${this.state.selectedBuilding},${this.state.selectedRegion},${
      //     this.state.dorm
      //   }`
      // );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: _App2.default.app },
        (0, _rax.createElement)(
          _raxModal2.default,
          { ref: "modal", contentStyle: _App2.default.modal },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: _App2.default.modalTop },
            (0, _rax.createElement)(
              _raxTouchable2.default,
              { onPress: this.hideModal },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_App2.default.modal_top_left, _App2.default.text] },
                "\u5173\u95ED"
              )
            ),
            (0, _rax.createElement)(
              _raxText2.default,
              null,
              "\u9009\u62E9\u5BBF\u820D\u697C"
            ),
            (0, _rax.createElement)(
              _raxTouchable2.default,
              { onPress: this.selectDorm },
              (0, _rax.createElement)(
                _raxText2.default,
                { style: [_App2.default.modal_top_right, _App2.default.text] },
                "\u786E\u5B9A"
              )
            )
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            { style: _App2.default.listContainer },
            (0, _rax.createElement)(_raxListview2.default, {
              renderRow: this.renderListItem,
              dataSource: regionList,
              onEndReached: this.handleLoadMore
            }),
            (0, _rax.createElement)(_raxListview2.default, {
              renderRow: this.renderBuildinglistItem,
              dataSource: buildingList[this.state.selectedRegion],
              onEndReached: this.handleLoadMore
            })
          )
        ),
        (0, _rax.createElement)(
          _raxButton2.default,
          { onPress: this.showModal, style: [_App2.default.show_modal_btn] },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _App2.default.show_modal_btn_text },
            this.state.currentDorm ? this.state.currentDorm : "点击选择宿舍楼"
          )
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_App2.default.query_input] },
          (0, _rax.createElement)(_textInput2.default, {
            width: 550,
            onChangeHandler: this.onDormChange,
            value: this.state.dorm,
            style: textInputStyle,
            placeholder: "\u8F93\u5165\u5BDD\u5BA4\u53F7\uFF08\u5982\uFF1A216\uFF09"
          })
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_App2.default.query_btn] },
          (0, _rax.createElement)(
            _button2.default,
            { width: 550, style: _App2.default.submit, onClickHandler: this.submit },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _App2.default.submit_text },
              "\u67E5\u8BE2"
            )
          )
        )
      );
    }
  }]);

  return App;
}(_rax.Component);

exports.default = App;
module.exports = exports["default"];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raxButton = __webpack_require__(52);

var _raxButton2 = _interopRequireDefault(_raxButton);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _index = __webpack_require__(104);

var _index2 = _interopRequireDefault(_index);

var _rax = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BoxButton(props) {
  var customStyle = {
    container: {
      width: props.width || 375,
      height: props.height || 100,
      lineHeight: props.lineHeight || 100
    }
  };
  return (0, _rax.createElement)(
    _raxButton2.default,
    {
      onPress: props.onClickHandler,
      style: [_index2.default.common, customStyle.container, props.style || {}]
    },
    props.children ? props.children : (0, _rax.createElement)(
      _raxView2.default,
      null,
      (0, _rax.createElement)(
        _raxText2.default,
        { style: _index2.default.text },
        props.text
      )
    )
  );
}

exports.default = BoxButton;
module.exports = exports["default"];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raxTextinput = __webpack_require__(102);

var _raxTextinput2 = _interopRequireDefault(_raxTextinput);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _index = __webpack_require__(105);

var _index2 = _interopRequireDefault(_index);

var _rax = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BoxTextInput(props) {
  var customStyle = {
    container: {
      width: props.width || 375,
      height: props.height || 100,
      lineHeight: props.lineHeight || 100
    }
  };
  return (0, _rax.createElement)(_raxTextinput2.default, {
    value: props.value,
    placeholder: props.placeholder || "",
    onChange: props.onChangeHandler,
    keyboardType: props.keyboardType || "default",
    style: [_index2.default.common, customStyle.container, props.style || {}]
  });
}

exports.default = BoxTextInput;
module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var invariant = __webpack_require__(13);

var Animated = __webpack_require__(4);
var AnimatedValue = __webpack_require__(9);
var AnimatedValueXY = __webpack_require__(82);
var AnimatedAddition = __webpack_require__(75);
var AnimatedMultiplication = __webpack_require__(77);
var AnimatedModulo = __webpack_require__(76);
var AnimatedTemplate = __webpack_require__(79);
var AnimatedTracking = __webpack_require__(80);
var isAnimated = __webpack_require__(90);

var Animation = __webpack_require__(11);
var TimingAnimation = __webpack_require__(88);
var DecayAnimation = __webpack_require__(83);
var SpringAnimation = __webpack_require__(86);

var maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
  if (value instanceof AnimatedValueXY) {
    var configX = _extends({}, config);
    var configY = _extends({}, config);
    for (var key in config) {
      var _config$key = config[key],
          x = _config$key.x,
          y = _config$key.y;

      if (x !== undefined && y !== undefined) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value, configX);
    var aY = anim(value, configY);
    // We use `stopTogether: false` here because otherwise tracking will break
    // because the second animation will get stopped before it can update.
    return parallel([aX, aY], { stopTogether: false });
  }
  return null;
};

var spring = function spring(value, config) {
  return maybeVectorAnim(value, config, spring) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      if (config.toValue instanceof Animated) {
        singleValue.track(new AnimatedTracking(singleValue, config.toValue, SpringAnimation, singleConfig, callback));
      } else {
        singleValue.animate(new SpringAnimation(singleConfig), callback);
      }
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var timing = function timing(value, config) {
  return maybeVectorAnim(value, config, timing) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      if (config.toValue instanceof Animated) {
        singleValue.track(new AnimatedTracking(singleValue, config.toValue, TimingAnimation, singleConfig, callback));
      } else {
        singleValue.animate(new TimingAnimation(singleConfig), callback);
      }
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var decay = function decay(value, config) {
  return maybeVectorAnim(value, config, decay) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      singleValue.animate(new DecayAnimation(singleConfig), callback);
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var sequence = function sequence(animations) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }

        current++;

        if (current === animations.length) {
          callback && callback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        callback && callback({ finished: true });
      } else {
        animations[current].start(onComplete);
      }
    },

    stop: function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    }
  };
};

var parallel = function parallel(animations, config) {
  var doneCount = 0;
  // Make sure we only call stop() at most once for each animation
  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);

  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({ finished: true });
        return;
      }

      animations.forEach(function (animation, idx) {
        var cb = function cb(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          cb({ finished: true });
        } else {
          animation.start(cb);
        }
      });
    },

    stop: function stop() {
      animations.forEach(function (animation, idx) {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    }
  };

  return result;
};

var delay = function delay(time) {
  // Would be nice to make a specialized implementation
  return timing(new AnimatedValue(0), { toValue: 0, delay: time, duration: 0 });
};

var stagger = function stagger(time, animations) {
  return parallel(animations.map(function (animation, i) {
    return sequence([delay(time * i), animation]);
  }));
};

var event = function event(argMapping, config) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var traverse = function traverse(recMapping, recEvt, key) {
      if (typeof recEvt === 'number') {
        invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + (typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) + ' for key ' + key + ', event value must map to AnimatedValue');
        recMapping.setValue(recEvt);
        return;
      }
      invariant((typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) === 'object', 'Bad mapping of type ' + (typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) + ' for key ' + key);
      invariant((typeof recEvt === 'undefined' ? 'undefined' : _typeof(recEvt)) === 'object', 'Bad event of type ' + (typeof recEvt === 'undefined' ? 'undefined' : _typeof(recEvt)) + ' for key ' + key);
      for (var key in recMapping) {
        traverse(recMapping[key], recEvt[key], key);
      }
    };
    argMapping.forEach(function (mapping, idx) {
      traverse(mapping, args[idx], 'arg' + idx);
    });
    if (config && config.listener) {
      config.listener.apply(null, args);
    }
  };
};

/**
 * Animations are an important part of modern UX, and the `Animated`
 * library is designed to make them fluid, powerful, and easy to build and
 * maintain.
 *
 * The simplest workflow is to create an `Animated.Value`, hook it up to one or
 * more style attributes of an animated component, and then drive updates either
 * via animations, such as `Animated.timing`, or by hooking into gestures like
 * panning or scrolling via `Animated.event`.  `Animated.Value` can also bind to
 * props other than style, and can be interpolated as well.  Here is a basic
 * example of a container view that will fade in when it's mounted:
 *
 *```javascript
 *  class FadeInView extends React.Component {
 *    constructor(props) {
 *      super(props);
 *      this.state = {
 *        fadeAnim: new Animated.Value(0), // init opacity 0
 *      };
 *    }
 *    componentDidMount() {
 *      Animated.timing(          // Uses easing functions
 *        this.state.fadeAnim,    // The value to drive
 *        {toValue: 1},           // Configuration
 *      ).start();                // Don't forget start!
 *    }
 *    render() {
 *      return (
 *        <Animated.View          // Special animatable View
 *          style={{opacity: this.state.fadeAnim}}> // Binds
 *          {this.props.children}
 *        </Animated.View>
 *      );
 *    }
 *  }
 *```
 *
 * Note that only animatable components can be animated.  `View`, `Text`, and
 * `Image` are already provided, and you can create custom ones with
 * `createAnimatedComponent`.  These special components do the magic of binding
 * the animated values to the properties, and do targeted native updates to
 * avoid the cost of the react render and reconciliation process on every frame.
 * They also handle cleanup on unmount so they are safe by default.
 *
 * Animations are heavily configurable.  Custom and pre-defined easing
 * functions, delays, durations, decay factors, spring constants, and more can
 * all be tweaked depending on the type of animation.
 *
 * A single `Animated.Value` can drive any number of properties, and each
 * property can be run through an interpolation first.  An interpolation maps
 * input ranges to output ranges, typically using a linear interpolation but
 * also supports easing functions.  By default, it will extrapolate the curve
 * beyond the ranges given, but you can also have it clamp the output value.
 *
 * For example, you may want to think about your `Animated.Value` as going from
 * 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to
 * 1. This can easily be done by modifying `style` in the example above like so:
 *
 *```javascript
 *  style={{
 *    opacity: this.state.fadeAnim, // Binds directly
 *    transform: [{
 *      translateY: this.state.fadeAnim.interpolate({
 *        inputRange: [0, 1],
 *        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
 *      }),
 *    }],
 *  }}>
 *```
 *
 * Animations can also be combined in complex ways using composition functions
 * such as `sequence` and `parallel`, and can also be chained together simply
 * by setting the `toValue` of one animation to be another `Animated.Value`.
 *
 * `Animated.ValueXY` is handy for 2D animations, like panning, and there are
 * other helpful additions like `setOffset` and `getLayout` to aid with typical
 * interaction patterns, like drag-and-drop.
 *
 * You can see more example usage in `AnimationExample.js`, the Gratuitous
 * Animation App, and [Animations documentation guide](docs/animations.html).
 *
 * Note that `Animated` is designed to be fully serializable so that animations
 * can be run in a high performance way, independent of the normal JavaScript
 * event loop. This does influence the API, so keep that in mind when it seems a
 * little trickier to do something compared to a fully synchronous system.
 * Checkout `Animated.Value.addListener` as a way to work around some of these
 * limitations, but use it sparingly since it might have performance
 * implications in the future.
 */
module.exports = {
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   */
  Value: AnimatedValue,
  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   */
  ValueXY: AnimatedValueXY,

  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   */
  decay: decay,
  /**
   * Animates a value along a timed easing curve.  The `Easing` module has tons
   * of pre-defined curves, or you can use your own function.
   */
  timing: timing,
  /**
   * Spring animation based on Rebound and Origami.  Tracks velocity state to
   * create fluid motions as the `toValue` updates, and can be chained together.
   */
  spring: spring,

  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   */
  add: function add(a, b) {
    return new AnimatedAddition(a, b);
  },
  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   */
  multiply: function multiply(a, b) {
    return new AnimatedMultiplication(a, b);
  },

  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value
   */
  modulo: function modulo(a, modulus) {
    return new AnimatedModulo(a, modulus);
  },

  /**
   * Creates a new Animated value that is the specified string, with each
   * substitution expression being separately animated and interpolated.
   */
  template: function template(strings) {
    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new AnimatedTemplate(strings, values);
  },

  /**
   * Starts an animation after the given delay.
   */
  delay: delay,
  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next.  If the current running animation is stopped, no
   * following animations will be started.
   */
  sequence: sequence,
  /**
   * Starts an array of animations all at the same time.  By default, if one
   * of the animations is stopped, they will all be stopped.  You can override
   * this with the `stopTogether` flag.
   */
  parallel: parallel,
  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   */
  stagger: stagger,

  /**
   *  Takes an array of mappings and extracts values from each arg accordingly,
   *  then calls `setValue` on the mapped outputs.  e.g.
   *
   *```javascript
   *  onScroll={Animated.event(
   *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
   *    {listener},          // Optional async listener
   *  )
   *  ...
   *  onPanResponderMove: Animated.event([
   *    null,                // raw event arg ignored
   *    {dx: this._panX},    // gestureState arg
   *  ]),
   *```
   */
  event: event,

  /**
   * Existential test to figure out if an object is an instance of the Animated
   * class or not.
   */
  isAnimated: isAnimated,

  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   */
  createAnimatedComponent: __webpack_require__(96),

  inject: {
    ApplyAnimatedValues: __webpack_require__(36).inject,
    InteractionManager: __webpack_require__(38).inject,
    FlattenStyle: __webpack_require__(37).inject,
    RequestAnimationFrame: __webpack_require__(21).inject,
    CancelAnimationFrame: __webpack_require__(20).inject
  },

  __PropsOnlyForTests: __webpack_require__(35)
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _mapStyle = __webpack_require__(51);

var _mapStyle2 = _interopRequireDefault(_mapStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AnimatedProps = __webpack_require__(35);
var ApplyAnimatedValues = __webpack_require__(36);

function createAnimatedComponent(OriginComponent) {
  var refName = 'node';

  var AnimatedComponent = function (_Component) {
    _inherits(AnimatedComponent, _Component);

    function AnimatedComponent() {
      _classCallCheck(this, AnimatedComponent);

      return _possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).apply(this, arguments));
    }

    _createClass(AnimatedComponent, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._propsAnimated && this._propsAnimated.__detach();
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(props) {
        var didUpdate = ApplyAnimatedValues.current(this.refs[refName], props);
        if (didUpdate === false) {
          this.forceUpdate();
        }
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.attachProps(this.props);
      }
    }, {
      key: 'attachProps',
      value: function attachProps(nextProps) {
        var _this2 = this;

        var oldPropsAnimated = this._propsAnimated;

        // The system is best designed when setNativeProps is implemented. It is
        // able to avoid re-rendering and directly set the attributes that
        // changed. However, setNativeProps can only be implemented on leaf
        // native components. If you want to animate a composite component, you
        // need to re-render it. In this case, we have a fallback that uses
        // forceUpdate.
        var callback = function callback() {
          var didUpdate = ApplyAnimatedValues.current(_this2.refs[refName], _this2._propsAnimated.__getAnimatedValue());
          if (didUpdate === false) {
            _this2.forceUpdate();
          }
        };

        this._propsAnimated = new AnimatedProps(nextProps, callback);

        // When you call detach, it removes the element from the parent list
        // of children. If it goes to 0, then the parent also detaches itself
        // and so on.
        // An optimization is to attach the new elements and THEN detach the old
        // ones instead of detaching and THEN attaching.
        // This way the intermediate state isn't to go to 0 and trigger
        // this expensive recursive detaching to then re-attach everything on
        // the very next operation.
        oldPropsAnimated && oldPropsAnimated.__detach();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.attachProps(nextProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = this._propsAnimated.__getValue();
        var style = (0, _mapStyle2.default)(props.style);

        return (0, _rax.createElement)(OriginComponent, _extends({}, props, {
          style: style,
          ref: refName
        }));
      }
    }]);

    return AnimatedComponent;
  }(_rax.Component);

  AnimatedComponent.propTypes = {
    style: function style(props, propName, componentName) {
      if (!_rax.Component.propTypes) {
        return;
      }

      // TODO(lmr): We will probably bring this back in at some point, but maybe
      // just a subset of the proptypes... We should have a common set of props
      // that will be used for all platforms.
      //
      // for (var key in ViewStylePropTypes) {
      //   if (!Component.propTypes[key] && props[key] !== undefined) {
      //     console.error(
      //       'You are setting the style `{ ' + key + ': ... }` as a prop. You ' +
      //       'should nest it in a style object. ' +
      //       'E.g. `{ style: { ' + key + ': ... } }`'
      //     );
      //   }
      // }
    }
  };

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(3);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxImage = __webpack_require__(22);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxScrollview = __webpack_require__(34);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _mapStyle = __webpack_require__(51);

var _mapStyle2 = _interopRequireDefault(_mapStyle);

var _animated = __webpack_require__(95);

var _animated2 = _interopRequireDefault(_animated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplyAnimatedValues(instance, props) {
  (0, _rax.setNativeProps)(instance, {
    style: (0, _mapStyle2.default)(props.style)
  });
}

var injectApplyAnimatedValues = _animated2.default.inject.ApplyAnimatedValues;
injectApplyAnimatedValues(ApplyAnimatedValues);

var RequestAnimationFrame;
var CancelAnimationFrame;

if (typeof requestAnimationFrame !== 'undefined') {
  RequestAnimationFrame = function RequestAnimationFrame(cb) {
    return requestAnimationFrame(cb);
  };
  CancelAnimationFrame = function CancelAnimationFrame(id) {
    return cancelAnimationFrame(id);
  };
  // Works around a rare bug in Safari 6 where the first request is never invoked.
  requestAnimationFrame(function () {});
} else {
  var lastTime = 0;
  RequestAnimationFrame = function RequestAnimationFrame(callback) {
    var currTime = Date.now();
    var timeDelay = Math.max(0, 16 - (currTime - lastTime));
    lastTime = currTime + timeDelay;
    return setTimeout(function () {
      callback(Date.now());
    }, timeDelay);
  };

  CancelAnimationFrame = function CancelAnimationFrame(id) {
    clearTimeout(id);
  };
}

var injectRequestAnimationFrame = _animated2.default.inject.RequestAnimationFrame;
injectRequestAnimationFrame(RequestAnimationFrame);

var injectCancelAnimationFrame = _animated2.default.inject.CancelAnimationFrame;
injectCancelAnimationFrame(CancelAnimationFrame);

exports.default = _extends({}, _animated2.default, {
  View: _animated2.default.createAnimatedComponent(_raxView2.default),
  Text: _animated2.default.createAnimatedComponent(_raxText2.default),
  Image: _animated2.default.createAnimatedComponent(_raxImage2.default),
  ScrollView: _animated2.default.createAnimatedComponent(_raxScrollview2.default)
});
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(7);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInAParentLink: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      // https://www.w3.org/TR/html4/struct/links.html#h-12.2.2
      if (this.context.isInAParentLink) {
        return console.error('Nested links are illegal');
      }

      var props = this.props;
      var children = props.children;
      var nativeProps = _extends({}, props);
      var style = _extends({}, styles.initial, nativeProps.style);
      var textStyle = {
        color: style.color,
        lines: style.lines,
        fontSize: style.fontSize,
        fontStyle: style.fontStyle,
        fontWeight: style.fontWeight,
        textDecoration: style.textDecoration,
        textAlign: style.textAlign,
        fontFamily: style.fontFamily,
        textOverflow: style.textOverflow
      };

      if (nativeProps.onPress) {
        nativeProps.onClick = nativeProps.onPress;
        delete nativeProps.onPress;
      }

      var content = children;
      if (typeof children === 'string' && !this.context.isInAParentText) {
        content = (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          children
        );
      }

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'a',
          nativeProps,
          content
        );
      } else {
        return (0, _rax.createElement)(
          'a',
          _extends({}, nativeProps, { style: style }),
          content
        );
      }
    }
  }]);

  return Link;
}(_rax.Component);

Link.contextTypes = {
  isInAParentLink: _rax.PropTypes.bool,
  isInAParentText: _rax.PropTypes.bool
};
Link.childContextTypes = {
  isInAParentLink: _rax.PropTypes.bool
};


var styles = {
  initial: {
    textDecoration: 'none'
  }
};

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 99 */
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

var _raxRecyclerview = __webpack_require__(101);

var _raxRecyclerview2 = _interopRequireDefault(_raxRecyclerview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SCROLLVIEW_REF = 'scrollview';

var ListView = function (_Component) {
  _inherits(ListView, _Component);

  function ListView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.scrollTo = function (options) {
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].scrollTo(options);
      }
    }, _this.resetScroll = function () {
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].resetScroll();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          renderScrollComponent = _props.renderScrollComponent,
          renderHeader = _props.renderHeader,
          renderFooter = _props.renderFooter,
          renderRow = _props.renderRow,
          dataSource = _props.dataSource;


      var header = typeof renderHeader == 'function' ? renderHeader() : null;
      var footer = typeof renderFooter == 'function' ? renderFooter() : null;
      var body = dataSource.map(function (i, index) {
        return renderRow(i, index);
      });

      var props = _extends({}, this.props, {
        ref: SCROLLVIEW_REF,
        children: [].concat(header, body, footer),
        _autoWrapCell: true
      });

      return renderScrollComponent(props);
    }
  }]);

  return ListView;
}(_rax.Component);

ListView.propTypes = {};
ListView.defaultProps = {
  renderScrollComponent: function renderScrollComponent(props) {
    return (0, _rax.createElement)(_raxRecyclerview2.default, props);
  },
  dataSource: []
};
exports.default = ListView;
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxAnimated = __webpack_require__(97);

var _raxAnimated2 = _interopRequireDefault(_raxAnimated);

var _raxTouchable = __webpack_require__(18);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedView = _raxAnimated2.default.View;

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.fadeAnim = new _raxAnimated2.default.Value(0);
    return _this;
  }

  _createClass(Modal, [{
    key: 'animated',
    value: function animated(state, callback) {
      var visible = state.visible;

      _raxAnimated2.default.timing(this.fadeAnim, { toValue: visible === true ? 1 : 0 }).start(callback);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      var currentState = { visible: true };
      this.setState(currentState, function () {
        return _this2.animated(currentState, function () {
          return _this2.props.onShow && _this2.props.onShow(currentState);
        });
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      var currentState = { visible: false };
      this.animated(currentState, function () {
        return _this3.setState(currentState, function () {
          return _this3.props.onHide && _this3.props.onHide(currentState);
        });
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(visible) {
      if (visible) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible != this.props.visible && nextProps.visible != this.state.visible) {
        this.toggle(nextProps.visible);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        visible: this.props.visible
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animated(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          contentStyle = _props.contentStyle,
          children = _props.children;
      var visible = this.state.visible;
      // HACK: register a empty click event to fix Android click penetration problem when in mask

      return visible && (0, _rax.createElement)(
        AnimatedView,
        {
          onClick: function onClick() {
            _this4.hide();
          },
          style: [styles.mask, { opacity: this.fadeAnim }]
        },
        (0, _rax.createElement)(
          _raxTouchable2.default,
          { onPress: function onPress(e) {
              if (_universalEnv.isWeb) {
                e.stopPropagation && e.stopPropagation();
              }
            }, style: [styles.main, contentStyle] },
          children
        )
      );
    }
  }]);

  return Modal;
}(_rax.Component);

Modal.propTypes = {
  onHide: _rax.PropTypes.func,
  onShow: _rax.PropTypes.func,
  visible: _rax.PropTypes.bool
};
Modal.defaultProps = {
  visible: false
};
exports.default = Modal;


var styles = {
  mask: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width: 640,
    height: 340,
    backgroundColor: '#ffffff'
  }
};
module.exports = exports['default'];

/***/ }),
/* 101 */
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

var _raxScrollview = __webpack_require__(34);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _raxRefreshcontrol = __webpack_require__(33);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_END_REACHED_THRESHOLD = 500;

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('cell', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Cell;
}(_rax.PureComponent);

Cell.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var Header = function (_PureComponent2) {
  _inherits(Header, _PureComponent2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('header', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Header;
}(_rax.PureComponent);

Header.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var RecyclerView = function (_Component) {
  _inherits(RecyclerView, _Component);

  function RecyclerView(props) {
    _classCallCheck(this, RecyclerView);

    var _this3 = _possibleConstructorReturn(this, (RecyclerView.__proto__ || Object.getPrototypeOf(RecyclerView)).call(this, props));

    _this3.loadmoreretry = 1;

    _this3.handleScroll = function (e) {
      e.nativeEvent = {
        contentOffset: {
          // HACK: weex scroll event value is opposite of web
          x: -e.contentOffset.x,
          y: -e.contentOffset.y
        }
      };
      _this3.props.onScroll(e);
    };

    _this3.resetScroll = function () {
      if (_universalEnv.isWeex) {
        _this3.setState({
          loadmoreretry: _this3.loadmoreretry++ // for weex 0.9-
        });
        _this3.refs.list.resetLoadmore && _this3.refs.list.resetLoadmore(); // for weex 0.9+
      } else {
        _this3.refs.scrollview.resetScroll();
      }
    };

    _this3.scrollTo = function (options) {
      var x = parseInt(options.x);
      var y = parseInt(options.y);

      if (_universalEnv.isWeex) {
        var dom = __weex_require__('@weex-module/dom');
        var firstNode = (0, _rax.findDOMNode)(_this3.refs.firstNodePlaceholder);
        dom.scrollToElement(firstNode.ref, {
          offset: x || y || 0,
          animated: options && typeof options.animated !== 'undefined' ? options.animated : true
        });
      } else {
        _this3.refs.scrollview.scrollTo(options);
      }
    };

    _this3.state = {
      loadmoreretry: 0
    };
    return _this3;
  }

  _createClass(RecyclerView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInARecyclerView: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      if (_universalEnv.isWeex) {
        var children = props.children;
        if (!Array.isArray(children)) {
          children = [children];
        }

        var cells = children.map(function (child, index) {
          if (child) {
            var hasOnRefresh = child.props && typeof child.props.onRefresh == 'function';
            if (props._autoWrapCell && child.type != _raxRefreshcontrol2.default && child.type != Header && !hasOnRefresh) {
              return (0, _rax.createElement)(
                Cell,
                null,
                child
              );
            } else {
              return child;
            }
          } else {
            return (0, _rax.createElement)(Cell, null);
          }
        });

        // add firstNodePlaceholder after refreshcontrol
        var addIndex = cells[0].type == Cell || cells[0].type == Header ? 0 : 1;
        cells && cells.length && cells.splice(addIndex, 0, (0, _rax.createElement)(Cell, { ref: 'firstNodePlaceholder' }));

        return (0, _rax.createElement)(
          'list',
          _extends({}, props, {
            ref: 'list',
            onLoadmore: props.onEndReached,
            onScroll: props.onScroll ? this.handleScroll : null,
            loadmoreretry: this.state.loadmoreretry,
            loadmoreoffset: props.onEndReachedThreshold
          }),
          cells
        );
      } else {
        return (0, _rax.createElement)(_raxScrollview2.default, _extends({}, props, { ref: 'scrollview' }));
      }
    }
  }]);

  return RecyclerView;
}(_rax.Component);

RecyclerView.defaultProps = {
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD
};
RecyclerView.childContextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};


RecyclerView.Header = Header;
RecyclerView.Cell = Cell;

exports.default = RecyclerView;
module.exports = exports['default'];

/***/ }),
/* 102 */
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

var typeMap = {
  'default': 'text',
  'ascii-capable': 'text',
  'numbers-and-punctuation': 'number',
  'url': 'url',
  'number-pad': 'number',
  'phone-pad': 'tel',
  'name-phone-pad': 'text',
  'email-address': 'email',
  'decimal-pad': 'number',
  'twitter': 'text',
  'web-search': 'search',
  'numeric': 'number'
};

function getText(event) {
  var text = void 0;
  if (_universalEnv.isWeex) {
    text = event.value;
  } else {
    text = event.target.value;
  }
  return text;
}

function genEventObject(originalEvent) {
  var text = getText(originalEvent);
  return {
    nativeEvent: {
      text: text
    },
    originalEvent: originalEvent,
    value: text,
    target: originalEvent.target
  };
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (event) {
      _this.props.onInput(genEventObject(event));
    }, _this.handleChange = function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(genEventObject(event));
      }

      if (_this.props.onChangeText) {
        var text = getText(event);
        _this.props.onChangeText(text);
      }
    }, _this.handleFocus = function (event) {
      _this.props.onFocus(genEventObject(event));
    }, _this.handleBlur = function (event) {
      _this.props.onBlur(genEventObject(event));
    }, _this.focus = function () {
      _this.refs.input.focus && _this.refs.input.focus();
    }, _this.blur = function () {
      _this.refs.input.blur && _this.refs.input.blur();
    }, _this.clear = function () {
      (0, _rax.setNativeProps)(_this.refs.input, { value: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      (0, _rax.setNativeProps)(this.refs.input, { value: newProps.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          autoComplete = _props.autoComplete,
          editable = _props.editable,
          keyboardType = _props.keyboardType,
          maxNumberOfLines = _props.maxNumberOfLines,
          multiline = _props.multiline,
          numberOfLines = _props.numberOfLines,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          onChangeText = _props.onChangeText,
          onInput = _props.onInput,
          password = _props.password,
          secureTextEntry = _props.secureTextEntry,
          style = _props.style,
          value = _props.value,
          defaultValue = _props.defaultValue;


      var propsCommon = _extends({}, this.props, {
        'aria-label': accessibilityLabel,
        autoComplete: autoComplete && 'on',
        onChange: (onChange || onChangeText) && this.handleChange,
        onInput: onInput && this.handleInput,
        onBlur: onBlur && this.handleBlur,
        onFocus: onFocus && this.handleFocus,
        style: _extends({}, styles.initial, style),
        ref: 'input'
      });

      if (value) {
        delete propsCommon.defaultValue;
      } else {
        propsCommon.value = defaultValue;
      }

      if (typeof editable !== 'undefined' && !editable) {
        propsCommon.readOnly = true;
      }

      var type = typeMap[keyboardType];
      if (password || secureTextEntry) {
        type = 'password';
      }

      if (_universalEnv.isWeex) {
        // Diff with web readonly attr, `disabled` must be boolean value
        var disabled = Boolean(propsCommon.readOnly);

        if (multiline) {
          return (0, _rax.createElement)('textarea', _extends({}, propsCommon, { rows: 20, disabled: disabled }));
        } else {
          // https://github.com/alibaba/weex/blob/dev/doc/components/input.md
          return (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type, disabled: disabled }));
        }
      } else {
        var input = void 0;
        if (multiline) {
          var propsMultiline = {
            maxRows: maxNumberOfLines || numberOfLines,
            minRows: numberOfLines
          };

          input = (0, _rax.createElement)(
            'textarea',
            _extends({}, propsCommon, propsMultiline),
            propsCommon.value
          );
        } else {
          input = (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type }));
        }

        return input;
      }
    }
  }]);

  return TextInput;
}(_rax.Component);

TextInput.propTypes = {};


var styles = {
  initial: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: '#000000',
    borderWidth: 0,
    boxSizing: 'border-box',
    color: '#000000',
    padding: 0,
    paddingLeft: 24,
    fontSize: 24,
    lineHeight: 60,
    height: 60 // default height
  }
};

exports.default = TextInput;
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports) {

var _styles = {
  "app": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgb(239,239,244)"
  },
  "appHeader": {
    "backgroundColor": "rgb(34,34,34)",
    "height": 160,
    "paddingTop": "40rem",
    "paddingRight": "40rem",
    "paddingBottom": "40rem",
    "paddingLeft": "40rem"
  },
  "appBanner": {
    "textAlign": "center",
    "fontSize": 80,
    "color": "white"
  },
  "appIntro": {
    "textAlign": "center",
    "marginTop": 40,
    "fontSize": 40,
    "lineHeight": "60rem"
  },
  "listContainer": {
    "flexDirection": "row",
    "flex": 1
  },
  "modal": {
    "width": 700,
    "height": 1000,
    "borderRadius": 10
  },
  "modalTop": {
    "height": 100,
    "backgroundColor": "rgb(249,249,249)",
    "borderRadius": 10,
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "text": {
    "color": "rgb(0,122,255)"
  },
  "list_item_text": {
    "color": "rgb(0,0,0)"
  },
  "list_item_container": {
    "marginLeft": 20
  },
  "modal_top_left": {
    "marginLeft": 20
  },
  "modal_top_right": {
    "marginRight": 20
  },
  "list_item": {
    "lineHeight": "90rem",
    "justifyContent": "center",
    "height": 90,
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgb(200,199,204)"
  },
  "selected": {
    "backgroundColor": "rgb(0,122,255)"
  },
  "selected_text": {
    "color": "rgb(255,255,255)"
  },
  "image": {
    "height": 200,
    "width": 350
  },
  "submit": {
    "height": 100,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "submit_text": {
    "fontSize": 34,
    "color": "white"
  },
  "query_btn": {
    "marginTop": 45
  },
  "query_input": {
    "marginTop": 45
  },
  "show_modal_btn": {
    "width": 550,
    "borderRadius": 10,
    "borderWidth": "1px",
    "borderStyle": "solid",
    "borderColor": "rgb(142,142,147)",
    "height": 100,
    "lineHeight": "100rem",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "white"
  },
  "show_modal_text": {
    "color": "rgb(67,67,67)",
    "fontSize": 32
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 104 */
/***/ (function(module, exports) {

var _styles = {
  "common": {
    "borderRadius": 10,
    "backgroundColor": "rgb(103,103,250)"
  },
  "text": {
    "textAlign": "center",
    "color": "rgb(255,255,255)"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 105 */
/***/ (function(module, exports) {

var _styles = {
  "common": {
    "borderRadius": 10,
    "textAlign": "center",
    "color": "rgb(67,67,67)",
    "backgroundColor": "white"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ })
/******/ ])}); require("com.muxistudio.ele.main");;