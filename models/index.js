import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../integrations/datastore.js";

export class BaseModel extends Model {}

BaseModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		createdAt: {
			type: DataTypes.DATE,
			field: "created_at",
		},

		updatedAt: {
			type: DataTypes.DATE,
			field: "updated_at",
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "BaseModel",
	}
);
