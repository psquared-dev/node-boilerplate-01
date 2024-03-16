import { DataTypes } from "sequelize";
import { BaseModel } from "./index.js";
import { sequelize } from "../integrations/datastore.js";

export default class UserModel extends BaseModel {}

UserModel.init(
	{
		firstName: {
			type: DataTypes.STRING,
		},

		lastName: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "User",
		tableName: "users",
	}
);
