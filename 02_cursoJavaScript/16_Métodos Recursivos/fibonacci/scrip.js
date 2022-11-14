const fibonacci = function(count) {

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let a = 0;
    let b = 1;

  let fibo = [0,1];

    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;

      fibo.push(fibo[fibo.length-2]+fibo[fibo.length-1]);
      console.log(fibo)
    }

    console.log(fibo)

  };

fibonacci(8)
// Do not edit below this line
module.exports = fibonacci;

