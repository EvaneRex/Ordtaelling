"use strict";
const tekst = document.getElementById("tekstfelt"); // henter tekstarea
const output = document.getElementById("output");

// Opdatere ordtaelling hver gang der er et nyt input
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  const indhold = tekst.value; // henter brugerens tekst

  // TEGN
  const tegnMedMellumrum = indhold.length;
  //fjerner alle whitespaces. (+ er en eller flere i træk og g er global (regX)) og tæller de resterende tegn
  const tegnUdenMellemrum = indhold.replace(/\s+/g, "").length;

  // ORD
  // Tæller ordene op og tjekker om der er noget i det array som regX laver
  // bruger split så teksten bliver til et array mellem whitespace
  const ordArray = indhold.split(/\s+/g);
  const ordUdenSkrifttegn = [];

  // Gå gennem hvert ord og fjerner skrifttegn i starten og slutningen af ordet.
  for (let i = 0; i < ordArray.length; ++i) {
    let ord = ordArray[i].replace(
      /^[^a-zA-ZæøåÆØÅ\d]+|[^a-zA-ZæøåÆØÅ\d]+$/g,
      ""
    );
    if (ord.length > 0) {
      ordUdenSkrifttegn.push(ord); // hvis ordet er større end 0 så tilføjes det i et array
    }
  }
  const antalOrd = ordUdenSkrifttegn.length;

  // UDREGNING AF GENNEMSNITTET AF TEGN I ORD
  let antalBogstaver = 0;

  // løkken gennemgår hvert ord i arrayet og lægger længden af hvert ord til
  // Udregner samtidigt det totale antal af bogstaver i alle ord
  for (let i = 0; i < ordUdenSkrifttegn.length; ++i) {
    antalBogstaver += ordUdenSkrifttegn[i].length;
  }

  // hvis der er min. et ord, deler den det totale antal af bogstager med antallet af ord. toFixed(giver et decimal)
  const gennemsnit = antalOrd > 0 ? (antalBogstaver / antalOrd).toFixed(1) : 0;

  // OPDATERER TALLET I TEKSTFELTERNE I HTML
  document.getElementById("tegnMed").textContent = tegnMedMellumrum;
  document.getElementById("tegnUden").textContent = tegnUdenMellemrum;
  document.getElementById("antalOrd").textContent = antalOrd;
  document.getElementById("gennemsnit").textContent = gennemsnit;
}
