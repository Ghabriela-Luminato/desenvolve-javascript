function eDediaOueDenoite(hora) {
        let periodo = '';
        if (hora <= 18) 
           periodo = "É de dia";
         else
           periodo = "É de noite";
        return periodo;
    }


console.log(eDediaOueDenoite());
console.log(eDediaOueDenoite(11));
console.log(eDediaOueDenoite('dia'));
console.log(eDediaOueDenoite(21));
console.log('--------------------')
  

function eMaiordeIdade(idade) {
    if (idade >= 18) {
        console.log("É maior de idade");
    } else {
        console.log("É menor de idade");
    }
}
 
eMaiordeIdade ('16');
console.log('--------------------')

function periodoDia(hora) {
    if (hora < 12 ) {
        console.log('Manhã'); 
    } else if (hora >= 12 && hora <= 18) {
        console.log('Tarde');
    } else {
        console.log('Noite');
    }

    
}
periodoDia(2);
periodoDia(14);
periodoDia(20);
periodoDia(-30);
periodoDia(42);
console.log('--------------------')

function periodoComRegra(hora) {
    if (hora >= 0 && hora <= 24) {
        periodoDia(hora);
    } else {
        console.log('Hora inválida');
    }
/* NESSE CASO NÃO PRECISA REESCREVER A FUNÇÃO ANTERIOR, SÓ PASSEI A FUNÇÃO
EXISTENTE COMO PARÂMETRO PARA A NOVA FUNÇÃO, 
*/
  }
  periodoComRegra(3);
    periodoComRegra(17);
      periodoComRegra(21);
  periodoComRegra(-3);
  periodoComRegra(300);
console.log('--------------------')

function menuEscolha (opcaodomenu) {
    switch (opcaodomenu) {    
 case 1:
    console.log('Opção 1 selecionada');
    break;
 case 2:
    console.log('Opção 2 selecionada');
    break;
    
     case 3:
    console.log('Opção 3 selecionada');
    break;
      default: 
    console.log('Opção inválida');
}
}
menuEscolha(1);
menuEscolha(2);
menuEscolha(3);
menuEscolha('3');
menuEscolha(4);
console.log('--------------------')

function MaiordeIdadeSimples(idade) {
  let condicaoIdade = idade >= 18 ? "É maior de idade" : "É menor de idade";
  return condicaoIdade;
}

console.log(MaiordeIdadeSimples(18));
console.log(MaiordeIdadeSimples(2));
console.log('--------------------')

function MaiordeIdadeUnario(idade) {
return idade >= 18 && 'É maior de idade'
}
console.log(MaiordeIdadeUnario(18));
console.log(MaiordeIdadeUnario(2));
console.log('--------------------')

function MaiordeIdadeCondicao(idade) {
return idade >= 18 
}
console.log(MaiordeIdadeCondicao(18));
console.log(MaiordeIdadeCondicao(2));

// Condicionais ---> ultiliza algum valor para verfificar se algo é verdadeiro ou falso