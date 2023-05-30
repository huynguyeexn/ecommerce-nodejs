"use strict";

const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

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
          .connect(process.env.MONGODB_URI)
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
