/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;
	var precioFinal;

function Sumar () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	suma=precioDos+ precioTres+ precioUno;
	
	alert(suma);
}
function Promedio () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	suma=precioDos+ precioTres+ precioUno;
	promedio=suma/3;
	
	alert(promedio);
}
function PrecioFinal () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	suma=precioDos+ precioTres+ precioUno;
	precioFinal=suma+suma*21/100;
	
	alert(precioFinal);
}