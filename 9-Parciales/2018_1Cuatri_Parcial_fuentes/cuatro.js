function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Primer numero");
	numeroDos=prompt("Segundo numero");

	if (numeroUno==numeroDos) 
	{
		resultado=numeroUno+numeroDos
	}
	else
	{
		if (numeroUno<numeroDos)
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=numeroUno+numeroDos;
		}
		else
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=numeroUno- numeroDos;
		}
	}
	alert(resultado);
}
