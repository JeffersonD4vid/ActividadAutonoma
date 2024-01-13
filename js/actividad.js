//EJERCICIO 1 - MENU OPERACIONES
/*INGE HAY QUE COMENTAR TODAS Y DEJAR SOLO EL EJERCICIO QUE DESDE PROBARLE DESCOMENTADO
PARA QUE FUNCIONE BIEN, ESTABA INVESTIGANDO HABER COMO PODIA ARREGLARLO PERO NO ENCONTRE NADDA*/

let num1 = parseInt(prompt("Ingrese el primer numero: "))
let num2 = parseInt(prompt("Ingrese el segundo numero: "))

let opciones= prompt("Seleccione la Operacion que desea:\nSuma = 1\nResta = 2\nMultiplicacion = 3\nDivision = 4");

switch (opciones) {
    case "1":
        document.writeln("Suma");
        document.writeln(suma(num1,num2))
        break;

    case "2":
        document.writeln("Resta");
        document.writeln(resta(num1,num2))
        break;

    case "3":
        document.writeln("Multiplicación");
        document.writeln(multiplicar(num1,num2))
        break;

    case "4":
        document.writeln("División");
        document.writeln(dividir(num1,num2))
        break;

    default:
        document.writeln("!OPCION INVALIDA!");
        break;
}

function suma (a,b){
    return a+b
}

function resta(a, b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir (a,b){
    return a/b
}

//EJERCICIO 2 - PROMEDIO NOTAS
/*

let nota1 = parseInt(prompt("Ingrese la primera nota : "))
let nota2 = parseInt(prompt("Ingrese la segundo nota : "))
let nota3 = parseInt(prompt("Ingrese la tercera nota : "))

function promedio( nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3
}
let promedio = promedio(nota1, nota2, nota3)

if(promedio >=7 ){
    document.writeln(`Su nota es ${promedio} usted APROBADO`)
}
else{
    document.writeln(`Su nota es ${promedio} usted REPROBO`)
}



//EJERCICIO 3 - PRECIO TOTAL



let precioProducto= parseFloat(prompt("Ingrese el precio del producto: "))

function precioFinal( precioProducto){
    return (precioProducto*0.12)+precioProducto
}

let precioTotal = precioFinal(precioProducto)

document.writeln(`El precio total incluido el impuesto es de ${precioTotal}`)



//EJERCICIO 4 - VEHICULOS

let auto = parseInt(prompt("Seleccione el modelo del auto:\nFORD FIESTA= 1\nFORD FOCUS = 2"))
let modelo = ""
let precio = 0
let descuentop =0.0

function descuento(auto){
    if(auto == 1){
        let descuento = 25000-(25000*0.05)
        return descuento
    }else if (auto == 2){
        let descuento = 29000-(29000*0.10)
        return descuento
    } else{
        return 0
    }
}

let descuento1= descuento(auto)
if(auto == 1){
     modelo = "FORD FIESTA"
     precio = 25000
     descuentop= 25000*0.05
}else if(auto == 2){
     modelo = "FORD FOCUS"
     precio = 29000
     descuentop= 29000*0.10
}
document.writeln(`Ustede compro el auto modelo ${modelo}<br>con el siguiente precio $${precio}<br>con un descuento de ${descuentop}% <br>el precio final es de $${descuento1}`) 

*/