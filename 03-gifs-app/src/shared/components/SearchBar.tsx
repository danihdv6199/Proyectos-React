import { useEffect, useState } from 'react';

interface SearchBarProps {
    placholder: string,
    onSearch: (value: string) => void
}

export const SearchBar = (props: SearchBarProps) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            props.onSearch(value)
        }, 700)

        return () => {
            clearTimeout(timeOutId);
        }
    }, [value, setValue])

    const handleSearch = () => {
        props.onSearch(value)
        setValue("")
    }
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={props.placholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key == 'Enter')
                        handleSearch()
                }} />
            <button
                onClick={handleSearch}>
                Buscar
            </button>
        </div>
    )
}
