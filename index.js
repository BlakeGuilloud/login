const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./lib/passport.config');
const authRoutes = require('./lib/auth.router');

const db = process.env.MONGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

mongoose.connect(db);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: 'keyboard cat',
}));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(port, () => console.log('app listening on port: ', port));
