const express = require("express");
const PORT = 2001;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ status: true, message: "welcome to devops webHooks 🐱‍🚀" });
});

app.listen(PORT, () => {
  console.log(`server is runingon 🚀http://127.0.0.1:${PORT}`);
});
