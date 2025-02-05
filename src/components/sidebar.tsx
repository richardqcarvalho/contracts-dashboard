import { Button } from '@component/button'
import { useNavigate } from 'react-router'

export const Sidebar = () => {
  const navigate = useNavigate()
  const redirects = [
    { path: '/dashboard', label: 'Home' },
    { path: '/dashboard/charts', label: 'Charts' },
    { path: '/dashboard/metrics', label: 'Metrics' },
    { path: '/dashboard/contracts', label: 'Contracts' },
  ]

  return (
    <aside className='flex h-full w-48 flex-col items-center justify-center gap-4 bg-blue-800 p-4'>
      {redirects.map(button => (
        <Button
          key={button.path}
          className='w-full'
          onClick={() => navigate(button.path)}
        >
          {button.label}
        </Button>
      ))}
    </aside>
  )
}
