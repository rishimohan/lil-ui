"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _common = require("./styles/common");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Pane = _ref => {
  let {
    show,
    title,
    titleComponent,
    backdropComponent,
    paneWidth,
    hideBackdrop,
    position,
    onClose,
    children
  } = _ref;

  const RenderChildren = () => {
    if (children) {
      const ChildrenDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        color: #666;\n        overflow: auto;\n        height: calc(100vh - 39px);\n        padding: 8px 14px 16px 14px;\n      "])));

      return /*#__PURE__*/_react.default.createElement(ChildrenDiv, null, children);
    }

    const ChildrenEmptyDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: #666;\n      padding: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      opacity: 0.4;\n      height: 100%;\n    "])));

    return /*#__PURE__*/_react.default.createElement(ChildrenEmptyDiv, null, "...");
  };

  const RenderTitle = () => {
    if (titleComponent) {
      return titleComponent;
    }

    const TitleWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding: 10px 16px;\n      border-bottom: 1px solid #ededed;\n      display: flex;\n      align-items: center;\n      justify-content: between;\n    "])));

    if (title) {
      return /*#__PURE__*/_react.default.createElement(TitleWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, title), /*#__PURE__*/_react.default.createElement(_common.CloseIcon, {
        onClick: onClose
      }, "\xD7"));
    }

    return "";
  };

  const RenderBackdrop = () => {
    if (backdropComponent) {
      return /*#__PURE__*/_react.default.createElement("div", {
        onClick: onClose
      }, backdropComponent);
    }

    return /*#__PURE__*/_react.default.createElement(_common.BackdropDiv, {
      style: {
        opacity: hideBackdrop ? 0 : 1
      },
      onClick: onClose
    });
  };

  if (show) {
    const PaneWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      position: fixed;\n      inset: 0;\n      z-index: 10;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: start;\n      justify-content: ", ";\n    "])), () => position === "left" ? "start" : "end");

    const PaneDialog = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      color: #666;\n      border-left: 1px solid #ededed;\n      width: ", ";\n      height: 100vh;\n      position: relative;\n      z-index: 10;\n      background: #fff;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n      overflow: hidden;\n    "])), () => paneWidth || "500px");

    return /*#__PURE__*/_react.default.createElement(PaneWrapper, null, /*#__PURE__*/_react.default.createElement(RenderBackdrop, null), /*#__PURE__*/_react.default.createElement(PaneDialog, null, /*#__PURE__*/_react.default.createElement(RenderTitle, null), /*#__PURE__*/_react.default.createElement(RenderChildren, null)));
  }

  return "";
};

var _default = Pane;
exports.default = _default;