/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
	var eleccionMaquina;
	var eleccionJugador;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			console.log("Piedra!")
			console.log("Empataste");
			break;
		case 2:
			console.log("Papel!")
			console.log("Perdiste");
			break;
		case 3:
			console.log("Tijera!")
			console.log("Ganaste");
			break;
	}
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}
function papel()
{
	switch(eleccionMaquina)
	{
		case 2:
			console.log("Papel!")
			console.log("Empataste");
			break;
		case 3:
			console.log("Tijera!")
			console.log("Perdiste");
			break;
		case 1:
			console.log("Piedra!")
			console.log("Ganaste");
			break;
	}
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}
function tijera()
{
	switch(eleccionMaquina)
	{
		case 3:
			console.log("Tijera!")
			console.log("Empataste");
			break;
		case 1:
			console.log("Piedra!")
			console.log("Perdiste");
			break;
		case 2:
			console.log("Papel!")
			console.log("Ganaste");
			break;
	}
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;

}