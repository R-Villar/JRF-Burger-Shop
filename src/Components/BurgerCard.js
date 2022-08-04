import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

import {useState} from "react"



function BurgerCard({burger, addCustSelection}) {
    const {name, image, description, price} = burger

    const [isClicked, setIsClicked] =useState()

    // click function to send information to the customize page
    // Changes add to cart button when clicked to in cart
    function selectedClick() {
        addCustSelection(burger)
        setIsClicked(isClicked => !isClicked)
    }
    
    // creates cards to display on the page.
    return (
        <Card className="col-sm-7 mb-5" border="info" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Button 
                    variant="primary" 
                    size='sm'
                    onClick={selectedClick}>
                        { isClicked ? "In Cart" : "Add to cart"}

                    </Button>{' '}
                <Link to="/customize">
                    <Button 
                        variant="primary" 
                        size='sm' 
                        onClick={selectedClick}>Create your own
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BurgerCard