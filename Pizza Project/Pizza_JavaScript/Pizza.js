function getReceipt() {
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    getToppings(runningTotal, text1);
}

function getToppings(runningTotal, text1) {
    var meatTotal = 0;
    var vegetableTotal = 0;
    var selectedMeat = [];
    var selectedVegetables = [];
    var meatArray = document.getElementsByClassName("meats");
    var vegetableArray = document.getElementsByClassName("vegetables");

    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    for (var k = 0; k < vegetableArray.length; k++) {
        if (vegetableArray[k].checked) {
            selectedVegetables.push(vegetableArray[k].value);
            text1 = text1 + vegetableArray[k].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    var vegetableCount = selectedVegetables.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    vegetableTotal = vegetableCount;
    runningTotal = (runningTotal + meatTotal + vegetableTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}