import service from "./app.js";
import apiRouter from "./routes/index.js";

// validate incoming data - joi
// add auth
// add logging
// load test

const port = process.env.port || 3000;

service.addRouter("/", apiRouter);

service.start(port).catch((err) => {
	console.log(err);
});
