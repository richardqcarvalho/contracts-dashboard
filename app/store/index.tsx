import { FiltersStoreT } from '@/app/types/store'
import { create } from 'zustand'

const filtersStore = create<FiltersStoreT>()

export const useFiltersStore = filtersStore(set => ({
  count: 10,
  setCount: count => set({ count }),
  page: 1,
  setPage: page => set({ page }),
}))
