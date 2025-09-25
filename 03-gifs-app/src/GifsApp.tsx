import { GifList } from './gifs/components/GifList'
import { PreviousSearch } from './gifs/components/PreviousSearch'
import { useGifs } from './gifs/hooks/useGifs'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

export const GifsApp = () => {

    const { onSearch, onTermClicked, gifs, previousTerms } = useGifs()

    return (
        <>
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte' />
            <SearchBar placholder='Busca lo que quieras' onSearch={onSearch} />
            <PreviousSearch searches={previousTerms} onLabelClicked={onTermClicked} />
            {
                gifs &&
                <GifList Gifs={gifs} />
            }

        </>
    )
}
