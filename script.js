"use strict";
let tekst = document.getElementById("tekstfelt"); // henter tekstarea
let output = document.getElementById("output");

// så input bliver opdateret hver gang brugeren skriver noget
tekst.addEventListener("input", ordtaelling);

function ordtaelling() {
  let indhold = tekst.value; // henter brugerens tekst
  let tegnMedMellumrum = indhold.length;
  let tegnUdenMellemrum = indhold.replace(/\s+/g, "").length; //fjerner alle whitespaces. + er en eller flere i træk og g er global (regX)

  console.log("Tegn med mellemrum", tegnMedMellumrum);
  console.log("tegn uden mellemrum", tegnUdenMellemrum);

  // Tæller ordene op og tjekker om der er noget i det array som regX laver
  let ordArray = indhold.match(/\S+/g); // \S er alle ikke whitespace tegn, så ord, tal og tegn
  let antalOrd = ordArray ? ordArray.length : 0; // hvis der er ord, gemmes længden ellers er det lig 0

  console.log(antalOrd);

  // have tingene igennem output, måske i tre seperate dele fremfor i en fælles
  // sætte et maks antal på hvor mange tegn der må være?
}
