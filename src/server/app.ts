import log4js from 'log4js';
import express from 'express';
import { Builder, Nuxt } from "nuxt";
import nuxtConfig from '../../nuxt.config';
import api from './routes/api';
import auth from './routes/auth';
import logout from './routes/logout';

const logger = log4js.getLogger();
const app = express();

if (process.env.NODE_ENV === 'production') {
    logger.level = 'ALL';
} else if (process.env.NODE_ENV === 'development') {
    logger.level = 'DEBUG';
    nuxtConfig.dev = true;
}

const nuxt = new Nuxt(nuxtConfig);

if (nuxtConfig.dev) {
    new Builder(nuxt).build();
}

app.use('/question', api.router);
app.use('/login', auth.router);
app.use('/logout', logout.router);
app.use(nuxt.render);

const port = 3000;
app.listen(port, () => logger.info(`Http server listening on ${port}`));

export {
    express,
    logger
};