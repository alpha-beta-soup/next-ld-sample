const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sampleData = require('./data/sample.js')

const idExists = (id) => {
  return !!sampleData.filter(f => f.id === id)[0]
}

app.prepare().then(() => {
  const server = express();

  server.get('/feature/:id', (req, res) => {
    const actualPage = '/feature';
    const queryParams = { id: req.params.id };
    if (!idExists(queryParams.id)) {
      res.statusCode = 404
      if (req.accepts('html')) {
        app.render(req, res, '/404', {url: req.url})
        return
      } else if (req.accepts('json')) {
        res.send({ error: 'Not Found' })
        return
      } else if (req.accepts('text')) {
        res.type('txt').send('Not Found')
      } else {
        res.statusCode = 406
        res.send()
      }
    }
    app.render(req, res, actualPage, queryParams);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
