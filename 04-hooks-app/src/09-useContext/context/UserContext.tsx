import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { User, users } from '../data/user-mock.data';
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
interface UserContextProps {
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`)
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated')
        localStorage.setItem('userId', userId.toString())
        return true
    }
    const handleLogout = () => {
        setAuthStatus('not-authenticated')
        setUser(null);
        localStorage.removeItem('userId')

    }

    useEffect(() => {
        const storaedUserId = localStorage.getItem('userId');
        if (storaedUserId) {
            handleLogin(+storaedUserId)
            return;
        }
        handleLogout()
    }, [])

    return (
        <UserContext.Provider value={{
            authStatus: authStatus,
            isAuthenticated: authStatus === 'authenticated',
            user: user,
            login: handleLogin,
            logout: handleLogout
        }}>
            {children}
        </UserContext.Provider>)


}
