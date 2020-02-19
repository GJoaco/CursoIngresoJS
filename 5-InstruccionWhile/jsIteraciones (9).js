function mostrar()
{

	var contador=0;
	var numero
	var maximo;
	var minimo;
	var respuesta='si';
	var contador=0;
	contador=parseInt(contador);
	



	while(respuesta!='no')
	{
		contador=contador+1
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero);

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo) 
			{
				maximo=numero;
			}
			if (numero<minimo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("¿Quiere continuar?")
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN