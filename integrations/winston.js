import * as winston from "winston";
const { timestamp, combine, colorize, printf, cli, json, align } =
	winston.format;

export default function getLogger(filename) {
	const config = {
		level: process.env.LOG_LEVEL || "info",
		defaultMeta: {
			service: filename,
		},
		format: combine(
			colorize({ all: true }),
			timestamp({
				format: "YYYY-MM-DD hh:mm:ss.SSS A",
			}),
			align(),
			printf(
				(info) =>
					`[${info.timestamp}] [${info.service}] ${info.level}: ${info.message}`
			)
		),
		transports: [new winston.transports.Console()],
	};

	const logger = winston.createLogger(config);

	return logger;
}
