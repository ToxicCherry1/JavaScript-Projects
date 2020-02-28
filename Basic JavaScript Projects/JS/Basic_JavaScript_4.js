function Dictionary() {
    var Country = {
        Name: "United States",
        Area: "3.797 mil square miles",
        Government: "Democratic Republic",
        Founded: 1776
    };
    document.getElementById("Dictionary").innerHTML = Country.Area;
    delete Country.Founded;
    document.getElementById("Dictionary").innerHTML = Country.Founded;
}