//let mergeSort = [ 9,5,7,8,6,4,1,2,3]

function mergeSort(array) {

    if (array.length === 1) {
        return array;
    }

    const half = Math.ceil(array.length / 2);
   //console.log(`divisão do array principal ${half}`)

    const firstHalf = array.slice(0, half)
   // console.log(`Primeiros números: ${firstHalf}`)

    const secondHalf = array.slice(half)
    //console.log(`Números secundários: ${secondHalf}`)

    let newArray = mergeSort(firstHalf).concat(mergeSort(secondHalf));

    let arrayOrdened = [];

    for (let i = 0; i < array.length; i++) {

            //porque os 3 pontos
        let minNumber = Math.min(...newArray);
                                                //quem é o number?
        const position = newArray.findIndex((number) => number === minNumber);

        // vai substitui um parâmetro, mas da onde ele está saindo
        newArray.splice(position, 1);


        arrayOrdened.push(minNumber);

    }
    return arrayOrdened
}

console.log(mergeSort([9, 7, 8, 5, 6, 2]))
