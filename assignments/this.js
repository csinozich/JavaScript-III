/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - If there's no more specific use for the *this* keyword, it refers back to the entire window.
* 2. Implicit binding - Automatic binding where you use the parent function left of the function
* 3. New Binding - Builds new objects using constructor functions to define "this"
* 4. Explicit binding - Allows the programmer to decide how to bind by passing in the "this" reference to the function
*
* write out a code example of each explanation above
*/

// Principle 1

function sayHello() {
  console.log(this);
}

sayHello(); //Log is too big! Refers to the entire window.

// Principle 2

const person = {
  name: 'Claire',
  food: 'tiramisu',
  bake: function() {
    console.log(`${this.name} bakes some ${this.food}`);
  }
}

person.bake(); //uses the parent function (person) to decide what 'this' is

// Principle 3

function NewPerson(name) {
  this.name = name;
  this.greeting  = 'hello';
  this.speak = function() {
    console.log(`${this.name} says ${this.greeter}`)
  }
}

const claire = newPerson('Claire');
claire.speak(); // 'Claire says hello'

// Principle 4

const person = {
  name: 'Claire',
}

const favoriteFoods = ['Tiramisu', 'Pasta', 'Fried Chicken'];

function nameFoods(favoriteFoods) {
  console.log(`Hello! My name is ${this.name}, and I like to program in ${favoriteFoods}`)
}

nameFoods.call(person);
