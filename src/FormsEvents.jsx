import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";



// const [email, setEmail] = useState("");


const FormsEvents = () => {
    const [name, setName] = useState("");
    const [userHandle, setUserHandle] = useState("");
    const notify = () => toast("data submitted successfully!");

    const handleSubmit = () => {
        setUserHandle(name);
        notify();
    };

    const getName = () => {
        return (event) => {
            setName(event.target.value);
            // console.log(event.target.value);
        }
    };
    return (
        <div>
            <ToastContainer />
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