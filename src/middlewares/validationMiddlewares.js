const validation = require("../helpers/validator");


const userRegister = [
  validation.requiredFieldValidationMW("fname"),
  validation.requiredFieldValidationMW("lname"),
  validation.requiredFieldValidationMW("email"),
  validation.requiredFieldValidationMW("password"),
  validation.emailFieldValidationMW("email"),
];

const userLogin = [
  validation.requiredFieldValidationMW("email"),
  validation.emailFieldValidationMW("email"),
  validation.requiredFieldValidationMW("password"),
];

const verifyEmail = [validation.requiredFieldValidationMW("token")];

const middlewares = {
  register: [userRegister, validation.validationResultMW],
  verifyEmail: [verifyEmail, validation.validationResultMW],
  login: [userLogin, validation.validationResultMW],
};

module.exports = middlewares;
