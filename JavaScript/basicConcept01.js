// Basic Concept of ES6  JavaScript Day01

/*
    Data Types 
    undefined, null, boolean, string, symbol, number, and object

*/

var myName = "Jasper";

myName = 5;

let ourName = "freeCodeCamp";

const pi = 3.14;

var myStr = 'I am a "double quoted" string insides "double quoted"';

/*
CODE OUTPUT
\' single quote
\" double quote
\\ back slash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

var ourStr = "I come first. " + "I come second.";

ourStr = "I come first";

ourStr += "I come seconde.";

/* 
Handling Array 
.push()
.pop()
.shift()
*/

var ourArray = ["Stimpson", "J", ["cat"]];

var addToOurArray = ourArray.push(["Jasper", 27]);

var popFromOurArray = ourArray.pop();

var removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray); // "Stimpson"
console.log(ourArray); // ["J" , ["cat"]]

/*
Function

with Globe Scope
*/

// Declare your variable here

var myGlobal = 10;

function fun1() {
  //Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oops Global: " + oopsGlobal;
  }
  console.log(output);
}

// func1();
// func2();

/*
Stand in Line
*/

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After : " + JSON.stringify(testArr));
