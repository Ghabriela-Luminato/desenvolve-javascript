const cores = ['Preto', 'roxo'];
//console.log(cores);
//console.log(cores[0]);
//console.log(cores[1]);
//console.log('Quantidade de elementos',cores.length);
//console.log('Posição do roxo',cores.indexOf('roxo')); // Saber a posição do item na array
//console.log('Posição do preto',cores.indexOf('Preto'));
//console.log('Posição do branco',cores.indexOf('branco')); // Se o item não existir na array ele retorna -1
cores.push('Branco'); // Adicionar um item no final da array
console.log(cores);
console.log(cores.length)
console.log('Posição do branco',cores.indexOf('Branco'));
cores.push('Violetta');
console.log(cores);
console.log(cores.length)
console.log('Posição do Violetta',cores.indexOf('Violetta'));

console.log('--------------------');
cores.shift() // remover itens da lista
console.log(cores);

console.log('--------------------');
cores.unshift('Preto'); //Colocar itens no começo da lista
console.log(cores);

console.log('--------------------');
cores.pop() // remover itens do final do array
console.log (cores)
console.log('--------------------');

function removeCor(nomedacor) {
   const posicaoDaCor = cores.indexOf(nomedacor) // remover item do array específico
   if (posicaoDaCor >= 0) {
     cores.splice(posicaoDaCor, 1)
   }
 
console.log(cores)
}

removeCor('roxo') // tem que usar pra remover a cor que vc quer
removeCor('Branco')
removeCor('Branco')