/*var palabras =['ALURA', 'AHORACADO', 'ORACLE', 'HTML', 'CSS', 'JAVASRCIPT']
var tablero = document.getElementById('horca').getContext('2d')
var letras =[];
var palabraCorrecta = "";
var errores = 9;


/ *elegimos las palabras secretas ya incoorporadas* /
function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabraSecreta
}

/ * aca dibujamos las lineas* /
function dibujarLineas(){
    / * aca escribimos* /
    tablero.lineWidth = 6
    tablero.lineCap = 'round'
    tablero.lineJoin = 'round'
    tablero.strokeStyle = '#0A3871'
    tablero.beginPath()

    var ancho = 600/palabraSecreta.length
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (ancho*i), 640)
        tablero.lineTo(550 + (ancho*i), 640)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(escojerPalabraSecreta())

/ *Si escribimos bien* /
function escribirLetraCorrecta(index){
    / * aca es un texto* /
    tablero.font = "bold 52px Inter"
    tablero.lineWidth = 6
    tablero.lineCap = 'round'
    tablero.lineJoin = 'round'
    tablero.fillStyle = '#0A3871'

    var ancho = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505 + (ancho*index),620)
}

/ *Si escribimos mal* /
function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font = "bold 40px Inter"
    tablero.lineWidth = 6
    tablero.lineCap = 'round'
    tablero.lineJoin = 'round'
    tablero.fillStyle = '#0A3871'

    tablero.fillText(letra, 535 + (40*(10 - errorsLeft)), 710, 40)
}

/ * Para que nos deje utilizar el teclado* /
function verificarLetraClicada(key){
    if (letras.length < 1 || letras.indexOf(key) < 0)
    {
        letras.push(key)
        return false
    }
    else{
        letras.push(key)
        return true
    }
}

/ *añadir las letras en mayuscula* /
function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
    if (palabraCorrecta == palabraSecreta){
        let ganaste = document.getElementById("resultado");

        return ganaste.innerHTML = "USTED GANO";
        
    }
}

/ *oportunidades que tenemos cuando erramos* /
function adicionarLetraIncorrecta(letter){
    if (palabraSecreta.indexOf(letter) <= 0){
        / *si añadimos += , nos dara una infinitas posibilidades, recordando que en el var errores = 9 tiene q ser 0* /
        errores -= 1
        console.log(errores)
        if (errores == 0){
        let perdiste = document.getElementById("resultado");
        
        return perdiste.innerHTML = "USTED PERDIO";

        }
    }
}
/ *este metodo queremos q ejecute una funcion(=>), no q una funcion ejecute este metodo//parametro(e)* /
document.onkeydown = (e) => {
    / *va a almacenar todas las letras cuando empecemos a teclear* /
    let letra = e.key.toUpperCase()
    if(!verificarLetraClicada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra)
            / * a ingresar las letras debajo de las lineas* /
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i = 0; i < palabraSecreta.length; i++){
                if (palabraSecreta[i] == letra){
                    escribirLetraCorrecta(i)
                }
            }
        }
    }
    else{
        if (!verificarLetraClicada(e.key)) return
        console.log(letra)
        adicionarLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra,errores)
    }
}


// guarda la palabra que el usuario quiere agregar
function guardarPalabra() {
  
  //captura lo que el usuario ha digitado
  let nuevaPalabra = document.getElementById('input-nueva-palabra').value;

  // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
  if(nuevaPalabra !== ""){
    palabras.push(nuevaPalabra.toUpperCase());
    alert('La palabra fue guardada')
    
  
    // haz con que los componentes de la pantalla de agregar palabra desaparezcan
    document.getElementById("agregar-palabra").style.display = "none";
    iniciarJuego();
  }
  else{
    alert("Ninguna palabra ha sido digitada")
  }

}
*/

//Seletores
let pantalla = document.querySelector("canvas");
let botonNuevoJuego = document.getElementById("btn-nuevo-juego").style.display = "none"
let btnSalirDesaparecer = document.getElementById("btn-salir").style.display = "none"
let divAgregarPalabra = document.getElementById("agregar-palabra").style.display = 'none';
let btnNuevoJuego = document.getElementById("btn-nuevo-juego");
let btnSalir = document.getElementById("btn-salir");
let btnCancelar = document.getElementById("btn-cancelar");


