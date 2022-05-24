// Gioco dei dadi
// Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// C’è forse un array da qualche parte?
// // Se dobbiamo confrontare qualcosa che “cosa” ci serve?

const numeridadi = [1, 2, 3, 4, 5, 6];

const firstplayer = Math.floor(Math.random() * numeridadi.length) + 1;

const secondplayer = Math.floor(Math.random() * numeridadi.length) + 1;

if (secondplayer > firstplayer) {
    console.log(firstplayer, secondplayer)
    console.log("Second Player Wins!")
} else if (firstplayer > secondplayer) {
    console.log(firstplayer, secondplayer)
    console.log("First Player Wins!")
} else if (firstplayer === secondplayer) {
    console.log(firstplayer, secondplayer)
    console.log("Parità!")
}

// CORREZIONE IN CLASSE
// const firstplayer = [];
// const secondplayer = [];

// for (let i= 1; i <= 6; i++) {
//     const numberfirst = Math.floor(Math.random() * 6) + 1;
//     const numbersecond = Math.floor(Math.random() * 6) + 1;
//      
//     firstplayer.push(numberfirst)
//     secondplayer.push(numbersecond)
// }