
let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a)

//========================================================

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };

  const taco = FactoryFunction('taco');

 // printString(); // ERROR!!
 // capitalizeString(); // ERROR!!
//taco.capitalizeString(); // ERROR!!
  taco.printString(); // this prints "----TACO----"

