import { getContracts } from '@/app/actions'
import { AppPagination } from '@/app/components/app-pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/primitives/table'
import { formatDate, formatValue } from '@/app/lib/utils'
import { ContractsQueryT } from '@/types/contract'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

export const Contracts = () => {
  const [searchParams] = useSearchParams()
  const selectedPage = searchParams.get('page') || '1'
  const perPage = searchParams.get('per_page') || '10'
  const { data } = useQuery<ContractsQueryT>({
    queryKey: ['get-contracts', selectedPage, perPage],
    queryFn: () =>
      getContracts({
        _page: selectedPage,
        _per_page: perPage,
      }),
    initialData: { contracts: [], items: 0 },
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
          {data.contracts.map(contract => (
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
      {data.items > 0 && (
        <AppPagination
          items={data.items}
          first={data.first}
          prev={data.prev}
          next={data.next}
          last={data.last}
          pages={data.pages}
          selectedPage={selectedPage}
          perPage={perPage}
        />
      )}
    </div>
  )
}
