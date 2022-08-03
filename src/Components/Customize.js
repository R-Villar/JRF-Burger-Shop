import React, { useState } from "react"

function Customize ({newBurger}) {
   
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')

    const data = (e) => {
        e.preventDefault()
       
        const newBurgerArray = [
            {
            id: Math.floor(Math.random() * 73457372),
            name: name,
            image: image,
            price: price,
            description: description,
            }
        ]
        newBurger(newBurgerArray)
    }
     

    return (
        <div>
            <form onSubmit={data}>
                <input placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input placeholder="image" onChange={(e) => setImage(e.target.value)}/>
                <input type="number" min='01' placeholder="price"onChange={(e) => setPrice(e.target.value)}/>
                <input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Create"></input>
            </form>

function Customize ({selectedBurger}) {
    console.log(selectedBurger)

    return (
        <div>
            <h1>hello</h1>
            <div>{selectedBurger.name}</div>
        </div>
    )
}
export default Customize