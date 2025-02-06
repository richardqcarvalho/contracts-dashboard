export type ContractT = {
  id: string
  name: string
  client: string
  startDate: string
  expirationDate: string
  status: string
  value: number
  type: string
}

export type GetContractsReturnT = {
  contracts: ContractT[]
  count?: number
  page?: number
  total?: number
}

export type GetContractsParamsT = {
  page?: string | null
  count?: string | null
}
