import { StoreT } from '@/types/store'
import { create } from 'zustand'

const filtersStore = create<StoreT>()

export const useFiltersStore = filtersStore(set => ({
  count: 5,
  setCount: count => set({ count }),
}))
