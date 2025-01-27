function fechaMes(){
    let mes
    let fecha=new Date();
    mes=fecha.getMonth() + 1;
    if(mes>=1 && mes<=4){
        resultado="Estamos en el primer cuatrimestre del año"
    } else if(mes>=5 && mes<=8){
        resultado="Estamos en el segundo cuatrimestre del año"
    } else {
        resultado="Estamos en el tercer cuatrimestre del año"
    } return resultado
} 
let resultadofinal=fechaMes();
document.write(resultadofinal);