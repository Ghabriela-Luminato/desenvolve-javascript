function chamaPrimeira() {
    console.log("Chama essa Primeira função");
}

function chamaDepois() {
    console.log("entrou na 2 funcao");
    chamaPrimeira();
}

// Callback --> QUANDO UMA FUNÇÃO PASSA DENTRO DE OUTRA FUNÇÃO. 

function recebePrimeira(primeiraFuncao) {
    primeiraFuncao();
}

recebePrimeira(chamaDepois);