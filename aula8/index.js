const todoMundove = ('Todo mundo ve essa variavel de escopo global');{

}
function executaEscopoGlobal(){
 console.log(todoMundove);

}

function executaEscopoLocal(){
    const visivelEmEscopoLocal= ('Só que esta dentro do bloco de função ve');
  console.log(visivelEmEscopoLocal)

  function chamaDentroDoEscopo () {
   console.log('Dentro do escopo =>', visivelEmEscopoLocal);
 
  }
   chamaDentroDoEscopo();
}

executaEscopoGlobal();

executaEscopoLocal();




/*Escopo Global é quando se delara uma função/variavel que está
acessivel em todo código*/ 