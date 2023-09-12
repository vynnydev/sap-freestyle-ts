import { create } from 'zustand'

import { CustomerModel } from '@/domain/models'

interface IEditCustomer {
  isOpen: boolean
  data?: CustomerModel
  onOpen: (data: CustomerModel) => void
  onClose: () => void
}

const usePreviewModal = create<IEditCustomer>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: CustomerModel) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal
