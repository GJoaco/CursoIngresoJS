function mostrar()
{
	var precio
	var descuento
	var precioFinal

	precio=prompt("Introduzca precio ","Precio");
	precio=parseInt(precio);
	descuento=prompt("Introduzca descuento","Descuento");
	descuento=parseInt(descuento);
	precioFinal=precio-precio*descuento/100;

	document.getElementById('elPrecioFinal').value=precioFinal;
}
