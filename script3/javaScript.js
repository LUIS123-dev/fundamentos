
let game = ['pedra', 'papel', 'tesouro']

function getComputerChoice(lista){
    let escolha = Math.floor(Math.random() * lista.length);
    console.log(lista[escolha]);
}


const ComputerSelection = getComputerChoice(game);



