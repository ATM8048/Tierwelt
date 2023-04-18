/* Arten Teil*/
// Container-Elemente abrufen
let container1 = document.querySelector(".kingPython");
let container2 = document.querySelector(".Kornnatter");
let container3 = document.querySelector(".BoaConstrictor");
let container4 = document.querySelector(".Klapperschlange")
let ArtSpn = document.querySelector("#Art");

// Event-Listener für Button 1
document.querySelector("#kingBtn").addEventListener("click", function () {
    container1.style.display = "block";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    ArtSpn.innerHTML = "Königspython";
});

// Event-Listener für Button 2
document.querySelector("#KornnatterBtn").addEventListener("click", function () {
    container1.style.display = "none";
    container2.style.display = "block";
    container3.style.display = "none";
    container4.style.display = "none";
    ArtSpn.innerHTML = "Kornnatter";
});

// Event-Listener für Button 3
document.querySelector("#BoaBtn").addEventListener("click", function () {
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "block";
    container4.style.display = "none";
    ArtSpn.innerHTML = "Boa Constrictor";
});

document.querySelector("#KlapperschlangeBtn").addEventListener("click", function () {
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "block";
    ArtSpn.innerHTML = "Klapperschlange";
});