const mongoose = require('mongoose');
const { logger } = require('../config/logModule');

mongoose.Promise = global.Promise;

const connect = () => {
    mongoose.connect(
        process.env.DATABASE_URL,
        { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
        err => {
            if (err) {
                logger.error(err);
                return;
            }

            if (process.env.NODE_ENV !== 'test') {
                logger.info('[LOG=DB] Connected to Mongo Database');
            }
        }
    );
};

connect();

module.exports = { mongoose, connect };