import { Sidebar } from '@component/sidebar'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-blue-900 text-white'>
      <Sidebar />
      <Outlet />
    </div>
  )
}
