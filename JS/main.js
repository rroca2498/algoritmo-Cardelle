
///definicion de variables

let Numero;

let Suma = 0;


while(Numero != -1){ /// definicion de -1 como escape

    Numero = parseInt(prompt("Ingrese un numero entero, utilice -1 para salir"));

    if(Numero != -1){

        Suma = Suma + Numero;
    }
    

    console.log("La suma con los numeros que dio da " + Suma);

}

