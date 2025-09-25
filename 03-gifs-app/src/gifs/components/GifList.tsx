import React from 'react'
import { Gif } from '../interfaces/gif.interface'

interface GifListProps {
    Gifs: Gif[]
}

export const GifList = (props: GifListProps) => {
    return (
        <div className='gifs-container'>

            {
                props.Gifs.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title}></img>
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5MB)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
