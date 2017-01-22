import { SendSuccess, SendError } from 'tael';
import Shuttle from './shuttle';
import * as UserService from './User.service.js';

export function register(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(UserService.register, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function login(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(UserService.getUser, 'requester.userId'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
