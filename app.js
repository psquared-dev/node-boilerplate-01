import express, { json, urlencoded } from "express";
import { sequelize } from "./integrations/datastore.js";

class Microservice {
	constructor() {
		this.app = express();
		this.app.use(json());
		this.app.use(urlencoded({ extended: true }));
	}

	addRouter(path, router) {
		this.app.use(path, router);
	}

	addMiddleware(middleware) {
		this.app.use(middleware);
	}

	listen(port) {
		this.app.listen(port, (error) => {
			console.log(`Server running on port ${port}`);
		});
	}

	async initDb() {
		try {
			await sequelize.authenticate();
			await sequelize.sync();
			console.log("Database connected");
		} catch (error) {
			console.log(error);
		}
	}

	async start(port) {
		try {
			if (process.env.NODE_ENV === "test") {
				console.log("Envionment switched");
			} else if (process.env.NODE_ENV === "prod") {
				console.log("Envionment switched");
			} else if (process.env.NODE_ENV === "dev") {
				console.log(first);
			}

			await this.initDb();
			this.listen(port);
		} catch (error) {
			console.log("error");
		}
	}
}

export default new Microservice();
