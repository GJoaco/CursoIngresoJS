function mostrar()
{
	var edad
	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Niño");
	}else
	{
		if (edad>17) 
		{
			alert("Mayor");
		}else
		{
			alert("Adolescente");
		}
	}
}
