function CalcolaCollatz() {
    let numero = InserisciNumero();

    if (isNaN(numero) || (numero < 0)){
        let StampaRisultato = "Inserisci numero valido";
        let stampapassaggi = "";

        document.getElementById("passaggi").innerHTML = stampapassaggi;
        document.getElementById("risultato").innerHTML = StampaRisultato;
    }
    else {
        let risultato = CalcolaRisultato(numero);

        let StampaRisultato = "K ---> " + risultato;
        document.getElementById("risultato").innerHTML = StampaRisultato
    }
}

let InserisciNumero = () => parseInt(document.getElementById("numero").value);

function CalcolaRisultato(numero) {

    let k = 0, passaggi = 0, stampaHTML = "";

    while (numero > 1) {
        passaggi++;
        stampaHTML += " " + numero + " --> ";

        if (passaggi % 4 == 0)
            stampaHTML += "<br>";

        if (numero % 2 == 0) {
            numero = numero / 2;
            k++;
        }
        else {
            numero = 3 * numero + 1;
            k++;
        }
    }

    stampaHTML += " 1";

    stampaHTML += "<br>";
    stampaHTML += "<br>";

    document.getElementById("passaggi").innerHTML = stampaHTML;

    return k;
}