import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export default class UserService {
	constructor() {
		// this.userRepository = new UserRepository();
	}

	async getLoggedInUserDetails(userId) {
		try {
			const user = await UserModel.findOne({
				where: {
					id: userId,
				},
			});
			return user;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async login(credentials) {
		const { email, password } = credentials;

		try {
			const user = await UserModel.findOne({
				where: { email: email, password: password },
			});

			if (!user) {
				throw new Error("User not found");
			}

			const payload = user.dataValues;
			const secretKey = "key";
			const options = {
				expiresIn: "24h",
			};

			const token = jwt.sign(payload, secretKey, options);

			return { token };
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async createUser(data) {
		try {
			const savedUser = await UserModel.create(data);
			return savedUser.dataValues;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async deleteUser(userId) {
		return UserModel.destroy({
			where: {
				id: userId,
			},
		});
	}

	// async findAll() {
	// 	return await this.userRepository.findAll();
	// }

	// async findById(id) {
	// 	return await this.userRepository.findById(id);
	// }

	// async deleteById(id) {
	// 	return await this.userRepository.deleteById(id);
	// }
}
