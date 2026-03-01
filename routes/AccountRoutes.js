import { Router } from "express";
import { CreateAccount, LoginAccount } from "../controllers/AccountController.js";

const router = Router();


router.post("/register", CreateAccount);
router.post("/login", LoginAccount)


export default router
