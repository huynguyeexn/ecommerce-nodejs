const app = require("./src/app");

const PORT = 8000;

const server = app.listen(PORT, () => {
  console.log(`Web server eCommerce start with port: ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Web server eCommerce...");
  });
});
