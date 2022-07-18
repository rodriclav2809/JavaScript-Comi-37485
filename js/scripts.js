function calcularPrecio(precioProducto, cantidadProducto, porcentajeDescuento, costoEnvio) {
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    let precioConDescuento = precioProducto - descuento;
    return (precioConDescuento * cantidadProducto) + costoEnvio;
}

const envio = 800;

function cualeselPreciofinal() {
    console.log("Se agrego producto al carrito");
}

let producto = parseFloat(prompt("Ingrese el precio de la prenda que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta prenda:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:"))

let precioFinal = calcularPrecio(producto, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");