// const express = require('express')
// const next = require('next')
import next from 'next';
import express from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8000;
app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      // res.send('My express server');
      const actualPage = '/';
      app.render(req, res, actualPage);
    });
    server.get('/projects', (req, res) => {
      const actualPage = '/projects';
      app.render(req, res, actualPage);
    });
    server.get('/about', (req, res) => {
      const actualPage = '/about';
      app.render(req, res, actualPage);
    });
    server.get('/blog', (req, res) => {
      const actualPage = '/blog';
      app.render(req, res, actualPage);
    });
    server.get('/contact', (req, res) => {
      const actualPage = '/contact';
      app.render(req, res, actualPage);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
