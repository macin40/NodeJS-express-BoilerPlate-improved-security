const Utility = require('../utility/response');
const Constant = require('../constant/contants');
const register = (req, res, next) => {

    console.log(req.token);
    let errors;
    req.check('name', 'Enter a valid Name.').notEmpty().isString();
    req.check('email', 'Enter a valid email address.').isEmail();
    req.check('password', 'Password cannot be empty').notEmpty();
    errors = req.validationErrors();


    if (errors) {
        Utility.response(res, {}, errors, Constant.SUCCESS);
    } else {
        next();
    }
};

module.exports = {
    register
};