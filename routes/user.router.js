import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authenticate from "../middleware/authenticate.js";
import validateBody from "../middleware/validateBody.js";
import loginSchema from "../validations/login.schema.js";

const user = new UserController();

const router = Router();

router.get("/me", authenticate, user.getLoggedInUserDetailsHandler);

router.post("/", user.createUserHandler);

router.post("/login", validateBody(loginSchema), user.loginHandler);

router.delete("/:id", user.deleteUserHandler);

export default router;
