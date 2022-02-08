const Address = require("../models/address");

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