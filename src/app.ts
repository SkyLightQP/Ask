import log4js from "log4js";
const logger = log4js.getLogger();

import express from "express";
const app = express();

import { Builder, Nuxt } from "nuxt";
import nuxtConfig from '../nuxt.config';

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

app.use(nuxt.render);

const port = 3000;
app.listen(port, () => logger.info(`Http server listening on ${port}`));