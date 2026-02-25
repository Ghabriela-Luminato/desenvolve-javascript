const meusDados = {        
   nome:'Ghabi',
   sobrenome:'Luminato',    
   moraNoBrasil:true,
   idade:'20',
   // é possível passar funções dentro do objeto <
   pegaDocumento: () => {
    console.log('CPF: 12339340')
   }
}    



// Verificando se o objeto possui determinado valor

function objetoPossuiValor(ValordaChave){
    const valoresdoObjeto = Object.values(meusDados)
   console.log(valoresdoObjeto)
   return valoresdoObjeto.includes(ValordaChave)
}

console.log(objetoPossuiValor('Ghabi'))
console.log(objetoPossuiValor('Luminato'))
console.log(objetoPossuiValor(true))
console.log(objetoPossuiValor('20'))
console.log('__________________________________________')

console.log(objetoPossuiValor('JOANA'))
console.log(objetoPossuiValor('LuZ'))
console.log(objetoPossuiValor(false))
console.log(objetoPossuiValor(44))
console.log('__________________________________________')

function objetoPossuiChave(nomeDaChave){
    const valoresdoObjeto = Object.keys(meusDados)
    return valoresdoObjeto.includes(nomeDaChave)
}

console.log(objetoPossuiChave('nome'))
console.log(objetoPossuiChave('sobrenome'))
console.log(objetoPossuiChave('moraNoBrasil'))
console.log(objetoPossuiChave('idade'))
console.log('__________________________________________')
console.log(objetoPossuiChave('Nome'))
console.log(objetoPossuiChave('Sobrenome')) 
console.log(objetoPossuiChave('MoraNoBrasil'))
console.log(objetoPossuiChave('Idade'))
//Observe a forma de escrever, as variáveis estão iguais mais diferem de 1 letra maiuscula
meusDados.pegaDocumento()
console.error('ferou')
console.info('informação console.info')
console.warn('atenção');
