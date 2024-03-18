import getLogger from "../integrations/winston.js";

const logger = getLogger("validateBody.js");

const validateBody = (schema) => async (req, res, next) => {
	try {
		const { error, value } = await schema.validateAsync(req.body);
		// logger.info(error);

		if (error) {
			const errorMessage = error.details
				.map((details) => details.message)
				.join(", ");

			throw new Error(errorMessage);
		}

		next();
	} catch (error) {
		logger.info(error.message);
		res.status(422).json({ error: true, message: error.message, data: null });
	}
};

export default validateBody;
