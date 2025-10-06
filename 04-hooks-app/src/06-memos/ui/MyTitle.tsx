import React from 'react'
interface props {
    title: string
}
export const MyTitle = React.memo((props: props) => {
    console.log("My title redenred")
    return (
        <h1 className='text-3xl'>{props.title}</h1>
    )
})
