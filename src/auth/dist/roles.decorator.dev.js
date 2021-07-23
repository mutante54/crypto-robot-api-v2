"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Roles = void 0;

var _common = require("@nestjs/common");

var Roles = function Roles() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return (0, _common.SetMetadata)('roles', roles);
};

exports.Roles = Roles;