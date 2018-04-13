var uploadumsaetze = require('./uploadumsaetze');
var multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'umsatz-files')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

module.exports = function(app) {


	app.get('/uploadumsaetze', function(req, res){
	   res.render('uploadumsaetze');
	});
	
	app.post('/uploadumsaetze', upload.single('umsatz-file'),function(req, res) {
		var name = req.file.originalname;
		var newname =req.file.filename;
		res.send(name + ' wurde gespeichert als ' + newname);
		
	});
	
}
