/*Escreva uma função que retorne o factorialde um número. Como uma rápida atualização, um fatorial de um número é o
resultado desse número multiplicado pelo número antes dele e o número antes desse número e assim por diante, até
chegar a 1. O fatorial de 1 é apenas 1*/

function fatorial (num){
    console.log(num)
    if ( num == 1) return 1;
 return num * fatorial(num - 1);
 }

 console.log(fatorial(5))



