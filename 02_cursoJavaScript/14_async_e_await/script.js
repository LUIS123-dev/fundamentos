//sintaxe
/*
function firstFunction() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 1000)

    })

}

async function secondFunction() {
    console.log("Iniciou")

    await firstFunction()

    console.log("Terminou")
}

secondFunction()
*/

//Prática

function getUser(id){

    return fetch(`https://regres.in/api/users?=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showUserName(id){
    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é:${user.data.first_name}`)
    } catch(err){
        console.log(`Erro: ${err}`)
    }
}


showUserName(3)