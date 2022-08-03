import CardContainer from "./Cardcontainter";

function Home({addCustSelection, burgersObj}) {
    
    return (
        <div>
            <CardContainer burgersObj={burgersObj}
             addCustSelection={addCustSelection} />
        </div>
    )
}
export default Home 