function mostrar()
{
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;
	nota=parseInt(nota);
	console.log(nota)

	if(nota<4)
	{
		alert("Vamos, la proxima se puede");
	}else
	{
		if(nota>8)
		{
			alert("EXCELENTE");
		}else
		{
			alert("APROBO");
		}
	}
}//FIN DE LA FUNCIÓN