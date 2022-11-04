const container = document.querySelector('#content');
const content = document.createElement('div');
content.classList.add('conteudo');

let paragrafo = document.createElement('p');
let texto = document.createTextNode("Bem-vindo a um dos melhores ");
paragrafo.appendChild(texto);

container.appendChild(content);

paragrafo.style.color = 'red';

container.appendChild(paragrafo);

let titulo3 = document.createElement('h3');
let texto2 = document.createTextNode("Eu sou um h3 azul!");
titulo3.appendChild(texto2);

titulo3.style.color = 'blue';