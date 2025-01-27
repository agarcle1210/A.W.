function enteros(num1, num2, num3){
    num1=parseInt(prompt("Introduzca el primer valor"));
    num2=parseInt(prompt("Introduzca el segundo valor"));
    num3=parseInt(prompt("Introduzca el primer valor"));
    if(num1<num2 && num1<num3){
        resultado = "El número menor es: "+num1;
    } else if(num2<num1 && num2<num3){
        resultado = "El número menor es: "+num2;
    } else {
        resultado = "El número menor es: "+num3;
    }
    return resultado
}
let resultadofinal = enteros();
document.write(resultadofinal);