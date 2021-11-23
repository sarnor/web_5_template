const express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	fs = require('fs');

const globalConf = require('./global.config');

const app = express();

app.listen(globalConf.serverPort, (err) => {
	if (err) console.log(err);
	console.log('server run');
});

const server = http.createServer(app);

app.use(express.json());
app.use(bodyParser.json());

const dbStart = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://admin123:admin123@admin.k8w8p.mongodb.net/admin?retryWrites=true&w=majority'
		);
	} catch (err) {
		console.log(err);
	}
};

//
app.use(
	express.static(path.join(__dirname, `./${globalConf.buildFolder}/`), {
		index: 'none'
	})
);

app.get('/*', (req, res) => {
	dbStart(),
		fs.readFile(path.resolve(__dirname, `./${globalConf.buildFolder}/`, './index.html'), 'utf8', (err, content) => {
			if (err) {
				throw err;
				console.log('err');
			}
			res.send(content);
		});
});
