function mostrar()
{
	var precio
	var descuento
	var precioFinal

	precio=prompt("Precio");
	descuento=prompt("Descuento");

	precioFinal=precio- precio*descuento/100;

	document.getElementById('elPrecioFinal').value=precioFinal
}
