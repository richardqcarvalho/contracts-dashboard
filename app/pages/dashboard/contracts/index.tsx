import { getContracts } from '@/app/actions'
import { Skeleton } from '@/app/components/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/table'
import { formatDate, formatValue } from '@/app/lib/utils'
import { useConstractStore } from '@/app/store'
import { ContractT } from '@/types/contract'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const Contracts = () => {
  const { contracts, setContracts } = useConstractStore()
  const { data, isPending } = useQuery<ContractT[]>({
    queryKey: ['get-contracts'],
    queryFn: getContracts,
  })

  useEffect(() => {
    if (data) setContracts(data)
  }, [data])

  return (
    <div className='flex size-full items-center justify-center'>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Identificador do Contrato</TableHeader>
            <TableHeader>Cliente/Fornecedor</TableHeader>
            <TableHeader>Data de Início</TableHeader>
            <TableHeader>Data de Término/Vencimento</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Valor do Contrato</TableHeader>
            <TableHeader>Tipo de Contrato</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {isPending ? (
            <Skeleton />
          ) : (
            <>
              {contracts.map(contract => (
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
            </>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
