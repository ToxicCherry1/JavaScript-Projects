function displayType(family) {
    var wizardingFamily = family.innerHTML;
    var familyMembers = family.getAttribute("data-wizarding_family");
    alert("Some members of the " + wizardingFamily + " family include " + familyMembers + ".");
}