const app = require("./src/app");

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Web server eCommerce start with port: ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Web server eCommerce...");
  });
});
