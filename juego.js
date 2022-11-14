class Juego { //Clase Juego
    constructor(jugador1, jugador2) { //Constructor de la clase Juego.
        this.jugador1 = jugador1; //Se guarda el nombre del jugador 1.
        this.jugador2 = jugador2; //Se guarda el nombre del jugador 2.
        this.jugador = 1; //Se inicializa el jugador en 1.
        this.tablero_p1 = this.crearTablero(); //Se crea el tablero del jugador 1.
        this.posiciones_p1 = ["", "", "", ""]; //Se crea un arreglo para guardar las posiciones de los barcos del jugador 1.
        this.posiciones_p2 = ["", "", "", ""]; //Se crea un arreglo para guardar las posiciones de los barcos del jugador 2.
        this.tablero_p2 = this.crearTablero(); //Se crea el tablero del jugador 2.
        this.casillasSeleccionadas = 0; //Se crea una variable para contar las casillas seleccionadas.
        this.casillas = [4, 3, 2, 1]; //Se crea un arreglo para guardar las casillas de los barcos.
        this.barcos = 0; //Se crea una variable para contar los barcos.
        this.barcosRestantesP1 = 8; //Se crea una variable para guardar los barcos restantes del jugador 1.
        this.barcosRestantesP2 = 8; //Se crea una variable para guardar los barcos restantes del jugador 2.
        this.estado = 1;//Se crea una variable para guardar el estado del juego.
        this.estado1 = 1; //Se crea una variable para guardar el estado del juego.  
        this.ganador = false; //Se crea una variable para guardar el ganador del juego.
    }
    jugar() { //Función para jugar.
        this.jugador = 1; //Se inicializa el jugador en 1.
        this.insertarTableroContrario(this.jugador); //Se inserta el tablero del jugador 1.
    }
    crearTablero() { //Función para crear el tablero.
        let tablero = []; //Se crea un arreglo para guardar el tablero.
        for (let i = 0; i < 10; i++) { //Se recorre el arreglo.
            tablero[i] = []; //Se crea un arreglo dentro del arreglo.
            for (let j = 0; j < 10; j++) {  //Se recorre el arreglo.
                tablero[i][j] = 0;  //Se inicializa el arreglo en 0.
            }
        }
        return tablero; //Se retorna el tablero.
    }
    insertarTablero(jugador) { //Función para insertar el tablero.

        let div = document.getElementById("tablero-jugador" + jugador); //Se obtiene el div del tablero.
        let txt_tblro = document.getElementById("texto-tblro"); //Se obtiene el div del texto del tablero.
        if (jugador == 1) { //Si es el primer jugador.
            txt_tblro.innerHTML = "TABLERO DE: " + this.jugador1; //Se le indica al jugador que coloque sus barcos.
        } else {   //Si es el segundo jugador.
            txt_tblro.innerHTML = "TABLERO DE: " + this.jugador2; //Se le indica al jugador que coloque sus barcos.
            div.style.display = "block"; //Se muestra el tablero.
        }

        let top = 0; //Se crea una variable para guardar la posición top.
        for (let x = 0; x < 10; x++) { //Se recorre el arreglo.
            let left = 0; //Se crea una variable para guardar la posición left.
            for (let j = 0; j < 10; j++) { //Se recorre el arreglo.
                let button = document.createElement("button");  //Se crea un botón.
                button.style.position = "absolute"; //Se le da posición absoluta al botón.
                button.style.width = "10%"; //Se le da un ancho al botón.
                button.style.height = "10%";   //Se le da un alto al botón.
                button.style.left = left + "%"; //Se le da una posición left al botón.
                button.style.top = top + "%"; //Se le da una posición top al botón.
                button.id = "boton" + (x) + (j) + "-" + "jugador" + jugador; //Se le da un id al botón.
                button.onclick = () => { //Se le da una función al botón.   
                    this.seleccionarCasilla(button.id, jugador); //Se manda llamar a la función seleccionarCasilla.
                };
                left += 10; //Se le suma 10 a la posición left.
                div.appendChild(button); //Se agrega el botón al div.
            }
            top += 10; //Se le suma 10 a la posición top.
        }
    }
    colocarBarcos() { //Función para colocar los barcos.
        if (this.jugador == 3) { //Si ya se colocaron los barcos de ambos jugadores.
            this.jugar(); //Se inicia el juego.
        } else {
            this.insertarTablero(this.jugador); //Se inserta el tablero del jugador.
            if (this.jugador == 1) { //Si es el primer jugador.
                alert("COLOCA TUS BARCOS " + this.jugador1); //Se le indica al jugador que coloque sus barcos.
            } else { //Si es el segundo jugador.
                alert("TURNO DE " + this.jugador2);  //Se le indica al jugador que coloque sus barcos.
                alert("COLOCA TUS BARCOS" + this.jugador2); //Se le indica al jugador que coloque sus barcos.
            }
            alert("SELECCIONA 4 CASILLAS PARA CREAR TU BARCO");  //Se le indica al jugador que coloque sus barcos.
        }
    }
    seleccionarCasilla(id, jugador) { //Función para seleccionar las casillas.
        if (this.casillasSeleccionadas < this.casillas[this.barcos]) { //Si las casillas seleccionadas son menores a las casillas del barco.
            let x = parseInt(id[5]); //Se obtiene la posición x.
            let y = parseInt(id[6]); //Se obtiene la posición y.
            if (jugador == 1) { //Si es el primer jugador.
                this.posiciones_p1[this.barcos] += id[5] + id[6]; //Se guarda la posición en el arreglo de posiciones del jugador 1.
                } else { //Si es el segundo jugador.
                this.posiciones_p2[this.barcos] += id[5] + id[6]; //Se guarda la posición en el arreglo de posiciones del jugador 2.
            }

            this.insertarPosicionBarco(x, y, jugador);//Se manda llamar a la función insertarPosicionBarco.
            let id1 = id; //Se guarda el id.
            let boton = document.getElementById(id1); //Se obtiene el botón.
            boton.style.backgroundColor = "aqua";
            this.casillasSeleccionadas += 1; //Se le suma 1 a las casillas seleccionadas.
        }
        if (this.casillasSeleccionadas == this.casillas[this.barcos]) { //Si las casillas seleccionadas son iguales a las casillas del barco.
            this.barcos += 1; //Se le suma 1 a los barcos.
            if (this.barcos < 4) {
                alert("SIGUIENTE BARCO DE:  " + this.casillas[this.barcos] + " CASILLAS");
                this.casillasSeleccionadas = 0; //Se inicializa las casillas seleccionadas en 0.
            } else {
                let btnAceptar = document.getElementById("btn-aceptar"); //Se obtiene el botón de aceptar.
                if (this.jugador == 1) { //Si es el primer jugador.
                    alert("ESTE ES TU TABLERO " + this.jugador1); //Se le indica al jugador que coloque sus barcos.
                    console.log(this.tablero_p1); //Se imprime el tablero del jugador 1.
                    btnAceptar.style.display = "block"; //Se muestra el botón de aceptar.
                } else {
                    alert("ESTE ES TU TABLERO" + this.jugador2);  //Se le indica al jugador que coloque sus barcos.
                    console.log(this.tablero_p2); //Se imprime el tablero del jugador 2.
                    btnAceptar.style.display = "block"; //Se muestra el botón de aceptar.
                }
                this.jugador += 1; //Se le suma 1 al jugador.
                this.barcos = 0;   //Se le asigna 0 a los barcos.
                this.casillasSeleccionadas = 0; //Se le asigna 0 a las casillas seleccionadas.
            }
        }
    }
    insertarPosicionBarco(x, y, jugador) {
        if (jugador == 1) { //Si es el primer jugador.
            this.tablero_p1[x][y] = 1; //Se inserta la posición en el tablero del jugador 1.
        } else { //Si es el segundo jugador.
            this.tablero_p2[x][y] = 1; //Se inserta la posición en el tablero del jugador 2.
        }
    }
    insertarTableroContrario(jugador) { //Función para insertar el tablero.
        console.log(this.posiciones_p1); //Se imprime en consola las posiciones del jugador 1.
        console.log(this.posiciones_p2); //Se imprime en consola las posiciones del jugador 2.
        let div = document.getElementById("tablero-jugador" + jugador + "-ataca"); //Se crea una variable para guardar el div.
        let txt_tblro = document.getElementById("texto-tblro"); //Se crea una variable para guardar el texto del tablero.
        if (jugador == 1) {
            txt_tblro.innerHTML = "Atacando a " + this.jugador2;    //Se le da un texto al tablero.
        } else {
            txt_tblro.innerHTML = "Atacando a " + this.jugador1;   //Se le da un texto al tablero.
        }
        let top = 0; //Se crea una variable para guardar la posición top.
        div.style.display = "block"; //Se muestra el div.
        for (let x = 0; x < 10; x++) { //Se recorre el arreglo.
            let left = 0; //Se crea una variable para guardar la posición left.
            for (let j = 0; j < 10; j++) {
                let button = document.createElement("button"); //Se crea un botón.
                //ESTILOS.  
                button.style.position = "absolute";
                button.style.width = "10%";
                button.style.height = "10%";
                button.style.left = left + "%";
                button.style.top = top + "%";
                button.id = "boton" + (x) + (j) + "-" + "jugador" + jugador + "-ataca"; //Se le da un id al botón.
                button.onclick = () => { //Se le da una función al botón.
                    this.atacar(button.id); //Se manda llamar a la función atacar.
                };
                left += 10; //Se le suma 10 a la posición left.
                div.appendChild(button);    //Se agrega el botón al div.
            }
            top += 10; //Se le suma 10 a la posición top.
        }
    }
    atacar(id) { //Función para atacar.
        if (!this.ganador) { //Si no hay ganador.
            let divp1 = document.getElementById("tablero-jugador1-ataca"); //Se crea una variable para guardar el div.
            let divp2 = document.getElementById("tablero-jugador2-ataca"); //Se crea una variable para guardar el div.
            let btn_siguiente = document.getElementById("btn-siguiente");   //Se crea una variable para guardar el botón.
            let txt_tblro = document.getElementById("texto-tblro"); //Se crea una variable para guardar el texto del tablero.

            let x = parseInt(id[5]); //Se obtiene la posición x del botón.
            let y = parseInt(id[6]); //Se obtiene la posición y del botón.
            if (this.jugador == 1) { //Si es el turno del jugador 1.
                let boton = document.getElementById(id); //Se obtiene el botón.
                if (this.tablero_p2[x][y] == 1) { //Si la posición del tablero del jugador 2 es igual a 1.
                    boton.style.backgroundColor = "green";
                    this.barcosRestantesP2 -= 1; //Se resta un barco al jugador 2.
                    /*Animacion*/
                } else {
                    boton.style.backgroundColor = "red";
                    /*Animacion*/
                }
            } else {
                let boton = document.getElementById(id); //Se obtiene el botón.
                console.log(boton);
                if (this.tablero_p1[x][y] == 1) { //Si la posición del tablero del jugador 1 es igual a 1.
                   
                    boton.style.backgroundColor = "green";
                    this.barcosRestantesP1 -= 1; //Se resta un barco al jugador 1.
                    /*Animacion*/
                } else {
                    boton.style.backgroundColor = "red"; 
                    /*Animacion*/
                }
            }
            console.log(this.barcosRestantesP1); //Se muestra en consola la cantidad de barcos restantes del jugador 1.
            console.log(this.barcosRestantesP2); //Se muestra en consola la cantidad de barcos restantes del jugador 2.
            if (this.barcosRestantesP1 == 0) { //Si la cantidad de barcos restantes del jugador 1 es igual a 0, entonces el jugador 2 gana.
                this.ganador = true; //Se declara al jugador 2 como ganador.
                alert("El ganador  es: " + this.jugador2); //Se muestra en pantalla el ganador.
                btn_siguiente.style.display = "none"; //Se oculta el boton de siguiente.
            } else if (this.barcosRestantesP2 == 0) { //Si la cantidad de barcos restantes del jugador 2 es igual a 0, entonces el jugador 1 gana.
                this.ganador = true; //Se declara al jugador 1 como ganador.
                btn_siguiente.style.display = "none"; //Se oculta el boton de siguiente.
                alert("El ganador es: " + this.jugador1); //Se muestra en pantalla el ganador.
            }
            if(this.ganador = false){ //Si no hay ganador, entonces se muestra el boton de siguiente.
                btn_siguiente.style.display = "block"; //Se muestra el boton de siguiente.
            }
            btn_siguiente.style.display = "block";
            btn_siguiente.onclick = () => { //Funcion para cambiar de jugador
                if (this.jugador == 1) { //Si el jugador es 1
                    alert("Es el turno de " + this.jugador2);
                    this.jugador = 2; //Cambia el jugador a 2
                    if (this.estado1 == 1) { //Si el jugador 1 ya termino de colocar sus barcos.
                        this.insertarTableroContrario(this.jugador); //Inserta el tablero del jugador 2.
                        this.estado1 = 0; //Cambia el estado del jugador 1 a 0.
                    }
                    divp1.style.display = "none"; //Oculta el tablero del jugador 1.
                    divp2.style.display = "block"; //Muestra el tablero del jugador 2.
                    txt_tblro.innerHTML = " atacando a  " + this.jugador1; //Cambia el texto del tablero.
                } else {    //Si el jugador es 2
                    divp2.style.display = "none"; //Oculta el tablero del jugador 2.
                    divp1.style.display = "block";
                    alert("Es el turno de " + this.jugador1); //Muestra el tablero del jugador 1.
                    this.jugador = 1; //Cambia el jugador a 1.
                    txt_tblro.innerHTML = " atacando a  " + this.jugador2; //Cambia el texto del tablero.
                }
                btn_siguiente.style.display = "none"; //Oculta el boton de siguiente.
            }
        }
    }
}