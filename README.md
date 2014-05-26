Introduction
----
JsBarcode is a simple way to create different types of 1d barcodes.  
The plugin uses Html5Canvas to generate draw the barcodes

#### This is the list of supported barcodes:
*  CODE128 (B)
*  EAN (13)
*  UPC-A
*  CODE39
*  ITF14

Use
----
####A Html5Canvas barcode generator is included to draw the barcodes.
````javascript
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
````
