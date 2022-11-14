/*escreva o produto de um Array*/

function productOfArray(array){
	if(array.length === 0) return 1;
    console.log(array);
	return array.shift() * productOfArray(array);
}

let six = productOfArray([1,2,3]) // 6


console.log(six);
