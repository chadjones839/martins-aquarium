function quoteConverter(quoteObject) {
    const quoteHTMLRepresentation = `<blockquote class="blockQuote">
    <h1><span class="quote">${quoteObject.quote}</span></h1>  
  <p>${quoteObject.author}</p>
  </blockquote>`

return quoteHTMLRepresentation
}

