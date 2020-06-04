const fishList = () => {
    const holy = mostHolyFish()
    // Invoke function and pass array as parameter
    displayFish(holy)

    const soldier = soldierFish()
    displayFish(soldier)

    const peasants = peasantFish()
    displayFish(peasants)
}

const displayFish = (theDataToDisplay) => {
    // Iterate the array of holy fish
    for (const fishObject of theDataToDisplay) {
        // Convert the current fish to its HTML representation
        const fishHTMLRepresentation = fishConverter(fishObject)
        // Find the HTML element in index.html
        const fishArticleElement = document.querySelector(".fishList")
        // Put the fish HTML representation inside the HTML element
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}