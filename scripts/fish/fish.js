function fishConverter(fishObject) {
    const fishHTMLRepresentation = `<section class="fish">
    <img class="fish__img" src="${fishObject.picture}" alt="${fishObject.name}">
    <div class="fish__details">
        <h2 class="name">${fishObject.name}</h2>
        <dl>
            <dt>Species:</dt>
                <dd>${fishObject.species}</dd>
            <dt>Length:</dt>
                <dd>${fishObject.length}</dd>
            <dt>Location:</dt>
                <dd>${fishObject.location}</dd>
            <dt>Diet:</dt>
                <dd>${fishObject.diet}</dd>
        </dl>
    </div>
</section>`

return fishHTMLRepresentation
}