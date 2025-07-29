import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types для TypeScript
export interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  github?: string
  technologies: string[]
  created_at: string
  updated_at: string
}

export interface Application {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'rejected'
  created_at: string
  updated_at: string
}