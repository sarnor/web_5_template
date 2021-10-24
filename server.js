const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  fs = require('fs');

const globalConf = require('./global.config');

const app = express();

app.listen(globalConf.serverPort);

const server = http.createServer(app);
app.use(bodyParser.json());

app.use(
  express.static(path.join(__dirname, `./${globalConf.buildFolder}/`), {
    index: 'none',
  })
);


app.get('/*', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, `./${globalConf.buildFolder}/`, './index.html'),
    'utf8',
    (err, content) => {
      if (err) {
        console.log('err');
      }
      res.send(content);
    }
  );
});