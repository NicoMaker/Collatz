document.getElementById("line-chart").style.display = "none";
document.getElementById("img").style.display = "block";

let dati = {
    labels: [],
    datasets: [{
        label: 'Dati Collatz',
        borderWidth: 1,
        data: []
    }],
};

let myChart = null;

function CalcolaCollatz() {
    let numero = InserisciNumero();

    if (isNaN(numero) || numero < 0 || numero === "") {
        let StampaRisultato = "Inserisci un numero valido";
        let stampapassaggi = "";

        document.getElementById("passaggi").innerHTML = stampapassaggi;
        document.getElementById("risultato").innerHTML = StampaRisultato;

        document.getElementById("line-chart").style.display = "none";
        document.getElementById("img").style.display = "block";
    } else {
        document.getElementById("line-chart").style.display = "block";
        document.getElementById("img").style.display = "none";

        let risultato = CalcolaRisultato(numero);

        let StampaRisultato = "K ---> " + risultato;
        document.getElementById("risultato").innerHTML = StampaRisultato;
    }
}


let InserisciNumero = () => parseInt(document.getElementById("numero").value);

function CalcolaRisultato(numero) {
    dati.labels = [];
    dati.datasets[0].data = [];

    let k = 0, passaggi = 0, stampaHTML = "";

    dati.labels.push(passaggi + 1)
    dati.datasets[0].data.push(numero)

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
        dati.labels.push(passaggi + 1)
        dati.datasets[0].data.push(numero)
    }

    stampaHTML += " 1";

    stampaHTML += "<br>";
    stampaHTML += "<br>";

    document.getElementById("passaggi").innerHTML = stampaHTML;

    if (myChart)
        myChart.destroy();

    let config = {
        type: 'line',
        data: dati,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    let ctx = document.getElementById('line-chart').getContext('2d');
    myChart = new Chart(ctx, config);

    document.getElementById("img").style.display = "none";

    return k;
}