// const express = require("express"),
//   bodyParser = require("body-parser"),
//   http = require("http"),
//   path = require("path"),
//   mongoose = require("mongoose"),
//   fs = require("fs");

// const globalConf = require("./global.config");

// const app = express();
// console.log('globalConf.serverPort', globalConf.serverPort);

// app.listen(globalConf.serverPort, (err) => {
//   if (err) console.log(err);
//   console.log("server run");
// });

// const server = http.createServer(app);

// app.use(express.json());
// app.use(bodyParser.json());

// const dbStart = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://sarnor:42141366@cl.wswvr.mongodb.net/sarnor_t?retryWrites=true&w=majority"
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

// //
// app.use(
//   express.static(path.join(__dirname, `./${globalConf.buildFolder}/`), {
//     index: "none",
//   })
// );

// app.get("/*", (req, res) => {

//   fs.readFile(
//     path.resolve(__dirname, `./${globalConf.buildFolder}/`, "./index.html"),
//     "utf8",
//     (err, content) => {
//       if (err) {
//         throw err;
//         console.log("err");
//       }
//       res.send(content);
//     }
//   );
// });


const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  async = require('async'),
  os = require('os');

const app = express();
app.listen(5500);
const server = http.createServer(app);

app.use(bodyParser.json());

var subApp = express();

app.use('/', subApp);

subApp.use(
  express.static(path.join(__dirname, './publicBuild/'), {
    index: 'none'
  })
);



subApp.get('/*', function (req, res) {
  var mainHtmlPath = path.resolve(__dirname, './publicBuild', './index.html');
  fs.readFile(mainHtmlPath, 'utf8', function (err, html) {
    res.send(html);
  });
});

subApp.use(
  express.static(path.join(__dirname, './adminBuild/'), {
    index: 'none'
  })
);


subApp.get('/*', function (req, res) {
  var mainHtmlPath = path.resolve(__dirname, './adminBuild', './index.html');
  fs.readFile(mainHtmlPath, 'utf8', function (err, html) {
    res.send(html);
  });
});