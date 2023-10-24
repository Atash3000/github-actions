const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); // Use the cors middleware
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from server !!!",
  });
});

const PORT = 4000;

app.listen(PORT, () => console.log("Server has started at port + " + PORT));
