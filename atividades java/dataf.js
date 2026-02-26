function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
        return null;
    }

    const totalSegundos = Number(diferenca / 1000);

    const dias = Number(totalSegundos / 86400);
    const restoDias = totalSegundos % 86400;

    const horas = Number(restoDias / 3600);
    const restoHoras = restoDias % 3600;

    const minutos = Number(restoHoras / 60);
    const segundos = restoHoras % 60;

    return {
        dias: dias - (dias % 1),
        horas: horas - (horas % 1),
        minutos: minutos - (minutos % 1),
        segundos: segundos
    };
}

function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);

    if (!tempo) {
        console.log("Tempo encerrado!");
        clearInterval(intervalo);
    } else {
        console.clear();
        console.log(
            tempo.dias + " dias, " +
            tempo.horas + " horas, " +
            tempo.minutos + " minutos e " +
            tempo.segundos + " segundos"
        );
    }
}

const dataFutura = new Date("2028-12-31T22:00:00");

const intervalo = setInterval(atualizarTemporizador, 1000);

atualizarTemporizador();