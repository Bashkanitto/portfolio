'use client'

import React, { useState } from 'react'
import { Button }   from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import { useProjects } from '@/hooks/useProjects'
import { Project, ProjectFormData } from './types'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

const ProjectsAdmin = () => {
  const { projects, loading, error, addProject, updateProject, deleteProject } = useProjects()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    img: '',
    description: '',
    link: '',
    github: '',
  })

  const resetForm = () => {
    setFormData({
      title: '',
      img: '',
      description: '',
      link: '',
      github: '',
    })
    setEditingProject(null)
  }

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project)
      setFormData({
        title: project.title,
        img: project.img,
        description: project.description,
        link: project.link,
        github: project.github || '',
      })
    } else {
      resetForm()
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    resetForm()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingProject) {
        await updateProject(editingProject.id, formData)
      } else {
        await addProject(formData)
      }
      handleCloseModal()
    } catch (err) {
      console.error('Ошибка:', err)
      // Здесь можно добавить toast уведомление
    }
  }

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>

    handleCloseModal()
  }

  const handleInputChange = (field: keyof ProjectFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Управление проектами</h1>
          <p className="text-muted-foreground">
            Всего проектов: {projects.length}
          </p>
        </div>

        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Plus className="h-4 w-4" />
          Добавить проект
        </Button>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        editingProject={editingProject}
        formData={formData}
        onInputChange={handleInputChange}
      />

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            Проектов пока нет
          </p>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Plus className="h-4 w-4" />
            Добавить первый проект
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleOpenModal}
              onDelete={deleteProject}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectsAdmin
