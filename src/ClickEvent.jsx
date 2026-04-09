import { useState } from "react";
 const ClickEvent = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ClickEvent;