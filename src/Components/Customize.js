import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
            <Form onSubmit={handleClick}>
                <Form.Group as={Row} className="mb-3" controlId="FormHorizontalName">
                    <Form.Label column sm={2}>
                        <strong>Name</strong>
                    </Form.Label>
                    <Col sm={5}>
                        <input placeholder="name" onChange={(e) => setName(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="FormHorizontalImage">
                    <Form.Label column sm={2}>
                        <strong>Image</strong>
                    </Form.Label>
                    <Col sm={5}>
                        <input placeholder="image" onChange={(e) => setImage(e.target.value)}/>     
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="FormHorizontalPrice">
                    <Form.Label column sm={2}>
                        <strong>Price</strong>
                    </Form.Label>
                    <Col sm={5}>
                    <input type="number" min='01' placeholder="price"onChange={(e) => setPrice(e.target.value)}/> 
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="FormHorizontalPrice">
                    <Form.Label column sm={2}>
                        <strong>Description</strong>
                    </Form.Label>
                    <Col sm={5}>
                    <input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                    </Col>
                </Form.Group>
                    
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                           <strong>Ingredients:</strong>
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Ketchup"
                                htmlFor="ketchup"
                                name="ketchup">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Tomato"
                                htmlFor="Tomato"
                                name="tomato">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Cheese"
                                htmlFor="cheese"
                                name="cheese">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Lettuce"
                                htmlFor="Lettuce"
                                name="Lettuce">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Onion"
                                htmlFor="Onion"
                                name="Onion">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="pickels"
                                htmlFor="pickels"
                                name="pickels">
                            </Form.Check>
                        </Col>
                        <Col sm={3}>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Bacon"
                                htmlFor="Bacon"
                                name="Bacon">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Beef Patty"
                                htmlFor="Beef-patty"
                                name="Beef-patty">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Chicken Patty"
                                htmlFor="Chicken-patty"
                                name="Chicken-patty">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Chicken Patty"
                                htmlFor="Chicken-patty"
                                name="Chicken-patty">
                            </Form.Check>
                            <Form.Check
                                onClick={clickIngredients}
                                type="checkbox"
                                label="Vegan Patty"
                                htmlFor="Vegan-Patty"
                                name="Vegan-Patty">
                            </Form.Check>
                        </Col>
                        <Row>
                            <Col xs={8} md='middle'>
                                <Button type="submit" >Create</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </fieldset>  
                    
                    {/* <input type="submit" value="Create"></input> */}
                
            </Form>
        </div>)    
}
export default Customize