const mongoose = require("mongoose");
const db = require("../models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
});

const transactionSeed = [
  {
    name: "Test",
    value: 1000,
    date: Date.now,
  },
];
