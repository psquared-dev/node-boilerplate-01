import { DataTypes } from "sequelize";
import { BaseModel } from "./index.js";
import { sequelize } from "../integrations/datastore.js";
import UserModel from "./user.model.js";

export default class TodoModel extends BaseModel {}

TodoModel.init(
	{
		text: {
			type: DataTypes.STRING,
		},

		completed: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "Todo",
		tableName: "todos",
	}
);

TodoModel.belongsTo(UserModel, {
	foreignKey: "userId",
	onDelete: null,
	onUpdate: "cascade",
});
