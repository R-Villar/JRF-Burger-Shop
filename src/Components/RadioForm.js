import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RadioForm({clickIngredients}) {

    return (

        <fieldset>
            {/* ingredients group of options */}
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
                    {/* Submit button */}
                    <Col xs={8} md='middle'>
                        <Button type="submit" >Create</Button>
                    </Col>
                </Row>
            </Form.Group>
        </fieldset>  

    )
}

export default RadioForm