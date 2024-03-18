import service from "./app.js";
import getLogger from "./integrations/winston.js";
import apiRouter from "./routes/index.js";

// validate incoming data - joi
// add auth
// add logging
// load test
// extend sequilize model
// extend string class
// global error handling
// hash password
// pagination

// issues
// no need to extend winston as class
// it is a four 4 layered approach - controller - service - new layer - repository
// no need to have a BaseModel table - this is extra table
//

const logger = getLogger("server.js");

const port = process.env.port || 3000;

service.addRouter("/", apiRouter);

service.start(port).catch((err) => {
	logger.err(err.message);
});
