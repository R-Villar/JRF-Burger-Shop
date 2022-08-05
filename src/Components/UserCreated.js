import React, { useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import RadioForm from "./RadioForm";


function UserCreated({newBurger}) {
   
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [validated, setValidated] = useState(false)

    // submitclick for the form
    const handleClick = (event) => {

        // text validation for the form
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            // stops parent component's events from firing. 
            event.stopPropagation()
        } else {
            // post request
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
        setValidated(true)
    }

    // creates array of ingredients, function is also passed to RadioForm
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
        // form for the page
        <Form noValidate validated={validated} onSubmit={handleClick}>
            <Form.Group as={Row} className="mb-3" controlId="valiadationCustomName">
                <Form.Label column sm={2}>
                    <strong>Name</strong>
                </Form.Label>
                <Col sm={5}>
                    {/* user input for name */}
                    <Form.Control 
                        required
                        type="text"
                        placeholder="Name" 
                        onChange={(e) => setName(e.target.value)}/>
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="valiadationCustomImage">
                <Form.Label column sm={2}>
                    <strong>Image</strong>
                </Form.Label>
                <Col sm={5}>
                    {/* user input for image */}
                    <Form.Control
                        required
                        placeholder="Image"
                         onChange={(e) => setImage(e.target.value)} />
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="FormHorizontalPrice">
                <Form.Label column sm={2}>
                    <strong>Price</strong>
                </Form.Label>
                <Col sm={5}>
                    {/* user input for price */}
                    <Form.Control
                        required
                        type="number"
                         min='01'
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}/>
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="FormHorizontalPrice">
                <Form.Label column sm={2}>
                    <strong>Description</strong>
                </Form.Label>
                <Col sm={5}>
                    {/* user input for description */}
                    <Form.Control
                        required 
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)} />
                </Col>
            </Form.Group>
            {/* Radio form group */}
            <RadioForm clickIngredients={clickIngredients}/>    
        </Form>
    )    
}

export default UserCreated