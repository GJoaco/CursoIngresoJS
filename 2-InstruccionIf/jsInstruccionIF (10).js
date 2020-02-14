function mostrar()
{
	var nota
	nota=Math.floor(Math.random() * 10) + 1;
	console.log(nota);

	if (nota>8)
	{
		alert("EXCELENTE");
	}else
	{
		if (nota<4) 
		{
			alert("Vamos, la proxima se puede");
		}else
		{
			alert("APROBO");
		}
	}
}