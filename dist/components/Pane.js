"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pane = _ref => {
  let {
    show,
    title,
    position,
    onClose,
    children
  } = _ref;

  const RenderChildren = () => {
    if (children) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          color: "#666",
          overflow: "auto",
          height: "calc(100vh - 39px)"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          padding: "8px 14px 16px 14px"
        }
      }, children));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.4",
        height: "100%"
      }
    }, "...");
  };

  const RenderTitle = () => {
    if (title) {
      return /*#__PURE__*/_react.default.createElement("div", null, title);
    }

    return "";
  };

  const RenderBackdrop = () => {
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
      alignItems: "flex-start",
      justifyContent: position === "left" ? "start" : "end"
    }
  }, /*#__PURE__*/_react.default.createElement(RenderBackdrop, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#666",
      border: "1px solid #ededed",
      maxWidth: "500px",
      width: "100%",
      height: "100vh",
      position: "relative",
      zIndex: "10",
      backgroundColor: "#fff",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.02)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "10px 14px",
      borderBottom: "1px solid #ededed",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement(RenderTitle, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#555",
      cursor: "pointer",
      opacity: "0.4"
    },
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react.default.createElement(RenderChildren, null))) : "";
};

var _default = Pane;
exports.default = _default;