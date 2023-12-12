const express =require("express");
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userRouter = require("./routes/userRoute")
const port = 3000;

app.use("/",userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });