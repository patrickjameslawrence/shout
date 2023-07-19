const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { db } = require('./config/db.config');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

var usersColl = db.collection("users");
var postsColl = db.collection("posts");

app.post(process.env.baseAPIURL + "users", (req, res) => {
	const { username, password } = req.body;
	usersColl.findOne({ username }).then((user) => {
		if(user) {
			if(user.password === password) {
				res.statusCode = 200;
				let data = {};
				data.id = user.id;
				data.username = user.username;
				res.json(data);
			} else {
				res.statusCode = 401;
				res.send();
			}
		} else {
			res.statusCode = 401;
			res.send();
		}
	});
});

app.get(process.env.baseAPIURL + "posts", (req, res) => {
	postsColl.find().toArray().then((posts) => {
		res.json(posts);
	});
});

app.post(process.env.baseAPIURL + "posts", (req, res) => {
    postsColl.insertOne(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
