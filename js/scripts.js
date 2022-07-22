class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

const remeras = [];
const buzos = [];
const pantalones = [];

remeras.push(new Producto("Remera Cobra", 1, 2000, "Negro", 30));
remeras.push(new Producto("Musculosa Good Times", 2, 1400, "Blanco", 10));
remeras.push(new Producto("Remera Aeternum", 3, 1400, "Blanco", 20));
remeras.push(new Producto("Remera Good Times", 4, 1400, "Blanco", 15));

buzos.push(new Producto("Buzo Scream", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Negro Oversized", 6, 3800, "Negro", 40));
buzos.push(new Producto("Buzo Batik", 7, 3800, "Negro", 40));

pantalones.push(new Producto("Jogging NC", 8, 2900, "Negro", 10));
pantalones.push(new Producto("Short Notte", 9, 1000, "Negro", 10));


for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return ((precioPrenda * 1.21) * cantidadPrenda) + costoEnvio;
}

let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id === prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id === prendaSeleccionada);

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar de la prenda seleccionada:"));

const envio = 800;

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(remeraBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    remeraBuscada.vender(cantidad);
} else if (prendaSeleccionada <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(buzoBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    buzoBuscado.vender(cantidad);
} else if (prendaSeleccionada <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(pantalonBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    pantalonBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}