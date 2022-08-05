import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import {useState} from "react"
import Collapse from 'react-bootstrap/Collapse';

function BurgerCard({burger, addCustSelection}) {
    const {name, image, description, price, ingredients} = burger

    const [isClicked, setIsClicked] =useState()
    const [display, setDisplay] = useState(false)

    // click function to send information to the customize page
    // Changes add to cart button when clicked to in cart
    function selectedClick() {
        addCustSelection(burger)
        setIsClicked(isClicked => !isClicked)
    }

    // list of ingredients
    const listOfIngredients = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    
    // creates cards to display on the page.
    return (
        <Card className="col-sm-7 mb-5" border="info" style={{ width: '18rem' }}>
            <Card.Img className="home-card" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>

                    <Button
                        variant='primary'
                        size='sm'
                        onClick={() => setDisplay(!display)}
                        aria-controls="example-collapse-text"
                        aria-expanded={display}
                    >
                        Ingredients
                    </Button>{' '}
                    <br />
                    <br />
                    <Button 
                    variant="primary" 
                    size='sm'
                    onClick={selectedClick}>
                        { isClicked ? "In Cart" : "Add to cart"}

                    </Button>{' '}
                    <br />
                    <br />
                <Link to="/user-created">
                    <Button 
                        variant="primary" 
                        size='sm' 
                        onClick={selectedClick}>Create your own
                    </Button>

                </Link>
                {/* shows list of ingredients */}
                <Collapse in={display}>
                        <div id="example-collapse-text">
                            {listOfIngredients}
                        </div>
                    </Collapse>
            </Card.Body>
        </Card>
    )
}

export default BurgerCard