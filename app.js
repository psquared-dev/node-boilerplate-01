import express, { json, urlencoded } from "express";
import { sequelize } from "./integrations/datastore.js";
import getLogger from "./integrations/winston.js";

const logger = getLogger("app.js");

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
			logger.info(`Server running on port ${port}`);
		});
	}

	async initDb() {
		try {
			await sequelize.authenticate();
			await sequelize.sync();
			logger.info("Database connected.");
		} catch (error) {
			logger.error(error.message);
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
			logger.error("Error starting application.");
		}
	}
}

export default new Microservice();
