const express = require("express");
const router = express.Router();

const { getAllAddress} = require("../controllers/address");

router.get("/getAllAddress",getAllAddress)
module.exports = router;
