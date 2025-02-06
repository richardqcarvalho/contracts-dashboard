import { AppSidebar } from '@/app/components/app-sidebar'
import {
  SidebarProvider,
  SidebarTrigger,
} from '@/app/components/primitives/sidebar'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <SidebarProvider className='flex h-svh w-full'>
      <AppSidebar />
      <div className='flex size-full flex-col'>
        <div className='sticky top-0 z-10 bg-white p-3'>
          <SidebarTrigger />
        </div>
        <div className='flex flex-1'>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}
