function book(title, author, pages, read, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info
    this.description = function () {
        return info
    }
}

const theHobbit = new book('The Hobbit', 'John Ronald Reuel Tolkien', 500, false,
    'The Hobbit, or There and Back Again é um livro infantojuvenil de alta fantasia escrito pelo filólogo e professor britânico J. R. R. Tolkien')

console.log(theHobbit)

