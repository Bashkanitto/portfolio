'use client'

import { useState, useEffect } from 'react'
import { projectsApi } from '@/lib/api'
import { Project } from '@/lib/supabase'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Загрузка проектов
  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await projectsApi.getAll()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки проектов')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // Добавить проект
  const addProject = async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const newProject = await projectsApi.create(projectData)
      setProjects(prev => [newProject, ...prev])
      return newProject
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка создания проекта')
      throw err
    }
  }

  // Обновить проект
  const updateProject = async (id: number, updates: Partial<Project>) => {
    try {
      const updatedProject = await projectsApi.update(id, updates)
      setProjects(prev => prev.map(p => p.id === id ? updatedProject : p))
      return updatedProject
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка обновления проекта')
      throw err
    }
  }

  // Удалить проект
  const deleteProject = async (id: number) => {
    try {
      await projectsApi.delete(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка удаления проекта')
      throw err
    }
  }

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    refetch: fetchProjects
  }
}