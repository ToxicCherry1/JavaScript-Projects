function favorite_Food() {
    var food_Display;
    var chosen_Food = document.getElementById("Food_Input").value;
    var food_String1 = " is pretty tasty, but my favorite is pizza.";
    var food_String2 = " is my favorite, too!";
    switch(chosen_Food) {
        case "Spaghetti":
            food_Display = "Spaghetti" + food_String1;
        break;
        case "Pizza":
            food_Display = "Pizza" + food_String2;
        break;
        case "Salad":
            food_Display = "Salad" + food_String1;
        break;
        case "Chicken and rice":
            food_Display = "Chicken and rice" + food_String1;
        break;
        default:
            food_Display = "Please enter one of the foods above. Make sure your letters match the case of the list.";
    }
    document.getElementById("Food_Output").innerHTML = food_Display;
}

function changeText() {
    var textLines = document.getElementsByClassName("Changing_Text");
    textLines[0].innerHTML = "Line A";
    textLines[1].innerHTML = "Line B";
    textLines[2].innerHTML = "Line C";
}

// Canvas art
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "red");

ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);

ctx.moveTo(0,0);
ctx.lineTo(250,125);
ctx.lineTo(500,0);
ctx.lineTo(250,188);
ctx.lineTo(0,0);
ctx.stroke();