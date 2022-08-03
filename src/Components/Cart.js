function Cart ({addCustSelection}) {
    
    const paid = (e) => {
        e.preventDefault()
        alert('On its wait, thank you for your purchase')
    }
    
    return (
        <div>   
            <form onSubmit={paid}>
                <input placeholder="Name on the card"></input>
                <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
                <input type="month" placeholder="Exp. Date"></input>
                <input placeholder="CCV"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Cart