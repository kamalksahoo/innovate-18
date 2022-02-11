const Address = require("../models/address");
const { validationResult } = require("express-validator");

exports.addAddress = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array(),
    });
  }
  const address = new Address(req.body);
  address.save((err, address) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save address in DB",
      });
    }
    res.json({
      id: address._id,
      name: address.name,
      addresstype: address.addresstype,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2,
      landmark: address.landmark,
      pincode: address.pincode,
      district: address.district,
      state: address.state,
    });
  });
};

exports.getAllAddress = (req, res) => {
  Address.find((err, address) => {
    if (err) {
      return res.status(400).json({
        error: "Addresss not found in db",
      });
    }
    return res.json({ address });
  });
};