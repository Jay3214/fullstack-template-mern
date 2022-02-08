import express from "express";

const app = express();
const PORT = 8000;

app.get("*", (req, res) => {
  return res.send("Hello World!");
});

app.listen(PORT, () =>
  console.log("Listening on port: http://localhost:" + PORT)
);
