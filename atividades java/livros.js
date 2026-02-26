
let estoque = [];


function adicionarLivro(titulo, autor, quantidade) {
  
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log("Livro já existe no estoque.");
      return;
    }
  }

  
  estoque.push({ titulo: titulo, autor: autor, quantidade: quantidade });
  console.log("Livro adicionado com sucesso!");
}


function removerLivro(titulo) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log("Livro removido com sucesso!");
      return;
    }
  }

  console.log("Livro não encontrado.");
}


function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log("Quantidade atualizada!");
      return;
    }
  }

  console.log("Livro não encontrado.");
}


function listarLivros() {
  console.log("Lista de livros no estoque:");
  for (let livro of estoque) {
    console.log(
      `Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`
    );
  }
}

console.log('------------------------------------')
adicionarLivro("O peregrino", "John Bunyan", 5);
adicionarLivro("Metamofose", "Franz Kafka", 3);
console.log('------------------------------------')
listarLivros();
console.log('------------------------------------')
atualizarQuantidade("O peregrino", 10);
removerLivro("O Pequeno Príncipe");
console.log('------------------------------------')
listarLivros();