import { Router } from "express";
import userRoutes from "./user.router.js";
import todoRoutes from "./todo.router.js";

const router = Router();

router.get("/health-check", (req, res) => {
	res.sendStatus(200);
});

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

export default router;
