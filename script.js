let allQuotes = [];

function randomQuote() {
  const quoteNum = Math.floor(Math.random() * allQuotes.length);
  console.log(quoteNum);
  const quote = allQuotes[quoteNum];
  console.log(quote);
}

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    allQuotes = await response.json();
    randomQuote();
  } catch (error) {}
}

getQuotes();
