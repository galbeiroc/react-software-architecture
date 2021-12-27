import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import path from 'path';
import App from './src/App';

const app = express();
app.use(express.static('./build', { index: false }));

app.get('/*', (req, res) => {
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err);
    
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
      .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log('Server is running from port 8080');
});
