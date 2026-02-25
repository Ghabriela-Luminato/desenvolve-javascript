const meusDados = {        // {} essa variável significa objetos
   nome:'Ghabi',
   sobrenome:'Luminato',    // não esquece da , (vírgula) se não vai dar erro
   moraNoBrasil:true,
   idade:'20'
}    

console.log(meusDados)
console.log('--------------------')
// Notação própia do objeto
console.log(meusDados.nome)      // acessar um unico dado
console.log('--------------------')
// processar como se fosse array
console.log(meusDados['sobrenome'])     
console.log('--------------------')
function retornaDadoPessoal(dadoPessoal) {
   return meusDados [dadoPessoal];
}
console.log(retornaDadoPessoal('sobrenome'))
console.log(retornaDadoPessoal('moraNoBrasil'))
console.log(retornaDadoPessoal('idade'))