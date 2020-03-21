"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InputText = require("../inputtext/InputText");

var _classnames = _interopRequireDefault(require("classnames"));

var _RowCheckbox = require("./RowCheckbox");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HeaderCell =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderCell, _Component);

  function HeaderCell(props) {
    var _this;

    _classCallCheck(this, HeaderCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderCell).call(this, props));
    _this.state = {
      badgeVisible: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFilterInput = _this.onFilterInput.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onResizerMouseDown = _this.onResizerMouseDown.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCell, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.columnProps.sortable) {
        var targetNode = event.target;

        if (_DomHandler.default.hasClass(targetNode, 'p-sortable-column') || _DomHandler.default.hasClass(targetNode, 'p-column-title') || _DomHandler.default.hasClass(targetNode, 'p-sortable-column-icon') || _DomHandler.default.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          this.props.onSort({
            originalEvent: event,
            sortField: this.props.columnProps.sortField || this.props.columnProps.field,
            sortFunction: this.props.columnProps.sortFunction,
            sortable: this.props.columnProps.sortable
          });

          _DomHandler.default.clearSelection();
        }
      }
    }
  }, {
    key: "onFilterInput",
    value: function onFilterInput(e) {
      var _this2 = this;

      if (this.props.columnProps.filter && this.props.onFilter) {
        if (this.filterTimeout) {
          clearTimeout(this.filterTimeout);
        }

        var filterValue = e.target.value;
        this.filterTimeout = setTimeout(function () {
          _this2.props.onFilter({
            value: filterValue,
            field: _this2.props.columnProps.filterField || _this2.props.columnProps.field,
            matchMode: _this2.props.columnProps.filterMatchMode
          });

          _this2.filterTimeout = null;
        }, this.filterDelay);
      }
    }
  }, {
    key: "onResizerMouseDown",
    value: function onResizerMouseDown(event) {
      if (this.props.resizableColumns && this.props.onColumnResizeStart) {
        this.props.onColumnResizeStart({
          originalEvent: event,
          columnEl: event.target.parentElement,
          columnProps: this.props.columnProps
        });
        event.preventDefault();
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.props.reorderableColumns && this.props.columnProps.reorderable) {
        if (event.target.nodeName !== 'INPUT') this.el.draggable = true;else if (event.target.nodeName === 'INPUT') this.el.draggable = false;
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && event.currentTarget === this.el) {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "getMultiSortMetaDataIndex",
    value: function getMultiSortMetaDataIndex() {
      if (this.props.multiSortMeta) {
        var columnSortField = this.props.columnProps.field || this.props.columnProps.sortField;

        for (var i = 0; i < this.props.multiSortMeta.length; i++) {
          if (this.props.multiSortMeta[i].field === columnSortField) {
            return i;
          }
        }
      }

      return -1;
    }
  }, {
    key: "getAriaSort",
    value: function getAriaSort(sorted, sortOrder) {
      if (this.props.columnProps.sortable) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up' : 'pi-sort';
        if (sortIcon === 'pi-sort-down') return 'descending';else if (sortIcon === 'pi-sort-up') return 'ascending';else return 'none';
      } else {
        return null;
      }
    }
  }, {
    key: "renderSortIcon",
    value: function renderSortIcon(sorted, sortOrder) {
      if (this.props.columnProps.sortable) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up' : 'pi-sort';
        var sortIconClassName = (0, _classnames.default)('p-sortable-column-icon pi pi-fw', sortIcon);
        return _react.default.createElement("span", {
          className: sortIconClassName
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSortBadge",
    value: function renderSortBadge(sortMetaDataIndex) {
      if (sortMetaDataIndex !== -1 && this.state.badgeVisible) {
        return _react.default.createElement("span", {
          className: "p-sortable-column-badge"
        }, sortMetaDataIndex + 1);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var filterElement, headerCheckbox;

      if (this.props.columnProps.filter && this.props.renderOptions.renderFilter) {
        var filterField = this.props.columnProps.filterField || this.props.columnProps.field;
        filterElement = this.props.columnProps.filterElement || _react.default.createElement(_InputText.InputText, {
          onInput: this.onFilterInput,
          type: this.props.columnProps.filterType,
          defaultValue: this.props.filters && this.props.filters[filterField] ? this.props.filters[filterField].value : null,
          className: "p-column-filter",
          placeholder: this.props.columnProps.filterPlaceholder,
          maxLength: this.props.columnProps.filterMaxLength
        });
      }

      if (this.props.columnProps.selectionMode === 'multiple' && this.props.renderOptions.renderHeaderCheckbox) {
        headerCheckbox = _react.default.createElement(_RowCheckbox.RowCheckbox, {
          onClick: this.props.onHeaderCheckboxClick,
          selected: this.props.headerCheckboxSelected,
          disabled: !this.props.value || this.props.value.length === 0
        });
      }

      if (this.props.renderOptions.filterOnly) {
        return _react.default.createElement("th", {
          ref: function ref(el) {
            return _this3.el = el;
          },
          className: (0, _classnames.default)('p-filter-column', this.props.columnProps.filterHeaderClassName),
          style: this.props.columnProps.filterHeaderStyle || this.props.columnProps.style,
          colSpan: this.props.columnProps.colSpan,
          rowSpan: this.props.columnProps.rowSpan
        }, filterElement, headerCheckbox);
      } else {
        var sortMetaDataIndex = this.getMultiSortMetaDataIndex();
        var multiSortMetaData = sortMetaDataIndex !== -1 ? this.props.multiSortMeta[sortMetaDataIndex] : null;
        var singleSorted = this.props.sortField !== null ? this.props.columnProps.field === this.props.sortField || this.props.columnProps.sortField === this.props.sortField : false;
        var multipleSorted = multiSortMetaData !== null;
        var sortOrder = 0;

        var resizer = this.props.resizableColumns && _react.default.createElement("span", {
          className: "p-column-resizer p-clickable",
          onMouseDown: this.onResizerMouseDown
        });

        if (singleSorted) sortOrder = this.props.sortOrder;else if (multipleSorted) sortOrder = multiSortMetaData.order;
        var sorted = this.props.columnProps.sortable && (singleSorted || multipleSorted);
        var className = (0, _classnames.default)({
          'p-sortable-column': this.props.columnProps.sortable,
          'p-highlight': sorted,
          'p-resizable-column': this.props.resizableColumns,
          'p-selection-column': this.props.columnProps.selectionMode
        }, this.props.columnProps.headerClassName || this.props.columnProps.className);
        var sortIconElement = this.renderSortIcon(sorted, sortOrder);
        var ariaSortData = this.getAriaSort(sorted, sortOrder);
        var sortBadge = this.renderSortBadge(sortMetaDataIndex);
        return _react.default.createElement("th", {
          ref: function ref(el) {
            return _this3.el = el;
          },
          tabIndex: this.props.columnProps.sortable ? this.props.columnProps.tabIndex : null,
          className: className,
          style: this.props.columnProps.headerStyle || this.props.columnProps.style,
          onClick: this.onClick,
          onMouseDown: this.onMouseDown,
          onKeyDown: this.onKeyDown,
          colSpan: this.props.columnProps.colSpan,
          rowSpan: this.props.columnProps.rowSpan,
          "aria-sort": ariaSortData,
          onDragStart: this.props.onDragStart,
          onDragOver: this.props.onDragOver,
          onDragLeave: this.props.onDragLeave,
          onDrop: this.props.onDrop
        }, resizer, _react.default.createElement("span", {
          className: "p-column-title"
        }, this.props.columnProps.header), sortIconElement, sortBadge, filterElement, headerCheckbox);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        badgeVisible: nextProps.multiSortMeta && nextProps.multiSortMeta.length > 1
      };
    }
  }]);

  return HeaderCell;
}(_react.Component);

exports.HeaderCell = HeaderCell;