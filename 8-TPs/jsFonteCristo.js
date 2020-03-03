/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
	var numeroIngresado;

function NumerosPares ()
{
	var numerosPares; 

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numerosPares=numeroIngresado;
 	numerosPares=parseInt(numerosPares);

 	if(numeroIngresado>0)
 	{
  		console.log("Su numero es el "+numeroIngresado)
 		console.log("Y los numeros pares encontrados son:")
 		for(numerosPares=numeroIngresado;numerosPares>-1;numerosPares=numerosPares-1)
		{
			if (numerosPares%2==0)
			{	
			console.log(numerosPares);
			}
		}	
 	}
 	else
 	{
 		console.log("El numero debe ser positivo");
 	}
}
function NumerosImpares ()
{
	var numerosImpares; 

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numerosImpares=numeroIngresado;
 	numerosImpares=parseInt(numerosImpares);

  	if(numeroIngresado>0)
 	{
  		console.log("Su numero es el "+numeroIngresado)
 		console.log("Y los numeros impares encontrados son:")
 		for(numerosImpares=numeroIngresado;numerosImpares>-1;numerosImpares=numerosImpares-1)
		{
			if (numerosImpares%2==1)
			{	
			console.log(numerosImpares);
			}
		}	
 	}
 	else
 	{
 		console.log("El numero debe ser positivo");
 	}
}
function NumerosDivisibles ()
{
	var numerosDivisibles; 

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numerosDivisibles=numeroIngresado;
 	numerosDivisibles=parseInt(numerosDivisibles);

  	if(numeroIngresado>0)
 	{
  		console.log("Su numero es el "+numeroIngresado)
 		console.log("Y los numeros divisibles entre cien y uno encontrados son:")
 		for(numerosDivisibles=numeroIngresado;numerosDivisibles>-1;numerosDivisibles=numerosDivisibles-1)
		{
			if (numeroIngresado%numerosDivisibles==0 && numerosDivisibles<101)
			{	
			console.log(numerosDivisibles);
			}
		}	
 	}
 	else
 	{
 		console.log("El numero debe ser positivo");
 	}	
}
function VerificarPrimo ()
{
	var verificarPrimo; 
	var primo;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	verificarPrimo=numeroIngresado - 1;
 	verificarPrimo=parseInt(verificarPrimo);
 	primo=0;

  	if(numeroIngresado>0)
 	{
  		console.log("Su numero es el "+numeroIngresado)
 		for(verificarPrimo=numeroIngresado-1;verificarPrimo>1;verificarPrimo=verificarPrimo-1)
		{
			if (numeroIngresado%verificarPrimo==0)
			{
				primo=1;
			}
		}

		if(primo==0)
		{
			console.log("El numero es primo")
		}
		else
		{
			console.log("Su numero NO es primo")
		}
 	}
 	else
 	{
 		console.log("El numero debe ser positivo");
 	}	
}
function NumerosPrimos ()
{
	var numerosPrimos; 
	var verificarPrimo;
	var primo;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numerosPrimos=numeroIngresado;
 	numerosPrimos=parseInt(numerosPrimos);
 	primo=0;

 	if(numeroIngresado>0)
 	{
  		console.log("Su numero es el "+numeroIngresado)
 		console.log("Y los numeros primos encontrados son:")
 		for(numerosPrimos=numeroIngresado;numerosPrimos>0;numerosPrimos=numerosPrimos-1)
		{
			for(verificarPrimo=numerosPrimos-1;verificarPrimo>1;verificarPrimo=verificarPrimo-1)
			{
				if (numerosPrimos%verificarPrimo==0)
				{
					primo=1;
				}
			}
			if(primo==0)
			{
				console.log(numerosPrimos)
			}
			primo=0;	
		}	
 	}
 	else
 	{
 		console.log("El numero debe ser positivo");
 	}
}

