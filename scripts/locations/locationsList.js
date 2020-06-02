const locationListGenerator = (locationCollection) => {
    for(const currentLocation of locationCollection) {
        const locationHTML = locationConverter(currentLocation)
        const locationListHTMLElement = document.querySelector(".locationList")
        locationListHTMLElement.innerHTML += locationHTML
    }
}
