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
let quotes = [
  {
    author: "Nipsey Hussle" ,
    source: "I Do This",
    citation: "They say every man is defined by his reaction to any given situation. Well who would you want to define you Someone else or yourself? Whatever you do homie, give your heart to it, And stay strong",
    year: "2016"
  },
  {
    author: "Jay-Z" ,
    source: "BOSS",
    citation: "We measure success by how many people successful next to you. Here we say you broke if everybody gets broke except for you",
    year: "2018"
  },
  {
    author: "J.Cole" ,
    source: "100.mil",
    citation: "When I get defeated, believe I get up",
    year: "2021"
  },
  {
    author: "Jeezy" ,
    source: "Grind State",
    citation: "Just know if there's a will there's a way",
    year: "2015"
  },
  {
    author: "21 Savage" ,
    source: "my.life",
    citation: "Give all the props to my mama 'cause no matter what, she always protected me",
    year: "2021"
  },

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

  let ranNum = Math.floor(Math.random() * quotes.length);

  return quotes[ranNum];

}

// getRandomQuote()

function printQuote(){

const randomQuote = getRandomQuote();
  html = `
    <p class= "quote">${randomQuote.citation}</p>
    <p class= "source">${randomQuote.source}<span class= "citation">${randomQuote.author}</span><span class= "year">${randomQuote.year}</span></p>
  `

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