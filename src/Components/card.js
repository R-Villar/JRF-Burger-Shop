

function Card({burger}) {
    const {name, image, description} = burger

    // creates cards to display on the page.
    return (
        <div>
            <h3>{name}</h3>
            <img
                src={image}
                alt={name}
            />
            <p>{description}</p>
        </div>
    )
}

export default Card