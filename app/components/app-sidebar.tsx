import { ArrowUp01, ChartColumn, Home, ReceiptText } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Contracts dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.path)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
