import { getContracts } from '@action'
import { SkeletonRow, SkeletonWrapper } from '@component/skeleton'
import { QueryStatus, useQuery } from '@tanstack/react-query'
import { ContractT } from '@type/contract'

const Content = (
  props: React.HTMLAttributes<HTMLElement> & {
    status: QueryStatus
  },
) => {
  switch (props.status) {
    case 'success':
      return props.children
    case 'error':
      return <span>Error!</span>
    case 'pending':
    default:
      return (
        <SkeletonWrapper>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </SkeletonWrapper>
      )
  }
}

export const Dashboard = () => {
  const { data, status } = useQuery<ContractT[]>({
    queryKey: ['get-contracts'],
    queryFn: getContracts,
  })

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-blue-900 text-white'>
      <Content status={status}>
        {data?.map(contract => <span key={contract.id}>{contract.name}</span>)}
      </Content>
    </div>
  )
}
