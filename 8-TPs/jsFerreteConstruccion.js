/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
	var largo;
	var ancho;
	var radio;
	var perimetro;
	var circunferencia
	var resultado;
	var area;
	var cantidadCal;
	var cantidadCemento; 


function Rectangulo () 
{
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;
	resultado=perimetro*3;

	alert("Hay que comprar "+resultado+" metros de alambre");
}
function Circulo () 
{
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	circunferencia=radio*2*3.1415;
	resultado=circunferencia*3

	alert("Hay que comprar "+resultado+" metros de alambre");
}
function Materiales () 
{
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	area=largo*ancho;
	cantidadCal=area*3;
	cantidadCemento=area*2;

	alert("Se necesitan "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de Cal")

}