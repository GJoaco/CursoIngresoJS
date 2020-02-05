/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo
	var sacarPorcentajeUno
	var sacarPorcentajeDos
	var resultado

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	console.log(sueldo);

	sacarPorcentajeUno=10
	sacarPorcentajeDos=100

	resultado=sueldo + sueldo * sacarPorcentajeUno/sacarPorcentajeDos;
	
	document.getElementById('resultado').value=resultado;
	console.log(resultado);

	
}
