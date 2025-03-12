import { useState } from "react";
export default function StateManagement()
{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Default");

    // function increaseCount()
    // {
    //   setCount(count + 1)
    // }



    function increaseCount()
    {
        setCount(count + 1)
        setCount(prevCount => prevCount + 1)
        setName(prevName => `${prevName} ${count}`);
    }
    function decreaseCount()
    {
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={increaseCount}>+</button>
            <span>{count}</span>
            <button onClick={decreaseCount}>-</button>

            <br />
            <h2>{name}</h2>
        </>
    )
}