// PreEntrega2+Garces

// clase
class Cliente {
  constructor(name,lastName,Ndni,metodoPago,cantCuotas,intereses){
      this.name = name;
      this.lastName = lastName;
      this.Ndni = Ndni;
      this.metodoPago=metodoPago;
      this.cantCuotas=cantCuotas;
      this.intereses=intereses;
  }
}


const espacio = " "
const anioActual = 2023
const anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"))
const edad = anioActual - anioDeNacimiento

//Array 

let clientes = [];


if(edad >= 18) {
const nombre = prompt("Ingrese su nombre:")
const apellido = prompt("Ingrese su apellido:")
const dni = parseInt(prompt("Ingrese su numero de documento"))


const informacionCliente = nombre + espacio + apellido + espacio + "DNI" + espacio + dni

console.log("Cliente: " + informacionCliente)
alert("Cliente: " + informacionCliente)


//Metodos de pago

const metodoDePago = parseInt(prompt("Indiquenos el metodo de pago que desea utilizar: \n\n 1- Tarjeta de debito \n 2- Tarjeta de credito"))
  // var cantidadDeCuotas = 0

switch (metodoDePago) {
  case 1:
    console.log("El metodo de pago elegido es tarjeta de debito")
    break

  case 2:
    console.log("El metodo de pago elegido es tarjeta de credito")
    break

  default:
    alert("El metodo seleccionado es INCORRECTO")
    break
}


if (metodoDePago === 1) {
  alert("Usted selecciono Tarjeta de Debito como metodo de pago, presione ACEPTAR para continuar.")
  console.log ("Finalizar programa.")
    } else if (metodoDePago === 2){
      var cantidadDeCuotas = parseInt(prompt(" Indiquenos la cantidad de cuotas con las que desea abonar, ( siendo valores validos 3, 6, 9 y 12 ) para confirmarle el monto de interes a pagar. "))
    }


// cantidad de cuotas a pagar

switch (cantidadDeCuotas) {
  case 3:
    alert("El porcentaje de intereses a pagar es 0%")
    var interesAPagar =  '0';
    console.log("Cliente cancela en 3 cuotas sin interes")
    break

    case 6:
    alert("El porcentaje de intereses a pagar es 15%")
    var interesAPagar =  '15';
    console.log("Cliente cancela en 6 cuotas con un recargo del 15%")
    break
    
    case 9:
    alert("El porcentaje de intereses a pagar es 30%")
    var interesAPagar =  '30';
    console.log("Cliente cancela en 9 cuotas con un recargo del 30%")
    break

    case 12:
    alert("El porcentaje de intereses a pagar es 45%")
    var interesAPagar =  '45';
    console.log("Cliente cancela en 12 cuotas con un recargo del 45%")
    break

    default:
      alert("Cantidad de cuotas seleccionas NO PERMITIDAS")
      console.log("Cliente selecciono un numero no permitido de cuotas.")
      
}

const cliente = new Cliente (
  nombre,
  apellido,
  dni,
  metodoDePago,
  cantidadDeCuotas,
  interesAPagar
)

clientes.push(cliente);
console.log(clientes);


// Funcion de orden superior SOME

console.log( clientes.some((el) => el.intereses == '45'));

}else{
  alert("ACCESO DENEGADO! Usted tiene que ser mayor de edad para poder continuar.")
}