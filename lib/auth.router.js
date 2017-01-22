'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Auth = require('./Auth.controller');

var authController = _interopRequireWildcard(_Auth);

var _authenticator = require('./authenticator');

var authenticator = _interopRequireWildcard(_authenticator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/login', authenticator.authenticate, authController.login);
router.post('/register', authController.register);

module.exports = router;