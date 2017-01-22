import express from 'express';
import * as authController from './Auth.controller';
import * as authenticator from './authenticator';

const router = express.Router();

router.post('/login', authenticator.authenticate, authController.login);
router.post('/register', authController.register);

module.exports = router;
