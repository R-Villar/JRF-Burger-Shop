import BurgerCard from "./BurgerCard";

function CardContainer({burgersObj}) {

    // maps thru the burgersObj and passes prop to Card component.
    const burgerElement = burgersObj.map((burger) => {
        return  <BurgerCard key={burger.id} burger={burger} />
    })

    return (
        <div>
           {burgerElement}
        </div>
    )
}

export default CardContainer