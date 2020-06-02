const fishListGenerator = (fishCollection) => {
    for(const currentFish of fishCollection) {
        const fishHTML = fishConverter(currentFish)
        const fishListHTMLElement = document.querySelector(".fishList")
        fishListHTMLElement.innerHTML += fishHTML
    }
}

