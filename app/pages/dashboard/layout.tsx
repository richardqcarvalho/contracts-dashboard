import { AppSidebar } from '@/app/components/app-sidebar'
import { SidebarProvider } from '@/app/components/sidebar'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-blue-900 text-white'>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <Outlet />
    </div>
  )
}
