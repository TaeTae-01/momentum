const quotes = [
    {
    quote: 'No Kid From Santo Will Ever Be A Suit.',
    author: 'David Martinez - Season 1, Episode 1'
    },
    {
    quote: 'You`re The Guy Who Jumps Into The Fire.',
    author: 'Lucy - Season 1, Episode 4'
    },
    {
    quote: 'I`ll Take You To The Moon! I Promise!',
    author: 'David Martinez - Season 1, Episode 4'
    },
    {
    quote: 'Just Keep Running.',
    author: 'Maine - Season 1, Episode 6'
    },
    {
    quote: 'I Feel Better In Metal Than In My Own Skin.',
    author: 'David Martinez - Season 1, Episode 7'
    },
    {
    quote: 'There`s No Place Like Night City If You Wanna Hide.',
    author: 'Lucy - Season 1, Episode 7'
    },
    {
    quote: 'What`s Up, Choom ?',
    author: 'Rebecca - Season 1, Episode 5'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'There Is But One True Measure Of Success In Night City.',
    author: 'Faraday - Season 1, Episode 9'
    },
    {
    quote: 'You Don`t Make A Name As A Cyberpunk By How You Live.',
    author: 'Lucy - Season 1, Episode 4'
    },
    {
        quote: 'You Never Had To Save Me.',
        author: 'Lucy - Season 1, Episode 10'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
