const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const route = require("./routes/admin");
const cors=require('cors');

const router = express.Router();
const generalController = require("./controller/generalController");
app.get("/images/:path?", generalController.index);
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/admin", route);

app.listen(port, () => {
    console.log(`app is listening ${port}`);
});
console.log();