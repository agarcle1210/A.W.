function salario(){
    let sueldo, contador=1, sueldoTotal=0;
    for (contador=1; contador<=5; contador++){
        sueldo=parseInt(prompt("Introduzca los cinco sueldos"));
        sueldoTotal=sueldoTotal+sueldo;
    }
    if (sueldo>=100 && sueldo<=300){
        
    }
    return "La empresa gasta en total "+sueldoTotal+" €"
}
let resultadofinal=salario();
document.write(resultadofinal);