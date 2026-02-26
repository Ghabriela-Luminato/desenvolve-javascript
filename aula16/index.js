//Temporizadores

// FUNÇÃO  setTimeout (ATRASAR CHAMADA DE FUNÇÃO)
function chamar(segundoDeAtraso){
    console.log(`ATRASOU ${segundoDeAtraso}  SEG`) //interporlar uma variável (inserir dentro de um texto usa ´´´´)
}
function chamaAtrasado(funcaoDeAtraso, quantidadeAtraso){
 setTimeout(() => funcaoDeAtraso(quantidadeAtraso), quantidadeAtraso * 1000)
}
chamaAtrasado(chamar, 1)

// REPETIR FUNÇÃO  setTimeout (REPETIR CHAMADA DE FUNÇÃO X VEZES)
function chamarComIntervalo(funcaoDeIntervalo, intervalo){
    setInterval(()=> funcaoDeIntervalo(intervalo), intervalo*1000)
}
chamarComIntervalo(chamar,2)