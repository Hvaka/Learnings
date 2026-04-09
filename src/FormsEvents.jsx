import { useState } from "react";


// const [email, setEmail] = useState("");


const FormsEvents = () => {
    const [name, setName] = useState("");
    const [userHandle, setUserHandle] = useState("");

    const handleSubmit = () => {
        setUserHandle(name);
    };

    const getName = () => {
        return (event) => {
            setName(event.target.value);
            // console.log(event.target.value);
        }
    };
    return (
        <div>
            <h2>{userHandle}</h2>
            <input 
                type="text" 
                placeholder="Enter your name" 
                onChange={getName()}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default FormsEvents;