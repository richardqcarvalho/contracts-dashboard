import { Card, CardContent, CardFooter } from '@/app/components/primitives/card'
import { ArrowUp01, ChartColumn, ReceiptText } from 'lucide-react'
import { useNavigate } from 'react-router'

export const DashboardHome = () => {
  const navigate = useNavigate()
  const cards = [
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

  return (
    <div className='flex size-full flex-col gap-4 p-4 sm:flex-row'>
      {cards.map(card => (
        <Card
          key={card.path}
          className='flex flex-1 cursor-pointer flex-col hover:bg-accent'
          onClick={() => navigate(card.path)}
        >
          <CardContent className='flex flex-1 items-center justify-center'>
            <card.icon size={64} />
          </CardContent>
          <CardFooter className='flex justify-start'>
            <p className='text-xl font-bold sm:text-2xl'>{card.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
