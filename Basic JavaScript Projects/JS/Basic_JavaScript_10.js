function Call_Loop() {
    var Digits = "Counting down from the number of characters in this string!";
    var countdown = Digits.length;
    while (countdown > 0) {
        Digits += "<br>" + countdown;
        countdown--;
    }
    document.getElementById("Loop").innerHTML = Digits;
}

function for_Loop() {
    var allInstruments = ["Guitars", "Basses", "Drums", "Keyboards"];
    var drumsCheck = "Checking for drums...";
    for (i = 0; i < allInstruments.length; i++) {
        if (allInstruments[i] == "Drums") {
            drumsCheck += "<br>" + allInstruments[i] + " are drums";
        }
        else {
            drumsCheck += "<br>" + allInstruments[i] + " are not drums";
        }
        document.getElementById("InstrumentCheck").innerHTML = drumsCheck;
    }
}

function array_Function() {
    var Flowers = [];
    Flowers[0] = "sunflower";
    Flowers[1] = "lily";
    Flowers[2] = "rose";
    Flowers[3] = "tulip";
    document.getElementById("Array").innerHTML = "My favorite kind of flower is a " + Flowers[2] + ".";
}

function constant_Function() {
    const Racer = {Name:"Mark", Place:"1st"};
    Racer.Name = "Henry";
    Racer.Height = "5\'10\"";
    document.getElementById("Constant").innerHTML = Racer.Name + ", standing at a height of " + Racer.Height + ", came in " + Racer.Place + " place.";
}

// "let" demonstration with block scope
var number = 100;
console.log("The number before \"let\" is " + number);
{
    let number = 200;
    console.log("The number inside the block is " + number);
}
console.log("The number after \"let\" is " + number);

// "return" demonstration
function return_Function(name) {
    return "My name is " + name;
}
console.log(return_Function("Alex"));

let shape = {
    size: "large",
    name: "hexagon",
    sides: 6,
    color: "green",
    description: function() {
        return "The shape is a " + this.size + " " + this.color + " " + this.name + " with " + this.sides + " sides.";
    }
};
document.getElementById("Shape").innerHTML = shape.description();

// Usage of "break" and "continue"
function Countdown_to_5() {
    var display = "Countdown stops once 5 is hit:<br>";
    for (i = 10; i > 0; i--) {
        display += i + "<br>";
        if (i === 5) {break;}
    }
    document.getElementById("Countdown_Break").innerHTML = display;
}
Countdown_to_5();

function Countdown_Past_5() {
    var display = "Countdown will skip 5 and stop at 1:<br>";
    for (i = 10; i > 0; i--) {
        if (i === 5) {continue;}
        display += i + "<br>";
    }
    document.getElementById("Countdown_Skip").innerHTML = display;
}
Countdown_Past_5();