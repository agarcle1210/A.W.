function valores(){
    let num, numP=0, numN=0, multi=0, pares;
    for(let contador=0; contador<=9; contador++){
        num=parseInt(prompt("Introduzca un número"));
        if(num>=0){
            numP++
        } else {
            numN++
        }
        if(num%15==0){
            multi++
        }
        if(num%2==0){
            pares=num+num
        }

    } return "La cantidad de valores negativos es: "+numN+"<br> La cantidad de valores positivos es: "+numP+"<br> La cantidad de múltiplos de 15 es: "+multi+"<br >La cantidad de números pares es: "+pares;
}
let resultadofinal = valores();
document.write(resultadofinal);