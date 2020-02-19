function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

		while(respuesta=="si")
	{	
		numeros=prompt("Ingrese un numero");
		numeros=parseInt(numeros);
		acumulador=acumulador+numeros;
		acumulador=parseInt(acumulador);
		contador=contador+1;
		contador=parseInt(contador);
		respuesta=prompt("¿Quiere continuar?")
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN