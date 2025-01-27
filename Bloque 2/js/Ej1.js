function traductor(palabra){
    switch (palabra) {
        case 'gato':
            resultado= "La palabra es: cat"
            break;
        case 'perro':
            resultado= "La palabra es: dog"
            break;
        case 'mesa':
            resultado= "La palabra es: mesa"
            break;
        case 'casa':
            resultado= "La palabra es: house"
            break;
        default:
            document.write("ingrese una palabra que sea gato, perro, mesa o casa");
        } return resultado;
    }    
    palabra=(prompt("Introduzca una de las palabras 'casa, perro, gato, mesa'"));
    let resultadofinal=traductor(palabra);
    document.write(resultadofinal);