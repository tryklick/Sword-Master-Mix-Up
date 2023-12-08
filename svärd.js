//Några konstanter och ett objekt att utgå från
const eu = "europeiskt";
const jpn = "japanskt";
const fantasy = "fantasi";

function Svärd(typ, bild) {
    this.typ = typ;
    this.bild = bild;
}

//Använden den här listan på svärd för godkänt, för VG ska du hämta den större listan via fetch
let allaSvärd = [
    new Svärd(eu, "img/european/1.jpg"),
    new Svärd(eu, "img/european/2.jpg"),
    new Svärd(jpn, "img/japanese/1.jpg"),
    new Svärd(jpn, "img/japanese/2.jpg"),
    new Svärd(fantasy, "img/fantasy/1.jpg"),
    new Svärd(fantasy, "img/fantasy/2.jpg")
]
//***Låt koden ovanför vara, du får inte ändra på den***

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    footer.textContent = "Skapad av Daniella Bwende";
  
    const svardBild = document.getElementById("svärdbild");
    const knapprad = document.querySelector(".knapprad");
    const knappvald = document.querySelectorAll(".val");
    const musashiCounter = document.querySelector("#musashi h3");
    const liechtenauerCounter = document.querySelector("#liechtenauer h3");
  
    let musashiCount = 0;
    let liechtenauerCount = 0;
  
    function uppdateraSvärdBild() {
      const randomSvard = allaSvärd[Math.floor(Math.random() * allaSvärd.length)];
      svardBild.src = randomSvard.bild;
      svardBild.dataset.type = randomSvard.typ;
    }
  
    function uppdateraRäknare() {
      musashiCounter.textContent = `Musashi har ${musashiCount} svärd`;
      liechtenauerCounter.textContent = `Liechtenauer har ${liechtenauerCount} svärd`;
    }
  
    function gratulationMeddelande() {
      if (musashiCount >= 2 && liechtenauerCount >= 2) {
        document.getElementById("grattis").classList.remove("osynlig");
      }
    }
  
    function resetSvärd() {
      musashiCount = 0;
      liechtenauerCount = 0;
      uppdateraRäknare();
      uppdateraSvärdBild();
      document.getElementById("grattis").classList.add("osynlig");
    }
  
    document.getElementById(eu).addEventListener("click", () => {
      if (svardBild.dataset.type === eu) {
        liechtenauerCount++;
        liechtenauerCounter.textContent = `Liechtenauer har ${liechtenauerCount} svärd`;
        gratulationMeddelande();
      }
      uppdateraSvärdBild();
    });
  
    document.getElementById(jpn).addEventListener("click", () => {
      if (svardBild.dataset.type === jpn) {
        musashiCount++;
        musashiCounter.textContent = `Musashi har ${musashiCount} svärd`;
        gratulationMeddelande();
      }
      uppdateraSvärdBild();
    });
  
    const fantasyButton = document.getElementById("fantasi");
    fantasyButton.addEventListener("click", () => {
      resetSvärd();
    });
  
    const svärdwrapper = document.getElementById("svärdwrapper");
    svärdwrapper.addEventListener("mouseover", () => {
      knapprad.classList.remove("osynlig");
    });
  
    svärdwrapper.addEventListener("mouseout", () => {
      knapprad.classList.add("osynlig");
    });
  
    uppdateraSvärdBild();
    uppdateraRäknare();
  });
  