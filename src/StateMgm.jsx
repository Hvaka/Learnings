import { useState,useEffect } from "react";

const StateMgm = () => {
    const [city, setCity] = useState("Delhi");

    useEffect(() => {
       if (city === "Mumbai") {
        setCity("Delhi");
       } else {
        setCity("Bangalore");
       }
    }, [city]);
    return (<div>
        <h1>I live in {city}</h1>
    </div>
    );

}
export default StateMgm;