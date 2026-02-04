import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const router = Router();


router.route("/register").post(registerUser); //controller to be added

export default router;