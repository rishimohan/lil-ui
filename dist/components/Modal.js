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

const ChildrenDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #666;\n  padding: 12px 16px;\n"])));

const ChildrenEmptyDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 10px 16px;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.2;\n"])));

const TitleWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px 16px;\n  border-bottom: 1px solid #ededed;\n  display: flex;\n  align-items: center;\n  justify-content: between;\n"])));

const ModalWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: fixed;\n  inset: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));

const ModalDialog = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #666;\n  border: 1px solid #ededed;\n  width: ", ";\n  border-radius: 12px;\n  position: relative;\n  z-index: 10;\n  background: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n"])), props => props.modalWidth || "500px");

const Modal = _ref => {
  let {
    modalWidth,
    titleComponent,
    hideBackdrop,
    backdropComponent,
    show,
    title,
    onClose,
    children
  } = _ref;

  const RenderChildren = () => {
    if (children) {
      return /*#__PURE__*/_react.default.createElement(ChildrenDiv, null, children);
    }

    return /*#__PURE__*/_react.default.createElement(ChildrenEmptyDiv, null, "...");
  };

  const RenderTitle = () => {
    if (titleComponent) {
      return titleComponent;
    }

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
      onClick: onClose,
      style: {
        opacity: hideBackdrop ? 0 : 1
      }
    });
  };

  if (show) {
    return /*#__PURE__*/_react.default.createElement(ModalWrapper, null, /*#__PURE__*/_react.default.createElement(RenderBackdrop, null), /*#__PURE__*/_react.default.createElement(ModalDialog, {
      modalWidth: modalWidth
    }, /*#__PURE__*/_react.default.createElement(RenderTitle, null), /*#__PURE__*/_react.default.createElement(RenderChildren, null)));
  }

  return "";
};

var _default = Modal;
exports.default = _default;