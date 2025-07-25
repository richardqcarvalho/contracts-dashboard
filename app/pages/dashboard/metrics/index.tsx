import { getContracts } from '@/app/actions'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/primitives/card'
import { formatValue } from '@/app/lib/utils'
import { ContractsQueryT } from '@/app/types/contract'
import { useQuery } from '@tanstack/react-query'

export const Metrics = () => {
  const { data } = useQuery<ContractsQueryT>({
    queryKey: ['get-contracts'],
    queryFn: () => getContracts(),
    initialData: { contracts: [] },
  })

  const cards = [
    {
      title: 'Total number of contracts',
      description: 'Total numbers of contracts registered',
      content: data.contracts.length,
    },
    {
      title: 'Active contracts',
      description: 'Amount of contracts currently active',
      content: data.contracts.filter(contract => contract.status === 'Ativo')
        .length,
    },
    {
      title: 'Contracts close to expiration',
      description: 'How many contracts are close to expiration date',
      content: data.contracts.filter(
        contract => contract.status === 'Próximo ao Vencimento',
      ).length,
    },
    {
      title: 'Total contracts value',
      description: 'Sum of active contracts values',
      content: formatValue(
        data.contracts.reduce(
          (accumulatedValue, contract) =>
            contract.status === 'Ativo'
              ? accumulatedValue + contract.value
              : accumulatedValue,
          0,
        ),
      ),
    },
  ]

  return (
    <div className='grid size-full grid-cols-2 gap-4 p-4'>
      {cards.map(card => (
        <Card
          key={card.title}
          className='flex flex-col justify-between'
        >
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-end'>
            <p className='text-lg font-bold sm:text-4xl'>{card.content}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
