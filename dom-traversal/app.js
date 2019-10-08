// Our new JS file
/*
console.log('Hi');

// Select the h1
const heading = document.querySelector('h1');
console.log(heading);


// Select the paragraph
const paragraph = document.querySelector('p');
console.log(paragraph);

// Select the img with a class selector
const image = document.querySelector('.bill');
console.log(image);

const firstListItem = document.querySelector('li');
const secondListItem = document.querySelector('li#second');

console.log(firstListItem, secondListItem);


const allListItems = document.querySelectorAll('li');
console.log(allListItems);

console.log('Starting loop...')
for(let i = 0; i < allListItems.length; i++) {
  const currentListItem = allListItems[i];
  console.log(currentListItem);
}
console.log('Ending loop...');


const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

console.clear();
*/


// elm.getAttribute("ATTRIBUTE NAME");

// const img = document.querySelector('img');

// const src = img.getAttribute('src');
// console.log(src);

// const alt = img.getAttribute('alt');
// console.log(alt);


// // Find the `a` tag, and log out the 'href' attribute
// const aTag = document.querySelector('a');
// const href = aTag.getAttribute('href');
// console.log(href);


// elm.setAttribute('ATTRIBUTE NAME', 'DESIRED VALUE');

// const img = document.querySelector('img');
// const oldSrc = img.getAttribute('src');

// img.setAttribute('src', 'https://www.placecage.com/400/400');


// // Find the `a` tag
// const aTag = document.querySelector('a');

// // Change the href to https://duckduckgo.com
// aTag.setAttribute('href', 'https://start.duckduckgo.com');

// // Print the new href
// const newHref = aTag.getAttribute('href');
// console.log(newHref);

// // Try setting the target attribute to be '_blank'
// aTag.setAttribute('target', '_blank');


// // Find the h1
// const heading = document.querySelector('h1');

// // Print the current text of h1
// console.log(heading.innerText);

// // 's text to "Changed by JS"
// heading.innerText = "Changed by JS";

// // Append "!!!" to the h1
// heading.innerText += "!!!";

// aTag.innerHTML = 'This is a <h2>Link</h2>';
// console.log(aTag.innerHTML);


// const input = document.querySelector('input');
// const currentValue = input.value;
// console.log(currentValue);
// input.value = 'With love from JS';

// This is only form form-related data
// inputs, textarea, dropdowns, checkboxes


// Styles

// const heading = document.querySelector('h1');
// heading.style.color = 'hotpink';
// heading.style.fontSize = '100px';
// heading.style.background = 'green';
// console.log('qaz', heading.style.color);


// const img = document.querySelector('img');
// img.style.width = '200px';
// img.style.border = '50px solid pink';



/*
Creating Elements
1. Create the element and store
   it in a JS variable.
2. Change it (using things like
      .innerText, .style, setAttr)
3. Put it on the page.
*/


const newHeading = document.querySelector('h1');
newHeading.innerText = 'Created by JavaScript!';

const targetDiv = document.querySelector('div.dynamic');
targetDiv.appendChild(newHeading);


// Make
const newImg = document.createElement('img');

// Change
newImg.setAttribute('src', 'https://www.placecage.com/300/300')
newImg.style.border = '4px dashed purple';

// Add to page
document.body.appendChild(newImg);



const tweet = 'Why even life? WHY???'
const author = 'Osama';
const content = tweet + ', posted by ' + author;

const newParagraph = document.createElement('p');

newParagraph.innerText = content;
newParagraph.style.color = 'blue';

const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);