'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _User = require('./User.service');

var userService = _interopRequireWildcard(_User);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_passport2.default.use(new _passportLocal2.default(function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(username, password, done) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return userService.getByUsername(username);

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', done(null, false, { message: 'Incorrect username.' }));

          case 6:
            if (!(_bcryptjs2.default.compareSync(password, user.password) === true)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', done(null, { userId: user.id }));

          case 8:
            return _context.abrupt('return', done(null, false, { message: 'Incorrect username 2.' }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', done(_context.t0));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 11]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));

_passport2.default.serializeUser(function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(userInfo, done) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            done(null, userInfo);

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());

_passport2.default.deserializeUser(function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userInfo, done) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            done(null, userInfo);

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());

module.exports = _passport2.default;