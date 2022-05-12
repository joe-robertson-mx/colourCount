import { createElement, useEffect, useState } from "react";
import randomColor from "randomcolor";

export function Count({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    const [colour, setColour] = useState("");

    const increment = () => {
        setCount(prevState => prevState + 1);
    };

    const decrement = () => {
        setCount(prevState => prevState - 1);
    };

    useEffect(() => {
        setColour(randomColor());
    }, [count]);

    return (
        <div>
            <p style={{ color: colour }}>{count}</p>
            <button className="mx-button btn-primary" onClick={increment}>
                +
            </button>
            <button className="mx-button" onClick={decrement}>
                -
            </button>
        </div>
    );
}
