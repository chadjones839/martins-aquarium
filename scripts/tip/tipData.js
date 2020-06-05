let tipCollection = []

const getTipData = () => {
    return fetch("http://localhost:8088/tips").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfTips) => {
            tipCollection = arrayOfTips
        }
    )
}

const tipData = () => {
    const allTips = []
    for (const tip of tipCollection) {
            allTips.push(tip)
    }
    return allTips
}