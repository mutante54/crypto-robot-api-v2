"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function Contact(opts) {
  _classCallCheck(this, Contact);

  this.id = '';
  this.name = '';
  this.document = '';
  this.username = '';
  Object.assign(this, opts);
};

exports.Contact = Contact;