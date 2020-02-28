var global = "global variable"; // A global variable

function displayText1() { // This function will display the full text correctly
    var local = "local variable"; // A local variable
    document.writeln("This line consists of a " + global + " and a " + local + ".");
    console.log(local);
}

function displayText2() { // This function will not display any text due to no variable called "local"
    document.writeln("This line consists of a " + global + " and a " + local + ".");
    console.log(local);
}

displayText1();
displayText2();

function Hours() {
    if (new Date().getHours() < 12) {
        document.getElementById("PLine1").innerHTML = "Good morning!";
    }
    else {
        document.getElementById("PLine1").innerHTML = "Good afternoon!";
    }
}

function checkCarColor() {
    if (document.getElementById("carColor").value == "blue") {
        document.getElementById("PLine2").innerHTML = "Blue cars are the coolest.";
    }
    else {
        document.getElementById("PLine2").innerHTML = "Your car isn't blue..."
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}