const {
	oneOf,
	body,
	validationResult,
	validator,
	check,
} = require("express-validator");
​
const isValid = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(JSON.stringify(errors.array()));
​
		let errorMessages = [];
		errors.array().map((error) => {
			console.log(error);
			if (error.nestedErrors) {
				error.nestedErrors.map((_error) => {
					errorMessages.push({
						msg: `${_error.msg} for field ${_error.param}`,
					});
				});
			} else {
				errorMessages.push({
					msg: `${error.msg} for field ${error.param}`,
				});
			}
		});
		return res.status(400).json({ success: false, errors: errorMessages });
	}
	next();
};
​
exports.validateEmail = [
	oneOf([
		body("email").isEmail().withMessage("Invalid Email").normalizeEmail(),
		body("user_email").isEmail().withMessage("Invalid Email").normalizeEmail(),
	]),
	isValid,
];

exports.validatePassword = [
	body("password")
		.isLength({ min: 8, max: 32 })
		.withMessage("Password length must between 8 and 32")
		.matches(/[0-9]/)
		.withMessage("Password must contain atleast one digit")
		.matches(/[A-Z]/)
		.withMessage("Password must contain atleast one uppercase letter")
		.matches(/[a-z]/)
		.withMessage("Password must contain atleast one lowercase letter")
		.matches(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)
		.withMessage("Password must contain atleast one special character"),
	isValid,
];
exports.validateFullName = [
	oneOf([
		body("name")
			.trim()
			.notEmpty()
			.isString()
			.matches(/^[a-zA-Z\s']+$/),
		body("first_name")
			.trim()
			.notEmpty()
			.isString()
			.matches(/^[a-zA-Z\s']+$/),
	]),
	isValid,
];

exports.validateDate = [
	body("date")
		.trim()
		.isDate()
		.withMessage('Must be a valid date')
		.matches(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/),
	isValid
];

exports.validateTime = [
	body("time")
		.trim()
		.isTime()
		.withMessage('Must be a valid time')
		.matches(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/),
	isValid
];