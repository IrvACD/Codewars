let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
const runnerAge = 18;

if (runnerAge > 18 && earlyReg == true) {
  console.log(`You will race at 9:30 am with the race number ${(raceNumber += 1000)}.`);
} else if (runnerAge > 18 && earlyReg !== true) {
  console.log(`You will race at 11:00 am with the race number ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm with the race number ${(raceNumber)}.`);
} else {
  console.log("Go to the registrarion desk, please.");
}
