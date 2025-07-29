import { supabase, Project, Application } from './supabase'

// Projects API
export const projectsApi = {
  // Получить все проекты
  async getAll(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  },

  // Создать проект
  async create(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Обновить проект
  async update(id: number, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Удалить проект
  async delete(id: number): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// Applications API
export const applicationsApi = {
  // Получить все заявки
  async getAll(): Promise<Application[]> {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  },

  // Создать заявку
  async create(application: Omit<Application, 'id' | 'created_at' | 'updated_at' | 'status'>): Promise<Application> {
    const { data, error } = await supabase
      .from('applications')
      .insert([{ ...application, status: 'new' }])
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Обновить статус заявки
  async updateStatus(id: number, status: Application['status']): Promise<Application> {
    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Удалить заявку
  async delete(id: number): Promise<void> {
    const { error } = await supabase
      .from('applications')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}