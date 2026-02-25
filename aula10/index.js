// Quando ver um [ ] significa que é um array

const MusicasqueEuGosto = ['Rock', 'Pop','Rap', 'MPB', 'Eletrônica'];
console.log(MusicasqueEuGosto);
console.log(MusicasqueEuGosto[0]); // Acessar 1 item da lista, toda array começa com 0, por isso que aundo digitei um caiu em pop
console.log(MusicasqueEuGosto[1]);
console.log(MusicasqueEuGosto[5-1]); // Acessar o ultimo item da array
console.log(MusicasqueEuGosto.length); // Saber quantidade de itens array
console.log(MusicasqueEuGosto[MusicasqueEuGosto.length-1]);
console.log('--------------------');

const CoisasqueEuGosto = ['3', 'Família', ['Programar', 'Música'],true]; // pode ter uma array dentro de outra array
console.log(CoisasqueEuGosto);