import {
    createBrowserRouter,
    Navigate
} from "react-router"
import { AboutPage } from "../pages/about/AboutPage"
import { ProfilePage } from "../pages/profile/ProfilePage"
import { AuthPage } from "../pages/auth/AuthPage"
import { PrivateRouter } from "./PrivateRouter"

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AboutPage />
    },
    {
        path: '/profile',
        element: <PrivateRouter element={<ProfilePage />} />
    },
    {
        path: '/login',
        element: <AuthPage />
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
])