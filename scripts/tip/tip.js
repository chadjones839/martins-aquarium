function tipConverter(tipObject) {
    const tipHTMLRepresentation = `<section class="tipContainer">
    <div class="tip">
        <div class="tip__count">${tipObject.tipNum}</div>
        <p>${tipObject.tip}</p>
    </div>
</section>`

return tipHTMLRepresentation
}
