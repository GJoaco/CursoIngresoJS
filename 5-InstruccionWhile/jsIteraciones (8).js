function mostrar()
{
	var numeros;
	var acumuladoPositivo=0;
	var acumuladoNegativo=1
	var respuesta;
	respuesta=prompt("Desea iniciar un calculo");

	while(respuesta=="si")
	{
		numeros=prompt("Ingrese su numero");
		numeros=parseInt(numeros);

		if (numeros>0) 
		{
			acumuladoPositivo=acumuladoPositivo+numeros;
			acumuladoPositivo=parseInt(acumuladoPositivo)
		}else
		{
			acumuladoNegativo=acumuladoNegativo*numeros;
			acumuladoNegativo=parseInt(acumuladoNegativo);
		}
		respuesta=prompt("¿Desea continuar?");
	}

	document.getElementById('suma').value=acumuladoPositivo;
	document.getElementById('producto').value=acumuladoNegativo
}//FIN DE LA FUNCIÓN