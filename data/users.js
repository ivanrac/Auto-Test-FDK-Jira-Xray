// data/users.js
import 'dotenv/config';

export const validUser = {
  login_email: process.env.FDK_LOGIN_USERNAME,
  login_password: process.env.FDK_LOGIN_PASSWORD
};
