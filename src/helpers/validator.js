const { check, validationResult } = require("express-validator");

exports.requiredFieldValidationMW = (fieldName) =>
  check(fieldName)
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage(`The ${fieldName} is required`);



exports.emailFieldValidationMW = (fieldName, optional = true) =>
  check(fieldName)
    .optional({ checkFalsy: optional })
    .isEmail()
    .withMessage("The email address is not valid!");

exports.passwordFieldValidationMW = (fieldName, minLength) =>
  check(fieldName)
    .isLength({ min: minLength })
    .withMessage(
      `Invalid password length, The length should be at least ${minLength} or more`
    );

exports.booleanFieldValidationMW = (fieldName) =>
  check(fieldName).isBoolean().withMessage(`The ${fieldName} is invalid`);

exports.validationResultMW = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  } else next();
};
