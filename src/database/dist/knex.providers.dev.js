"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knexConnectionFactory = exports.knexProvider = exports.KNEX_CONNECTION = exports.KNEX_OPTIONS = void 0;

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var KNEX_OPTIONS = 'KNEX_OPTIONS';
exports.KNEX_OPTIONS = KNEX_OPTIONS;
var KNEX_CONNECTION = 'KNEX_CONNECTION';
exports.KNEX_CONNECTION = KNEX_CONNECTION;

var knexProvider = function knexProvider(options) {
  return {
    provide: KNEX_OPTIONS,
    useValue: options
  };
};

exports.knexProvider = knexProvider;
var knexConnectionFactory = {
  provide: KNEX_CONNECTION,
  useFactory: function useFactory(options) {
    return regeneratorRuntime.async(function useFactory$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _knex["default"])(options));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  inject: [KNEX_OPTIONS]
};
exports.knexConnectionFactory = knexConnectionFactory;