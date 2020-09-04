// the spread operator is used to split up

// array elements or object properties.

// So we spread up an array or object.

// For example if we have an old array and we want to add all the elements from that old array to a new

// array and additionally add a 1 and a 2 element this first syntax would be what we use, three dots in

// front of old array will simply pull out all the elements and add it to the new array which we created

// with square brackets.

// And of course then we can add more elements to it.

// So if we just use the normal syntax with the square brackets to create an array, the same for the object.

// We create a new object with curly braces with the new prop but then we also have dot dot dot.

// Old object to pull out all the properties of the old object and their values and add them as key value

// pairs to the new object as a side note if the old object.

// Also had a new property.

// It would be overwtitten by a new prop 5 here.

// So our own property takes precedence. This is the spread operator.

// Now the rest operator is the same operator but used differently, here it's used to merge a list of function

// arguments into an array.

// And this shows us where we use it.

// We use it in a function argument list.

// Here is an example.

// sortArgs receives an unlimited amount of arguments.

// So one argument, two, three or whatever, with dot dot dot we only write one argument args but we may actually

// receive more than one and they will all be merged together into an array.

// So then we can apply array methods to our argument list or do whatever we want to do with our conveniently

// stored arguments.

// Let's have a look at both used as such on jsbin then.

// So let's start with the spread operator I'll create an array of numbers.

// So one, two, three add as many as you want.

// Now I want to create a new array newNumbers and as you saw spread is now simply used by adding three

// dots.

// Then the old array numbers and then potentially you don't have to do that.

// New numbers like 4 and again that is optional.

// With that if I now console log.

// newNumbers here.

// And I had run we get one two three four the old array with all its elements and the new element.

// And actually we don't add the old element.

// If we were to do that without the dots it would be included as one element inside the new element.

// It really pulled out the old elements as you can clearly see.

// So that's the spread operator and you will see me use this throughout this course a couple of times on

// both arrays and objects to for example conveniently copy arrays or add properties to an object whilst

// safely copying that old object.

// spread operators start
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// for objects
const person = {
  name: 'manu'
}
const newPeson = {
  ...person,
  age: 38
}
console.log(newPeson);

// for function
const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));
// spread operators end


