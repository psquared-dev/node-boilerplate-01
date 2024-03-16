import jwt from "jsonwebtoken";
import UserRepository from "../repository/user.repo.js";

const authenticate = async (req, res, next) => {
	console.log("auth");
	try {
		const { authorization } = req.headers;
		const token = authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, "key");
		const userRepository = new UserRepository();

		const user = await userRepository.findById(decodedToken.id);

		req.token = token;
		req.user = user.dataValues;

		next();
	} catch (error) {
		res
			.status(401)
			.json({ error: true, message: "Please authenticate", data: null });
	}
};

export default authenticate;
