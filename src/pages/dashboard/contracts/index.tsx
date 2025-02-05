import { getContracts } from '@action'
import { SkeletonRow, SkeletonWrapper } from '@component/skeleton'
import {
  Table,
  TableBody,
  TableBodyRow,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
} from '@component/table'
import { useConstractStore } from '@store'
import { useQuery } from '@tanstack/react-query'
import { ContractT } from '@type/contract'
import { formatDate, formatValue } from '@util'
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
          <TableHeaderRow>
            <TableHeader>Identificador do Contrato</TableHeader>
            <TableHeader>Cliente/Fornecedor</TableHeader>
            <TableHeader>Data de Início</TableHeader>
            <TableHeader>Data de Término/Vencimento</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Valor do Contrato</TableHeader>
            <TableHeader>Tipo de Contrato</TableHeader>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {isPending ? (
            <SkeletonWrapper>
              <SkeletonRow count={10} />
            </SkeletonWrapper>
          ) : (
            <>
              {contracts.map(contract => (
                <TableBodyRow
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
                </TableBodyRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
