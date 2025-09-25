import React, { useState } from 'react'
import './ItemCounter.css'

interface ItemCounterProps {
    name: string;
    quantity: number | undefined
}

export const ItemCounter = (props: ItemCounterProps) => {

    const [count, setCount] = useState(props.quantity)

    const onClickPlus = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount((count ?? 0) + 1);
        console.log(count)
    }

    const onClickSubtract = () => {
        if (count === 1) return;
        setCount((count ?? 0) - 1);

    }

    return (
        <section
            className='item-row'>
            <span className='item-text'>
                {props.name}
            </span>
            <button
                onClick={(e) => onClickPlus(e)}>
                +1
            </button>
            <span>{count ?? 0}</span>
            <button
                onClick={onClickSubtract}>
                -1
            </button>
        </section>
    )
}
