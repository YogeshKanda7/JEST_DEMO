const winston = require('winston');

winston.remove(winston.transports.File);     // remove the default options

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './logs/test-logs.log',
      level: 'info'
    }),
    new winston.transports.File({
      filename: './logs/errors.log',
      level: 'error'
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: './logs/exceptions.log'
    })
  ],
  exitOnError: false
});