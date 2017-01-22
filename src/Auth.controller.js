import { SendSuccess, SendError } from 'tael';
import Fluyt from 'fluyt';
import * as UserService from './User.service.js';

export function register(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(UserService.register, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function login(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(UserService.getUser, 'requester.userId'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
