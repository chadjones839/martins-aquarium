const quoteList = () => {
    const quotes = quoteData()
    displayQuotes(quotes)
}



const displayQuotes = (theDataToDisplay) => {
    for(const quoteObject of theDataToDisplay) {
        const quoteHTMLRepresentation = quoteConverter(quoteObject)
        const quoteArticleElement = document.querySelector(".quoteList")
        quoteArticleElement.innerHTML += quoteHTMLRepresentation
    }
}