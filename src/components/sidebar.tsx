import { Button } from '@component/button'
import { useNavigate } from 'react-router'

export const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <aside className='flex h-full w-48 flex-col items-center justify-center gap-4 bg-blue-800 p-4'>
      <Button
        className='w-full'
        onClick={() => navigate('/dashboard')}
      >
        Home
      </Button>
      <Button
        className='w-full'
        onClick={() => navigate('/dashboard/metrics')}
      >
        Metrics
      </Button>
      <Button
        className='w-full'
        onClick={() => navigate('/dashboard/charts')}
      >
        Charts
      </Button>
      <Button
        className='w-full'
        onClick={() => navigate('/dashboard/contracts')}
      >
        Contracts
      </Button>
    </aside>
  )
}
