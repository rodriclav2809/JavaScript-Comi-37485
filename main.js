let nombreusuario = prompt("ingrese su nombre")

let apellidousuario = prompt("ingrese su apellido")

console.log(nombreusuario + apellidousuario)

var edad = prompt("Digita tu edad");
if(Number(edad) == edad){
    if(edad >18){
        alert("Sos mayor de edad");
    }
    else{
        document.write("Aun no sos mayor de edad");
    }
}
else{
    alert("Digita un valor numerico valido");
}

console.log(edad)

const tuClubFavorito = prompt("De que equipo sos hincha?");

switch(tuClubFavorito){
    case "Club Nacional de Football":
        console.log("Sos del Club Gigante Nacional de la Blanqueada");
        break;
    case "Penarol":
        console.log("Eterno segundo");
        break;
    case "Danubio":
        console.log("Equipo en desarrollo");
        break;
    case "Montevideo City Torque":
        console.log("Club nuevo, muy querido");
        break;
    default:
        console.log("Los del monton");
        break;
}

const listaProductosBolsilludos = ['camisetas', 'shorts', 'camperas'];

let acumuladorDeTexto = "";

for(let posicion = 0;posicion < 3; posicion++){
    acumuladorDeTexto += "<div>"+listaProductosBolsilludos[posicion];
}

document.write(acumuladorDeTexto)