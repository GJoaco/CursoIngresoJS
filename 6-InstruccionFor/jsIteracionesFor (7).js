function mostrar()
{
	var numero
	var i
	var dividendos

	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	dividendos=0;

	for(i = 0;i < numero; i++)
	{
		if (numero%i==0) 
		{
			console.log("Divisor: "+i);
			dividendos=dividendos+1;
		}
	}
	console.log("Cantidad de divisores: "+dividendos);


}//FIN DE LA FUNCIÓN