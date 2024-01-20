import express from 'express';
import * as PIXI from 'pixi.js';
import {renderFile} from 'ejs';

import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();

// set ejs as our view engine
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

const port = 3000;
const directory = __dirname;

app.get('/', (req, res) => {
  res.render('./index', {pixi: PIXI});
});

app.all('/views/sample.png', (req, res) => {
  console.log(__dirname + req.path);
  res.sendFile(__dirname + req.path);
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
