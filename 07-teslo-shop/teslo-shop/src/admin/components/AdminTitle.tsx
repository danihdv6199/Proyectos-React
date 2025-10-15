import React from 'react'

interface Props {
    title: string;
    subtitle: string;
}

export const AdminTitle = (props: Props) => {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {props.title}
            </h1>
            <p className="text-gray-600">
                {props.subtitle}

            </p>
        </div>
    )
}
