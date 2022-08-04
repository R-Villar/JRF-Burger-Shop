import React, { useState } from "react"
// if not used at the end of day remove selectedBurger prop
function Customize ({newBurger, selectedBurger}) {
   
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        
    // console.log(selectedBurger)
        fetch('http://localhost:3000/burgers', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 73457372),
                name,
                image,
                price,
                description,
                ingredients: Object.keys(ingredients)
            }),
        })
            .then(res => res.json())
            .then(newBurgerObj => newBurger(newBurgerObj))
    }

    const clickIngredients = (e) => {
        setIngredients(previousState => {
            const newState = {...previousState}
            if (newState[e.target.name]) {
                delete newState[e.target.name]
            } else {
                newState[e.target.name] = e.target.name
            }
            return newState
        })
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input placeholder="image" onChange={(e) => setImage(e.target.value)}/>
                <input type="number" min='01' placeholder="price"onChange={(e) => setPrice(e.target.value)}/>
                <input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                <div>
                    <label htmlFor="ketchup">Ketchup</label>
                    < input onClick={clickIngredients} type="checkbox" name="ketchup"/><br/>
                    <label htmlFor="tomato">Tomato</label>
                    < input onClick={clickIngredients} type="checkbox" name="tomato"/><br/>
                    <label htmlFor="cheese">Cheese</label>
                    < input onClick={clickIngredients} type="checkbox" name="cheese"/><br/>
                    <label htmlFor="Lettuce">Lettuce</label>
                    < input onClick={clickIngredients} type="checkbox" name="Lettuce"/><br />
                    <label htmlFor="Onion">Onion</label>
                    < input onClick={clickIngredients} type="checkbox" name="onion"/><br />
                    <label htmlFor="pickles">Pickles</label>
                    < input onClick={clickIngredients} type="checkbox" name="pickles"/><br />
                    <label htmlFor="Bacon">Bacon</label>
                    < input onClick={clickIngredients} type="checkbox" name="bacon"/><br />
                    <label htmlFor="Beef-patty">Beef patty</label>
                    < input onClick={clickIngredients} type="checkbox" name="Beef-Patty"/><br />
                    <label htmlFor="Chicken-patty">Chicken Patty</label>
                    < input onClick={clickIngredients} type="checkbox" name="Chicken Patty"/><br />
                    <label htmlFor="Vegan-Patty">Vegan patty</label>
                    < input onClick={clickIngredients} type="checkbox" name="Vegan-Patty"/><br />

                </div>
                <input type="submit" value="Create"></input>
            </form>
        </div>)    
}
export default Customize