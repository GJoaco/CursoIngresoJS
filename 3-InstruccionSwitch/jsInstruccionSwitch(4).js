function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("28 dias")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("30 dias");
			break;
		default:
			alert("31 dias");
	}



}