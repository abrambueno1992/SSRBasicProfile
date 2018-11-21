import express from 'express';
import session from 'express-session';
import mongoSessionStore from 'connect-mongo';
import next from 'next';
import mongoose from 'mongoose';

import auth from './google';
import api from './api';
import routesWithSlug from './routesWithSlug';
import { setupGithub as github } from './github';

import logger from './logs';

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = process.env.MONGO_URL_TEST;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(
  MONGO_URL,
  options,
);

const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const URL_MAP = {
  '/about': '/public/about',
  '/blog': '/public/blog',
  '/contact': '/public/contact',
  '/projects': '/public/projects',
};

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    const MongoStore = mongoSessionStore(session);
    const sess = {
      name: 'builderbook.sid',
      secret: 'HD2w.)q*VqRT4/#NK2M/,E^B)}FED5fWU!dKe[wk',
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60, // expires in 14 days
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
      },
    };

    server.use(session(sess));

    auth({ server, ROOT_URL });
    github({ server });
    // api(server);
    // server.use()
    routesWithSlug({ server, app });
    // server.get('/', (req, res) => {
    //   // res.send('My express server');
    //   const actualPage = '/';
    //   app.render(req, res, actualPage);
    // });
    // server.get('/projects', (req, res) => {
    //   const actualPage = '/projects';
    //   app.render(req, res, actualPage);
    // });
    // server.get('/about', (req, res) => {
    //   const actualPage = '/about';
    //   app.render(req, res, actualPage);
    // });
    // server.get('/blog', (req, res) => {
    //   const actualPage = '/blog';
    //   app.render(req, res, actualPage);
    // });
    // server.get('/contact', (req, res) => {
    //   const actualPage = '/contact';
    //   app.render(req, res, actualPage);
    // });

    // server.get('*', (req, res) => handle(req, res));
    server.get('*', (req, res) => {
      const url = URL_MAP[req.path];
      if (url) {
        app.render(req, res, url);
      } else {
        handle(req, res);
      }
    });

    // server.listen(port, (err) => {
    //   if (err) throw err;
    //   console.log(`> Ready on http://localhost:${port}`);
    // });
    server.listen(port, (err) => {
      if (err) throw err;
      logger.info(`> Ready on ${ROOT_URL}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
