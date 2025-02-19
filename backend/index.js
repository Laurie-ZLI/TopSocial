const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const app = express();

//Increase the request body size limit for JSON payloads to 5MB.
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use(cors()); //cors policy to allow all origins
app.use(express.json()); //body parser

app.use("/api", router);

const port = 80;
app.listen(port, function () {
  console.log(`Server is running on port http://localhost:80`);
});
