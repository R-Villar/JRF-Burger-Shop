import React, { useState } from "react"

function Customize ({newBurger, selectedBurger}) {
   
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        
    
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
                <label htmlFor="ingredients">Choose Bun</label>
                <select id="ingredients" name="ingredients" onClick={clickIngredients}>
                    <option>Pick one..</option>
                    <option name="Kaiser Roll">Kaiser Roll</option>
                    <option name="Onion Roll">Onion Roll</option>
                    <option name="Potato Roll">Potato Roll</option>          
                </select>
                <div>
                    <label htmlFor="ketchup">ketchup</label>
                    < input onClick={clickIngredients} type="checkbox" name="ketchup"/><br />
                    <label htmlFor="tomato">tomato</label>
                    < input onClick={clickIngredients} type="checkbox" name="tomato"/><br/>
                    <label htmlFor="cheese">cheese</label>
                    < input onClick={clickIngredients} type="checkbox" name="cheese"/>
                </div>
                <input type="submit" value="Create"></input>
            </form>
        </div>)    
}
export default Customize