function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var respuesta;
	var cantidadVaronesAprobados;
	var notaMenores;
	var contadorNotaMenores;
	var promedioNotaMenores;
	var notaAdolescente;
	var contadorNotaAdolescente;
	var promedioNotaAdolescente;
	var notaAdolescente;
	var contadorNotaMayores;
	var promedioNotaMayores;
	var notaMasculino
	var contadorNotaMasculino;
	var promedioNotaMasculino;
	var notaFemenino;
	var contadorNotaFemenino;
	var promedioNotaFemenino;

	nota=0;
	nota=parseInt(nota);

	cantidadVaronesAprobados=0;
	cantidadVaronesAprobados=parseInt(cantidadVaronesAprobados);
	
	notaMenores=0;
	notaMenores=parseInt(notaMenores);
	contadorNotaMenores=0;
	contadorNotaMenores=parseInt(contadorNotaMenores);
	promedioNotaMenores=0;
	promedioNotaMenores=parseInt(promedioNotaMenores);
	
	notaAdolescente=0;
	notaAdolescente=parseInt(notaAdolescente);
	contadorNotaAdolescente=0;
	contadorNotaAdolescente=parseInt(contadorNotaAdolescente);
	promedioNotaAdolescente=0;
	promedioNotaAdolescente=parseInt(promedioNotaAdolescente);

	notaMayores=0;
	notaMayores=parseInt(notaMayores);
	contadorNotaMayores=0;
	contadorNotaMayores=parseInt(contadorNotaMayores);
	promedioNotaMayores=0;
	promedioNotaMayores=parseInt(promedioNotaMayores);

	notaMasculino=0;
	notaMasculino=parseInt(notaMasculino);
	contadorNotaMasculino=0;
	contadorNotaMasculino=parseInt(contadorNotaMasculino);
	promedioNotaMasculino=0;
	promedioNotaMasculino=parseInt(promedioNotaMasculino);

	notaFemenino=0;
	notaFemenino=parseInt(notaFemenino);
	contadorNotaFemenino=0;
	contadorNotaFemenino=parseInt(contadorNotaFemenino);
	promedioNotaFemenino=0;
	promedioNotaFemenino=parseInt(promedioNotaFemenino);

	respuesta="si";

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese nombre");
		}
		while(!isNaN(nombre));
		console.log(nombre);
		
		do
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}
		while(isNaN(edad) || edad<1);
		console.log("Edad "+edad );
		do
		{
			sexo=prompt("Indique su sexo");
		}
		while(!isNaN(sexo) || sexo!="femenino" && sexo!="masculino");
		console.log(sexo);
		do
		{
			nota=prompt("Ingrese su nota");
			nota=parseInt(nota);
		}while(isNaN(nota) || nota<0);
		console.log("Nota "+nota);
		
		if(sexo=="masculino" && nota>3)
		{
			cantidadVaronesAprobados++;
		}

		if(edad<18)
		{
			notaMenores=nota+notaMenores;
			contadorNotaMenores++;
			if(edad>13)
			{
				notaAdolescente=nota+notaAdolescente;
				contadorNotaAdolescente++;
			}
		}
		else
		{
			notaMayores=nota+notaMayores;
			contadorNotaMayores++;
		}

		switch(sexo)
		{
			case "masculino":
				notaMasculino=nota+notaMasculino;
				contadorNotaMasculino++;
				break;
			case "femenino":
				notaFemenino=nota+notaFemenino;
				contadorNotaFemenino++;
				break;
		}


		respuesta=prompt("Desea continuar?");
	}

	promedioNotaMenores=notaMenores/contadorNotaMenores;

	promedioNotaAdolescente=notaAdolescente/contadorNotaAdolescente;

	promedioNotaMayores=notaMayores/contadorNotaMayores;

	promedioNotaMasculino=notaMasculino/contadorNotaMasculino;

	promedioNotaFemenino=notaFemenino/contadorNotaFemenino;

	console.log("La cantidad de varones aprobados es de " + cantidadVaronesAprobados);
	console.log("El promedio de la nota de los menores es " +promedioNotaMenores);
	console.log("El promedio de la nota de los adolescentes es " +promedioNotaAdolescente);
	console.log("El promedio de la nota de los mayores es " +promedioNotaMayores);
	console.log("El promedio de la nota de los varones es " +promedioNotaMasculino);
	console.log("El promedio de la nota de las mujeres es " +promedioNotaFemenino);

	document.write("La cantidad de varones aprobados es de " + cantidadVaronesAprobados);
	document.write("El promedio de la nota de los menores es " +promedioNotaMenores);
	document.write("El promedio de la nota de los adolescentes es " +promedioNotaAdolescente);
	document.write("El promedio de la nota de los mayores es " +promedioNotaMayores);
	document.write("El promedio de la nota de los varones es " +promedioNotaMasculino);
	document.write("El promedio de la nota de las mujeres es " +promedioNotaFemenino);
}
