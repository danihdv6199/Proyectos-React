import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";
import { Outlet } from "react-router";

interface FavoriteHeroContext {
    favorites: Hero[];
    favoriteCount: number;

    toggleFavorite: (hero: Hero) => void;
    isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext<FavoriteHeroContext>({} as FavoriteHeroContext);

const getFavoriteFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : []
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromLocalStorage());
    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id === hero.id);
        if (heroExist) {
            setFavorites(favorites.filter(h => h.id !== hero.id))
        }
        else {

            setFavorites([...favorites, hero])
        }
    }

    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoriteHeroContext.Provider
            value={{
                favoriteCount: favorites.length,
                favorites: favorites,
                isFavorite: isFavorite,
                toggleFavorite: toggleFavorite
            }}
        >
            {children}
        </FavoriteHeroContext.Provider>
    )
}