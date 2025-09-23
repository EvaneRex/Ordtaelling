"use strict";
let tekst = document.getElementById("tekstfelt"); // henter tekstarea
let output = document.getElementById("output");

// så input bliver opdateret hver gang brugeren skriver noget
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  let indhold = tekst.value; // henter brugerens tekst
  let tegnMedMellumrum = indhold.length;
  let tegnUdenMellemrum = indhold.replace(/\s+/g, "").length; //fjerner alle mellemrum i træk, så \s er ting som mellemrum, tab eller linjeskift. + er en eller flere i træk og g er global (regX)
  let antalOrd = 0;

  console.log("Tegn med mellemrum", tegnMedMellumrum);
  console.log("tegn uden mellemrum", tegnUdenMellemrum);

  // Husk gennemsnit af tegn i ord

  if (indhold.length > 0) {
    antalOrd = indhold.match(/\S+/g).length; // \S er alle ikke whitespace tegn, så ordene
    console.log(antalOrd);
  } else {
    antalOrd = 0;
  }
  // if statement til antal of ord, have tingene igennem output, måske i tre seperate dele fremfor i en fælles
  // sætte et maks antal på hvor mange tegn der må være?
}
