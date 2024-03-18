import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import getLogger from "../integrations/winston.js";

const logger = getLogger("autenticate.js");

const authenticate = async (req, res, next) => {
	try {
		const { authorization } = req.headers;
		const token = authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, "key");

		const user = await UserModel.findOne({
			where: {
				id: decodedToken.id,
			},
		});

		req.user = user.dataValues;
		req.token = token;

		next();
	} catch (error) {
		logger.error(`Autenticaion failed`);
		res
			.status(401)
			.json({ error: true, message: "Please authenticate", data: null });
	}
};

export default authenticate;
