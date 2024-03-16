import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "springstudent",
	password: "springstudent",
	database: "node_simple",
});
