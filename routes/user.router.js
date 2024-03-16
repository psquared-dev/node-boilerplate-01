import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authenticate from "../middleware/authenticate.js";

const user = new UserController();

const router = Router();

router.get("/me", authenticate, user.getLoggedInUserDetailsHandler);

router.post("/", user.createUserHandler);

router.post("/login", user.loginHandler);

router.delete("/:id", user.deleteUserHandler);

export default router;
