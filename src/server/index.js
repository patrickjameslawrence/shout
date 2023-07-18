const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.URI);

let conn;
try {
    conn = client.connect();
} catch (e) {
    console.error(e);
}

var db = client.db(process.env.db);
var postsColl = db.collection("posts");

app.get("/api/v1/posts", (req, res) => {
	postsColl.find().toArray().then((findRes) => {
		res.json(findRes);
	});
});

app.post("/api/v1/posts", (req, res) => {
    postsColl.insertOne(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
