function mostrar()
{
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor");
	}
	else
	{
		alert("Es menor");
	}


}