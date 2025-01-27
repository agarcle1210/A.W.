function bucle(){
    let num, suma;
    do {
    num=parseInt(prompt("Ingrese un número (9999 para acabar)"));
    if (num!=9999) {
        suma= num+num;
    }
} while (num!=9999);
if (suma>0) {
    resultado= "La suma de los números es "+suma+" y es mayor que cero.";
} else {
    if (suma==0) {
        resultado= "La suma de los números es "+suma;
    } else {
        resultado= "La suma de los números es "+suma+" y es menor que cero";
    }
} return resultado;
}
let resultadofinal=bucle();
document.write(resultadofinal);