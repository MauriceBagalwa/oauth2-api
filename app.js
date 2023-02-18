const express = require("express");
const PORT = 2002;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    status: true,
    message: "✌ welcome to devops webHooks library - 25 - 🐱‍🚀",
    data: {
      essaie: 1,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server is runingon 🚀http://127.0.0.1:${PORT}`);
});
