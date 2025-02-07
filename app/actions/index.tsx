import { getObjectToQueryParams } from '@/app/lib/utils'
import { GetContractsParamsT, GetContractsReturnT } from '@/types/contract'

export const getContracts = async (requestParams: GetContractsParamsT) => {
  const queryParams = getObjectToQueryParams(requestParams)
  console.log('http://192.168.1.100:3000/contracts' + queryParams)
  const response = await fetch(
    'http://192.168.1.100:3000/contracts' + queryParams,
  )
  const { data: contracts, ...rest }: GetContractsReturnT =
    await response.json()

  return { contracts, ...rest }
}
