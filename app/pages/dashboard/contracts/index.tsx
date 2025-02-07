import { getContracts } from '@/app/actions'
import { AppDrawer } from '@/app/components/app-drawer'
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
import { ContractsQueryT, ContractT } from '@/app/types/contract'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export const Contracts = () => {
  const [open, setOpen] = useState(false)
  const [drawerData, setDrawerData] = useState<ContractT>({
    client: '',
    expirationDate: '',
    id: '',
    name: '',
    startDate: '',
    status: 'Ativo',
    type: 'Consultoria',
    value: 0,
  })
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

  useEffect(() => {
    if (drawerData.id) setOpen(true)
  }, [drawerData])

  return (
    <div className='flex flex-1 flex-col gap-4 overflow-auto p-4'>
      <AppDrawer
        open={open}
        setOpen={setOpen}
        data={drawerData as ContractT}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contract ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Start date</TableHead>
            <TableHead>Expiration date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.contracts.map(contract => (
            <TableRow
              onClick={() => setDrawerData(contract)}
              key={contract.id}
              className='cursor-pointer'
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
      {data.items && (
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
