/* ----> LAÇOS DE REPETIÇÃO <---
ESTRUTURA DE PROGRAMAÇÃO EM QUE SE EXECUTA COISAS
ATÉ QUE UMA CONDIÇÃO SEJA ATENDIDA
*/

const fibonacci =[1,11,111,1111,11111,11111,2,22]

function iteraSobreoArray(){
    for(let i = 0; i < fibonacci.length; i++) {
  console.log(i+1, 'O ITEM',fibonacci[i])
}
}
iteraSobreoArray()
console.log('________________________________')

function contaAte(numero) {
    for(let conta = 1; conta <= numero; conta ++){
    console.log('Mariana Conta',conta)
    }
    
}
contaAte(10)
console.log('________________________________')
contaAte(2)
console.log('________________________________')
contaAte(5)
console.log('________________________________')

function verificaItemNoArry(listaDeNumeros){
  for(let item of listaDeNumeros){
   console.log(item)

  }  
}
verificaItemNoArry(fibonacci)

console.log('________________________________')

function verificaItemPorIndice(listaDeNumeros){
   for(let indice in listaDeNumeros){
        console.log(listaDeNumeros[indice])
   }

}

verificaItemPorIndice(fibonacci)
console.log('________________________________')

function contaPeloMenosUm(numeroLimite){
    let numero = 0
    do {
        
        console.log(numero)
        numero++
    }while(numero <= numeroLimite)
}

contaPeloMenosUm(1)
contaPeloMenosUm(0)

function verificaSePodeAte(numeroLimite){
    let numero = 0 
 while(numero <= numeroLimite){ 
        console.log(numero)
        numero++ 
        }
    }
  

verificaSePodeAte(1)

verificaSePodeAte(0)