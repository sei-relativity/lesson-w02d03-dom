// My animations JS file.

/*

Let's define animations

1. Starting Point
2. Step
3. Time between steps
4. Total time
5. Ending Point

*/

// You can use `setTimeout` as delay
// You can use `setInterval` as an interval

const timeoutCallback = function() {
  console.log('I timed out!');
}

setTimeout(timeoutCallback, 2000);

let counter = 0;

const clockTick = function() {
  counter += 1;
  console.log('Tick, Tock!', counter);
}

const timer = setInterval(clockTick, 1000);
clearInterval(timer);


const fadeNickAway = function() {
  const nick = document.querySelector('.nick');

  const currentOpacityAsString = getComputedStyle(nick).opacity;
  const currentOpacity = parseFloat(currentOpacityAsString);

  const newOpacity = currentOpacity - 0.01;
  nick.style.opacity = newOpacity;

  if(currentOpacity >= 0) {
    setTimeout(fadeNickAway, 10);
  }
}

setTimeout(fadeNickAway, 1000);