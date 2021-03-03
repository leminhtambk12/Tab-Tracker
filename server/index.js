const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
//MiddleWare
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
//Routes
app.get("/api", (req, res) => {
    res.send("hello");
});
//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));