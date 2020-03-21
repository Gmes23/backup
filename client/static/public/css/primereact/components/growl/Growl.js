"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Growl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _GrowlMessage = require("./GrowlMessage");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messageIdx = 0;

var Growl =
/*#__PURE__*/
function (_Component) {
  _inherits(Growl, _Component);

  function Growl(props) {
    var _this;

    _classCallCheck(this, Growl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Growl).call(this, props));
    _this.state = {
      messages: []
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Growl, [{
    key: "show",
    value: function show(value) {
      if (value) {
        var newMessages;

        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            value[i].id = messageIdx++;
            newMessages = [].concat(_toConsumableArray(this.state.messages), _toConsumableArray(value));
          }
        } else {
          value.id = messageIdx++;
          newMessages = this.state.messages ? [].concat(_toConsumableArray(this.state.messages), [value]) : [value];
        }

        this.setState({
          messages: newMessages
        });
        this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        messages: []
      });
    }
  }, {
    key: "onClose",
    value: function onClose(message) {
      var newMessages = this.state.messages.filter(function (msg) {
        return msg.id !== message.id;
      });
      this.setState({
        messages: newMessages
      });

      if (this.props.onRemove) {
        this.props.onRemove(message);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-growl p-component p-growl-' + this.props.position, this.props.className);
      return _react.default.createElement("div", {
        ref: function ref(el) {
          _this2.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.state.messages.map(function (message) {
        return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          key: message.id,
          classNames: "p-growl",
          timeout: {
            enter: 250,
            exit: 500
          }
        }, _react.default.createElement(_GrowlMessage.GrowlMessage, {
          message: message,
          onClick: _this2.props.onClick,
          onClose: _this2.onClose
        }));
      })));
    }
  }]);

  return Growl;
}(_react.Component);

exports.Growl = Growl;

_defineProperty(Growl, "defaultProps", {
  id: null,
  className: null,
  style: null,
  baseZIndex: 0,
  position: 'topright',
  onClick: null,
  onRemove: null
});

_defineProperty(Growl, "propTypes", {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  baseZIndex: _propTypes.default.number,
  position: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onRemove: _propTypes.default.func
});