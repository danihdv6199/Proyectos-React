import { Badge } from '@/components/ui/badge'
import { Heart, Users, Zap } from 'lucide-react'
import { useHeroSummary } from '../hooks/useHeroSummary'
import { HeroStatCard } from './HeroStatCard'
import { use, useMemo } from 'react'
import { FavoriteHeroContext } from '../context/FavoriteHeroContext'

export const HeroStats = () => {
    const { data: summary } = useHeroSummary();
    const { favoriteCount } = use(FavoriteHeroContext);
    if (!summary)
        return <></>
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <HeroStatCard
                title='Total personajes'
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold">{summary?.totalHeroes ?? 0}</div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        {summary?.heroCount}
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        {summary?.villainCount}

                    </Badge>
                </div>
            </HeroStatCard>
            <HeroStatCard
                title='Favoritos'
                icon={<Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
                <p className="text-xs text-muted-foreground">{((favoriteCount / summary?.totalHeroes) * 100).toFixed(2)}% of total</p>
            </HeroStatCard>

            <HeroStatCard
                title='Fuerte'
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{summary?.strongestHero.name}</div>
                <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}/10</p>
            </HeroStatCard>
            <HeroStatCard
                title='Inteligente'
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{summary?.smartestHero.name}</div>
                <p className="text-xs text-muted-foreground">Inteligente: {summary?.smartestHero.strength}/10</p>
            </HeroStatCard>


        </div>
    )
}
