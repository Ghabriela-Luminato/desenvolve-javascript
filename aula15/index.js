// Date ---> datas, calendário 

const DataAtual= new Date()

console.log('ESSA É A DATA COMPLETA',DataAtual) // --> DATA COMPLETA
console.log('ESSE É O ANO',DataAtual.getDate()) // ---> ANO
console.log('ESSE É O MÊS',DataAtual.getMonth()+1)// ---> MÊS, SEMPRE VEM 1 A MENOS, ENTÃO ADD +1
console.log('ESSE É O ANO COM 4 DÍGITOS',DataAtual.getFullYear()) 
console.log('ESSAS SÃO AS HORAS',DataAtual.getHours())
console.log('ESSES SÃO OS MINUTOS', DataAtual.getMinutes())
console.log('ESSES SÃO OS SEGUNDOS', DataAtual.getSeconds())
console.log('FORMATO ISO--->',DataAtual.toISOString())
console.log('FORMATO UTC--->',DataAtual.toUTCString())
