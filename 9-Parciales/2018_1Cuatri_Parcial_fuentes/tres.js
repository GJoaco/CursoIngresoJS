/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/

function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombres;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;


	respuesta="si";
	contador=0;
	acumulador=0;
	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre");

		do
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);

		do
		{
			cantidadDeDias=prompt("Ingrese cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias) || cantidadDeDias<1);

		do
		{
			formaDePago=prompt("Ingrese forma de pago");
		}while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="tarjeta" && formaDePago!="efectivo");

		console.log("Cantidad de personas "+cantidadDePersonas);
		console.log("Cantidad de dias "+ cantidadDeDias);
		console.log("Forma de pago "+formaDePago);

		if(contador==0 || maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombres=nombre;
		}

		if(contador==0 || maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}

		switch(formaDePago)
		{
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++;
				break;
		}


		if (contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR) 
		{
			formaDePagoMasUtilizada="efectivo";
		}
		else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizada="qr";
			}
			else
			{
				formaDePagoMasUtilizada="tarjeta";
			}
		
		}	
		
		contador++;
		respuesta=prompt("Desea continuar?");
	}

	promedio=acumulador/contador;
	console.log("maximoDePersonasNombres"+maximoDePersonasNombres);
	console.log("maximoDeDiasCantidadDePersonas"+maximoDeDiasCantidadDePersonas);
	console.log("formaDePagoMasUtilizada"+formaDePagoMasUtilizada);

	document.write("<br>maximoDePersonasNombres"+maximoDePersonasNombres);
	document.write("<br>maximoDeDiasCantidadDePersonas"+maximoDeDiasCantidadDePersonas);
	document.write("<br>formaDePagoMasUtilizada"+formaDePagoMasUtilizada);
	document.write("<br>"+promedio);
}
