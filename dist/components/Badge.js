"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Badge = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "badge ".concat(!props.value ? 'badge--none' : '', " ")
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.value || 0));
};

var _default = Badge;
exports.default = _default;