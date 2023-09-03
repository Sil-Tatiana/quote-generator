let newQuoteBtn = document.getElementById("new-quote");
newQuoteBtn.addEventListener("click", getQuotes);
let twitterBtn = document.getElementById("twitter");
twitterBtn.addEventListener("click", twitterPost);
let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let loader = document.getElementById("loader");
let quoteContainer = document.getElementById("random-quote-container");
let allQuotes = [];

function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function showQuote() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function randomQuote() {
  showLoader();
  const quoteNum = Math.floor(Math.random() * allQuotes.length);
  console.log(quoteNum);
  const quote = allQuotes[quoteNum];
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  showQuote();
}

async function getQuotes() {
  showLoader();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    allQuotes = await response.json();
    randomQuote();
  } catch (error) {}
}

getQuotes();

function twitterPost() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
