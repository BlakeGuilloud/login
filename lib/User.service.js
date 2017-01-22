'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.getByUsername = exports.register = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// export function hashPassword(user) {
//   /* eslint no-param-reassign:0 */
//   user.password = bcrypt.hashSync(user.password, salt);
//   return user;
// }

var register = exports.register = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
    var newUser;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newUser = void 0;
            _context.prev = 1;

            data.password = _bcryptjs2.default.hashSync(data.password, salt);
            _context.next = 5;
            return _User2.default.create(data);

          case 5:
            newUser = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 11:
            return _context.abrupt('return', _promise2.default.resolve(newUser));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function register(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getByUsername = exports.getByUsername = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(username) {
    var newUser;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newUser = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _User2.default.findOne({ username: username });

          case 4:
            newUser = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(newUser));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getByUsername(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getUser = exports.getUser = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
    var user;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('id', id);
            user = void 0;
            _context3.prev = 2;
            _context3.next = 5;
            return _User2.default.findById(id);

          case 5:
            user = _context3.sent;
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](2);
            return _context3.abrupt('return', _promise2.default.reject(_context3.t0));

          case 11:
            if (user) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt('return', _promise2.default.reject(new NotFoundError('No user with id ' + id + ' found')));

          case 13:
            return _context3.abrupt('return', _promise2.default.resolve(user));

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 8]]);
  }));

  return function getUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _User = require('./User.model');

var _User2 = _interopRequireDefault(_User);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var salt = _bcryptjs2.default.genSaltSync(10);