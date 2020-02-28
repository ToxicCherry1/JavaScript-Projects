document.writeln(typeof true);
document.writeln(2E308); // Displays infinity
document.writeln(-2E308); // Displays negative infinity

// Math operators
document.writeln(1 >= 1); // Displays true
document.writeln(0 >= 1); // Displays false
document.writeln(5 == 6 - 1); // Displays true

// Boolean logic and operators
document.writeln("Cheese" === "Cheese"); // Displays true
document.writeln("Cheese" === 82); // Displays false
document.writeln("82" === 82); // Displays false
document.writeln("Cheese" === "Ham"); // Displays false
document.writeln(5 != 4 && 4 == 4); // Displays true
document.writeln(5 == 5 || 4 == 5); // Displays true

console.log(15 + 3); // Logs 18 to the console
console.log("5" + 5); // Type coercion
console.log(1 != (2 - 1)) // Displays false in the console

function NaNtest() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function NaNtrue() {
    document.getElementById("NaNtrue").innerHTML = isNaN("String");
}

function NaNfalse() {
    document.getElementById("NaNfalse").innerHTML = isNaN(4);
}

function not_Function1() {
    document.getElementById("Not").innerHTML = !(2 < 1);
}

function not_Function2() {
    document.getElementById("NotNot").innerHTML = !(2 > 1);
}