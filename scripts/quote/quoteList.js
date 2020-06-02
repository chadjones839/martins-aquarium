const quoteListGenerator = (quoteCollection) => {
    for(const currentQuote of quoteCollection) {
        const quoteHTML = quoteConverter(currentQuote)
        const quoteListHTMLElement = document.querySelector(".quoteList")
        quoteListHTMLElement.innerHTML += quoteHTML
    }
}