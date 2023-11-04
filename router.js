import { Router } from "express";
import * as rh from "./request-handlers.js";

const router = Router();

// router.route("/").get(rh.setData);
router.route("/").post(rh.setData);
router.route("/get-data").get(rh.getData);
router.route("/get-data2").get(rh.getData2);
router.route("/update-data").put(rh.updateData);
router.route("/delete-data").delete(rh.deleteData);

router.route("/register").post(rh.register)
router.route("/login").post(rh.login);

export function users(req ,res) {
    try{
         let id= req.params;
         console.log(id);
         console.log(req.query);
         res.status(200).send("userdata")
    }catch  (error) {
      console.log(error);
      res.json("ERROR")
    }
}

router.route("/users/:id").get(middleware,rh.users)

export default router;



function middleware(req, res, next) {
    let id = req.params.id;
    if(id% 2== 0) {
       next();
    } else {
       res.json("Not passed");
    }
 }