//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 al ${numeroMaximoPosible} por favor:`));
  console.log(typeof(numeroUsuario));
  /*
    Este código realiza la comparación 
    */
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    //Incoporo operador ternario con el template string ${ ? 'si es cierto me devolves esto' : 'si no, esto'}
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos}  ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //Incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al máximo de ${maximosIntentos} intentos`);
      break;
    }
    //No se cumplió la condición
    //alert("Lo siento, no acertaste el número");
  }
}
