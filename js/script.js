//Starting of javascript
console.log(`Hello, this is my first javascript program`);
console.log(`This is the third line of the code`);

// Displaying the numnbers
console.log('10');

var a = 10;
// Displaying the value of a
console.log(a);
console.log(`The value of is: `, a);
console.warn(`This function is not giving the results properly`);
console.error(`This is the error related to javascript`);
// Datatypes
var firstName = "Gursimran";
var lastName = "Kaur";
console.log("My name is: ", firstName + lastName);
console.log("My name is: " + firstName + " " + lastName);

//Displaying names using backlashes
console.log(`${firstName} ${lastName}`);

var Greet = "Good Afternoon";
console.log(`Hey, ${firstName}!, ${Greet}`, `What are you doing ?`);

//Datatypes

//Numbers
var num = 17;
let no = "18";
console.log(typeof(num));

//strings 
var fname = "Riya";
console.log(typeof(fname));

console.log(no +fname);
console.log(num + fname);
console.log(num + no);

//boolean
var result = true;
console.log(result);

//null
var an = null;
console.log(typeof(an));

//undefined
var numb = undefined;
console.log(typeof(numb));

// cancatenation and addition
var fruits = "apples";
var age = "17";
var digit = 20;
var d = "15";
var e = 18;

console.log(fruits + age);
console.log(age + fruits);
console.log(age + digit);
console.log(digit + age);
console.log(age+d);
console.log(digit+e);

//subtraction
console.log(fruits - age);
console.log(age - fruits);
console.log(age - d);
console.log(age - digit);

//Multiplication
console.log(fruits * age);
console.log(age * fruits);
console.log(fruits * digit);
console.log(age * d);
console.log(age * digit);

//Division
console.log(fruits/age);
console.log(age/fruits);
console.log(age/digit);
console.log(age/d);