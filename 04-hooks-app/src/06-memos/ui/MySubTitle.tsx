import React from 'react'

interface Props {
    subTitle: string;
    callMyAPI: () => void;
}

export const MySubTitle = React.memo((props: Props) => {
    console.log('My subTitle rendered')
    return (
        <>
            <h6 className='text-2xl font-bold'>
                {props.subTitle}
            </h6>
            <button
                className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'
                onClick={props.callMyAPI}>
                Llamar a fucnion
            </button>
        </>
    )
})
