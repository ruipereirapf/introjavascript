let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const isAdult = true;

if (isAdult == true && registeredEarly == true){
  raceNumber += 1000
}

if (isAdult == true && registeredEarly == true){
  console.log(`Participant with number ${raceNumber} will race at 9:30 am.`)
}else if(isAdult == true && registeredEarly == false){
  console.log(`Participant with number${raceNumber} will race ate 11:00 am.`)
}else{
  console.log(`Participants under 18 will race at 12:30 pm.`)
}