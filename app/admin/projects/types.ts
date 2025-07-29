export interface Project {
  id: number
  title: string
  img: string
  description: string
  link: string
  github?: string
}

export interface ProjectFormData {
  title: string
  img: string
  description: string
  link: string
  github: string
}