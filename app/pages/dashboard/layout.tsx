import { AppSidebar } from '@/app/components/app-sidebar'
import {
  SidebarProvider,
  SidebarTrigger,
} from '@/app/components/primitives/sidebar'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-screen items-center justify-center bg-blue-900 text-white'>
        <AppSidebar />
        <SidebarTrigger />
        <Outlet />
      </div>
    </SidebarProvider>
  )
}
