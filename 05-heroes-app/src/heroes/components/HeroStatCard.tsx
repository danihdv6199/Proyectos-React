import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title: string;
    icon: React.ReactNode
}

export const HeroStatCard = (props: Props) => {

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
                {
                    props.icon
                }
            </CardHeader>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}
