import { UnexpectedError } from '@/domain/application/errors'

import { useHistory } from 'react-router-dom'

type CallBackType = (error: Error) => void
type ResultType = CallBackType

export const useErrorHandler = (callback: CallBackType): ResultType => {
  const history = useHistory()
  return (error: Error): void => {
    if (error instanceof UnexpectedError) {
      history.replace('/')
    } else {
      callback(error)
    }
  }
}
