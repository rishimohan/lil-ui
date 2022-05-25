"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = (_ref) => {
  let {
    className,
    onClick,
    style,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: className ? className : "lil-button",
    style: style ? style : null
  }, children);
};

var _default = Button;
exports.default = _default;