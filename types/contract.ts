export type ContractStatusT =
  | 'Ativo'
  | 'Expirado'
  | 'Pendente de Renovação'
  | 'Próximo ao Vencimento'

export type ContractTypeT = 'Serviço' | 'Fornecimento' | 'Consultoria' | 'TI'

export type ContractT = {
  id: string
  name: string
  client: string
  startDate: string
  expirationDate: string
  status: ContractStatusT
  value: number
  type: ContractTypeT
}

export type GetContractsReturnT = {
  contracts: ContractT[]
  total: number
  amountByType?: { type: ContractTypeT; amount: number }[]
  amountByStatus?: { status: ContractStatusT; amount: number }[]
}

export type GetContractsParamsT = {
  page: string | null
  count: string | null
}
