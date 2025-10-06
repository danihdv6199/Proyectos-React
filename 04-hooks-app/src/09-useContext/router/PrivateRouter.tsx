import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router';

interface Props {
    element: React.ReactNode
}

export const PrivateRouter = (props: Props) => {
    const { authStatus } = useContext(UserContext);
    if (authStatus === 'checking') {
        return <div>Loading...</div>
    }

    if (authStatus === 'authenticated') {
        return props.element;
    }
    return <Navigate to="/Login" replace />
}
