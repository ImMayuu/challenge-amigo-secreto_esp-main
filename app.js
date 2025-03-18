//Solucion proyecto Amigo secreto
//Estructura Basica
//Array para almacenar los nombres
//Función para agregar amigos
//Función para actualizar la lista de amigos
//Función para sortear los amigos

//Comezamos creando un array
let listaNombresAmigoSecreto = [];

//Vamos a hacer la funcion que nos permita agregar nombres a nuestra lista
function agregarAmigo() {
    //Usando document.getElementById vamos a enlazar lo que el usuario digite en la variable nombre
    let nombre = document.getElementById("amigo").value.trim();
    //vamos a usar un metodo llamado trim para poder eliminar los espacios en blanco
    //al inicio y al final de una cadena de texto
    
    //Un detalle importante es validar que la entrada este correcta
    //lo logica sera si la casilla esta vacia, mande alerta, si no esta vacia entonces hay un nombre
    //y este nombre lo podemos agregar
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    }else{
        listaNombresAmigoSecreto.push(nombre);
        //Tenemos que actualizar los datos de la lista cada que se agreguen entonces vamos a invocar otra func
        actualizarLista();
        //Limpiamos la caja antes de agregar otro nombre
        limpiarCaja();
    }
    return;
}

//Funcion que limpia mi caja de entrada
function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

//funcion que nos actualiza los nombres
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpiamos la lista antes de actualizarla
    
    //usamos la funcion for
    for (let i = 0; i < listaNombresAmigoSecreto.length; i++) {
        let li = document.createElement("li");  // Creamos un elemento <li>
        li.textContent = listaNombresAmigoSecreto[i];  // Asignamos el nombre del amigo secreto
        lista.appendChild(li);  // Agregamos el <li> a la lista en el HTML
    }
    console.log("Lista actualizada:", listaNombresAmigoSecreto);
}

//Funcion que me escoge aleatoriamente a un amigo

let listaSorteados = []; // Almacena los amigos que ya han salido

function sortearAmigo() {
    if (listaNombresAmigoSecreto.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (listaNombresAmigoSecreto.length === 1) {
        alert("Si solo tienes un nombre, creo que es obvio quien va a salir, agrega unos mas.");
        return;
    }

    if (listaNombresAmigoSecreto.length === listaSorteados.length) {
        alert("Ya sorteamos todos tus amigos. Reiniciando sorteo.");
        listaSorteados = []; // Reseteamos la lista de sorteados
    }

    let amigoSorteado=0;
    //Usamos un Do...while para asegurarnos que el nombre sorteado no esté en listaSorteados
    do { 
        let indiceAleatorio = Math.floor(Math.random() * listaNombresAmigoSecreto.length);
        amigoSorteado = listaNombresAmigoSecreto[indiceAleatorio];
    } while (listaSorteados.includes(amigoSorteado));

    listaSorteados.push(amigoSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
