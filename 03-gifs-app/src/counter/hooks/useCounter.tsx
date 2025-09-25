import { useState } from "react";

export const useCounter = (initialvalue: number = 10) => {
    const [counter, setCounter] = useState(initialvalue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter(prev => prev - 1);
    }
    const handleReset = () => {
        setCounter(initialvalue);
    }
    return {
        counter,
        handleAdd,
        handleReset,
        handleSubtract
    }
}
