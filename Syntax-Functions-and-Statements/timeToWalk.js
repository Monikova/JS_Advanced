function timeToWalk(steps, stepLength, speed) {
  let distanceInMeters = steps * stepLength;
  let speedInMetersPerSec = speed / 3.6;
  // let timeInSec = Math.floor(distanceInMeters / speedInMetersPerSec);
  let timeInSec = Math.round(distanceInMeters / speedInMetersPerSec);
  let timeForRest = Math.floor(distanceInMeters / 500) * 60;
  let totalTimeInSec = timeInSec + timeForRest;
 
  let hours = Math.floor(totalTimeInSec / 3600);
  let min = Math.floor((totalTimeInSec - (hours * 3600)) / 60);
  let sec = totalTimeInSec - (hours * 3600) - (min * 60);
 
  if (hours < 10) {
    hours = `0${hours}`;
  }
 
  if (min < 10) {
    min = `0${min}`;
  }
 
  if (sec < 10) {
    hours = `0${sec}`;
  }
    
  console.log(`${hours}:${min}:${sec}`);
    
}

timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5); 
