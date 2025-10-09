import { CustomBeadcrumbs } from "@/components/custom/CustomBeadcrumbs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import {
    Heart
} from "lucide-react"
import { use, useMemo } from "react"
import { useSearchParams } from "react-router"

export type tabsType =
    "all" |
    "favorites" |
    "heroes" |
    "villains"

const validTabs: tabsType[] = ["all", "favorites", "heroes", "villains"];

export const HomePage = () => {
    // const [activeTab, setActiveTab] = useState<tabsType>("all");
    const [searchParams, setSearchParams] = useSearchParams();

    const { favoriteCount, favorites } = use(FavoriteHeroContext)

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';
    const category = searchParams.get('category') ?? 'aa';

    const selectedTab = useMemo(() => {
        return validTabs.includes(activeTab as tabsType) ? activeTab : 'all'
    }, [activeTab])

    const { data: heroesResponse } = usePaginatedHero(+page, +limit, category)

    const { data: summary } = useHeroSummary();

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de superHeroes"
                    description="Descubre, explora y administra" />

                <CustomBeadcrumbs currentPage="Super herores" />
                {/* Stats Dashboard */}
                <HeroStats />


                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setSearchParams(prev => {
                                prev.set('tab', 'all')
                                prev.set('category', 'all')
                                prev.set('page', '1')
                                return prev;
                            })}>
                            All Characters ({summary?.totalHeroes})
                        </TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams(prev => {
                                prev.set('tab', 'favorites')
                                return prev;
                            })}>
                            <Heart className="h-4 w-4" />
                            Favorites ({favoriteCount})
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setSearchParams(prev => {
                                prev.set('tab', 'heroes')
                                prev.set('category', 'hero')
                                prev.set('page', '1')

                                return prev;
                            })}>
                            Heroes ({summary?.heroCount})
                        </TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams(prev => {
                                prev.set('tab', 'villains')
                                prev.set('category', 'villain')
                                prev.set('page', '1')

                                return prev;
                            })}>
                            Villains ({summary?.villainCount})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <h1>Todos los personajes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />

                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1>Favoritos</h1>
                        <HeroGrid heroes={favorites} />

                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1>Heroes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />

                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Villanso</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />

                    </TabsContent>
                </Tabs>



                {/* Pagination */}
                {
                    selectedTab !== 'favorites' &&
                    <CustomPagination
                        totalPages={heroesResponse?.pages ?? 1}
                    />
                }
            </>
        </>
    )
}