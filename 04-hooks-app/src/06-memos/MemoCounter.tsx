import { useCounter } from '@/hooks/useCounter'
import React, { useMemo } from 'react'

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy struff started');
    for (let index = 0; index < iterationNumber; index++) {
        console.log('ahi vamos...');
        return `${iterationNumber} iteraciones realizadas`;
    }
    console.timeEnd('Heavy struff started');
}

export const MemoCounter = () => {
    const { counter, decrement, increment } = useCounter(40_000);
    const { counter: counter2, decrement: decrement2, increment: increment2 } = useCounter(40_000);
    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text2xl font-bold'>Memo - useMemo - {myHeavyValue}</h1>
            <hr />
            <h4>
                Counter: {counter}
            </h4>
            <h4>
                Counter2: {counter2}
            </h4>
            <button
                className='bg-blue-500 text-white px-4'
                onClick={increment}>
                +1
            </button>

            <button
                className='bg-blue-500 text-white px-4'
                onClick={increment2}>
                +1
            </button>
        </div>
    )
}
