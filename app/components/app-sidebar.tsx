import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/app/components/primitives/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/app/components/primitives/sidebar'
import { ArrowUp01, ChartColumn, ChevronRight, ReceiptText } from 'lucide-react'

const items = [
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

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar {...props}>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <Collapsible asChild>
            <SidebarMenuItem>
              <CollapsibleTrigger
                className='group flex justify-between'
                asChild
              >
                <SidebarMenuButton>
                  <span>Dashboard</span>
                  <div className='transition group-data-[state=open]:rotate-90'>
                    <ChevronRight size={16} />
                    <span className='sr-only'>Toggle</span>
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {items.map(item => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={item.path}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
)
