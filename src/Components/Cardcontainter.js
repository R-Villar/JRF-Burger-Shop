import BurgerCard from "./BurgerCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function CardContainer({burgersObj}) {

    // maps thru the burgersObj and passes prop to Card component.
    const burgerElement = burgersObj.map((burger) => (
        
        <BurgerCard key={burger.id} burger={burger} /> 
        
    ))

    return (
        <Container>
            <Row sm={1} md={3} > 
                {burgerElement}
            </Row>
            
        </Container>

    )
}

export default CardContainer