import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"


function BurgerCard({burger, addCustSelection}) {
    const {name, image, description, price} = burger

    // click funtion to send information to the customize page
    function selectedClick() {
        addCustSelection(burger)
    }
    
    // creates cards to display on the page.
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                <Link to="/cart">
                    <Button 
                    variant="primary" 
                    size='sm'
                    onClick={selectedClick}>add to cart
                    </Button>
                </Link>    
                <Link to="/customize">
                    <Button 
                        variant="primary" 
                        size='sm' 
                        onClick={selectedClick}>customize
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BurgerCard