// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare includes() o indexOf)

var usermail = prompt("Inserisci la tua mail")

const listamail = ["rufy@gmail.com", "zoro@gmail.com","nami@gmail.com", "usopp@gmail.com", "sanji@gmail.com", "robin@gmail.com", "franky@gmail.com", "brook@gmail.com", "jinbe@gmail.com"]

let existingmail;

for (let i = 0; i < listamail.length; i++) {
    existingmail === i
}

if (existingmail === usermail) {
    alert("Andiamo a cercare il One Piece!")
} else {
    alert("Non fai parte della ciurma di Cappello di Paglia")
}
