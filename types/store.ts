import { ContractT } from '@/types/contract'

export type StoreT = {
  contracts: ContractT[]
  setContracts: (contracts: ContractT[]) => void
}
