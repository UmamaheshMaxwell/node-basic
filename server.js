var express = require("express");
var mongoose = require("mongoose");
var Contact = require("./model/contact");
var bodyParser = require("body-parser");
var app = express();

var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/mydata", function(){
	console.log("Successfully Connected to Database !!!")
})

router.get("/", function(req, res){
	res.send({message: "Hello Bengaluru !!!"})
});

router.get("/contact", function(req, res){
	Contact.getContact(function(err, contact){
		if(err){
			throw err;
		}
		console.log(contact);
		res.json(contact);
	})

});

router.post("/contact", function(req, res){
	var body = req.body;
	console.log(body);
	Contact.addContact(body, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	})

})

router.put("/contact/:id", function(req, res){
	var id = req.params.id;
	var body = req.body;

	Contact.updateContact(id, body, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	})

})

router.delete("/contact/:id", function(req, res){
	var id = req.params.id;
	Contact.removeContact(id, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	})
})

app.use("/", router);

var PORT = process.env.PORT || 3000;

app.listen(PORT , function(){
	console.log("Server is listening at port " + PORT);
})