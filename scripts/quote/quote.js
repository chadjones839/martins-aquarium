function quoteConverter(quoteObject) {
    const quoteHTMLRepresentation = `<section class="quote">${quoteObject.quote}
    <div class="author">${quoteObject.author}</div>
</section>`

return quoteHTMLRepresentation
}
