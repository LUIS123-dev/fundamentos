let livros = [];

function book(title, author, pages, read, info) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = info;
        this.description = function () {
        console.log(this.info)
        }
    }

    function addBook(livro){
        livros.push(livro)
        console.log(`O livro: ${livro.title}`)
    }

const theHobbit = new book('The Hobbit', 'John Ronald Reuel Tolkien', 500, false,
'The Hobbit, or There and Back Again é um livro infantojuvenil de alta fantasia escrito pelo filólogo e professor britânico J. R. R. Tolkien')

addBook(theHobbit)

function listaDosLivros(){
    for(i in livros)console.log(livros[i]);
}

listaDosLivros()







