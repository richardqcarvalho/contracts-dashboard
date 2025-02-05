import { getContracts } from '@actions'
import { useQuery } from '@tanstack/react-query'
import { ContractT } from '@type/contract'

export const Dashboard = () => {
  const { data, isLoading } = useQuery<ContractT[]>({
    queryKey: ['get-contracts'],
    queryFn: getContracts,
  })

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-blue-900 text-white'>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {data?.map(contract => (
            <span key={contract.id}>{contract.name}</span>
          ))}
        </>
      )}
    </div>
  )
}
