
function mostrar()
{
	var ancho
	var largo
	var lados
	var perimetro

	ancho=prompt("Indrotuzca ancho","Ancho");
	ancho=parseInt(ancho);
	largo=prompt("Indrotuzca largo","Largo");
	largo=parseInt(largo);

	lados=ancho+largo;
	perimetro=lados*2

	alert(perimetro);

}
