function locationConverter(locationObject) {
    const locationHTMLRepresentation = `<div class="location">
    <div class="location__flipCard">
    <div class="location__flipCardFront">
        <img src="${locationObject.picture}" alt="${locationObject.location}">
    </div>
    <div class="location__flipCardBack">
        <h1>${locationObject.location}</h1>
        <dl>
            <dt>Area</dt>
                <dd class="card__back">${locationObject.area}</dd>
            <dt>Mean Depth</dt>
                <dd class="card__back">${locationObject.meanDepth}</dd>
            <dt>Types of Fish</dt>
                <dd class="card__back">${locationObject.fishTypes}</dd>
        </dl>
    </div>
    </div>
</div>`

return locationHTMLRepresentation
}
