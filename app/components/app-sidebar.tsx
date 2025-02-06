import { ArrowUp01, ChartColumn, Home, ReceiptText } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/app/components/sidebar'
import { useNavigate } from 'react-router'

const items = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: Home,
  },
  {
    title: 'Charts',
    path: '/dashboard/charts',
    icon: ChartColumn,
  },
  {
    title: 'Contracts',
    path: '/dashboard/contracts',
    icon: ReceiptText,
  },
  {
    title: 'Metrics',
    path: '/dashboard/metrics',
    icon: ArrowUp01,
  },
]

export function AppSidebar() {
  const navigate = useNavigate()

  return (
    <Sidebar
      className='rounded-tr-xl rounded-br-xl bg-blue-800'
      variant='inset'
      collapsible='icon'
    >
      <SidebarContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => navigate(item.path)}
                className='cursor-pointer hover:bg-white hover:text-blue-800'
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
