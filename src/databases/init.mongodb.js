"use strict";

const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
const mongodbConStr =
  "mongodb+srv://dbuser:memeuOFhPSbfzemG@cluster0.viupnqn.mongodb.net/?retryWrites=true&w=majority";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    switch (type) {
      case "mongodb":
        if (true) {
          mongoose.set("debug", true);
          mongoose.set("debug", { color: true });
        }

        mongoose
          .connect(mongodbConStr)
          .then((_) => {
            console.log("Connect Mongodb Success");
            countConnect();
          })
          .catch((err) => console.error("Connect Mongodb Error", err));
        break;
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceDB = Database.getInstance();

module.exports = instanceDB;
