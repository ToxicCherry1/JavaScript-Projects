function validateForm() {
    var x = document.forms[0]["firstname"].value;
    if (x == "") {
        alert("Please enter your first name");
        return false;
    }
    x = document.forms[0]["lastname"].value;
    if (x == "") {
        alert("Please enter your last name");
        return false;
    }
}