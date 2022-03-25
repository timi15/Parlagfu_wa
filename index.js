const gomb = document.getElementById("gomb");
const p = document.getElementById("ide");

gomb.addEventListener("click", kiir);

function kiir() {
    p.innerHTML = "Ez egy remek feladat";
}

const szin= document.getElementById("szin");
const cim = document.getElementById("cim");

szin.addEventListener("click", szinez);

function szinez(){
    cim.style.color="red";
}
