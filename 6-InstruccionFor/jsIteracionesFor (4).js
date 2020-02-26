function mostrar()
{
	var parar
	parar=prompt("Cuando parar?")
	parar=parseInt(parar);
	for(i=0;i<100;i++)
	{
		console.log("Repetidor")
		if(i==parar-1)
		{
			break;
		}
	}


}//FIN DE LA FUNCIÓN