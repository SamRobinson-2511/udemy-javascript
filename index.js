//variables
let age = 72;
//updating variable 
age = age + 1;

//unary operators: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762154#content
age += 1;
age *= 2;
age /= 2;
age -= 1;
age--
age++

//introducing const:https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762156#content
const year = 1973;
const peopleCount = 10;

console.log(year)
//var: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762160#content


//booleans: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762164#content

let isLoggedIn = true;
let gameOver = false;
let isWaterWet = true;
console.log(isLoggedIn, gameOver, isWaterWet)

//variables can change type: use typescript

//strings: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762166#content
typeof "abcd"
console.log(typeof 'abcd')

let firstName = "Ziggy";
let lastName = " Canaryface"
let fullName = firstName + " " + lastName;
console.log(fullName)
console.log(firstName + lastName)

//string indices: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762168#content
console.log("hello".length)

let mySong = "Surfin' USA"
console.log(mySong[0]);

let gibberish = "asdfl;kas;dfjao;skdjfasd;lkfjasdf";
console.log(gibberish[8]);
//strings are immutable 

//string methods: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762170#content
//method: built in action
//thing.method();

//MDN strings: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

const string = "The revolution will not be televised.";
console.log(string); 
const badString = string;
console.log(badString)

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

//escape characters

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

//Lexical Grammar: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings


//Concatenating strings: 
//template literal: use backticks
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`
console.log(joined);


const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);

//Concatenate using "+"

//Numbers v. Strings
const name1 = "Front ";
const number = 242; //browser converts number to string 
console.log(`${name1}${number}`);


//Number(): converts anything passed in to a number 
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

//toString()
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

//Including expressions in strings 
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%`;
console.log(output);

//Multi-line strings
const output2 = `I like the song.
I gave it a score of 90%`;
//string methods

//.toUpperCase()
console.log(output2.toUpperCase());
//.toLowerCase()
console.log(output2.toLowerCase())
//.trim() removes trailing white space 
console.log(output2.trim())
//length
console.log(output2.length)
//slice
console.log(output2.slice(0, 10));
console.log(output2.slice(16));
console.log(output2.slice(-24));
console.log("baseball".slice(4))
console.log("$50.60".slice(1))
//substring: start and end values less than 0 are treated as 0
//if second value is omitted, the rest of the string will be sliced
console.log(output2.substring(7, 13))

//replace()
let annoyingLaugh = "teehee so funny! teehee!"
console.log(annoyingLaugh.replace("teehee", "haha")) //use regex to replace all

//more string methods: https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/16762172#content
//.indexOf(): case sensitive 
let tvShow = "catdog"; 
console.log(tvShow.indexOf('cat'));
console.log(tvShow.indexOf('dog'));
console.log(tvShow.indexOf('z'));
console.log('baseball'.indexOf('ball'));


//MDN template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals














