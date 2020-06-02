const tipListGenerator = (tipCollection) => {
    for(const currentTip of tipCollection) {
        const tipHTML = tipConverter(currentTip)
        const tipListHTMLElement = document.querySelector(".tipList")
        tipListHTMLElement.innerHTML += tipHTML
    }
}