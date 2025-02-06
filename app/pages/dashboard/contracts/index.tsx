import { getContracts } from '@/app/actions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/primitives/table'
import { formatDate, formatValue } from '@/app/lib/utils'
import { useFiltersStore } from '@/app/store'
import { GetContractsReturnT } from '@/types/contract'
import { useQuery } from '@tanstack/react-query'

export const Contracts = () => {
  const { count, page } = useFiltersStore()
  const { data } = useQuery<GetContractsReturnT>({
    queryKey: ['get-contracts'],
    queryFn: () =>
      getContracts({
        count,
        page,
      }),
    initialData: { contracts: [] },
  })

  return (
    <div className='flex flex-1 flex-col gap-4 overflow-auto p-4'>
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
            <TableRow key={contract.id}>
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
