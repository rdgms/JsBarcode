var url = require('url');
var http = require('http');
var JsBarcode = require('../index');


http.createServer(function(req, res) {

    JsBarcode ({
        content:"AVDD",
        width:	2,
        height:	100,
        quite: 10,
        format:	"CODE128"
    }, function(err, png){
        debugger;
        res.writeHead(200, { 'Content-Type':'image/png' });
    	res.end(png, 'binary');
    });

}).listen(3030);
