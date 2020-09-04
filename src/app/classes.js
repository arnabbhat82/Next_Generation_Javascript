// Classes are essentially blueprints for objects.

// In our case here for javascript objects. A class is created with the class keyword and a class can have

// both properties and methods.

// Methods are simply functions attached to classes where properties are variables attached to classes.

class person {
  name = 'Manu'; // property
  call = () => { } // function
}

// a class is instantiated like this with the new keyword.

const myPerson = new person();
myPerson.call();
console.log(myPerson.name);

// so you create javascript objects with classes as blueprints.

// classes also support inheritance.
// Which means you have another class which you inherit from taking all its properties and methods and

// potentially adding new properties and methods.

// class person extends Master

// now in its simplest form a property is added by adding a

// constructor that is a default function method.

// You can add to any class which will be executed whenever you instantiate the class and the method is

// created just with the name of the method parentheses and then curly braces.
class Human {
  constructor() {
    this.gender = 'Male';
  }
  printMyGender() {
    console.log(this.gender);
  }
}


class Person extends Human {
  constructor() {
    super();
    this.name = 'Manu';
  }
  printMyName() {
    console.log(this.name);
  }
  const person = new Person();
  person.printMyName();
  person.printMyGender();
}

// properties are like variables you attach to classes and objects, methods are

// like functions attached to classes and objects
