// Basic Timer Implementation in JavaScript //
/* let secondsLeft = 10;

const intervalId = setInterval(() => {
    console.log(secondsLeft);
    secondsLeft = secondsLeft - 1;

    if (secondsLeft < 0) {
        clearInterval(intervalId);
        console.log("Time's up!"); 
    }
}, 1000); */

// Countdown Timer Implementation in JavaScript //
/* function startCountdown(duration) {
    let secondsLeft = duration;

    const intervalId = setInterval(() => {
        console.log(secondsLeft);
        secondsLeft = secondsLeft - 1;

        if (secondsLeft < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);

    return intervalId; // Return the interval ID so it can be cleared later if needed
}

startCountdown(10); // Start a countdown of 10 seconds */

// Countdown Timer with Pause and Resume Functionality in JavaScript //
let secondsLeft = 10;
let intervalId; // declared outside, so both start and stop can reach it

function startCountdown() {
  intervalId = setInterval(() => {
    console.log(secondsLeft);
    secondsLeft = secondsLeft - 1;

    if (secondsLeft < 0) {
      clearInterval(intervalId);
      console.log("Time's up!");
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(intervalId);
  console.log("Stopped manually!");
}

startCountdown();

// simulate stopping it manually after 3 seconds
setTimeout(() => {
  stopCountdown();
}, 3000);