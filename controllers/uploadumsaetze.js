var fs = require('fs');
var mongoose = require('mongoose');
    Umsatz = mongoose.model('umsaetze');
    
module.exports.add = function(req, res) {
	/* 
	 * 	buchungsid:Number,
	name: String,
	tag: String,
	datum: Date,
	zeit:String,
	betrag:Number,
	positionen: [{text:String, betrag:Number}]
	* */
	fs.readFile('umsatzdaten','utf8',function(err,contents) {
		var lines = contents.split(/\n/);
		lines.forEach(line => {
			if (line != null && line.length > 0) {
				var items = line.split('#');
				var buchungsid = parseFloat(items[0]);
				var name = items[1];
				var tag = items[2];
				var datum = new Date(getDate(items[3]));
				var uhrzeit = items[4];
				var betrag = parseFloat(items[5]);
				var positionen = getPositionen(items[6]);
				var data = {buchungsid : buchungsid, name:name,datum:datum,tag:tag,zeit:uhrzeit,betrag:betrag, positionen:positionen};
				Umsatz.create(data, function(err) {
					if (err) 
						console.log('error: ' + err + ' ' + items[0] + ' ' + items[5]);
				});
			}
		});
		res.end();
	});
}
function getDate(date) {
	var tokens = date.split('-');
	return `20${tokens[2]}-${tokens[1]}-${tokens[0]}`;
}
function getPositionen(s) {
	var result = [];
	var pos = s.split(';');
	pos.forEach(p => {
		var tok = p.split(':');
		result.push({text:tok[0], betrag:parseFloat(tok[1])});
	});
	return result;
}
