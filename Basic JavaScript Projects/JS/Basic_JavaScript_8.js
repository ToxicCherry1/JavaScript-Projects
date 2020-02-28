var part_1 = "According to all known ";
var part_2 = "laws of aviation, there ";
var part_3 = "is no way that a bee ";
var part_4 = "should be able to fly. ";
var part_5 = "Its wings are too small ";
var part_6 = "to get its fat little body ";
var part_7 = "off the ground. The bee, ";
var part_8 = "of course, flies anyway. ";
var part_9 = "Because bees don't care what ";
var part_10 = "humans think is impossible.";
var full = part_1.concat(part_2, part_3, part_4, part_5, part_6, part_7, part_8, part_9, part_10); // concat() method

function full_paragraph() {
    document.getElementById("Concatenate").innerHTML = full;
}

function slice_paragraph() {
    document.getElementById("Slice").innerHTML = full.slice(94, 100); // slice() method
}

function upperCase() {
    document.getElementById("toUpperCase").innerHTML = full.toUpperCase(); // toUpperCase() method
}

function search() {
    document.getElementById("searchParagraph").innerHTML = full.search("wings"); // search() method
}

function convertToString() {
    document.getElementById("numberAsAString").innerHTML = full.search("wings").toString(); // toString() method
}

function precision() {
    document.getElementById("precise").innerHTML = Math.PI.toPrecision(10); // toPrecision() method
}

function convertToFixedString() {
    document.getElementById("fixedDecimal").innerHTML = Math.PI.toFixed(2); // toFixed() method
}

function displayValueOf() {
    document.getElementById("value").innerHTML = "Hello World".valueOf();
}