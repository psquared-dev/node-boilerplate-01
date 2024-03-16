import BaseRepository from "./index.js";
import UserModel from "../models/user.model.js";

class UserRepository extends BaseRepository {
	constructor() {
		super(UserModel);
	}

	async exists(data) {
		try {
			const { email, password } = data;
			const user = await this.model.findOne({
				where: { email: email, password: password },
			});

			return user;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default UserRepository;
