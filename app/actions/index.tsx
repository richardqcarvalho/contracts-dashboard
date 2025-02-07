import { getObjectToQueryParams } from '@/app/lib/utils'
import {
  ContractT,
  GetContractsParamsT,
  GetContractsReturnT,
} from '@/app/types/contract'

export const getContracts = async (requestParams?: GetContractsParamsT) => {
  const queryParams = getObjectToQueryParams(requestParams)
  const response = await fetch('http://localhost:3000/contracts' + queryParams)

  if (requestParams) {
    const { data: contracts, ...rest }: GetContractsReturnT =
      await response.json()

    return { contracts, ...rest }
  } else {
    const contracts: ContractT[] = await response.json()

    return { contracts }
  }
}
