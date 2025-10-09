import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBeadcrumbs } from '@/components/custom/CustomBeadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { searchHeroesAction } from '@/heroes/actions/search-heros.action';

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') ?? undefined;
    const strength = searchParams.get('strength') ?? undefined;
    const { data: heroes = [] } = useQuery({
        queryKey: ['search', { name, strength }],
        queryFn: () => searchHeroesAction({ name, strength }),
        staleTime: 1000 * 60 * 5
    })
    return (
        <>
            <CustomJumbotron
                title="Busqueda de superHeroes"
                description="Descubre, explora y administra" />
            <CustomBeadcrumbs
                currentPage='Buscador de heroes'
            />
            <HeroStats />
            {/* Controls */}
            <SearchControls />
            <HeroGrid heroes={heroes} />
        </>
    )
}

export default SearchPage;