/* DICHIARO ARRAY CON EMAIL APPROVATE */
const mail_approvate = ["pippo@gmail.com", "pappo@gmail.com", "ciccio@gmail.com", "carlo@gmail.com" ]

/* DICHIARO VARIABILE APPROVAZIONE */
let approvazione = false;

/* SALVO ARRAY IN CONSOLE */
console.log(mail_approvate)

/* DICHIARO VARIABILE EMAIL INSERITA DALL'UTENTE TRAMITE PROMPT */
let mail_utente = prompt ("Inserisci la tua email")

/* SALVO L'EMAIL UTENTE IN CONSOLE */
console.log(mail_utente)

/* CICLO FOR PER VERIFICARE LA PRESENZA DELL'EMAIL UTENTE ALL'INTERNO DELL'ARRAY */
for (let i=0; i < mail_approvate.length; i++){
    /* SE L'EMAIL INSERITA CORRISPONDE, LA VARIABILE APPROVAZIONE ASSUMERA IL VALORE TRUE */
    if (mail_approvate[i] == mail_utente){
        approvazione = true
    }
}

if (approvazione == true){
    /* SE LA VARIABILE APPROVAZIONE HA VALORE TRUE VERRA VISUALIZZATO QUESTO ALERT */
    alert("Complimenti la sua email risulta presente nella nostra lista! Puo entrare!")
}else{
    /* SE LA VARIABILE APPROVAZIONE HA VALORE FLASE VERRA VISUALIZATO QUESTO */
    alert("Siamo spiacenti, la sua email non risulta presente nella nostra lista, non puo entrare")
}