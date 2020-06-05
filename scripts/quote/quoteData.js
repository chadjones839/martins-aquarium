let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfQuotes) => {
            quoteCollection = arrayOfQuotes
        }
    )
}

const quoteData = () => {
    const allQuotes = []
    for (const quote of quoteCollection) {
        allQuotes.push(quote)
    }
    return allQuotes
}