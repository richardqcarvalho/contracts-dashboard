import { getContracts } from '@/app/actions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/table'
import { formatDate, formatValue } from '@/app/lib/utils'
import { GetContractsReturnT } from '@/types/contract'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

export const Contracts = () => {
  const [searchParams] = useSearchParams()
  const { data } = useQuery<GetContractsReturnT>({
    queryKey: ['get-contracts'],
    queryFn: () =>
      getContracts({
        count: searchParams.get('count'),
        page: searchParams.get('page'),
      }),
    initialData: { contracts: [] },
  })

  return (
    <div className='flex size-full items-center justify-center'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Identificador do Contrato</TableHead>
            <TableHead>Cliente/Fornecedor</TableHead>
            <TableHead>Data de Início</TableHead>
            <TableHead>Data de Término/Vencimento</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Valor do Contrato</TableHead>
            <TableHead>Tipo de Contrato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.contracts.map(contract => (
            <TableRow
              key={contract.id}
              className='cursor-pointer border-b transition last:border-0 hover:bg-blue-800'
            >
              <TableCell>{contract.id}</TableCell>
              <TableCell>{contract.client}</TableCell>
              <TableCell>{formatDate(contract.startDate)}</TableCell>
              <TableCell>{formatDate(contract.expirationDate)}</TableCell>
              <TableCell>{contract.status}</TableCell>
              <TableCell>{formatValue(contract.value)}</TableCell>
              <TableCell>{contract.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
