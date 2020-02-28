function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Human(Name, Age, Sex) {
    this.Human_Name = Name;
    this.Human_Age = Age;
    this.Human_Sex = Sex;
}
var familyMember1 = new Human("Alex", 19, "Male");
var familyMember2 = new Human("Cade", 17, "Male");
var familyMember3 = new Human("Brin", 13, "Female");
function displayFamily() {
    document.getElementById("New_and_This").innerHTML =
    "The first member of the family is " + familyMember1.Human_Name + ", a " +
    familyMember1.Human_Sex + ", who is " + familyMember1.Human_Age + " years old.";
}

function mathFunction() {
    document.getElementById("Nested_Function").innerHTML = multiply_By_Two();
    function multiply_By_Two() {
        var BaseNumber = 45;
        function timesTwo() {
            BaseNumber *= 2;
        }
        timesTwo();
        return BaseNumber;
    }
}