import passport from 'passport';
import * as tael from 'tael';

export function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  tael.SendError(res)(new tael.UnauthorizedError('Unauthorized. Please log in'));
  return null;
}

export function authenticate(req, res, next) {
  passport.authenticate('local', (err, user) => {
    if (err) {
      next(err);
    }

    if (!user) {
      return tael.SendError(res)(new tael.UnauthorizedError('Username and password did not match'));
    }
    req.login(user, (error) => {
      if (error) {
        next(error);
      }
      next();
    });
  })(req, res, next);
}
