let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfFish) => {
            fishCollection = arrayOfFish
        }
    )
}

const mostHolyFish = () => {
    const holyFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            fish.badge = "https://img.icons8.com/plasticine/2x/crown.png"
            holyFish.push(fish)
        } 
    }
    return holyFish
}

const soldierFish = () => {
    const henchmanFish = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            fish.badge = "https://image.flaticon.com/icons/png/128/473/473406.png"
            henchmanFish.push(fish)
        }
    }
    return henchmanFish
}

const peasantFish = () => {
    const plebFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0  && fish.length % 5 !== 0)  {
            fish.badge = "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/pitchfork-icon-14-256.png"
            plebFish.push(fish)
        }
    }
    return plebFish
}

