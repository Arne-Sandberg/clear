var mongoose = require('mongoose');

var umsatzSchema = mongoose.Schema({
	buchungsid:Number,
	name: String,
	tag: String,
	datum: Date,
	zeit:String,
	betrag:Number,
	positionen: [{text:String, betrag:Number}]
});

var Umsatz = module.exports = mongoose.model("umsaetze",umsatzSchema,'umsaetze');
