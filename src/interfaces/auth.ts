export interface AuthFormData {
  email: string
  password: string
}

export interface AuthResponse {
  message: string
  token: string
}