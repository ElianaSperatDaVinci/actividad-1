function sumarNumeros(num1, num2) {
    return num1 + num2;
}

const suma = sumarNumeros(5, 10);
console.log("La suma de 5 y 10 es:", suma);


function dividirNumeros(num1, num2) {
    if (num2 === 0) {
        return "INVÁLIDA. No se puede dividir por cero";
    } else {
        return num1 / num2;
    }
}

const dividir20y2 = dividirNumeros(20, 2);
console.log("La suma de 20 y 2 es:", dividir20y2);
const dividir20y0 = dividirNumeros(20, 0);
console.log("La suma de 20 y 0 es:", dividir20y0);

function encontrarMayor(array) {
    if (array.length === 0) {
        return "El array está vacío";
    }

    let mayor = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    return mayor;
}

const listaNumeros = [2, 8, 9, 7, 5, 6];
const mayor = encontrarMayor(listaNumeros);
console.log("El mayor número en la lista es:", mayor);
