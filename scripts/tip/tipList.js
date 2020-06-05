const tipList = () => {
    const tips = tipData()
    displayTips(tips)
}



const displayTips = (theDataToDisplay) => {
    for(const tipObject of theDataToDisplay) {
        const tipHTMLRepresentation = tipConverter(tipObject)
        const tipArticleElement = document.querySelector(".tipList")
        tipArticleElement.innerHTML += tipHTMLRepresentation
    }
}