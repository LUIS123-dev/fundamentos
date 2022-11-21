const reverseString = function(string) {
    return string.split('').reverse().join('');
   };

console.log(reverseString("teste"))

module.exports = reverseString;