function additionFunction() {
    var addition = 5 + 3;
    document.getElementById("Add").innerHTML = "Click me! 5 + 3 = " + addition;
}

function subtractionFunction() {
    var subtraction = 6 - 4;
    document.getElementById("Subtract").innerHTML = "Click me! 6 - 4 = " + subtraction;
}

function multiplicationFunction() {
    var multiplication = 8 * 2;
    document.getElementById("Multiply").innerHTML = "Click me! 8 &times; 2 = " + multiplication;
}

function divisionFunction() {
    var division = 54 / 9;
    document.getElementById("Divide").innerHTML = "Click me! 54 &divide; 9 = " + division;
}

function allAtOnceFunction() {
    var allAtOnce = (6 * 5) / 2 + 3 - 10;
    document.getElementById("AllAtOnce").innerHTML = "Click me! 6 times 5, divided by 2, then adding 3 and subtracting 10 = " + allAtOnce;
}
function modulusFunction() {
    var modulus = 19 % 6;
    document.getElementById("Modulus").innerHTML = "Click me! When dividing 19 by 6, the remainder is " + modulus + ".";
}

function negationFunction() {
    var negation = 3;
    document.getElementById("Negation").innerHTML = "Click me! The inverse of 3 is " + -negation + ".";
}

function incrementFunction() {
    var increment = 4;
    var decrement = 8.5;
    increment++;
    decrement--;
    document.getElementById("Increment").innerHTML = "Click me! Adding 1 to 4 is " + increment + ", and subtracting 1 from 8.5 is " + decrement + ".";
}

function randomFunction() {
    var random = (Math.random() * 50);
    document.getElementById("Random").innerHTML = "Click me for a random number from 0 to 50 = " + random;
}

function printPi() {
    var pi = Math.PI
    document.getElementById("Pi").innerHTML = "Click me to print the ratio of a circle's circumference to its diameter... " + pi;
}