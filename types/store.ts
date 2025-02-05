import { ContractT } from '@type/contract'

export type StoreT = {
  contracts: ContractT[]
  setContracts: (contracts: ContractT[]) => void
}
