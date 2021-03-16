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

db.Budget.deleteMany({})
  .then(() => db.Budget.collection.insertMany(transactionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
