function multiplos(){
    let cadenaResultado=""
    for (let multiplicacion=8; multiplicacion<500; multiplicacion+=8) {
        if (multiplicacion==496){
            cadenaResultado=cadenaResultado+multiplicacion;
        } else {
            cadenaResultado=cadenaResultado+multiplicacion+" - ";
        }
    }return cadenaResultado;
}
let resultadofinal=multiplos();
document.write(resultadofinal);