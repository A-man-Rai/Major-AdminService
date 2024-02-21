import express from "express";
import Connection from "./Database/Connection.js";
import router from "./Routes/routes.js"
import cors from "cors"
import bodyParser from "body-parser";
const app=express();

app.use(cors({
  origin: process.env.CLIENT,
  credentials: true,
}));

app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({ limit: '3mb', extended: true }));
app.use("/",router);

const PORT=process.env.PORT || 9002

Connection().then(()=>{
  app.listen(PORT,()=>{
    console.log("SERVER STARTED AT PORT "+PORT);
  });
}).catch((err)=>{
  console.log(err.message);
})

