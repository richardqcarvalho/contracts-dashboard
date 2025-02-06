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

export type GetContractsParamsT = {
  page: number
  count: number
}
