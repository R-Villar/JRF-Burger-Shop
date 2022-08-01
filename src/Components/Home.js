import React from "react";
import CardContainer from "./Cardcontainter";
import BurgersData from "../BurgersData" 

function Home() {
     console.log(BurgersData)
    return (
        <div>
            <CardContainer />
        </div>
    )
}
export default Home