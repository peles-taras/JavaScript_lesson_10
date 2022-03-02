var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.get("/", function (request, response) {
    console.log('Server started!');
});

server.get("/userGet", function (request, response) {
    var obg = request.query;
    if (obg.age < 1 || obg.age > 100) {
        console.log('Error. Wrong Age data');
        response.send('Error. Wrong Age data');
    } else {
        console.log(request.query);
        console.log(obg.lName += '.validatedByGet');
        console.log(obg.fName += '.validatedByGet');
        console.log(obg.age += '.validatedByGet');
        console.log(obg.address += '.validatedByGet');
        response.send('Data :' + JSON.stringify(obg));
        console.log('Data is loaded GET method');
    }
});

server.post("/userPost", function (request, response) {
    var obg = request.body;
    if (obg.age < 1 || obg.age > 100) {
        console.log('Error. Wrong Age data');
        response.send('Error. Wrong Age data');
    } else {
        console.log(request.body);
        console.log(obg.lName += '.validatedByPOST');
        console.log(obg.fName += '.validatedByPOST');
        console.log(obg.age += '.validatedByPOST');
        console.log(obg.address += '.validatedByPOST');
        response.send('Data :' + JSON.stringify(obg));
        console.log('Data is loaded POST method');
    }
});
server.listen(3000);
