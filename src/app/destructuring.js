// Destructuring allows you to easily extract array elements or object properties and store them in variables.
// When you first hear about that it might sound like the exact thing the spread operator does but actually

// it's a different thing.

// Spread takes out all elements all properties and distributes them in a new array or object or wherever

// you're using it.
// array destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);

[num1, , num3] = numbers;
console.log(num1, num3);

// object destructuring
{ name } = { name: 'Manu', age: 38 };
console.log(name); // Manu
console.log(age); // undefined
