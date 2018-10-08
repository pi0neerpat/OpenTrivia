var mongoose = require("mongoose");

var User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  walletId: {
    type: String,
    required: true
  },
  ethId: {
    type: String,
    required: true
  }
});

module.exports = { User };
