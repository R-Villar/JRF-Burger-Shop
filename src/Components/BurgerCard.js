import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import { Alert } from 'react-bootstrap/Alert';


function BurgerCard({burger, addCustSelection}) {
    const {name, image, description, price} = burger

    // click function to send information to the customize page
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
                    <Button 
                    variant="primary" 
                    size='sm'
                    onClick={selectedClick}
                    >Add to cart    
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