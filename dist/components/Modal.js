"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = (_ref) => {
  let {
    modalWidth,
    titleComponent,
    backdropComponent,
    show,
    title,
    onClose,
    children
  } = _ref;

  const RenderChildren = () => {
    if (children) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          color: "#666",
          padding: "10px 16px"
        }
      }, children);
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: "5px 8px`",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.2"
      }
    }, "...");
  };

  const RenderTitle = () => {
    if (titleComponent) {
      return titleComponent;
    }

    if (title) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          padding: "10px 16px",
          borderBottom: "1px solid #ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/_react.default.createElement("di", null, title), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          color: "#555",
          cursor: "pointer",
          opacity: "0.4"
        },
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

    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%"
      },
      onClick: onClose
    });
  };

  return show ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "fixed",
      inset: "0",
      zIndex: "10",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(RenderBackdrop, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#666",
      border: "1px solid #ededed",
      width: modalWidth || "500px",
      borderRadius: "12px",
      position: "relative",
      zIndex: "10",
      backgroundColor: "#fff",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.02)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react.default.createElement(RenderTitle, null), /*#__PURE__*/_react.default.createElement(RenderChildren, null))) : "";
};

var _default = Modal;
exports.default = _default;