var Canvas = require('canvas')
  , Image = Canvas.Image;

var JsBarcode = function(opt,cb){
    var Lib;

    try{
        Lib = require("./libs/"+opt.format);
    }catch(e){
        return cb(e);
    }

    var encoder = new Lib(opt.content);
    var binary = encoder.encoded();

	var canvas = new Canvas((binary.length*opt.width+2*opt.quite),(opt.height));
    var ctx = canvas.getContext('2d')


	//Paint the canvas white
	ctx.fillStyle = "#fff";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	//Creates the barcode out of the encoded binary
	for(var i=0;i<binary.length;i++){

		var x = i*opt.width+opt.quite;

		if(binary[i] == "1"){
			ctx.fillStyle = "#000";
		}
		else{
			ctx.fillStyle = "#fff";
		}

		ctx.fillRect(x,0,opt.width,opt.height);
	}

    cb(null, canvas.toBuffer());
}

module.exports = JsBarcode;
