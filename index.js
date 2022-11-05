const express = require("express");
const ethers = require("ethers");

const app = express();

app.get("/:id", (req, res) => {
  const id = req.params["id"];
  console.log(id);
  res.json({ status: 200, content: id });
});

app.listen(5000, () => console.log("Server listening at port 3000"));
