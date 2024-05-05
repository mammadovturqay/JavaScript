console.log("Turqayin Taski");
//Task1 Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
// valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.
// function valyutaKonvertoru(miqdar, valyuta) {
//   if (valyuta === "EUR") {
//     return miqdar * 0.83;
//   } else if (valyuta === "UAH") {
//     return miqdar * 27.35;
//   } else if (valyuta === "AZN") {
//     return miqdar * 1.7;
//   } else {
//     return "WRONG";
//   }
// }

// let miqdar = parseFloat(prompt("Pulu daxil edin: "));
// let valyuta = prompt("Valyuta (EUR, UAH, AZN): ");
// console.log(valyutaKonvertoru(miqdar, valyuta));

// Task 2

// function endirimHesabla(miqdar) {
//   if (miqdar >= 200 && miqdar < 300) {
//     return miqdar * 0.97;
//   } else if (miqdar >= 300 && miqdar < 500) {
//     return miqdar * 0.95;
//   } else if (miqdar >= 500) {
//     return miqdar * 0.93;
//   } else {
//     return miqdar;
//   }
// }

// let miqdar = parseFloat(prompt("Pulu  daxil edin: "));
// console.log(endirimHesabla(miqdar));

//Task3
// function dairePerimetri(radius) {
//   return 2 * Math.PI * radius;
// }

// function kvadratPerimetri(kenar) {
//   return 4 * kenar;
// }

// let radius = parseFloat(prompt("Dairenin radiusunu daxil edin: "));
// let kenar = parseFloat(prompt("Kvdaratin bir tərəfini daxil edin: "));
// console.log("Dairənin perimetri: " + dairePerimetri(radius));
// console.log("Kvadrratin perimetri: " + kvadratPerimetri(kenar));

//Task4
// let sual1 = "JavaScript hansi proqramlasdirma dilinin alt qruplarinandir biridir?";
// let cavab1 = "ECMAScript";
// let sual2 = "JavaScript-in yaradilma tarixi necədir?";
// let cavab2 = "1995";
// let sual3 = "JavaScript-in yaradicisi kimdir?";
// let cavab3 = "Brendan Eich";

// let cavab1_duz = prompt(sual1);
// let cavab2_duz = prompt(sual2);
// let cavab3_duz = prompt(sual3);

// let bal = 0;

// if (cavab1_duz === cavab1) {
//     bal += 2;
// }
// if (cavab2_duz === cavab2) {
//     bal += 2;
// }
// if (cavab3_duz === cavab3) {
//     bal += 2;
// }

// console.log("Qazandiginiz  bal: " + bal);

//Task5
// let today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();

// console.log("Bugünün tarixi: " + day + "/" + month + "/" + year);

// if (month === 12) {
//   month = 1;
//   year++;
// } else {
//   month++;
// }

// console.log("Növbeti ay: " + day + "/" + month + "/" + year);

// Task6

// function hefteGunununCixisi() {
//   let hefteGunleri = [
//     "Bazar",
//     "Bazar ertesi",
//     "Cersenbe Axsami",
//     "Cersenbe",
//     "Cume Axsami ",
//     "Cume",
//     "Senbe",
//   ];
//   let today = new Date();
//   let dayIndex = today.getDay();
//   let hefteGun = hefteGunleri[dayIndex];

//   let cavab = prompt(hefteGun + ". Növbəti günü görmək istəyirsiniz? (OK/YOX)");
//   if (cavab === "OK") {
//     hefteGunununCixisi();
//   }
// }

// hefteGunununCixisi();

// Task7

// function vurmaCedveli() {
//   for (let i = 2; i <= 9; i++) {
//     let cavab = "";
//     for (let j = 1; j <= 10; j++) {
//       cavab += i + " * " + j + " = " + i * j + "\n";
//     }
//     console.log(cavab);
//   }
// }

// vurmaCedveli();

// task8
// let avtomobil = {
//   istehsalci: "Toyota",
//   model: "Corolla",
//   buraxilisIli: 2022,
//   ortaSuret: 100, // km/saat
// };

// function avtomobilMelumatlariCixar() {
//   console.log("ISTEHSALCI : " + avtomobil.istehsalci);
//   console.log("Model: " + avtomobil.model);
//   console.log("Buraxilis ili: " + avtomobil.buraxilisIli);
//   console.log("Orta sürət: " + avtomobil.ortaSuret + " km/saat");
// }

// function sursatlaVaxtiHesabla(mesafe) {
//   let sure = mesafe / avtomobil.ortaSuret;
//   let istirahet = Math.floor(sure / 4);
//   let toplamSure = sure + istirahet;
//   return toplamSure;
// }

// avtomobilMelumatlariCixar();
// let mesafe = 500; // km
// console.log("Yol üzrə suretle vaxt: " + sursatlaVaxtiHesabla(mesafe) + " saat");
