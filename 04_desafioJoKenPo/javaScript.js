// capitulo do desafio https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

let game = ['papel', 'pedra', 'tesoura'];

let playerPontuacao = 0;
let computerPontuacao = 0;

function getComputerChoice(lista) {
    let escolha = Math.floor(Math.random() * lista.length);
    return (lista[escolha]);
}

function playRound(WritePlayer, computer) {
    if ((WritePlayer === "pedra" & computer === "pedra") ||
        (WritePlayer === "tesoura" & computer === "tesoura") ||
        (WritePlayer === "papel" & computer === "papel")) {
        console.log("Deu empate")
    } else if ((WritePlayer === "pedra" & computer === "tesoura") ||
        (WritePlayer === "tesoura" & computer === "papel") ||
        (WritePlayer === "papel" & computer === "pedra")) {
        console.log("jogador foi o ganhador")
    } else {
        console.log("Computador foi o ganhador!")
    }
}

function joKenPo() {

    for (let i = 0; i < 5; i++) {

        let maquina = getComputerChoice(game)
        let player = prompt("insira pedra, papel ou tesoura: ").toLocaleLowerCase()

        console.log(`Jogador escolheu: ${player}\nMáquina escolheu: ${maquina}`)
        playRound(player, maquina)

    }
}
joKenPo()





