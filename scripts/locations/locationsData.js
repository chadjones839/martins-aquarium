let locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfLocations) => {
            locationCollection = arrayOfLocations
        }
    )
}

const locationData = () => {
    const allLocations = []
    for (const location of locationCollection) {
        allLocations.push(location)
    }
    return allLocations
}