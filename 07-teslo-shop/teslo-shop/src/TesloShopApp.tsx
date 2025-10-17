import { Outlet, RouterProvider } from 'react-router';
import { appRouter } from './app.router';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner'
import type { PropsWithChildren } from 'react';
import { CheckAuthAction } from './auth/actions/check-auth.action';
import { Spinner } from './components/ui/spinner';
import { useAuthStore } from './auth/store/auth.store';
const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {

    const { checkAuthStatus } = useAuthStore()
    const { isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthStatus,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5,
        refetchOnWindowFocus: true
    })
    if (isLoading) return <div className='flex items-center h-screen w-full justify-center'>
        <Spinner className='size-8 text-green-500' />
    </div>
    return <>{children}</>
}

export const TesloShopApp = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
            <CheckAuthProvider>
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>
        </QueryClientProvider>
    )
}
