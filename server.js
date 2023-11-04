import express from "express";
import router from "./router.js";
import morgan from  "morgan";
import dotenv from "dotenv";
import conn from "./connection.js";


dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api",morgan("combined"))
// server.use(middleware)

server.use("/", express.static("./static"));

server.use("/api", router);
conn().then(()=>{

server.listen(process.env.PORT, (error) => {
   if(error) {
      console.log(error);
      return;
   }
   console.log(`Server started on port 3000:${process.env.PORT}`);
});

})
.catch(error=>{
   console.log(error);
})

// function middleware(req, res, next) {
//    let query = req.query;
//    if(query.pass == "true") {
//       next();
//    } else {
//       res.json("Not passed");
//    }
// }