import type { Hero } from '@/heroes/types/hero.interface';
import { HeroGridCard } from './HeroGridCard'

interface Props {
    heroes: Hero[];
}

export const HeroGrid = (props: Props) => {
    return (
        < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" >
            {/* Hero Card 1 - Superman */}
            {
                props.heroes.map(hero => (
                    <HeroGridCard
                        key={hero.id}
                        hero={hero} />
                ))
            }

        </div >
    )
}
