//https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

var express = require("express");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

var tasks = []

app.get("/", (req, res, next) => {
    res.json("{ 'message': 'Tasks server online'}");
});

app.post("/tasks", jsonParser, (req, res, next) => {
    req.body.id = tasks.length + 1;
    tasks.push(req.body);
    res.send("OK");
});

app.get("/tasks", (req, res, next) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log("Servidor HTTP funcionando");
});

app.get("/tasks/:id",(req, res) => {
    const fou = tasks.find(element => element.id ==req.params.id);
    res.send(fou);
    console.log(fou)
});
app.delete("/tasks/:id",(req, res)=> {
    const found = tasks.find(element => element.id ==req.params.id);
    console.log(found+'found');
    tasks.splice(found,1);
    res.send('eliminado');
});