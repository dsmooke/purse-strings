const mongoose = require("mongoose");
const db = require("../models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
});

const transactionSeed = [
  {
    name: "Paycheck",
    value: 3200,
    date: Date.now,
  },
];
