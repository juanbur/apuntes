//CICLOS --> for / while / do...while
    //FOR
        // 1. para implementar un ciclo escribimos -> for ()
        // 2. necesitamos un contador, declaramos la variable let i (i es nuestro contador)
        // 3. i comienza con 1.
        // 4. condicion de parada--> i va a ser <= 4
        // 5. necesitamos incrementar al contador --> i++
        //6. dentro de las llaves {} se va a colocar el codigo que se va a ejecutar en cada iteración

        // for (let i =1; i<=4; i++){
        //     console.log(`iteracion ${i}`);
        // }
        // console.log("fin del ciclo")

        // CICLOS AL REVES

        // for (let i =4; i>=1; i--){
        //     console.log(`iteracion ${i}`);
        // }
        // console.log("fin del ciclo");

        /* CICLOS ANIDADS */
        //se pueden agregar ciclos dentro de ciclos

        // for (let i =1; i<=4; i++){
        //     console.log(`iteracion ${i}`);
        //     for (let j = 0; j<4; j++){
        //         console.log (j);
        //     }
        // }
        // console.log ("fin del ciclo")

    // /*WHILE*/

        // let x = 1 /*declaramos el contador*/
        //          /*condicion x*/
        // while (x <= 4) { 
        //     console.log(`iteracion ${x}`);
        //     x++; /*suma de uno en uno*/
        // }
        // console.log("fin de while")
    
    //DO...WHILE --> haz mientras algo se cumpla

        // let y = 1; /*inicializamos una variable*/
        // do {
        //     console.log(`iteracion ${y}`);
        //     y++;
        // } while (y <= 4);
    
    //CREAR UNA TABLA MULTIPLICAR

                        /*parseInt para que convierta el dato en un tipo dato entero
                        prompt le pide al usuario el dato*/

        // let numero = parseInt(prompt("ingrese un numero"))

        // for (i = 1; i<=10 ; i++){
        //     /* declaro una variable multi que multiplique numero x variable i*/
        //     let multi = numero * i;
        //     console.log(numero + " x " + i + " = " + multi);
        // }

        /* numero   valor de i   resultado 
            2           1           2
            2           2           4       */


//SWITCH
// evaluar una variable y elegir el camino que corresponda dependiendo de la opcion que haya dentro de la variable.
//un ejemplo claro  es una calculadora. el usuario elige dos numeros y una operacion. 
// ve que valor hay dentro de la variable y sigue el camino del brazo que corresponda dependiendo del valor.
// en caso de que la variable esté fuera del alcance existe DEFAULT (OPCION INVALIDA POR EJ.)

    /* Sintaxis simple
        switch (evaluacion){
            case n1:
                codigo
                break;
            case n2:
                codigo
                break;
            default:
                codigo
        }
        
    Sintaxis multiple
        switch(evaluacion) {
            case n1:
            case n2:
            case n3:
                codigo
                break;
            default:
                codigo
        }*/
    
    //Ejemplo switch sintaxis simple

        // let num = String(prompt("Ingrese un hotel"))

        // switch(num){
        //     case "dos mares": console.log("elegiste hotel dos mares");
        //     break; /* sin el break no hay nada que le diga que pare entonces pondría la linea de abajo*/
        //     case "tres estrellas":console.log("elegiste hotel 3 estrellas")
        //     default: console.log ("el hotel no existe")/* aca ponemos lo que queremos que pase en caso de que no sea ninguna de las opciones*/
        // }

    //ejemplo switch sintaxis multiple

        // let hotel = String(prompt("ingrese un hotel"));

        // switch(hotel){
        //     case "dos mares":
        //     case "tres mares":
        //     case "endless":
        //     console.log(`elegiste ${hotel}, gracias por su reserva`);
        //     break;
        //     default: console.log(`Ese hotel no existe`);
        // }
    
    //FUNCIONES
    /* argumentos: le damos un valor para que la funcion trabaje para que devuelva (retourn) un resultado*/
