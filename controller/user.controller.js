import UserModel from "../models/user.model.js";
import UserService from "../service/user.service.js";

export default class UserController {
	constructor() {
		this.userService = new UserService();
	}

	getLoggedInUserDetailsHandler = async (req, res) => {
		try {
			const userDetails = await this.userService.getLoggedInUserDetails(
				req.user.id
			);
			res.json({ error: false, message: null, data: userDetails });
		} catch (error) {
			res.json({ error: true, message: error.message, data: null });
		}
	};

	loginHandler = async (req, res) => {
		try {
			const data = await this.userService.login(req.body);
			res.json({ error: false, message: null, data: data });
		} catch (error) {
			res.json({ error: true, message: "Invalid username/password", data: null });
		}
	};

	createUserHandler = async (req, res) => {
		try {
			const savedUser = await this.userService.createUser(req.body);
			res.status(201).json({
				error: false,
				message: null,
				data: savedUser,
			});
		} catch (error) {
			res.status(201).json({
				error: true,
				message: "Unable create user",
				data: null,
			});
		}
	};

	deleteUserHandler = async (req, res) => {
		const userId = req.params.id;

		try {
			await this.userService.deleteUser(userId);
			res.sendStatus(200);
		} catch (error) {
			res.json({
				error: true,
				message: error.message,
				data: null,
			});
		}
	};
}
