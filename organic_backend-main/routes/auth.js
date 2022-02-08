var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signin , signup , signout , isSignedIn , isAuthenticated, addAddress } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("firstname", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);

router.get("/signout", signout);

router.post(
  "/addAddress",
  [
    check("name","name should be at least 3 char").isLength({ min: 3 }),
  ],
  addAddress
);

module.exports = router;