const express = require("express");
const PORT = 2002;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    status: true,
    message: "â welcome to devops webHooks library - auth 05 - ð±âð",
    data: {
      essaie: 2,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server is runingon ðhttp://127.0.0.1:${PORT}`);
});
