const express = require('express');
const app = express();
const helmet = require('helmet');
const csrf = require('csurf');
const config = require('./config/config.js');
const DBconfig = require('./db/connection');
const Validator = require('./middlewere/validation');
const User = require('./controller/user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressValidator = require('express-validator');

const port = 3000;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));
app.use(expressValidator());
app.use(csrf());

app.get('/cookie', User.register);

app.listen(port, () => {
    console.log(`App Started on port: ${port}`);
});
