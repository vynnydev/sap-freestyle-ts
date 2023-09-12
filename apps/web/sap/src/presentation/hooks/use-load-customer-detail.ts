import { create } from 'zustand'

interface ILoadCustomerDetail {
  ids: number[]
  activeId?: number
  setId: (id: number) => void
  setIds: (ids: number[]) => void
  reset: () => void
}

const useLoadCustomerDetail = create<ILoadCustomerDetail>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: number) => set({ activeId: id }),
  setIds: (ids: number[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
}))

export default useLoadCustomerDetail
