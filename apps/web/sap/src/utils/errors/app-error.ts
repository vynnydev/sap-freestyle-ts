/* eslint-disable camelcase */
import { EErrorType } from './enums/errors/eerror-type'

interface IErrorConstructor {
  message: string
  status_code?: number
}

export default class AppError extends Error {
  public readonly status_code: number | undefined

  public readonly message: string

  public readonly type = EErrorType.APP_ERROR

  constructor({ message, status_code }: IErrorConstructor) {
    super(message)

    this.status_code = status_code
    this.message = message

    Object.setPrototypeOf(this, AppError.prototype)
  }
}
