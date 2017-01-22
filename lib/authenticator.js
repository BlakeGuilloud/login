'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = isAuthenticated;
exports.authenticate = authenticate;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _tael = require('tael');

var tael = _interopRequireWildcard(_tael);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  tael.SendError(res)(new tael.UnauthorizedError('Unauthorized. Please log in'));
  return null;
}

function authenticate(req, res, next) {
  _passport2.default.authenticate('local', function (err, user) {
    console.log('err', err);
    console.log('user', user);
    if (err) {
      next(err); // will generate a 500 error
    }

    if (!user) {
      return tael.SendError(res)(new tael.UnauthorizedError('Username and password did not match'));
    }
    req.login(user, function (error) {
      if (error) {
        next(error);
      }
      next();
    });
  })(req, res, next);
}