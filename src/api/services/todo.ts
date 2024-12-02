import axiosAPI from "@/api/axios"

import { SuccessResponse } from '@/interfaces/http'
import { CreateTodo, UpdateTodo, TodoListResponse, TodoResponse } from '@/interfaces/todo'

export const getTodos = async (): Promise<SuccessResponse<TodoListResponse>> => {
  const response = await axiosAPI.get<TodoListResponse>('/todos')

  return response
}

export const getTodoById = async (id: string): Promise<SuccessResponse<TodoResponse>> => {
  const response = await axiosAPI.get<TodoResponse>(`/todos/${id}`)

  return response
}

export const createTodo = async (todo: CreateTodo): Promise<SuccessResponse<TodoResponse>> => {
  const response = await axiosAPI.post<TodoResponse, CreateTodo>('/todos', todo)

  return response
}

export const updateTodo = async ({ id, title, content }: UpdateTodo): Promise<SuccessResponse<TodoResponse>> => {
  const response = await axiosAPI.put<TodoResponse, UpdateTodo>(`/todos/${id}`, { title, content })

  return response
}

export const deleteTodo = async (id: string): Promise<SuccessResponse<null>> => {
  const response = await axiosAPI.delete<null>(`/todos/${id}`)

  return response
}