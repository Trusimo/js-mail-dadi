// Gioco dei dadi
// Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// C’è forse un array da qualche parte?
// // Se dobbiamo confrontare qualcosa che “cosa” ci serve?

const numeridadi = [1, 2, 3, 4, 5, 6];

const firstplayer = Math.floor(Math.random() * numeridadi.length);

const secondplayer = Math.floor(Math.random() * numeridadi.length);

if (secondplayer > firstplayer) {
    console.log(firstplayer, secondplayer)
    console.log("Second Player Wins!")
} else if (firstplayer > secondplayer) {
    console.log(firstplayer, secondplayer)
    console.log("First Player Wins!")
} else if (firstplayer === secondplayer) {
    console.log("Parità!")
}