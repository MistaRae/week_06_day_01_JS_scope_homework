
// =========================================== //
// =============== EPISODE 1 ================= //
// =========================================== //


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// this function will run fine and return the value of the key murderer in scenario object ('Miss Scarlet')



// =========================================== //
// =============== EPISODE 2 ================= //
// =========================================== //


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murderer variable is a constant and cannot be re-defined. the changeMurderer function will break the code



// =========================================== //
// =============== EPISODE 3 ================= //
// =========================================== //


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// the first instance of murderer is declared outside of the declare murderer function, therefore it is visible when the second verdict constant variable is defined. 
// as the first verdict is assigned its value using the declare murderer function the instance of murderer contained with the scope of that function is used when logging to the console. 


// =========================================== //
// =============== EPISODE 4 ================= //
// =========================================== //


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// // this will return miss scarlet, professor plumb and colonel mustard 

// const suspects = declareAllSuspects();
// console.log(suspects);
// // this will log miss scarlet, professor plumb and colonel mustard 
// console.log(`Suspect three is ${suspectThree}.`);
// // this will log 'Mrs Peacock'



// =========================================== //
// =============== EPISODE 5 ================= //
// =========================================== //


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// // this will mutate the value assigned to the weapon key in the scenario object to newWeapon's value (provided as an argument)

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// // this will return candle stick as the weapon as the const scenario object variable is at the same block level

// changeWeapon('Revolver');
// // this has changed the value of the weapon key in the scenario object to 'Revolver'
// const verdict = declareWeapon();
// console.log(verdict);

// // this should log 'The weapon is the Revolver'



// =========================================== //
// =============== EPISODE 6 ================= //
// =========================================== //


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';
// // changed murderer to Mr green - but might have made it a global variable.
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
// //   changed murderer to Mrs White - but might have made it a global variable.

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
// // would output the murderer is mrs white 

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // should log the murderer is mrs white 


// =========================================== //
// =============== EPISODE 7 ================= //
// =========================================== //


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//     // sets murderer to miss scarlet within the scope of the unexpectedOutcome function ONLY
//   }

//   plotTwist();
// //   sets murderer to colonel mustard within the scope of the plotTwist function ONLY
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// // this would return professor plumb

// changeMurderer();
// // this sets the murderer to Mr Green
// const verdict = declareMurderer();
// console.log(verdict);

// // should log 'The murderer is Mr. Green'



// =========================================== //
// =============== EPISODE 8 ================= //
// =========================================== //


// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
// //   changes the room to dining room

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//     // defines colonel mustard as the murderer if we are 'in the room' provided 

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//     // defines the weapon to be Candle Stick if we have provided the correct murderer

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
// // should declare the weapon to be a lead pipe as all the other functions are nested within the change scenario function which has not yet been called.

// changeScenario();
// // sets murderer to Mrs Peacock and room to dining room.
// // there is then a plot twist which redefines the murderer to be colonel mustard
// // the unexpected outcome then redefines the weapon to a candle stick

// const verdict = declareWeapon();
// console.log(verdict);

// // should log 'The weapon is 'Candle Stick'



// =========================================== //
// =============== EPISODE 9 ================= //
// =========================================== //

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}
// the new instance of murderer is visible only to the if statement. it is never returned 

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// should log 'The murderer is Professor Plumb'


// // ### Extensions

// // Make up your own episode!
