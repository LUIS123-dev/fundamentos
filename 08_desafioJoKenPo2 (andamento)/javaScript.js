// capitulo do desafio https://www.theodinproject.com/lessons/foundations-rock-paper-scissors


let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

const botoes = document.querySelectorAll('input')

function maquina() {
    let game = ['papel', 'pedra', 'tesoura'];
    return game[Math.floor(Math.random() * game.length)];
}

function playRound(escolhaJogador) {
    let maquina = maquina();

    if ((escolhaJogador === "pedra" & maquina === "pedra") ||
        (escolhaJogador === "tesoura" & maquina === "tesoura") ||
        (escolhaJogador === "papel" & maquina === "papel")) {
        console.log("Deu empate")
    } else if ((escolhaJogador === "pedra" & maquina === "tesoura") ||
        (escolhaJogador === "tesoura" & maquina === "papel") ||
        (escolhaJogador === "papel" & maquina === "pedra")) {
        console.log(`jogador foi o ganhador`)
        pontuacaoJogador += 1
p
    } else {
        console.log("Computador foi o ganhador!")
    }
}



//----------------------------Botões-----------------------









/*
function joKenPo() {

    for (let i = 0; i < 5; i++) {

        let maquina = getComputerChoice(game)
        let player = prompt("insira pedra, papel ou tesoura: ").toLocaleLowerCase()

        console.log(`Jogador escolheu: ${player}\nMáquina escolheu: ${maquina}`)
        playRound(player, maquina)

    }
}
joKenPo()
*/






