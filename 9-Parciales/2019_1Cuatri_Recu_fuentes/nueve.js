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
	
	notaMenores=0;
	notaMenores=parseInt(notaMenores);
	contadorNotaMenores=0;
	contadorNotaMenores=parseInt(contadorNotaMenores);
	
	notaAdolescente=0;
	notaAdolescente=parseInt(notaAdolescente);
	contadorNotaAdolescente=0;
	contadorNotaAdolescente=parseInt(contadorNotaAdolescente);

	notaMayores=0;
	notaMayores=parseInt(notaMayores);
	contadorNotaMayores=0;
	contadorNotaMayores=parseInt(contadorNotaMayores);

	notaMasculino=0;
	notaMasculino=parseInt(notaMasculino);

	notaFemenino=0;
	notaFemenino=parseInt(notaFemenino);

	respuesta="si";

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese nombre");
		}
		while(!isNaN(nombre));
		
		do
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}
		while(isNaN(edad) || edad<1);
		
		do
		{
			sexo=prompt("Indique su sexo");
		}
		while(!isNaN(sexo) || sexo!="femenino" && sexo!="masculino");
		
		do
		{
			nota=prompt("Ingrese su nota");
			nota=parseInt(nota);
		}while(isNaN(nota) || nota<0);

		if(sexo=="masculino" && nota>3)
		{
			cantidadVaronesAprobados++;
		}

		if(edad<18)
		{
			notaMenores=nota+contadorNotaMenores;
			contadorNotaMenores++;
		}

		if(edad<18 && edad>13)
		{
			notaAdolescente=nota+notaAdolescente;
			contadorNotaAdolescente++;
		}

		if(edad>18)
		{
			notaMayores=nota+notaMayores;
			contadorNotaMayores++;
		}

		switch(sexo)
		{
			case "masculino":
				notaMasculino=nota+notaMasculino;
				contadorNotaMasculino++;
			case "femenino":
				notaFemenino=nota+notaFemenino;
				contadorNotaFemenino++;
		}


		respuesta=prompt("Desea continuar?");
	}

	promedioNotaMenores=notaMenores/contadorNotaMenores

	promedioNotaAdolescente=notaAdolescente/contadorNotaAdolescente

	promedioNotaMayores=notaMayores/contadorNotaMayores

	promedioNotaMasculino=notaMasculino/contadorNotaMasculino

	promedioNotaFemenino=notaFemenino/contadorNotaFemenino

	console.log("La cantidad de varones aprobados es de " + cantidadVaronesAprobados);
	console.log("El promedio de la nota de los menores es " +promedioNotaMenores);
	console.log("El promedio de la nota de los adolescentes es " +promedioNotaAdolescente);
	console.log("El promedio de la nota de los mayores es " +promedioNotaMayores);
	console.log("El promedio de la nota de los varones es " +promedioNotaMasculino);
	console.log("El promedio de la nota de las mujeres es " +promedioNotaFemenino);
}
