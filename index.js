const express = require('express')
const app = express();
let router = express.Router();
require("dotenv").config();
const initApiRoutes = require("./routes/api");


router.get("/", (req, res) => {
  res.write("Running on 4000");
  res.end();
})
app.use("/", router);
initApiRoutes(app);

app.listen(process.env.PORT, () =>{
  console.log(`Node-js Server running on port ${process.env.PORT}`)
}  
);

