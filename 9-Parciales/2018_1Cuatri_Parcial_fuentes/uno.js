
function mostrar()
{
	var largo
	var ancho
	var perimetro

	largo=prompt("Largo");
	largo=parseInt(largo);
	ancho=prompt("ancho");
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;
	alert(perimetro);

}
