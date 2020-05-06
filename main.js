let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnersAge = 19;
if (runnersAge > 18 && registeredEarly) {
  raceNumber+=1000;
}
if ( runnersAge > 18 && registeredEarly) {
  console.log(`the ${raceNumber} race number will race at 09:30 am. `);
} else if (runnersAge > 18 && !registeredEarly){
  console.log('Late adults run at 11:00 am');
}
 else if( runnersAge < 18 && !registeredEarly) {
  console.log(`${raceNumber} will race at 12:30 pm!`);
}
else {
  console.log('the runner has to see the registration desk.')
}