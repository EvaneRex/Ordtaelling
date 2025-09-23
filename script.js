"use strict";
const tekst = document.getElementById("tekstfelt"); // henter tekstarea
const output = document.getElementById("output");

// Opdatere ordtaelling hver gang der er et nyt input
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  const indhold = tekst.value; // henter brugerens tekst
  const tegnMedMellumrum = indhold.length;
  const tegnUdenMellemrum = indhold.replace(/\s+/g, "").length; //fjerner alle whitespaces. + er en eller flere i træk og g er global (regX)

  // console.log("Tegn med mellemrum", tegnMedMellumrum);
  // console.log("tegn uden mellemrum", tegnUdenMellemrum);

  // Tæller ordene op og tjekker om der er noget i det array som regX laver
  const ordArray = indhold.split(/\s+/g); // bruger split så teksten bliver til et array mellem whitespace
  const ordUdenSkrifttegn = [];

  // For løkken fjerne skrifttegnene fra starten af slutningen af ordet og gør at tegn som : ikke tælles med og godtager æøå
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

  // Gemmesnit af tegn i ord
  let antalBogstver = 0;

  // løkken gennemgår hvert ord i arrayet og lægger længden af hvert ord til
  for (let i = 0; i < ordUdenSkrifttegn.length; ++i) {
    antalBogstver += ordUdenSkrifttegn[i].length;
  }
  const gennemsnit = antalOrd > 0 ? (antalBogstver / antalOrd).toFixed(1) : 0; // hvis der er min. et ord, deler den det totale antal af bogstager med antallet af ord. toFixed(giver et decimal)

  // console.log(ordUdenSkrifttegn, antalOrd, gennemsnit);

  // have tingene igennem output, måske i tre seperate dele fremfor i en fælles
  // sætte et maks antal på hvor mange tegn der må være?

  output.innerHTML = `<p>Tegn med mellemrum: ${tegnMedMellumrum}</p>
<p>Tegn uden mellemrum: ${tegnUdenMellemrum}</p>
<p>Ord: ${antalOrd}</p>`;
}
