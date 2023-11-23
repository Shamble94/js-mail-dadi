/* DICHIARO VARIABILI CON I NUMERI GENERATI RANDOMICAMENTE DA 1 a 6 INCLUSI */
let n_utente = Math.floor((Math.random() * 6) + 1);
let n_computer = Math.floor((Math.random() * 6) + 1);

/* SALVO LE VARIABILI IN CONSOLE */
console.log(n_utente);
console.log(n_computer);

/* SE I NUMERI SONO UGUALI */
if (n_utente == n_computer){
    alert("Il risultato è un pareggio")

    /* SE IL NUMERO DELL'UTENTE è MAGGIORE DEL NUMERO DEL COMPUTER E SONO NUMERI DIVERSI */
    }else if (n_utente > n_computer && n_utente !== n_computer){
    alert("Complimenti utente hai vinto!")

    /* ALTRIMENTI */
    }else{
    alert("Complimenti computer hai vinto!")
}