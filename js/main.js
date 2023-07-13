const countdownTimer = document.getElementById("countdown-timer");
const ora = document.getElementById("ora");
const minuto = document.getElementById("minuto");
const secondo = document.getElementById("secondo");
const finalMessage = document.querySelector("final-message");
let now;

// setInterval dà il via ad una routine dopo un certo numero di secondi o minuti
// setTimeout fa partire uno script dopo un tempo prestabilito
// clearInterval serve a stoppare una routine dinamica, in genere lanciata col metodo setInterval


// Rappresenta la data e l'ora correnti
now = new Date ();
console.log(now);

// const time = now.getTime();
// console.log(time);

const date1 = now;
// const date2 = new Date ('July 13, 2023 15:41:00');

const date2 = new Date ('July 14, 2023 09:30:00');

// Ottengo valore in millisecondo
let time = date2.getTime() - date1.getTime();
// countdownTimer.innerHTML = (time);
console.log(time);

// Convertire in ore min e sec

// divido il tempo ottenuto per 1000 t sec per 60 t min e 60 t ore
console.log(time / 1000 / 60 / 60);
// countdownTimer.innerHTML = (time / 1000 / 60 / 60);

// Mi ritorna il numero specifico di ore minuti e secondi

const hours = Math.floor(time / 1000 / 60 / 60);
console.log(hours);

const minutes = Math.floor(time / 1000 / 60 ) % 60;
console.log(minutes);

const seconds = Math.floor(time / 1000 ) % 60;
console.log(seconds);


// Impostare un messaggio alla fine del countdown
// setTimeout = time;
// if (setTimeout === 0){
//     finalMessage.innerHTML = ("Il tempo di attesa è finito");
// }

// Dichiaro la funzione


continuedHours();

function continuedHours(){

    countdownTimer.innerHTML = ""; 

    now = new Date ();

    countdownTimer.innerHTML = ("ore: " + hours + " "+ "minuti: " + minutes + " "+ "secondi: " + seconds);

}



