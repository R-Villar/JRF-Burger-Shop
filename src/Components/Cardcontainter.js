import BurgerCard from "./BurgerCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function CardContainer({burgersObj, addCustSelection}) {

    // maps thru the burgersObj and passes prop to Card component.
    const burgerElement = burgersObj.map((burger) => {
        return <BurgerCard key={burger.id} burger={burger} addCustSelection={addCustSelection} /> 
        
    })

    return (
        <Container>
            <Row sm={1} md={3} > 
                {burgerElement}
            </Row>
        </Container>
    )
}

export default CardContainer