"use strict";

const os = require("os");
const process = require("process");
const { default: mongoose } = require("mongoose");

const OVERLOAD_CHECK_SECONDS = 5000;

const countConnect = () => {
  const numConnect = mongoose.connections.length;
  console.log(`Number of connections: ${numConnect}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUse = process.memoryUsage().rss;
    const maxConnections = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUse / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
    }
  }, OVERLOAD_CHECK_SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
