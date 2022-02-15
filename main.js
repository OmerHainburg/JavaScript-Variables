var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);

//Create a Variable: let
//As mentioned in the previous exercise, the let keyword was introduced in ES6.
//The let keyword signals that the variable can be reassigned a different value.
let changeMe = true;
changeMe = false;
console.log(changeMe);

//Create a Variable: const
//The const keyword was also introduced in ES6, and is short for the word constant.
//Just like with var and let you can store any value in a const variable.
//The way you declare a const variable and assign a value to it follows the same structure
//as let and var. Take a look at the following example:
const entree = 'Enchiladas';
console.log(entree);

//entree = 'Tacos'; TypeError: Assignment to constant variable.

//const testing; SyntaxError: Missing initializer in const declaration

//Mathematical Assignment Operators
//Let’s consider how we can use variables and math operators to calculate new
//values and assign them to a variable. Check out the example below:

let w = 4;
w = w + 1;
 
console.log(w); // Output: 5
//In the example above, we created the variable w with the number 4 assigned to it.
//The following line, w = w + 1, increases the value of w from 4 to 5.
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator
//Other mathematical assignment operators include the
//increment operator (++) and decrement operator (--).
//The increment operator will increase the value of the variable by 1.
//The decrement operator will decrease the value of the variable by 1. For example:

let a = 10;
a++;
console.log(a); // Output: 11
let b = 20;
b--;
console.log(b); // Output: 19
//Just like the previous mathematical assignment operators (+=, -=, *=, /=),
//the variable’s value is updated and assigned as the new value of that variable.
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

console.log(gainedDollar);
console.log(lostDollar);

//String Concatenation with Variables
//In previous exercises, we assigned strings to variables.
//Now, let’s go over how to connect, or concatenate, strings in variables.
//The + operator can be used to combine two string values even if those values
//are being stored in variables:

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
let favoriteAnimal  = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);

//String Interpolation
//In the ES6 version of JavaScript, we can insert, or interpolate,
//variables into strings using template literals. Check out the following example
//where a template literal is used to log strings together:

const myPet1 = 'armadillo';
console.log(`I own a pet ${myPet1}.`);
// Output: I own a pet armadillo.

let myName = 'Omer';
let myCity = 'Hainburg';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof operator
//While writing code, it can be useful to keep track of the data types of the
//variables in your program. If you need to check the data type of a
//variable’s value, you can use the typeof operator.
//The typeof operator checks the value to its right and returns,
//or passes back, a string of the data type.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
//Let’s break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.