const express = require("express");
const router = express.Router();
const user = require("../controllers/userAuthentication");
const validationMiddleware = require("../middlewares/validationMiddlewares");

// user Login
router.post("/auth/login", ...validationMiddleware.login, user.userLogin);
// register user
router.post(
  "/auth/signup",
  ...validationMiddleware.register,
  user.userRegister
);
// verify email after registering user
router.post(
  "/auth/verify/email",
  ...validationMiddleware.verifyEmail,
  user.verifyEmail
);

module.exports = router;
