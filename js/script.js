/******************************************
Jerry Louis Unit 1 Project
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let html = '';
//line 16 contains an array that holds object properties and values of five quotes
let quotes = [
  {
    source: "Nipsey Hussle" ,
    quote: "They say every man is defined by his reaction to any given situation. Well who would you want to define you Someone else or yourself? Whatever you do homie, give your heart to it, And stay strong",
    citation: "Song: I Do This",
    year: "2016"
  },
  {
    source: "Jay-Z" ,
    quote: "We measure success by how many people successful next to you. Here we say you broke if everybody gets broke except for you",
    citation: "Song: BOSS",
    year: "2018"
  },
  {
    source: "J.Cole" ,
    quote: "When I get defeated, believe I get up",
    citation: "Song: 100.mil",
    year: "2021"
  },
  {
    source: "Jeezy" ,
    quote: "Just know if there's a will there's a way",
    citation: "Song: Grind State",
    year: "2015"
  },
  {
    source: "21 Savage" ,
    quote: "Give all the props to my mama 'cause no matter what, she always protected me",
    citation: "Song: my.life",
    year: "2021"
  },
  {
    source: "Nipsey Hussle" ,
    quote: "I say self made, meanin' I designed myself",
    citation: "Song: Grinding All My Life",
    year: "2018"
  },
  {
    source: "Kendrick Lamar" ,
    quote: "Don't stress, you was granted everything inside this planet. Anything you imagine, you possess",
    citation: "Song: Blessed",
    year: "2012"
  },
  {
    source: "Shy Glizzy" ,
    quote: "Swish, I'm balling, I'm so awesome",
    citation: "Song: Awwsome",
    year: "2013"
  },
];


/***
 * `getRandomQuote` function
***/
//line 55 contains a function that generates a random number from the length of the array
function getRandomQuote(){

  let ranNum = Math.floor(Math.random() * quotes.length);

  return quotes[ranNum];

}

//Line 64 contains a function that stores getRandomQuote in a randomQuote variable to gain the properties of the previous function to display on the page
function printQuote(){

const randomQuote = getRandomQuote();
  html = `
    <p class= "quote">${randomQuote.quote}</p>
    <p class= "source">${randomQuote.source}
  `
if(randomQuote.citation){
  html += `<span class= "citation">${randomQuote.citation}</span>`

}
if(randomQuote.year){
  html +=`<span class= "year">${randomQuote.year}</span>`
}
  html += `</p>`
console.log(randomQuote)
return document.querySelector('.quote-box').innerHTML = html

}
printQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
