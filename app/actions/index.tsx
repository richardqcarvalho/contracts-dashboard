import { getObjectToQueryParams } from '@/app/lib/utils'
import { GetContractsParamsT, GetContractsReturnT } from '@/types/contract'

export const getContracts = async (requestParams: GetContractsParamsT) => {
  const queryParams = getObjectToQueryParams(requestParams)
  const response = await fetch(
    'http://192.168.1.100:4000/contracts' + queryParams,
  )
  const data: GetContractsReturnT = await response.json()

  return data
}
