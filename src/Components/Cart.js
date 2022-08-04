import {useState} from "react"


function Cart ({selectedBurger}) {
    const [cartItem, setCartItem] = useState(selectedBurger)


    // adds the total price of the items
    let totalPrice = cartItem.reduce(function(accumulator, item) {
        return accumulator + item.price
    }, 0)

    const cartB = cartItem.map((item) => {
        const {name, price, id} = item
         
        return <div key={id}>
            <h4> {name}</h4>
            <p>${price}</p>
        </div>
    })

    return (
        <div>
            {cartB}
            <div>
                <p>Total = {totalPrice}</p>
            </div>
        </div>
    )
}
export default Cart