"use strict";
let tekst = document.getElementById("tekstfelt"); // henter tekstarea
let output = document.getElementById("output");

// så input bliver opdateret hver gang brugeren skriver noget
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  let indhold = tekst.value; // henter brugerens tekst
  let tegnMedMellumrum = indhold.length;
  let tegnUdenMellemrum = indhold.replace(/\s+/g, "").length; //fjerner alle mellemrum i træk, så \s er ting som mellemrum, tab eller linjeskift. + er en eller flere i træk og g er global
}
