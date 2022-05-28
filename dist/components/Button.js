"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = _ref => {
  let {
    className,
    onClick,
    style,
    children
  } = _ref;

  const Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-family: inherit, -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    padding: 7px 14px;\n    border-radius: 8px;\n    background: #fff;\n    color: #777;\n    border: 1px solid #d4d4d4;\n    font-size: 0.9rem;\n    box-shadow: 0 1px 3px rgba(17, 17, 17, 0.05);\n    cursor: default;\n\n    &:hover {\n      border-color: #b5b5b5;\n    }\n\n    &:focus, &:active {\n      transition: transform 0.1s ease-in-out;\n      transform: scale(0.97);\n    }\n  "])));

  return /*#__PURE__*/_react.default.createElement(Button, {
    onClick: onClick,
    className: className ? className : "lil-button",
    style: style ? style : null
  }, children);
};

var _default = Button;
exports.default = _default;