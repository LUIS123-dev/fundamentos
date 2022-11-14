/*Pergunta 1: Somar todos os números
Escreva uma função chamada sumRange. Ele pegará um número e retornará a soma de todos os números de 1 até o número passado.

Exemplo: sumRange(3) retorna 6, pois 1 + 2 + 3 = 6.*/




var output = sumRange(3)
console.log(output);

function sumRange(num){
	if(num == 1) return 1;

	return num + sumRange(num -1 );
}

