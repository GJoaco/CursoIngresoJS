	var eleccionMaquina;
	var contadorGanados;
	var contadorPerdidos;
	var contadorEmpatados;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;
	contadorEmpatados=0;
	contadorPerdidos=0;
	contadorGanados=0;
	contadorEmpatados=parseInt(contadorEmpatados);
	contadorPerdidos=parseInt(contadorPerdidos);
	contadorGanados=parseInt(contadorGanados);
}
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			console.log("Piedra!")
			console.log("Empataste");
			contadorEmpatados=contadorEmpatados+1;
			break;
		case 2:
			console.log("Papel!")
			console.log("Perdiste");
			contadorPerdidos=contadorPerdidos+1;
			break;
		case 3:
			console.log("Tijera!")
			console.log("Ganaste");
			contadorGanados=contadorGanados+1;
			break;
	}
	document.getElementById('ganadas').value=contadorGanados+" ganadas";
	document.getElementById('perdidas').value=contadorPerdidos+" perdidas";
	document.getElementById('empatadas').value=contadorEmpatados+" empatadas";

	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}
function papel()
{
	switch(eleccionMaquina)
	{
		case 2:
			console.log("Papel!")
			console.log("Empataste");
			contadorEmpatados=contadorEmpatados+1;
			break;
		case 3:
			console.log("Tijera!")
			console.log("Perdiste");
			contadorPerdidos=contadorPerdidos+1;
			break;
		case 1:
			console.log("Piedra!")
			console.log("Ganaste");
			contadorGanados=contadorGanados+1
			break;
	}
	document.getElementById('ganadas').value=contadorGanados+" ganadas";
	document.getElementById('perdidas').value=contadorPerdidos+" perdidas";
	document.getElementById('empatadas').value=contadorEmpatados+" empatadas";

	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}
function tijera()
{
	switch(eleccionMaquina)
	{
		case 3:
			console.log("Tijera!")
			console.log("Empataste");
			contadorEmpatados=contadorEmpatados+1;
			break;
		case 1:
			console.log("Piedra!")
			console.log("Perdiste");
			contadorPerdidos=contadorPerdidos+1;
			break;
		case 2:
			console.log("Papel!")
			console.log("Ganaste");
			contadorGanados=contadorGanados+1
			break;
	}
	document.getElementById('ganadas').value=contadorGanados+" ganadas";
	document.getElementById('perdidas').value=contadorPerdidos+" perdidas";
	document.getElementById('empatadas').value=contadorEmpatados+" empatadas";

	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}