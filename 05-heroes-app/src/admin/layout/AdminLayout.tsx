import { Outlet } from 'react-router'

export const AdminLayout = () => {
    return (
        <div className='bg-blue-200'>
            <p>AdminLayout</p>
            <Outlet />
        </div>
    )
}
