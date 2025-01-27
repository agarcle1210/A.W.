function ladoCuadrado(lado){
    return "El perímetro es: "+lado*4
    }
    lado=parseInt(prompt("Introduzca la medida del lado"));
    let resultado=ladoCuadrado(lado);
    document.write(resultado);