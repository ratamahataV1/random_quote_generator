const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = "https://api.quotable.io/random"

async function getQuote() {     //async function for await to work
    try {       //try and catch method is used for catching  errors
        // console.log("clicked");
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const response = await fetch(apiURL); 
        const data = await response.json(); //await the response from fetching the data(apiURL) first
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get quote!";
        btnEl.disabled = false;
        // console.log(data);
   } catch (error) { 
       console.log(error);
       quoteEl.innerText = "An error occurred";
       authorEl.innerText = "N/A";
       btnEl.innerText = "Get quote!";
       btnEl.disabled = false;
   }
}

btnEl.addEventListener("click", getQuote);