const locationListGenerator = (locationCollection) => {
    for(const currentLocation of locationCollection) {
        const locationHTML = locationConverter(currentLocation)
        const locationListHTMLElement = document.querySelector(".locationList")
        locationListHTMLElement.innerHTML += locationHTML
    }
}

const locationList = () => {
    const locations = locationData()
    displayLocations(locations)
}



const displayLocations = (theDataToDisplay) => {
    for(const locationObject of theDataToDisplay) {
        const locationHTMLRepresentation = locationConverter(locationObject)
        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += locationHTMLRepresentation
    }
}