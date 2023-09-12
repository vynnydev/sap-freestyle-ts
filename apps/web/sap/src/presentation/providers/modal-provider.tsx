import { useEffect, useState } from 'react'

import EditModal from '../components/edit-modal/edit-modal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <EditModal />
    </>
  )
}

export default ModalProvider
