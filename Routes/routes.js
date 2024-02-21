import express from "express";
import LoginAdmin from "../Callbacks/LoginAdmin.js";
import RegisterAdmin from "../Callbacks/RegisterAdmin.js";
import approved from "../Callbacks/approved.js";
import getApprovedApplications from "../Callbacks/getApprovedApplications.js";
const router = express.Router();

router.post("/register",RegisterAdmin); //register admin

router.post("/login",LoginAdmin); //login admin

router.post("/approve",approved); //save the approved application  

router.get("/approve",getApprovedApplications); //get all approved application

export default router;
