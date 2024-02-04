import express from "express";
import connect from "./db.js";
const app = express();
const port = 5000;

connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`✅ Server Connected ${port}`);
});
