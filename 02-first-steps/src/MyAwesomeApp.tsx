import { CSSProperties } from "react";

const name = 'Daniel';
const latName = 'Hernandez';
const favoriteGames = ['uno', 'dos', 'tres']
const isActive = true;
const adress = {
    city: 'Salamcnac',
    direction: 'fsdf'
}
export const MyAwesomeApp = () => {
    const myStyles: CSSProperties = {
        backgroundColor: 'red',
        borderRadius: isActive ? 10 : 2,
        padding: 10
    }
    return (
        <>
            <h1>{name}</h1>
            <h3>{latName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'NO activo'}</h1>
            <p style={myStyles}>{JSON.stringify(adress)}</p>
        </>
    )
}
