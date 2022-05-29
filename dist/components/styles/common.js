"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = exports.BackdropDiv = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Close icon
const CloseIcon = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #d4d4d4;\n  cursor: default;\n  margin-left: auto;\n  font-size: 1.2rem;\n  width: 20px;\n  text-align: center;\n\n  &:hover {\n    color: #999;\n  }\n"]))); // Pane and modal backdrop


exports.CloseIcon = CloseIcon;

const BackdropDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n"])));

exports.BackdropDiv = BackdropDiv;