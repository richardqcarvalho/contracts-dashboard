import { getContracts } from '@/app/actions'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/primitives/card'
import { ChartContainer } from '@/app/components/primitives/chart'
import { getAmountByStatus, getAmountByType } from '@/app/lib/utils'
import {
  AmountByStatusT,
  AmountByTypeT,
  ContractsQueryT,
  ContractStatusT,
  ContractTypeT,
} from '@/app/types/contract'
import { useQuery } from '@tanstack/react-query'
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from 'recharts'

export const Charts = () => {
  const { data } = useQuery<ContractsQueryT>({
    queryKey: ['get-contracts'],
    queryFn: () => getContracts(),
    initialData: { contracts: [] },
  })
  const amountByStatus: AmountByStatusT = getAmountByStatus(data.contracts)
  const amountByType: AmountByTypeT = getAmountByType(data.contracts)
  const chartConfig = {
    chart: {
      color: 'hsl(var(--primary))',
    },
    background: {
      color: 'hsl(var(--card))',
    },
  }

  const translate = (label: ContractStatusT | ContractTypeT) => {
    const labels = {
      Ativo: 'Active',
      Expirado: 'Expired',
      'Pendente de Renovação': 'Pendent',
      'Próximo ao Vencimento': 'Expire soon',
      Serviço: 'Service',
      Fornecimento: 'Supply',
      Consultoria: 'Consultancy',
      TI: 'IT',
    }

    return labels[label]
  }

  return (
    <div className='flex size-full flex-col gap-4 p-4 sm:flex-row'>
      <Card className='flex-1'>
        <CardHeader>
          <CardTitle>Contracts by status</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={amountByStatus}
              layout='vertical'
              compact
            >
              <YAxis
                dataKey='status'
                type='category'
                hide
              />
              <XAxis
                dataKey='amount'
                type='number'
                hide
              />
              <Bar
                dataKey='amount'
                layout='vertical'
                radius={4}
              >
                <LabelList
                  dataKey='amount'
                  position='insideRight'
                  offset={8}
                  className='fill-[--color-background]'
                  fontSize={16}
                  fontWeight={600}
                />
                <LabelList
                  dataKey='status'
                  position='right'
                  offset={8}
                  className='fill-[--color-chart]'
                  fontSize={12}
                  fontWeight={600}
                  formatter={(value: ContractStatusT) => translate(value)}
                />
                {amountByStatus.map(({ status }, index) => (
                  <Cell
                    key={index}
                    fill={`${status === 'Próximo ao Vencimento' ? 'hsl(var(--destructive))' : ''}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className='flex-1'>
        <CardHeader>
          <CardTitle>Contracts by type</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={amountByType}
              layout='vertical'
            >
              <YAxis
                dataKey='type'
                type='category'
                hide
              />
              <XAxis
                dataKey='amount'
                type='number'
                hide
              />
              <Bar
                dataKey='amount'
                layout='vertical'
                fill='var(--color-chart)'
                radius={4}
              >
                <LabelList
                  dataKey='amount'
                  position='insideRight'
                  className='fill-[--color-background]'
                  fontSize={16}
                  offset={12}
                  fontWeight={600}
                />
                <LabelList
                  dataKey='type'
                  position='insideLeft'
                  className='fill-[--color-background]'
                  fontSize={12}
                  offset={12}
                  fontWeight={600}
                  formatter={(value: ContractTypeT) => translate(value)}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
