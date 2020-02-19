function mostrar()
{
	var planeta;
	planeta=prompt("Introducir un planeta");

	switch(planeta)
	{
		case "tierra":
			alert("acá vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break;
		case "marte":
		case "saturno":
		case "jupiter":
		case "neptuno":
		case "urano":
			alert("acá hace más frio");
			break;
		default:
			alert("Planeta no valido");
			break;		
	}
}
