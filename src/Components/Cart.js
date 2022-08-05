import {useState} from "react"
import { Button, Container, Row, Col } from "react-bootstrap";

// look thru ths before presentation
function Cart ({selectedBurger}) {
    const [ cartItems, setCartItems ] = useState(selectedBurger)

    // adds the total price of the items
    let totalPrice = cartItems.reduce(function(accumulator, item) {
        return accumulator + item.price
    }, 0)

    // maps thru the cart items
    const cartB = cartItems.map((item) => {
        const {name, price, id, image} = item

        // removes items from cart
        function handleClick() {
            const removeFromCart = cartItems.filter((cartItem) => cartItem.id !== id)
            setCartItems(removeFromCart)
        }
         
        return <Container key={id}>
                    <Row>
                        <Col sm={4} >
                                <img width={100}
                                    height={100}
                                    src={image}
                                    alt={name}
                                />
                        </Col>
                        <Col sm={4}><h4>{name}</h4></Col>
                        <Col sm={3}>
                            <p>${price}</p>
                            <Button 
                                onClick={handleClick} 
                                variant="danger">
                                    Remove
                            </Button>
                        </Col>
                    </Row>
        </Container>
    })

    return (
        <div className="cart-card">
            <Container> 
                    <div>
                        {cartB}
                    </div>
                <div>
                    <Row>
                        <Col xs={6}><h3>Total:</h3></Col>
                        <Col xs={6}>
                            <strong><h3>{totalPrice.toFixed(2)}</h3></strong> 
                        </Col>
                        <Col><Button>Pay Now</Button></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Cart