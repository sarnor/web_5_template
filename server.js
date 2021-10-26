const express = require('express'),
  //bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose'),
  fs = require('fs');

const globalConf = require('./global.config');

const app = express();

app.listen(globalConf.serverPort);

const server = http.createServer(app);

app.use(express.json());

const dbStart = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin54iosd85h7rjnF75HH54:54iosd85h7rjnF75HH54@admin.swmgk.mongodb.net/webpack-template?retryWrites=true&w=majority')
  } catch (err) {
    console.log(err)
  }
};

//
app.use(
  express.static(path.join(__dirname, `./${globalConf.buildFolder}/`), {
    index: 'none',
  })
);


app.get('/*', (req, res) => {
  dbStart(),
    fs.readFile(
      path.resolve(__dirname, `./${globalConf.buildFolder}/`, './index.html'),
      'utf8',
      (err, content) => {
        if (err) {
          throw err;
          console.log('err');
        }
        res.send(content);
      }
    );
});