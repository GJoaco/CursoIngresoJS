/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	console.log(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	console.log(numeroDos);

	resultado=numeroUno+numeroDos;

	console.log(resultado)





	
}

