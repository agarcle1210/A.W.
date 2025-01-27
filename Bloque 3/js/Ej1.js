function ClaseArray() 
        {
            let sumaTotal=0;
            let suma36=0;
            let cantidad50=0;
            for (let f=0; f<num.length; f++) {
                let valor=prompt("Ingrese un número:");
                num[f]=parseInt(valor);
            }
            for (let f=0; f<num.length; f++) {
                sumaTotal+=num[f]; 
                if (num[f]>36) {
                    suma36+=num[f]; 
                }
                if (num[f]>50) {
                    cantidad50++;
                }
            }
            return "La suma de todos los números es: "+sumaTotal+"<br> La suma de los números mayores a 36 es: "+suma36+"<br> La cantidad de números mayores a 50 es: "+cantidad50;
        }
        let num = new Array(8);
        resultado=ClaseArray();
        document.write(resultado);