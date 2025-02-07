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

type ContractsSharedPropsT = {
  items?: number
  first?: number
  prev?: number | null
  next?: number | null
  last?: number
  pages?: number
}

export type GetContractsReturnT = {
  data: ContractT[]
} & ContractsSharedPropsT

export type ContractsQueryT = {
  contracts: ContractT[]
} & ContractsSharedPropsT

export type GetContractsParamsT = {
  _page: string | null
  _per_page: string | null
}

export type AmountByStatusT = { status: ContractStatusT; amount: number }[]

export type AmountByTypeT = { type: ContractTypeT; amount: number }[]

export type GetAmountByStatusT = (contracts: ContractT[]) => AmountByStatusT

export type GetAmountByTypeT = (contracts: ContractT[]) => AmountByTypeT
