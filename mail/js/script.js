const mail_approvate = ["pippo@gmail.com", "pappo@gmail.com", "ciccio@gmail.com", "carlo@gmail.com" ]
console.log(mail_approvate)
let mail_utente = prompt ("Inserisci la tua email")
console.log(mail_utente)


for (let i=0; i < mail_approvate.length; i++){
    if (mail_approvate[i] === mail_utente){
        alert("Complimenti! La sua email corrisponde ad una email nella nostra lista e quindi può entrare!")
        break
    } else{
        alert("Siamo spiacenti, la sua email non risulta tra la nostra lista di email approvate e quindi non può entrare")
        break
    }
}