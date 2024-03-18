import Joi from "joi";

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(5).max(20).required(),
}).options({ abortEarly: false });

export default loginSchema;
