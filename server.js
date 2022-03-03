const express = require("express");
const app = express();
const connectDb=require("./config/conectDb")
connectDb()
const user=require("./routes/user")
app.use(express.json())
app.use("/user",user)
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing on port ${PORT}`)
);
