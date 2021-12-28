import 'isomorphic-fetch';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import path from 'path';

import App from './src/App';
import { InitialDataContext } from './src/context/InitialDataContext'

global.window = {};

const app = express();
app.use(express.static('./build', { index: false }));

const articles = [
  { title: "Article 1", author: 'Bob', description: "Setting the display property of an element only changes how the element is displayed" },
  { title: "Article 2", author: 'Betty', description: "The following example displays <span> elements as block elements:" },
  { title: "Article 3", author: 'Frank', description: "Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way" },
  { title: "Article 4", author: 'Shaun', description: "Is commonly used with JavaScript to hide and show elements without deleting and recreating them" },
]

app.get('/api/articles', (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
})

app.get('/*', async(req, res) => {
  const sheet = new ServerStyleSheet();

  const contextObj = { _isServerSide: true, _requests: [], _data: {} };

  renderToString(
    <InitialDataContext.Provider value={contextObj}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  );

  await Promise.all(contextObj._requests);
  contextObj._isServerSide = false;
  delete contextObj._requests;

  const reactApp = renderToString(
    sheet.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err);

    return res.send(
      data.replace('<div id="root"></div>', `<script>window.preloadedData = ${JSON.stringify(contextObj)};</script><div id="root">${reactApp}</div>`)
      .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log('Server is running from port 8080');
});
