//Crianção de promessa



const myPromisse = new Promise((resolve, reject) => {
    const nome = "Luis1"

    if (nome === "Luis1") {
        resolve("Usuário Luis1 encontrado!")
    } else {
        reject('O usuário Luis1 não foi encontrado!')
    }
})

myPromisse.then((data) => {
    console.log(data)
})

//Encadeamento de then's

const myPromisse2 = new Promise((resolve, reject) => {
    const nome = "Luis2"

    if (nome === "Luis2") {
        resolve("Usuário Luis2 encontrado!")
    } else {
        reject("O usuário Luis2 não foi encontrado!")
    }
})

myPromisse2.then((data) => {
    return data.toLowerCase()
}).then((stringModificado) => {
    console.log(stringModificado)
})

// Retorno do catch
const myPromisse3 = new Promise((resolve, reject) => {
    const nome = 'Luis3'

    if (nome === 'Luis3') {
        resolve("Usuário Luis3 encontrado!")
    } else {
        reject('O usário Luis3 não foi encontrado!')
    }
})

myPromisse3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro:' + err)
})

//Resolver várias promessas com All --> retorna só quando todas estiverem disponíveis

const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("P1 ok! Timeout")
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// Várias promessas com Race --> Retorna a mais rápida

const p4 = new Promise((resolve, reject) =>{
    setTimeout(() => {
    resolve ("P4 ok! Timeout")
    },2000)
})


const p5 = new Promise ((resolve, reject) => {
    resolve ('p5 ok!')
})

const p6 = new Promise ((resolve, reject) => {
    resolve ('p6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

//---------------------------------------------------------*--------------------------------

// Fetch request na API do Github
// Fetch API

//Buscado meu usuário no Github

const userName = "LUIS123-dev"

fetch(`https://api.github.com/users/${userName}`,{
    method: "GET",
    headers: {
        Accept:`application/vnd.github.v3+json`
    }
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) =>{
    console.log(` O nome do usuário é: ${data.name}`)
})


