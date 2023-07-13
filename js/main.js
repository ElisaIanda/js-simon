// setInterval dà il via ad una routine dopo un certo numero di secondi o minuti
// setTimeout fa partire uno script dopo un tempo prestabilito
// clearInterval serve a stoppare una routine dinamica, in genere lanciata col metodo setInterval


let now;

// Dichiaro la funzione
// Uso setInterval che crea un ciclo ripetuto dopo 1 secondo
// Metto dentro la funzione setInterval il nome della mia funzione dove creo il calcolo del tempo rimanente

setInterval(contiuedHourscicle, 100);
contiuedHourscicle();

// Ho spostato il calcolo del tempo dentro la funzione.
// Questa funzione parte dalla data attuale a domani, 
// calcolo il tempo rimanente prima in millisecondi
// e poi divido il tempo in 
// / 1000 millisecondi per avere i secondi
// /1000 /60 in millesecondi e secondi per avere il minuto
// /1000 /60 / 60 in millesecondi e secondi e ora per avere l'ora

function contiuedHourscicle() {

    // Dichiaro le mie variabili
    const countdownTimer = document.getElementById("countdown-timer");
    const finalMessage = document.getElementById("final-message");

    // Rappresenta la data e l'ora correnti
    now = new Date();
    console.log(now);

    // const time = now.getTime();
    // console.log(time);

    const date1 = now;
    // const date2 = new Date('July 13, 2023 19:27:50');
    const date2 = new Date('July 14, 2023 09:30:00');

    // Ottengo valore in millisecondo
    let time = date2.getTime() - date1.getTime();
    // countdownTimer.innerHTML = (time);
    console.log(time);

    // Convertire in ore min e sec

    // divido il tempo ottenuto per 1000 t sec per 60 t min e 60 t ore
    console.log(time / 1000 / 60 / 60);

    // Mi ritorna il numero specifico di ore minuti e secondi

    const hours = Math.floor(time / 1000 / 60 / 60);
    console.log(hours);

    const minutes = Math.floor(time / 1000 / 60) % 60;
    console.log(minutes);

    const seconds = Math.floor(time / 1000) % 60;
    console.log(seconds);

    // Stampo in html il tempo
    countdownTimer.innerHTML = ("ore: " + hours + " " + "minuti: " + minutes + " " + "secondi: " + seconds);

    // Impostare un messaggio alla fine del countdown
    if (time <= 0) {
        // Dato variabule a setInterval per stoppare ciclo con clearInterval
        const stopCicle = setInterval(contiuedHourscicle, 100);
        finalMessage.innerHTML = ("Il tempo di attesa è finito"); 
        // clearInterval per stoppare il tempo
        clearInterval(stopCicle);       
    } 

}



