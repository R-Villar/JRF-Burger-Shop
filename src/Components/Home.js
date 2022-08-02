import React, { useEffect, useState } from "react";
import CardContainer from "./Cardcontainter";


function Home() {

    const [burgersObj, setBurgersObj] = useState([])

    // fetch request
    useEffect(() => {
      fetch('http://localhost:3000/burgers')
        .then(res => res.json())
        .then(data => setBurgersObj(data))
    }, [])
    // console.log(burgersObj)

    return (
        <div>
            <CardContainer burgersObj={burgersObj} />
        </div>
    )
}
export default Home 