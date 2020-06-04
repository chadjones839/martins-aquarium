const fishCollection = [
    {
        picture: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/fish/group/parrotfish_thumb.jpg",
        name: "Angus",
        species: "Parrotfish",
        length: 3,
        location: "Atlantic Ocean",
        diet: "popcorn"
    },
    {
        picture: "https://3.bp.blogspot.com/-iJdQmfokBho/VWKVI1Fau0I/AAAAAAAAAKg/3jVyE0dsQuI/s1600/fish.jpeg",
        name: "Mr. Shnoz Face",
        species: "Blobfish",
        length: 12,
        location: "Australian Coast",
        diet: "Hoagies"
    },
    {
        picture: "https://www.backpacker.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ5ODA1NzEzNzI2NjQ1NDI3/atlantic-sturgeon.jpg",
        name: "Colonel Caviar",
        species: "Sturgeon",
        length: 283,
        location: "Lousiana Bayou",
        diet: "Rats"
    },
    {
        picture: "https://i.imgur.com/ZYuLpWb.jpg",
        name: "Old Gregg",
        species: "Scaly Man-Fish",
        length: 70,
        location: "Black Lake",
        diet: "Baileys from a Shoe"
    },
    {
        picture: "https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2018/06/800px-Channel_Catfish.jpg",
        name: "Ol' Whiskers O'Grady",
        species: "Catfish",
        length: 65,
        location: "Lake Texoma",
        diet: "Redneck Arms"
    },
    {
        picture: "https://external-preview.redd.it/EsFR7A4i4ndGIVrbBf_GvAcRLn7gjDNblvEeHoSWJK8.jpg?auto=webp&s=6cdab5121b8853a47d52a321d0bd6d0401d32ab7",
        name: "Calvin",
        species: "Remora",
        length: 32,
        location: "Atlantic Ocean",
        diet: "Shark Scraps"
    },
    {
        picture: "https://live.staticflickr.com/2626/3967590146_b0af7b4f34_b.jpg",
        name: "Lil' Goober",
        species: "Guppy",
        length: 2,
        location: "PetsMart",
        diet: "Cornflakes"
    },
    {
        picture: "https://i2-prod.mirror.co.uk/incoming/article5017650.ece/ALTERNATES/s1200c/The-anglerfish.jpg",
        name: "Mr. Teeth Face",
        species: "Angler Fish",
        length: 18,
        location: "Atlantic Abyssal Zone",
        diet: "Fingers"
    },
    {
        picture: "https://ourmarinespecies.com/wp-content/uploads/2019/07/tilapia_1.jpg",
        name: "Terry The Tilapia",
        species: "Tilapia",
        length: 8,
        location: "Nile River",
        diet: "Seaweed, probably"
    },
]

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

