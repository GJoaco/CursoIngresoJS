  
function mostrar()
{
	var numero
	var i
	var bandera

	bandera=0;
	numero=prompt("Ingrese su numero");
	numero=parseInt(numero);

	for (i = 2; i < numero; i++) 
	{
		console.log(i);
		if (numero%i==0) 
		{
			bandera=1;
		}


	}
	if (bandera==0) 
		{
			alert("El numero "+numero+" es primo");
		}


}//FIN DE LA FUNCIÓN