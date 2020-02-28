function changeTextColor() {
    var str = "Red text";
    var result = str.fontcolor("red");
    document.getElementById("paragraph01").innerHTML = result;
}

function concatenate() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}