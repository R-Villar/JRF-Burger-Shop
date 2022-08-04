import {useState} from "react"
import { Button, Container, Row, Col } from "react-bootstrap";

// look thru ths before presentation
function Cart ({selectedBurger}) {
    const [ cartItem, setCartItem ] = useState(selectedBurger)

    // adds the total price of the items
    let totalPrice = cartItem.reduce(function(accumulator, item) {
        return accumulator + item.price
    }, 0)

    const cartB = cartItem.map((item) => {
        const {name, price, id, image} = item
         
        return <Container key={id}>
                    <Row>
                        <Col xs={6} ><h4> {name}</h4></Col>
                        <Col xs={6} ><p>${price}</p></Col>
                    </Row>
        </Container>
    })

    return (
        <div>
            <Container >        
                    {cartB}
                <div>
                    <Row>
                        <Col xs={6}><h3>Total:</h3></Col>
                        <Col xs={6}>
                            <strong><h3>{totalPrice}</h3></strong> 
                        </Col>
                    </Row>
                </div>
            </Container>
            
        </div>
    )
}
export default Cart