var palabras = ['ALURA', 'AHORCADO', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMACION', 'DESAFIO'];
var tablero = document.getElementById('horca').getContext('2d');
var palabraSecreta = "";
var letras = [];
var palabraCorrecta = "";
var errores = 8;
let letrasIncorrectas = [];
let numeroDeErrores = 8
let letraElegida = [];

//eventos

// captura el id "iniciar-juego" en el click y direcciona el program al método dque inicia el juego
document.getElementById("iniciar-juego").onclick = () => {
  iniciarJuego();
}

// captura el id "btn-guardar", guarda la palabra agregada y inicia el juego
document.getElementById("btn-guardar").onclick = () => {
  guardarPalabra();
 
}

//actualiza la pantalla cuando el usuario hace click en el botón "nuevo juego"
btnNuevoJuego.addEventListener("click", function () {
  location.reload();
});

//actualiza la pantalla cuando el usuario hace click en el botón "salir"
btnSalir.addEventListener("click", function () {
  location.reload();
});

//actualiza la pantalla cuando el usuario hace click en el botón "cancelar"
btnCancelar.addEventListener("click", function () {
  location.reload();
});


//sortea la palabra que será usada en el ahorcado
function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)]
  palabraSecreta = palabra
  return palabra
}



// verifica cual es la letra en que el usuario hizo clic
function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key)
    return false
    
  }
  else {
    letras.push(key)
    return true
  }
}

function adicionarLetraCorrecta(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter) {
  if (palabraSecreta.indexOf(letter) <= 0) {
    errores -= 1
  }
}


function verificarFinJuego(letra) {
  //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
 if(letraElegida.length < palabraSecreta.length) { 
    //incluye las letras ya digitadas en el arrau
    letrasIncorrectas.push(letra);
    

    //valida se el usuário cometió el numero maximo de errores
    if (letrasIncorrectas.length > numeroDeErrores) {
      perdiste()
    }
    else if(letraElegida.length < palabraSecreta.length) {
      adicionarLetraIncorrecta(letra)
      escribirLetraIncorrecta(letra, errores)
    }
  }
 } 

//Verifica si el usuario ha ganado
function verificarVencedor(letra) {
  letraElegida.push(letra.toUpperCase());
  if (letraElegida.length == palabraSecreta.length) {

    ganaste()
    
  }

}



//impide que teclas como shift y otras, sean consideradas errores y sean escritas
function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}


//haz con que los botones de la pantalla de home desaparezcan y los de la de agregar palabra aparezcan
function ensenarPantallaDeAgregarPalabra() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("agregar-palabra").style.display = "block";

}

// guarda la palabra que el usuario quiere agregar
function guardarPalabra() {
  
  //captura lo que el usuario ha digitado
  let nuevaPalabra = document.getElementById('input-nueva-palavra').value;

  // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
  if(nuevaPalabra !== ""){
    palabras.push(nuevaPalabra.toUpperCase());
    alert('La palabra fue guardada')
    
  
    // haz con que los componentes de la pantalla de agregar palabra desaparezcan
    document.getElementById("agregar-palabra").style.display = "none";
    iniciarJuego();
  }
  else{
    alert("Ninguna palabra ha sido digitada")
  }

}

//inicia el juego
function iniciarJuego() {

  // hace con que los de iniciar juego e agregar palabra desaparezcan
  document.getElementById("div-desaparece").style.display = 'none';

  //llama la función que dibuja el tablero del ahorcado
  dibujarTablero();

  //llama la función que sortea la palabra  
  escojerPalabraSecreta();

  //llama la función que dibuja las líneas donde el usuario escribirá
  dibujarLineas();

  // hace con que los botones de nuevo juego e salir aparezcan
  document.getElementById("btn-nuevo-juego").style.display = "block"
  document.getElementById("btn-salir").style.display = "block"

  // captura la letra que el usuario escribió
  document.onkeydown = (e) => {
    // pone la letra en letra mayuscula
    let letra = e.key.toUpperCase()
    //verifica si el usuario todavia no ha perdido
    if (letrasIncorrectas.length <= numeroDeErrores) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        if (palabraSecreta.includes(letra)) {
          adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
          for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
              escrribirLetraCorrecta(i)
              verificarVencedor(letra)

            }
          }

        }
        // si el usuario cometió más errores de los que son permitidos, 
        //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
        else {
          if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
          dibujarAhorcado(errores)
          verificarFinJuego(letra)
        }
      }
    }
    else {
      alert('has atingido el límite de letras incorrectas')
    }

  };
}