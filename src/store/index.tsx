import { StoreT } from '@type/store'
import { create } from 'zustand'

const contractStore = create<StoreT>()

export const useConstractStore = contractStore(set => ({
  contracts: [],
  setContracts: contracts => set({ contracts }),
}))
