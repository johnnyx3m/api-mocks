var express = require("express");
var path = require("path");
var cors = require("cors");

const app =  express();

app.use(cors())

app.all("**/mocks/:key/index.json", (req, res)=>{
	res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key , "./index.json"));
});

app.listen(3030, (err)=>{
    console.log("app running on port ", 3030);
});