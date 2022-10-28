const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'teste do curso';
container.appendChild(content);

let paragrafo = document.createElement('p');
let texto = document.createTextNode("Eu sou vermelho");
paragrafo.appendChild(texto);

paragrafo.style.color = 'red';

container.appendChild(paragrafo);

let titulo3 = document.createElement('h3');
let texto2 = document.createTextNode("Eu sou um h3 azul!");
titulo3.appendChild(texto2);

titulo3.style.color = 'blue';

container.appendChild(titulo3);

