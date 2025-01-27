function tabla(){
    let num;
    num = parseInt(prompt("Introduzca un número del 1 al 10"));
    let resultado="";
    for(let multiplicacion=1; multiplicacion<=12; multiplicacion++){
        resultado+= num*multiplicacion;
        if (multiplicacion < 12) {
            resultado+= " - ";
        }
    } return resultado;
}
let resultadofinal = tabla();
document.write(resultadofinal);