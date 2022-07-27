const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    console.log("running")
    server.get('/', (req, res) => {
      const actualPage = '/'
      app.render(req, res, actualPage)
    })
    server.get('/projects', (req, res) => {
        const actualPage = '/projects'
        app.render(req, res, actualPage)
      })
      server.get('/about', (req, res) => {
        const actualPage = '/about'
        app.render(req, res, actualPage)
      })
      server.get('/blog', (req, res) => {
        const actualPage = '/blog'
        app.render(req, res, actualPage)
      })
      server.get('/contact', (req, res) => {
        const actualPage = '/contact'
        app.render(req, res, actualPage)
      })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })