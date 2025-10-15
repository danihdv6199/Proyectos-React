import React from 'react'
import { Link } from 'react-router'

interface Props {
    subTitle?: string
}

export const CustomLogo = (props: Props) => {
    return (
        <Link to='/' className='flex items-center whitespace-nowrap'>
            <span className='font-montserrat font-bold text-xl whitespace-nowrap m-0'>
                Teslo |
            </span>
            <p className='text-muted-foreground m-0 px-2 whitespace-nowrap'>
                {props.subTitle ?? 'Shop'}
            </p>
        </Link>
    )
}
