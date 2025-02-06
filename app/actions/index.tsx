import { getObjectToQueryParams } from '@/app/lib/utils'
import { GetContractsParamsT } from '@/types/contract'

export const getContracts = async (requestParams?: GetContractsParamsT) => {
  const queryParams = getObjectToQueryParams(requestParams)
  const response = await fetch('http://localhost:4000/contracts' + queryParams)
  const contracts = await response.json()

  return contracts
}
