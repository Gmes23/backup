webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");







var _jsxFileName = "/Users/gm/Desktop/workFolder/client/components/UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // const UserInfo = [
//     {link: "/", name: "Program"},
//     {link: "/info", name: "Info"},
//     {link: "/booking", name: "Booking"},
//     {link: "/FAQ", name: "FAQ"},
//     {link: "/contact", name: "Contact"},
//   ]
//   const UILink = ({link, name}) => 
//     <LI_list>
//       <Alink to={link} onClick={this.toggleExpandedMenu}> {name} </Alink> <Span />
//     </LI_list>
//   const UILinkContainer = () => routes.map(UILink)

var UserForm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UserForm, _React$Component);

  var _super = _createSuper(UserForm);

  function UserForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserForm);

    _this = _super.call(this, props);
    _this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      company_name: '',
      effective_date: '',
      status: 'pending',
      primary_al: false,
      primary_gl: false,
      primary_el: false,
      isDeleted: false
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleFormSubmit = _this.handleFormSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserForm, [{
    key: "onChange",
    value: function onChange(e) {
      var booleanTargetNames = ["primary_al", "primary_gl", "primary_el"];
      var target = e.target; // If this a boolean target (checkbox toggle) return it's "checked" property
      // Else it's a regular input so we should read the "value" property

      var value = booleanTargetNames.includes(target.name) ? target.checked : target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
      console.log(this.state, 'state of user form');
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault(); // This uses RegExr to get the current date 

      var today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
      this.setState({
        effective_date: today
      });
      var data = this.state;
      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch('http://localhost:4000/user', requestOptions).then(function (response) {
        return response.json();
      })["catch"](function (error) {
        return console.error('Error:', error);
      }).then(function (response) {
        return console.log('succes', response);
      });
      console.log(data, "handleFormSubmit");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: this.handleFormSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        controlId: "formGridName",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 37
        }
      }, "First Name"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
        type: "name",
        placeholder: "First Name",
        name: "first_name",
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 37
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        controlId: "formGridLastName",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 37
        }
      }, "Last Name"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
        type: "lastName",
        placeholder: "Last name",
        name: "last_name",
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        controlId: "formGridEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 37
        }
      }, "Email"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
        type: "email",
        placeholder: "Enter email",
        name: "email_address",
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 37
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        controlId: "formGridPhoneNumber",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 37
        }
      }, "Phone Number"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
        type: "phone_number",
        placeholder: "Phone number",
        name: "phone_number",
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        controlId: "formGridAddress1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 33
        }
      }, "Company Name"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
        placeholder: "Company Name",
        name: "company_name",
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 33
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        id: "formGridCheckbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Check, {
        type: "checkbox",
        label: "Auto Liability",
        name: "primary_al",
        checked: this.state.primary_al,
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 33
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        id: "formGridCheckbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Check, {
        type: "checkbox",
        label: "General Liability",
        name: "primary_gl",
        checked: this.state.primary_gl,
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 33
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
        id: "formGridCheckbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Check, {
        type: "checkbox",
        label: "Employee Liability",
        name: "primary_el",
        checked: this.state.primary_el,
        onChange: this.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 33
        }
      })), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, "Submit")))));
    }
  }]);

  return UserForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ })

})
//# sourceMappingURL=index.js.2d0e4e877735bbab7995.hot-update.js.map