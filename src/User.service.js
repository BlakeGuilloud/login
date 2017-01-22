import User from './User.model';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

export async function register(data) {
  let newUser;

  try {
    data.password = bcrypt.hashSync(data.password, salt);

    newUser = await User.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser);
}

export async function getByUsername(username) {
  let newUser;

  try {
    newUser = await User.findOne({ username });
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser)
}

export async function getUser(id) {
  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!user) return Promise.reject(new NotFoundError(`No user with id ${id} found`));

  return Promise.resolve(user);
}
