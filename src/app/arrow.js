// When you use this inside an arrow function it will always keep its context and not change it surprisingly

// on runtime.
// normal function start
function printMyName(name) {
  console.log(name);
}

printMyName();
printMyName('Manu');
// normal function ends


// converting normal function to arrow function
const printMyName = (name) => {
  console.log(name);
}
printMyName('Manu');

// arrow function without argument
const printMyName = () => {
  console.log('manu');
}
printMyName();

// more than one argument
const printMyName = (name, age) => {
  console.log(name, age);
}
printMyName('Manu', 38);

// return multiplying of number
const multiply = (number) => {
  return number * 2;
}
console.log(multiply(2));

// shrt cut for writing arrow function if it has got one argument and single line of code in the function block
const multiply = number => number * 2;

console.log(multiply(5));
