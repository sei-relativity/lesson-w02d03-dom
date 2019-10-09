// Our JS file for the events project.

console.log('Hello from JS!');

/*

EVENTS:

  What events are there?

  - Mouse (click*, mouse*)
  - Keyboard (key*)
  - Browser (resize, scroll)
  - Form (submit)


Events Need:

  1. An event type          ("CLICK")
  2. An event target        ("BUTTON")
  3. A callback function

  When all of these things are combined,
  they become an event listener.
*/


// The type of the event
const eventType = 'click';

// The target of the event
const myButton = document.querySelector('button');

// The callback - what do you want to
//                do as a response?
const myCallback = function(event) {
  console.log('The button was clicked', event);
}


// Create an event listener
// WHEN this EVENT takes place on this TARGET,
// call this CALLBACK FUNCTION.
myButton.addEventListener(eventType, myCallback);


// Type, Target, Callback, Event Listener

const darkButton = document.querySelector('#dark');

const changeToDarkTheme = function() {
  console.log('Night time!');
  document.body.style.background = 'black';
  document.body.style.color = 'white';
}

darkButton.addEventListener('click', changeToDarkTheme);


const lightButton = document.querySelector('#light');

const changeToLightTheme = function() {
  console.log('Day time!');
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}

lightButton.addEventListener('click', changeToLightTheme);


const colorInput = document.querySelector('input.color');

const onColorChange = function() {
  document.body.style.background = colorInput.value;
}

colorInput.addEventListener('change', onColorChange);


const postTweetButton = document.querySelector('.post');

const createTweet = function() {
  // Get whatever is typed in the input
  // and save it in a variable called
  // content.
  const input = document.querySelector('input');
  const content = input.value;

  // Create a new paragraph
  const newPara = document.createElement('p');

  newPara.innerText = content;

  // Take that paragraph and put it at the end
  // of the div.new-tweets
  const newTweetsDiv = document.querySelector('.new-tweets');
  newTweetsDiv.appendChild(newPara);
}

postTweetButton.addEventListener('click', createTweet);



const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');

const doubleImageSize = function() {
  console.log('it works');

  this.style.width = '600px';
}

billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);

// If...