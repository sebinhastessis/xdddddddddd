var cuevas= new fabric.Canvas("myCanvas");
var cosasX_=50;
var cosasY_=50;
var cocos=30; chicle=30;
var cliche="chile";
var correo="epico";
function ñ(){
 fabric.Image.fromURL("166px-Mob1.png", function(hola){
    correo=hola;
    correo.scaleToWidth(150);
    correo.scaleToHeight(130);
    correo.set({
    top:cosasX_,left: cosasY_
    })
cuevas.add(correo);
 })
}
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	cliche = Img;

	cliche.scaleToWidth(cocos);
	cliche.scaleToHeight(chicle);
	cliche.set({
	top:cosasY_,
	left:cosasX_
	});
	cuevas.add(cliche);

	});

}

window.addEventListener("keydown",no_se);

function no_se(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");

}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	
	} 
  
  
  
  

}	

function up()
{
	if(cosasY_ >=0)
	{
		cosasY_ = cosasX_ - cocos;
		console.log("altura del bloque = " + chicle);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + cosasX_ + " , Y = "+ cosasY_);
		cuevas.remove(correo);
		ñ();
	}
}

function down()
{
	if(cosasY_ <=500)
	{
		cosasY_ = cosasY_ + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + cosasX_ + " , Y = "+cosasY_);
		cuevas.remove(correo);
		ñ();
	}
}

function left()
{
	if(cosasX_ >0)
	{
		cosasX_ = cosasX_ - cocos;
		console.log("ancho del bloque = " + chicle);
		console.log("Cuando se presiona la flecha izquierda, X =  " + cosasX_ + " , Y = "+cosasY_);
		cuevas.remove(correo);
		ñ();
	}
}

function right()
{
	if(cosasX_ <=850)
	{
		cosasX_ = cosasX_ + cocos;
		console.log("ancho del bloque = " + chicle);
		console.log("Cuando se presiona la flecha derecha, X =  " + cosasX_ + " , Y = "+cosasY_);
		cuevas.remove(correo);
		ñ();
	}

}