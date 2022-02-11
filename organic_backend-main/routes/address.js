const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {getAllAddress,addAddress} = require("../controllers/address");

router.post("/addAddress",[
    check("name", "min 3 char").isLength({min:3}),
  ], addAddress);
router.get("/getAllAddress", getAllAddress);

module.exports = router;
