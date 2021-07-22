"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAccount = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserAccount = function UserAccount(opts) {
  _classCallCheck(this, UserAccount);

  this.id = '';
  this.name = '';
  this.document = '';
  this.username = '';
  Object.assign(this, opts);
};

exports.UserAccount = UserAccount;