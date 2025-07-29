export interface Application {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'rejected'
  createdAt: string
  updatedAt: string
}

export interface ApplicationFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: Application['status']
}