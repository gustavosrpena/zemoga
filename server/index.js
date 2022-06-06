// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});