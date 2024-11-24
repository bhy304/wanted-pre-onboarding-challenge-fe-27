export interface SuccessResponse<T> {
  data: T
  status: number
}

export interface ErrorResponse {
  message: string
  status: number
}