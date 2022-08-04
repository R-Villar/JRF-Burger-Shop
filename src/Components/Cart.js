import {useState} from "react"


function Cart ({selectedBurger}) {
    // const {price, name} = selectedBurger
    const [cartItem, setCartItem] = useState(selectedBurger)
    
    const cartB = cartItem.map((item) => {
        let total =+ item.price
        return <div key={item.id}>
            <h4> {item.name}</h4>
            <p>${item.price}</p>
            <p>total = {total}</p>
        </div>
    })

    console.log(cartB)
   
    
    
    return (
        <div>
            {cartB}

            <div>
            {/* <p>Total = {total}</p> */}
            </div>
        </div>
        
    )
}
export default Cart