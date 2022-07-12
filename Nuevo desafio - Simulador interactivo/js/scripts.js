//Simulador para calcular el monto total de tu compra
function calcularPrecio(precioProducto, cantidadProducto, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    //se aplica al precio
    let precioConDescuento = precioProducto - descuento;
    //retorno el precio final con descuento y costo de envio incluidos, multiplicado por la cantidad de productos
    return (precioConDescuento * cantidadProducto) + costoEnvio;
}

const envio = 800; //costo de envio

function calcularPrecio(){
    console.log("Se agrego producto al carrito");
}

//se le pide al usuario que indique precio del producto, la cantidad y el porcentaje del descuento
let producto = parseFloat(prompt("Ingrese el precio de la prenda que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta prenda:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) // cupon seria % de descuento

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(producto, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");