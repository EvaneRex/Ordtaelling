"use strict";
const tekst = document.getElementById("tekstfelt"); // henter tekstarea
const output = document.getElementById("output");

// så input bliver opdateret hver gang brugeren skriver noget
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  let indhold = tekst.value; // henter brugerens tekst
  let tegnMedMellumrum = indhold.length;
  let tegnUdenMellemrum = indhold.replace(/\s+/g, "").length; //fjerner alle whitespaces. + er en eller flere i træk og g er global (regX)

  console.log("Tegn med mellemrum", tegnMedMellumrum);
  console.log("tegn uden mellemrum", tegnUdenMellemrum);

  // Tæller ordene op og tjekker om der er noget i det array som regX laver
  let ordArray = indhold.split(/\s+/g); // bruger split så teksten bliver til et array mellem whitespace
  let ordUdenSkrifttegn = [];

  for (let i = 0; i < ordArray.length; ++i) {
    let ord = ordArray[i].replace(/^[^\w]+|[^\w]+$/g, ""); // fjerner skrifttegnene fra starten og slutningen af ordet, og gør at : ikke tælles med hvis den står enkeltvist
    if (ord.length > 0) {
      ordUdenSkrifttegn.push(ord); // hvis ordet er større end 0 så tilføjes det i et array
    }
  }
  let antalOrd = ordUdenSkrifttegn.length;

  console.log(ordUdenSkrifttegn, antalOrd);

  // have tingene igennem output, måske i tre seperate dele fremfor i en fælles
  // sætte et maks antal på hvor mange tegn der må være?
}
