import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import * as userService from './User.service';

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await userService.getByUsername(username);

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (bcrypt.compareSync(password, user.password) === true) {
      return done(null, { userId: user.id });
    }
    return done(null, false, { message: 'Incorrect username 2.' });
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser(async (userInfo, done) => {
  done(null, userInfo);
});

passport.deserializeUser(async (userInfo, done) => {
  done(null, userInfo);
});

module.exports = passport;
