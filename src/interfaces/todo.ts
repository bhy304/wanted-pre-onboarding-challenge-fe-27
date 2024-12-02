export interface Todo {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface CreateTodo {
  title: string
  content: string
}

export interface UpdateTodo {
  id?: string
  title: string
  content: string
}

export interface TodoListResponse {
  data: Todo[]
}

export interface TodoResponse {
  data: Todo
}
