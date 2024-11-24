import axiosAPI from '@/api/axios'

import { SuccessResponse } from '@/interfaces/http'
import { AuthFormData, AuthResponse } from '@/interfaces/auth'

/**
 * 회원가입
 * @async
 * @param {AuthFormData} authForm
 * @returns {Promise<SuccessResponse<AuthResponse>>}
 */
export const signup = async (authForm: AuthFormData): Promise<SuccessResponse<AuthResponse>> => {
  const response = await axiosAPI.post<AuthResponse, AuthFormData>('/users/create', authForm)

  return response
}

/**
 * 로그인
 * @async
 * @param {AuthFormData} authForm
 * @returns {Promise<SuccessResponse<AuthResponse>>}
 */
export const login = async (authForm: AuthFormData): Promise<SuccessResponse<AuthResponse>> => {
  const response = await axiosAPI.post<AuthResponse, AuthFormData>('/users/login', authForm)

  if (response.data.token) {
    localStorage.setItem('token', response.data.token)
  }

  return response
}

/**
 * 로그아웃
 * NOTE: 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.
 */
export const logout = (): void => {
  localStorage.removeItem('token')
}