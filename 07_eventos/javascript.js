/*
const bnt = document.querySelector('#bnt');
bnt.onClick = () => alert("Hellor World");
*/

/*
const btn = document.querySelector('#bnt');
btn.addEventListener('click',function(e){
    console.log(e.target)
});

*/

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});